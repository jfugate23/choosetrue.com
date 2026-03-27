import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, LOCATIONS } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal, CTAButton, ServiceForm } from '@/components/UI';
import { CheckCircle2, MapPin } from 'lucide-react';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  const cities = LOCATIONS.filter((l) => l.status === 'active').map((l) => l.city).join(', ');
  return {
    title: `${service.title} | ${cities}`,
    description: `${service.longDescription} Serving ${cities}. 24/7 emergency service, 90-day guarantee.`,
  };
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.shortTitle}
        title={service.title}
        description={service.longDescription}
      />

      {service.equipment.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Equipment"
            title={`${service.shortTitle} equipment we repair`}
            description="Factory-trained technicians with manufacturer certifications across every major brand."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.equipment.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="flex items-center gap-3 glass-card rounded-lg px-5 py-4">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {service.brands.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Brands" title="Manufacturers we service" />
          <div className="flex flex-wrap justify-center gap-4">
            {service.brands.map((brand, i) => (
              <Reveal key={brand} delay={i * 40}>
                <div className="glass-card rounded-lg px-6 py-3 hover:border-amber-500/20 transition-colors">
                  <span className="text-sm text-slate-300 font-medium">{brand}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow="Service Areas" title={`Where we offer ${service.shortTitle.toLowerCase()} service`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 80}>
              <Link href={`/locations/${loc.slug}`} className="group glass-card rounded-xl p-6 hover:border-amber-500/20 transition-all block">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <h3 className="font-semibold group-hover:text-amber-400 transition-colors">{loc.city}, {loc.state}</h3>
                </div>
                {loc.status === 'coming-soon' ? (
                  <span className="text-xs bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full font-medium">Coming Soon</span>
                ) : (
                  <span className="text-xs bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full font-medium">Now Serving</span>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Get Started" title={`Schedule ${service.shortTitle.toLowerCase()} service`} description="Submit a request and we'll get back to you within the hour." />
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <ServiceForm />
          </div>
        </div>
      </Section>
    </>
  );
}
