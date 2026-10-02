import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Settings2, Thermometer, Wrench } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { Section, ServiceForm } from '@/components/UI';

export const OVEN_BRANDS = {
  cuppone: {
    name: 'Cuppone',
    title: 'Cuppone pizza oven repair in NYC and New Jersey.',
    description: 'Troubleshooting and repair for commercial Cuppone pizza ovens. Send the model and symptoms so TCS can confirm the service scope before dispatch.',
    equipment: 'Electric deck ovens and Alpha rotating-deck ovens',
    symptoms: ['Oven will not power on', 'Oven is not heating properly', 'Intermittent lights or controls', 'Rotating deck is not turning'],
    checks: [
      { title: 'Power & electrical faults', text: 'Incoming power, fuse connections, contactors, wiring and control power checked against the fault.' },
      { title: 'Heat & temperature', text: 'Heating elements, temperature sensing and control operation checked when the oven will not reach or hold temperature.' },
      { title: 'Rotation & controls', text: 'On rotating-deck models, motor, drive, direction and speed-control operation checked against the complaint.' },
    ],
    note: 'Model matters. Alpha uses a rotating cooking deck. Include a photo of the data plate so we can identify your oven correctly.',
  },
  lainox: {
    name: 'Lainox',
    title: 'Lainox combi oven repair in NYC and New Jersey.',
    description: 'Service requests for Lainox commercial combi ovens, including cooking faults, controls and operating problems. TCS confirms the model and scope before dispatch.',
    equipment: 'Commercial combi ovens, including Naboo models',
    symptoms: ['Oven stops with an error code', 'Poor heating or uneven cooking', 'Steam cycle is not working', 'Cleaning cycle will not finish'],
    checks: [
      { title: 'Heating & cooking faults', text: 'Temperature sensing, fan operation and heating commands checked against the reported cooking problem.' },
      { title: 'Steam & cleaning cycles', text: 'Water supply, cycle operation and reported alarms reviewed to identify the next service step.' },
      { title: 'Controls & startup', text: 'Fault codes, control operation and operational checks reviewed with the equipment model and assignment details.' },
    ],
    note: 'Send the exact model, serial number and displayed error code. For startup or warranty requests, include the dealer or manufacturer work order.',
  },
} as const;

export default function OvenBrandPage({ brand }: { brand: keyof typeof OVEN_BRANDS }) {
  const oven = OVEN_BRANDS[brand];
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: `${oven.name} Commercial Oven Service`,
    description: oven.description,
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: ['New York City', 'Hudson County, New Jersey', 'Union County, New Jersey'],
    serviceType: `${oven.name} commercial oven repair`,
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="relative overflow-hidden pt-10 pb-12 lg:py-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-[1.2fr_.8fr] gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">{oven.name} commercial oven service</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">{oven.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed mt-5 max-w-2xl">{oven.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-6 py-4 rounded-xl"><Phone className="w-5 h-5" />Call {COMPANY.phone}</a>
            <Link href="#request-service" className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-4 rounded-xl hover:border-amber-500/40">Request service <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <p className="text-sm text-slate-400 mt-4">Commercial equipment only. NYC, Hudson County and Union County.</p>
        </div>
        <div className="glass-card rounded-2xl p-6 lg:p-8 border-amber-500/20">
          <Wrench className="text-amber-400 w-9 h-9 mb-5" />
          <h2 className="text-xl font-semibold">What is the oven doing?</h2>
          <div className="space-y-4 mt-5">{oven.symptoms.map((symptom) => <p key={symptom} className="flex items-start gap-3 text-slate-300"><CheckCircle2 className="w-4 h-4 mt-1 text-amber-400 shrink-0" />{symptom}</p>)}</div>
          <p className="text-xs text-slate-400 border-t border-white/10 pt-4 mt-6">{oven.equipment}</p>
        </div>
      </div>
    </section>
    <Section className="bg-white/[0.02] !py-10 lg:!py-12">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6">Find the fault before replacing parts.</h2>
      <div className="grid md:grid-cols-3 gap-4">{oven.checks.map((check, index) => {
        const Icon = [Settings2, Thermometer, Wrench][index];
        return <div key={check.title} className="glass-card rounded-xl p-6"><Icon className="text-amber-400 w-6 h-6 mb-4" /><h3 className="font-semibold mb-2">{check.title}</h3><p className="text-sm text-slate-400 leading-relaxed">{check.text}</p></div>;
      })}</div>
      <p className="text-sm text-slate-400 mt-5 max-w-4xl">{oven.note}</p>
    </Section>
    <Section id="request-service" className="!py-12 lg:!py-16">
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-12">
        <div>
          <p className="text-sm text-amber-400 font-semibold mb-3">Request {oven.name} service</p>
          <h2 className="text-3xl font-bold leading-tight">Send the model and the problem.</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">Include the serial number, error code and service ZIP code. TCS reviews the request, confirms the scope and discusses scheduling with you.</p>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-amber-400 font-semibold mt-6"><Phone className="w-4 h-4" />{COMPANY.phone}</a>
          <p className="text-xs text-slate-500 leading-relaxed mt-6">Manufacturer names identify equipment serviced. This page does not claim {oven.name} factory authorization. Warranty coverage and assignments must be confirmed before work begins.</p>
          <Link href={`/manufacturer-service/${brand === 'cuppone' ? 'lainox' : 'cuppone'}`} className="inline-flex gap-2 items-center text-sm text-slate-400 hover:text-amber-400 mt-5">{brand === 'cuppone' ? 'Lainox combi oven service' : 'Cuppone pizza oven service'} <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="glass-card rounded-2xl p-5 lg:p-8"><ServiceForm equipment="oven" defaultManufacturer={oven.name} defaultService="cooking-repair" /></div>
      </div>
    </Section>
  </>;
}
