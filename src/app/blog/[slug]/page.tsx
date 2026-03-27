import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog-data';

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

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
          const text = line.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
          return `<li class="text-gray-300 text-sm leading-relaxed">${text}</li>`;
        }).join('');
        return `<ul class="list-disc pl-5 space-y-1 my-3">${items}</ul>`;
      }
      const formatted = block
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
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
        <h3 className="text-lg font-semibold text-white mb-2">Need help with your equipment?</h3>
        <p className="text-gray-400 text-sm mb-4">True Commercial Service provides 24/7 emergency repair and preventive maintenance across Union County, NJ.</p>
        <Link href="/schedule-service" className="inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg text-sm transition-colors">
          Schedule Service
        </Link>
      </div>
    </div>
  );
}
