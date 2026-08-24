# choosetrue.com — True Commercial Service LLC

Marketing website for True Commercial Service, an owner-operated commercial kitchen ventilation service company serving NYC and North Jersey.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## Primary conversion routes

| Route | Purpose |
|-------|---------|
| `/` | Ventilation-first homepage and qualified service intake |
| `/services/kitchen-air-balancing` | Hood airflow diagnostics and operational balancing |
| `/services/exhaust-fan-repair` | Commercial kitchen exhaust fan repair |
| `/services/makeup-air-unit-repair` | Makeup air unit diagnostics and repair |
| `/services/ventilation-controls` | VFD, DCV, sensor, and interlock troubleshooting |
| `/services/pollution-control` | ESP and pollution-control operating issues |
| `/manufacturer-service` | Manufacturer-assigned startup, warranty, and field service |
| `/schedule-service` | Qualified commercial ventilation service request form |

## Lead delivery and Google Ads

Copy `.env.example` values into Vercel Project Settings → Environment Variables before deploying. `RESEND_API_KEY` is required for the form to report success; without it, visitors are instructed to call so a lead is not silently lost. Google Ads variables are optional until conversion actions are created.

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
- Ventilation-first information architecture with explicit scope qualification
- Owner-led experience and manufacturer-assignment pathway
