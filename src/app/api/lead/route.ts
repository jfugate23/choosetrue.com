import { NextRequest, NextResponse } from 'next/server';

// Simple lead capture endpoint
// In production, this would save to a database (Supabase) and send an alert SMS/email
// For now, it logs the lead and could forward to an email service

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { source, name, business, phone, email, meta } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone required' }, { status: 400 });
    }

    // Log the lead (visible in Vercel logs)
    console.log('NEW LEAD:', JSON.stringify({
      source,
      name,
      business,
      phone,
      email,
      meta,
      timestamp: new Date().toISOString(),
    }));

    // TODO: Save to Supabase leads table
    // TODO: Send alert SMS to owner via Twilio
    // TODO: Send confirmation email to lead

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
