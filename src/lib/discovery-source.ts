const SESSION_KEY = 'tcs-discovery-source';

export function isChatgptReferral(referrer: string, pageUrl: string): boolean {
  try {
    const source = new URL(pageUrl).searchParams.get('utm_source')?.toLowerCase();
    if (source === 'chatgpt' || source === 'chatgpt.com') return true;
  } catch { /* An invalid URL does not establish attribution. */ }

  try {
    const host = new URL(referrer).hostname.toLowerCase();
    return host === 'chatgpt.com' || host === 'www.chatgpt.com' || host === 'chat.openai.com';
  } catch {
    return false;
  }
}

// Keep only a source label for this tab, never a full referrer or query string.
// This is an attribution signal, not proof that a recommendation led to a call.
export function getDiscoverySource(): 'chatgpt' | 'unattributed' {
  if (typeof window === 'undefined') return 'unattributed';
  const fromChatgpt = isChatgptReferral(document.referrer, window.location.href);
  try {
    if (fromChatgpt) window.sessionStorage.setItem(SESSION_KEY, 'chatgpt');
    if (window.sessionStorage.getItem(SESSION_KEY) === 'chatgpt') return 'chatgpt';
  } catch { /* Storage restrictions must never block a call or service request. */ }
  return fromChatgpt ? 'chatgpt' : 'unattributed';
}
