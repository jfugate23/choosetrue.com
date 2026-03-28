import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation Energy Waste Calculator | True Commercial Service',
  description: 'Free tool: calculate how much money your restaurant is losing through unbalanced kitchen ventilation. Enter your hood size and utility rates to see annual waste.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
