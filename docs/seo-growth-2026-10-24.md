# Organic growth foundation: NYC and New Jersey

Joe approved building organic demand for current and future TCS services on October 24, 2026. Paid advertising remains focused on currently preferred work. Repair inquiries for all four reviewed service categories are welcome. Joe confirmed that refrigeration, walk-in, and ice machine calls will be considered individually. Confirm scope and scheduling before dispatch; do not publish a blanket refusal or a future-only booking message.

## Starting point

Use the Search Console date-level report for the 90-day baseline. These are website search metrics, not Google Maps visibility, phone calls, or booked jobs. Query and page reports can have different totals and should not be substituted for property totals. Keep account performance figures in the business reporting system rather than public source documentation.

The live cooking, HVAC, refrigeration, and beverage pages were marked noindex. The sitemap contained 54 URLs. Older Oklahoma URLs were already redirected; historical Search Console impressions do not prove those old pages remain live.

## First release

Reviewed, indexable service/resource hubs:

- `/services/cooking-equipment`: direct commercial cooking requests, model-specific qualification, Lainox and Cuppone links, visible FAQs and matching schema.
- `/services/hvac`: commercial HVAC troubleshooting and maintenance, restaurant comfort/ventilation relationships, access and scope qualification.
- `/services/refrigeration`: commercial refrigeration and walk-in repair inquiries, with equipment information and individual job review.
- `/services/ice-machines`: commercial ice machine repair inquiries, model-specific preparation, and individual job review.

Supporting guides:

- `/blog/commercial-oven-not-heating-evenly`: new operator checklist.
- `/blog/restaurant-hvac-or-makeup-air-problem`: new HVAC/ventilation intake guide.
- `/blog/walk-in-cooler-not-cooling-troubleshooting-guide`: reviewed replacement of the legacy article, preserving its URL and publication date.
- `/blog/commercial-ice-machine-not-making-ice`: reviewed replacement of the legacy article, preserving its URL and publication date.

The two revised legacy articles no longer contain unsupported repair prices, failure percentages, or blanket booking claims. Reviewed guides receive a separate updated date.

Discovery and intake:

- All eight pages enter the sitemap; category pages and the guide index link them together.
- Existing ventilation pages, manufacturer pages, and consolidated location routes are preserved.
- Cooking and HVAC forms select an appropriate category rather than a ventilation-only default.
- Refrigeration and ice machine forms use normal repair categories and allow the caller to describe current urgency. Scope and schedule are confirmed individually.
- Navigation, mobile buttons, and article links invite service requests.
- The API validates all four repair categories and the stated urgency.
- All four categories use standard service-lead tracking, with a distinct service value for cooking, HVAC, refrigeration, and ice machines.
- Existing beverage, espresso, PM, and unreviewed legacy pages remain outside this release's indexable set. They need a separate content and availability review before promotion.

## Next 90 days

### First two weeks after release

- Verify the production sitemap, canonical URLs, page content, robots directives, form defaults, and inquiry categorization.
- Submit the updated sitemap in Search Console and use URL Inspection for the four hubs and four guides where account access permits. Publishing and a valid sitemap do not guarantee indexing or rank.
- Check the Search Console Page Indexing report after Google recrawls. Use the actual live URL test to investigate exclusions.
- Establish separate reporting for paid leads, organic leads, service categories, and booked work.

### Weeks 3–6

- Improve the existing Manhattan, Brooklyn, Elizabeth/Union County, Newark, and Jersey City coverage information using actual jobs and access considerations. Review overlapping search intent before adding location routes.
- Expand Lainox and Cuppone model/symptom content using real supportable experience, without claiming unverified authorization.
- Collect job photos, manufacturer/model information, the original complaint, measured findings, work performed, and verified outcome with permission to use them. Anonymize customers when needed.
- Publish two substantial page improvements and two useful articles/job writeups per month, adjusting pace to available field evidence.

### Weeks 7–12

- Choose the next equipment pages from actual Search Console queries and inquiry quality. Possible topics include rooftop-unit maintenance preparation, combi-oven operating faults, and walk-in freezer versus cooler service planning.
- Review beverage, espresso, and preventive-maintenance content individually before making it indexable.
- Update genuine manufacturer/dealer listings and business citations; request honest reviews from customers. Keep the Business Profile aligned with services currently offered.
- Expand geographical coverage only when operational reach and useful local content justify it. Avoid mass-produced city/service combinations and invented offices.

## Monthly review

Track non-brand search impressions and clicks by service and landing page, inquiry category, qualified organic calls/forms, booked jobs, revenue or contribution margin, and inquiries declined because of capacity or scope. A phone-link click is not a completed call. An inquiry is not a confirmed dispatch or booked job.

Use declined inquiries to identify hiring and training opportunities. Reduce paid spend by category only after organic search consistently supplies suitable profitable jobs, and compare total booked work after any budget change. No ranking, traffic, or advertising savings are guaranteed.

## Verification commands

```sh
npm run build
npm run start
npm run seo:audit -- --base=http://localhost:3000
```

The audit now also fails if any of the eight reviewed growth pages disappear from the sitemap or the sitemap contains duplicate URLs. Production checks must be repeated after deployment; local build success alone does not establish a live release.

### Completed local verification of the revised release

- Production build, lint/type validation, and whitespace checks passed.
- All 62 sitemap URLs passed with zero errors and zero warnings.
- The eight reviewed pages passed browser checks at 390px and 1440px widths with no horizontal overflow or browser exceptions.
- Four simulated browser form submissions preserved the correct service category and source page. All four repair categories use the standard service-lead event.
- API validation covers accepted repair categories and urgency values, plus rejection of unknown categories. Email delivery credentials were absent in the test server; no email was sent.
- All 26 internal link targets discovered on the reviewed hubs returned HTTP 200 after redirects.
- Desktop and mobile screenshots were inspected, including service-request navigation and the mobile button.


