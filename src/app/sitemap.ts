import { MetadataRoute } from 'next';
import { SERVICES, LOCATIONS, VERTICALS, VENTILATION_CITIES } from '@/lib/data';
import { getAllPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://choosetrue.com';
  
  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    // Market homepages — equal weight, independently indexable.
    { url: `${base}/ok`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/nj`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/locations`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/who-we-serve`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/careers`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/schedule-service`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services/kitchen-ventilation`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/services/pollution-control`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.95 },
    { url: `${base}/tools/energy-calculator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const verticalPages = VERTICALS.map((v) => ({
    url: `${base}/who-we-serve/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const ventilationCityPages = VENTILATION_CITIES.map((c) => ({
    url: `${base}/services/kitchen-ventilation/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...verticalPages, ...blogPages, ...ventilationCityPages];
}
