import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VERTICALS } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return VERTICALS.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const v = VERTICALS.find((x) => x.slug === params.slug);
  if (!v) return {};
  const titles: Record<string, string> = {
    restaurants: 'Kitchen Ventilation for Restaurants',
    'grocery-stores': 'Grocery Kitchen Ventilation',
    'schools-institutions': 'Institutional Kitchen Ventilation',
    hotels: 'Hotel Kitchen Ventilation',
  };
  return {
    title: titles[v.slug] || `${v.title} Kitchen Ventilation`,
    description: v.description,
    alternates: { canonical: `/who-we-serve/${v.slug}` },
  };
}

const focusedServices = [
  { href: '/services/kitchen-air-balancing', title: 'Hood Airflow & Air Balancing' },
  { href: '/services/exhaust-fan-repair', title: 'Exhaust Fan Repair' },
  { href: '/services/makeup-air-unit-repair', title: 'Makeup Air Unit Repair' },
  { href: '/services/ventilation-controls', title: 'VFD, DCV & Ventilation Controls' },
  { href: '/services/pollution-control', title: 'Pollution-Control System Service' },
];

export default function VerticalPage({ params }: Props) {
  const v = VERTICALS.find((x) => x.slug === params.slug);
  if (!v) notFound();

  return (
    <>
      <PageHero eyebrow="Who We Serve" title={`Commercial Kitchen Ventilation for ${v.title}`} description={v.longDescription} />

      <Section>
        <SectionHeading eyebrow="Common Complaints" title={`Ventilation problems ${v.title.toLowerCase()} teams report`} />
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {v.painPoints.map((point, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-3 glass-card rounded-xl p-5">
                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Focused Services" title={`What TCS checks for ${v.title.toLowerCase()} kitchens`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {focusedServices.map((service, i) => (
            <Reveal key={service.href} delay={i * 60}>
              <Link href={service.href} className="flex items-center gap-3 glass-card rounded-lg px-5 py-4 hover:border-amber-500/20 transition-all group">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-sm group-hover:text-amber-400 transition-colors">{service.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Request Service" title="Describe the ventilation problem" />
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm /></div>
        </div>
      </Section>
    </>
  );
}
