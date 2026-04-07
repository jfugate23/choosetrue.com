import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/lib/data';
import { Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';
import { Wind, AlertTriangle, CheckCircle2, ArrowRight, Phone, DollarSign, ShieldCheck, Zap, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Pollution Control | ESP & Ecology Unit Service | NYC Local Law 38',
  description: 'ESP cell cleaning, ecology unit service, and Smoke Hog maintenance for NYC and NJ restaurants. NYC Local Law 38 compliance. Avoid $10,000+ fines.',
  openGraph: {
    title: 'Kitchen Exhaust Pollution Control Service | True Commercial Service',
    description: 'ESP cleaning, ecology unit maintenance, NYC DEP compliance. Avoid $10K+ fines.',
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Exhaust Pollution Control Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'True Commercial Service LLC',
    url: 'https://choosetrue.com',
  },
  description: 'Electrostatic precipitator (ESP) cleaning, ecology unit maintenance, Smoke Hog service, and NYC Local Law 38 compliance for commercial kitchens.',
  areaServed: ['New Jersey', 'New York City'],
  serviceType: 'Kitchen Exhaust Pollution Control',
};

export default function PollutionControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
          <Reveal>
            <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-4">NYC Local Law 38 Compliance</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl">
              Keep your kitchen compliant.
              <span className="text-amber-400"> We handle the paperwork.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
              NYC Local Law 38 requires restaurants to maintain pollution control equipment and keep documented service logs. We clean your ESP, service your ecology unit, and provide the professional maintenance records that protect you during a DEP inspection.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-base px-8 py-4 rounded-xl cta-glow transition-all">
                Schedule ESP Service <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+14052924510" className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/30 text-white font-medium text-base px-8 py-4 rounded-xl transition-all">
                <Phone className="w-4 h-4 text-amber-400" /> (405) 292-4510
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Law */}
      <Section className="bg-red-500/[0.03]">
        <SectionHeading eyebrow="The Law" title="NYC Local Law 38 — What you need to know" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 border-red-500/20">
              <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-3">What&apos;s Required</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />All commercial cooking producing grease-laden vapors must have emission control equipment</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />ESPs must achieve at least 75% particulate matter reduction</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />High-volume charbroiling (&gt;875 lbs/week) requires 95% removal + odor control</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />Maintenance logs must be kept and available for DEP inspection</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />Equipment must be registered with NYC DEP</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-card rounded-2xl p-8 border-red-500/20">
              <DollarSign className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-3">The Fines</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />First violation: $1,000 - $2,500</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />Repeat violations: up to $10,000+</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />No maintenance logs: violation even if unit works</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />Neighbor complaints trigger DEP inspections</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />NYC enforcement has increased every year since 2016</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="text-center mt-8 text-sm text-slate-500 max-w-2xl mx-auto">
            NJ doesn&apos;t have an equivalent law yet — but landlords in Jersey City, Newark, and Hoboken increasingly require ESPs in commercial leases, and NJ DEP can enforce under nuisance odor rules.
          </p>
        </Reveal>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="Our Services" title="Complete pollution control maintenance" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Zap className="w-5 h-5" />,
              title: 'ESP Cell Cleaning',
              description: 'We remove the collector cells, soak them in professional-grade alkaline solution, power wash, dry, and reinstall. This is the core of ESP maintenance — dirty cells don\'t collect grease, and the unit fails inspection.',
              price: 'Contact us for a quote',
            },
            {
              icon: <Wind className="w-5 h-5" />,
              title: 'Ecology Unit Service',
              description: 'Full service on rooftop ecology units — cell cleaning, pre-filter and post-filter replacement, housing inspection, drain cleaning. These units take a beating from weather and need regular attention.',
              price: 'Contact us for a quote',
            },
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: 'Power Supply & Controls Repair',
              description: 'High-voltage power supply diagnosis and repair, control board replacement, ionizer wire replacement, safety interlock testing. When the indicator light is red, we get it back to green.',
              price: 'Contact us for a quote',
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: 'Quarterly Maintenance Contracts',
              description: 'Stay compliant year-round. We clean cells, replace filters, inspect components, and maintain your DEP-required service logs. You never think about it — we just show up.',
              price: 'Contact us for a quote',
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <p className="text-sm text-amber-400 font-medium">{item.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing CTA */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Pricing" title="Single visit or quarterly contract" description="Every visit includes a documented service report for your compliance records. Contact us for a custom quote." />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold mb-4">What&apos;s Included</h3>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Cell removal and cleaning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Pre-filter replacement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Ionizer wire &amp; power supply inspection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Carbon filter replacement (quarterly)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />DEP-ready maintenance logs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Priority scheduling</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold mb-4">Why It Matters</h3>
              <p className="text-xs text-slate-500 mb-4">What DEP looks for during inspections</p>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Dated service logs on-site</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Working unit with green indicator</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Equipment registered with DEP</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-amber-400" />Fines: $1K-$10K+ without records</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="text-center mt-8">
            <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-8 py-4 rounded-xl cta-glow transition-all">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Brands */}
      <Section>
        <SectionHeading eyebrow="Equipment We Service" title="All major ESP and pollution control brands" />
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Smoke Hog', 'CaptiveAire', 'Halton', 'Ecology / PPC Air', 'Accurex', 'Greenheck', 'Streivor', 'Parker Hannifin'].map((brand, i) => (
            <Reveal key={brand} delay={i * 40}>
              <div className="glass-card rounded-lg px-6 py-3 hover:border-amber-500/20 transition-colors">
                <span className="text-sm text-slate-300 font-medium">{brand}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {['Electrostatic Precipitators (ESP)', 'Rooftop Ecology Units', 'Smoke Hog Systems', 'Carbon & Charcoal Filters', 'UV Oxidation Systems', 'Catalytic Oxidizers', 'Pre-Filters & Post-Filters', 'ESP Power Supplies'].map((item, i) => (
            <Reveal key={item} delay={i * 40}>
              <div className="flex items-center gap-3 glass-card rounded-lg px-4 py-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bundle CTA */}
      <Section className="bg-amber-500/[0.03]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Bundle & Save</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">ESP service + air balancing in one visit</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              We&apos;re already on your roof cleaning the ESP. While we&apos;re there, we balance your exhaust and makeup air, check the fan, and run a smoke capture test. One visit, full ventilation compliance — and you save compared to scheduling separately.
            </p>
            <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-8 py-4 rounded-xl cta-glow transition-all">
              Get a Bundle Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions about ESP and pollution control service" />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'Is an ESP required for my NYC restaurant?', a: 'If your restaurant does any charbroiling, grilling, deep frying, or roasting that produces grease-laden vapors, NYC Local Law 38 requires emission control equipment. Most restaurants that cook with heat need an ESP, ecology unit, or equivalent pollution control device.' },
            { q: 'How often does an ESP need to be cleaned?', a: 'Quarterly at minimum for most restaurants. High-volume operations (steakhouses, charbroil-heavy menus) may need monthly cleaning. NYC DEP requires you to maintain service logs documenting every cleaning and inspection.' },
            { q: 'What happens if my ESP isn\'t maintained?', a: 'NYC DEP can fine you $1,000 to $10,000+ per violation. Not having maintenance logs is itself a violation, even if the unit appears functional. Neighbor complaints about smoke or odors trigger DEP inspections. Repeat violations escalate in cost and can result in equipment shutdown orders.' },
            { q: 'Do I need an ESP in New Jersey?', a: 'NJ does not have a statewide equivalent to NYC Local Law 38. However, many landlords in urban NJ (Jersey City, Newark, Hoboken) require ESPs in commercial kitchen leases. NJ DEP can also take action under nuisance odor provisions if your restaurant generates complaints.' },
            { q: 'What brands of ESP do you service?', a: 'We service all major brands including Smoke Hog (Parker Hannifin), CaptiveAire, Halton, Ecology/PPC Air, Accurex, Greenheck, and Streivor. If it\'s on your roof and has collector cells, we service it.' },
            { q: 'Can you bundle ESP cleaning with air balancing?', a: 'Yes — and you should. We\'re already on your roof. An ESP service + air balance bundle saves you money compared to scheduling separately, and ensures your entire exhaust system is compliant and efficient in one visit. Contact us for bundle pricing.' },
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

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is an ESP required for my NYC restaurant?', acceptedAnswer: { '@type': 'Answer', text: 'If your restaurant does any charbroiling, grilling, deep frying, or roasting that produces grease-laden vapors, NYC Local Law 38 requires emission control equipment.' } },
          { '@type': 'Question', name: 'How often does an ESP need to be cleaned?', acceptedAnswer: { '@type': 'Answer', text: 'Quarterly at minimum. High-volume operations may need monthly cleaning. NYC DEP requires service logs documenting every cleaning and inspection.' } },
          { '@type': 'Question', name: 'What is the fine for not maintaining an ESP in NYC?', acceptedAnswer: { '@type': 'Answer', text: 'NYC DEP fines range from $1,000 to $10,000+ per violation. Not having maintenance logs is itself a violation. Repeat violations escalate.' } },
          { '@type': 'Question', name: 'How much does ESP cleaning cost?', acceptedAnswer: { '@type': 'Answer', text: 'Contact us for a quote on single visit or quarterly contract ESP service. Pricing depends on your unit size and service needs. Compare the cost of regular maintenance to DEP fines of $1,000-$10,000+ per violation.' } },
        ],
      }) }} />

      {/* Service Areas */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Service Area" title="ESP and pollution control service across NJ & NYC" />
        <div className="flex flex-wrap justify-center gap-3">
          {['Oklahoma City', 'Norman', 'Edmond', 'Moore', 'Midwest City', 'Del City', 'Yukon', 'Mustang', 'Stillwater', 'Shawnee'].map((area, i) => (
            <Reveal key={area} delay={i * 30}>
              <div className="flex items-center gap-2 glass-card rounded-lg px-4 py-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-sm">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA + Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionHeading eyebrow="Get Started" title="Stay compliant, stay open" description="Schedule your ESP service and let us handle the maintenance documentation." />
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <ServiceForm />
          </div>
        </div>
      </Section>
    </>
  );
}
