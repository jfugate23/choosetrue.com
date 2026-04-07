import { NextRequest, NextResponse } from 'next/server';

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
  // NJ cities (background)
  'newark': 'newark-nj',
  'jersey city': 'jersey-city-nj',
  'elizabeth': 'elizabeth-nj',
  // NYC boroughs (background)
  'new york': 'new-york-city',
  'manhattan': 'manhattan-ny',
  'brooklyn': 'brooklyn-ny',
  'queens': 'queens-ny',
  'bronx': 'bronx-ny',
  'staten island': 'staten-island-ny',
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
