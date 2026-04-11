import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PROFILES, MARKET_OK, MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: 'True Commercial Service | Commercial Kitchen Equipment Repair — OKC & NYC Metro',
    template: '%s | True Commercial Service',
  },
  description: 'Commercial kitchen equipment repair, ventilation, and pollution control service. Serving Oklahoma City metro and the NJ/NYC metro with 24/7 emergency response.',
  keywords: ['commercial kitchen equipment repair', 'restaurant equipment repair', 'commercial refrigeration repair', 'Oklahoma City OK', 'Elizabeth NJ', 'New York City', 'ice machine repair', 'walk-in cooler repair', 'hood ventilation service', 'kitchen air balancing', 'NYC Local Law 38 pollution control'],
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
    description: 'Commercial kitchen equipment repair. Done Right. 24/7 Emergency Service in OKC and NJ/NYC.',
    url: 'https://choosetrue.com',
    siteName: 'True Commercial Service',
    type: 'website',
    images: [{ url: 'https://choosetrue.com/images/logo.png' }],
  },
};

// Parent brand Organization — each market's LocalBusiness references this
// via parentOrganization in its own layout. This lets Google understand
// both locations are part of the same brand entity.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://choosetrue.com#organization',
  name: 'True Commercial Service LLC',
  legalName: 'True Commercial Service LLC',
  description: 'Commercial kitchen equipment repair, ventilation, and pollution control company serving the Oklahoma City and NJ/NYC metropolitan areas.',
  url: 'https://choosetrue.com',
  logo: 'https://choosetrue.com/images/logo.png',
  image: 'https://choosetrue.com/images/logo.png',
  sameAs: Object.values(PROFILES).filter(Boolean),
  location: [
    {
      '@type': 'LocalBusiness',
      '@id': MARKET_OK.schemaId,
      name: `${MARKET_OK.name} — Oklahoma City Metro`,
      telephone: MARKET_OK.phone,
      url: MARKET_OK.homeUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: MARKET_OK.address.street,
        addressLocality: MARKET_OK.address.city,
        addressRegion: MARKET_OK.address.region,
        postalCode: MARKET_OK.address.postalCode,
        addressCountry: MARKET_OK.address.country,
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': MARKET_NJ.schemaId,
      name: `${MARKET_NJ.name} — NJ & NYC Metro`,
      telephone: MARKET_NJ.phone,
      url: MARKET_NJ.homeUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: MARKET_NJ.address.street,
        addressLocality: MARKET_NJ.address.city,
        addressRegion: MARKET_NJ.address.region,
        postalCode: MARKET_NJ.address.postalCode,
        addressCountry: MARKET_NJ.address.country,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
