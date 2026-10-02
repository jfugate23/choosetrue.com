import type { Metadata } from 'next';
import OvenBrandPage from '@/components/OvenBrandPage';

export const metadata: Metadata = {
  title: 'Cuppone Pizza Oven Repair | NYC & NJ',
  description: 'Cuppone commercial pizza oven repair in NYC, Hudson County and Union County. Power, heating, rotating-deck and control faults. Request TCS service.',
  alternates: { canonical: '/manufacturer-service/cuppone' },
};
export default function CupponePage() { return <OvenBrandPage brand="cuppone" />; }
