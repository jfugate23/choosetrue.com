import type { Metadata } from 'next';
import VentilationServicePage, { VentilationServiceContent } from '@/components/VentilationServicePage';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation Controls — NYC & NJ',
  description: 'Kitchen ventilation controls service across NYC and North Jersey: VFD and DCV faults, sensors, starters, relays, interlocks, and sequences.',
  alternates: { canonical: '/services/ventilation-controls' },
};

const content: VentilationServiceContent = {
  eyebrow: 'Kitchen Ventilation Controls',
  title: 'VFD fault? Fans not following the hood controls?',
  description: 'TCS traces demand-control ventilation and interlock problems from the sensor or command through the control panel, drive, starter, motor, and fan.',
  serviceType: 'Commercial Kitchen Ventilation VFD, DCV, and Controls Service',
  image: '/images/vfd-drives-kitchen-ventilation-controls.jpg',
  imageAlt: 'Variable frequency drives serving a commercial kitchen ventilation system',
  symptoms: ['VFD shows a fault or will not run in remote', 'Fan speed never changes with cooking load', 'Exhaust runs but makeup air does not', 'Hood controls, lights, or fans behave intermittently', 'Fire-system interlock will not reset correctly', 'New fan or drive will not follow the required sequence'],
  scope: [
    { title: 'VFD diagnostics and setup', description: 'Power, motor data, run commands, references, digital inputs, fault history, parameters, and rotation are checked against the intended sequence.' },
    { title: 'Demand-control ventilation', description: 'Temperature or optic sensors, transducers, control boards, networked components, and speed commands are evaluated as a complete DCV system.' },
    { title: 'Starters, relays, and interlocks', description: 'Contactors, overloads, transformers, relays, time delays, proof signals, and hood-to-MAU interlocks are traced using the wiring and sequence available.' },
    { title: 'Startup and sequence verification', description: 'New or repaired equipment is tested through the operating sequence so the exhaust, makeup air, controls, and safety interfaces behave together.' },
  ],
  process: [
    { title: 'Capture the fault', description: 'Record drive codes, control status, sequence failure, and what changed before the problem began.' },
    { title: 'Trace inputs and outputs', description: 'Follow power, commands, references, safeties, proof signals, and motor output through the system.' },
    { title: 'Correct setup or hardware', description: 'Repair wiring or components and make approved parameter or control changes.' },
    { title: 'Run the sequence', description: 'Test normal operation, transitions, shutdown, and required interlocks before handoff.' },
  ],
  faqs: [
    { question: 'Can you program a replacement VFD for a kitchen exhaust fan?', answer: 'Yes, when the required motor information, control sequence, wiring, and drive documentation are available. TCS verifies the run command, speed reference, motor data, rotation, and relevant inputs rather than copying parameters blindly.' },
    { question: 'Why does the fan run locally but not from the hood controls?', answer: 'The drive may be set to the wrong command source, the enable circuit may be open, a safety or interlock may be preventing operation, or the control signal may be missing. Each point needs to be checked.' },
    { question: 'Do you work on Gaylord AirVantage systems?', answer: 'TCS has field startup and troubleshooting experience with Gaylord AirVantage systems, including fan-drive integration and control sequences. Warranty status depends on the manufacturer assignment.' },
    { question: 'Can you troubleshoot the fire-suppression system?', answer: 'TCS can verify the ventilation-side interlock and the signals presented to the hood controls. Inspection, certification, or repair of the fire-suppression system itself must be performed by the appropriately licensed suppression contractor.' },
  ],
};

export default function VentilationControlsPage() {
  return <VentilationServicePage content={content} />;
}
