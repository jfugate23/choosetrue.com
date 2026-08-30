import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ManufacturerServicePage from '@/components/ManufacturerServicePage';
import { getManufacturer, MANUFACTURERS } from '@/lib/manufacturer-data';

export function generateStaticParams() {
  return MANUFACTURERS.map((manufacturer) => ({ brand: manufacturer.slug }));
}

export function generateMetadata({ params }: { params: { brand: string } }): Metadata {
  const manufacturer = getManufacturer(params.brand);
  if (!manufacturer) return {};

  return {
    title: manufacturer.metaTitle,
    description: manufacturer.metaDescription,
    alternates: { canonical: `/manufacturer-service/${manufacturer.slug}` },
  };
}

export default function ManufacturerPage({ params }: { params: { brand: string } }) {
  const manufacturer = getManufacturer(params.brand);
  if (!manufacturer) notFound();

  return <ManufacturerServicePage manufacturer={manufacturer} />;
}
