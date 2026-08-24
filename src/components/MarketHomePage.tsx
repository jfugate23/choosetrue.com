'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Fan,
  Gauge,
  Phone,
  Settings2,
  ShieldCheck,
  Wind,
  Wrench,
} from 'lucide-react';
import { Section, SectionHeading, Reveal, ServiceForm } from '@/components/UI';

export interface MarketHomePageMarket {
  name: string;
  phone: string;
  phoneHref: string;
  emergencyPhone: string;
  emergencyPhoneHref: string;
  heroLabel: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
  };
}

const focusedServices = [
  {
    href: '/services/kitchen-air-balancing',
    icon: <Gauge className="w-6 h-6" />,
    title: 'Hood Airflow & Air Balancing',
    description: 'Measured exhaust and supply readings, capture testing, damper and fan-speed adjustments, and written findings.',
  },
  {
    href: '/services/exhaust-fan-repair',
    icon: <Fan className="w-6 h-6" />,
    title: 'Exhaust Fan Repair',
    description: 'Troubleshooting for fans that will not run, move too little air, vibrate, squeal, trip, or fault at the VFD.',
  },
  {
    href: '/services/makeup-air-unit-repair',
    icon: <Wind className="w-6 h-6" />,
    title: 'Makeup Air Unit Repair',
    description: 'Fan, motor, belt, heat, airflow, freeze-up, interlock, and control issues that put the kitchen under pressure.',
  },
  {
    href: '/services/ventilation-controls',
    icon: <Settings2 className="w-6 h-6" />,
    title: 'VFD, DCV & Controls',
    description: 'Demand-control ventilation, sensors, starters, relays, contactors, interlocks, and sequence-of-operation faults.',
  },
];

const symptoms = [
  'Smoke or heat escaping the hood',
  'Exhaust fan not running or moving weak air',
  'Fan noise, vibration, belt dust, or repeated trips',
  'Kitchen too hot, too cold, or unusually drafty',
  'Doors hard to open or slamming shut',
  'Makeup air, VFD, or hood controls showing a fault',
];

