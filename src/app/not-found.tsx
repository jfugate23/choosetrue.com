import Link from 'next/link';
import { ArrowLeft, Wrench } from 'lucide-react';
import { CTAButton } from '@/components/UI';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Wrench className="w-10 h-10 text-amber-400" />
        </div>
        <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Looks like this page is out of service. Let&apos;s get you back to something that works.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:bg-white/5">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
          <CTAButton />
        </div>
      </div>
    </div>
  );
}
