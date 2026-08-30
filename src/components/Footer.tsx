import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY, MARKET_NJ, PROFILES } from '@/lib/data';

const ventilationLinks = [
  { href: '/services/kitchen-ventilation', label: 'Kitchen Ventilation' },
  { href: '/services/kitchen-air-balancing', label: 'Hood Airflow & Balancing' },
  { href: '/services/exhaust-fan-repair', label: 'Exhaust Fan Repair' },
  { href: '/services/makeup-air-unit-repair', label: 'Makeup Air Unit Repair' },
  { href: '/services/ventilation-controls', label: 'VFD, DCV & Controls' },
  { href: '/services/pollution-control', label: 'Pollution-Control Systems' },
  { href: '/services/kitchen-ventilation-startup-commissioning', label: 'Startup & Commissioning' },
  { href: '/services/kitchen-hood-performance-testing', label: 'Performance Testing' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-400 border-t border-white/5 pb-20 lg:pb-0">
      <div className="bg-amber-500/10 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-amber-200 font-medium text-sm">Kitchen airflow problem? Talk directly with TCS.</span>
          <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-colors"><Phone className="w-4 h-4" />{COMPANY.phone}</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="relative block h-14 w-[190px] overflow-hidden mb-4" aria-label="True Commercial Service home"><Image src="/images/logo.png" alt="True Commercial Service" fill sizes="190px" className="object-cover object-center mix-blend-lighten" /></Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">Commercial kitchen hood and ventilation diagnostics and repair across NYC and North Jersey.</p>
            <p className="flex items-center gap-2 text-sm text-slate-400 mb-2"><MapPin className="w-4 h-4 text-amber-500/60" /> Based in {MARKET_NJ.address.city}, {MARKET_NJ.address.region}</p>
            <a href={MARKET_NJ.phoneHref} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-2"><Phone className="w-4 h-4 text-amber-500/60" />{MARKET_NJ.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"><Mail className="w-4 h-4 text-amber-500/60" />{COMPANY.email}</a>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Ventilation Services</h2>
            <div className="space-y-2">{ventilationLinks.map((item) => <Link key={item.href} href={item.href} className="block text-sm text-slate-400 hover:text-white transition-colors">{item.label}</Link>)}</div>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Service Area</h2>
            <div className="space-y-3">
              <Link href="/locations" className="block text-sm text-slate-300 hover:text-white transition-colors">
                <span className="flex items-center gap-2 font-medium"><MapPin className="w-3 h-3 text-amber-400" />New York City</span>
                <span className="block text-xs text-slate-500 mt-1 ml-5">Manhattan, Brooklyn, Queens, The Bronx, Staten Island</span>
              </Link>
              <Link href="/locations" className="block text-sm text-slate-300 hover:text-white transition-colors">
                <span className="flex items-center gap-2 font-medium"><MapPin className="w-3 h-3 text-amber-400" />New Jersey</span>
                <span className="block text-xs text-slate-500 mt-1 ml-5">Union, Essex, Hudson, Passaic, and Middlesex counties</span>
              </Link>
              <Link href="/locations" className="flex items-center gap-2 text-sm text-amber-500/70 hover:text-amber-400 transition-colors mt-1">View service area <ArrowUpRight className="w-3 h-3" /></Link>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Company</h2>
            <div className="space-y-2">
              <Link href="/manufacturer-service" className="block text-sm text-slate-400 hover:text-white transition-colors">Manufacturer Service</Link>
              <Link href="/services" className="block text-sm text-slate-400 hover:text-white transition-colors">All Service Information</Link>
              <Link href="/about" className="block text-sm text-slate-400 hover:text-white transition-colors">About TCS</Link>
              <Link href="/blog" className="block text-sm text-slate-400 hover:text-white transition-colors">Resources</Link>
              <Link href="/contact" className="block text-sm text-slate-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/schedule-service" className="block text-sm text-slate-400 hover:text-white transition-colors">Request Service</Link>
            </div>
            {Object.values(PROFILES).some(Boolean) && (
              <div className="flex flex-wrap gap-2 mt-6">
                {Object.entries(PROFILES).filter(([, url]) => Boolean(url)).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors capitalize">{name}</a>)}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.</p>
          <p className="text-xs text-slate-600">Commercial kitchens only • NYC and North Jersey</p>
        </div>
      </div>
    </footer>
  );
}
