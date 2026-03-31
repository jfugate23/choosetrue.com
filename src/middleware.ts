import { NextRequest, NextResponse } from 'next/server';

// Map Vercel geo regions/cities to location slugs
const STATE_TO_SLUG: Record<string, string> = {
  NJ: 'elizabeth-nj',
  NY: 'new-york-city',
  PA: 'elizabeth-nj',
};

// More specific city-level overrides
const CITY_OVERRIDES: Record<string, string> = {
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
  'morristown': 'elizabeth-nj',
  'woodbridge': 'elizabeth-nj',
  // NYC boroughs
  'new york': 'new-york-city',
  'manhattan': 'manhattan-ny',
  'brooklyn': 'brooklyn-ny',
  'queens': 'queens-ny',
  'bronx': 'bronx-ny',
  'staten island': 'staten-island-ny',
  // Westchester (near NYC market)
  'white plains': 'new-york-city',
  'yonkers': 'new-york-city',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== '/locations') return NextResponse.next();
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

export const config = {
  matcher: '/locations',
};
