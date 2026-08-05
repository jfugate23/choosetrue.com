import type { Metadata } from 'next';
import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    absolute: 'Fast Commercial Kitchen & HVAC Repair — NJ & NYC | True Commercial Service',
  },
  description: 'Fast commercial kitchen equipment and HVAC repair across Northern NJ and all five boroughs of NYC. 24/7 emergency response, factory-trained techs, and preventive maintenance plans.',
  alternates: {
    canonical: 'https://choosetrue.com/',
  },
  openGraph: {
    title: 'Fast Commercial Kitchen & HVAC Repair — NJ & NYC | True Commercial Service',
    description: 'Fast commercial kitchen equipment and HVAC repair across Northern NJ and NYC. 24/7 emergency response and preventive maintenance.',
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
          When your kitchen goes down,
          <br />
          <span className="text-gradient">we answer.</span>
        </>
      }
      heroSubhead="Fast commercial kitchen equipment and HVAC repair across Northern NJ and all five boroughs of NYC. 24/7 emergency response, factory-trained techs, and preventive maintenance plans that keep you running."
    />
  );
}
