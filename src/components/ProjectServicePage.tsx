import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, FileCheck2, Gauge, Phone, Settings2, Wind, Wrench, XCircle } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { Reveal, Section, SectionHeading, ServiceForm } from '@/components/UI';

export interface ProjectServiceContent {
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;
  image: string;
  imageAlt: string;
  audience: string[];
  capabilities: { title: string; description: string }[];
  process: { title: string; description: string }[];
  included: string[];
  excluded: string[];
  faqs: { question: string; answer: string }[];
  requestTitle: string;
  requestDescription: string;
  defaultService: 'startup' | 'performance-testing';
}

const capabilityIcons = [Gauge, Settings2, Wind, FileCheck2];

export default function ProjectServicePage({ content }: { content: ProjectServiceContent }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.serviceType,
    provider: { '@type': 'LocalBusiness', '@id': 'https://choosetrue.com/#localbusiness', name: 'True Commercial Service LLC' },
    areaServed: ['New York City', 'Northern New Jersey', 'Central New Jersey'],
    serviceType: content.serviceType,
    description: content.description,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
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
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-5">{content.eyebrow}</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">{content.title}</h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed">{content.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {content.audience.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">{item}</span>)}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="#project-request" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold px-8 py-4 rounded-xl cta-glow transition-all">Discuss the Project <ArrowRight className="w-5 h-5" /></Link>
                <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/40 px-8 py-4 rounded-xl font-medium transition-all"><Phone className="w-4 h-4 text-amber-400" />{COMPANY.phone}</a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/25">
              <Image src={content.image} alt={content.imageAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 46vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-400/90 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 grid grid-cols-3 gap-2">
                {['Measure', 'Verify', 'Document'].map((item) => <span key={item} className="rounded-lg border border-white/10 bg-navy-300/80 backdrop-blur-md px-3 py-2 text-center text-xs font-semibold text-slate-200">{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Service Scope" title="A concise field check with useful closeout." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length];
            return <Reveal key={item.title} delay={index * 60}><div className="glass-card rounded-2xl p-6 h-full"><div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div><h2 className="font-semibold mb-2">{item.title}</h2><p className="text-sm text-slate-400 leading-relaxed">{item.description}</p></div></Reveal>;
          })}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 lg:p-8 h-full">
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-300 mb-5">Included when applicable</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {content.included.map((item) => <p key={item} className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />{item}</p>)}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 lg:p-8 h-full">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-5">Separate trade or approval</p>
              <div className="space-y-3">
                {content.excluded.map((item) => <p key={item} className="flex items-start gap-3 text-sm text-slate-400"><XCircle className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />{item}</p>)}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Field Sequence" title="Four steps from arrival to closeout." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.process.map((item, index) => <Reveal key={item.title} delay={index * 60}><div className="glass-card rounded-2xl p-6 h-full"><span className="text-3xl font-bold text-amber-500/25">{String(index + 1).padStart(2, '0')}</span><h2 className="font-semibold mt-3 mb-2">{item.title}</h2><p className="text-sm text-slate-400 leading-relaxed">{item.description}</p></div></Reveal>)}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeading eyebrow="Project Questions" title="Clear scope before dispatch." center={false} />
            <Link href="/resources/commercial-kitchen-ventilation-startup-checklist" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300">View the startup checklist <ClipboardCheck className="w-4 h-4" /></Link>
          </div>
          <div className="space-y-3">
            {content.faqs.map((faq, index) => <Reveal key={faq.question} delay={index * 50}><details className="group glass-card rounded-xl p-5"><summary className="cursor-pointer list-none font-semibold flex items-center justify-between gap-4">{faq.question}<span className="text-amber-400 text-xl font-light group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 pr-8 text-sm text-slate-400 leading-relaxed">{faq.answer}</p></details></Reveal>)}
          </div>
        </div>
      </Section>

      <Section id="project-request" className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          <div>
            <SectionHeading eyebrow="Project Request" title={content.requestTitle} description={content.requestDescription} center={false} />
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-xl font-bold text-amber-400 hover:text-amber-300"><Phone className="w-5 h-5" />{COMPANY.phone}</a>
          </div>
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm defaultService={content.defaultService} /></div>
        </div>
      </Section>
    </>
  );
}
