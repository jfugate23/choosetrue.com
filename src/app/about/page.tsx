import type { Metadata } from 'next';
import { Building2, ClipboardCheck, Gauge, Settings2 } from 'lucide-react';
import { CTAButton, PageHero, Reveal, Section, SectionHeading } from '@/components/UI';

export const metadata: Metadata = {
  title: 'About True Commercial Service',
  description: 'True Commercial Service specializes in commercial kitchen hood and ventilation service across New York City and New Jersey.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About TCS" title="Commercial kitchen hood and ventilation specialists." description="True Commercial Service focuses on commercial kitchen airflow, exhaust fans, makeup air, controls, startup, and manufacturer-assigned field service." showCTA={false} />

      <Section>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-20">
          <Reveal>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>True Commercial Service is built around a focused scope: commercial kitchen hood capture, exhaust fans, makeup air, VFDs, demand-control ventilation, pollution-control systems, and startup support.</p>
              <p>The service process starts with the operating complaint, then follows the complete mechanical, electrical, controls, and airflow sequence until the actual cause is identified.</p>
              <p>TCS keeps communication direct and documents the measured condition, work performed, remaining deficiencies, and practical next steps.</p>
              <p>Manufacturers and dealers get a field-service partner prepared to work from approved procedures, coordinate with site contacts, complete punch lists, and provide clear closeout information.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-5">Current TCS scope</h2>
              <ul className="space-y-3 text-sm text-slate-300">
                {['Commercial kitchen ventilation diagnostics', 'Exhaust fan and makeup air repair', 'VFD, DCV, sensor, and control troubleshooting', 'Operational airflow readings and capture testing', 'Manufacturer-assigned startup, warranty, and field service'].map((item) => <li key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />{item}</li>)}
              </ul>
              <p className="text-xs text-slate-500 mt-6 pt-5 border-t border-white/10">No hood/duct cleaning, fire-suppression service, or residential range hoods.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Service Method" title="A practical path from symptom to cause." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Gauge className="w-6 h-6" />, title: 'Airflow', text: 'Hood capture, exhaust and supply readings, pressure relationships, and operational balancing.' },
            { icon: <Settings2 className="w-6 h-6" />, title: 'Controls', text: 'VFDs, DCV, sensors, interlocks, starters, relays, and complete operating sequences.' },
            { icon: <ClipboardCheck className="w-6 h-6" />, title: 'Startup', text: 'Sequence verification, punch lists, equipment checkout, coordination, and documentation.' },
            { icon: <Building2 className="w-6 h-6" />, title: 'Field Service', text: 'Commercial-kitchen service structured around access, uptime, clear findings, and practical closeout.' },
          ].map((item, index) => <Reveal key={item.title} delay={index * 70}><div className="glass-card rounded-xl p-6 h-full"><div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4">{item.icon}</div><h2 className="font-semibold mb-2">{item.title}</h2><p className="text-sm text-slate-400 leading-relaxed">{item.text}</p></div></Reveal>)}
        </div>
      </Section>

      <Section>
        <Reveal className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Have a ventilation problem?</h2>
          <p className="text-lg text-slate-400 mb-8">Describe the symptom and let TCS find the cause.</p>
          <CTAButton large>Request Service</CTAButton>
        </Reveal>
      </Section>
    </>
  );
}
