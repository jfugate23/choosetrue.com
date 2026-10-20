# Search discovery improvements — October 20, 2026

Goal: help customers and search assistants identify TCS's commercial kitchen ventilation capabilities and request suitable service.

## Website changes

- Added clear service-and-coverage answers to the Gaylord, exhaust-fan repair, and kitchen air-balancing pages.
- Added one anonymized field example to each page, with the problem, documented findings, and next steps. Examples are based on TCS service records and correspondence, not invented success stories.
- Expanded visible FAQs and their existing matching FAQ structured data. Retained Service structured data and canonical URLs.
- Linked examples to relevant startup, airflow, and pollution-control services.
- Preselected the service category on the exhaust-fan and air-balancing forms and the manufacturer on brand-page forms.
- Corrected server validation so the existing startup and performance-testing form options are accepted.
- Updated sitemap modification dates for the three changed pages only.
- Added a ChatGPT referral signal to phone-link and successful-form analytics events, and to delivered lead emails when detected. The browser retains only a source label for the current tab, not the referring URL or query string.

## Accuracy boundaries

- The Queens example documents pre-startup findings; it does not claim a completed startup or repair.
- The Manhattan fan-selection investigation remains preliminary; it does not claim confirmed undersizing, required replacement, completed measurements, or a resolved smoke complaint.
- The Brooklyn odor inspection did not establish a mechanical repair need or pressure conditions inside the apartment. An odor-filtration upgrade remains subject to design review.
- No customer names, addresses, private correspondence, invoice values, or customer endorsements are published in these examples.
- No new manufacturer authorization, certified TAB, response-time, or 24/7 claim is introduced.

## Search access and measurement

The existing robots rules allow crawlers, and the sitemap is available. Hosting-level security and actual OAI-SearchBot requests still require a hosting-log check; a successful generic request alone does not prove crawler access. Official crawler guidance: https://developers.openai.com/api/docs/bots

Referral attribution recognizes ChatGPT referring domains or the `utm_source=chatgpt.com` / `chatgpt` campaign value. This is a detected source signal, not independently verified proof of a recommendation. Manually dialed calls, missing referrers, and visits in another browser may not be attributable. A phone-link click is not a completed call or booked job.

## Follow-through

- Add original job photos after confirming site/customer publication permissions and choosing the exact images.
- Add genuine customer feedback with appropriate publication permission.
- Check eligible manufacturer and dealer listings for accurate TCS contact details and service scope.
- After deployment, inspect the three priority URLs in Search Console and request indexing where useful.
- Review detectable ChatGPT referrals, qualified inquiries, and booked jobs alongside organic and paid-search results.
- Periodically test realistic service-and-location questions and record the cited sources. Treat tests as diagnostic samples, not a guaranteed or stable ranking.
