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
    const { source, name, business, phone, email, meta } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone required' }, { status: 400 });
    }

    const lead = {
      source: source || 'website',
      name,
      business: business || '',
      phone,
      email: email || '',
      meta: meta || null,
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
        // Don't fail the form over a mail hiccup — the lead is in the logs.
        console.error('LEAD EMAIL FAILED:', res.status, await res.text());
      }
    } else {
      console.warn('RESEND_API_KEY not set — lead logged but no email alert sent.');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
