import Link from 'next/link';
import { Section, SectionHeading } from '@/components/UI';

const symptoms = [
  {
    title: 'Air is moving, but it feels cold',
    text: 'Say whether the same unit previously supplied warm air and whether the change started with colder weather. Share the displayed operating mode and fault message. A running fan does not establish that heating is enabled or working.',
    href: '/services/makeup-air-unit-repair',
    label: 'Makeup air heating and fan service',
  },
  {
    title: 'Supply air is weak or missing',
    text: 'Report which supply outlets changed, whether the exhaust is running, and any new door-pressure or smoke-capture problem. Describe what staff notice during normal operation; a sound from the roof alone does not confirm delivered airflow.',
    href: '/services/kitchen-air-balancing',
    label: 'Airflow and pressure diagnosis',
  },
  {
    title: 'The dining room is cold too',
    text: 'Identify the affected rooms and whether the discomfort starts with the hood schedule or continues all day. The room HVAC and kitchen makeup air may be separate systems. Include both symptoms when requesting a coordinated review.',
    href: '/services/hvac',
    label: 'Commercial HVAC service',
  },
];

export default function QueensMakeupAirGuide() {
  return (
    <Section id="queens-makeup-air-guide" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Queens makeup air service"
        title="Cold air in the kitchen? Describe what changed."
        description="For an existing Queens restaurant, the useful starting point is whether replacement air has stopped, lost its heat, or is arriving where staff do not expect it. These observations help TCS review the right equipment before scheduling."
      />
      <div className="grid lg:grid-cols-3 gap-6">
        {symptoms.map((item) => (
          <div key={item.title} className="glass-card rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-base text-slate-300 leading-relaxed">{item.text}</p>
            <Link href={item.href} className="inline-block text-base font-semibold text-amber-400 mt-5 underline underline-offset-4">{item.label}</Link>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-2xl p-6 lg:p-8 mt-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Send the model and operating history before a visit</h3>
        <p className="text-base text-slate-300 leading-relaxed">Some supply units bring in outdoor air without heating it. Confirm the installed model and options from available records before treating cold air as a failed heater. On heated units, the fan and heating sequence need separate checks; the cause depends on the equipment and controls.</p>
        <ul className="list-disc pl-5 mt-5 space-y-3 text-base text-slate-300 leading-relaxed">
          <li>Send available model and serial photos, the exact displayed alarm, and when the complaint began.</li>
          <li>Include any recent filter, belt, controls, or HVAC work and the last time the system operated normally.</li>
          <li>Give the service ZIP code, the landlord or building contact for roof access, and any required vendor documents or permitted work windows.</li>
        </ul>
        <p className="text-base text-slate-300 leading-relaxed mt-5">Use existing records and accessible operator displays. Do not open equipment panels, bypass interlocks, repeatedly reset a lockout, or switch off replacement air as a test while cooking. Equipment instructions and the approved service scope govern the next steps.</p>
        <p className="text-base text-slate-300 leading-relaxed mt-5">For a cold-supply or no-heat complaint, select “Makeup air unit issue” in the form and describe whether airflow is present. TCS confirms the equipment scope, access, and schedule before a visit; regulated gas work requires the appropriate licensed trade.</p>
        <Link href="#queens-service-request" className="inline-block rounded-xl bg-amber-500 px-6 py-3 mt-6 text-base font-bold text-navy-300 hover:bg-amber-400">Describe your Queens ventilation problem</Link>
        <p className="text-sm text-slate-400 leading-relaxed mt-6">Equipment context: <a href="https://www.accurex.com/products/make-up-air-units" className="underline underline-offset-4">Accurex makeup air configurations</a> and the <a href="https://content.accurex.com/accurex-cms-prod/docs/default-source/ioms/482887-direct-gas-r7-5-2023_acx.pdf" className="underline underline-offset-4">XDGX operating and troubleshooting manual</a>. The manual applies to that model family; other equipment needs its own instructions.</p>
      </div>
    </Section>
  );
}
