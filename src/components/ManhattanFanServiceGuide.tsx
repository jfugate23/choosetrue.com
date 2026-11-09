import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/UI';

const equipmentServices = [
  { href: '/services/cooking-equipment', title: 'Cooking equipment repair', description: 'For pizza, combi, or convection oven faults, share the model and what happens during the affected cooking mode.' },
  { href: '/services/hvac', title: 'Commercial HVAC service', description: 'For a dining room or kitchen comfort complaint, describe which space is affected and when the temperature changes.' },
  { href: '/services/refrigeration', title: 'Refrigeration and walk-in repair', description: 'Repair inquiries are welcome. Include the unit label, temperature history, and operating symptoms.' },
  { href: '/services/ice-machines', title: 'Commercial ice machine repair', description: 'Repair inquiries are welcome. Include the model, production change, and any displayed alarm.' },
];

export default function ManhattanFanServiceGuide() {
  return (
    <Section id="manhattan-fan-service-guide" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Manhattan restaurant service"
        title="Plan the visit before ordering a rooftop exhaust fan."
        description="A stopped fan and a fan that runs while smoke escapes the hood need different checks. Share what changed and how the building provides access so TCS can confirm the right scope."
      />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-semibold mb-4">Tell us what the system does during service</h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <li>If the <strong>fan stopped or became noisy</strong>, note when it happened, whether the fan starts from its normal controls, and any fault displayed.</li>
            <li>If the <strong>fan runs but smoke escapes the hood</strong>, note which appliances were on and whether the problem began after a fan, duct, or cooking line change.</li>
            <li>If <strong>makeup air changed too</strong>, mention whether the unit runs, whether it blows cold, and when drafts or pressure complaints occur.</li>
          </ul>
          <p className="text-sm text-slate-400 leading-relaxed mt-5">For a weak capture complaint, the fan, duct, makeup air, and conditions at the hood can all affect the result. Existing airflow reports and fan selection records help guide the next measurement.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-3 mt-5 text-sm font-semibold text-amber-400">
            <Link href="/services/exhaust-fan-repair" className="underline underline-offset-4">Exhaust fan repair</Link>
            <Link href="/services/kitchen-air-balancing" className="underline underline-offset-4">Airflow and capture testing</Link>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-semibold mb-4">Prepare building access and replacement details</h3>
          <ul className="list-disc pl-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <li>Identify the roof or mechanical room, who can authorize access, and whether the building requires an escort.</li>
            <li>Send existing fan and motor label photos if available, along with any prior repair or airflow report. Identify which hood the fan serves.</li>
            <li>If replacement is under consideration, flag limited roof access, freight elevator availability, and the kitchen shutdown window. TCS can review those details while confirming the scope.</li>
          </ul>
          <Link href="#manhattan-service-request" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-5">
            Send the site and equipment details <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <SectionHeading title="Other equipment in your Manhattan kitchen" description="Use the service that matches the equipment involved. TCS reviews scope and availability before a visit." />
        <div className="grid md:grid-cols-2 gap-6">
          {equipmentServices.map(service => (
            <Link key={service.href} href={service.href} className="glass-card rounded-2xl p-6 block hover:border-amber-500/25">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-4">Service details and inquiry <ArrowRight className="w-4 h-4 shrink-0" /></span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
