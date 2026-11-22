import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallTracking from '@/components/CallTracking';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import { ORGANIZATION_ID, WEBSITE_ID } from '@/lib/search-metadata';
import { PROFILES, MARKET_NJ, NYC_BOROUGHS, NJ_COUNTIES, BUSINESS_HOURS } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://choosetrue.com'),
  title: {
    default: 'Kitchen Exhaust Fan & Ventilation Repair NYC & NJ | TCS',
    template: '%s | TCS',
  },
  description: 'Restaurant exhaust fans, make-up air units, hood controls, cooking equipment, and light commercial HVAC repaired across NYC and North Jersey. Emergency after-hours response.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'True Commercial Service | Kitchen Ventilation Repair NYC & NJ',
    description: 'Restaurant exhaust fans, make-up air, hood controls, cooking equipment, and light commercial HVAC repaired across NYC and North Jersey.',
    url: 'https://choosetrue.com',
    siteName: 'True Commercial Service',
    type: 'website',
    images: [{ url: 'https://choosetrue.com/images/logo.png' }],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

// Stable business and website identities shared by all service pages.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'True Commercial Service LLC',
  legalName: 'True Commercial Service LLC',
  description: 'Veteran-owned commercial kitchen ventilation, cooking equipment, and light commercial HVAC repair company serving New York City and North Jersey.',
  url: 'https://choosetrue.com',
  logo: 'https://choosetrue.com/images/logo.png',
  image: 'https://choosetrue.com/images/logo.png',
  sameAs: Object.values(PROFILES).filter(Boolean),
  location: [
    {
      '@type': 'HVACBusiness',
      '@id': MARKET_NJ.schemaId,
      name: MARKET_NJ.name,
      legalName: MARKET_NJ.legal,
      description: 'Commercial kitchen ventilation repair (exhaust fans, make-up air units, hood controls, VFDs, airflow balancing), commercial cooking equipment repair, and light commercial HVAC across NYC and North Jersey. Veteran-owned. Emergency after-hours response.',
      email: MARKET_NJ.email,
      parentOrganization: { '@id': ORGANIZATION_ID },
      telephone: MARKET_NJ.phone,
      url: MARKET_NJ.homeUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: MARKET_NJ.address.city,
        addressRegion: MARKET_NJ.address.region,
        postalCode: MARKET_NJ.address.postalCode,
        addressCountry: MARKET_NJ.address.country,
      },
      areaServed: [
        ...NYC_BOROUGHS.map((name) => ({ '@type': 'City', name: name.replace(/^The /, '') })),
        ...NJ_COUNTIES.map((name) => ({ '@type': 'AdministrativeArea', name: `${name}, NJ` })),
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BUSINESS_HOURS.days,
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
      knowsAbout: ['Kitchen exhaust fan repair', 'Make-up air unit repair', 'Hood control panels and interlocks', 'Demand-control kitchen ventilation', 'Kitchen hood airflow testing and balancing', 'Commercial cooking equipment repair', 'Commercial HVAC repair'],
      slogan: "We repair. We don't clean.",
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: MARKET_NJ.homeUrl,
  name: MARKET_NJ.name,
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-US',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Reuse the data layer initialized by the existing Ads and Analytics integration. */}
        <script
          id="google-tag-manager-data-layer"
          dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || [];' }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PS6KXJD2"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
