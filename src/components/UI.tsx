'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
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
    <div className="relative pt-32 lg:pt-40 pb-20 lg:pb-28">
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
export function ServiceForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-4`}>
        <input type="text" placeholder="Your Name *" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors" />
        <input type="tel" placeholder="Phone Number *" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors" />
        <input type="text" placeholder="Business Name *" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors" />
        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors" />
      </div>
      <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors">
        <option value="">Type of Service Needed</option>
        <option value="emergency">Emergency Repair</option>
        <option value="scheduled">Scheduled Repair</option>
        <option value="pm">Preventive Maintenance</option>
        <option value="installation">Installation</option>
        <option value="other">Other</option>
      </select>
      <textarea placeholder="Describe the issue (equipment type, symptoms, urgency)" rows={compact ? 3 : 4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors resize-none" />
      <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold py-3.5 rounded-lg cta-glow transition-all text-sm">
        Request Service
      </button>
    </form>
  );
}
