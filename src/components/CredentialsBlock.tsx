import { Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_HOURS, CREDENTIALS } from '@/lib/data';

// Owner credentials and availability, deliberately without a personal name.
// variant="row" is a compact hero strip; variant="card" is the full block.
export default function CredentialsBlock({ variant = 'card' }: { variant?: 'row' | 'card' }) {
  if (variant === 'row') {
    return (
      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300" aria-label="Credentials">
        {CREDENTIALS.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 lg:p-8">
      <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Veteran-owned and owner-operated</p>
      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
        The owner is a USAF veteran with 20 years running multi-site commercial HVAC/R service, including about 3,000 service calls a year across a 24-store supermarket account. When you call, you talk to the person who diagnoses your system.
      </p>
      <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
        {CREDENTIALS.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-start gap-2 text-sm text-slate-400">
        <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <span>{BUSINESS_HOURS.label}. {BUSINESS_HOURS.emergency}.</span>
      </p>
    </div>
  );
}
