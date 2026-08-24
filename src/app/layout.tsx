import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallTracking from '@/components/CallTracking';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import { PROFILES, MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://choosetrue.com'),
  title: {
    default: 'True Commercial Service | Kitchen Ventilation: NYC & North Jersey',
    template: '%s | True Commercial Service',
  },
  description: 'Commercial kitchen hood airflow diagnostics, exhaust fan repair, makeup air unit service, and ventilation controls across NYC and North Jersey.',
  keywords: ['commercial kitchen exhaust fan repair', 'makeup air unit repair', 'kitchen hood airflow', 'kitchen air balancing', 'commercial kitchen ventilation', 'NYC', 'North Jersey'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'True Commercial Service | Commercial Kitchen Ventilation',
    description: 'Hood airflow diagnostics, exhaust fan repair, makeup air service, and ventilation controls across NYC and North Jersey.',
    url: 'https://choosetrue.com',
    siteName: 'True Commercial Service',
    type: 'website',
    images: [{ url: 'https://choosetrue.com/images/logo.png' }],
  },
};

// Parent brand Organization: the NJ/NYC LocalBusiness references this
// via parentOrganization in its own layout, letting Google understand the
// location is part of the same brand entity.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://choosetrue.com#organization',
  name: 'True Commercial Service LLC',
  legalName: 'True Commercial Service LLC',
  description: 'Commercial kitchen ventilation diagnostics and repair company serving Northern New Jersey and New York City.',
  url: 'https://choosetrue.com',
  logo: 'https://choosetrue.com/images/logo.png',
  image: 'https://choosetrue.com/images/logo.png',
  sameAs: Object.values(PROFILES).filter(Boolean),
  location: [
    {
      '@type': 'LocalBusiness',
      '@id': MARKET_NJ.schemaId,
      name: `${MARKET_NJ.name}: NJ & NYC Metro`,
      telephone: MARKET_NJ.phone,
      url: MARKET_NJ.homeUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: MARKET_NJ.address.city,
        addressRegion: MARKET_NJ.address.region,
        postalCode: MARKET_NJ.address.postalCode,
        addressCountry: MARKET_NJ.address.country,
      },
      areaServed: ['New York City', 'Northern New Jersey'],
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
        <Analytics />
        <CallTracking />
        <GoogleAdsTag />
      </body>
    </html>
  );
}
