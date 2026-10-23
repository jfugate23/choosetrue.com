import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Makeup Air Repair & No Heat — NYC & NJ',
  description: 'Restaurant makeup air blowing cold or heat not working? TCS diagnoses MAU heating, airflow, controls, and fan faults across NYC and North Jersey.',
  alternates: { canonical: '/services/makeup-air-unit-repair' },
};

const content: VentilationServiceContent = {
  eyebrow: 'Commercial Kitchen Makeup Air Service',
  title: 'Makeup air blowing cold or not running?',
  description: 'No heat from the makeup air unit? Cold air entering the kitchen? TCS diagnoses commercial MAU heating, airflow, fan, and control faults, including how the unit works with the exhaust system.',
  serviceType: 'Commercial Kitchen Makeup Air Unit Repair',
  defaultService: 'makeup-air',
  note: 'Do not bypass safety controls or repeatedly reset a unit that locks out. Report the fault code, whether the fan runs, and whether the problem began with colder weather. Regulated gas work requires the appropriate licensed trade.',
  image: '/images/rooftop-makeup-air-unit-install.jpg',
  imageAlt: 'Commercial kitchen rooftop makeup air unit',
  symptoms: ['Makeup air fan will not run', 'Kitchen doors are hard to open', 'Cold air dumping into the kitchen', 'Kitchen overheats during service', 'Burner or heat will not enable', 'Unit trips, freezes, or shows a drive fault'],
  scope: [
    { title: 'Fan, motor, belts, and airflow', description: 'Blower rotation, motor operation, belt condition, sheave setup, filters, dampers, fan speed, and delivered airflow are checked.' },
    { title: 'Heat and freeze-protection faults', description: 'Burner enable, safeties, temperature controls, gas-side control signals, coils, freeze stats, and related interlocks are evaluated within the permitted service scope.' },
    { title: 'Starters, VFDs, sensors, and controls', description: 'TCS traces the command sequence through relays, contactors, overloads, drives, sensors, hood controls, and building interfaces.' },
    { title: 'Exhaust-to-supply relationship', description: 'The MAU is not judged in isolation. Exhaust operation, kitchen pressure, hood capture, and supply delivery are checked together.' },
  ],
  process: [
    { title: 'Document symptoms', description: 'Confirm temperatures, timing, fault history, affected hoods, and whether the exhaust system is operating.' },
    { title: 'Check unit operation', description: 'Inspect airflow, mechanical components, safeties, power, control sequence, and heat enable.' },
    { title: 'Correct the fault', description: 'Repair the failed component or setup issue within the approved scope.' },
    { title: 'Verify the kitchen', description: 'Confirm stable unit operation and whether the pressure, comfort, or capture complaint changed.' },
  ],
  faqs: [
    { question: 'Why is the makeup air unit blowing cold air with the heat on?', answer: 'The fan can run while the heating sequence is disabled or locked out. TCS checks the operating mode, temperature controls, airflow proving, safety circuit, and heat-enable sequence before recommending a repair. The cause must be diagnosed on the specific unit; a cold-air complaint alone does not identify a failed burner.' },
    { question: 'Do you handle restaurant makeup air no-heat calls in winter?', answer: 'Yes. TCS accepts commercial makeup air no-heat and cold-supply-air service requests across NYC and North Jersey. Send the brand, model, displayed fault, service ZIP code, and roof-access details so the service scope and scheduling can be confirmed.' },
    { question: 'Can I turn off the makeup air unit to stop the cold draft?', answer: 'Makeup air and exhaust operate as a system. Turning off replacement air while exhaust continues can worsen negative pressure and hood performance. Follow the equipment operating instructions and arrange diagnosis rather than bypassing interlocks or safety controls.' },
    { question: 'Why are the restaurant doors hard to open?', answer: 'The kitchen may be under excessive negative pressure because exhaust airflow is greater than the replacement air reaching the building. A failed MAU, closed damper, slipping belt, wrong fan speed, or other air-distribution problem can cause it.' },
    { question: 'Can a makeup air problem make the kitchen hot?', answer: 'Yes. A failed MAU can starve the hood system, disrupt capture, pull conditioned air from the dining room, or leave cooking heat in the kitchen. The complete exhaust and supply relationship needs to be checked.' },
    { question: 'Do you service CaptiveAire, Accurex, Greenheck, Gaylord, and Halton equipment?', answer: 'TCS has commercial ventilation experience across these systems. Formal warranty authorization varies by manufacturer, product, territory, and assignment; warranty calls must be assigned or approved by the manufacturer.' },
    { question: 'Do you install gas piping?', answer: 'This page covers diagnostic and equipment service. Any regulated gas-piping work is handled only when licensing, permits, and job scope allow it, or is coordinated with the appropriate licensed trade.' },
  ],
};

export default function MakeupAirUnitRepairPage() {
  return <VentilationServicePage content={content} />;
}
