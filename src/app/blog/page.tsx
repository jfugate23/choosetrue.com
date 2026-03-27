import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog — Commercial Kitchen Equipment Tips & Guides',
  description: 'Expert advice on commercial kitchen equipment repair, maintenance, and troubleshooting. Walk-in coolers, ice machines, combi ovens, ventilation, and more.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
      <p className="text-gray-400 mb-12">Expert guides on commercial kitchen equipment repair and maintenance.</p>

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
