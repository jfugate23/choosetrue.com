import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation Energy Calculator',
  description: 'Estimate the annual energy cost associated with kitchen exhaust and makeup air. Enter hood size, operating hours, and utility rates.',
  alternates: { canonical: '/tools/energy-calculator' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
