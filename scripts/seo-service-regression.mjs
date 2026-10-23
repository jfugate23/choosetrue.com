import assert from 'node:assert/strict';

// Run against a local production build or a review deployment. No form is submitted.
const base = process.argv.find((arg) => arg.startsWith('--base='))?.slice(7) || 'http://localhost:3000';
const ovenPaths = ['/manufacturer-service/lainox', '/manufacturer-service/cuppone'];
async function page(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: HTTP 200`);
  return response.text();
}
for (const path of ['/', '/services']) {
  const html = await page(path);
  for (const ovenPath of ovenPaths) assert.ok(html.includes(`href="${ovenPath}"`), `${path}: link to ${ovenPath}`);
  assert.ok(html.includes('href="/services/exhaust-fan-repair"'), `${path}: preserve exhaust service path`);
  assert.ok(!html.includes('TCS is not actively marketing for general one-off equipment calls'), `${path}: remove conflicting blanket exclusion`);
}
// Keep the homepage and responsive navigation free of the removed scope filler.
const home = await page('/');
for (const removed of ['A focused service company, by design.', 'Good fit for TCS', 'Outside the current focus', 'Direct Lainox and Cuppone requests welcome.', 'Focused Services', 'Ventilation &amp; Oven Services']) {
  assert.ok(!home.includes(removed), `Homepage/navigation: removed ${removed}`);
}
for (const path of ['/services/cooking-equipment', '/services/hvac', '/services/kitchen-ventilation', '/services/kitchen-air-balancing', '/services/exhaust-fan-repair', '/services/makeup-air-unit-repair', '/services/ventilation-controls', '/services/pollution-control', '/services/kitchen-ventilation-startup-commissioning', '/services/kitchen-hood-performance-testing', ...ovenPaths]) {
  assert.ok(home.split(`href="${path}"`).length >= 3, `Desktop and mobile navigation retain ${path}`);
}
assert.ok(home.includes('Commercial kitchen equipment,'), 'Homepage states the broader service offering');
for (const path of ['/services/cooking-equipment', '/services/hvac']) {
  const html = await page(path);
  assert.ok(!html.includes('TCS keeps this capability available primarily'), `${path}: direct customer requests are not restricted to referrals`);
}
const ventilation = await page('/services/kitchen-ventilation');
assert.match(ventilation, /Choose your ventilation problem/);
assert.ok(ventilation.indexOf('Exhaust fan not working? Fan repair') < ventilation.indexOf('Warning Signs'), 'Fan repair shortcut is in the hero, before symptoms');
const mau = await page('/services/makeup-air-unit-repair');
assert.match(mau, /Makeup air blowing cold or not running\?/);
assert.match(mau, /<option[^>]*value="makeup-air"[^>]*selected=""/);
const structuredData = [...mau.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const faq = structuredData.find((data) => data['@type'] === 'FAQPage');
assert.ok(faq, 'MAU has FAQ schema');
assert.equal(faq.mainEntity.length, 7, 'MAU has seven matching FAQ entries');
for (const item of faq.mainEntity) {
  assert.ok(mau.includes(item.name), `Visible FAQ question: ${item.name}`);
  assert.ok(mau.includes(item.acceptedAnswer.text), `Visible FAQ answer: ${item.name}`);
}
for (const path of ovenPaths) {
  const html = await page(path);
  assert.match(html, /value="cooking-repair"[^>]*selected=""/, `${path}: oven inquiry preselection retained`);
  assert.ok(html.includes('factory authorization'), `${path}: manufacturer authorization caveat retained`);
}
console.log('Service SEO regression checks passed: discovery links, exhaust path, MAU FAQs/schema and preselected forms.');
