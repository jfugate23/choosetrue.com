import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { VENTILATION_CITIES, COMPANY } from '@/lib/data';
import { PageHero, Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';
import { CheckCircle2, MapPin, ArrowRight, Phone, Wind, Flame, ThermometerSun, Zap } from 'lucide-react';

type Props = { params: { city: string } };

export function generateStaticParams() {
  return VENTILATION_CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = VENTILATION_CITIES.find((c) => c.slug === params.city);
  if (!city) return {};
  return {
    title: `Kitchen Air Balancing & Exhaust Fan Repair in ${city.city}, ${city.state} | True Commercial Service`,
    description: `Commercial kitchen air balancing, exhaust fan repair, and makeup air unit service in ${city.city}, ${city.state}. Serving ${city.region}. VelGrid testing, energy savings analysis, written balance reports.`,
  };
}

export default function VentilationCityPage({ params }: Props) {
  const city = VENTILATION_CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Kitchen Air Balancing & Ventilation Service in ${city.city}, ${city.state}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'True Commercial Service LLC',
      url: 'https://choosetrue.com',
      telephone: '(908) 743-8688',
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedInPlace: { '@type': 'State', name: city.state },
    },
    description: `Commercial kitchen air balancing, exhaust fan repair, and makeup air unit service in ${city.city}, ${city.state}. Serving restaurants, hotels, and institutional kitchens across ${city.region}.`,
    serviceType: ['Kitchen Air Balancing', 'Exhaust Fan Repair', 'Makeup Air Unit Repair', 'Kitchen Ventilation Service'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does kitchen air balancing cost in ${city.city}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Kitchen air balancing in ${city.city} is priced per hood system, not hourly. Contact us for an exact quote. Every service includes full CFM measurement, damper adjustment, smoke capture test, written report, and energy assessment.` },
      },
      {
        '@type': 'Question',
        name: `Who does commercial kitchen exhaust fan repair in ${city.city}, ${city.state}?`,
        acceptedAnswer: { '@type': 'Answer', text: `True Commercial Service provides same-day exhaust fan repair in ${city.city} and across ${city.region}. We service all brands of upblast, utility, and inline exhaust fans. Belt replacement, motor replacement, bearing service, and fan wheel cleaning. Most repairs completed in under 2 hours.` },
      },
      {
        '@type': 'Question',
        name: `Do you service CaptiveAire hoods in ${city.city}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes. We service CaptiveAire and all major kitchen hood brands in ${city.city} including Greenheck, Accurex, Halton, Gaylord, and Larkin. We carry VelGrid instruments and understand the specific K-factors and conversion tables for each filter type.` },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
          <Reveal>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
              {city.city}, {city.state} &bull; {city.region}
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight max-w-4xl">
              Kitchen Air Balancing & Exhaust Fan Repair in{' '}
              <span className="text-amber-400">{city.city}</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
              {city.restaurantScene}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-8 py-4 rounded-xl cta-glow transition-all">
                Schedule Service in {city.city} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+19087438688" className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/30 text-white font-medium text-sm px-8 py-4 rounded-xl transition-all">
                <Phone className="w-4 h-4 text-amber-400" /> (908) 743-8688
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="Services" title={`Kitchen ventilation services in ${city.city}`} />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Wind className="w-5 h-5" />,
              title: 'Kitchen Air Balancing',
              description: `We measure your exhaust CFM, supply CFM, face velocity, and run a smoke capture test. Then we adjust dampers and fan speeds until the system is properly balanced. You get a written report with all readings and an energy savings analysis.`,
              price: 'Contact us for a quote',
            },
            {
              icon: <Flame className="w-5 h-5" />,
              title: 'Exhaust Fan Repair & Replacement',
              description: 'Belt replacement, motor swaps, bearing service, fan wheel cleaning. We service all upblast, utility, and inline exhaust fans. Same-day emergency service available. Most repairs in under 2 hours.',
              price: 'Contact us for a quote',
            },
            {
              icon: <ThermometerSun className="w-5 h-5" />,
              title: 'Makeup Air Unit Service',
              description: `Your MAU tempers the replacement air your kitchen needs. When it fails, raw outside air floods in through every door and gap. We diagnose burner issues, belt/motor failures, frozen coils, and controls problems on all MAU brands.`,
              price: 'Contact us for a quote',
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: 'Energy Savings Assessment',
              description: `We calculate exactly how much your unbalanced system costs in excess heating and cooling. Most restaurants with ventilation problems waste thousands per year. Our assessment is included with every air balance.`,
              price: 'Included with air balance',
            },
          ].map((service, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.description}</p>
                <p className="text-sm text-amber-400 font-medium">{service.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing CTA */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Pricing" title="Per-system pricing — no hourly surprises" description={`Tell us how many hoods you have and we'll give you an exact quote. Same pricing for every kitchen in ${city.city}.`} />
        <div className="max-w-xl mx-auto text-center">
          <Reveal>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-sm text-slate-400 mb-6">We price per hood system, not by the hour. Every service includes full CFM measurement, damper adjustment, smoke capture test, written balance report, and energy assessment.</p>
              <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-8 py-4 rounded-xl cta-glow transition-all">
                Get a Quote for {city.city} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Signs you need service */}
      <Section>
        <SectionHeading eyebrow="Warning Signs" title={`Does your ${city.city} kitchen have these problems?`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            'Smoke escaping from under the hood',
            'Kitchen uncomfortably hot during service',
            'Front door hard to open or slams shut',
            'Dining room smells like the kitchen',
            'Pilot lights blowing out randomly',
            'Exhaust fan making noise on the roof',
            'Cold drafts in winter despite heat running',
            'Energy bills higher than similar restaurants',
            'Hood system never tested after installation',
          ].map((sign, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="flex items-start gap-3 glass-card rounded-lg px-5 py-4">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{sign}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={500}>
          <p className="text-center mt-8 text-sm text-slate-400">
            If any of these sound familiar, your kitchen ventilation needs professional attention.{' '}
            <Link href="/tools/energy-calculator" className="text-amber-400 hover:text-amber-300 underline">
              Use our free calculator to estimate your energy waste
            </Link>.
          </p>
        </Reveal>
      </Section>

      {/* Service area */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Service Area" title={`Areas we serve from ${city.city}`} />
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {city.neighborhoods.map((n, i) => (
            <Reveal key={n} delay={i * 30}>
              <div className="flex items-center gap-2 glass-card rounded-lg px-4 py-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-sm">{n}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-center text-sm text-slate-500 mb-4">Also serving nearby:</p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {city.nearbyAreas.map((area, i) => (
            <Reveal key={area} delay={i * 30}>
              <span className="text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-md">{area}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title={`Kitchen ventilation questions from ${city.city} owners`} />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: `How much does kitchen air balancing cost in ${city.city}?`,
              a: `We price per hood system, not hourly. Contact us for an exact quote. Every service includes full CFM measurement, damper adjustment, smoke test, written report, and energy assessment. Same pricing for every kitchen in ${city.region}.`,
            },
            {
              q: `Do you repair exhaust fans in ${city.city}?`,
              a: `Yes. We provide same-day exhaust fan repair across ${city.city} and ${city.region}. Belt replacement, motor replacement, bearing service, and complete fan replacement. Most repairs in under 2 hours with parts on the truck. Contact us for pricing.`,
            },
            {
              q: `What kitchen hood brands do you service in ${city.city}?`,
              a: 'We service all commercial kitchen hood brands including CaptiveAire, Greenheck, Accurex, Halton, Gaylord, and Larkin. We carry VelGrid instruments and understand the specific conversion factors for each filter type — baffle and Captrate.',
            },
            {
              q: `My ${city.city} restaurant kitchen is too hot — can you help?`,
              a: 'Yes. An uncomfortably hot kitchen is almost always a ventilation balance problem, not an AC problem. When the exhaust hood doesn\'t capture the thermal plume from cooking, heat stays in the kitchen. One air balance visit typically resolves this permanently. Contact us for a quote.',
            },
          ].map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-sm font-semibold text-amber-400 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEO Content */}
      <Section className="bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold mb-4">Kitchen ventilation service in {city.city}, {city.state}</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>
                True Commercial Service provides expert kitchen air balancing, exhaust fan repair, and makeup air unit service
                for restaurants, hotels, and institutional kitchens in {city.city} and across {city.region}. We specialize in
                commercial kitchen ventilation — it\'s not a side service, it\'s what we do.
              </p>
              <p>
                Most kitchens in {city.city} have never had a professional air balance. The hood was installed, the fan was turned on,
                and nobody measured whether the exhaust and supply are actually matched. The result: energy waste, smoke spillage,
                uncomfortable temperatures, and higher utility bills than necessary.
              </p>
              <p>
                Our technicians carry VelGrid instruments with factory K-factor tables for every major filter type. We measure
                exhaust CFM per filter, supply CFM through the makeup air unit, face velocity at the hood opening, and run a
                smoke capture test. Then we adjust dampers and fan speeds until the system is balanced — typically an 80-90%
                supply-to-exhaust ratio for proper capture and containment.
              </p>
              <p>
                We service all major hood brands including CaptiveAire, Greenheck, Accurex, Halton, and Gaylord. We also repair
                and replace exhaust fans (upblast, utility, inline) and service makeup air units from all manufacturers.
              </p>
              <p>
                Serving {city.neighborhoods.join(', ')} and nearby areas including {city.nearbyAreas.join(', ')}.
                Same-day emergency service available for exhaust fan failures.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA + Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Get Started" title={`Schedule ventilation service in ${city.city}`} description="Tell us about your kitchen and we'll give you an exact quote." />
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <ServiceForm />
          </div>
        </div>
      </Section>
    </>
  );
}
