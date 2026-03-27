import { Metadata } from 'next';
import { COMPANY } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal, CTAButton } from '@/components/UI';
import { Cpu, Users, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'True Commercial Service: tech-forward commercial kitchen equipment repair built by operators, for operators.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We built the service company we couldn't find."
        description="True Commercial Service exists because the commercial kitchen repair industry is broken. Slow response times, undertrained techs, zero transparency, and pricing that feels made up. We're fixing all of it."
        showCTA={false}
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <Reveal>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                We didn't start True Commercial because we love HVAC. We started it because we've been on the other side of the phone — waiting for a tech who never shows, getting a bill that doesn't match the quote, and watching revenue walk out the door while equipment sits broken.
              </p>
              <p>
                True Commercial Service is an operator-built, tech-forward commercial kitchen equipment repair company. We combine factory-trained technicians with our own AI-powered platform (Tradecraft AI) to deliver faster diagnostics, higher first-time fix rates, and full transparency on every service call.
              </p>
              <p>
                We're not a PE roll-up. We're not a franchise. We're a small team that knows how to fix equipment and build software — and we think that combination is exactly what this industry needs.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="tradecraft">
        <SectionHeading
          eyebrow="Our Platform"
          title="Tradecraft AI"
          description="The technology backbone that makes True different."
        />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { icon: <Cpu className="w-6 h-6" />, title: 'AI Diagnostics', desc: 'Error codes, symptoms, and equipment history analyzed before the tech arrives. Less guesswork, faster fixes.' },
            { icon: <Zap className="w-6 h-6" />, title: 'Real-Time Tracking', desc: 'Know where your tech is, what they found, and what happens next. No more calling to check on status.' },
            { icon: <Target className="w-6 h-6" />, title: 'Equipment Intelligence', desc: 'QR-tagged equipment with full service history. Every piece of equipment in your kitchen, documented and tracked.' },
            { icon: <Users className="w-6 h-6" />, title: 'Owner Dashboard', desc: 'Multi-location visibility into equipment health, service costs, and upcoming maintenance across all your sites.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 text-amber-400">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to see the difference?</h2>
            <p className="text-lg text-slate-400 mb-8">One call. That's all it takes.</p>
            <CTAButton large />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
