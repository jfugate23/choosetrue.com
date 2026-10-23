# Targeted oven and winter makeup-air discovery

## Scope

Keep the established ventilation/exhaust focus while making existing Lainox and Cuppone services discoverable and welcoming direct requests. Strengthen the existing makeup-air page for no-heat and cold-supply complaints rather than creating duplicate seasonal pages.

- Added existing oven-page links to desktop/mobile navigation, a homepage section, and the services page.
- Removed the blanket services-page exclusion that contradicted direct oven requests; other equipment remains qualified by referral/assignment.
- Kept oven service territory, dispatch qualification, and existing factory-authorization disclaimers intact.
- Added no-heat wording, three matching visible/schema FAQs, and the `makeup-air` inquiry selection.
- Added fan-repair and no-heat shortcuts in the ventilation hub hero for visitors from broader ventilation ads.
- Preserved the main exhaust/airflow paths, telephone links, ad/referral instrumentation, and existing URLs/canonicals.

## Verification

- Production build: passed (77 generated pages).
- TypeScript `tsc --noEmit`: passed.
- Sitemap audit against local production build: all 54 URLs, zero errors/warnings.
- `npm run seo:services -- --base=http://localhost:3100`: verifies oven discovery links, retained exhaust path, hero shortcut, matching MAU FAQ schema, and preselected service forms; passed.
- `git diff --check`: passed.
- Visual and interactive browser QA: not completed. Chromium could not create its required socket in the sandbox; an escalation attempt failed before browser startup because of the runtime's read-only mount. No lead forms were submitted and no tracking conversions were intentionally generated.

Run the two audits with the local production server in the same execution context if the environment isolates loopback networking:

```sh
npm run build
npm run start -- --port 3100
npm run seo:audit -- --base=http://localhost:3100
npm run seo:services -- --base=http://localhost:3100
```

This change does not alter Google Ads campaigns, budgets, bids, geographic targeting, or conversion settings. It does not establish Google indexing or additional leads. Production deployment and post-deployment verification remain separate from a draft pull request.
