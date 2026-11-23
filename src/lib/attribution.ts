// Lead-source attribution for calls and service requests.
//
// Captures ad click IDs (gclid, gbraid, wbraid), UTM tags, the landing page,
// and the referring host the first time a visitor arrives with them, and keeps
// them for 90 days (the Google Ads click-ID window) so a visitor who comes back
// later and submits the form is still credited to the original click.
//
// Only short labels and IDs are stored, never full referrer URLs or query strings.
// Storage failures must never block a call or a service request.

const STORAGE_KEY = 'tcs-attribution';
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

export interface Attribution {
  gclid: string;
  gbraid: string;
  wbraid: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  landingPage: string;
  referrerHost: string;
  capturedAt: string;
}

const EMPTY: Attribution = {
  gclid: '',
  gbraid: '',
  wbraid: '',
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  utmTerm: '',
  landingPage: '',
  referrerHost: '',
  capturedAt: '',
};

function clip(value: string | null | undefined, max = 150): string {
  return (value || '').trim().slice(0, max);
}

function readStored(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Attribution;
    const age = Date.now() - new Date(parsed.capturedAt).getTime();
    if (!parsed.capturedAt || Number.isNaN(age) || age > MAX_AGE_MS) return null;
    return { ...EMPTY, ...parsed };
  } catch {
    return null;
  }
}

function writeStored(value: Attribution) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch { /* Private browsing or blocked storage: attribution is best effort. */ }
}

function referrerHost(): string {
  try {
    if (!document.referrer) return '';
    const host = new URL(document.referrer).hostname.toLowerCase();
    // Internal navigation is not a source.
    return host === window.location.hostname.toLowerCase() ? '' : clip(host, 100);
  } catch {
    return '';
  }
}

// Call on every page load. A new ad click or tagged link replaces older data;
// an untagged internal or direct visit keeps what was captured before.
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return EMPTY;

  const params = new URLSearchParams(window.location.search);
  const incoming: Attribution = {
    gclid: clip(params.get('gclid'), 200),
    gbraid: clip(params.get('gbraid'), 200),
    wbraid: clip(params.get('wbraid'), 200),
    utmSource: clip(params.get('utm_source'), 100),
    utmMedium: clip(params.get('utm_medium'), 100),
    utmCampaign: clip(params.get('utm_campaign'), 150),
    utmTerm: clip(params.get('utm_term'), 150),
    landingPage: clip(window.location.pathname, 200),
    referrerHost: referrerHost(),
    capturedAt: new Date().toISOString(),
  };

  const isTagged = Boolean(
    incoming.gclid || incoming.gbraid || incoming.wbraid || incoming.utmSource || incoming.utmMedium,
  );
  const stored = readStored();

  // Tagged visits always win. Otherwise keep the first recorded visit, so every
  // lead has at least a landing page and a referrer host.
  if (isTagged || !stored) {
    writeStored(incoming);
    return incoming;
  }
  return stored;
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return EMPTY;
  return readStored() || captureAttribution();
}

// One readable label for the lead email and analytics.
export function sourceLabel(a: Pick<Attribution, 'gclid' | 'gbraid' | 'wbraid' | 'utmSource' | 'utmMedium' | 'utmCampaign' | 'referrerHost'>): string {
  if (a.gclid || a.gbraid || a.wbraid) return 'Google Ads';
  const source = a.utmSource.toLowerCase();
  const campaign = a.utmCampaign.toLowerCase();
  if (source === 'google' && campaign === 'gbp') return 'Google Business Profile';
  if (source) return [a.utmSource, a.utmMedium].filter(Boolean).join(' / ');
  const host = a.referrerHost;
  if (!host) return 'Direct or unknown';
  if (/(^|\.)google\./.test(host)) return 'Google organic';
  if (/(^|\.)bing\.com$/.test(host)) return 'Bing organic';
  if (/(^|\.)yelp\.com$/.test(host)) return 'Yelp';
  if (host === 'chatgpt.com' || host === 'chat.openai.com' || host.endsWith('.chatgpt.com')) return 'ChatGPT';
  return `Referral: ${host}`;
}