## Additive oven and kitchen maintenance expansion

- Added `/services/commercial-kitchen-maintenance` as an indexable landing page focused on Manhattan, Brooklyn, and Queens. The existing `/services/preventive-maintenance` page and all other service pages remain intact.
- Added convection-oven fan and heating problem guidance, planned oven maintenance copy, and two FAQs to the existing cooking-equipment page. Existing copy and project photos retained.
- Added maintenance links from the services hub and cooking page, with a link to the owner-confirmed Upper West Side Garland project from the new maintenance page.
- Added a kitchen-maintenance inquiry category to the shared form and endpoint validation. No changes to email recipients or delivery behavior.
- Maintenance frequency and tasks are agreed by equipment and site. No invented prices, service intervals, customer results, authorizations, or new job claims.


## Three-borough priority and weekly review: October 26, 2026

Manhattan, Brooklyn, and Queens receive the bulk of organic content work. New Jersey and other existing coverage remain secondary and are preserved. Rotate substantive work across these three boroughs; avoid interchangeable city/service pages. Aim for two existing-page upgrades and two useful guides or permission-appropriate job writeups per month, adapting to actual evidence. Preserve existing content and add useful coverage, as requested by the owner.

### Current assessment

- Current main includes merged PRs #14–17: reviewed service hubs/guides, the Queens JFK feature, Manhattan Garland feature, and the commercial kitchen maintenance landing page. Existing site has 63 sitemap URLs.
- Manhattan, Brooklyn, and Queens ventilation pages retain self canonicals and ventilation intent. The existing Manhattan Garland link reaches cooking-equipment content; Queens reaches the Gaylord project. The shared borough body previously had no consistent links to all four equipment hubs. Navigation alone is not a substitute for explaining which service fits the complaint.
- No open PR competed with this work at the time of preparation. This is the first documented weekly growth run; earlier implementation evidence is recorded in the merged PRs and this document. Private Search Console query/page comparisons informed selection but their figures are deliberately excluded from this public repository.

### Prepared change, pending review

- Upgrade the existing Brooklyn ventilation page with a complaint-led fan/airflow/controls guide, a practical equipment and building-access handoff checklist, and three visible FAQs with matching FAQ schema.
- Add contextual links to cooking, HVAC, refrigeration/walk-ins, ice machines, and preventive maintenance. All repair inquiries remain welcome, subject to individual scope and scheduling review.
- Preserve the ventilation title, canonical, primary content, form, tracking, and every existing service path. Do not claim a new Brooklyn job or publish customer details. Retain Manhattan Garland and Queens JFK photos and copy.
- Only Brooklyn receives the added section and updated sitemap modification date. No new routes or sitemap URLs are introduced.
- Technical context checked against Accurex's manufacturer documents: [Kitchen Hoods IOM](https://content.accurex.com/accurex-cms-prod/docs/default-source/ioms/470399_canopyhoods_iom.pdf?sfvrsn=2843f8fd_113) and [Kitchen Controls IOM](https://content.accurex.com/accurex-cms-prod/docs/default-source/ioms/kitchen-controls.pdf?sfvrsn=1708a836_20). The page describes observations to share, not equipment settings to change. No universal airflow targets, factory authorizations, or repair outcomes are asserted.

### Next work and measurement

1. Review this draft; if approved, merge and verify production separately. A draft branch or successful build is not a published change.
2. Next prioritize Queens: add a useful commissioning-to-maintenance handoff guide linked naturally to the confirmed JFK work, without inventing test readings or airport endorsement. Then rotate to Manhattan.
3. Add contextual equipment-hub routing to Manhattan and Queens when their next substantive upgrades are prepared, preserving ventilation search intent.
4. Continue comparing finalized 28-day Search Console periods with a reporting lag. Review both query and landing-page reports; borough words indicate content relevance, not searcher location. A missing page row is not proof of exclusion from Google's index. Confirm indexing through URL Inspection when access permits.
5. Keep organic inquiry quality and booked work separate from impressions, search clicks, and phone-link events. No booked-job evidence was available for this review.

### Validation

- Production build/type checks, full local sitemap audit, and existing service regression checks are required for the draft.
- Check all three borough pages at desktop/mobile widths; verify the Brooklyn inquiry form with a mocked submission, all new internal destinations, FAQ/schema agreement, and unchanged project features.
- Check the current public sitemap and three borough pages independently. This run prepares a draft PR only; do not merge, publish, or claim Google indexing from these checks.


Completed draft validation on October 26:

- `npm run build` passed, including TypeScript and lint validation.
- All 63 sitemap URLs passed the local production audit with zero errors or warnings; the current public sitemap independently passed the same check.
- Existing service regressions passed. New `node scripts/seo-borough-regression.mjs --base=http://localhost:3000` checks borough canonicals/ventilation intent, contextual service links, FAQ/schema agreement, and retention of the Manhattan/Queens project features.
- Browser checks passed on all three borough pages at 390px and 1440px. The Brooklyn anchor, linked service destinations, and two mocked commercial inquiries retained the source page and exhaust-fan service category. Existing Manhattan and Queens project images loaded. No horizontal overflow or browser exceptions were observed. No real lead email was sent.
- Public borough pages returned HTTP 200 and self canonicals without noindex directives. Current production does not contain this draft's Brooklyn guide; production publication and Google indexing remain unverified for the proposed additions.
