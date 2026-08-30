import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, MapPin } from 'lucide-react';
import { LOCATIONS, VENTILATION_CITIES } from '@/lib/data';
import { PageHero, Reveal, Section, SectionHeading } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Kitchen Ventilation Areas — NYC & NJ',
  description: 'Commercial kitchen ventilation service in all five NYC boroughs and across Union, Essex, Hudson, Passaic, and Middlesex counties in New Jersey.',
  alternates: { canonical: '/locations' },
};

const activeLocations = LOCATIONS.filter((location) => location.status === 'active');
const nycLocations = activeLocations.filter((location) => location.state === 'NY' && location.slug !== 'new-york-city');
const njLocations = activeLocations.filter((location) => location.state === 'NJ');
const ventilationCitySlugs = new Set(VENTILATION_CITIES.map((city) => city.slug));

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="All five NYC boroughs and key New Jersey markets."
        description="TCS serves commercial kitchens across New York City and from Union County through Essex, Hudson, Passaic, and Middlesex counties. Coverage depends on job scope, access, scheduling, and travel conditions."
      />

      <Section className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <CoverageSummary
            icon={<Building2 className="w-6 h-6" />}
            title="New York City"
            description="Commercial kitchen ventilation service throughout Manhattan, Brooklyn, Queens, The Bronx, and Staten Island."
            areas={['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island']}
          />
          <CoverageSummary
            icon={<MapPin className="w-6 h-6" />}
            title="New Jersey"
            description="Coverage from an Elizabeth base across the major restaurant and institutional markets of North and Central Jersey."
            areas={['Union County', 'Essex County', 'Hudson County', 'Passaic County', 'Middlesex County']}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="New York City"
          title="Ventilation service across all five boroughs."
          description="Choose a borough for local coverage details. Commercial kitchen exhaust, makeup air, airflow, VFD, and controls work is the focus in every market."
        />
        <LocationGrid locations={nycLocations} />
      </Section>

      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="New Jersey"
          title="North and Central Jersey coverage."
          description="Choose the closest market below. Service is not limited to the named city; each page includes the surrounding county and nearby communities."
        />
        <LocationGrid locations={njLocations} />
      </Section>
    </>
  );
}

function CoverageSummary({ icon, title, description, areas }: { icon: React.ReactNode; title: string; description: string; areas: string[] }) {
  return (
    <Reveal>
      <div className="glass-card rounded-2xl p-7 lg:p-8 h-full">
        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-5">{icon}</div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => <span key={area} className="text-xs bg-white/5 text-slate-300 px-3 py-1.5 rounded-full">{area}</span>)}
        </div>
      </div>
    </Reveal>
  );
}

function LocationGrid({ locations }: { locations: typeof LOCATIONS }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {locations.map((location, index) => (
        <Reveal key={location.slug} delay={index * 60}>
          <Link href={ventilationCitySlugs.has(location.slug) ? `/services/kitchen-ventilation/${location.slug}` : `/locations/${location.slug}`} className="group block glass-card rounded-xl p-6 h-full hover:border-amber-500/25 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">{location.city}</h3>
                <p className="text-xs text-slate-500 mt-1">{location.tagline}</p>
              </div>
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {location.serviceArea.slice(0, 6).map((area) => <span key={area} className="text-[11px] bg-white/5 text-slate-400 px-2 py-1 rounded">{area}</span>)}
            </div>
            <span className="inline-flex items-center gap-1 text-sm text-amber-400 font-medium">
              View local coverage <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
