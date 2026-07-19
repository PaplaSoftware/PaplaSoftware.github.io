# Przemysław Papla - Software — wizytówka firmowa

Statyczny landing page (one-pager) firmy zbudowany w **Astro + Tailwind CSS**,
hostowany na **GitHub Pages** (konto `PaplaSoftware`).

## Lokalne uruchomienie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcyjny build do ./dist
npm run preview  # podgląd produkcyjnego buildu
```

## Deployment

Push na branch `main` uruchamia workflow `.github/workflows/deploy.yml`,
który buduje stronę i publikuje ją na GitHub Pages.

W repo na GitHubie: **Settings → Pages → Source → GitHub Actions**.

## Konfiguracja pod GitHub Pages

W `astro.config.mjs`:

- **Repo użytkownika** `PaplaSoftware/PaplaSoftware.github.io` → `base: '/'`.
- **Repo projektowe** `PaplaSoftware/ppapla-site` → `base: '/ppapla-site/'`.

## Dane / treści

Dane firmy i kontakt są zebrane w jednym miejscu — frontmatter w
`src/pages/index.astro` (obiekt `company`). Formularz kontaktowy: uzupełnij
`FORMSPREE_ENDPOINT`, aby działał na hostingu statycznym (fallback: `mailto:`).
