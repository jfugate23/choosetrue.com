'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';

// Fires a "Call Click" analytics event whenever any tel: link on the site is
// tapped. One document-level listener covers the header, footer, hero cards,
// and the mobile sticky bar without instrumenting each component.
export default function CallTracking() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href^="tel:"]');
      if (!anchor) return;
      track('Call Click', {
        number: anchor.getAttribute('href') || '',
        page: window.location.pathname,
      });
      const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
      const callLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL;
      const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag && adsId && callLabel) {
        gtag('event', 'conversion', { send_to: `${adsId}/${callLabel}` });
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
    // Re-bind per pathname is unnecessary (listener is global), but keeping the
    // dep silences exhaustive-deps and costs nothing.
  }, [pathname]);

  return null;
}
