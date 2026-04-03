import { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading, Reveal } from '@/components/UI';
import { ExternalLink, BookOpen, ShieldCheck, Wrench, Wind, Flame, Thermometer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Resources | Commercial Kitchen Equipment & Ventilation',
  description: 'Industry resources for commercial kitchen equipment repair, ventilation, HVAC, and food service. Manufacturer links, code references, certifications, and tools.',
};

const resources = [
  {
    category: 'Codes & Standards',
    icon: <ShieldCheck className="w-5 h-5" />,
    links: [
      { name: 'NFPA 96 — Commercial Kitchen Ventilation', url: 'https://www.nfpa.org/codes-and-standards/nfpa-96-standard-development/96', desc: 'The standard governing all commercial kitchen exhaust and ventilation systems' },
      { name: 'EPA Section 608 — Refrigerant Certification', url: 'https://www.epa.gov/section608', desc: 'Federal certification required for anyone handling refrigerants' },
      { name: 'ASHRAE — American Society of Heating, Refrigerating, AC Engineers', url: 'https://www.ashrae.org/', desc: 'Industry standards for HVAC design, ventilation, and indoor air quality' },
      { name: 'International Mechanical Code (IMC)', url: 'https://codes.iccsafe.org/codes/international-mechanical-code', desc: 'Model code for mechanical systems adopted by NJ and most states' },
      { name: 'International Fuel Gas Code (IFGC)', url: 'https://codes.iccsafe.org/codes/international-fuel-gas-code', desc: 'Gas piping, appliance venting, and combustion air requirements' },
      { name: 'NYC Local Law 38 — Kitchen Exhaust Emissions', url: 'https://www.nyc.gov/site/dep/about/local-law-38.page', desc: 'NYC law requiring pollution control on commercial kitchen exhaust' },
      { name: 'NJ Uniform Construction Code', url: 'https://www.nj.gov/dca/divisions/codes/', desc: 'New Jersey building and mechanical code requirements' },
    ],
  },
  {
    category: 'Kitchen Hood & Ventilation Manufacturers',
    icon: <Wind className="w-5 h-5" />,
    links: [
      { name: 'CaptiveAire Systems', url: 'https://www.captiveaire.com/', desc: 'Largest US kitchen hood manufacturer. Hoods, fans, MAUs, controls, DCV.' },
      { name: 'Accurex (Halton)', url: 'https://www.accurex.com/', desc: 'Commercial kitchen ventilation systems, hoods, and exhaust.' },
      { name: 'Greenheck', url: 'https://www.greenheck.com/', desc: 'Exhaust fans, makeup air units, hoods, dampers, and louvers.' },
      { name: 'Gaylord Industries', url: 'https://www.gfrg.com/', desc: 'Kitchen ventilation hoods and pollution control.' },
    ],
  },
  {
    category: 'Cooking Equipment Manufacturers',
    icon: <Flame className="w-5 h-5" />,
    links: [
      { name: 'Rational', url: 'https://www.rational-online.com/', desc: 'iCombi Pro and iCombi Classic combi ovens.' },
      { name: 'Alto-Shaam', url: 'https://www.alto-shaam.com/', desc: 'Combi ovens, cook and hold, heated holding.' },
      { name: 'Vulcan (Welbilt)', url: 'https://www.vulcanequipment.com/', desc: 'Ranges, ovens, fryers, griddles, steamers.' },
      { name: 'Middleby Corporation', url: 'https://www.middleby.com/', desc: 'Parent company of 50+ foodservice equipment brands.' },
      { name: 'Henny Penny', url: 'https://www.hennypenny.com/', desc: 'Fryers, holding cabinets, combi ovens.' },
    ],
  },
  {
    category: 'Refrigeration & Ice Machine Manufacturers',
    icon: <Thermometer className="w-5 h-5" />,
    links: [
      { name: 'Hoshizaki', url: 'https://www.hoshizakiamerica.com/', desc: 'Premium ice machines and commercial refrigeration.' },
      { name: 'Manitowoc Ice', url: 'https://www.manitowocice.com/', desc: 'Commercial ice machines — cube, flake, nugget.' },
      { name: 'True Manufacturing', url: 'https://www.truemfg.com/', desc: 'Commercial reach-in refrigerators, freezers, prep tables.' },
      { name: 'Scotsman Ice', url: 'https://www.scotsman-ice.com/', desc: 'Commercial ice machines for hospitality and foodservice.' },
      { name: 'Kolpak', url: 'https://www.kolpak.com/', desc: 'Walk-in coolers and freezers.' },
    ],
  },
  {
    category: 'Industry Associations & Certifications',
    icon: <BookOpen className="w-5 h-5" />,
    links: [
      { name: 'CFESA — Commercial Food Equipment Service Association', url: 'https://www.cfesa.com/', desc: 'Industry association for commercial foodservice equipment service companies.' },
      { name: 'IKECA — International Kitchen Exhaust Cleaning Association', url: 'https://www.ikeca.org/', desc: 'Certification for kitchen exhaust cleaning and ventilation professionals.' },
      { name: 'NEBB — National Environmental Balancing Bureau', url: 'https://www.nebb.org/', desc: 'Testing, adjusting, and balancing certification for HVAC professionals.' },
      { name: 'NJ HVACR Licensing Board', url: 'https://www.njconsumeraffairs.gov/hvacr', desc: 'NJ State Board of Examiners for HVACR Contractors.' },
    ],
  },
  {
    category: 'Parts & Supply',
    icon: <Wrench className="w-5 h-5" />,
    links: [
      { name: 'PartsTown', url: 'https://www.partstown.com/', desc: 'OEM parts for commercial kitchen equipment. Same-day shipping.' },
      { name: 'WebstaurantStore', url: 'https://www.webstaurantstore.com/', desc: 'Restaurant supplies, equipment, and replacement parts.' },
      { name: 'Johnstone Supply', url: 'https://www.johnstonesupply.com/', desc: 'HVAC/R parts and supplies.' },
      { name: 'RE Michel', url: 'https://www.remichel.com/', desc: 'HVAC/R wholesale distributor.' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-44">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <Reveal>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">Resources</p>
            <h1 className="text-3xl lg:text-4xl font-bold">Industry Resources & References</h1>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl">Codes, standards, manufacturer documentation, and industry resources for commercial kitchen equipment and ventilation professionals.</p>
          </Reveal>
        </div>
      </section>

      {resources.map((section, si) => (
        <Section key={si} className={si % 2 === 0 ? '' : 'bg-white/[0.02]'}>
          <SectionHeading title={section.category} />
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {section.links.map((link, li) => (
              <Reveal key={li} delay={li * 50}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="group glass-card rounded-xl p-5 block hover:border-amber-500/20 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold group-hover:text-amber-400 transition-colors">{link.name}</h3>
                      <p className="text-xs text-slate-400 mt-1">{link.desc}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-amber-400 flex-shrink-0 ml-3 mt-0.5" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading eyebrow="Free Tool" title="Calculate Your Kitchen Energy Waste" description="Find out how much money your kitchen ventilation system is costing you." />
          <Link href="/tools/energy-calculator" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-300 font-bold text-sm px-6 py-3 rounded-xl transition-all">
            Try the Calculator
          </Link>
        </div>
      </Section>
    </>
  );
}
