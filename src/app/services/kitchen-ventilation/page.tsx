import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation Service — NYC & NJ',
  description: 'Commercial kitchen hood airflow, exhaust fan, makeup air, controls, and pollution-control diagnostics across NYC and North Jersey.',
  alternates: { canonical: '/services/kitchen-ventilation' },
};

const content: VentilationServiceContent = {
  eyebrow: 'Commercial Kitchen Ventilation',
  title: 'Commercial kitchen hood and ventilation experts.',
  description: 'Hood airflow, exhaust fans, makeup air units, VFDs, demand-control ventilation, and pollution-control systems diagnosed and repaired across NYC and North Jersey.',
  serviceType: 'Commercial Kitchen Ventilation Diagnostics and Repair',
  image: '/images/full-kitchen-ventilation-install.jpg',
  imageAlt: 'Complete commercial kitchen hood and ventilation system',
  symptoms: ['Smoke or heat escapes the hood', 'Exhaust or makeup air fan will not run', 'Kitchen is hot, cold, or drafty', 'Doors are hard to open or slam', 'VFD or hood controller shows a fault', 'Problem began after a renovation or equipment change'],
  scope: [
    { title: 'Hood capture and airflow', description: 'Exhaust, makeup air, pressure, cross-drafts, appliance position, and actual capture conditions are evaluated together.' },
    { title: 'Exhaust fans', description: 'Motors, belts, sheaves, bearings, fan wheels, starters, disconnects, VFDs, wiring, rotation, and fan condition.' },
    { title: 'Makeup air units', description: 'Blower operation, heat, filters, dampers, freeze protection, controls, interlocks, fan speed, and delivered air.' },
    { title: 'Controls and pollution-control equipment', description: 'DCV sensors, VFDs, panels, relays, proof signals, interlocks, ESP power and controls, and operating sequence troubleshooting.' },
  ],
  process: [
    { title: 'Start with the complaint', description: 'Identify the exact symptom, when it happens, and what changed before it started.' },
    { title: 'Measure the system', description: 'Check airflow, pressure, power, control commands, mechanical condition, and capture as the job requires.' },
    { title: 'Repair the cause', description: 'Correct the failed component, control sequence, setting, or accessible airflow problem.' },
    { title: 'Verify and document', description: 'Retest the original complaint and provide readings, findings, and next steps.' },
  ],
  faqs: [
    { question: 'What commercial kitchen ventilation work does TCS prioritize?', answer: 'Hood airflow and capture problems, exhaust fan repair, makeup air unit service, VFD and demand-control ventilation faults, startup support, and related pollution-control operating issues.' },
    { question: 'Do you clean hoods or grease ducts?', answer: 'No. TCS focuses on diagnostics, repair, controls, airflow, and startup work. Hood and grease-duct cleaning should be performed by a qualified kitchen-exhaust cleaning company.' },
    { question: 'Do you service residential range hoods?', answer: 'No. TCS works on commercial kitchen ventilation systems only.' },
    { question: 'Can manufacturers send TCS warranty or startup work?', answer: 'Yes. TCS accepts manufacturer-assigned warranty, startup, and service work. Authorization is manufacturer-, territory-, and assignment-specific and should be confirmed before dispatch.' },
  ],
  note: 'TCS does not provide hood/duct cleaning, fire-suppression inspection or service, or residential range-hood work.',
};

export default function KitchenVentilationPage() {
  return <VentilationServicePage content={content} />;
}
