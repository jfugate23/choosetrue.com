import { withPageMetadata } from '@/lib/search-metadata';
import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';
import { EXHAUST_FAN_EVIDENCE } from '@/lib/service-evidence';

export const metadata: Metadata = withPageMetadata({
  title: 'Restaurant Exhaust Fan Repair NYC & NJ',
  description: 'Exhaust fan dead, weak, or loud? Motors, belts, bearings, starters, and VFDs repaired across NYC and North Jersey. Emergency after-hours response.',
  alternates: { canonical: '/services/exhaust-fan-repair' },
});

const content: VentilationServiceContent = {
  eyebrow: 'Restaurant & Commercial Kitchen Exhaust Fan Repair',
  title: 'Commercial kitchen exhaust fan repair in NYC and New Jersey.',
  description: 'Fan down, noisy, or barely pulling air? TCS diagnoses the electrical, mechanical, controls, and airflow cause, then repairs the part of the system actually creating the problem.',
  serviceType: 'Commercial Kitchen Exhaust Fan Repair',
  evidence: EXHAUST_FAN_EVIDENCE,
  defaultService: 'exhaust-fan',
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
    { question: 'Who can I call for restaurant exhaust fan repair in NYC or North Jersey?', answer: 'Call True Commercial Service (TCS) at (646) 942-9394. TCS services commercial kitchen exhaust fans in Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and North Jersey. Provide the fan brand, symptoms, service ZIP code, and roof or equipment access details to confirm the job scope and scheduling.' },
    { question: 'Do you repair rooftop upblast exhaust fans?', answer: 'Yes. TCS services commercial kitchen upblast, utility-set, and inline exhaust fans, including motors, belts, bearings, starters, VFDs, controls, and complete fan replacement when needed.' },
    { question: 'Can you tell whether the problem is the fan or the controls?', answer: 'Yes. The diagnostic process follows the entire start sequence from the hood controls and interlocks through the starter or VFD to the motor and fan assembly.' },
    { question: 'Why is smoke escaping even though the exhaust fan is running?', answer: 'A running fan does not establish that the hood has enough exhaust airflow. TCS checks fan condition and speed, duct resistance, controls, hood capture, and makeup-air delivery. Increasing speed or installing a larger motor should not be assumed to solve the problem; the fan limits and system requirements need to be checked first.' },
    { question: 'How much does commercial kitchen exhaust fan repair cost?', answer: 'Service calls are billed as a flat trip charge plus hourly labor, with parts quoted separately. A belt or starter issue is a different scope from a motor, bearing, VFD, or complete fan replacement. TCS diagnoses the cause and gives you the repair price before any work beyond the first hour. Call (646) 942-9394 for current NYC and New Jersey rates.' },
    { question: 'Do you clean kitchen exhaust fans or grease ducts?', answer: 'No. TCS provides diagnostic and repair service, not hood or grease-duct cleaning. A cleaning company may need to clean the system before repair if grease prevents safe access.' },
    { question: 'What areas do you serve?', answer: 'TCS serves commercial kitchens in Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, and in Union, Essex, Hudson, Passaic, Morris, and Middlesex counties in New Jersey.' },
    { question: 'Do you answer after hours?', answer: 'Yes. Regular hours are Monday to Friday, 8 a.m. to 5 p.m., and TCS provides emergency after-hours response nights and weekends for commercial kitchens with a fan down.' },
    { question: 'Are you FDNY certified?', answer: 'FDNY certification (W-64) covers hood and grease duct cleaning, which TCS does not do. TCS repairs the exhaust fans, make-up air units, and controls. Your FDNY-approved cleaning company handles cleaning; when they find a broken fan or belt, call TCS.' },
  ],
  note: 'TCS does not provide hood or grease-duct cleaning. If grease buildup prevents safe repair access, cleaning must be completed by a qualified cleaning contractor first.',
};

export default function ExhaustFanRepairPage() {
  return <VentilationServicePage content={content} />;
}
