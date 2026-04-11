'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Flame, Thermometer, Wind, GlassWater, Coffee, ShieldCheck, UtensilsCrossed, ShoppingCart, GraduationCap, Building2, Star, Zap, Clock, CheckCircle2, Cpu, Smartphone, BarChart3, QrCode } from 'lucide-react';
import { SERVICES, STATS, MANUFACTURERS, VERTICALS } from '@/lib/data';
import { Section, SectionHeading, Reveal, CTAButton, ServiceForm } from '@/components/UI';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6" />,
  Thermometer: <Thermometer className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  GlassWater: <GlassWater className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

const verticalIconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

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

export interface MarketTestimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

interface MarketHomePageProps {
  market: MarketHomePageMarket;
  testimonials: MarketTestimonial[];
  heroHeadline?: React.ReactNode;
  heroSubhead?: string;
}

export default function MarketHomePage({ market, testimonials, heroHeadline, heroSubhead }: MarketHomePageProps) {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-300 via-navy-300 to-navy-300" />
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-[100px]" />
          <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent rotate-12 origin-top" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-amber-300 text-xs font-medium tracking-wide">{market.heroLabel}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
                {heroHeadline ?? (
                  <>
                    Your kitchen
                    <br />
                    <span className="text-gradient">runs on trust.</span>
                  </>
                )}
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {heroSubhead ?? 'Commercial kitchen equipment repair backed by real diagnostics, transparent tracking, and techs who actually know your equipment.'}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CTAButton large>Schedule Service</CTAButton>
                <a href={market.emergencyPhoneHref} className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>24/7 Emergency: {market.emergencyPhone}</span>
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-400">4hr Avg Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-400">94% First-Fix Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-slate-400">90-Day Guarantee</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Live Service Tracker</p>
                        <p className="text-xs text-slate-500">Powered by Tradecraft AI</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-sm font-medium">Combi Oven — Error E04</p>
                            <p className="text-xs text-slate-500">Rational SCC 62 • Serial #RR-40821</p>
                          </div>
                          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">En Route</span>
                        </div>
                        <div className="flex gap-4 mt-3">
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase">ETA</p>
                            <p className="text-sm font-medium text-amber-400">23 min</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase">Tech</p>
                            <p className="text-sm font-medium">Marcus D.</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase">Priority</p>
                            <p className="text-sm font-medium text-red-400">High</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 opacity-60">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium">Walk-In Cooler — Temp Alarm</p>
                            <p className="text-xs text-slate-500">True T-49 • Serial #TM-91204</p>
                          </div>
                          <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-medium">Queued</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass-card rounded-lg p-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium">QR Equipment Tags</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 glass-card rounded-lg p-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-medium">AI Diagnostics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICE GRID ====== */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-300 via-navy-50/30 to-navy-300 pointer-events-none" />
        <div className="relative">
          <SectionHeading
            eyebrow="What We Fix"
            title="Every piece of equipment in your kitchen."
            description="From fryers to espresso machines, walk-in coolers to rooftop HVAC — one call handles it all."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block glass-card rounded-xl p-6 hover:border-amber-500/20 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                    <span className="text-amber-400">{iconMap[service.icon]}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-400 transition-colors">{service.shortTitle}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ====== THE TRUE DIFFERENCE / TRADECRAFT AI ====== */}
      <Section id="tradecraft" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative">
          <SectionHeading
            eyebrow="The True Difference"
            title="Not just another service company."
            description="We built our own technology platform to fix the broken parts of commercial kitchen service — not just the equipment."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: <Cpu className="w-5 h-5" />,
                  title: 'AI-Powered Diagnostics',
                  desc: 'Our techs arrive with probable causes already identified. Less guesswork, faster repairs, fewer repeat visits.',
                },
                {
                  icon: <QrCode className="w-5 h-5" />,
                  title: 'QR Equipment Tags',
                  desc: 'Every piece of equipment gets tagged. Scan it to see full service history, manuals, and one-tap service requests.',
                },
                {
                  icon: <Smartphone className="w-5 h-5" />,
                  title: 'Real-Time Job Tracking',
                  desc: 'Know exactly when your tech is arriving, what they found, and what\'s next. No more black-box service calls.',
                },
                {
                  icon: <BarChart3 className="w-5 h-5" />,
                  title: 'Owner Dashboard',
                  desc: 'Multi-location operators get a bird\'s eye view of all equipment, service history, costs, and upcoming PMs.',
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="glass-card rounded-2xl p-1 lg:p-2">
                <div className="bg-navy-300 rounded-xl p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-slate-500">Tradecraft AI Dashboard</p>
                      <p className="text-lg font-semibold">Your Kitchen at a Glance</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      All Systems Normal
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: 'Equipment', value: '24', sub: 'Tagged' },
                      { label: 'Open Jobs', value: '1', sub: 'In Progress' },
                      { label: 'Next PM', value: 'Apr 3', sub: '12 days' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-lg p-3 text-center">
                        <p className="text-xl font-bold text-amber-400">{stat.value}</p>
                        <p className="text-[10px] text-slate-500 uppercase mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {[
                      { equip: 'Rational SCC 62', status: 'Service Complete', color: 'emerald' },
                      { equip: 'True T-49 Walk-In', status: 'PM Due Apr 3', color: 'amber' },
                      { equip: 'Hoshizaki KM-660', status: 'OK', color: 'emerald' },
                    ].map((item) => (
                      <div key={item.equip} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                        <span className="text-sm">{item.equip}</span>
                        <span className={`text-xs font-medium ${item.color === 'emerald' ? 'text-emerald-400' : 'text-amber-400'}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ====== WHO WE SERVE ====== */}
      <Section>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for operators who can't afford downtime."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.slug} delay={i * 80}>
              <Link
                href={`/who-we-serve/${v.slug}`}
                className="group block glass-card rounded-xl p-6 text-center hover:border-amber-500/20 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <span className="text-amber-400">{verticalIconMap[v.icon]}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ====== STATS BAR ====== */}
      <div className="relative">
        <div className="absolute inset-0 bg-amber-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ====== TRUSTED BY ====== */}
      <Section>
        <SectionHeading eyebrow="Trusted By" title="Companies that count on us." />
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center opacity-70">
          {[
            'Albertsons / United Supermarkets',
            'Starbucks',
            'University of New Mexico',
            'Facebook / Meta',
            'University of Oklahoma',
          ].map((name, i) => (
            <Reveal key={name} delay={i * 80}>
              <span className="text-lg lg:text-xl font-bold text-slate-400 tracking-tight">{name}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ====== MANUFACTURER LOGOS ====== */}
      <Section>
        <SectionHeading
          eyebrow="Manufacturer Partners"
          title="Factory-authorized on the brands that matter."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {MANUFACTURERS.map((brand, i) => (
            <Reveal key={brand} delay={i * 40}>
              <div className="glass-card rounded-lg py-4 px-3 text-center hover:border-amber-500/20 transition-colors">
                <span className="text-xs text-slate-400 font-medium">{brand}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ====== PHOTO SHOWCASE ====== */}
      <Section>
        <SectionHeading eyebrow="Our Work" title="Real kitchens. Real equipment." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { src: '/images/brick-bbq-pit-captiveaire-hood.jpg', alt: 'Custom brick BBQ pit with CaptiveAire exhaust hood — specialty ventilation install' },
            { src: '/images/upscale-commercial-kitchen-line.jpg', alt: 'Upscale commercial kitchen with textured stainless steel and cooking line' },
            { src: '/images/captiveaire-hood-active-kitchen.jpg', alt: 'CaptiveAire hood over active commercial kitchen cooking line with staff' },
            { src: '/images/rooftop-exhaust-fans-commercial.jpg', alt: 'Multiple CaptiveAire rooftop exhaust fans — commercial kitchen ventilation' },
            { src: '/images/cook-working-commercial-kitchen.jpg', alt: 'Cook working in commercial kitchen under CaptiveAire ventilation hood' },
            { src: '/images/lennox-rooftop-unit-commercial.jpg', alt: 'Lennox commercial rooftop HVAC unit on commercial building' },
            { src: '/images/full-kitchen-ventilation-install.jpg', alt: 'Full commercial kitchen ventilation installation with cooking equipment' },
            { src: '/images/rooftop-makeup-air-unit-install.jpg', alt: 'Rooftop makeup air unit installation on commercial building' },
          ].map((img, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ====== TESTIMONIALS (only if provided) ====== */}
      {testimonials.length > 0 && (
        <Section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/3 to-transparent pointer-events-none" />
          <div className="relative">
            <SectionHeading
              eyebrow="What Operators Say"
              title="We earn trust one service call at a time."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="glass-card rounded-xl p-6 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <p className="text-sm font-medium">{t.author}</p>
                      <p className="text-xs text-slate-500">{t.role} &bull; {t.location}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ====== CONTACT / CTA ====== */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get Started"
              title="Equipment down? Let's fix it."
              description="Submit a service request and we'll get back to you within the hour during business hours. Emergency? Call us directly — we pick up 24/7."
              center={false}
            />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-sm text-slate-500">Main Line</p>
                  <a href={market.phoneHref} className="text-lg font-semibold hover:text-amber-400 transition-colors">{market.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm text-slate-500">24/7 Emergency</p>
                  <a href={market.emergencyPhoneHref} className="text-lg font-semibold hover:text-amber-400 transition-colors">{market.emergencyPhone}</a>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Building2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-500">Local Office</p>
                  <p className="text-base font-medium">{market.address.street}</p>
                  <p className="text-base font-medium">{market.address.city}, {market.address.region} {market.address.postalCode}</p>
                </div>
              </div>
            </div>
          </div>
          <Reveal>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-6">Request Service</h3>
              <ServiceForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
