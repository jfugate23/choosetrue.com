import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PROFILES } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: 'True Commercial Service | Commercial Kitchen Equipment Repair',
    template: '%s | True Commercial Service',
  },
  description: 'Commercial kitchen equipment repair serving Oklahoma City, Norman, Edmond, and Central Oklahoma. Refrigeration, cooking, ventilation, ice machines, espresso. 24/7 emergency service.',
  keywords: ['commercial kitchen equipment repair', 'restaurant equipment repair', 'commercial refrigeration repair', 'Oklahoma City OK', 'Norman OK', 'Edmond OK', 'ice machine repair', 'walk-in cooler repair', 'hood ventilation service', 'kitchen air balancing'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'True Commercial Service | Commercial Kitchen Equipment Repair',
    description: 'Commercial kitchen equipment repair. Done Right. 24/7 Emergency Service.',
    url: 'https://choosetrue.com',
    siteName: 'True Commercial Service',
    type: 'website',
    images: [{ url: 'https://choosetrue.com/images/logo.png' }],
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://choosetrue.com',
  name: 'True Commercial Service LLC',
  description: 'Commercial foodservice equipment repair, maintenance, and ventilation services. Serving restaurants, supermarkets, and commercial kitchens across the Oklahoma City metro.',
  url: 'https://choosetrue.com',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 35.4676, longitude: -97.5164 },
    geoRadius: '80467',
    description: '50 mile radius around Oklahoma City, OK 73102',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oklahoma City',
    addressRegion: 'OK',
    postalCode: '73102',
    addressCountry: 'US',
  },
  serviceType: [
    'Commercial Refrigeration Repair',
    'Commercial Cooking Equipment Repair',
    'Ice Machine Repair',
    'Commercial Kitchen Ventilation Service',
    'Walk-In Cooler Repair',
    'Commercial Dishwasher Repair',
    'Espresso Machine Repair',
    'Combi Oven Repair',
    'Preventive Maintenance Agreements',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  image: 'https://choosetrue.com/images/logo.png',
  telephone: '(405) 292-4510',
  sameAs: Object.values(PROFILES).filter(Boolean),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial Kitchen Equipment Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Equipment Repair', description: '24/7 emergency response for commercial kitchen equipment failures' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preventive Maintenance', description: 'Scheduled maintenance to prevent equipment failures and extend equipment life' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Ventilation & Air Balancing', description: 'CaptiveAire hood systems, makeup air units, exhaust fan service, and air balancing' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-screen bg-navy-300 text-white antialiased">
        <Header />
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
