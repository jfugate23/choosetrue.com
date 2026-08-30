import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { COMPANY, VENTILATION_CITIES } from '@/lib/data';
import { Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

type Props = { params: { city: string } };

const services = [
  { href: '/services/kitchen-air-balancing', title: 'Hood Airflow & Balancing', text: 'Exhaust and supply readings, pressure diagnosis, capture testing, adjustments, and written findings.' },
  { href: '/services/exhaust-fan-repair', title: 'Exhaust Fan Repair', text: 'Motor, belt, bearing, fan wheel, starter, disconnect, wiring, VFD, and control troubleshooting.' },
  { href: '/services/makeup-air-unit-repair', title: 'Makeup Air Unit Repair', text: 'Fan, motor, belt, heat, freeze protection, filters, dampers, airflow, and interlock faults.' },
  { href: '/services/ventilation-controls', title: 'VFD, DCV & Controls', text: 'Drive setup, sensors, relays, starters, control boards, proof signals, and operating sequences.' },
];

export function generateStaticParams() {
  return VENTILATION_CITIES.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = VENTILATION_CITIES.find((item) => item.slug === params.city);
  if (!city) return {};
  return {
    title: `${city.city} Kitchen Ventilation`,
    description: `Commercial kitchen hood airflow diagnostics, exhaust fan repair, makeup air service, and controls troubleshooting in ${city.city}, ${city.state} and ${city.region}.`,
    alternates: { canonical: `/services/kitchen-ventilation/${city.slug}` },
  };
}

export default function VentilationCityPage({ params }: Props) {
  const city = VENTILATION_CITIES.find((item) => item.slug === params.city);
  if (!city) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Commercial Kitchen Ventilation Service in ${city.city}, ${city.state}`,
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: { '@type': 'City', name: city.city },
    serviceType: services.map((service) => service.title),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">{city.city}, {city.state} • {city.region}</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-5xl">Kitchen hood airflow and exhaust fan repair in {city.city}.</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">Specialized diagnostics for smoke capture, roof exhaust fans, makeup air units, VFDs, demand-control ventilation, and hood-control problems in commercial kitchens.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow">Request Service <ArrowRight className="w-5 h-5" /></Link>
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 px-8 py-4 rounded-xl"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Focused Services" title={`Commercial kitchen ventilation service in ${city.city}.`} />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.href} delay={index * 70}>
              <Link href={service.href} className="group block glass-card rounded-2xl p-8 h-full hover:border-amber-500/25 transition-colors"><h2 className="text-lg font-semibold mb-2 group-hover:text-amber-400">{service.title}</h2><p className="text-sm text-slate-400 leading-relaxed">{service.text}</p><span className="inline-flex items-center gap-1 text-sm text-amber-400 mt-5">Service details <ArrowRight className="w-4 h-4" /></span></Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Local Coverage" title={`Serving ${city.city} commercial kitchens.`} center={false} />
            <p className="text-sm text-slate-400 leading-relaxed">{city.restaurantScene}</p>
            <div className="flex flex-wrap gap-2 mt-6">{city.neighborhoods.map((area) => <span key={area} className="inline-flex items-center gap-1.5 glass-card rounded-full px-4 py-2 text-xs text-slate-300"><MapPin className="w-3 h-3 text-amber-400" />{area}</span>)}</div>
            <p className="text-sm text-slate-500 mt-5">Nearby coverage includes {city.nearbyAreas.join(', ')}. Availability depends on scope and schedule.</p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-5">Good reasons to call</h2>
            <ul className="space-y-3 text-sm text-slate-300">{['Smoke or heat escaping the hood', 'Exhaust fan not running, noisy, or weak', 'Kitchen too hot, cold, or under pressure', 'Makeup air, VFD, or controls showing a fault', 'Ventilation problem after a renovation or equipment change'].map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />{item}</li>)}</ul>
            <p className="text-xs text-slate-500 mt-6 pt-5 border-t border-white/10">Commercial kitchens only. No hood/duct cleaning, fire-suppression service, or residential range hoods.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <div className="max-w-2xl mx-auto"><SectionHeading eyebrow="Request Service" title={`Tell TCS what is happening in ${city.city}.`} description="Include the equipment brand, model, fault code, ZIP code, and rooftop-access details." /><div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm /></div></div>
      </Section>
    </>
  );
}
