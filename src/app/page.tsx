import type { Metadata } from 'next';
import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    absolute: 'NJ & NYC Commercial Kitchen Equipment & HVAC Repair | True Commercial Service',
  },
  description: 'Commercial cooking equipment, refrigeration, and HVAC repair across Northern NJ and all five boroughs of NYC. Fast diagnostics, transparent tracking, and 24/7 emergency response.',
  alternates: {
    canonical: 'https://choosetrue.com/',
  },
  openGraph: {
    title: 'NJ & NYC Commercial Kitchen Equipment & HVAC Repair | True Commercial Service',
    description: 'Commercial cooking equipment, refrigeration, and HVAC repair across Northern NJ and NYC. 24/7 emergency response.',
    url: 'https://choosetrue.com/',
    siteName: 'True Commercial Service',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <MarketHomePage
      market={MARKET_NJ}
      heroHeadline={
        <>
          Cooking, cooling &amp; HVAC
          <br />
          <span className="text-gradient">fixed fast.</span>
        </>
      }
      heroSubhead="Commercial cooking equipment, refrigeration, and HVAC repair across Northern NJ and all five boroughs of NYC — real diagnostics, transparent tracking, and 24/7 emergency response."
    />
  );
}
