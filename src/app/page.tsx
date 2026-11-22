import { withPageMetadata } from '@/lib/search-metadata';
import type { Metadata } from 'next';
import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = withPageMetadata({
  title: {
    absolute: 'Kitchen Exhaust Fan & Ventilation Repair NYC & NJ | TCS',
  },
  description: 'Restaurant exhaust fans, make-up air, and hood controls repaired across NYC and North Jersey. Veteran-owned. Emergency after-hours response. Call (646) 942-9394.',
  alternates: {
    canonical: 'https://choosetrue.com/',
  },
  openGraph: {
    title: 'Kitchen Exhaust Fan & Ventilation Repair NYC & NJ | TCS',
    description: 'Commercial kitchen equipment, ventilation, and HVAC service across NYC and North Jersey.',
    url: 'https://choosetrue.com/',
    siteName: 'True Commercial Service',
    type: 'website',
  },
});

export default function HomePage() {
  return <MarketHomePage market={MARKET_NJ} />;
}
