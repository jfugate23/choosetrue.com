import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS, SERVICES, COMPANY } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';
import { MapPin, Phone, Flame, Thermometer, Wind, GlassWater, Coffee, ShieldCheck, ArrowRight, Clock, Mail } from 'lucide-react';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) return {};
  return {
    title: loc.seoTitle,
    description: loc.seoDescription,
  };
}

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5" />, Thermometer: <Thermometer className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />, GlassWater: <GlassWater className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />, ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export default function LocationPage({ params }: Props) {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) notFound();
  const isActive = loc.status === 'active';

  return (
    <>
      <PageHero
        eyebrow={`${loc.city}, ${loc.state}`}
        title={isActive ? `${loc.city} Commercial Kitchen Equipment Repair` : `${loc.city} — Coming Soon`}
        description={loc.description}
        showCTA={isActive}
      />

      {isActive && (
        <Section>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: loc.phone, href: loc.phoneHref },
              { icon: <Clock className="w-5 h-5" />, label: 'Response Time', value: 'Under 4 Hours', href: null },
              { icon: <Mail className="w-5 h-5" />, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-amber-400">{item.icon}</div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-semibold hover:text-amber-400 transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-lg font-semibold">{item.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow="Services" title={`What we ${isActive ? 'fix' : 'will fix'} in ${loc.city}`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link href={`/services/${service.slug}`} className="group flex items-center gap-4 glass-card rounded-xl p-5 hover:border-amber-500/20 transition-all">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold group-hover:text-amber-400 transition-colors">{service.title}</h3>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors flex-shrink-0" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Service Area" title={`Cities and towns we ${isActive ? 'serve' : 'will serve'}`} />
        <div className="flex flex-wrap justify-center gap-3">
          {loc.serviceArea.map((area, i) => (
            <Reveal key={area} delay={i * 40}>
              <div className="flex items-center gap-2 glass-card rounded-lg px-4 py-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-sm">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold mb-4">{loc.seoKeyword.charAt(0).toUpperCase() + loc.seoKeyword.slice(1)}</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>{loc.description}</p>
              <p>True Commercial Service provides expert repair for commercial cooking equipment, refrigeration systems, HVAC, beverage dispensing equipment, and commercial espresso machines across {loc.serviceArea.join(', ')}{loc.state === 'NJ' ? ' and the greater NYC metro area' : ' and the five boroughs of New York City'}.</p>
              <p>Our technicians carry factory certifications from manufacturers including Rational, Hoshizaki, True Manufacturing, Alto-Shaam, La Marzocco, and dozens more. Every service call is powered by our Tradecraft AI platform — giving our techs AI-assisted diagnostics, real-time parts availability, and complete equipment service histories before they even arrive on site.</p>
              <p>Whether you operate a restaurant, grocery store, school cafeteria, or hotel kitchen in the {loc.city} area — True Commercial Service delivers the expertise, technology, and urgency your operation demands.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow={isActive ? 'Get Service' : 'Get Notified'} title={isActive ? `Schedule service in ${loc.city}` : `Be first to know when we launch in ${loc.city}`} />
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <ServiceForm />
          </div>
        </div>
      </Section>
    </>
  );
}
