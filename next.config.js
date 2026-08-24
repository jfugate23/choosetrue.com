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
    ];
  },
};

module.exports = nextConfig;