export default function MarketHomePage({ market }: { market: MarketHomePageMarket }) {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-300" />
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-12 lg:pt-16 pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                <span className="text-amber-300 text-xs font-medium tracking-wide">COMMERCIAL KITCHEN VENTILATION • NYC + NORTH JERSEY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
                Kitchen hood airflow problems.
                <span className="block text-gradient">Diagnosed and fixed.</span>
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Smoke escaping? Exhaust fan down? Makeup air not keeping up? TCS measures the system, finds the actual cause, and repairs the fan, motor, belt, VFD, controls, or MAU problem behind it.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-base px-8 py-4 rounded-lg cta-glow transition-all group">
                  Request Ventilation Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={market.phoneHref} className="inline-flex items-center justify-center gap-2 text-slate-200 hover:text-white transition-colors font-medium px-2 py-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  Call TCS: {market.phone}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Owner-led diagnostics</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Measured airflow readings</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Commercial kitchens only</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Is this what you are seeing?</p>
                  <h2 className="text-2xl font-bold mt-2 mb-6">Start with the symptom.</h2>
                  <div className="space-y-3">
                    {symptoms.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 pt-6 border-t border-white/10">
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Send the equipment brand, symptoms, ZIP code, and any fault code. You will hear directly from the technician doing the work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-300 via-navy-50/30 to-navy-300 pointer-events-none" />
        <div className="relative">
          <SectionHeading
            eyebrow="Ventilation Service"
            title="The calls TCS is built to handle."
            description="Focused troubleshooting and repair for the air-moving equipment and controls that keep a commercial kitchen capturing properly."
          />
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {focusedServices.map((service, i) => (
              <Reveal key={service.href} delay={i * 70}>
                <Link href={service.href} className="group block glass-card rounded-xl p-6 lg:p-8 hover:border-amber-500/25 transition-all h-full">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm text-amber-400 font-medium">
                    Service details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/rooftop-exhaust-fans-commercial.jpg"
                alt="Commercial kitchen rooftop exhaust fans"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Owner-Led Service"
              title="Measure first. Repair the cause."
              description="Kitchen ventilation problems cross mechanical, electrical, controls, and airflow. TCS looks at the complete sequence instead of swapping parts until something changes."
              center={false}
            />
            <div className="space-y-5">
              {[
                { icon: <Gauge className="w-5 h-5" />, title: 'Airflow readings', text: 'Exhaust, supply, pressure, and capture conditions are checked against the actual complaint.' },
                { icon: <Wrench className="w-5 h-5" />, title: 'Mechanical and electrical diagnosis', text: 'Fans, motors, belts, bearings, starters, disconnects, VFDs, sensors, and interlocks are checked as one system.' },
                { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Clear findings', text: 'You get the measured condition, work performed, and practical next steps, not a vague “it should be better.”' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Experience" title="Commercial-kitchen ventilation is the core trade." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Wind className="w-6 h-6" />,
              title: 'CaptiveAire leadership experience',
              text: 'TCS is led by a former CaptiveAire Regional Service Manager with hands-on field and air-balance experience.',
            },
            {
              icon: <Settings2 className="w-6 h-6" />,
              title: 'Startup and controls experience',
              text: 'Field experience includes Gaylord AirVantage and Accurex startup/service work, along with VFD and demand-control ventilation troubleshooting.',
            },
            {
              icon: <Building2 className="w-6 h-6" />,
              title: 'Real operating kitchens',
              text: 'Experience across restaurants, hotels, institutional kitchens, and complex ventilation systems where downtime affects service immediately.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="glass-card rounded-xl p-7 h-full">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Scope" title="A focused service company, by design." />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 h-full border-emerald-500/15">
              <h3 className="text-lg font-semibold text-emerald-300 mb-4">Good fit for TCS</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {['Hood capture and kitchen pressure problems', 'Exhaust fan and makeup air unit repairs', 'VFD, DCV, starter, sensor, and interlock faults', 'Ventilation startup, commissioning support, and operational airflow readings', 'Manufacturer-assigned warranty, startup, and service calls'].map((item) => (
                  <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Outside the current focus</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {['Hood or grease-duct cleaning', 'Fire-suppression inspection or service', 'Residential range hoods', 'General cooking, refrigeration, beverage, or comfort-HVAC calls unless manufacturer-assigned or referred'].map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <Link href="/manufacturer-service" className="inline-flex items-center gap-2 text-sm text-amber-400 font-medium mt-6 hover:text-amber-300">
                Manufacturer service information <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Field Work" title="Commercial ventilation systems in the field." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { src: '/images/captiveaire-hood-active-kitchen.jpg', alt: 'CaptiveAire hood operating over a commercial cooking line' },
            { src: '/images/rooftop-exhaust-fans-commercial.jpg', alt: 'Commercial rooftop exhaust fan system' },
            { src: '/images/rooftop-makeup-air-unit-install.jpg', alt: 'Commercial rooftop makeup air unit' },
            { src: '/images/vfd-drives-kitchen-ventilation-controls.jpg', alt: 'Variable frequency drives for kitchen ventilation controls' },
          ].map((item, i) => (
            <Reveal key={item.src} delay={i * 60}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={item.src} alt={item.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Request Service"
              title="Tell us what the kitchen is doing."
              description="Include the equipment brand, symptoms, ZIP code, fault code, and rooftop-access details if you have them. For a down exhaust fan or active smoke-capture problem, call directly."
              center={false}
            />
            <a href={market.phoneHref} className="inline-flex items-center gap-3 text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
              <Phone className="w-5 h-5" /> {market.phone}
            </a>
            <p className="mt-4 text-sm text-slate-500">Based in Elizabeth, NJ • Serving commercial kitchens across NYC and North Jersey</p>
            <div className="mt-6 flex items-start gap-3 text-sm text-slate-400">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              Commercial kitchens only. No hood/duct cleaning, fire suppression, or residential range-hood work.
            </div>
          </div>
          <Reveal>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-6">Ventilation service request</h2>
              <ServiceForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
