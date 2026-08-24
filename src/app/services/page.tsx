import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Fan, Gauge, Settings2, Wind } from 'lucide-react';
import { PageHero, Reveal, Section, SectionHeading } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Ventilation Services: NYC & North Jersey',
  description: 'Kitchen hood airflow diagnostics, exhaust fan repair, makeup air unit service, VFD and DCV controls, pollution-control troubleshooting, and manufacturer-assigned equipment work.',
  alternates: { canonical: '/services' },
};

const services = [
  { href: '/services/kitchen-air-balancing', title: 'Hood Airflow & Air Balancing', description: 'Measured exhaust and supply readings, capture testing, pressure diagnosis, adjustments, and written findings.', icon: <Gauge className="w-7 h-7" /> },
  { href: '/services/exhaust-fan-repair', title: 'Exhaust Fan Repair', description: 'Motors, belts, sheaves, bearings, fan wheels, starters, disconnects, VFDs, controls, and airflow verification.', icon: <Fan className="w-7 h-7" /> },
  { href: '/services/makeup-air-unit-repair', title: 'Makeup Air Unit Repair', description: 'Fans, motors, belts, heat, filters, dampers, freeze protection, airflow, VFDs, and interlocks.', icon: <Wind className="w-7 h-7" /> },
  { href: '/services/ventilation-controls', title: 'VFD, DCV & Ventilation Controls', description: 'Drive faults, sensors, control boards, relays, starters, interlocks, and sequence-of-operation troubleshooting.', icon: <Settings2 className="w-7 h-7" /> },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Focused Services" title="Commercial kitchen ventilation, from hood to roof." description="TCS focuses on airflow, fans, makeup air, and controls across NYC and North Jersey. The narrower scope means the calls match the field experience." />
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
            <h2 className="text-xl font-semibold mb-4">What about other kitchen equipment?</h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">Cooking, refrigeration, beverage, espresso, and general HVAC information remains on this website for manufacturer, dealer, established-customer, and referral work. TCS is not actively marketing for general one-off equipment calls.</p>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              {['Manufacturer-assigned warranty or startup', 'Dealer or representative field support', 'Established-customer and qualified referral work'].map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />{item}</li>)}
            </ul>
            <Link href="/manufacturer-service" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">Manufacturer service pathway <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </Section>
    </>
  );
}
