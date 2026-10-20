import Link from 'next/link';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { Section } from '@/components/UI';

export interface ServiceEvidenceContent {
  question: string;
  answer: string;
  example: {
    title: string;
    location: string;
    problem: string;
    findings: string;
    nextStep: string;
  };
  relatedLink: { href: string; label: string };
}

export default function ServiceEvidence({ evidence }: { evidence: ServiceEvidenceContent }) {
  return (
    <Section>
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-12 items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">Service coverage</p>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight">{evidence.question}</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">{evidence.answer}</p>
          <a href={COMPANY.phoneHref} className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-amber-400 hover:text-amber-300"><Phone className="w-4 h-4" />Call TCS: {COMPANY.phone}</a>
          <Link href={evidence.relatedLink.href} className="mt-4 block text-sm text-slate-300 underline underline-offset-4 hover:text-amber-400">{evidence.relatedLink.label}</Link>
        </div>
        <article className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Field example · {evidence.example.location}</p>
          <h3 className="mt-3 text-xl font-semibold">{evidence.example.title}</h3>
          <dl className="mt-5 space-y-4 text-sm leading-relaxed">
            <div><dt className="font-semibold text-white">The problem</dt><dd className="mt-1 text-slate-300">{evidence.example.problem}</dd></div>
            <div><dt className="font-semibold text-white">What TCS found</dt><dd className="mt-1 text-slate-300">{evidence.example.findings}</dd></div>
            <div><dt className="font-semibold text-white">Findings and next steps</dt><dd className="mt-1 text-slate-300">{evidence.example.nextStep}</dd></div>
          </dl>
        </article>
      </div>
    </Section>
  );
}
