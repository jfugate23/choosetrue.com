import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardCheck, Gauge, Phone, Settings2, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { MANUFACTURERS } from '@/lib/manufacturer-data';
import { Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Manufacturer Ventilation Service',
  description: 'Gaylord factory-authorized service plus CaptiveAire, Accurex, Halton, and Greenheck commercial kitchen ventilation support across NYC and New Jersey.',
  alternates: { canonical: '/manufacturer-service' },
};

export default function ManufacturerServiceHub() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Kitchen Ventilation Manufacturer Service',
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: ['New York City', 'Northern New Jersey', 'Central New Jersey'],
    serviceType: ['Manufacturer Equipment Service', 'Equipment Startup', 'Warranty Assignment Service', 'Kitchen Ventilation Troubleshooting'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-20 right-0 w-[620px] h-[520px] bg-amber-500/[0.07] rounded-full blur-[130px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Manufacturer Ventilation Service</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200"><BadgeCheck className="w-3.5 h-3.5" />Gaylord factory authorized</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">Brand-specific kitchen ventilation service, without the guesswork.</h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">TCS services the hood, exhaust, makeup air, controls, and pollution-control equipment as one connected commercial kitchen system.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="#manufacturers" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow transition-all">Choose a Manufacturer <ArrowRight className="w-5 h-5" /></Link>
                <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 px-8 py-4 rounded-xl font-medium transition-all"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/25">
              <Image src="/images/vfd-drives-kitchen-ventilation-controls.jpg" alt="Variable frequency drives and commercial kitchen ventilation controls" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 46vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-400/90 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 rounded-xl border border-white/10 bg-navy-300/80 backdrop-blur-md p-4">
                <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Complete-system diagnosis</p>
                <p className="mt-1 text-sm text-slate-200">Airflow • fans • makeup air • VFDs • controls • PCUs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="manufacturers" className="bg-white/[0.02] !py-14 lg:!py-20">
        <Reveal className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">Equipment We Service</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">Choose the manufacturer on your system.</h2>
          <p className="mt-3 text-base lg:text-lg text-slate-400 leading-relaxed">View service capabilities for Gaylord, CaptiveAire, Accurex, Halton, and Greenheck kitchen ventilation equipment.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MANUFACTURERS.map((manufacturer, index) => (
            <Reveal key={manufacturer.slug} delay={index * 55}>
              <Link href={`/manufacturer-service/${manufacturer.slug}`} className={`group block glass-card rounded-2xl p-6 h-full hover:border-amber-500/30 transition-all ${manufacturer.slug === 'gaylord' ? 'ring-1 ring-amber-500/20' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="text-2xl font-bold tracking-tight">{manufacturer.name}</span>
                  {manufacturer.badge ? <ShieldCheck className="w-5 h-5 text-amber-400" /> : <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />}
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{manufacturer.metaDescription}</p>
                {manufacturer.badge && <span className="inline-flex mt-5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">{manufacturer.badge}</span>}
              </Link>
            </Reveal>
          ))}
          <Reveal delay={275}>
            <div className="rounded-2xl border border-dashed border-white/15 p-6 h-full flex flex-col justify-center">
              <p className="text-sm font-semibold">Another kitchen ventilation brand?</p>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">Send the manufacturer, model, fault code, and system photos. TCS will confirm whether the assignment fits.</p>
              <Link href="#manufacturer-request" className="inline-flex items-center gap-1 mt-4 text-sm text-amber-400">Ask TCS <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Field Service" title="Built for operating problems and project closeout." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: ClipboardCheck, title: 'Startup & commissioning', text: 'Operational checkout, settings, sequence verification, and punch-list findings.' },
            { icon: ShieldCheck, title: 'Assigned warranty service', text: 'Approved diagnostics and repair completed within the manufacturer’s assignment process.' },
            { icon: Settings2, title: 'Controls & integration', text: 'VFD, DCV, sensor, interlock, remote command, and sequence troubleshooting.' },
            { icon: Gauge, title: 'Airflow verification', text: 'Exhaust, supply, pressure, and capture conditions checked against the complaint.' },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="glass-card rounded-2xl p-6 h-full"><div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4"><item.icon className="w-5 h-5" /></div><h2 className="font-semibold mb-2">{item.title}</h2><p className="text-sm text-slate-400 leading-relaxed">{item.text}</p></div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/services/kitchen-ventilation-startup-commissioning" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-400 transition-colors">Startup & commissioning <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/services/kitchen-hood-performance-testing" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-400 transition-colors">Performance testing <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Section>

      <Section id="manufacturer-request" className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 max-w-6xl mx-auto">
          <div>
            <SectionHeading eyebrow="Send an Assignment" title="Give TCS the field details." description="Include the manufacturer, model, serial, work-order number, site contact, requested completion date, and known symptoms." center={false} />
            <div className="space-y-3 text-sm text-slate-400">
              {['NYC, Northern NJ, and Central NJ coverage', 'Clear readings, settings, faults, and closeout notes', 'Commercial kitchen systems only'].map((item) => <p key={item} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5" />{item}</p>)}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm defaultService="manufacturer" /></div>
        </div>
      </Section>
    </>
  );
}
