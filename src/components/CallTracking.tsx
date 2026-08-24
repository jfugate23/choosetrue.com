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
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
    // Re-bind per pathname is unnecessary (listener is global), but keeping the
    // dep silences exhaustive-deps and costs nothing.
  }, [pathname]);

  return null;
}
