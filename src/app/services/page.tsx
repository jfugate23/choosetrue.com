import { Metadata } from 'next';
import Link from 'next/link';
import { Flame, Thermometer, Wind, GlassWater, Coffee, ShieldCheck, ArrowRight, Clock, Wrench, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal, CTAButton } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Equipment Repair Services',
  description: 'Full-service commercial kitchen equipment repair: cooking, refrigeration, HVAC, beverage, espresso machines, and preventive maintenance agreements.',
};

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-7 h-7" />,
  Thermometer: <Thermometer className="w-7 h-7" />,
  Wind: <Wind className="w-7 h-7" />,
  GlassWater: <GlassWater className="w-7 h-7" />,
  Coffee: <Coffee className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="One call. Every piece of equipment in your kitchen."
        description="From fryers and walk-in coolers to espresso machines and rooftop HVAC — True Commercial Service handles it all with factory-trained technicians and AI-powered diagnostics."
      />

      <Section id="emergency">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <Link
                href={`/services/${service.slug}`}
                className="group block glass-card rounded-xl p-8 hover:border-amber-500/20 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <span className="text-amber-400">{iconMap[service.icon]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.longDescription}</p>
                {service.equipment.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.equipment.slice(0, 4).map((e) => (
                      <span key={e} className="text-[11px] bg-white/5 text-slate-400 px-2 py-1 rounded">{e}</span>
                    ))}
                    {service.equipment.length > 4 && (
                      <span className="text-[11px] text-amber-500 px-2 py-1">+{service.equipment.length - 4} more</span>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-1 text-sm text-amber-400 font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we're different */}
      <Section>
        <SectionHeading
          eyebrow="Why True"
          title="Service the way it should work."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="w-6 h-6" />, title: '4-Hour Response', desc: 'We don\'t make you wait days. Average response time under 4 hours, with same-day emergency dispatch available 24/7.' },
            { icon: <CheckCircle2 className="w-6 h-6" />, title: '94% First-Fix Rate', desc: 'AI diagnostics + factory training means our techs show up knowing what\'s wrong and carrying the right parts.' },
            { icon: <Wrench className="w-6 h-6" />, title: '90-Day Guarantee', desc: 'Parts and labor, guaranteed. If it breaks again within 90 days, we come back and fix it on our dime.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-amber-400">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
