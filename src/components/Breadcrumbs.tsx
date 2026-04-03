'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map slugs to readable names
const SLUG_NAMES: Record<string, string> = {
  'services': 'Services',
  'locations': 'Locations',
  'blog': 'Blog',
  'about': 'About',
  'careers': 'Careers',
  'contact': 'Contact',
  'schedule-service': 'Schedule Service',
  'who-we-serve': 'Who We Serve',
  'tools': 'Tools',
  'kitchen-ventilation': 'Kitchen Ventilation',
  'pollution-control': 'Pollution Control',
  'energy-calculator': 'Energy Calculator',
  'cooking-equipment': 'Cooking Equipment',
  'refrigeration': 'Refrigeration',
  'hvac': 'HVAC',
  'beverage-equipment': 'Beverage Equipment',
  'espresso-machines': 'Espresso Machines',
  'preventive-maintenance': 'Preventive Maintenance',
  'restaurants': 'Restaurants',
  'grocery-stores': 'Grocery Stores',
  'schools-institutions': 'Schools & Institutions',
  'hotels': 'Hotels & Hospitality',
  // Location slugs
  'elizabeth-nj': 'Elizabeth, NJ',
  'newark-nj': 'Newark, NJ',
  'jersey-city-nj': 'Jersey City, NJ',
  'union-county-nj': 'Union County, NJ',
  'paterson-nj': 'Paterson, NJ',
  'new-brunswick-nj': 'New Brunswick, NJ',
  'morristown-nj': 'Morristown, NJ',
  'woodbridge-nj': 'Woodbridge, NJ',
  'new-york-city': 'New York City',
  'manhattan-ny': 'Manhattan, NY',
  'brooklyn-ny': 'Brooklyn, NY',
  'queens-ny': 'Queens, NY',
  'bronx-ny': 'The Bronx, NY',
  'staten-island-ny': 'Staten Island, NY',
};

function slugToName(slug: string): string {
  return SLUG_NAMES[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [{ name: 'Home', href: '/' }];

  let path = '';
  for (const segment of segments) {
    path += `/${segment}`;
    crumbs.push({ name: slugToName(segment), href: path });
  }

  // Schema.org BreadcrumbList
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `https://choosetrue.com${crumb.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 lg:px-6 pt-24 lg:pt-32">
        <ol className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap">
          {crumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-slate-600">/</span>}
              {i === crumbs.length - 1 ? (
                <span className="text-slate-400">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-amber-400 transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
