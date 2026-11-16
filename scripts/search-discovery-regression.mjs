import assert from 'node:assert/strict';
const base = process.argv.find(arg => arg.startsWith('--base='))?.slice(7) || 'http://localhost:3000';
const text = async path => {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: HTTP 200`);
  return response.text();
};
const sitemap = await text('/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
for (const url of urls) {
  const path = new URL(url).pathname;
  const html = await text(path);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
  const og = html.match(/<meta property="og:url" content="([^"]+)"/)[1];
  assert.equal(og, canonical, `${path}: preview URL must match canonical, not homepage`);
  assert.ok(html.includes('property="og:title"'), `${path}: preview title`);
  const nodes = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const organization = nodes.find(n => n['@type'] === 'Organization');
  const website = nodes.find(n => n['@type'] === 'WebSite');
  assert.ok(organization && website, `${path}: organization and website identities`);
  assert.equal(website.publisher['@id'], organization['@id']);
  assert.equal(organization.location[0].parentOrganization['@id'], organization['@id']);
  assert.equal(organization.location[0].telephone, '(646) 942-9394');
  const webPage = nodes.find(n => n['@type'] === 'WebPage');
  if (webPage) {
    const service = nodes.find(n => n['@type'] === 'Service');
    assert.equal(webPage.url, canonical);
    assert.equal(webPage.mainEntity['@id'], service['@id']);
    assert.equal(service.provider['@id'], organization.location[0]['@id']);
    assert.ok(html.includes(service.name), `${path}: service schema uses visible heading`);
  }
}
const robots = await text('/robots.txt');
assert.match(robots, /User-Agent: \*\s+Allow: \//i);
assert.match(robots, /Sitemap: https:\/\/choosetrue.com\/sitemap.xml/);
assert.ok(!robots.includes('Disallow: /\n'));
console.log(`Search discovery checks passed for ${urls.length} sitemap pages: page-specific previews, stable business identities, service relationships and crawler policy.`);
