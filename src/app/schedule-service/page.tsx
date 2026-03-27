import { Metadata } from 'next';
import { COMPANY } from '@/lib/data';
import { Section, Reveal, ServiceForm } from '@/components/UI';
import { Phone, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schedule Service',
  description: 'Schedule commercial kitchen equipment repair with True Commercial Service. Fast response, factory-trained techs, 90-day guarantee.',
};

export default function ScheduleServicePage() {
  return (
    <>
      <div className="relative pt-32 lg:pt-40 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in">Schedule Service</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-up">Let&apos;s get your kitchen running.</h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fill out the form below and we&apos;ll respond within the hour. For emergencies, call us directly.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Emergency? Call now.</p>
                    <a href={COMPANY.emergencyPhoneHref} className="text-lg font-bold hover:text-amber-400 transition-colors">{COMPANY.emergencyPhone}</a>
                  </div>
                </div>
                <p className="text-xs text-slate-500">Available 24/7/365. We pick up.</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-1">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <p className="text-xs text-slate-500 uppercase">Main Line</p>
                </div>
                <a href={COMPANY.phoneHref} className="text-lg font-semibold hover:text-amber-400 transition-colors ml-7">{COMPANY.phone}</a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">What to expect</h3>
                {[
                  { icon: <Clock className="w-4 h-4" />, text: 'Response within 1 hour during business hours' },
                  { icon: <CheckCircle2 className="w-4 h-4" />, text: 'Tech dispatched same-day for emergencies' },
                  { icon: <ShieldCheck className="w-4 h-4" />, text: '90-day guarantee on parts and labor' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="text-amber-400">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="glass-card rounded-2xl p-6 lg:p-8">
                <h2 className="text-xl font-semibold mb-6">Request Service</h2>
                <ServiceForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
