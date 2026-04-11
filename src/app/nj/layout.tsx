import { Metadata } from 'next';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: 'NJ & NYC Commercial Kitchen Equipment Repair & Local Law 38 Service | True Commercial Service',
  description: 'Commercial kitchen equipment repair, ventilation, and NYC Local Law 38 pollution control service across Northern NJ and all five boroughs of NYC. 24/7 emergency response.',
  alternates: {
    canonical: 'https://choosetrue.com/nj',
  },
  openGraph: {
    title: 'NJ & NYC Commercial Kitchen Equipment Repair | True Commercial Service',
    description: 'Commercial kitchen equipment repair, ventilation, and Local Law 38 compliance across Northern NJ and NYC. 24/7 emergency.',
    url: 'https://choosetrue.com/nj',
    siteName: 'True Commercial Service',
    type: 'website',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': MARKET_NJ.schemaId,
  name: `${MARKET_NJ.name} — NJ & NYC Metro`,
  legalName: MARKET_NJ.legal,
  description: MARKET_NJ.description,
  url: MARKET_NJ.homeUrl,
  telephone: MARKET_NJ.phone,
  email: MARKET_NJ.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: MARKET_NJ.address.street,
    addressLocality: MARKET_NJ.address.city,
    addressRegion: MARKET_NJ.address.region,
    postalCode: MARKET_NJ.address.postalCode,
    addressCountry: MARKET_NJ.address.country,
  },
  areaServed: MARKET_NJ.serviceAreaCities.map((city) => ({
    '@type': 'City',
    name: city,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
};

export default function NJLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
