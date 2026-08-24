import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Exhaust Fan Repair — NYC & North Jersey',
  description: 'Commercial kitchen exhaust fan diagnostics and repair across NYC and North Jersey. Motors, belts, bearings, VFD faults, starters, wiring, fan wheels, and airflow verification.',
  alternates: { canonical: '/services/exhaust-fan-repair' },
};

const content: VentilationServiceContent = {
  eyebrow: 'Commercial Kitchen Exhaust Fan Repair',
  title: 'Exhaust fan down, noisy, or barely pulling air?',
  description: 'TCS diagnoses the electrical, mechanical, controls, and airflow cause—then repairs the part of the system actually creating the problem.',
  serviceType: 'Commercial Kitchen Exhaust Fan Repair',
  image: '/images/rooftop-upblast-exhaust-fan.jpg',
  imageAlt: 'Commercial kitchen upblast exhaust fan on a rooftop',
  symptoms: ['Fan will not start', 'Weak draw at the hood', 'Smoke escaping during cooking', 'Squealing, grinding, or rumbling noise', 'Heavy vibration on the roof', 'Breaker, overload, or VFD keeps tripping'],
  scope: [
    { title: 'Motor, starter, and electrical faults', description: 'Motor windings, capacitors where applicable, contactors, overloads, starters, disconnects, wiring, rotation, and incoming power are checked before parts are condemned.' },
    { title: 'Belts, sheaves, bearings, and fan wheels', description: 'TCS checks belt condition and tension, sheave alignment, bearings, fan-wheel condition, vibration, and mechanical drag.' },
    { title: 'VFD and control problems', description: 'Drive faults, speed commands, parameters, pressure or temperature sensors, interlocks, and start/stop sequences are evaluated.' },
    { title: 'Repair or replacement verification', description: 'After the repair, rotation, amperage, fan operation, and hood capture are verified. Airflow readings are taken when the job requires them.' },
  ],
  process: [
    { title: 'Confirm access', description: 'Identify fan location, roof access, hood served, manufacturer, and safety conditions.' },
    { title: 'Trace the sequence', description: 'Verify power, enable signals, controls, VFD output, motor operation, and mechanical condition.' },
    { title: 'Repair the cause', description: 'Correct the failed electrical or mechanical component and any related setup issue.' },
    { title: 'Prove operation', description: 'Verify rotation, running condition, hood draw, and the original customer complaint.' },
  ],
  faqs: [
    { question: 'Do you repair rooftop upblast exhaust fans?', answer: 'Yes. TCS services commercial kitchen upblast, utility-set, and inline exhaust fans, including motors, belts, bearings, starters, VFDs, controls, and complete fan replacement when needed.' },
    { question: 'Can you tell whether the problem is the fan or the controls?', answer: 'Yes. The diagnostic process follows the entire start sequence from the hood controls and interlocks through the starter or VFD to the motor and fan assembly.' },
    { question: 'Do you clean kitchen exhaust fans or grease ducts?', answer: 'No. TCS provides diagnostic and repair service, not hood or grease-duct cleaning. A cleaning company may need to clean the system before repair if grease prevents safe access.' },
    { question: 'What areas do you serve?', answer: 'TCS serves commercial kitchens across New York City and North Jersey from its Elizabeth, New Jersey base.' },
  ],
  note: 'TCS does not provide hood or grease-duct cleaning. If grease buildup prevents safe repair access, cleaning must be completed by a qualified cleaning contractor first.',
};

export default function ExhaustFanRepairPage() {
  return <VentilationServicePage content={content} />;
}
