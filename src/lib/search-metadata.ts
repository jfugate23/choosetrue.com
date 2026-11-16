import type { Metadata } from 'next';

export const SITE_URL = 'https://choosetrue.com';
export const ORGANIZATION_ID = SITE_URL + '#organization';
export const WEBSITE_ID = SITE_URL + '/#website';

// Next.js inherits the root Open Graph object unless a page supplies its own.
// Keep each canonical page's preview identity aligned with its actual content.
export function withPageMetadata(metadata: Metadata): Metadata {
  const canonical = metadata.alternates?.canonical;
  if (!canonical) return metadata;
  const url = typeof canonical === 'object' && !(canonical instanceof URL)
    ? canonical.url : canonical;
  const title = typeof metadata.title === 'string' ? metadata.title
    : metadata.title && 'absolute' in metadata.title ? metadata.title.absolute
    : undefined;
  return {
    ...metadata,
    openGraph: {
      type: 'website',
      siteName: 'True Commercial Service',
      images: [{ url: SITE_URL + '/images/logo.png' }],
      ...metadata.openGraph,
      url: new URL(String(url), SITE_URL).href,
      ...(title ? { title } : {}),
      ...(metadata.description ? { description: metadata.description } : {}),
    },
  };
}
