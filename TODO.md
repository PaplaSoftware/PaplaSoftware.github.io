# TODO / Roadmap — ppapla-site

Backlog of ideas for the site. Kept intentionally simple. See `AGENTS.md` for how
the project is structured.

## Legend

- `[ ]` not done · `[x]` done
- **Priority:** P0 = now, P1 = soon, P2 = later
- **Hosting:** `STATIC-OK` works on GitHub Pages as-is · `NEEDS-MOVE` requires moving
  hosting to a platform with server/functions (Cloudflare Pages / Netlify / Vercel)

> Key fact: GitHub Pages is static-only. Almost everything below stays STATIC-OK by
> offloading the dynamic part to an external SaaS (forms, payments, booking,
> analytics). Only a self-hosted cart + inventory + accounts is truly NEEDS-MOVE.

---

## P0 — Immediate

- [x] **Working contact form.** Formspree endpoint wired in `src/i18n/ui.ts`
      (`https://formspree.io/f/xaqrover` → paplasoftware@gmail.com) + honeypot + subject.
      NOTE: do one real submit after deploy to activate the form (free plan). — STATIC-OK
- [ ] **Custom domain** `paplasoftware.pl` (DNS + `CNAME` in `public/`, enable HTTPS
      in Pages settings). More professional than `*.github.io`. — STATIC-OK
- [ ] **Basic SEO:** Open Graph / Twitter meta + share image, `sitemap`, `robots.txt`,
      canonical URLs, JSON-LD structured data (`LocalBusiness`, `Product`). — STATIC-OK
- [ ] **Privacy policy page** (RODO/GDPR) — required once the form collects personal
      data. — STATIC-OK

## P1 — Credibility & content

- [ ] **About / "O mnie"** section — builds trust, supports the "real business"
      narrative. — STATIC-OK
- [ ] **Portfolio / "Realizacje"** — case studies as Astro content collections. — STATIC-OK
- [ ] **Pricing / "how I quote"** section. — STATIC-OK
- [ ] **FAQ** section. — STATIC-OK
- [ ] **Blog / "Aktualności"** — content collections; dated posts = proof of ongoing
      activity + SEO. — STATIC-OK
- [ ] **Google Business Profile** for local services (car jump-start, rental) — strong
      real-local-activity signal + Maps. — external
- [ ] **Privacy-friendly analytics** (Plausible / Umami / GA4). — STATIC-OK
- [ ] _(Optional — owner opted out for now)_ Testimonials / reviews section.

## P2 — Commerce & booking

- [ ] **Sell products (lamps):** Stripe Payment Links / Gumroad / Payhip "buy" buttons —
      checkout handled by the external service. — STATIC-OK
- [x] **3D printing section** with links to owner's Allegro + OLX shops (`Printing.astro`,
      `marketplaces` in `ui.ts`). — STATIC-OK
- [ ] **Product catalog** as an Astro content collection (edit data files, rebuild). — STATIC-OK
- [ ] **Service booking / scheduling:** embed Cal.com or Calendly. — STATIC-OK
- [ ] **Newsletter capture:** Buttondown / Mailchimp embed. — STATIC-OK
- [ ] **Full shop** (cart + inventory + server-side checkout + order records): move
      hosting off GitHub Pages, add Astro SSR adapter + Stripe Checkout. — NEEDS-MOVE
- [ ] **Shop legal:** terms of sale (regulamin), right of withdrawal, RODO — use a
      lawyer / generator. — external

## Infra / workflow

- [ ] **Mobile AI editing:** connect this repo to Claude Code (web / cloud agent) via
      GitHub OAuth; edit from the phone; prefer PR-based review; auto-deploy already
      wired (`.github/workflows/deploy.yml` on `master`). — done: deploy + `AGENTS.md`
- [ ] _(Optional)_ **Headless CMS** (Decap / TinaCMS) for no-code text/image edits from
      the phone, as an alternative/complement to the AI flow. — STATIC-OK
- [x] Auto-deploy on push to `master` (GitHub Actions).
- [x] `AGENTS.md` self-updating context for future agents.

## Housekeeping (carried over)

- [ ] Set `FORMSPREE_ENDPOINT` (see P0).
- [ ] Make `master` the default branch on GitHub, then delete the stale remote `main`.
- [ ] Optionally replace placeholder product visuals with real photos.
