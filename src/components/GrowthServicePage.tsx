import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero, Section, SectionHeading, ServiceForm } from '@/components/UI';
import type { GrowthService } from '@/lib/growth-services';

export default function GrowthServicePage({ content }: { content: GrowthService }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(({ question, answer }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.title,
    description: content.intro,
    url: `https://choosetrue.com/services/${content.slug}`,
    provider: { '@id': 'https://choosetrue.com/#localbusiness' },
    areaServed: ['New York City', 'North Jersey'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />}
      <PageHero eyebrow="Commercial service" title={content.title} description={content.intro} showCTA />
      <Section className="!pt-0">
        <div className="border border-amber-500/25 bg-amber-500/5 rounded-2xl p-6 lg:p-8">
          <h2 className="text-lg font-semibold mb-3">Before scheduling</h2>
          <p className="text-slate-300 text-sm leading-relaxed">{content.availability}</p>
        </div>
      </Section>
      <Section className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading title="Equipment requests" center={false} />
            <ul className="space-y-3">{content.equipment.map(item => <li key={item} className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />{item}</li>)}</ul>
          </div>
          <div>
            <SectionHeading title="Common reasons to request service" center={false} />
            <ul className="space-y-3">{content.symptoms.map(item => <li key={item} className="text-sm text-slate-300 border-b border-white/5 pb-3">{item}</li>)}</ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">{content.sections.map(section => (
          <div key={section.title} className="glass-card rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{section.text}</p>
          </div>
        ))}</div>
      </Section>
      <Section className="bg-white/[0.02]">
        <SectionHeading title="Related equipment and service information" />
        <div className="grid sm:grid-cols-2 gap-4">{content.related.map(link => <Link key={link.href} href={link.href} className="glass-card rounded-xl p-5 text-amber-400 hover:text-amber-300 flex items-center justify-between gap-4 text-sm font-semibold">{link.label}<ArrowRight className="w-4 h-4 shrink-0" /></Link>)}</div>
      </Section>
      <Section>
        <SectionHeading title="Common questions" />
        <div className="max-w-3xl mx-auto space-y-6">{content.faqs.map(faq => <div key={faq.question}><h3 className="font-semibold text-amber-300 mb-2">{faq.question}</h3><p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p></div>)}</div>
      </Section>
      <Section className="bg-white/[0.02]">
        <div id="availability" className="max-w-2xl mx-auto scroll-mt-28">
          <SectionHeading title="Send the equipment details" description="Include the model and serial number, symptoms, business location, and access requirements." />
          <div className="glass-card rounded-2xl p-6 lg:p-8"><ServiceForm equipment="general" defaultService={content.requestType} /></div>
        </div>
      </Section>
    </>
  );
}
