import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/UI';

const photos = [
  { src: '/images/projects/garland-upper-west-side/garland-oven-controls.jpg', alt: 'Garland commercial convection oven controls at an Upper West Side nonprofit kitchen in Manhattan', caption: 'Garland oven controls documented during service.' },
  { src: '/images/projects/garland-upper-west-side/garland-blower-wheel.jpg', alt: 'Garland oven blower wheel documented during the Upper West Side repair project', caption: 'Blower wheel documented during the repair.' },
  { src: '/images/projects/garland-upper-west-side/garland-oven-motor.jpg', alt: 'Garland convection oven motor assembly documented during service in Manhattan', caption: 'Oven motor assembly documented during service.' },
];

// Owner-confirmed job details. Keep the nonprofit anonymous and make no
// claim of donated work, fire investigation, certification, or test readings.
export default function GarlandProjectFeature({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="garland-upper-west-side" className="bg-white/[0.02] scroll-mt-28">
      <div className={compact ? 'grid lg:grid-cols-2 gap-8 lg:gap-12 items-center' : 'max-w-5xl mx-auto'}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">Completed project · Upper West Side, Manhattan</p>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight">Garland Oven Maintenance and Repair for an Upper West Side Nonprofit</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">True Commercial Service performed preventive maintenance and repairs on a Garland commercial convection oven at a nonprofit kitchen on Manhattan’s Upper West Side.</p>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">Following an internal oven fire, the work included grease cleaning and replacement of the damaged blower wheel and motor. The oven was returned to operation after the repair.</p>
          {!compact && <p className="mt-4 text-sm text-slate-400 leading-relaxed">These field photos document the oven controls, blower wheel, and motor assembly during service. TCS reviews commercial oven repair and maintenance requests individually across Manhattan, Brooklyn, and Queens.</p>}
          {compact && <Link href="/services/cooking-equipment#garland-upper-west-side" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-amber-400 hover:text-amber-300">View the oven repair project photos <ArrowRight className="w-4 h-4" /></Link>}
        </div>
        <div className={compact ? 'max-w-md w-full mx-auto' : 'grid md:grid-cols-3 gap-6 mt-8'}>
          {(compact ? photos.slice(0, 1) : photos).map(photo => (
            <figure key={photo.src}>
              <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${photo.alt}`} className="relative block aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-navy-400">
                <Image src={photo.src} alt={photo.alt} fill sizes={compact ? '(max-width: 768px) 100vw, 448px' : '(max-width: 768px) 100vw, 340px'} className="object-contain" />
              </a>
              <figcaption className="mt-3 text-xs text-slate-400 leading-relaxed">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
