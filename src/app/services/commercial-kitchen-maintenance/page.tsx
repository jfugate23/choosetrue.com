import type { Metadata } from 'next';
import GrowthServicePage from '@/components/GrowthServicePage';
import { GROWTH_SERVICES } from '@/lib/growth-services';

const content = GROWTH_SERVICES['commercial-kitchen-maintenance'];
export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.description,
  alternates: { canonical: '/services/commercial-kitchen-maintenance' },
  robots: { index: true, follow: true },
};

export default function KitchenMaintenancePage() {
  return <GrowthServicePage content={content} />;
}
