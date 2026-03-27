# choosetrue.com — True Commercial Service LLC

Marketing website for True Commercial Service, a tech-forward commercial kitchen equipment repair company.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Pages (26 total)

| Route | Purpose |
|-------|---------|
| `/` | Homepage — hero, services grid, Tradecraft AI differentiator, verticals, stats, testimonials, contact |
| `/services` | Services index with all 6 service categories |
| `/services/[slug]` | Individual service pages (6) — cooking, refrigeration, HVAC, beverage, espresso, PM |
| `/locations` | Locations index with all 3 markets |
| `/locations/[slug]` | Individual location SEO pages (3) — OKC, NJ, Atlanta |
| `/who-we-serve` | Verticals index |
| `/who-we-serve/[slug]` | Individual vertical pages (4) — restaurants, grocery, schools, hotels |
| `/about` | Company story + Tradecraft AI platform |
| `/careers` | Job interest form with role/location selectors |
| `/contact` | Phone numbers, email, service request form |
| `/schedule-service` | Primary conversion page — service request form |

## SEO

- Each location page targets `[city] commercial kitchen equipment repair`
- Each service page targets `[service type] [city]`
- Auto-generated `sitemap.xml` and `robots.txt`
- OpenGraph metadata on all pages
- Semantic HTML throughout

## Deployment to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
cd choosetrue
vercel --prod
```

### Option B: GitHub → Vercel
1. Push to GitHub repo
2. Import in Vercel dashboard
3. Set domain to `choosetrue.com`
4. Vercel auto-detects Next.js — no config needed

### Domain Setup
- Primary: `choosetrue.com`
- Runs alongside: `app.choosetrue.com` (Tradecraft AI platform on separate Vercel project)
- In Vercel dashboard: Add `choosetrue.com` and `www.choosetrue.com` as domains

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build
```

## Key Design Decisions

- **Dark navy (#0F172A)** background with **amber (#F59E0B)** accents
- Glass-morphism cards with subtle borders
- Grid pattern backgrounds and gradient blurs for depth
- Mobile-first with sticky bottom CTA bar (call + schedule)
- Phone number and Schedule Service always within one tap
- Scroll-reveal animations on all content sections
- Tradecraft AI platform showcased as key differentiator (hero + about)
