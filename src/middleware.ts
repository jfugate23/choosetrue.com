import { NextRequest, NextResponse } from 'next/server';

// ─── Market-level geo routing (used by `/` redirect to /ok or /nj) ────
// NJ, NY, CT, PA, and eastern US states route to the NJ/NYC market.
// OK, TX, KS, AR, MO route to the OKC market.
// Everything else falls through to the neutral landing.
const STATE_TO_MARKET: Record<string, 'ok' | 'nj'> = {
  // NJ/NYC market
  NJ: 'nj',
  NY: 'nj',
  CT: 'nj',
  PA: 'nj',
  // OKC market
  OK: 'ok',
  TX: 'ok',
  KS: 'ok',
  AR: 'ok',
  MO: 'ok',
};

// ─── Location-level geo routing (used by `/locations` redirect) ────
const STATE_TO_SLUG: Record<string, string> = {
  OK: 'oklahoma-city',
  NJ: 'elizabeth-nj',
  NY: 'new-york-city',
  PA: 'elizabeth-nj',
};

const CITY_OVERRIDES: Record<string, string> = {
  // OKC metro (primary market)
  'oklahoma city': 'oklahoma-city',
  'norman': 'norman-ok',
  'edmond': 'edmond-ok',
  'moore': 'moore-ok',
  'midwest city': 'moore-ok',
  'del city': 'moore-ok',
  'stillwater': 'stillwater-ok',
  'yukon': 'oklahoma-city',
  'mustang': 'oklahoma-city',
  // NJ cities
  'newark': 'newark-nj',
  'jersey city': 'jersey-city-nj',
  'elizabeth': 'elizabeth-nj',
  // NYC boroughs
  'new york': 'new-york-city',
  'manhattan': 'manhattan-ny',
  'brooklyn': 'brooklyn-ny',
  'queens': 'queens-ny',
  'bronx': 'bronx-ny',
  'staten island': 'staten-island-ny',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ─── Homepage geo-routing ────────────────────────────────────
  if (pathname === '/') {
    // If user has already chosen (or been routed to) a market, don't redirect.
    if (request.cookies.get('market-chosen')) return NextResponse.next();

    const geo = request.geo;
    if (!geo) return NextResponse.next();

    const region = geo.region || '';
    const market = STATE_TO_MARKET[region];
    if (!market) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/${market}`;
    const response = NextResponse.redirect(url);
    // Remember this choice for 30 days so returning visitors don't bounce
    // through the neutral landing every time.
    response.cookies.set('market-chosen', market, { maxAge: 60 * 60 * 24 * 30, path: '/' });
    return response;
  }

  // ─── Location page geo-routing ───────────────────────────────
  if (pathname === '/locations') {
    if (request.cookies.get('geo-redirected')) return NextResponse.next();

    const geo = request.geo;
    if (!geo) return NextResponse.next();

    const city = (geo.city || '').toLowerCase();
    const region = geo.region || '';

    const slug = CITY_OVERRIDES[city] || STATE_TO_SLUG[region];
    if (!slug) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = `/locations/${slug}`;

    const response = NextResponse.redirect(url);
    response.cookies.set('geo-redirected', '1', { maxAge: 60 * 60 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/locations'],
};
