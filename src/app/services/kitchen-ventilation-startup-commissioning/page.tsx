import type { Metadata } from 'next';
import ProjectServicePage, { ProjectServiceContent } from '@/components/ProjectServicePage';

export const metadata: Metadata = {
  title: 'Ventilation Startup & Commissioning',
  description: 'Commercial kitchen hood, exhaust fan, makeup air, VFD, DCV, controls, airflow, and startup commissioning support across NYC and New Jersey.',
  alternates: { canonical: '/services/kitchen-ventilation-startup-commissioning' },
};

const content: ProjectServiceContent = {
  eyebrow: 'Kitchen Ventilation Startup & Commissioning',
  title: 'Get the hood, fans, makeup air, and controls operating together.',
  description: 'TCS supports new installations, renovations, equipment replacements, and difficult punch lists with measured startup and operational verification.',
  serviceType: 'Commercial Kitchen Ventilation Startup and Commissioning',
  image: '/images/full-kitchen-ventilation-install.jpg',
  imageAlt: 'New commercial kitchen ventilation installation ready for startup and commissioning',
  audience: ['General contractors', 'Mechanical contractors', 'Manufacturers & reps', 'Facility teams'],
  capabilities: [
    { title: 'Equipment checkout', description: 'Fan rotation, motor operation, belts, filters, dampers, safeties, power, and visible installation conditions.' },
    { title: 'Controls & sequence', description: 'VFDs, sensors, starters, interlocks, fan commands, fire-system interfaces, and sequence-of-operation checks.' },
    { title: 'Airflow & capture', description: 'Exhaust and supply readings, pressure conditions, hood capture, and operational observations.' },
    { title: 'Punch-list closeout', description: 'Settings, readings, faults, corrections, and remaining responsibilities documented clearly.' },
  ],
  included: ['Exhaust and supply fan startup', 'Rotation and amperage checks', 'VFD and control verification', 'Makeup-air interlock testing', 'Operational airflow readings', 'Smoke-capture observation', 'Deficiency documentation', 'Manufacturer closeout support'],
  excluded: ['Official FDNY hood or fire-suppression inspection', 'Fire-suppression testing or certification', 'Engineering design or a professional engineer’s stamp', 'Certified TAB report unless separately contracted through the appropriate party'],
  process: [
    { title: 'Review the assignment', description: 'Confirm equipment schedules, controls, responsible trades, startup requirements, and the desired closeout.' },
    { title: 'Check the installation', description: 'Verify equipment condition, access, power, rotation, wiring, controls, safeties, and readiness.' },
    { title: 'Run the sequence', description: 'Operate exhaust, makeup air, VFDs, sensors, interlocks, and connected equipment through the required modes.' },
    { title: 'Document the result', description: 'Record readings, settings, completed corrections, open deficiencies, and practical next steps.' },
  ],
  faqs: [
    { question: 'When should TCS be scheduled for startup?', answer: 'Schedule after equipment, controls, power, fan wiring, roof access, and related trades are substantially ready—but early enough to correct deficiencies before the final project deadline.' },
    { question: 'Can TCS help when the installed system fails startup?', answer: 'Yes. TCS can trace mechanical, electrical, controls, VFD, interlock, airflow, and coordination problems and document which party or component must correct each issue.' },
    { question: 'Is this the official FDNY hood inspection?', answer: 'No. TCS provides ventilation startup, operational verification, airflow checks, and corrective troubleshooting. The official NYC hood or micro-switch inspection must be handled by the properly licensed fire-suppression contractor and approving authority.' },
  ],
  requestTitle: 'Send the plans, equipment list, and startup deadline.',
  requestDescription: 'Include the site address, manufacturer, hood and fan schedule, controls information, responsible trades, current deficiencies, and required completion date.',
  defaultService: 'startup',
};

export default function KitchenVentilationStartupPage() {
  return <ProjectServicePage content={content} />;
}
