import { Metadata } from 'next';
import { MARKET_OK } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Oklahoma City Commercial Kitchen Equipment Repair | True Commercial Service',
  description: 'Commercial kitchen equipment repair serving Oklahoma City, Norman, Edmond, Moore, and Central Oklahoma. Cooking, refrigeration, HVAC, ventilation, espresso, ice machines. 24/7 emergency.',
  alternates: {
    canonical: 'https://choosetrue.com/ok',
  },
  openGraph: {
    title: 'Oklahoma City Commercial Kitchen Equipment Repair | True Commercial Service',
    description: 'Commercial kitchen equipment repair serving Oklahoma City, Norman, Edmond, and Central Oklahoma. 24/7 emergency service.',
    url: 'https://choosetrue.com/ok',
    siteName: 'True Commercial Service',
    type: 'website',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': MARKET_OK.schemaId,
  name: `${MARKET_OK.name} — Oklahoma City Metro`,
  legalName: MARKET_OK.legal,
  description: MARKET_OK.description,
  url: MARKET_OK.homeUrl,
  telephone: MARKET_OK.phone,
  email: MARKET_OK.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: MARKET_OK.address.street,
    addressLocality: MARKET_OK.address.city,
    addressRegion: MARKET_OK.address.region,
    postalCode: MARKET_OK.address.postalCode,
    addressCountry: MARKET_OK.address.country,
  },
  areaServed: MARKET_OK.serviceAreaCities.map((city) => ({
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

export default function OKLayout({ children }: { children: React.ReactNode }) {
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
