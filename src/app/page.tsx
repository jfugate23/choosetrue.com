import type { Metadata } from 'next';
import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    absolute: 'Kitchen Equipment, Ventilation & HVAC Service | NYC & NJ',
  },
  description: 'Commercial cooking equipment repair, kitchen ventilation, and HVAC service across NYC and North Jersey. Troubleshooting, repairs, and maintenance from TCS.',
  alternates: {
    canonical: 'https://choosetrue.com/',
  },
  openGraph: {
    title: 'Kitchen Equipment, Ventilation & HVAC | True Commercial Service',
    description: 'Commercial kitchen equipment, ventilation, and HVAC service across NYC and North Jersey.',
    url: 'https://choosetrue.com/',
    siteName: 'True Commercial Service',
    type: 'website',
  },
};

export default function HomePage() {
  return <MarketHomePage market={MARKET_NJ} />;
}
