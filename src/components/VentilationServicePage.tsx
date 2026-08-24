import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, Gauge, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

export interface VentilationServiceContent {
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;
  image: string;
  imageAlt: string;
  symptoms: string[];
  scope: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  note?: string;
}

const relatedServices = [
  { href: '/services/kitchen-air-balancing', label: 'Hood Airflow & Balancing' },
  { href: '/services/exhaust-fan-repair', label: 'Exhaust Fan Repair' },
  { href: '/services/makeup-air-unit-repair', label: 'Makeup Air Unit Repair' },
  { href: '/services/ventilation-controls', label: 'VFD, DCV & Controls' },
];

export default function VentilationServicePage({ content }: { content: VentilationServiceContent }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.serviceType,
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: ['New York City', 'Northern New Jersey'],
    serviceType: content.serviceType,
    description: content.description,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
            <div>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">{content.eyebrow}</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">{content.title}</h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">{content.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/schedule-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow transition-all">Request Service <ArrowRight className="w-5 h-5" /></Link>
                <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 text-white font-medium px-8 py-4 rounded-xl transition-all"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
              </div>
              <p className="mt-5 text-xs text-slate-500">Commercial kitchens in NYC and North Jersey • Owner-led service</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <Image src={content.image} alt={content.imageAlt} fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Warning Signs" title="Call when you see these symptoms." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {content.symptoms.map((symptom, index) => (
            <Reveal key={symptom} delay={index * 45}>
              <div className="flex items-start gap-3 glass-card rounded-xl px-5 py-4 h-full"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{symptom}</span></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Service Scope" title="What TCS checks and repairs." />
        <div className="grid md:grid-cols-2 gap-6">
          {content.scope.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5"><Wrench className="w-5 h-5" /></div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {content.note && <p className="max-w-3xl mx-auto mt-8 text-sm text-slate-400 text-center border border-white/10 rounded-xl px-5 py-4">{content.note}</p>}
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Diagnostic Process" title="A measured path from symptom to cause." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.process.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="glass-card rounded-xl p-6 h-full">
                <span className="text-3xl font-bold text-amber-500/25">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="font-semibold mt-3 mb-2">{item.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Why TCS" title="Ventilation experience on the call." center={false} />
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p className="flex gap-3"><Gauge className="w-5 h-5 text-amber-400 flex-shrink-0" />Airflow and equipment are evaluated together.</p>
              <p className="flex gap-3"><ClipboardCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />Findings and readings are documented clearly.</p>
              <p className="flex gap-3"><ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />TCS is led by a former CaptiveAire Regional Service Manager with startup and controls experience.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="FAQ" title="Common service questions." center={false} />
            <div className="space-y-4">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="glass-card rounded-xl p-6"><h2 className="font-semibold mb-2">{faq.question}</h2><p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p></div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Related Services" title="The rest of the ventilation system matters." />
        <div className="flex flex-wrap justify-center gap-3">
          {relatedServices.map((item) => <Link key={item.href} href={item.href} className="glass-card rounded-lg px-5 py-3 text-sm text-slate-300 hover:text-amber-400 hover:border-amber-500/25 transition-colors">{item.label}</Link>)}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <SectionHeading eyebrow="Request Service" title="Describe the symptom, not the solution." description="Send the brand, model, ZIP code, fault code, and rooftop-access information if available. TCS will review it directly." center={false} />
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-xl font-bold text-amber-400 hover:text-amber-300"><Phone className="w-5 h-5" />{COMPANY.phone}</a>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm /></div>
        </div>
      </Section>
    </>
  );
}
