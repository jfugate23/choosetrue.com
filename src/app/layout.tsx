import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'True Commercial Service | Commercial Kitchen Equipment Repair',
    template: '%s | True Commercial Service',
  },
  description: 'Tech-forward commercial kitchen equipment repair serving Oklahoma City, Northern New Jersey, and Atlanta. Cooking, refrigeration, HVAC, espresso machines. 24/7 emergency service.',
  keywords: ['commercial kitchen equipment repair', 'restaurant equipment repair', 'commercial refrigeration repair', 'Oklahoma City', 'New Jersey', 'Atlanta'],
  openGraph: {
    title: 'True Commercial Service | Commercial Kitchen Equipment Repair',
    description: 'Tech-forward commercial kitchen equipment repair. Done Right.',
    url: 'https://choosetrue.com',
    siteName: 'True Commercial Service',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-navy-300 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
