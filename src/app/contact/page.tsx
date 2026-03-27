import { Metadata } from 'next';
import { COMPANY, LOCATIONS } from '@/lib/data';
import { PageHero, Section, Reveal, ServiceForm } from '@/components/UI';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact True Commercial Service. 24/7 emergency commercial kitchen equipment repair. Call, email, or submit a service request online.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We pick up the phone. Every time."
        description="Equipment emergencies don't wait — and neither do we. Call us 24/7 or submit a request online."
        showCTA={false}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="space-y-8">
            <Reveal>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">24/7 Emergency Line</p>
                    <a href={COMPANY.emergencyPhoneHref} className="text-xl font-bold hover:text-amber-400 transition-colors">{COMPANY.emergencyPhone}</a>
                  </div>
                </div>
                <p className="text-xs text-slate-500 ml-[60px]">For after-hours emergencies. We answer around the clock.</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Main Line</p>
                    <a href={COMPANY.phoneHref} className="text-xl font-bold hover:text-amber-400 transition-colors">{COMPANY.phone}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-lg font-semibold hover:text-amber-400 transition-colors">{COMPANY.email}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Service Locations</p>
                  </div>
                </div>
                <div className="ml-[60px] space-y-2">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.slug} className="flex items-center gap-2">
                      <span className="text-sm">{loc.city}, {loc.state}</span>
                      {loc.status === 'coming-soon' && (
                        <span className="text-[10px] bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded-full">Coming Soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-2">Send us a message</h3>
              <p className="text-sm text-slate-400 mb-6">We respond within the hour during business hours.</p>
              <ServiceForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
