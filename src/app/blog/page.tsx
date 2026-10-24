import { Metadata } from 'next';
import Link from 'next/link';
import { getIndexablePosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Commercial Equipment & HVAC Guides',
  description: 'Commercial cooking equipment, HVAC, ventilation, refrigeration, and ice machine guides for NYC and NJ operators. Current service availability varies.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getIndexablePosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">Equipment and ventilation guides</h1>
      <p className="text-gray-400 mb-8">Practical information for NYC and New Jersey operators: cooking equipment, commercial HVAC, kitchen ventilation, refrigeration, and ice machines.</p>
      <div className="flex flex-wrap gap-3 mb-12 text-sm">
        <Link href="/services/cooking-equipment" className="text-amber-400 border border-amber-500/25 rounded-lg px-3 py-2">Cooking equipment</Link>
        <Link href="/services/hvac" className="text-amber-400 border border-amber-500/25 rounded-lg px-3 py-2">Commercial HVAC</Link>
        <Link href="/services/kitchen-ventilation" className="text-amber-400 border border-amber-500/25 rounded-lg px-3 py-2">Kitchen ventilation</Link>
        <Link href="/services/refrigeration" className="text-amber-400 border border-amber-500/25 rounded-lg px-3 py-2">Refrigeration resources</Link>
        <Link href="/services/ice-machines" className="text-amber-400 border border-amber-500/25 rounded-lg px-3 py-2">Ice machine resources</Link>
      </div>

      <div className="space-y-8">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="border border-gray-700 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-xs font-medium">{post.category}</span>
                <span className="text-xs text-gray-500">{post.readTime} read</span>
                <span className="text-xs text-gray-500">{post.updated ? 'Updated ' : ''}{new Date(post.updated || post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</span>
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">{post.title}</h2>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">{post.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
