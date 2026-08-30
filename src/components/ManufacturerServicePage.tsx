import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Gauge, Phone, Settings2, ShieldCheck, Wind, Wrench } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import type { ManufacturerServiceData } from '@/lib/manufacturer-data';
import { Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

const systemIcons = [Wind, Settings2, Gauge, Wrench];

export default function ManufacturerServicePage({ manufacturer }: { manufacturer: ManufacturerServiceData }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${manufacturer.name} Commercial Kitchen Ventilation Service`,
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: ['New York City', 'Northern New Jersey', 'Central New Jersey'],
    serviceType: [`${manufacturer.name} hood service`, `${manufacturer.name} exhaust fan service`, `${manufacturer.name} makeup air service`, `${manufacturer.name} ventilation controls service`],
    brand: { '@type': 'Brand', name: manufacturer.name },
    description: manufacturer.description,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: manufacturer.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-24 right-0 w-[620px] h-[520px] bg-amber-500/[0.07] rounded-full blur-[130px]" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider">{manufacturer.eyebrow}</p>
                {manufacturer.badge && <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200"><ShieldCheck className="w-3.5 h-3.5" />{manufacturer.badge}</span>}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">{manufacturer.title}</h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">{manufacturer.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="#request-service" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow transition-all">Request {manufacturer.name} Service <ArrowRight className="w-5 h-5" /></Link>
                <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 px-8 py-4 rounded-xl font-medium transition-all"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/25">
                <Image src={manufacturer.image} alt={manufacturer.imageAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 46vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-400/90 via-transparent to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 grid grid-cols-2 gap-2">
                  {['Hoods', 'Fans', 'Makeup air', 'Controls'].map((item) => <span key={item} className="rounded-lg border border-white/10 bg-navy-300/80 backdrop-blur-md px-3 py-2 text-center text-xs font-medium text-slate-200">{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="System Scope" title={`One service path for the complete ${manufacturer.name} system.`} description="TCS traces the complaint across airflow, equipment, electrical components, and controls before recommending the repair." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {manufacturer.systems.map((item, index) => {
            const Icon = systemIcons[index % systemIcons.length];
            return (
              <Reveal key={item.title} delay={index * 60}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                  <h2 className="font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 lg:gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Common Calls" title="Start with what the kitchen is doing." center={false} />
            <div className="grid sm:grid-cols-2 gap-3">
              {manufacturer.issues.map((issue) => <div key={issue} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" /><span className="text-sm text-slate-300">{issue}</span></div>)}
            </div>
          </div>
          <Reveal>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-6 lg:p-7">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Equipment & controls</p>
              <div className="flex flex-wrap gap-2">
                {manufacturer.equipment.map((item) => <span key={item} className="rounded-full border border-white/10 bg-navy-300/70 px-3 py-2 text-xs text-slate-300">{item}</span>)}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-slate-500">Manufacturer names and trademarks identify equipment serviced. Gaylord factory authorization is expressly stated; authorization by other listed manufacturers is not implied.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-10 lg:gap-16 items-start">
          <SectionHeading eyebrow="Quick Answers" title={`${manufacturer.name} service questions.`} description="Send the model, serial number, fault code, ZIP code, and a photo of the controls when possible." center={false} />
          <div className="space-y-3">
            {manufacturer.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 50}>
                <details className="group glass-card rounded-xl p-5">
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">{faq.question}<span className="text-amber-400 text-xl font-light group-open:rotate-45 transition-transform">+</span></summary>
                  <p className="mt-3 pr-8 text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="request-service">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          <div>
            <SectionHeading eyebrow="Request Service" title={`Send TCS the ${manufacturer.name} system details.`} description="Include the equipment model, fault or symptom, service ZIP code, and rooftop-access information." center={false} />
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-xl font-bold text-amber-400 hover:text-amber-300"><Phone className="w-5 h-5" />{COMPANY.phone}</a>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm defaultService="manufacturer" /></div>
        </div>
      </Section>
    </>
  );
}
