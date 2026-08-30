import type { Metadata } from 'next';
import ProjectServicePage, { ProjectServiceContent } from '@/components/ProjectServicePage';

export const metadata: Metadata = {
  title: 'Kitchen Hood Performance Testing',
  description: 'Commercial kitchen hood airflow readings, exhaust and makeup air testing, capture observations, pressure diagnosis, and written findings in NYC and New Jersey.',
  alternates: { canonical: '/services/kitchen-hood-performance-testing' },
};

const content: ProjectServiceContent = {
  eyebrow: 'Kitchen Hood Performance Testing',
  title: 'Measure what the ventilation system is actually doing.',
  description: 'TCS checks exhaust, makeup air, hood capture, fan operation, controls, and kitchen pressure—then documents the condition behind the complaint.',
  serviceType: 'Commercial Kitchen Hood Airflow and Performance Testing',
  image: '/images/commercial-kitchen-hood-supply-plenum.jpg',
  imageAlt: 'Commercial kitchen hood supply plenum and airflow system',
  audience: ['Restaurants & hotels', 'Facility managers', 'Contractors', 'Manufacturers & dealers'],
  capabilities: [
    { title: 'Airflow readings', description: 'Measured exhaust and supply conditions at the hood, fan, filters, or diffusers as the system allows.' },
    { title: 'Control verification', description: 'Fan commands, VFD speeds, sensors, starters, interlocks, and operating modes checked against the complaint.' },
    { title: 'Capture & pressure', description: 'Smoke behavior, plume escape, cross-drafts, door pressure, and supply-air interference observed.' },
    { title: 'Written findings', description: 'Readings, operating conditions, likely causes, completed adjustments, and recommended next actions.' },
  ],
  included: ['Exhaust operating checks', 'Makeup-air operating checks', 'Hood capture observation', 'Fan speed and rotation review', 'VFD and control status', 'Kitchen-pressure indicators', 'Practical field adjustments', 'Written findings and readings'],
  excluded: ['Hood and grease-duct cleaning', 'Official FDNY inspection or fire-system certification', 'Engineering redesign or stamped calculations', 'Guaranteed code approval by an authority having jurisdiction'],
  process: [
    { title: 'Define the complaint', description: 'Document when smoke, heat, odors, pressure, or airflow problems occur and which equipment is operating.' },
    { title: 'Operate the system', description: 'Run exhaust, makeup air, controls, and cooking conditions through the modes relevant to the complaint.' },
    { title: 'Measure & isolate', description: 'Collect readings and separate fan, control, balance, supply-air, pressure, and equipment-condition causes.' },
    { title: 'Report the condition', description: 'Provide a concise record of measurements, findings, corrections, and remaining work.' },
  ],
  faqs: [
    { question: 'What problems can a hood performance test help diagnose?', answer: 'It can help isolate weak capture, excessive or insufficient exhaust, failed makeup air, wrong fan speed, supply-air interference, negative pressure, controls faults, and mechanical fan problems.' },
    { question: 'Can TCS adjust the system during the visit?', answer: 'When access, equipment condition, controls, authorization, and job scope allow it, TCS can make practical fan-speed, damper, belt, control, or setup corrections and then verify the result.' },
    { question: 'Will I receive an airflow report?', answer: 'Yes when reporting is included in the requested scope. TCS can document readings, test conditions, findings, field adjustments, and unresolved deficiencies.' },
  ],
  requestTitle: 'Describe the complaint and the decisions the report must support.',
  requestDescription: 'Include the number of hoods, equipment brands, symptoms, project status, service ZIP code, roof access, and whether written readings are required.',
  defaultService: 'performance-testing',
};

export default function KitchenHoodPerformanceTestingPage() {
  return <ProjectServicePage content={content} />;
}
