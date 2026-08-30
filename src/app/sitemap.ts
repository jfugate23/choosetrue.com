import { MetadataRoute } from 'next';
import { LOCATIONS, VERTICALS, VENTILATION_CITIES } from '@/lib/data';
import { getIndexablePosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://choosetrue.com';
  const updated = new Date('2026-08-30');
  
  const staticPages = [
    { url: base, lastModified: updated, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/services`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/kitchen-ventilation`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/services/kitchen-air-balancing`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/services/exhaust-fan-repair`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/services/makeup-air-unit-repair`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/services/ventilation-controls`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/pollution-control`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/manufacturer-service`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/locations`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/who-we-serve`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/about`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/schedule-service`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/tools/energy-calculator`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.65 },
    { url: `${base}/resources`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${base}/blog`, lastModified: updated, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const ventilationCitySlugs = new Set(VENTILATION_CITIES.map((city) => city.slug));
  const locationPages = LOCATIONS.filter((location) => !ventilationCitySlugs.has(location.slug)).map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: updated,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const verticalPages = VERTICALS.map((v) => ({
    url: `${base}/who-we-serve/${v.slug}`,
    lastModified: updated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = getIndexablePosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const ventilationCityPages = VENTILATION_CITIES.map((c) => ({
    url: `${base}/services/kitchen-ventilation/${c.slug}`,
    lastModified: updated,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...locationPages, ...verticalPages, ...blogPages, ...ventilationCityPages];
}
