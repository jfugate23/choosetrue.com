import type { Metadata } from 'next';
import MarketHomePage from '@/components/MarketHomePage';
import { MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    absolute: 'Kitchen Hood Airflow & Exhaust Fan Repair | NYC & North Jersey',
  },
  description: 'Commercial kitchen hood airflow diagnostics, exhaust fan repair, makeup air unit service, and ventilation controls across NYC and North Jersey. Owner-operated service.',
  alternates: {
    canonical: 'https://choosetrue.com/',
  },
  openGraph: {
    title: 'Kitchen Hood Airflow & Exhaust Fan Repair | True Commercial Service',
    description: 'Commercial kitchen ventilation diagnostics and repair across NYC and North Jersey.',
    url: 'https://choosetrue.com/',
    siteName: 'True Commercial Service',
    type: 'website',
  },
};

export default function HomePage() {
  return <MarketHomePage market={MARKET_NJ} />;
}
