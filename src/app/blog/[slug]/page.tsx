import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, isIndexablePost } from '@/lib/blog-data';

const seoTitles: Record<string, string> = {
  'commercial-kitchen-ventilation-problems-signs': 'Kitchen Ventilation Warning Signs',
  'captiveaire-hood-maintenance-repair-guide': 'CaptiveAire Hood Maintenance Guide',
  'makeup-air-unit-not-working-restaurant': 'Makeup Air Unit Not Working?',
  'restaurant-kitchen-too-hot-air-balance': 'Why Restaurant Kitchens Stay Hot',
  'kitchen-negative-pressure-causes-costs-fix': 'Commercial Kitchen Negative Pressure',
  'exhaust-fan-making-noise-causes': 'Noisy Kitchen Exhaust Fan',
  'dining-room-smells-like-kitchen-ventilation': 'Kitchen Odors in the Dining Room',
  'kitchen-hood-not-capturing-smoke': 'Kitchen Hood Not Capturing Smoke',
  'smoke-hog-not-working-troubleshooting': 'Smoke Hog Fault Troubleshooting',
};

function seoDescription(description: string) {
  if (description.length <= 160) return description;
  const shortened = description.slice(0, 157).replace(/\s+\S*$/, '');
  return `${shortened}…`;
}

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };

  const description = seoDescription(post.description);

  return {
    title: seoTitles[post.slug] || post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      publishedTime: post.date,
    },
    robots: isIndexablePost(post.slug)
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedService = getRelatedService(post.slug);

  // Simple markdown-to-html (handles ##, ###, **, -, |, \n)
  const html = post.content
    .split('\n\n')
    .map(block => {
      if (block.startsWith('### ')) return `<h3 class="text-lg font-semibold text-white mt-6 mb-2">${block.slice(4)}</h3>`;
      if (block.startsWith('## ')) return `<h2 class="text-xl font-bold text-white mt-8 mb-3">${block.slice(3)}</h2>`;
      if (block.startsWith('| ')) {
        const rows = block.split('\n').filter(r => r.trim() && !r.startsWith('|---'));
        const headerCells = rows[0]?.split('|').filter(Boolean).map(c => `<th class="px-3 py-2 text-left text-xs font-medium text-gray-400">${c.trim()}</th>`).join('');
        const bodyRows = rows.slice(1).map(r => {
          const cells = r.split('|').filter(Boolean).map(c => `<td class="px-3 py-2 text-sm text-gray-300">${c.trim()}</td>`).join('');
          return `<tr class="border-t border-gray-700">${cells}</tr>`;
        }).join('');
        return `<table class="w-full my-4 border border-gray-700 rounded-lg overflow-hidden"><thead><tr class="bg-gray-800/50">${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').map(line => {
          const text = line.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-400 hover:text-amber-300 underline">$1</a>');
          return `<li class="text-gray-300 text-sm leading-relaxed">${text}</li>`;
        }).join('');
        return `<ul class="list-disc pl-5 space-y-1 my-3">${items}</ul>`;
      }
      const formatted = block
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-amber-400 hover:text-amber-300 underline">$1</a>')
        .replace(/\n/g, '<br/>');
      return `<p class="text-gray-300 text-sm leading-relaxed my-3">${formatted}</p>`;
    })
    .join('');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'True Commercial Service' },
    publisher: { '@type': 'Organization', name: 'True Commercial Service', url: 'https://choosetrue.com' },
  };

  const faqSchema = post.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Link href="/blog" className="text-gray-500 text-sm hover:text-amber-400 transition-colors">&larr; All Articles</Link>

      <div className="flex items-center gap-3 mt-6 mb-4">
        <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-xs font-medium">{post.category}</span>
        <span className="text-xs text-gray-500">{post.readTime} read</span>
        <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      </div>

      <h1 className="text-3xl font-bold text-white leading-tight mb-8">{post.title}</h1>

      <article dangerouslySetInnerHTML={{ __html: html }} />

      {post.faqs && post.faqs.length > 0 && (
        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {post.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold text-amber-400 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
        <h3 className="text-lg font-semibold text-white mb-2">Have a kitchen ventilation problem?</h3>
        <p className="text-gray-400 text-sm mb-4">TCS provides specialized hood airflow diagnostics, exhaust fan repair, makeup air service, and ventilation-controls troubleshooting across NYC and North Jersey.</p>
        <div className="flex flex-wrap gap-3">
          <Link href={relatedService.href} className="inline-block px-5 py-2.5 border border-amber-500/30 hover:border-amber-400 text-amber-300 font-semibold rounded-lg text-sm transition-colors">
            {relatedService.label}
          </Link>
          <Link href="/schedule-service" className="inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg text-sm transition-colors">
            Request Ventilation Service
          </Link>
        </div>
      </div>
    </div>
  );
}

function getRelatedService(slug: string): { href: string; label: string } {
  if (slug.includes('makeup-air') || slug.includes('too-hot') || slug.includes('negative-pressure')) {
    return { href: '/services/makeup-air-unit-repair', label: 'Makeup Air Service' };
  }
  if (slug.includes('exhaust-fan')) {
    return { href: '/services/exhaust-fan-repair', label: 'Exhaust Fan Repair' };
  }
  if (slug.includes('smoke-hog')) {
    return { href: '/services/pollution-control', label: 'Pollution-Control Service' };
  }
  return { href: '/services/kitchen-air-balancing', label: 'Hood Airflow & Balancing' };
}
