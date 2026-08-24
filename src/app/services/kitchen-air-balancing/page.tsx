import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Kitchen Hood Airflow & Air Balancing: NYC & North Jersey',
  description: 'Restaurant kitchen hood airflow diagnostics and operational air balancing across NYC and North Jersey. Exhaust and supply readings, capture testing, pressure diagnosis, and written findings.',
  alternates: { canonical: '/services/kitchen-air-balancing' },
};

const content: VentilationServiceContent = {
  eyebrow: 'Kitchen Hood Airflow Diagnostics',
  title: 'Smoke escaping? Doors fighting you? Measure the air.',
  description: 'TCS measures exhaust, makeup air, hood capture, and building-pressure conditions to identify why the kitchen is not behaving correctly.',
  serviceType: 'Commercial Kitchen Hood Airflow Diagnostics and Operational Air Balancing',
  image: '/images/captiveaire-hood-active-kitchen.jpg',
  imageAlt: 'Commercial kitchen hood operating over an active cooking line',
  symptoms: ['Smoke rolls out of the hood', 'Grease or heat collects outside the hood', 'Doors are hard to open or slam', 'Dining room smells like the kitchen', 'Pilot flames are disturbed by drafts', 'Problem started after equipment, fan, or HVAC changes'],
  scope: [
    { title: 'Exhaust airflow readings', description: 'Airflow is measured using the method appropriate to the hood, filters, duct, and available test points. Fan speed, dampers, rotation, and mechanical condition are checked.' },
    { title: 'Makeup and replacement air', description: 'Supply volume, delivery pattern, diffuser direction, MAU operation, and the effect of building HVAC are evaluated against the exhaust demand.' },
    { title: 'Capture and containment testing', description: 'The hood is observed under representative cooking conditions when possible. Cross-drafts, appliance position, hood geometry, and supply-air interference are considered.' },
    { title: 'Operational adjustments and findings', description: 'Practical adjustments are made where the system allows. TCS documents measured conditions, changes, remaining deficiencies, and recommended repairs.' },
  ],
  process: [
    { title: 'Interview', description: 'Identify when the problem occurs, recent system changes, cooking load, and the exact operator complaint.' },
    { title: 'Measure', description: 'Record exhaust, supply, pressure, fan, control, and capture conditions using appropriate field instruments.' },
    { title: 'Adjust or repair', description: 'Correct accessible settings or components that are preventing proper operation.' },
    { title: 'Retest and report', description: 'Repeat relevant readings and document what changed and what still requires correction.' },
  ],
  faqs: [
    { question: 'Is this the same as a certified TAB report?', answer: 'Not automatically. TCS provides operational airflow diagnostics and written field readings for troubleshooting and service. If a project requires a third-party certified, stamped, or specification-compliance TAB report, that requirement should be identified before scheduling so the correct scope can be arranged.' },
    { question: 'Can airflow balancing fix smoke escaping the hood?', answer: 'Often, but the cause must be measured. Low exhaust, too much or poorly directed supply air, cross-drafts, failed controls, appliance position, or a system-design limitation can all create similar symptoms.' },
    { question: 'Should the makeup air equal the exhaust air?', answer: 'Not necessarily. The correct relationship depends on the hood design, how replacement air is introduced, adjacent HVAC, building pressure, and the project design. TCS avoids applying one percentage to every kitchen.' },
    { question: 'Will I receive readings?', answer: 'For airflow diagnostic work, TCS documents the relevant before-and-after readings, observed conditions, adjustments, and recommended repairs.' },
  ],
  note: 'Operational airflow diagnostics are not represented as a certified third-party TAB report unless that scope is specifically arranged in writing.',
};

export default function KitchenAirBalancingPage() {
  return <VentilationServicePage content={content} />;
}
