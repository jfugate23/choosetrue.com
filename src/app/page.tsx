import type { Metadata } from 'next';
import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    absolute: 'NJ & NYC Commercial Kitchen Equipment Repair & Local Law 38 Service | True Commercial Service',
  },
  description: 'Commercial kitchen equipment repair, ventilation, and NYC Local Law 38 pollution control service across Northern NJ and all five boroughs of NYC. 24/7 emergency response.',
  alternates: {
    canonical: 'https://choosetrue.com/',
  },
  openGraph: {
    title: 'NJ & NYC Commercial Kitchen Equipment Repair | True Commercial Service',
    description: 'Commercial kitchen equipment repair, ventilation, and Local Law 38 compliance across Northern NJ and NYC. 24/7 emergency.',
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
          Your NYC kitchen
          <br />
          <span className="text-gradient">runs on compliance.</span>
        </>
      }
      heroSubhead="Commercial kitchen equipment repair, ventilation balancing, and Local Law 38 pollution control service across Northern NJ and all five boroughs of NYC."
    />
  );
}
