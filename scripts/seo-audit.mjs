const baseArg = process.argv.find((arg) => arg.startsWith('--base='));
const base = new URL(baseArg?.slice('--base='.length) || process.env.SITE_URL || 'https://choosetrue.com');
const sitemapUrl = new URL('/sitemap.xml', base);

const sitemapResponse = await fetch(sitemapUrl, { redirect: 'follow' });
if (!sitemapResponse.ok) {
  throw new Error(`Could not load ${sitemapUrl}: HTTP ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const productionUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
if (!productionUrls.length) throw new Error('The sitemap did not contain any URLs.');

const queue = productionUrls.map((productionUrl) => {
  const target = new URL(productionUrl);
  target.protocol = base.protocol;
  target.host = base.host;
  return { productionUrl: new URL(productionUrl), target };
});

const results = await mapWithConcurrency(queue, 8, async ({ productionUrl, target }) => {
  try {
    const response = await fetch(target, { redirect: 'follow' });
    const html = await response.text();
    const title = getTagContent(html, /<title>([\s\S]*?)<\/title>/i);
    const description = getMetaContent(html, 'description');
    const robots = getMetaContent(html, 'robots');
    const canonical = getCanonical(html);
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    const issues = [];
    const warnings = [];

    if (response.status !== 200) issues.push(`HTTP ${response.status}`);
    if (!title) issues.push('missing title');
    if (!description) issues.push('missing description');
    if (!canonical) issues.push('missing canonical');
    if (robots.toLowerCase().includes('noindex')) issues.push('noindex URL in sitemap');
    if (h1Count !== 1) issues.push(`${h1Count} H1 elements`);

    if (canonical) {
      const canonicalUrl = new URL(canonical, productionUrl);
      if (normalizePath(canonicalUrl.pathname) !== normalizePath(productionUrl.pathname)) {
        issues.push(`canonical points to ${canonicalUrl.pathname}`);
      }
    }
    if (title.length > 65) warnings.push(`long title (${title.length})`);
    if (description.length > 165) warnings.push(`long description (${description.length})`);

    return { url: productionUrl.href, issues, warnings };
  } catch (error) {
    return {
      url: productionUrl.href,
      issues: [error instanceof Error ? error.message : String(error)],
      warnings: [],
    };
  }
});

const failures = results.filter((result) => result.issues.length);
const warnings = results.filter((result) => result.warnings.length);

console.log(`Checked ${results.length} sitemap URLs at ${base.origin}.`);
for (const result of failures) console.error(`ERROR ${result.url}: ${result.issues.join('; ')}`);
for (const result of warnings) console.warn(`WARN  ${result.url}: ${result.warnings.join('; ')}`);
console.log(`${failures.length} errors, ${warnings.length} warnings.`);

if (failures.length) process.exitCode = 1;

function getTagContent(html, pattern) {
  return decodeEntities(html.match(pattern)?.[1]?.replace(/\s+/g, ' ').trim() || '');
}

function getMetaContent(html, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const forward = new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`, 'i');
  const reverse = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${escaped}["'][^>]*>`, 'i');
  return decodeEntities(html.match(forward)?.[1] || html.match(reverse)?.[1] || '');
}

function getCanonical(html) {
  const forward = /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i;
  const reverse = /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i;
  return decodeEntities(html.match(forward)?.[1] || html.match(reverse)?.[1] || '');
}

function normalizePath(pathname) {
  return pathname === '/' ? '/' : pathname.replace(/\/$/, '');
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

async function mapWithConcurrency(items, limit, worker) {
  const output = new Array(items.length);
  let index = 0;

  async function run() {
    while (index < items.length) {
      const current = index++;
      output[current] = await worker(items[current]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return output;
}
