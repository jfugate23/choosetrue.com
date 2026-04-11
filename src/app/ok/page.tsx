'use client';

import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_OK, TESTIMONIALS } from '@/lib/data';

export default function OKHomePage() {
  return <MarketHomePage market={MARKET_OK} testimonials={TESTIMONIALS} />;
}
