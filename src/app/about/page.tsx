import type { Metadata } from 'next';
import { Building2, ClipboardCheck, Gauge, Settings2 } from 'lucide-react';
import { CTAButton, PageHero, Reveal, Section, SectionHeading } from '@/components/UI';

export const metadata: Metadata = {
  title: 'About Joe Fugate & TCS',
  description: 'True Commercial Service is an owner-operated commercial kitchen ventilation service company led by former CaptiveAire Regional Service Manager Joe Fugate.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About TCS" title="Ventilation service led by the person doing the work." description="True Commercial Service is owner-operated by Joe Fugate and focused on commercial kitchen airflow, exhaust fans, makeup air, controls, startup, and manufacturer-assigned field service." showCTA={false} />

      <Section>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 lg:gap-20">
          <Reveal>
            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>Joe built his commercial ventilation foundation at CaptiveAire, where he served as a Regional Service Manager and worked across service sales, startups, field troubleshooting, and air balancing.</p>
              <p>He later founded and grew Southwest Air Balance from a one-person operation into a 12-person commercial service company. The business supported high-volume multi-site customers and handled roughly 1,800 annual service calls for its largest grocery account.</p>
              <p>TCS brings that experience to NYC and North Jersey with a deliberately narrower focus. While the site retains information about broader commercial kitchen equipment capabilities, direct marketing centers on the work Joe knows best: hood capture, exhaust fans, makeup air, VFDs, demand-control ventilation, pollution-control systems, and startup.</p>
              <p>Customers speak with the technician reviewing and performing the job. Manufacturers and dealers get a field partner who understands documentation, sequence-of-operation problems, punch lists, and the realities of working in active commercial kitchens.</p>
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
        <SectionHeading eyebrow="Field Experience" title="The background behind the diagnosis." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Gauge className="w-6 h-6" />, title: 'Airflow', text: 'Hood capture, exhaust and supply readings, pressure relationships, and operational balancing.' },
            { icon: <Settings2 className="w-6 h-6" />, title: 'Controls', text: 'VFDs, DCV, sensors, interlocks, starters, relays, and complete operating sequences.' },
            { icon: <ClipboardCheck className="w-6 h-6" />, title: 'Startup', text: 'Gaylord AirVantage and Accurex field startup/service experience, punch lists, and documentation.' },
            { icon: <Building2 className="w-6 h-6" />, title: 'Operations', text: 'Experience building and running a commercial service organization for demanding multi-site customers.' },
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
