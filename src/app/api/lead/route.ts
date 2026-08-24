import { NextRequest, NextResponse } from 'next/server';

// Lead capture endpoint.
// Sends an instant email alert via Resend (https://resend.com).
// Required env (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY   — Resend API key
//   LEAD_ALERT_EMAIL — where lead alerts are delivered (defaults to service@choosetrue.com)
//   LEAD_FROM_EMAIL  — verified sender (defaults to leads@choosetrue.com; the
//                      choosetrue.com domain must be verified in Resend)
// If the API key is missing, the lead is still logged to Vercel logs and the
// form still succeeds — we never drop a lead on the floor because of config.

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

    // Always log — visible in Vercel logs as a backstop.
    console.log('NEW LEAD:', JSON.stringify(lead));

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const to = process.env.LEAD_ALERT_EMAIL || 'service@choosetrue.com';
      const from = process.env.LEAD_FROM_EMAIL || 'True Commercial Service <leads@choosetrue.com>';

      const html = `
        <h2>New lead from choosetrue.com</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(lead.name)}</td></tr>
          <tr><td><strong>Phone</strong></td><td><a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a></td></tr>
          <tr><td><strong>Business</strong></td><td>${escapeHtml(lead.business)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(lead.email)}</td></tr>
          <tr><td><strong>Source page</strong></td><td>${escapeHtml(lead.source)}</td></tr>
          <tr><td><strong>Details</strong></td><td><pre style="margin:0">${escapeHtml(lead.meta ? JSON.stringify(lead.meta, null, 2) : '—')}</pre></td></tr>
          <tr><td><strong>Received</strong></td><td>${lead.timestamp}</td></tr>
        </table>`;

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
      console.warn('RESEND_API_KEY not set — lead logged but no email alert sent.');
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
