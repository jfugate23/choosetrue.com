'use client';

import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export default function NJHomePage() {
  return (
    <MarketHomePage
      market={MARKET_NJ}
      testimonials={[]}
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
