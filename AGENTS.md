# AGENTS.md — ppapla-site

Agent context for this repo. Optimized for machine reuse across iterations: a fresh
agent should be able to act correctly from THIS FILE ALONE, with no re-explanation.

---

## 0. SELF-UPDATE PROTOCOL (read + obey first)

- After ANY non-trivial change, UPDATE this file in the same commit: sections
  `Architecture`, `Conventions`, `Gotchas`, and especially `## STATE / HISTORY`.
- Append a dated bullet to `## STATE / HISTORY` describing what changed and why.
- If you introduce a new pattern/decision, record it here so it becomes the norm.
- Keep it dense and current. This file is the memory; the user should never have to
  re-explain prior work.
- **Public repo** — never commit secrets (tokens, private keys, `.env`). The git
  identity email and the registered company data are already public by design.

---

## 1. WHAT THIS IS

Static one-page business card (landing page) for the sole proprietorship
"Przemysław Papla - Software". Purpose: present diversified B2B + local + product
offerings (also used as evidence of revenue diversification). Hosted on GitHub Pages.

- Live: https://paplasoftware.github.io  (PL, default) and `/en/` (EN).
- Owner GitHub account: **PaplaSoftware** (NOT the machine's default git account).

## 2. STACK

- **Astro 7** (`output: static`), **Tailwind CSS v4** via the Vite plugin
  `@tailwindcss/vite` — NOT the legacy `@astrojs/tailwind` integration.
- TypeScript (`astro/tsconfigs/strict`).
- **Node >= 22.12** (Astro 7 requirement). Pinned in `.nvmrc` and CI.
- No UI framework, no client bundle except two tiny inline theme scripts.

## 3. COMMANDS

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/  (ALWAYS run to verify before committing)
npm run preview
```

## 4. ARCHITECTURE — where things live

- `src/i18n/ui.ts` — **SINGLE SOURCE OF TRUTH** for all copy + data:
  - `company` — registered data + contact (name, address, NIP, REGON, email, phone).
  - `ui.pl` / `ui.en` — translation dictionaries. `en` is typed `: typeof pl`, so the
    two locales MUST stay structurally identical: add a key to `pl` and TypeScript
    forces you to add it to `en`.
  - `FORMSPREE_ENDPOINT` — empty ⇒ contact form falls back to `mailto:`.
  - `anchors` — locale-independent section hrefs.
  - `useTranslations(lang)` helper.
- `src/layouts/BaseLayout.astro` — document skeleton: `<html>/<head>/<body>`, meta,
  fonts, hreflang, favicon, and the FOUC theme guard script. Prop `lang`; renders a
  `<slot />`.
- `src/components/*.astro` — one component PER SECTION (split, not a monolith):
  `Header`, `ThemeToggle` (button + persist script), `Hero`, `Services`,
  `LocalServices`, `Printing`, `Products`, `Contact`, `Footer`. Each section owns an
  accent colour (services=emerald, local=sky, printing=violet, products=amber). Each
  takes a `lang` prop and pulls its copy from `ui.ts` via `useTranslations(lang)`.
  `Services`/`Products` map over the `*.items` arrays, so N items just work (section
  icons are chosen by index).
- `src/components/Landing.astro` — thin COMPOSER: wraps the sections in `BaseLayout`
  (`<Header/> <main id="top"> …sections… </main> <Footer/>`). No markup of its own.
- `src/pages/index.astro` (PL, `/`) and `src/pages/en/index.astro` (EN, `/en/`) —
  thin wrappers: `<Landing lang="pl|en" />`.
- **Where to edit what**: copy → `ui.ts`; a section's layout/design → that section's
  component; page-wide `<head>`/scripts → `BaseLayout`; section order → `Landing.astro`.
- `src/styles/global.css` — Tailwind import, `@custom-variant light`, `color-scheme`,
  Inter font token, and the button `cursor: pointer` fix.
- `astro.config.mjs` — `site`/`base` for Pages + `i18n` (`defaultLocale: 'pl'`,
  `prefixDefaultLocale: false`) + `@tailwindcss/vite` plugin.
- `.github/workflows/deploy.yml` — build + deploy to Pages (triggers on `master`).
- `public/.nojekyll`, `public/favicon.svg`.

## 5. CONVENTIONS (follow exactly)

- **Site content**: Polish (default) + English. Never hardcode user-facing copy in
  `Landing.astro`; put it in `ui.ts`.
- **Code / comments / identifiers / commit messages**: English.
- **Add a language**: add to `languages` + a dict in `ui.ts`; add the locale in
  `astro.config.mjs` `i18n.locales`; add `src/pages/<lang>/index.astro`; extend
  `localeUrls` in `Landing.astro`.
- **Add a product/service**: append to the relevant array in `ui.ts`
  (`products.items`, `services.items`) for BOTH `pl` and `en`. `Landing.astro`
  renders them by index (icons chosen by index — add an icon branch if needed).
- **Icons**: inline SVG (feather/lucide-style paths). No icon libraries.
- **Theming**: dark is the base (no prefix); light is opt-in via the `light:` variant.
  Any new colored element MUST include a `light:` counterpart. Emphasis `<span>`s
  embedded in `*Html` strings in `ui.ts` also carry a `light:` class.

## 6. THEME SYSTEM

- `.light` class on `<html>` selects the light theme (Tailwind `@custom-variant light`).
- FOUC guard: inline `<script is:inline>` in `<head>` sets `.light` before paint —
  stored choice wins, else OS `prefers-color-scheme`, else dark.
- Toggle: `#theme-toggle` button + inline script at end of `<body>` persists the
  choice to `localStorage` and flips `.light`. Sun icon shows in dark, moon in light.

## 7. DEPLOYMENT (GitHub Pages) — CRITICAL

- Repo: `PaplaSoftware/PaplaSoftware.github.io` (a **user site** ⇒ `base: '/'`).
- **Pages Source MUST be "GitHub Actions"** (Settings → Pages). If it is
  "Deploy from a branch", GitHub runs Jekyll → renders `README` as index and strips
  `_astro/` (underscore dir) → broken site. `.nojekyll` + Actions source prevent this.
- **Deploy branch: `master`** (workflow trigger + repo default branch). Push to
  `master` ⇒ workflow builds & deploys.
- CI uses **Node 22**.

## 8. GIT / PUSH (multi-account — important)

- This repo pushes to the **PaplaSoftware** account, not the machine's default (work)
  account. Identity is set **locally only** (`git config --local user.name/email`);
  never touch global config.
- Remote uses an **SSH host alias** `github-paplasoftware` (defined in
  `~/.ssh/config`) bound to a dedicated key with `IdentitiesOnly yes`, so the default
  key is not offered. `origin` =
  `git@github-paplasoftware:PaplaSoftware/PaplaSoftware.github.io.git`.
- Do NOT switch the remote to plain `git@github.com:...` — that authenticates as the
  default account and push is denied. `git push` already works via the alias.

## 9. GOTCHAS

- Tailwind v4 Preflight sets `cursor: default` on `<button>` — restored in
  `global.css`. Keep it.
- Jekyll ignores `_astro/` (leading underscore) → `.nojekyll` + Actions source needed.
- Contact form is static (no backend). Set `FORMSPREE_ENDPOINT` to enable real
  submissions; otherwise it uses `mailto:`.
- `base` is `'/'` for the user site. If ever moved to a project repo, set
  `base: '/<repo>/'`; asset/locale URLs already use `import.meta.env.BASE_URL`.

## 10. REGISTERED COMPANY DATA (public, shown on-site)

Source of truth = `company` in `src/i18n/ui.ts`.
- Name: Przemysław Papla - Software
- Registered address: Wrzosowa 6, 43-370 Szczyrk
- NIP: 9372761119 · REGON: 528464558
- Contact: paplasoftware@gmail.com · +48 17 779 62 27
- **Service area (local services) = Sędziszów Małopolski and surroundings** — this is
  intentionally different from the registered address (Szczyrk). Do not "fix" it to
  match the address.

## STATE / HISTORY (append dated bullets)

- 2026-07-19 — Initial build: Astro 7 + Tailwind v4 scaffold; sections Hero / B2B
  services / local services + rental / products / contact + footer with registry data.
- 2026-07-19 — Added i18n (PL default at `/`, EN at `/en/`); extracted shared
  `Landing.astro`; dictionaries in `ui.ts` (`en` typed against `pl`).
- 2026-07-19 — Contact set to paplasoftware@gmail.com / +48 17 779 62 27; local
  services relocated Szczyrk → Sędziszów Małopolski; added 2nd product "Planer 3D
  ogrodu / 3D garden planner" (web app, Coming Soon); added light/dark theme toggle.
- 2026-07-19 — Pages fixes: removed README, added `.nojekyll`; CI Node 20 → 22;
  default/deploy branch `main` → `master`; restored button `cursor: pointer`.
- 2026-07-19 — Bumped GitHub Actions to Node-24 majors (silences Node 20 deprecation
  warning): checkout@v7, setup-node@v7, upload-pages-artifact@v5, deploy-pages@v5.
  When bumping actions, verify tags exist first: `git ls-remote --tags <repo>`.
- 2026-07-19 — Split the monolithic `Landing.astro` into `BaseLayout` + one component
  per section (`Header`, `ThemeToggle`, `Hero`, `Services`, `LocalServices`,
  `Products`, `Contact`, `Footer`); `Landing.astro` is now just the composer. Output
  is byte-for-byte equivalent (pure refactor).
- 2026-07-19 — Added `TODO.md` (roadmap/backlog). Consult + update it when planning or
  finishing features.
- 2026-07-19 — Wired Formspree contact form (AJAX submit, inline status, no redirect);
  added a "Druk 3D / 3D printing" section (`Printing.astro`); Allegro/OLX links in the
  footer (`marketplaces` in `ui.ts`).
- 2026-07-19 — Open TODOs: see `TODO.md`. Highlights: make `master` the default branch
  then delete stale remote `main`; optionally replace placeholder product visuals.
