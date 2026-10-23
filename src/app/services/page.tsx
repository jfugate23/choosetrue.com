import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Wrench, ClipboardCheck, Fan, FileCheck2, Gauge, Settings2, Wind } from 'lucide-react';
import { PageHero, Reveal, Section, SectionHeading } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Equipment, Ventilation & HVAC',
  description: 'Commercial cooking equipment repair, kitchen ventilation, and HVAC service in NYC and North Jersey. Request TCS troubleshooting, repair, or maintenance.',
  alternates: { canonical: '/services' },
};

const services = [
  { href: '/services/cooking-equipment', title: 'Cooking Equipment Repair', description: 'Commercial ovens, ranges, fryers, griddles, and other cooking equipment. Send the model and symptoms to request service.', icon: <Wrench className="w-7 h-7" /> },
  { href: '/services/hvac', title: 'Commercial HVAC Service', description: 'Heating, cooling, and maintenance for commercial facilities, including HVAC filter changes.', icon: <Wind className="w-7 h-7" /> },
  { href: '/services/kitchen-air-balancing', title: 'Hood Airflow & Air Balancing', description: 'Measured exhaust and supply readings, capture testing, pressure diagnosis, adjustments, and written findings.', icon: <Gauge className="w-7 h-7" /> },
  { href: '/services/exhaust-fan-repair', title: 'Exhaust Fan Repair', description: 'Motors, belts, sheaves, bearings, fan wheels, starters, disconnects, VFDs, controls, and airflow verification.', icon: <Fan className="w-7 h-7" /> },
  { href: '/services/makeup-air-unit-repair', title: 'Makeup Air Unit Repair', description: 'Makeup air blowing cold or heat not working, plus fan, motor, belt, filter, damper, airflow, and interlock faults.', icon: <Wind className="w-7 h-7" /> },
  { href: '/services/ventilation-controls', title: 'VFD, DCV & Ventilation Controls', description: 'Drive faults, sensors, control boards, relays, starters, interlocks, and sequence-of-operation troubleshooting.', icon: <Settings2 className="w-7 h-7" /> },
  { href: '/services/kitchen-ventilation-startup-commissioning', title: 'Startup & Commissioning', description: 'Equipment checkout, fan and control sequencing, airflow verification, punch-list findings, and project closeout.', icon: <ClipboardCheck className="w-7 h-7" /> },
  { href: '/services/kitchen-hood-performance-testing', title: 'Hood Performance Testing', description: 'Exhaust and supply readings, capture observations, pressure diagnosis, field adjustments, and written findings.', icon: <FileCheck2 className="w-7 h-7" /> },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Commercial kitchen equipment, ventilation & HVAC service." description="Troubleshooting, repair, and maintenance for commercial kitchens and facilities, with specialized expertise in kitchen ventilation." />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.href} delay={index * 70}>
              <Link href={service.href} className="group block glass-card rounded-2xl p-8 h-full hover:border-amber-500/25 transition-colors">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">{service.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-amber-400 mt-5">View service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Also Relevant" title="Pollution control and full-system diagnosis." description="ESP and ecology-unit operating problems often involve power supplies, controls, interlocks, fan operation, pressure, and airflow." center={false} />
            <Link href="/services/pollution-control" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">Pollution-control service details <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-4">Lainox and Cuppone oven repair</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">Restaurant owners can request Lainox combi oven and Cuppone pizza oven service directly. Send the model, serial number, symptoms, and ZIP code so TCS can confirm the scope before dispatch.</p>
            <div className="flex flex-col gap-3 mb-6">
              <Link href="/manufacturer-service/lainox" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">Lainox combi oven repair <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/manufacturer-service/cuppone" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">Cuppone pizza oven repair <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <Link href="/services/cooking-equipment" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">Cooking equipment service <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </Section>
    </>
  );
}
