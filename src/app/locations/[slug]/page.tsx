import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Fan, Gauge, MapPin, Phone, Settings2, Wind } from 'lucide-react';
import { COMPANY, LOCATIONS } from '@/lib/data';
import { PageHero, Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

type Props = { params: { slug: string } };

const localServices = [
  { href: '/services/kitchen-air-balancing', title: 'Hood Airflow & Balancing', icon: <Gauge className="w-5 h-5" /> },
  { href: '/services/exhaust-fan-repair', title: 'Exhaust Fan Repair', icon: <Fan className="w-5 h-5" /> },
  { href: '/services/makeup-air-unit-repair', title: 'Makeup Air Unit Repair', icon: <Wind className="w-5 h-5" /> },
  { href: '/services/ventilation-controls', title: 'VFD, DCV & Controls', icon: <Settings2 className="w-5 h-5" /> },
];

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const location = LOCATIONS.find((item) => item.slug === params.slug);
  if (!location) return {};
  return {
    title: `Commercial Kitchen Ventilation in ${location.city}, ${location.state}`,
    description: `Kitchen hood airflow diagnostics, exhaust fan repair, makeup air unit service, and ventilation controls in ${location.city}, ${location.state}. Commercial kitchens only.`,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default function LocationPage({ params }: Props) {
  const location = LOCATIONS.find((item) => item.slug === params.slug);
  if (!location) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        title={`Commercial Kitchen Ventilation Service in ${location.city}`}
        description={`Specialized hood airflow diagnostics, exhaust fan repair, makeup air unit service, and ventilation-controls troubleshooting for commercial kitchens across ${location.city} and nearby areas.`}
      />

      <Section className="bg-white/[0.02]">
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-6 text-center"><Phone className="w-5 h-5 text-amber-400 mx-auto mb-3" /><p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Talk directly with TCS</p><a href={location.phoneHref} className="text-xl font-semibold hover:text-amber-400">{location.phone}</a></div>
          <div className="glass-card rounded-xl p-6 text-center"><MapPin className="w-5 h-5 text-amber-400 mx-auto mb-3" /><p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Local coverage</p><p className="text-base font-semibold">{location.city} &amp; nearby areas</p></div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Focused Services" title={`Ventilation problems handled in ${location.city}.`} />
        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {localServices.map((service, index) => (
            <Reveal key={service.href} delay={index * 70}>
              <Link href={service.href} className="group flex items-center gap-4 glass-card rounded-xl p-6 hover:border-amber-500/25 transition-colors">
                <span className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 flex-shrink-0">{service.icon}</span>
                <span className="font-semibold group-hover:text-amber-400 transition-colors">{service.title}</span>
                <ArrowRight className="w-4 h-4 text-slate-600 ml-auto group-hover:text-amber-400" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Nearby Coverage" title={`Areas served around ${location.city}.`} />
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {location.serviceArea.map((area, index) => <Reveal key={area} delay={index * 35}><span className="flex items-center gap-2 glass-card rounded-lg px-4 py-2.5 text-sm"><MapPin className="w-3.5 h-3.5 text-amber-400" />{area}</span></Reveal>)}
        </div>
        <p className="text-center text-xs text-slate-500 mt-7">Coverage depends on job scope, schedule, rooftop access, and travel conditions.</p>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 max-w-6xl mx-auto">
          <div>
            <SectionHeading eyebrow="Request Local Service" title={`Tell us what is happening in ${location.city}.`} description="Include the manufacturer, model, fault code, ZIP code, and rooftop-access details when available." center={false} />
            <a href={COMPANY.phoneHref} className="text-xl font-bold text-amber-400 hover:text-amber-300">{COMPANY.phone}</a>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm /></div>
        </div>
      </Section>
    </>
  );
}
