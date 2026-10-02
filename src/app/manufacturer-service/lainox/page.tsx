import type { Metadata } from 'next';
import OvenBrandPage from '@/components/OvenBrandPage';

export const metadata: Metadata = {
  title: 'Lainox Combi Oven Repair | NYC & NJ',
  description: 'Lainox commercial combi oven service in NYC, Hudson County and Union County. Cooking faults, controls, steam and cleaning-cycle problems. Contact TCS.',
  alternates: { canonical: '/manufacturer-service/lainox' },
};
export default function LainoxPage() { return <OvenBrandPage brand="lainox" />; }
