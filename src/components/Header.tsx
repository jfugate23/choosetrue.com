'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ClipboardCheck, Fan, FileCheck2, Gauge, MapPin, Menu, Phone, Settings2, Wind, Wrench, X } from 'lucide-react';
import { MARKET_NJ } from '@/lib/data';

const primaryServices = [
  { href: '/services/kitchen-ventilation', label: 'Kitchen Ventilation Overview', icon: <Wind className="w-4 h-4" /> },
  { href: '/services/kitchen-air-balancing', label: 'Hood Airflow & Balancing', icon: <Gauge className="w-4 h-4" /> },
  { href: '/services/exhaust-fan-repair', label: 'Exhaust Fan Repair', icon: <Fan className="w-4 h-4" /> },
  { href: '/services/makeup-air-unit-repair', label: 'Makeup Air Unit Repair', icon: <Wind className="w-4 h-4" /> },
  { href: '/services/ventilation-controls', label: 'VFD, DCV & Controls', icon: <Settings2 className="w-4 h-4" /> },
  { href: '/services/pollution-control', label: 'Pollution-Control Systems', icon: <Wind className="w-4 h-4" /> },
  { href: '/services/kitchen-ventilation-startup-commissioning', label: 'Startup & Commissioning', icon: <ClipboardCheck className="w-4 h-4" /> },
  { href: '/services/kitchen-hood-performance-testing', label: 'Performance Testing', icon: <FileCheck2 className="w-4 h-4" /> },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy-300/95 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/10">
        <div className="hidden xl:block border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400/70" />
              <span>Commercial kitchen ventilation in all five NYC boroughs and North/Central New Jersey</span>
            </div>
            <a href={MARKET_NJ.phoneHref} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
              <Phone className="w-3.5 h-3.5" /> Call TCS: {MARKET_NJ.phone}
            </a>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 xl:px-6" aria-label="Primary navigation">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative block h-14 w-[190px] sm:h-16 sm:w-[220px] overflow-hidden flex-shrink-0" aria-label="True Commercial Service home">
              <Image src="/images/logo.png" alt="True Commercial Service" fill sizes="220px" className="object-cover object-center mix-blend-lighten" priority />
            </Link>

            <div className="hidden xl:flex items-center gap-0.5">
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button aria-expanded={servicesOpen} className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                  Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-navy-50 rounded-xl border border-white/10 shadow-2xl shadow-black/40 p-6">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2"><Wrench className="w-3.5 h-3.5" /> Focused Services</p>
                    <div className="grid grid-cols-2 gap-1">
                      {primaryServices.map((item) => (
                        <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                          <span className="text-amber-500/70">{item.icon}</span>{item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-6">
                      <p className="text-xs text-slate-400">Other equipment work is accepted primarily through manufacturer, dealer, and established-customer assignments.</p>
                      <Link href="/manufacturer-service" className="text-xs text-amber-400 whitespace-nowrap hover:text-amber-300">Manufacturer service →</Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/locations" className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">Service Area</Link>
              <Link href="/manufacturer-service" className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">Manufacturers</Link>
              <Link href="/about" className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="/blog" className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors">Resources</Link>
            </div>

            <div className="hidden xl:flex items-center">
              <Link href="/schedule-service" className="bg-amber-500 hover:bg-amber-400 text-navy-300 font-semibold text-sm px-5 py-2.5 rounded-lg cta-glow transition-all">Request Service</Link>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 text-white" aria-label="Toggle menu" aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-navy-300/98 backdrop-blur-lg border-t border-white/5 px-4 py-6 space-y-1 overflow-y-auto max-h-[70vh]">
            <MobileNavSection title="Ventilation Services">
              {primaryServices.map((item) => <MobileLink key={item.href} href={item.href} label={item.label} onClick={() => setMobileOpen(false)} />)}
            </MobileNavSection>
            <MobileLink href="/locations" label="Service Area" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/manufacturer-service" label="Manufacturer Service" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/about" label="About" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/blog" label="Resources" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />
            <div className="pt-4 space-y-3">
              <a href={MARKET_NJ.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 border border-amber-500/30 rounded-lg text-amber-400 font-medium"><Phone className="w-4 h-4" /> {MARKET_NJ.phone}</a>
              <Link href="/schedule-service" onClick={() => setMobileOpen(false)} className="block text-center w-full bg-amber-500 text-navy-300 font-bold py-3 rounded-lg cta-glow">Request Service</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden mobile-cta-bar pb-safe">
        <div className="flex gap-2 px-3 py-3 bg-navy-300/95 backdrop-blur-lg border-t border-white/10">
          <a href={MARKET_NJ.phoneHref} className="flex-1 flex items-center justify-center gap-2 bg-white/10 rounded-lg py-3 text-white font-medium text-sm"><Phone className="w-4 h-4 text-amber-400" /> Call TCS</a>
          <Link href="/schedule-service" className="flex-1 flex items-center justify-center bg-amber-500 rounded-lg py-3 text-navy-300 font-bold text-sm cta-glow">Request Service</Link>
        </div>
      </div>
    </>
  );
}

function MobileNavSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-3 px-4 text-white font-medium">
        {title}<ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'}`}><div className="pl-4 pb-2 space-y-0.5">{children}</div></div>
    </div>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return <Link href={href} onClick={onClick} className="block py-3 px-4 text-slate-300 hover:text-white transition-colors">{label}</Link>;
}
