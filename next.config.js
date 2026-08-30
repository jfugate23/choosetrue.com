/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    return [
      // ─── Retired market routes → single NJ/NYC homepage ─────────
      { source: '/ok', destination: '/', permanent: true },
      { source: '/ok/:path*', destination: '/', permanent: true },
      { source: '/nj', destination: '/', permanent: true },
      { source: '/nj/:path*', destination: '/', permanent: true },

      // ─── Retired Oklahoma location pages → homepage ─────────────
      { source: '/locations/oklahoma-city', destination: '/', permanent: true },
      { source: '/locations/norman-ok', destination: '/', permanent: true },
      { source: '/locations/edmond-ok', destination: '/', permanent: true },
      { source: '/locations/moore-ok', destination: '/', permanent: true },
      { source: '/locations/stillwater-ok', destination: '/', permanent: true },

      // ─── Retired Oklahoma blog posts → blog index ──────────────
      { source: '/blog/commercial-kitchen-equipment-repair-near-me-okc', destination: '/blog', permanent: true },
      { source: '/blog/emergency-walk-in-cooler-repair-oklahoma-city', destination: '/blog', permanent: true },
      { source: '/blog/24-7-restaurant-equipment-repair-okc-metro', destination: '/blog', permanent: true },
      { source: '/blog/commercial-exhaust-fan-repair-oklahoma-city', destination: '/services/exhaust-fan-repair', permanent: true },
      { source: '/blog/ice-machine-repair-near-me-oklahoma-city', destination: '/blog', permanent: true },

      // ─── Retired NJ/NYC articles → closest current resource ───
      // Search Console still sees these historical URLs. Redirect only where
      // the current site has a genuinely relevant replacement.
      { source: '/blog/esp-cleaning-service-nyc-nj', destination: '/services/pollution-control', permanent: true },
      { source: '/blog/kitchen-air-balancing-nj-what-it-is', destination: '/services/kitchen-air-balancing', permanent: true },
      { source: '/blog/commercial-kitchen-equipment-repair-near-me-nj-nyc', destination: '/services', permanent: true },
      { source: '/blog/nyc-local-law-38-esp-requirements-restaurants', destination: '/services/pollution-control', permanent: true },
      { source: '/blog/commercial-kitchen-equipment-repair-cost-nj', destination: '/services', permanent: true },
      { source: '/blog/restaurant-exhaust-fan-repair-nj', destination: '/services/exhaust-fan-repair', permanent: true },
      { source: '/blog/emergency-walk-in-cooler-repair-near-me-elizabeth-nj', destination: '/services/refrigeration', permanent: true },
      { source: '/blog/pm-agreement-benefits-nj-restaurants', destination: '/services/preventive-maintenance', permanent: true },
      { source: '/blog/kitchen-air-balancing-cost-nj-pricing', destination: '/services/kitchen-air-balancing', permanent: true },
      { source: '/blog/espresso-machine-repair-nj', destination: '/services/espresso-machines', permanent: true },
      { source: '/blog/ice-machine-repair-near-me-union-county-nj', destination: '/services/refrigeration', permanent: true },
      { source: '/blog/captiveaire-hood-service-nj', destination: '/blog/captiveaire-hood-maintenance-repair-guide', permanent: true },
      { source: '/blog/how-to-choose-commercial-kitchen-equipment-repair-company-nj', destination: '/services', permanent: true },
      { source: '/blog/commercial-exhaust-fan-repair-near-newark-nj', destination: '/services/kitchen-ventilation/newark-nj', permanent: true },

      // ─── Consolidate duplicate location/service landing pages ─
      // The richer ventilation-city route owns the local search intent.
      { source: '/locations/elizabeth-nj', destination: '/services/kitchen-ventilation/elizabeth-nj', permanent: true },
      { source: '/locations/newark-nj', destination: '/services/kitchen-ventilation/newark-nj', permanent: true },
      { source: '/locations/jersey-city-nj', destination: '/services/kitchen-ventilation/jersey-city-nj', permanent: true },
      { source: '/locations/paterson-nj', destination: '/services/kitchen-ventilation/paterson-nj', permanent: true },
      { source: '/locations/new-brunswick-nj', destination: '/services/kitchen-ventilation/new-brunswick-nj', permanent: true },
      { source: '/locations/manhattan-ny', destination: '/services/kitchen-ventilation/manhattan-ny', permanent: true },
      { source: '/locations/brooklyn-ny', destination: '/services/kitchen-ventilation/brooklyn-ny', permanent: true },
      { source: '/locations/queens-ny', destination: '/services/kitchen-ventilation/queens-ny', permanent: true },
      { source: '/locations/bronx-ny', destination: '/services/kitchen-ventilation/bronx-ny', permanent: true },
      { source: '/locations/staten-island-ny', destination: '/services/kitchen-ventilation/staten-island-ny', permanent: true },

      // ─── Retire broad city/service combinations ───────────────
      // These old routes contained claims and service scopes that TCS no
      // longer markets directly. Preserve useful navigation to the honest,
      // noindex capability pages instead of keeping dozens of thin city pages.
      { source: '/services/refrigeration/:city', destination: '/services/refrigeration', permanent: true },
      { source: '/services/cooking-equipment/:city', destination: '/services/cooking-equipment', permanent: true },
      { source: '/services/hvac/:city', destination: '/services/hvac', permanent: true },
      { source: '/services/beverage-equipment/:city', destination: '/services/beverage-equipment', permanent: true },
      { source: '/services/espresso-machines/:city', destination: '/services/espresso-machines', permanent: true },
      { source: '/services/preventive-maintenance/:city', destination: '/services/preventive-maintenance', permanent: true },
    ];
  },
};

module.exports = nextConfig;
