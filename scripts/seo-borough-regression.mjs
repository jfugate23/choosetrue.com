import assert from 'node:assert/strict';

// Verify borough intent, new service routing, and existing project evidence.
// This reads pages only and never submits a lead.
const base = process.argv.find(arg => arg.startsWith('--base='))?.slice(7) || 'http://localhost:3000';
const hubs = ['cooking-equipment', 'hvac', 'refrigeration', 'ice-machines'];
const boroughs = ['manhattan', 'brooklyn', 'queens'];
for (const borough of boroughs) {
  const path = `/services/kitchen-ventilation/${borough}-ny`;
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${borough}: HTTP 200`);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${borough}: one H1`);
  assert.ok(html.includes(`rel="canonical" href="https://choosetrue.com${path}"`), `${borough}: existing canonical`);
  assert.ok(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html), `${borough}: indexable`);
  assert.ok(html.includes('Kitchen hood airflow and exhaust fan repair in '), `${borough}: ventilation intent`);
  for (const service of ['kitchen-air-balancing', 'exhaust-fan-repair', 'makeup-air-unit-repair', 'ventilation-controls']) {
    assert.ok(html.includes(`href="/services/${service}"`), `${borough}: retains ${service}`);
  }
  if (borough === 'brooklyn') {
    const guide = html.match(/<section[^>]+id="brooklyn-service-guide"[\s\S]*?<\/section>/)?.[0];
    const routing = html.match(/<section[^>]+id="brooklyn-equipment-service"[\s\S]*?<\/section>/)?.[0];
    assert.ok(guide && routing, 'Brooklyn: server-rendered guide and contextual service routing');
    assert.ok(guide.includes('href="#brooklyn-service-request"'), 'Brooklyn: inquiry anchor');
    assert.equal((html.match(/id="brooklyn-service-request"/g) || []).length, 1, 'Brooklyn: one inquiry target');
    for (const hub of hubs) assert.ok(routing.includes(`href="/services/${hub}"`), `Brooklyn: contextual ${hub} link`);
    assert.ok(routing.includes('Repair inquiries are welcome'), 'Brooklyn: refrigeration/ice-machine inquiries welcome');
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    const faq = schemas.find(s => s['@type'] === 'FAQPage');
    assert.ok(faq && faq.mainEntity.length >= 3, 'Brooklyn: FAQ schema present');
    for (const item of faq.mainEntity) {
      assert.ok(html.includes(item.name), 'Brooklyn: visible FAQ question agrees with schema');
      assert.ok(html.includes(item.acceptedAnswer.text), 'Brooklyn: visible FAQ answer agrees with schema');
    }
    for (const id of ['garland-upper-west-side', 'jfk-terminal-1']) assert.ok(!html.includes(`id="${id}"`), 'Brooklyn: does not acquire another borough’s job');
  } else {
    assert.ok(!html.includes('id="brooklyn-service-guide"'), `${borough}: no Brooklyn guide`);
    const projectId = borough === 'manhattan' ? 'garland-upper-west-side' : 'jfk-terminal-1';
    assert.ok(html.includes(`id="${projectId}"`), `${borough}: retains existing project`);
  }
}
for (const hub of [...hubs, 'commercial-kitchen-maintenance']) {
  const r = await fetch(new URL(`/services/${hub}`, base));
  assert.equal(r.status, 200, `${hub}: destination is reachable`);
}
console.log('Borough SEO checks passed: canonicals, ventilation intent, contextual equipment links, FAQ/schema, and preserved project evidence.');
