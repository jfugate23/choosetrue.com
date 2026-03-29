import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, LOCATIONS } from '@/lib/data';
import { Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';
import { Wind, DollarSign, Flame, ShieldCheck, ThermometerSun, Gauge, AlertTriangle, CheckCircle2, ArrowRight, Phone, MapPin, Zap, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation & Air Balancing | True Commercial Service',
  description: 'Commercial kitchen air balancing, exhaust fan repair, and makeup air service in NJ and NYC. Stop wasting energy. Fix smoke spillage. Stay code compliant. IKECA certified.',
  openGraph: {
    title: 'Kitchen Ventilation & Air Balancing | True Commercial Service',
    description: 'Your hood system is pulling conditioned air straight out of your building. We fix that.',
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Kitchen Ventilation & Air Balancing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'True Commercial Service LLC',
    url: 'https://choosetrue.com',
  },
  description: 'Commercial kitchen air balancing, exhaust fan repair, and makeup air unit service. We test, adjust, and balance your kitchen ventilation system to eliminate smoke spillage, reduce energy waste, and keep you code compliant.',
  areaServed: ['New Jersey', 'New York City', 'Oklahoma City'],
  serviceType: 'Kitchen Ventilation Air Balancing',
};

export default function KitchenVentilationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
          <Reveal>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">Kitchen Ventilation & Air Balancing</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl">
              Your hood system is costing you
              <span className="text-amber-400"> thousands</span> a year.
            </h1>
            <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
              Poorly balanced kitchen exhaust pulls heated and cooled air straight out of your building. Smoke spills into the dining room. Energy bills climb. Health inspectors write you up. We fix all of it in one visit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-base px-8 py-4 rounded-xl cta-glow transition-all">
                Get a Ventilation Assessment <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-amber-500/30 text-white font-medium text-base px-8 py-4 rounded-xl transition-all">
                <Phone className="w-4 h-4 text-amber-400" /> {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <Section>
        <SectionHeading
          eyebrow="The Problem"
          title="Most commercial kitchens are bleeding energy and don't know it"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ThermometerSun className="w-6 h-6" />,
              title: 'Conditioned Air Loss',
              description: 'Your exhaust hood pulls air out of the kitchen. If makeup air isn\'t balanced to match, your HVAC is heating or cooling air that goes straight out the roof. That\'s $3,000-8,000/year in wasted energy for a typical restaurant.',
            },
            {
              icon: <AlertTriangle className="w-6 h-6" />,
              title: 'Smoke & Heat Spillage',
              description: 'When the hood can\'t capture cooking effluent, smoke and grease-laden air spill into the kitchen and dining room. Customers see it. Staff feel it. Health inspectors flag it.',
            },
            {
              icon: <Gauge className="w-6 h-6" />,
              title: 'Negative Pressure',
              description: 'Doors that are hard to open, cold drafts in winter, pilot lights blowing out — these are signs your kitchen is under negative pressure. The exhaust is pulling more air out than the makeup air unit is pushing in.',
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-8 h-full border-red-500/10">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Test. Adjust. Balance. One visit."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Wind className="w-5 h-5" />,
              title: 'Kitchen Air Balancing',
              description: 'We measure exhaust CFM, makeup air volume, face velocity at the hood, and static pressure throughout the system. Then we adjust dampers, fan speeds, and makeup air settings until the system is properly balanced. You get a written report with before/after numbers.',
              price: 'Starting at $1,200 per system',
            },
            {
              icon: <Flame className="w-5 h-5" />,
              title: 'Exhaust Fan Service & Repair',
              description: 'Belt replacement, motor swaps, bearing lubrication, complete fan replacements. We service upblast, utility, and inline exhaust fans from every major manufacturer. If your fan is screaming, vibrating, or barely moving air — we fix it.',
              price: 'Repair from $350 / Replacement from $1,500',
            },
            {
              icon: <ThermometerSun className="w-5 h-5" />,
              title: 'Makeup Air Unit Service',
              description: 'Your MAU is supposed to replace the air your exhaust pulls out — at the right temperature. If it\'s undersized, misconfigured, or broken, your kitchen is either freezing in winter or an oven in summer. We diagnose and repair all MAU brands.',
              price: 'Service calls from $450',
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: 'Energy Savings Assessment',
              description: 'We\'ll show you exactly how much energy your ventilation system is wasting and what it costs you per month. Most restaurants save $200-500/month after proper balancing. Hotels and institutions save significantly more.',
              price: 'Included with every air balance',
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
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

      {/* Real Work Photos */}
      <Section>
        <SectionHeading eyebrow="Our Work" title="Real kitchens. Real equipment. Real results." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/commercial-kitchen-hood-installation-nj.jpg" alt="Commercial kitchen hood installation in New Jersey — new hood system with protective film during startup" fill className="object-cover" />
            </div>
            <p className="text-xs text-slate-500 mt-2">Hood system installation and startup</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/vfd-drives-kitchen-ventilation-controls.jpg" alt="Lenze VFD drives for demand-controlled kitchen ventilation — variable speed exhaust fan controls" fill className="object-cover" />
            </div>
            <p className="text-xs text-slate-500 mt-2">VFD drives for demand-controlled ventilation</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/kitchen-hood-fire-suppression-baffle-filters.jpg" alt="Kitchen hood fire suppression nozzle and baffle filters above commercial fryer" fill className="object-cover" />
            </div>
            <p className="text-xs text-slate-500 mt-2">Fire suppression and baffle filter inspection</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/commercial-kitchen-hood-supply-plenum.jpg" alt="Commercial kitchen hood back supply plenum — makeup air delivery system" fill className="object-cover" />
            </div>
            <p className="text-xs text-slate-500 mt-2">Back supply plenum — makeup air delivery</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2">
              <Image src="/images/commercial-kitchen-full-view.jpg" alt="Full commercial kitchen with hood systems, prep tables, and cooking equipment — institutional kitchen build" fill className="object-cover" />
            </div>
            <p className="text-xs text-slate-500 mt-2">Full commercial kitchen — institutional build</p>
          </Reveal>
        </div>
      </Section>

      {/* Energy Savings Numbers */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="The Numbers"
          title="What a balanced kitchen saves you"
          description="Real data from the U.S. Department of Energy and field studies on commercial kitchen ventilation."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '25-50%', label: 'HVAC energy reduction from proper makeup air balancing' },
            { value: '$3,000-8,000', label: 'Annual energy wasted by a poorly balanced restaurant kitchen' },
            { value: '2-3 mo', label: 'Typical payback period on an air balance service visit' },
            { value: '57%', label: 'Average fan energy reduction with demand-controlled ventilation' },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="text-center glass-card rounded-2xl p-8">
                <p className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">{stat.value}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}>
          <div className="mt-8 text-center">
            <Link href="/tools/energy-calculator" className="inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-400 font-semibold text-sm px-6 py-3 rounded-xl transition-all">
              <Zap className="w-4 h-4" /> Calculate Your Kitchen&apos;s Energy Waste — Free Tool <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Who This Is For */}
      <Section>
        <SectionHeading
          eyebrow="Who This Is For"
          title="If you run a commercial kitchen, this is for you"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Flame className="w-5 h-5" />,
              title: 'Restaurants',
              items: ['Smoke spilling out of the hood during cooking', 'Dining room smells like the kitchen', 'Energy bills higher than they should be', 'Uncomfortable temperatures for staff'],
            },
            {
              icon: <Building2 className="w-5 h-5" />,
              title: 'Hotels & Institutions',
              items: ['Multiple hoods need coordinated balancing', 'Banquet kitchen ventilation issues', 'Guest complaints about kitchen odors', 'Energy cost reduction targets'],
            },
            {
              icon: <ShieldCheck className="w-5 h-5" />,
              title: 'New Buildouts & Renovations',
              items: ['Certificate of occupancy requires air balance', 'GC needs a ventilation sub who shows up', 'Architect specs require documented CFM readings', 'Hood system just installed — needs commissioning'],
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((line, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="No hidden fees. No hourly guessing. Per-system pricing so you know the cost before we show up."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: '1 Hood System',
              description: '1 hood + 1 exhaust fan + makeup air check',
              price: '$1,200',
              features: ['Full CFM measurement', 'Damper adjustment', 'MAU verification', 'Written balance report', 'Energy assessment'],
            },
            {
              name: '2 Hood Systems',
              description: '2 hoods + 2 exhaust fans + makeup air',
              price: '$2,000',
              popular: true,
              features: ['Everything in 1-hood', 'Cross-system balancing', 'Coordinated fan speeds', 'Written balance report', 'Energy assessment'],
            },
            {
              name: '3+ Hood Systems',
              description: 'Hotels, hospitals, large kitchens',
              price: '$2,500+',
              features: ['Full kitchen balance', 'Multiple MAU coordination', 'Demand control evaluation', 'Detailed engineering report', 'Energy savings projection'],
            },
          ].map((tier, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`glass-card rounded-2xl p-8 h-full relative ${tier.popular ? 'border-amber-500/30 ring-1 ring-amber-500/20' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-navy-300 text-xs font-bold px-4 py-1 rounded-full">Most Common</span>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{tier.description}</p>
                <p className="text-3xl font-bold text-amber-400 mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps to a balanced kitchen"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Schedule', description: 'Tell us how many hoods you have and what issues you\'re seeing. We\'ll quote it on the spot.' },
            { step: '02', title: 'Measure', description: 'We measure exhaust CFM, supply air volume, face velocity, and static pressure at every point in the system.' },
            { step: '03', title: 'Adjust', description: 'We adjust dampers, fan speeds, and makeup air settings. Then we run a smoke capture test to verify the hood is working.' },
            { step: '04', title: 'Report', description: 'You get a written report with before/after readings, energy savings estimate, and any recommended repairs.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <span className="text-4xl font-bold text-amber-500/20">{item.step}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ Schema + Visible FAQ */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="FAQ" title="Common questions about kitchen air balancing" />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: 'How do I know if my kitchen ventilation needs balancing?', a: 'If you see smoke escaping the hood during cooking, feel cold drafts in winter, have doors that are hard to open, notice pilot lights blowing out, or your dining room smells like the kitchen — your system is out of balance. Any one of these signs means you\'re also wasting energy.' },
            { q: 'How long does an air balance take?', a: 'A single-hood restaurant kitchen takes 3-4 hours. A two-hood system takes 5-6 hours. Larger kitchens (hotels, hospitals) may take a full day. We do all the work during business hours — no overnight visits needed.' },
            { q: 'Will this actually lower my energy bills?', a: 'Yes. The U.S. Department of Energy has documented 25-50% HVAC energy reductions from proper kitchen air balancing. For a typical restaurant, that\'s $200-500/month in savings. The service pays for itself in 2-3 months.' },
            { q: 'Do I need this for a health inspection?', a: 'Proper hood capture is required by NFPA 96 and enforced by local health departments and fire marshals. If your hood isn\'t capturing smoke, you can be cited. An air balance report documents compliance.' },
            { q: 'What brands of hoods and fans do you work on?', a: 'All of them. CaptiveAire, Greenheck, Accurex, Halton, Larkin, and every other commercial kitchen ventilation manufacturer. We also service all makeup air unit brands.' },
            { q: 'Can you also fix my exhaust fan while you\'re there?', a: 'Absolutely. If we find a failing motor, worn belt, or damaged fan during the balance, we can repair or replace it on the same visit. Most common parts are on the truck.' },
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

      {/* Service Areas */}
      <Section>
        <SectionHeading eyebrow="Service Area" title="Where we offer kitchen ventilation service" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOCATIONS.filter(l => ['oklahoma-city', 'elizabeth-nj', 'new-york-city', 'atlanta'].includes(l.slug)).map((loc, i) => (
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

      {/* CTA + Form */}
      <Section className="bg-white/[0.02]">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            eyebrow="Get Started"
            title="Stop losing money through the roof"
            description="Tell us about your kitchen and we'll give you an exact quote. Most kitchens can be scheduled within the week."
          />
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            <ServiceForm />
          </div>
        </div>
      </Section>

      {/* FAQ Schema for Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do I know if my kitchen ventilation needs balancing?', acceptedAnswer: { '@type': 'Answer', text: 'If you see smoke escaping the hood during cooking, feel cold drafts in winter, have doors that are hard to open, notice pilot lights blowing out, or your dining room smells like the kitchen — your system is out of balance.' } },
          { '@type': 'Question', name: 'How long does a kitchen air balance take?', acceptedAnswer: { '@type': 'Answer', text: 'A single-hood restaurant kitchen takes 3-4 hours. A two-hood system takes 5-6 hours. Larger kitchens may take a full day. All work is done during business hours.' } },
          { '@type': 'Question', name: 'Will kitchen air balancing lower my energy bills?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The U.S. Department of Energy has documented 25-50% HVAC energy reductions from proper kitchen air balancing. For a typical restaurant, that is $200-500/month in savings.' } },
          { '@type': 'Question', name: 'How much does commercial kitchen air balancing cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing starts at $1,200 for a single-hood system. Two-hood systems are $2,000. Larger kitchens with 3+ hoods start at $2,500. Pricing is per system, not hourly.' } },
          { '@type': 'Question', name: 'Is kitchen air balancing required by code?', acceptedAnswer: { '@type': 'Answer', text: 'Proper hood capture is required by NFPA 96 and enforced by local health departments and fire marshals. An air balance report documents compliance.' } },
          { '@type': 'Question', name: 'What brands of kitchen hoods do you service?', acceptedAnswer: { '@type': 'Answer', text: 'All commercial kitchen ventilation brands including CaptiveAire, Greenheck, Accurex, Halton, and Larkin. We also service all makeup air unit brands.' } },
        ],
      }) }} />
    </>
  );
}
