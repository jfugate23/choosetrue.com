import { NextRequest, NextResponse } from 'next/server';

// ─── Location-level geo routing (used by `/locations` redirect) ────
// Send visitors from the generic /locations page to the nearest city
// landing page based on their geo. Everything else falls through.
const STATE_TO_SLUG: Record<string, string> = {
  NJ: 'elizabeth-nj',
  NY: 'new-york-city',
  PA: 'elizabeth-nj',
};

const CITY_OVERRIDES: Record<string, string> = {
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
  matcher: ['/locations'],
};
