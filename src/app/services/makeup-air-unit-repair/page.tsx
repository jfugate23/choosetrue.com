import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Commercial Makeup Air Unit Repair — NYC & North Jersey',
  description: 'Commercial kitchen makeup air unit diagnostics and repair across NYC and North Jersey. Fans, motors, belts, heat, freeze protection, airflow, interlocks, VFDs, and controls.',
  alternates: { canonical: '/services/makeup-air-unit-repair' },
};

const content: VentilationServiceContent = {
  eyebrow: 'Commercial Kitchen Makeup Air Service',
  title: 'Makeup air not running—or not keeping up?',
  description: 'A failed or misbehaving MAU can leave the kitchen hot, cold, drafty, and deeply negative. TCS diagnoses the unit and its relationship to the exhaust system.',
  serviceType: 'Commercial Kitchen Makeup Air Unit Repair',
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
    { question: 'Why are the restaurant doors hard to open?', answer: 'The kitchen may be under excessive negative pressure because exhaust airflow is greater than the replacement air reaching the building. A failed MAU, closed damper, slipping belt, wrong fan speed, or other air-distribution problem can cause it.' },
    { question: 'Can a makeup air problem make the kitchen hot?', answer: 'Yes. A failed MAU can starve the hood system, disrupt capture, pull conditioned air from the dining room, or leave cooking heat in the kitchen. The complete exhaust and supply relationship needs to be checked.' },
    { question: 'Do you service CaptiveAire, Accurex, Greenheck, Gaylord, and Halton equipment?', answer: 'TCS has commercial ventilation experience across these systems. Formal warranty authorization varies by manufacturer, product, territory, and assignment; warranty calls must be assigned or approved by the manufacturer.' },
    { question: 'Do you install gas piping?', answer: 'This page covers diagnostic and equipment service. Any regulated gas-piping work is handled only when licensing, permits, and job scope allow it, or is coordinated with the appropriate licensed trade.' },
  ],
};

export default function MakeupAirUnitRepairPage() {
  return <VentilationServicePage content={content} />;
}
