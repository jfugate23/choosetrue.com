import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { LOCATIONS } from '@/lib/data';
import { PageHero, Section, Reveal } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Service Locations',
  description: 'True Commercial Service locations: Northern NJ and NYC. Commercial kitchen ventilation and equipment repair near you.',
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Commercial kitchen service where you need it."
        description="We're expanding across the country — starting with markets where operators need a better option."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 100}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group block glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all duration-300 h-full relative overflow-hidden"
              >
                {loc.status === 'active' && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400" />
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  {loc.status === 'coming-soon' ? (
                    <span className="text-xs bg-amber-500/15 text-amber-400 px-3 py-1 rounded-full font-medium">Coming Soon</span>
                  ) : (
                    <span className="text-xs bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Active
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-amber-400 transition-colors">{loc.city}</h3>
                <p className="text-sm text-slate-500 mb-4">{loc.state}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{loc.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {loc.serviceArea.slice(0, 5).map((area) => (
                    <span key={area} className="text-[11px] bg-white/5 text-slate-400 px-2 py-1 rounded">{area}</span>
                  ))}
                  {loc.serviceArea.length > 5 && (
                    <span className="text-[11px] text-amber-500 px-2 py-1">+{loc.serviceArea.length - 5} more</span>
                  )}
                </div>
                {loc.status === 'active' && (
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <Phone className="w-4 h-4 text-amber-400" /> {loc.phone}
                  </div>
                )}
                <div className="flex items-center gap-1 text-sm text-amber-400 font-medium group-hover:gap-2 transition-all">
                  View details <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
