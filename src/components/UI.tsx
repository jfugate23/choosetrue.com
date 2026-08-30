'use client';

import { useEffect, useRef, useState, FormEvent, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { track } from '@vercel/analytics';
import { COMPANY } from '@/lib/data';

// Scroll reveal wrapper
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

// Section wrapper
export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {children}
      </div>
    </section>
  );
}

// Section heading
export function SectionHeading({ eyebrow, title, description, center = true }: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 lg:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-balance leading-tight">{title}</h2>
      {description && (
        <p className={`mt-4 text-lg text-slate-400 leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>{description}</p>
      )}
    </Reveal>
  );
}

// Primary CTA button
export function CTAButton({ href = '/schedule-service', children = 'Schedule Service', large = false, className = '' }: {
  href?: string;
  children?: ReactNode;
  large?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold rounded-lg cta-glow transition-all group ${large ? 'text-base px-8 py-4' : 'text-sm px-6 py-3'} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

// Secondary (outline) button
export function OutlineButton({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium text-sm px-6 py-3 rounded-lg transition-all hover:bg-white/5 group ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

// Phone CTA
export function PhoneCTA({ className = '' }: { className?: string }) {
  return (
    <a
      href={COMPANY.phoneHref}
      className={`inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors ${className}`}
    >
      <Phone className="w-4 h-4 text-amber-400" />
      <span className="font-medium">{COMPANY.phone}</span>
    </a>
  );
}

// Page hero
export function PageHero({ eyebrow, title, description, showCTA = true }: {
  eyebrow?: string;
  title: string;
  description: string;
  showCTA?: boolean;
}) {
  return (
    <div className="relative pt-10 lg:pt-14 pb-16 lg:pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-bg" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        {eyebrow && (
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in">{eyebrow}</p>
        )}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold max-w-4xl text-balance leading-tight animate-fade-up">{title}</h1>
        <p className="mt-6 text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>{description}</p>
        {showCTA && (
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <CTAButton large />
            <PhoneCTA />
          </div>
        )}
      </div>
    </div>
  );
}

// Service request form
export function ServiceForm({ compact = false, defaultService = '' }: { compact?: boolean; defaultService?: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const fieldClass = 'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: window.location.pathname,
          name: data.get('name'),
          business: data.get('business'),
          phone: data.get('phone'),
          email: data.get('email'),
          website: data.get('website'),
          meta: {
            zip: data.get('zip'),
            serviceType: data.get('serviceType'),
            urgency: data.get('urgency'),
            manufacturer: data.get('manufacturer'),
            details: data.get('details'),
            commercial: data.get('commercial') === 'on',
          },
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Request could not be sent.');

      track('Lead Submitted', {
        page: window.location.pathname,
        service: String(data.get('serviceType') || 'not-selected'),
      });
      const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
      const leadLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;
      const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag && analyticsId) {
        gtag('event', 'generate_lead', {
          send_to: analyticsId,
          service: String(data.get('serviceType') || 'not-selected'),
          page_path: window.location.pathname,
        });
      }
      if (gtag && adsId && leadLabel) {
        gtag('event', 'conversion', { send_to: `${adsId}/${leadLabel}` });
      }

      form.reset();
      setStatus('success');
      setMessage('Thanks. Your request was sent to TCS. We will follow up directly.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'The form could not be sent. Please call (646) 942-9394.');
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <label className="text-xs font-medium text-slate-300">Your name *<input name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" className={`${fieldClass} mt-1.5`} /></label>
        <label className="text-xs font-medium text-slate-300">Phone number *<input name="phone" type="tel" required maxLength={25} pattern="(?:\\+?1[ .-]?)?\\(?[2-9][0-9]{2}\\)?[ .-]?[2-9][0-9]{2}[ .-]?[0-9]{4}" title="Enter a valid 10-digit US phone number." autoComplete="tel" className={`${fieldClass} mt-1.5`} /></label>
        <label className="text-xs font-medium text-slate-300">Business or property *<input name="business" type="text" required minLength={2} maxLength={150} autoComplete="organization" className={`${fieldClass} mt-1.5`} /></label>
        <label className="text-xs font-medium text-slate-300">Service ZIP code *<input name="zip" type="text" required inputMode="numeric" minLength={5} maxLength={10} pattern="[0-9]{5}(?:-[0-9]{4})?" title="Enter a valid 5-digit ZIP code." autoComplete="postal-code" className={`${fieldClass} mt-1.5`} /></label>
        <label className="text-xs font-medium text-slate-300">Email address<input name="email" type="email" maxLength={150} autoComplete="email" className={`${fieldClass} mt-1.5`} /></label>
        <label className="text-xs font-medium text-slate-300">Equipment manufacturer<input name="manufacturer" type="text" maxLength={100} placeholder="CaptiveAire, Gaylord, Accurex…" className={`${fieldClass} mt-1.5`} /></label>
      </div>
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <label className="text-xs font-medium text-slate-300">Primary issue *
          <select name="serviceType" required defaultValue={defaultService} className={`${fieldClass} mt-1.5 text-slate-300`}>
            <option value="" disabled>Select the closest match</option>
            <option value="hood-airflow">Hood airflow / smoke capture</option>
            <option value="exhaust-fan">Exhaust fan repair</option>
            <option value="makeup-air">Makeup air unit issue</option>
            <option value="controls">VFD / DCV / controls</option>
            <option value="pollution-control">ESP / pollution-control issue</option>
            <option value="manufacturer">Manufacturer warranty / startup</option>
            <option value="other">Other commercial equipment referral</option>
          </select>
        </label>
        <label className="text-xs font-medium text-slate-300">Urgency *
          <select name="urgency" required defaultValue="" className={`${fieldClass} mt-1.5 text-slate-300`}>
            <option value="" disabled>Select urgency</option>
            <option value="down">System is down now</option>
            <option value="operating">Operating with a problem</option>
            <option value="planning">Planning / quote</option>
          </select>
        </label>
      </div>
      <label className="block text-xs font-medium text-slate-300">What is the system doing? *
        <textarea name="details" required minLength={10} maxLength={2000} placeholder="Symptoms, fault code, equipment model, rooftop access, and when the problem started" rows={compact ? 3 : 5} className={`${fieldClass} mt-1.5 resize-none`} />
      </label>
      <label className="flex items-start gap-3 text-xs text-slate-400">
        <input name="commercial" type="checkbox" required className="mt-0.5 accent-amber-500" />
        This request is for a commercial kitchen, not a residential range hood. TCS does not provide hood/duct cleaning or fire-suppression service.
      </label>
      {message && (
        <p role="status" aria-live="polite" className={`text-sm rounded-lg px-4 py-3 ${status === 'success' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-red-500/10 text-red-300 border border-red-500/20'}`}>
          {message}
          {status === 'error' && <> <a href="tel:+16469429394" className="underline font-semibold">Call TCS now.</a></>}
        </p>
      )}
      <button type="submit" disabled={status === 'submitting'} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-wait text-navy-300 font-bold py-3.5 rounded-lg cta-glow transition-all text-sm">
        {status === 'submitting' ? 'Sending…' : 'Request Ventilation Service'}
      </button>
    </form>
  );
}
