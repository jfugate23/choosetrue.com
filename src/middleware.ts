import { NextRequest, NextResponse } from 'next/server';

// Map Vercel geo regions/cities to location slugs
// Vercel provides: request.geo.city, request.geo.region (state code), request.geo.country
const STATE_TO_SLUG: Record<string, string> = {
  OK: 'oklahoma-city',
  NJ: 'elizabeth-nj',
  NY: 'new-york-city',
  GA: 'atlanta',
  CT: 'new-york-city', // close enough to NYC market
  PA: 'elizabeth-nj',  // eastern PA near NJ market
};

// More specific city-level overrides
const CITY_OVERRIDES: Record<string, string> = {
  // OKC metro
  'norman': 'norman-ok',
  'edmond': 'edmond-ok',
  'moore': 'moore-ok',
  'midwest city': 'moore-ok',
  'stillwater': 'stillwater-ok',
  // NJ cities
  'newark': 'newark-nj',
  'jersey city': 'jersey-city-nj',
  'hoboken': 'jersey-city-nj',
  'paterson': 'paterson-nj',
  'passaic': 'paterson-nj',
  'clifton': 'paterson-nj',
  'new brunswick': 'new-brunswick-nj',
  'edison': 'new-brunswick-nj',
  'elizabeth': 'elizabeth-nj',
  'union': 'union-county-nj',
  'westfield': 'union-county-nj',
  'plainfield': 'union-county-nj',
  // NYC boroughs (Vercel usually reports borough or "New York")
  'new york': 'new-york-city',
  'manhattan': 'manhattan-ny',
  'brooklyn': 'brooklyn-ny',
  'queens': 'queens-ny',
  'bronx': 'bronx-ny',
  'staten island': 'staten-island-ny',
  // Atlanta metro
  'atlanta': 'atlanta',
  'marietta': 'marietta-ga',
  'decatur': 'decatur-ga',
  'roswell': 'roswell-ga',
  'alpharetta': 'roswell-ga',
  'sandy springs': 'decatur-ga',
  'smyrna': 'marietta-ga',
  'kennesaw': 'marietta-ga',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only geo-redirect on /locations (the listing page), not sub-pages
  if (pathname !== '/locations') return NextResponse.next();

  // Don't redirect if user already visited (cookie prevents redirect loop)
  if (request.cookies.get('geo-redirected')) return NextResponse.next();

  const geo = request.geo;
  if (!geo) return NextResponse.next();

  const city = (geo.city || '').toLowerCase();
  const region = geo.region || '';

  // Try city-level match first, then state-level
  const slug = CITY_OVERRIDES[city] || STATE_TO_SLUG[region];

  if (!slug) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/locations/${slug}`;

  const response = NextResponse.redirect(url);
  // Set cookie so we don't redirect again if they navigate back to /locations
  response.cookies.set('geo-redirected', '1', { maxAge: 60 * 60 }); // 1 hour
  return response;
}

export const config = {
  matcher: '/locations',
};
