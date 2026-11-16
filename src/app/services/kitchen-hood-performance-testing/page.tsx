import { withPageMetadata } from '@/lib/search-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/UI';
import ProjectServicePage, { ProjectServiceContent } from '@/components/ProjectServicePage';

export const metadata: Metadata = withPageMetadata({
  title: 'Kitchen Hood Performance Testing',
  description: 'Commercial kitchen hood airflow readings, exhaust and makeup air testing, capture observations, pressure diagnosis, and written findings in NYC and New Jersey.',
  alternates: { canonical: '/services/kitchen-hood-performance-testing' },
});

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
  return (
    <ProjectServicePage
      content={content}
      projectFeature={
        <Section id="plan-the-hood-test" className="scroll-mt-28">
          <div className="glass-card rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold">What decision should the hood test support?</h2>
            <ul className="mt-5 space-y-4 list-disc pl-5 text-sm text-slate-300 leading-relaxed">
              <li><strong className="text-white">Smoke during service.</strong> Identify the hood, appliances in use, and the time the problem usually appears. Ask whether the visit can cover a representative cooking load.</li>
              <li><strong className="text-white">A change after equipment work.</strong> Share what moved or was replaced. Provide the previous airflow report or design schedule if available so the technician can identify a basis for comparison.</li>
              <li><strong className="text-white">A restaurant and building HVAC issue.</strong> Note when drafts, hard-to-open doors, or dining room comfort problems occur. Include the contact who can arrange access to the shared HVAC or makeup air equipment.</li>
            </ul>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed">If a landlord or facilities manager needs written findings, tell TCS what they need to decide and which operating conditions can be observed during the visit. TCS confirms the test and reporting scope before scheduling.</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-amber-400">
              <Link href="#project-request" className="underline underline-offset-4">Request hood performance testing</Link>
              <Link href="/blog/brooklyn-kitchen-hood-performance-test-report" className="underline underline-offset-4">Brooklyn hood test report checklist</Link>
              <Link href="/blog/restaurant-hvac-or-makeup-air-problem" className="underline underline-offset-4">Restaurant HVAC and makeup air checklist</Link>
            </div>
          </div>
        </Section>
      }
    />
  );
}
