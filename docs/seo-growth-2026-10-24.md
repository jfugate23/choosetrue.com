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
