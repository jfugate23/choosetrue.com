# Search foundations, November 10, 2026

## Verified issue and change

Live cooking-equipment and Lainox pages returned the root homepage Open Graph URL/title/description. Next.js inherited the entire root Open Graph object. Canonicals were correct, but preview identity was misleading.

- Canonical pages now derive Open Graph URL, title and description from their existing metadata. Existing article type/dates and imagery are preserved.
- The existing business node now links back to its parent organization and includes the already-public email and full service description.
- Added a stable WebSite identity. Existing growth-service pages link their WebPage and Service nodes to that website/business. Schema uses the same existing visible headings and descriptions.
- Added `npm run seo:discovery` to verify each sitemap page's preview URL and business identity, service relationships and existing crawler policy.

No visible copy, layout, navigation, forms, photos or service claims changed. No new pages or hidden keyword content. No changes to ads, tracking, crawler permissions, DNS or deployment settings. Existing robots.txt already allows all crawlers; no special AI file is necessary to resolve these issues.

## Validation

Production build and TypeScript check passed. Local production-server checks passed for all 64 sitemap URLs (0 errors, 0 warnings), service/borough regressions, and discovery regression. Standalone lint is not configured: `next lint` prompts to install/configure ESLint. No lint configuration or dependencies were introduced just for this patch.

A successful ordinary HTTP request or permissive robots.txt does not prove real OAI-SearchBot access through hosting-level controls. Hosting logs/crawler verification and actual indexing remain unverified. Metadata cleanup improves consistency; it does not guarantee AI recommendations or rankings. Existing ChatGPT-referral measurement remains unchanged.

Draft for review before publication, matching the existing SEO review workflow. Brooklyn guide PR #22 is separate and untouched. This patch does not change its content; both touch the city-page metadata region and should be checked together before merge.
