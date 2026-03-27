'use client';

import { COMPANY, LOCATIONS } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal } from '@/components/UI';
import { MapPin, Wrench, Cpu, TrendingUp } from 'lucide-react';

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Fix equipment. Build technology. Grow with us."
        description="True Commercial Service is hiring experienced technicians and hungry operators. We're building something different — and we need people who want to be part of it."
        showCTA={false}
      />

      <Section>
        <SectionHeading
          eyebrow="Why True"
          title="This isn't your typical service company gig."
        />
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Wrench className="w-6 h-6" />, title: 'Real Training', desc: 'Factory certifications, AI-assisted diagnostics, and a knowledge base that actually helps you in the field.' },
            { icon: <Cpu className="w-6 h-6" />, title: 'Tech-Forward', desc: 'You\'ll use modern tools — not paper tickets and spreadsheets. Tradecraft AI makes your job easier, not harder.' },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Growth Path', desc: 'We\'re expanding to multiple markets. Early team members grow with the company — that\'s by design, not accident.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-amber-400">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Open Markets"
          title="Where we're hiring"
        />
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {LOCATIONS.map((loc) => (
            <div key={loc.slug} className="flex items-center gap-2 glass-card rounded-lg px-5 py-3">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">{loc.city}, {loc.state}</span>
              {loc.status === 'coming-soon' && <span className="text-[10px] text-amber-500">Coming Soon</span>}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-2">Interested? Tell us about yourself.</h3>
              <p className="text-sm text-slate-400 mb-6">We'll reach out if there's a fit. No recruiters, no runaround.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors" />
                  <input type="email" placeholder="Email *" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors" />
                  <input type="tel" placeholder="Phone *" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors" />
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors">
                    <option value="">Preferred Location</option>
                    {LOCATIONS.map((l) => (
                      <option key={l.slug} value={l.slug}>{l.city}, {l.state}</option>
                    ))}
                  </select>
                </div>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors">
                  <option value="">Role Interest</option>
                  <option value="tech">Field Technician</option>
                  <option value="lead">Lead Technician</option>
                  <option value="dispatch">Dispatch / Operations</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Relevant experience, certifications, or anything else you want us to know" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none" />
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold py-3.5 rounded-lg cta-glow transition-all text-sm">
                  Submit Interest
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
