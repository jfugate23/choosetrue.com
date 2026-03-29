'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown, Flame, Thermometer, Wind, GlassWater, Coffee, ShieldCheck, UtensilsCrossed, ShoppingCart, GraduationCap, Building2, MapPin, Wrench, Users, Cog } from 'lucide-react';
import { COMPANY } from '@/lib/data';

const serviceIcons: Record<string, React.ReactNode> = {
  'Flame': <Flame className="w-5 h-5" />,
  'Thermometer': <Thermometer className="w-5 h-5" />,
  'Wind': <Wind className="w-5 h-5" />,
  'GlassWater': <GlassWater className="w-5 h-5" />,
  'Coffee': <Coffee className="w-5 h-5" />,
  'ShieldCheck': <ShieldCheck className="w-5 h-5" />,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-300/95 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        {/* Top bar - desktop only */}
        <div className="hidden lg:block border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6 text-slate-400">
              <span>Serving OKC Metro &bull; Northern NJ &bull; Atlanta</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={COMPANY.emergencyPhoneHref} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
                <Phone className="w-3.5 h-3.5" />
                24/7 Emergency: {COMPANY.emergencyPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/images/logo.png" alt="True Commercial Service" width={220} height={60} className="h-12 lg:h-14 w-auto" priority />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Services mega menu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                  Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mega menu dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[720px] pt-2 transition-all duration-200 ${megaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-navy-50 rounded-xl border border-white/10 shadow-2xl shadow-black/40 p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* What We Service */}
                      <div>
                        <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Wrench className="w-3.5 h-3.5" /> What We Service
                        </h4>
                        <div className="space-y-1">
                          {[
                            { href: '/services/cooking-equipment', icon: <Flame className="w-4 h-4" />, label: 'Cooking Equipment' },
                            { href: '/services/refrigeration', icon: <Thermometer className="w-4 h-4" />, label: 'Refrigeration' },
                            { href: '/services/hvac', icon: <Wind className="w-4 h-4" />, label: 'HVAC' },
                            { href: '/services/kitchen-ventilation', icon: <Wind className="w-4 h-4" />, label: 'Kitchen Ventilation' },
                            { href: '/services/beverage-equipment', icon: <GlassWater className="w-4 h-4" />, label: 'Beverage Equipment' },
                            { href: '/services/espresso-machines', icon: <Coffee className="w-4 h-4" />, label: 'Espresso Machines' },
                            { href: '/services/pollution-control', icon: <Wind className="w-4 h-4" />, label: 'Pollution Control (ESP)' },
                            { href: '/services/preventive-maintenance', icon: <ShieldCheck className="w-4 h-4" />, label: 'PM Agreements' },
                          ].map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                              <span className="text-amber-500/70">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Where We Service */}
                      <div>
                        <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Users className="w-3.5 h-3.5" /> Who We Serve
                        </h4>
                        <div className="space-y-1">
                          {[
                            { href: '/who-we-serve/restaurants', icon: <UtensilsCrossed className="w-4 h-4" />, label: 'Restaurants' },
                            { href: '/who-we-serve/grocery-stores', icon: <ShoppingCart className="w-4 h-4" />, label: 'Grocery Stores' },
                            { href: '/who-we-serve/schools-institutions', icon: <GraduationCap className="w-4 h-4" />, label: 'Schools & Institutions' },
                            { href: '/who-we-serve/hotels', icon: <Building2 className="w-4 h-4" />, label: 'Hotels & Hospitality' },
                          ].map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                              <span className="text-amber-500/70">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* How We Service */}
                      <div>
                        <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Cog className="w-3.5 h-3.5" /> How We Service
                        </h4>
                        <div className="space-y-1">
                          {[
                            { href: '/services#emergency', label: 'Emergency Repair' },
                            { href: '/services/preventive-maintenance', label: 'Planned Maintenance' },
                            { href: '/services#installation', label: 'Installation' },
                            { href: '/about#tradecraft', label: 'Tradecraft AI Platform' },
                          ].map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                              {item.label}
                            </Link>
                          ))}
                        </div>

                        <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <p className="text-xs text-amber-200 font-medium">Powered by Tradecraft AI</p>
                          <p className="text-xs text-slate-400 mt-1">Smart diagnostics. Real-time tracking. Faster fixes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/locations" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                Locations
              </Link>
              <Link href="/who-we-serve" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                Who We Serve
              </Link>
              <Link href="/about" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/careers" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/blog" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors">
                Blog
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-amber-400" />
                {COMPANY.phone}
              </a>
              <Link href="/schedule-service" className="bg-amber-500 hover:bg-amber-400 text-navy-300 font-semibold text-sm px-5 py-2.5 rounded-lg cta-glow transition-all">
                Schedule Service
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-navy-300/98 backdrop-blur-lg border-t border-white/5 px-4 py-6 space-y-1 overflow-y-auto max-h-[70vh]">
            <MobileNavSection title="Services">
              <MobileLink href="/services/cooking-equipment" label="Cooking Equipment" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/refrigeration" label="Refrigeration" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/hvac" label="HVAC" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/kitchen-ventilation" label="Kitchen Ventilation" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/beverage-equipment" label="Beverage Equipment" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/espresso-machines" label="Espresso Machines" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/pollution-control" label="Pollution Control (ESP)" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/services/preventive-maintenance" label="PM Agreements" onClick={() => setMobileOpen(false)} />
            </MobileNavSection>
            <MobileLink href="/locations" label="Locations" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/who-we-serve" label="Who We Serve" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/about" label="About" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/careers" label="Careers" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/blog" label="Blog" onClick={() => setMobileOpen(false)} />
            <MobileLink href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />
            
            <div className="pt-4 space-y-3">
              <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 w-full py-3 border border-amber-500/30 rounded-lg text-amber-400 font-medium">
                <Phone className="w-4 h-4" /> {COMPANY.phone}
              </a>
              <Link href="/schedule-service" onClick={() => setMobileOpen(false)} className="block text-center w-full bg-amber-500 text-navy-300 font-bold py-3 rounded-lg cta-glow">
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden mobile-cta-bar pb-safe">
        <div className="flex gap-2 px-3 py-3 bg-navy-300/95 backdrop-blur-lg border-t border-white/10">
          <a href={COMPANY.phoneHref} className="flex-1 flex items-center justify-center gap-2 bg-white/10 rounded-lg py-3 text-white font-medium text-sm">
            <Phone className="w-4 h-4 text-amber-400" /> Call Now
          </a>
          <Link href="/schedule-service" className="flex-1 flex items-center justify-center gap-2 bg-amber-500 rounded-lg py-3 text-navy-300 font-bold text-sm cta-glow">
            Schedule Service
          </Link>
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
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-4 pb-2 space-y-0.5">{children}</div>
      </div>
    </div>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block py-3 px-4 text-slate-300 hover:text-white transition-colors">
      {label}
    </Link>
  );
}
