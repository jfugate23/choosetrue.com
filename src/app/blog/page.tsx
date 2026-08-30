import { Metadata } from 'next';
import Link from 'next/link';
import { getIndexablePosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Commercial Kitchen Ventilation Guides',
  description: 'Field-informed guides to kitchen hood capture, exhaust fans, makeup air, negative pressure, ventilation controls, and pollution-control problems.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getIndexablePosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
      <p className="text-gray-400 mb-12">Practical guides to commercial kitchen airflow, exhaust, makeup air, controls, and capture problems.</p>

      <div className="space-y-8">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="border border-gray-700 rounded-2xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 bg-amber-500/10 text-amber-400 rounded text-xs font-medium">{post.category}</span>
                <span className="text-xs text-gray-500">{post.readTime} read</span>
                <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
