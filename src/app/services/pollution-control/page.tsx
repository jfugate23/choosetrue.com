import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Pollution-Control System Service: NYC & NJ',
  description: 'Commercial kitchen ESP and pollution-control system diagnostics across NYC and North Jersey. Power supplies, controls, interlocks, fans, pressure, and airflow troubleshooting.',
  alternates: { canonical: '/services/pollution-control' },
};

const content: VentilationServiceContent = {
  eyebrow: 'ESP & Pollution-Control Systems',
  title: 'Pollution-control fault, shutdown, or poor performance?',
  description: 'TCS troubleshoots the electrical, controls, fan, pressure, and airflow side of commercial kitchen ESP and ecology systems. Routine hood and duct cleaning is outside the service scope.',
  serviceType: 'Commercial Kitchen Exhaust Pollution-Control System Diagnostics',
  image: '/images/commercial-kitchen-full-view.jpg',
  imageAlt: 'Commercial kitchen ventilation and pollution-control system',
  symptoms: ['ESP power or fault light is on', 'System will not enable the exhaust sequence', 'Repeated arcing, nuisance trips, or shutdowns', 'Fan or pressure proof will not make', 'Odor or smoke complaints despite equipment running', 'Controls do not recover after service or cleaning'],
  scope: [
    { title: 'Power and control diagnostics', description: 'Power supplies, contactors, relays, transformers, safeties, fault circuits, enable commands, and alarm conditions are evaluated.' },
    { title: 'Fans, proof, and pressure', description: 'Exhaust operation, fan speed, airflow, pressure switches or transducers, tubing, filters, and proof-of-flow conditions are checked.' },
    { title: 'Interlocks and operating sequence', description: 'TCS traces the relationship between the hood controls, pollution-control unit, exhaust fan, makeup air, and related shutdown or alarm signals.' },
    { title: 'Post-service verification', description: 'After an approved repair or third-party cleaning, TCS can verify that the unit powers, proves, enables, and operates through its intended sequence.' },
  ],
  process: [
    { title: 'Record status', description: 'Capture alarm lights, fault codes, system state, recent service, and operator complaints.' },
    { title: 'Trace the sequence', description: 'Check power, safeties, proof signals, controls, fans, and airflow conditions.' },
    { title: 'Coordinate the scope', description: 'Complete diagnostic repairs and identify cleaning or specialty work that belongs to another contractor.' },
    { title: 'Verify operation', description: 'Run the system and document remaining faults, readings, and recommended next steps.' },
  ],
  faqs: [
    { question: 'Does TCS clean ESP cells, hoods, or grease ducts?', answer: 'TCS is not marketing routine hood, duct, or ESP-cell cleaning. The company focuses on diagnostics, electrical and control repairs, fan and airflow problems, startup, and post-cleaning operational verification.' },
    { question: 'Can dirty cells cause arcing or shutdowns?', answer: 'Yes, contamination, damage, moisture, broken ionizer components, or spacing issues can contribute to arcing. Safe diagnostic access may require the cleaning contractor to clean the components before electrical testing.' },
    { question: 'Do you certify NYC code compliance?', answer: 'TCS documents the service work and operating findings within its scope. Legal compliance, mandated inspection, cleaning certification, filing, and licensed specialty work remain the responsibility of the owner and the appropriately qualified contractors.' },
    { question: 'What brands do you work around?', answer: 'Field experience includes Gaylord, CaptiveAire, Accurex, Greenheck, Halton, and related commercial kitchen ventilation and pollution-control systems. Warranty authorization is assignment-specific.' },
  ],
  note: 'Cleaning, mandated inspection, and regulatory certification are separate scopes. TCS focuses on diagnostics, repair, controls, fans, and airflow.',
};

export default function PollutionControlPage() {
  return <VentilationServicePage content={content} />;
}
