import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { MARKET_OK, MARKET_NJ } from '@/lib/data';

export const metadata: Metadata = {
  title: 'True Commercial Service | Commercial Kitchen Equipment Repair — Choose Your Region',
  description: 'Commercial kitchen equipment repair and ventilation service in the Oklahoma City metro and the Northern NJ / NYC metro. Choose your region to get started.',
  alternates: {
    canonical: 'https://choosetrue.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Neutral landing. Visitors are auto-redirected to /ok or /nj by the edge
// middleware based on geo. This page is the fallback / manual market picker
// for anyone outside both markets or anyone who explicitly wants to choose.
export default function RootLanding() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-300 via-navy-300 to-navy-300" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 lg:px-6 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-xs font-medium tracking-wide">TWO METRO AREAS. ONE STANDARD OF SERVICE.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Choose your <span className="text-gradient">region</span>.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
            True Commercial Service operates two full-service locations — serving commercial kitchens across the Oklahoma City metro and the Northern NJ / NYC metro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {/* OKC Market Card */}
          <Link
            href="/ok"
            className="group block glass-card rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Oklahoma</p>
                <h2 className="text-2xl font-bold">OKC Metro</h2>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Oklahoma City, Norman, Edmond, Moore, Midwest City, Stillwater and all of Central Oklahoma.
            </p>

            <div className="flex items-center gap-2 text-slate-300 mb-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">{MARKET_OK.phone}</span>
            </div>
            <p className="text-xs text-slate-500 mb-6">{MARKET_OK.address.street} · {MARKET_OK.address.city}, {MARKET_OK.address.region}</p>

            <div className="flex items-center gap-2 text-amber-400 font-medium group-hover:gap-3 transition-all">
              Enter OKC Site <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* NJ/NYC Market Card */}
          <Link
            href="/nj"
            className="group block glass-card rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">New Jersey / New York</p>
                <h2 className="text-2xl font-bold">NJ &amp; NYC Metro</h2>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Elizabeth, Newark, Jersey City, all of Union/Essex/Hudson counties, plus all five boroughs of New York City. Local Law 38 compliance.
            </p>

            <div className="flex items-center gap-2 text-slate-300 mb-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">{MARKET_NJ.phone}</span>
            </div>
            <p className="text-xs text-slate-500 mb-6">{MARKET_NJ.address.street} · {MARKET_NJ.address.city}, {MARKET_NJ.address.region}</p>

            <div className="flex items-center gap-2 text-amber-400 font-medium group-hover:gap-3 transition-all">
              Enter NJ/NYC Site <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <p className="text-center text-xs text-slate-500 mt-12">
          Outside both service areas? <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">Contact us</Link> anyway — we&rsquo;ll see what we can do.
        </p>
      </div>
    </section>
  );
}
