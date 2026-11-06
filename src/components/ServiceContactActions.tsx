import Link from 'next/link';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function ServiceContactActions({ requestHref = '/schedule-service' }: { requestHref?: string }) {
  return (
    <div className="mt-6">
      <p className="text-sm text-slate-300 mb-3">Equipment down? Call to discuss the problem and current availability.</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href={COMPANY.phoneHref} data-call-placement="service-hero" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 font-bold text-navy-300 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 transition-colors">
          <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span>Call Now <span className="block sm:inline sm:ml-1">{COMPANY.phone}</span></span>
        </a>
        <Link href={requestHref} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-slate-300 hover:border-white/40 hover:text-white transition-colors">Prefer a form? Request service</Link>
      </div>
    </div>
  );
}
