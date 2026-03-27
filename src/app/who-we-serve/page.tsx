import { Metadata } from 'next';
import Link from 'next/link';
import { UtensilsCrossed, ShoppingCart, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { VERTICALS } from '@/lib/data';
import { PageHero, Section, Reveal } from '@/components/UI';

export const metadata: Metadata = {
  title: 'Who We Serve',
  description: 'True Commercial Service works with restaurants, grocery stores, schools, hospitals, hotels, and institutional foodservice operations.',
};

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Built for operators who can't afford downtime."
        description="From single-unit restaurants to multi-site institutional operations — we understand the urgency, the margins, and the stakes."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.slug} delay={i * 100}>
              <Link
                href={`/who-we-serve/${v.slug}`}
                className="group block glass-card rounded-2xl p-8 hover:border-amber-500/20 transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                  {iconMap[v.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{v.longDescription}</p>
                <div className="flex items-center gap-1 text-sm text-amber-400 font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
