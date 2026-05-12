# ABDA – NOVABIZ Platform (Next.js + Tailwind)

## 1) Sitemap & Route Structure
- `/` Home (Hero, ABDA positioning, NOVABIZ spotlight)
- `/novabiz` Event showcase, countdown, stats
- `/products` Filterable showcase cards
- `/products/[slug]` Product detail + QR block
- `/gallery` Event media
- `/news` Blog and announcements
- `/register` Team/product/volunteer/sponsor registration
- `/sponsors` Sponsor tiers and partner wall
- `/admin` Dashboard entrypoint

## 2) Reusable Component Library
- `Navbar`
- Section wrapper (`.section` utility)
- Glass card (`.glass` utility)
- Stats card pattern
- Product card pattern
- CTA button styles

## 3) Design System Tokens
- Colors: leaf `#1D6B38`, moss `#4A7C59`, sun `#D8A327`, soil `#74553C`, mist `#F4F8F5`
- Radius: `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- Shadow: `shadow-premium`
- Typography: clean sans-serif (system/Next defaults), strong heading hierarchy via `.title`
- Spacing scale: Tailwind default with `section` utility for page rhythm

## 4) Key Page Experience
- Premium startup-style hero with NOVABIZ strip and dual CTAs
- NOVABIZ platform page with highlight and stats grid
- Product listing and product details optimized for conversion and discoverability

## 5) Backend Schema (Supabase/Firebase-ready)
- `users(id, name, email, role, avatar, created_at)`
- `events(id, name, year, start_at, venue, description, status)`
- `teams(id, name, faculty_year, lead_user_id, mentor, created_at)`
- `products(id, team_id, event_id, slug, name, category, description, problem, target_market, innovation, media_urls, status)`
- `votes(id, voter_id, product_id, category, created_at, unique(voter_id, product_id, category))`
- `registrations(id, type, payload_json, status, created_at)`
- `sponsors(id, name, tier, logo_url, website, status)`
- `posts(id, title, slug, excerpt, body, published_at, author_id)`
- `scores(id, judge_id, product_id, criterion, score, notes)`

## 6) Admin Dashboard Wireframe
- Left nav: Overview, Events, Products, Votes, Registrations, Media, Sponsors, Users
- Top KPIs: active event, submissions, total votes, pending approvals
- Main panels: submission moderation queue, vote anomalies, registration pipeline, announcements draft

## 7) Deployment Notes
- Configure env: `NEXT_PUBLIC_BACKEND`, auth keys, storage bucket, analytics key
- Deploy to Vercel; connect Supabase/Firebase project
- Enable image host allowlist and OG metadata
- Add RLS/policies for voting anti-duplication and role-based admin access

