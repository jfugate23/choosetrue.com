import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/UI';

const photos = [
  {
    src: '/images/projects/jfk-terminal-1/gaylord-eliminator-hoods.jpg',
    alt: 'Gaylord Eliminator commercial kitchen hoods at JFK Airport New Terminal 1 in Queens',
    caption: 'Gaylord Eliminator hood installation at JFK’s new Terminal 1.',
  },
  {
    src: '/images/projects/jfk-terminal-1/gaylord-control-cabinet.jpg',
    alt: 'Open Gaylord hood control cabinet photographed during the JFK Terminal 1 commissioning visit',
    caption: 'Gaylord control cabinet during the commissioning visit.',
  },
  {
    src: '/images/projects/jfk-terminal-1/gaylord-internal-components.jpg',
    alt: 'Internal Gaylord Eliminator hood components photographed during commissioning at JFK in Queens',
    caption: 'Internal hood equipment documented during the project.',
  },
];

// Scope and completion confirmed by the owner with the supplied field photos.
// Do not infer test readings, approval by an authority, or airport contracts.
export default function JfkProjectFeature({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="jfk-terminal-1" className="bg-white/[0.02] scroll-mt-28">
      <div className={compact ? 'grid lg:grid-cols-2 gap-8 lg:gap-12 items-center' : 'max-w-5xl mx-auto'}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">Completed project · Queens, New York</p>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight">Gaylord Eliminator Hood Commissioning at JFK’s New Terminal 1</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">True Commercial Service completed startup and commissioning of Gaylord Eliminator commercial kitchen hoods with Accurex exhaust fans at the new Terminal 1 at JFK Airport in Queens, New York.</p>
          {!compact && <>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">The project photos show the installed hoods, control cabinet, and internal equipment during the commissioning work.</p>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">TCS provides commercial kitchen ventilation startup, commissioning, diagnostics, and repair throughout Queens, Manhattan, and Brooklyn.</p>
          </>}
          {compact && <Link href="/manufacturer-service/gaylord#jfk-terminal-1" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-amber-400 hover:text-amber-300">View the Gaylord project photos <ArrowRight className="w-4 h-4" /></Link>}
        </div>
        <div className={compact ? '' : 'grid md:grid-cols-2 gap-6 mt-8'}>
          {(compact ? photos.slice(0, 1) : photos).map((photo, index) => (
            <figure key={photo.src} className={!compact && index === 0 ? 'md:col-span-2' : ''}>
              <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${photo.alt}`} className="relative block aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-navy-400">
                <Image src={photo.src} alt={photo.alt} fill sizes={compact ? '(max-width: 1024px) 100vw, 50vw' : index === 0 ? '(max-width: 1024px) 100vw, 1024px' : '(max-width: 768px) 100vw, 512px'} className="object-contain" />
              </a>
              <figcaption className="mt-3 text-xs text-slate-400 leading-relaxed">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
