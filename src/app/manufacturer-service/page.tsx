import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, Phone, Settings2, ShieldCheck, Wrench } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Manufacturer-Assigned Kitchen Equipment Service: NYC & NJ',
  description: 'Owner-led manufacturer-assigned startup, warranty, punch-list, and field service for commercial kitchen ventilation and equipment across NYC and North Jersey.',
  alternates: { canonical: '/manufacturer-service' },
};

export default function ManufacturerServicePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Manufacturer-Assigned Commercial Kitchen Equipment Service',
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: ['New York City', 'Northern New Jersey'],
    serviceType: ['Equipment Startup', 'Manufacturer Warranty Service', 'Punch-List Service', 'Field Technical Support'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">For Manufacturers, Dealers &amp; Reps</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">Technical field service in NYC and North Jersey, without the hand-holding.</h1>
            <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">TCS accepts manufacturer-assigned startup, warranty, punch-list, and troubleshooting calls. Work is owner-led, documented clearly, and handled by a technician who understands field coordination.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#manufacturer-request" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow transition-all">Send an Assignment <ArrowRight className="w-5 h-5" /></Link>
              <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 px-8 py-4 rounded-xl font-medium transition-all"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Assignments" title="The work TCS can take off your plate." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Startup & commissioning support', text: 'Equipment checkout, settings, sequence verification, punch-list documentation, and field coordination.' },
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Assigned warranty calls', text: 'Diagnostic and repair calls performed under the manufacturer’s approved scope and claim process.' },
            { icon: <Settings2 className="w-5 h-5" />, title: 'Controls & integration', text: 'VFD, DCV, sensor, interlock, remote-command, and sequence-of-operation troubleshooting.' },
            { icon: <Wrench className="w-5 h-5" />, title: 'Punch-list & difficult callbacks', text: 'Independent field verification when installed equipment does not operate as intended.' },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="glass-card rounded-xl p-6 h-full"><div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">{item.icon}</div><h2 className="font-semibold mb-2">{item.title}</h2><p className="text-sm text-slate-400 leading-relaxed">{item.text}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Field Service Scope" title="Ventilation depth with broader equipment support." center={false} />
            <div className="space-y-4">
              {[
                'Selected project work includes Gaylord AirVantage startup and controls support for the new Terminal 1 at JFK.',
                'Equipment startup, operational checkout, sequence verification, and punch-list support.',
                'VFD, DCV, fan, makeup air, airflow, and ventilation-control troubleshooting.',
                'Coordination with manufacturers, dealers, installers, electricians, site contacts, and facility teams.',
                'Clear documentation of readings, settings, fault conditions, repairs, and remaining deficiencies.',
              ].map((item) => <p key={item} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />{item}</p>)}
            </div>
          </div>
          <Reveal>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-4">Authorization is assignment-specific.</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">This site does not claim blanket factory authorization. Warranty status can vary by manufacturer, product, territory, and individual dispatch. TCS confirms the approved scope, rate, parts process, and claim requirements before accepting warranty work.</p>
              <p className="text-sm text-slate-400 leading-relaxed">Manufacturers can send service procedures, wiring, claim numbers, site contacts, not-to-exceed limits, and closeout requirements with the assignment.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="manufacturer-request" className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <SectionHeading eyebrow="Send an Assignment" title="Give TCS the field details." description="Include the manufacturer, model, serial, claim or work-order number, site contact, NTE, requested completion date, and known symptoms." center={false} />
            <a href={`mailto:${COMPANY.email}`} className="text-amber-400 hover:text-amber-300 font-semibold">{COMPANY.email}</a>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm defaultService="manufacturer" /></div>
        </div>
      </Section>
    </>
  );
}
