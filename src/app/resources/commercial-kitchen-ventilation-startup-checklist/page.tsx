import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, ClipboardCheck, FileText, Gauge, Phone, Settings2, Wind } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { Reveal, Section, SectionHeading } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation Startup Checklist',
  description: 'A concise commercial kitchen hood, exhaust fan, makeup air, controls, airflow, and project-readiness checklist for NYC and New Jersey installations.',
  alternates: { canonical: '/resources/commercial-kitchen-ventilation-startup-checklist' },
};

const checklist = [
  {
    icon: Wind,
    title: 'Mechanical readiness',
    summary: 'Hoods, fans, duct connections, access, belts, filters, and dampers.',
    items: ['Hoods, exhaust fans, and makeup-air equipment are installed', 'Fan wheels turn freely and belts, sheaves, bearings, and guards are in place', 'Filters, grease extractors, access panels, and dampers are installed', 'Roof and mechanical-room access is available and safe', 'Duct connections and fan discharge are visibly complete'],
  },
  {
    icon: Settings2,
    title: 'Electrical & controls',
    summary: 'Power, starters, VFDs, sensors, interlocks, and control drawings.',
    items: ['Permanent power is available at fans, controls, VFDs, and connected equipment', 'Disconnects, starters, overloads, and VFDs are installed and labeled', 'Hood controls, sensors, switches, and low-voltage wiring are complete', 'Exhaust and makeup-air interlocks are ready to test', 'Current wiring diagrams and sequence-of-operation documents are on site'],
  },
  {
    icon: Gauge,
    title: 'Operational testing',
    summary: 'Rotation, amperage, commands, airflow, capture, and pressure.',
    items: ['Confirm fan rotation before extended operation', 'Record motor amperage and VFD operating frequency', 'Verify exhaust and makeup air start, stop, and modulate as intended', 'Check hood capture while the relevant cooking equipment operates', 'Observe door pressure, cross-drafts, supply-air interference, noise, and vibration'],
  },
  {
    icon: FileText,
    title: 'Closeout package',
    summary: 'Settings, readings, faults, corrections, and open responsibilities.',
    items: ['Record equipment manufacturer, model, serial number, and serving area', 'Save VFD settings, control configuration, fault history, and final operating state', 'Document airflow readings and test conditions when included in the scope', 'Separate completed corrections from open trade or installation deficiencies', 'Assign each open item and confirm the required retest or follow-up'],
  },
];

export default function StartupChecklistPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Commercial Kitchen Ventilation Startup Checklist',
    description: 'A concise commercial kitchen hood, exhaust fan, makeup air, controls, airflow, and project-readiness checklist.',
    author: { '@type': 'Organization', name: 'True Commercial Service LLC' },
    publisher: { '@type': 'Organization', name: 'True Commercial Service LLC', logo: { '@type': 'ImageObject', url: 'https://choosetrue.com/images/logo.png' } },
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    mainEntityOfPage: 'https://choosetrue.com/resources/commercial-kitchen-ventilation-startup-checklist',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-20 right-0 w-[560px] h-[460px] bg-amber-500/[0.07] rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-5">Field Resource</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">Commercial kitchen ventilation startup checklist.</h1>
            <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">A practical readiness and closeout list for hoods, exhaust fans, makeup air, controls, VFDs, and airflow testing.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/services/kitchen-ventilation-startup-commissioning" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow transition-all">Schedule Startup Support <ArrowRight className="w-5 h-5" /></Link>
              <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 px-8 py-4 rounded-xl font-medium transition-all"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Checklist" title="Open only the project stage you need." description="Use this list before startup and again before the final closeout visit." />
        <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {checklist.map((section, index) => (
            <Reveal key={section.title} delay={index * 60}>
              <details className="group glass-card rounded-2xl p-6 h-full">
                <summary className="cursor-pointer list-none flex items-start gap-4">
                  <span className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0"><section.icon className="w-5 h-5" /></span>
                  <span className="flex-1"><span className="block font-semibold">{section.title}</span><span className="block mt-1 text-sm text-slate-400 leading-relaxed">{section.summary}</span></span>
                  <span className="text-amber-400 text-xl font-light group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-5 pt-5 border-t border-white/10 space-y-3">
                  {section.items.map((item) => <p key={item} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />{item}</p>)}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <div>
            <SectionHeading eyebrow="Avoid the Failed Visit" title="Five conditions that stop productive startup." center={false} />
          </div>
          <Reveal>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-6 lg:p-8">
              {['No permanent power at fans or controls', 'Missing VFD, starter, sensor, or interlock wiring', 'Unsafe or unavailable roof access', 'Other trades still changing the operating sequence', 'No current drawings, equipment schedule, or responsible project contact'].map((item) => <p key={item} className="flex items-start gap-3 py-2.5 text-sm text-slate-300"><AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />{item}</p>)}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-navy-50 p-7 lg:p-10 text-center">
          <ClipboardCheck className="w-8 h-8 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold">Need TCS to run the startup or performance test?</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">Send the site address, equipment schedule, controls information, project status, and required completion date.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-6 py-3 rounded-xl transition-all">Request Project Support <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/services/kitchen-hood-performance-testing" className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/30 px-6 py-3 rounded-xl text-sm font-medium transition-all">Performance testing</Link>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-600">This checklist supports project readiness. It is not an official FDNY inspection, fire-suppression certification, engineering design, or guarantee of approval.</p>
        </div>
      </Section>
    </>
  );
}
