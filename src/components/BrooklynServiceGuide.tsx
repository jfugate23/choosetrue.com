import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/UI';

const complaints = [
  {
    title: 'Exhaust fan stopped, noisy, or weak',
    text: 'Record when the problem started, whether the fan starts from the normal kitchen control, and any displayed fault. Tell us whether the complaint affects one hood or the whole kitchen. A running fan does not by itself establish that the hood is capturing correctly.',
    href: '/services/exhaust-fan-repair',
    label: 'Exhaust fan troubleshooting and repair',
  },
  {
    title: 'Fan runs, but smoke escapes the hood',
    text: 'Describe which appliances are operating when smoke escapes and whether the problem followed an equipment move, renovation, or ventilation change. Hood capture, exhaust airflow, makeup air, and drafts need to be considered together before recommending a fan-speed change or replacement.',
    href: '/services/kitchen-air-balancing',
    label: 'Hood airflow and capture diagnosis',
  },
  {
    title: 'Makeup air or hood controls show a fault',
    text: 'Photograph the exact display message and identify which fan or unit it belongs to. Tell us which equipment starts and which stays off. Keep the original fault information for the service handoff; a generic reset or a guessed replacement part can leave the underlying problem unresolved.',
    href: '/services/ventilation-controls',
    label: 'VFD, DCV, and ventilation controls service',
  },
];

const equipmentLinks = [
  { href: '/services/cooking-equipment', title: 'Commercial oven and cooking equipment repair', text: 'For an oven that will not heat, a stopped conveyor or fan, or another cooking-equipment fault, send the appliance model and symptoms.' },
  { href: '/services/hvac', title: 'Commercial HVAC service', text: 'For dining-room heating, cooling, or supply-air complaints, describe the affected space and whether conditions change when the kitchen hood runs.' },
  { href: '/services/refrigeration', title: 'Refrigeration and walk-in repair', text: 'Repair inquiries are welcome for walk-ins, reach-ins, and prep tables. Include the equipment labels, symptoms, and service address for individual review.' },
  { href: '/services/ice-machines', title: 'Commercial ice machine repair', text: 'Repair inquiries are welcome. Include the machine model, production change, displayed alarm, and location so TCS can confirm scope and scheduling.' },
];

const faqs = [
  { question: 'Can I request commercial exhaust fan repair in Brooklyn?', answer: 'Yes. Send the business address, fan or control model if available, symptoms, and site-access details. TCS confirms the equipment, repair scope, parts requirements, and schedule before accepting the visit.' },
  { question: 'What access information helps prepare a Brooklyn service visit?', answer: 'Tell TCS who can authorize access, where the fan and makeup air unit are located, whether roof access requires building approval, and when the kitchen can release equipment for testing. Include loading or parking instructions if the site has them.' },
  { question: 'Can I include an oven, cooler, or ice machine problem in the same inquiry?', answer: 'Yes. List each unit separately with its manufacturer, model, symptoms, and urgency. TCS reviews each equipment scope individually and confirms what can be included in the visit before scheduling.' },
];

export default function BrooklynServiceGuide() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Section id="brooklyn-service-guide" className="scroll-mt-28">
        <SectionHeading eyebrow="Brooklyn service preparation" title="Describe the fan problem before choosing a repair." description="Give TCS the operating complaint and equipment details so the visit can be scoped around the problem you actually have." />
        <div className="grid lg:grid-cols-3 gap-6">
          {complaints.map(item => <div key={item.href} className="glass-card rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-5">{item.label}<ArrowRight className="w-4 h-4 shrink-0" /></Link>
          </div>)}
        </div>
        <div className="glass-card rounded-2xl p-6 lg:p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">Prepare the equipment and building-access handoff</h2>
          <ul className="list-disc pl-5 space-y-3 text-sm text-slate-300 leading-relaxed">
            <li>Send the service address, ZIP code, site contact, and photos of accessible equipment labels and fault displays.</li>
            <li>Identify the fan, hood, makeup air unit, and controls involved. Share recent service reports or drawings if available.</li>
            <li>Confirm roof, mechanical-room, and building access with the person who controls it. Mention appointment requirements and available loading arrangements.</li>
            <li>Explain when the kitchen can release equipment for testing and whether the issue appears only during busy service.</li>
          </ul>
          <p className="text-sm text-slate-400 leading-relaxed mt-5">If the makeup air unit is not running or is blowing cold, include that in the same description. <Link href="/services/makeup-air-unit-repair" className="text-amber-400 underline underline-offset-4">See makeup air unit service details.</Link></p>
          <Link href="#brooklyn-service-request" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 mt-5">Send a Brooklyn service inquiry<ArrowRight className="w-4 h-4 shrink-0" /></Link>
        </div>
      </Section>
      <Section id="brooklyn-equipment-service" className="bg-white/[0.02] scroll-mt-28">
        <SectionHeading eyebrow="Other equipment needs" title="Have a separate kitchen equipment problem?" description="Use the relevant service details below. TCS reviews equipment, scope, access, and scheduling before confirming a visit in Brooklyn." />
        <div className="grid md:grid-cols-2 gap-6">{equipmentLinks.map(item => <Link key={item.href} href={item.href} className="glass-card rounded-2xl p-6 lg:p-8 block hover:border-amber-500/25">
          <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
          <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
          <span className="inline-flex items-center gap-2 text-sm text-amber-400 font-semibold mt-5">Service details and inquiry<ArrowRight className="w-4 h-4 shrink-0" /></span>
        </Link>)}</div>
        <Link href="/services/commercial-kitchen-maintenance" className="inline-flex items-center gap-2 text-sm text-amber-400 font-semibold mt-6">Plan commercial kitchen preventive maintenance<ArrowRight className="w-4 h-4 shrink-0" /></Link>
      </Section>
      <Section>
        <SectionHeading title="Brooklyn service questions" />
        <div className="max-w-3xl mx-auto space-y-6">{faqs.map(item => <div key={item.question}>
          <h3 className="font-semibold text-amber-300 mb-2">{item.question}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
        </div>)}</div>
      </Section>
    </>
  );
}
