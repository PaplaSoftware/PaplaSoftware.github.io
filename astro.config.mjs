// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // --- Konfiguracja pod GitHub Pages (konto: PaplaSoftware) ---
  //
  // WARIANT A (ZALECANY) — repozytorium użytkownika: PaplaSoftware/PaplaSoftware.github.io
  //   Strona serwowana z korzenia domeny → site jak niżej, base: '/'.
  //
  // WARIANT B — repozytorium projektowe: PaplaSoftware/ppapla-site
  //   Strona serwowana z podkatalogu → site: 'https://paplasoftware.github.io',
  //   base: '/ppapla-site/'  (odkomentuj poniżej i zmień 'base').
  site: 'https://paplasoftware.github.io',
  base: '/',
  // base: '/ppapla-site/', // <- odkomentuj TYLKO dla wariantu B

  trailingSlash: 'ignore',

  // Default locale (Polish) is served at `/`; English lives under `/en/`.
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
