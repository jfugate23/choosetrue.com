import { NextRequest, NextResponse } from 'next/server';

// Lead capture endpoint.
// Sends an instant email alert via Resend (https://resend.com).
// Required env (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  : Resend API key
//   LEAD_ALERT_EMAIL: where lead alerts are delivered (defaults to service@choosetrue.com)
//   LEAD_FROM_EMAIL : verified sender (defaults to service@choosetrue.com; the
//                      choosetrue.com domain must be verified in Resend)
// If the API key is missing, the lead is still logged to Vercel logs and the
// form still succeeds: we never drop a lead on the floor because of config.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { source, meta } = body;

    // Honeypot: bots commonly fill this hidden field. Return success so they
    // do not retry, but do not log or send the submission.
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const name = safeText(body.name, 100);
    const business = safeText(body.business, 150);
    const phone = safeText(body.phone, 50);
    const email = safeText(body.email, 150);

    if (!name || !business || !phone) {
      return NextResponse.json({ error: 'Name, business, and phone are required.' }, { status: 400 });
    }

    const lead = {
      source: safeText(source, 200) || 'website',
      name,
      business: business || '',
      phone,
      email: email || '',
      meta: meta && typeof meta === 'object' ? meta : null,
      timestamp: new Date().toISOString(),
    };

    // Always log: visible in Vercel logs as a backstop.
    console.log('NEW LEAD:', JSON.stringify(lead));

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const to = process.env.LEAD_ALERT_EMAIL || 'service@choosetrue.com';
      const from = process.env.LEAD_FROM_EMAIL || 'True Commercial Service <service@choosetrue.com>';

      const leadMeta = lead.meta as Record<string, unknown> | null;
      const zip = safeText(leadMeta?.zip, 20);
      const serviceType = safeText(leadMeta?.serviceType, 50);
      const urgency = safeText(leadMeta?.urgency, 50);
      const manufacturer = safeText(leadMeta?.manufacturer, 100);
      const details = safeText(leadMeta?.details, 2000);
      const serviceLabel = SERVICE_LABELS[serviceType] || serviceType || 'Not provided';
      const urgencyLabel = URGENCY_LABELS[urgency] || urgency || 'Not provided';
      const receivedAt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(lead.timestamp));

      const html = `
        <div style="margin:0;background:#f1f5f9;padding:24px 12px;font-family:Arial,sans-serif;color:#0f172a">
          <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
            <div style="background:#0f172a;padding:22px 24px;border-bottom:4px solid #f59e0b">
              <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fbbf24">True Commercial Service</div>
              <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;color:#ffffff">New website service request</h1>
            </div>

            <div style="padding:22px 24px">
              <div style="margin-bottom:20px">
                <a href="tel:${escapeHtml(lead.phone)}" style="display:inline-block;background:#f59e0b;color:#0f172a;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:8px">Call ${escapeHtml(lead.phone)}</a>
                ${lead.email ? `<a href="mailto:${escapeHtml(lead.email)}" style="display:inline-block;margin-left:8px;background:#e2e8f0;color:#0f172a;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:8px">Email customer</a>` : ''}
              </div>

              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.45">
                ${detailRow('Name', lead.name)}
                ${detailRow('Business', lead.business)}
                ${detailRow('Phone', lead.phone, `tel:${lead.phone}`)}
                ${detailRow('Email', lead.email || 'Not provided', lead.email ? `mailto:${lead.email}` : '')}
                ${detailRow('Service ZIP', zip || 'Not provided')}
                ${detailRow('Primary issue', serviceLabel)}
                ${detailRow('Urgency', urgencyLabel)}
                ${detailRow('Manufacturer', manufacturer || 'Not provided')}
              </table>

              <div style="margin-top:20px">
                <div style="margin-bottom:7px;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#64748b">What the system is doing</div>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:14px;white-space:pre-wrap;font-size:15px;line-height:1.5">${escapeHtml(details || 'No details provided')}</div>
              </div>

              <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;line-height:1.5;color:#64748b">
                Submitted from ${escapeHtml(lead.source)}<br>
                Received ${escapeHtml(receivedAt)} ET
              </div>
            </div>
          </div>
        </div>`;

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `📞 New lead: ${lead.name}${lead.business ? ` (${lead.business})` : ''}`,
          html,
          ...(lead.email ? { reply_to: [lead.email] } : {}),
        }),
      });

      if (!res.ok) {
        console.error('LEAD EMAIL FAILED:', res.status, await res.text());
        return NextResponse.json(
          { error: 'The request could not be delivered. Please call (646) 942-9394.' },
          { status: 503 }
        );
      }
    } else {
      console.warn('RESEND_API_KEY not set: lead logged but no email alert sent.');
      return NextResponse.json(
        { error: 'Online requests are temporarily unavailable. Please call (646) 942-9394.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function safeText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function detailRow(label: string, value: string, href = ''): string {
  const safeValue = escapeHtml(value);
  const displayValue = href
    ? `<a href="${escapeHtml(href)}" style="color:#2563eb;text-decoration:underline">${safeValue}</a>`
    : safeValue;

  return `<tr>
    <td style="width:35%;padding:9px 12px 9px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;font-weight:700;color:#475569">${escapeHtml(label)}</td>
    <td style="padding:9px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;color:#0f172a">${displayValue}</td>
  </tr>`;
}

const SERVICE_LABELS: Record<string, string> = {
  'hood-airflow': 'Hood airflow / smoke capture',
  'exhaust-fan': 'Exhaust fan repair',
  'makeup-air': 'Makeup air unit issue',
  controls: 'VFD / DCV / controls',
  'pollution-control': 'ESP / pollution-control issue',
  manufacturer: 'Manufacturer warranty / startup',
  other: 'Other commercial equipment referral',
};

const URGENCY_LABELS: Record<string, string> = {
  down: 'System is down now',
  operating: 'Operating with a problem',
  planning: 'Planning / quote',
};
