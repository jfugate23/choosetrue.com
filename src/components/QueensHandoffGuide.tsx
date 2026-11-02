import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/UI';

const equipment = [
  { slug: 'cooking-equipment', label: 'Oven and cooking equipment repair', text: 'Send the appliance model, symptoms, and operating modes affected.' },
  { slug: 'hvac', label: 'Commercial HVAC service', text: 'Describe the affected room and whether comfort changes when the kitchen ventilation runs.' },
  { slug: 'refrigeration', label: 'Refrigeration and walk-in repair', text: 'Repair inquiries are welcome. Include equipment labels, symptoms, and temperature history for individual review.' },
  { slug: 'ice-machines', label: 'Commercial ice machine repair', text: 'Repair inquiries are welcome. Send the model, production change, and displayed alarm for scope and scheduling review.' },
];

export default function QueensHandoffGuide() {
  return <Section id="queens-commissioning-handoff" className="scroll-mt-28">
    <SectionHeading eyebrow="From project to operation" title="Keep the handoff useful after the startup visit." description="For Queens kitchen operators and project teams, an organized equipment record makes future maintenance and service requests easier to prepare." />
    <div className="glass-card rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Equipment records, open items, and maintenance responsibility</h2>
      <p className="text-sm text-slate-400 leading-relaxed">Keep the model information, available startup reports, operating instructions, and unresolved items together. Confirm who handles each follow-up and which tasks belong in the ongoing maintenance plan. The guide below explains what to request from the project team and what to send with a later service inquiry.</p>
      <Link href="/blog/kitchen-ventilation-commissioning-maintenance-handoff" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-5">Read the owner handoff checklist<ArrowRight className="w-4 h-4 shrink-0" /></Link>
      <p className="text-sm text-slate-400 leading-relaxed mt-5">The JFK feature above documents TCS’s confirmed Gaylord hood and Accurex fan commissioning assignment. The checklist is general planning guidance; it does not claim specific reports or test readings for that project.</p>
    </div>
    <div id="queens-equipment-service" className="mt-12 scroll-mt-28">
      <SectionHeading title="Separate equipment problem in your Queens kitchen?" description="Use the relevant service information. TCS reviews each equipment scope, location, and schedule before accepting a visit." />
      <div className="grid md:grid-cols-2 gap-6">{equipment.map(item => <Link key={item.slug} href={`/services/${item.slug}`} className="glass-card rounded-2xl p-6 block hover:border-amber-500/25">
        <h3 className="font-semibold text-lg mb-3">{item.label}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-4">Service details and inquiry<ArrowRight className="w-4 h-4 shrink-0" /></span>
      </Link>)}</div>
      <Link href="/services/commercial-kitchen-maintenance" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-6">Plan kitchen preventive maintenance<ArrowRight className="w-4 h-4 shrink-0" /></Link>
    </div>
  </Section>;
}
