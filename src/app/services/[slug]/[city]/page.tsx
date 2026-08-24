import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { VENTILATION_CITIES as SERVICE_CITIES } from '@/lib/data';
import { Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';
import { CheckCircle2, MapPin, ArrowRight, Phone, Wind, Flame, Thermometer, Snowflake, Wrench, ShieldCheck, Clock, Zap } from 'lucide-react';

type Props = { params: { slug: string; city: string } };

type CityRecord = (typeof SERVICE_CITIES)[number];

interface ServiceCityContent {
  label: string;
  metaDescription: (city: CityRecord) => string;
  intro: string;
  serviceTypes: string[];
  cards: { icon: React.ReactNode; title: string; description: string }[];
  signs: string[];
  faqs: (city: CityRecord) => { q: string; a: string }[];
}

// The high-intent "money" services that get per-city landing pages.
// Kitchen ventilation has its own richer route at /services/kitchen-ventilation/[city].
const SERVICE_CITY_CONTENT: Record<string, ServiceCityContent> = {
  refrigeration: {
    label: 'Commercial Refrigeration Repair',
    metaDescription: (city) =>
      `Commercial refrigeration repair in ${city.city}, ${city.state}. Walk-in coolers, freezers, reach-ins, prep tables, and ice machines. 24/7 emergency response across ${city.region}.`,
    intro:
      'When refrigeration fails, your inventory is on the clock. We prioritize refrigeration calls because every hour down costs you product: and we stock the common parts to fix most failures in one visit.',
    serviceTypes: ['Walk-In Cooler Repair', 'Walk-In Freezer Repair', 'Reach-In Refrigerator Repair', 'Ice Machine Repair', 'Prep Table Repair'],
    cards: [
      {
        icon: <Snowflake className="w-5 h-5" />,
        title: 'Walk-In Cooler & Freezer Repair',
        description: 'Compressor failures, refrigerant leaks, iced-up evaporators, door gasket and heater problems. We diagnose with gauges and meters: not guesswork: and protect your inventory first.',
      },
      {
        icon: <Thermometer className="w-5 h-5" />,
        title: 'Reach-Ins, Prep Tables & Display Cases',
        description: 'True, Traulsen, Turbo Air, Beverage-Air and every other major brand. Temperature complaints, condensation, failed fan motors, and controls: fixed right the first time.',
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: 'Ice Machine Service',
        description: 'Hoshizaki, Manitowoc, Scotsman, Ice-O-Matic. Low production, poor ice quality, scale buildup, and water system faults: plus the descaling and sanitizing that keeps machines healthy.',
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: '24/7 Emergency Response',
        description: 'A walk-in failing overnight is an emergency, not a next-week appointment. Call any hour: we dispatch fast and help you triage product while a tech is en route.',
      },
    ],
    signs: [
      'Walk-in temp creeping above 41°F',
      'Ice or frost building on the evaporator',
      'Compressor short-cycling or running nonstop',
      'Water pooling under equipment',
      'Door gaskets torn or not sealing',
      'Ice machine producing less than usual',
      'Food spoiling faster than it should',
      'Frost on suction lines',
      'Higher electric bills from struggling equipment',
    ],
    faqs: (city) => [
      {
        q: `Who repairs walk-in coolers in ${city.city}?`,
        a: `True Commercial Service repairs walk-in coolers and freezers across ${city.city} and ${city.region}: compressors, evaporators, refrigerant leaks, gaskets, and controls, with 24/7 emergency dispatch at (646) 942-9394.`,
      },
      {
        q: `Do you offer emergency refrigeration repair in ${city.city}?`,
        a: `Yes. Refrigeration emergencies get priority dispatch around the clock. Call (646) 942-9394 any hour: we'll help you protect inventory while a technician heads your way.`,
      },
      {
        q: 'What refrigeration brands do you service?',
        a: 'All major commercial brands: True Manufacturing, Traulsen, Hoshizaki, Turbo Air, Continental, Beverage-Air, Delfield, Randell, Master-Bilt, Manitowoc, Scotsman, and more.',
      },
    ],
  },
  'cooking-equipment': {
    label: 'Commercial Cooking Equipment Repair',
    metaDescription: (city) =>
      `Commercial cooking equipment repair in ${city.city}, ${city.state}. Ovens, fryers, ranges, griddles, combi ovens, and steamers. Factory-trained techs, 24/7 emergency service across ${city.region}.`,
    intro:
      'A dead fryer or error-coded combi oven during service is a revenue emergency. Our factory-trained techs carry manufacturer diagnostics and common parts, so most cooking equipment repairs are done in a single visit.',
    serviceTypes: ['Commercial Oven Repair', 'Combi Oven Repair', 'Fryer Repair', 'Range & Griddle Repair', 'Steamer Repair'],
    cards: [
      {
        icon: <Flame className="w-5 h-5" />,
        title: 'Ovens & Combi Ovens',
        description: 'Rational, Alto-Shaam, Blodgett, Vulcan and more. Error codes, ignition failures, temperature drift, steam system faults, and door/gasket problems: diagnosed with factory procedures.',
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: 'Fryers',
        description: 'Pitco, Frymaster, Henny Penny. Pilot and ignition issues, thermostat and high-limit failures, slow recovery, and filtration problems on gas and electric fryers.',
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        title: 'Ranges, Griddles & Charbroilers',
        description: 'Burner and valve service, thermostat calibration, element replacement, and gas pressure checks that keep flat-tops even and burners at full output.',
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: 'Steamers, Kettles & Warmers',
        description: 'Steam generators, water level controls, descaling, and heating faults on Cleveland, Groen, Vulcan, and other institutional cooking lines.',
      },
    ],
    signs: [
      'Oven throwing error codes mid-service',
      'Fryer recovery slower than it used to be',
      'Burners lighting unevenly or not at all',
      'Pilot lights that will not stay lit',
      'Food cooking unevenly across the deck',
      'Thermostat temps that do not match dial settings',
      'Gas smell near cooking equipment',
      'Breakers tripping on electric equipment',
      'Steam equipment scaling up or heating slowly',
    ],
    faqs: (city) => [
      {
        q: `Who repairs commercial ovens and fryers in ${city.city}?`,
        a: `True Commercial Service repairs commercial cooking equipment across ${city.city} and ${city.region}: ovens, combi ovens, fryers, ranges, griddles, charbroilers, and steamers. Call (646) 942-9394 for same-day service.`,
      },
      {
        q: 'Do you service Rational combi ovens?',
        a: 'Yes. We service Rational iCombi Pro, iCombi Classic, and SCC models, plus Alto-Shaam, Blodgett, Vulcan, and every other major combi and convection oven brand.',
      },
      {
        q: `How fast can you get to my ${city.city} kitchen?`,
        a: `We target 4-hour emergency response across ${city.region}, 24/7. Equipment-down calls during service hours get priority dispatch: call (646) 942-9394.`,
      },
    ],
  },
  hvac: {
    label: 'Commercial HVAC Repair & Maintenance',
    metaDescription: (city) =>
      `Commercial HVAC repair in ${city.city}, ${city.state}. Rooftop units, split systems, makeup air units, and kitchen ventilation. Repairs and preventive maintenance plans across ${city.region}.`,
    intro:
      'Restaurant HVAC works harder than HVAC anywhere else: massive kitchen heat, grease-laden air, and zero tolerance for a hot dining room. We repair and maintain the whole system, roof to dining room.',
    serviceTypes: ['Rooftop Unit Repair', 'Commercial HVAC Repair', 'Makeup Air Unit Repair', 'HVAC Preventive Maintenance'],
    cards: [
      {
        icon: <Wind className="w-5 h-5" />,
        title: 'Rooftop Units (RTUs)',
        description: 'Carrier, Trane, Lennox, Daikin, Bard. Compressor and fan failures, refrigerant leaks, economizer faults, and controls: repaired by EPA 608 certified techs.',
      },
      {
        icon: <Thermometer className="w-5 h-5" />,
        title: 'Makeup Air Units',
        description: 'When your MAU fails, the kitchen goes negative and comfort collapses. Burner, belt, motor, coil, and control repairs on all makeup air brands.',
      },
      {
        icon: <Wrench className="w-5 h-5" />,
        title: 'Split Systems & Walk-In Condensers',
        description: 'Split system diagnostics, condenser and evaporator service, refrigerant work, and airflow fixes for dining rooms, prep areas, and offices.',
      },
      {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: 'HVAC Preventive Maintenance Plans',
        description: 'Seasonal tune-ups, coil cleaning, belt and filter changes, and refrigerant checks on a schedule: so July does not take your dining room down.',
      },
    ],
    signs: [
      'Dining room hot while HVAC runs nonstop',
      'Kitchen unbearably hot during service',
      'RTU short-cycling on the roof',
      'Weak airflow from supply vents',
      'Cooling bills climbing year over year',
      'Ice on refrigerant lines',
      'Makeup air unit not running',
      'Doors slamming or hard to open',
      'No PM plan: filters and coils never serviced',
    ],
    faqs: (city) => [
      {
        q: `Who repairs commercial rooftop units in ${city.city}?`,
        a: `True Commercial Service repairs RTUs, split systems, and makeup air units across ${city.city} and ${city.region}. EPA 608 certified techs, 24/7 emergency dispatch at (646) 942-9394.`,
      },
      {
        q: 'Do you offer HVAC preventive maintenance contracts?',
        a: 'Yes. We build seasonal PM plans around your equipment: coil cleaning, belts, filters, refrigerant checks, and heat exchanger inspection: priced per unit with documentation after every visit.',
      },
      {
        q: `Why is my ${city.city} restaurant kitchen so hot?`,
        a: 'Usually it is not the AC: it is the air balance. A failed makeup air unit or unbalanced exhaust pulls conditioned air out of the building. We diagnose the whole system: HVAC, exhaust, and makeup air together.',
      },
    ],
  },
};

export function generateStaticParams() {
  // These legacy broad-service city pages remain available for old links, but
  // they are noindexed and no longer pre-generated or included in the sitemap.
  return [];
}

export function generateMetadata({ params }: Props): Metadata {
  const content = SERVICE_CITY_CONTENT[params.slug];
  const city = SERVICE_CITIES.find((c) => c.slug === params.city);
  if (!content || !city) return {};
  return {
    title: `${content.label} in ${city.city}, ${city.state}`,
    description: content.metaDescription(city),
    alternates: {
      canonical: `https://choosetrue.com/services/${params.slug}/${city.slug}`,
    },
    robots: { index: false, follow: true },
  };
}

export default function ServiceCityPage({ params }: Props) {
  const content = SERVICE_CITY_CONTENT[params.slug];
  const city = SERVICE_CITIES.find((c) => c.slug === params.city);
  if (!content || !city) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${content.label} in ${city.city}, ${city.state}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'True Commercial Service LLC',
      url: 'https://choosetrue.com',
      telephone: '(646) 942-9394',
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedInPlace: { '@type': 'State', name: city.state },
    },
    description: content.metaDescription(city),
    serviceType: content.serviceTypes,
  };

  const faqs = content.faqs(city);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              {content.label} in <span className="text-amber-400">{city.city}</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">{content.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:+16469429394" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-8 py-4 rounded-xl cta-glow transition-all">
                <Phone className="w-4 h-4" /> 24/7 Emergency: (646) 942-9394
              </a>
              <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/30 text-white font-medium text-sm px-8 py-4 rounded-xl transition-all">
                Schedule Service in {city.city} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we fix */}
      <Section>
        <SectionHeading eyebrow="Services" title={`${content.label.replace(/ Repair.*$/, '')} services in ${city.city}`} />
        <div className="grid md:grid-cols-2 gap-6">
          {content.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Local market copy */}
      <Section className="bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Local Service" title={`Built for ${city.city} kitchens`} />
          <Reveal>
            <p className="text-slate-400 leading-relaxed mb-6">{city.restaurantScene}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {city.neighborhoods.map((n) => (
                <span key={n} className="inline-flex items-center gap-1.5 glass-card rounded-full px-4 py-1.5 text-xs text-slate-300">
                  <MapPin className="w-3 h-3 text-amber-400" /> {n}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Also serving nearby: {city.nearbyAreas.join(', ')}.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Warning signs */}
      <Section>
        <SectionHeading eyebrow="Warning Signs" title={`Call before it fails during service`} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {content.signs.map((sign, i) => (
            <Reveal key={sign} delay={i * 50}>
              <div className="flex items-start gap-3 glass-card rounded-lg px-5 py-4">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{sign}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="FAQ" title={`${content.label} questions: answered`} />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 80}>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA + form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title={`Schedule service in ${city.city}`}
            description="Tell us what's down and we'll get a tech moving. Prefer the phone? Call (646) 942-9394 any hour."
          />
          <ServiceForm />
        </div>
      </Section>
    </>
  );
}
