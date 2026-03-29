import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Wrench, ArrowUpRight, ExternalLink } from 'lucide-react';
import { COMPANY, LOCATIONS, SERVICES, PROFILES, HUB_LOCATIONS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-navy-400 border-t border-white/5 pb-20 lg:pb-0">
      {/* Emergency banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-200 font-medium text-sm">24/7 Emergency Service Available</span>
          </div>
          <a href={COMPANY.emergencyPhoneHref} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-colors">
            <Phone className="w-4 h-4" />
            {COMPANY.emergencyPhone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo.png" alt="True Commercial Service" width={200} height={56} className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Tech-forward commercial kitchen equipment repair. Built by operators, for operators.
            </p>
            <div className="space-y-2">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-amber-500/60" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-amber-500/60" /> {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Services</h4>
            <div className="space-y-2">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block text-sm text-slate-400 hover:text-white transition-colors">
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Locations</h4>
            <div className="space-y-2">
              {LOCATIONS.filter((l) => HUB_LOCATIONS.includes(l.slug)).map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <MapPin className="w-3 h-3" />
                  {l.city}, {l.state}
                  {l.status === 'coming-soon' && <span className="text-[10px] text-amber-500/60 ml-1">Soon</span>}
                </Link>
              ))}
              <Link href="/locations" className="flex items-center gap-2 text-sm text-amber-500/70 hover:text-amber-400 transition-colors mt-1">
                View all locations <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Company + Find Us */}
          <div>
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-slate-400 hover:text-white transition-colors">About</Link>
              <Link href="/careers" className="block text-sm text-slate-400 hover:text-white transition-colors">Careers</Link>
              <Link href="/blog" className="block text-sm text-slate-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="block text-sm text-slate-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/schedule-service" className="block text-sm text-slate-400 hover:text-white transition-colors">Schedule Service</Link>
            </div>

            {Object.values(PROFILES).some(Boolean) && (
              <>
                <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3 mt-6">Find Us On</h4>
                <div className="flex flex-wrap gap-2">
                  {PROFILES.google && (
                    <a href={PROFILES.google} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">Google</a>
                  )}
                  {PROFILES.yelp && (
                    <a href={PROFILES.yelp} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">Yelp</a>
                  )}
                  {PROFILES.facebook && (
                    <a href={PROFILES.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">Facebook</a>
                  )}
                  {PROFILES.instagram && (
                    <a href={PROFILES.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">Instagram</a>
                  )}
                  {PROFILES.bbb && (
                    <a href={PROFILES.bbb} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">BBB</a>
                  )}
                  {PROFILES.angi && (
                    <a href={PROFILES.angi} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">Angi</a>
                  )}
                  {PROFILES.linkedin && (
                    <a href={PROFILES.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white bg-white/5 rounded-md px-2.5 py-1.5 transition-colors">LinkedIn</a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span>Powered by</span>
            <span className="text-amber-500/50 font-medium">Tradecraft AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
