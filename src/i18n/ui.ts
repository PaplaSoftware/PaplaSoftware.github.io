// Internationalization dictionary for the landing page.
// Default locale is Polish (`pl`); English (`en`) is served under `/en/`.
// The `en` object is typed against `pl`, so both locales must stay in sync.

export const languages = {
  pl: 'Polski',
  en: 'English',
} as const;

export const defaultLang: Lang = 'pl';
export type Lang = keyof typeof languages;

// Language-neutral company / registration data — single source of truth.
export const company = {
  name: 'Przemysław Papla - Software',
  short: 'Papla Software',
  street: 'Wrzosowa 6',
  city: '43-370 Szczyrk',
  nip: '9372761119',
  regon: '528464558',
  email: 'paplasoftware@gmail.com',
  phone: '+48 17 779 62 27',
  phoneHref: '+48177796227',
} as const;

// A static site has no backend. Paste a Formspree endpoint
// (https://formspree.io, free tier) to enable real submissions;
// otherwise the form falls back to a `mailto:` link.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqrover';

// Owner's marketplace shop profiles (public).
export const marketplaces = {
  allegro: 'https://allegro.pl/uzytkownik/PaplaSoftware',
  olx: 'https://www.olx.pl/oferty/uzytkownik/2LFR49',
} as const;

// Section anchors are locale-independent and shared across languages.
export const anchors = {
  services: '#services',
  local: '#local',
  printing: '#printing',
  products: '#products',
  contact: '#contact',
} as const;

const pl = {
  a11y: {
    themeToggle: 'Przełącz motyw jasny / ciemny',
  },
  meta: {
    title: `${company.name} — technologia i niezawodność dla biznesu`,
    description:
      'Przemysław Papla - Software: dedykowane oprogramowanie i audyty kodu (B2B), usługi lokalne w Sędziszowie Małopolskim i okolicach oraz wypożyczalnia sprzętu.',
  },
  nav: {
    services: 'Usługi B2B',
    local: 'Usługi lokalne',
    printing: 'Druk 3D',
    products: 'Produkty',
    contact: 'Kontakt',
    cta: 'Napisz do mnie',
  },
  hero: {
    badge: 'Software · Usługi lokalne · Produkty własne',
    titleLead: 'Technologia i niezawodność —',
    titleHighlight: 'usługi dla biznesu i klientów indywidualnych',
    lead: "Dedykowane oprogramowanie i audyty kodu dla firm, praktyczne usługi lokalne w Sędziszowie Małopolskim i okolicach oraz własne produkty. Jedna działalność — wiele źródeł wartości.",
    ctaPrimary: 'Zobacz zakres usług',
    ctaSecondary: 'Kontakt',
  },
  services: {
    eyebrow: 'Software / B2B',
    title: 'Oprogramowanie, które realnie działa',
    lead: 'Współpraca w modelu B2B — od pojedynczego audytu po długoterminowe wsparcie inżynierskie.',
    items: [
      {
        title: 'Dedykowane oprogramowanie',
        desc: 'Projektowanie i budowa aplikacji webowych oraz narzędzi szytych pod konkretny proces biznesowy — od API po interfejs użytkownika.',
      },
      {
        title: 'Audyty kodu',
        desc: 'Przegląd jakości, bezpieczeństwa i architektury istniejącego kodu. Konkretne rekomendacje i priorytety zamiast ogólników.',
      },
      {
        title: 'Usługi programistyczne B2B',
        desc: 'Wsparcie zespołów inżynierskich, code review, rozwój i utrzymanie systemów. Rozliczenie w modelu B2B, faktura VAT.',
      },
    ],
  },
  local: {
    eyebrow: 'Sędziszów Małopolski i okolice',
    title: 'Usługi lokalne i wypożyczalnia sprzętu',
    lead: 'Praktyczna pomoc na miejscu oraz sprzęt do wynajęcia, gdy potrzebny jest tylko na chwilę.',
    carTitle: 'Awaryjne odpalanie aut',
    carDesc:
      'Rozładowany akumulator? Pomoc w odpaleniu samochodu na terenie Sędziszowa Małopolskiego i okolic. Szybki dojazd, bez zbędnych formalności.',
    carCta: 'Zadzwoń po pomoc',
    rentalTitle: 'Wypożyczalnia sprzętu',
    rentalDescHtml:
      'Sprzęt do wynajęcia, m.in. <span class="text-slate-200 light:text-slate-800">agregat malarski</span> — idealny do jednorazowych remontów bez inwestowania we własne urządzenie. Elastyczne okresy najmu.',
    rentalCta: 'Zapytaj o dostępność',
  },
  printing: {
    eyebrow: 'Druk 3D',
    title: 'Druk 3D na zamówienie',
    lead: 'Projektuję i drukuję elementy na zamówienie — personalizowane gadżety, organizery, uchwyty, ozdoby i części zamienne. Gotowe wzory kupisz od ręki na Allegro i OLX.',
    features: [
      'Personalizacja: imię, logo, kolor, wymiar',
      'Szybka realizacja i wysyłka (paczkomat)',
      'Od pojedynczych sztuk po małe serie',
    ],
    ctaAllegro: 'Zobacz na Allegro',
    ctaOlx: 'Zobacz na OLX',
  },
  products: {
    eyebrow: 'Produkty własne',
    title: 'Produkty projektowane od podstaw',
    items: [
      {
        title: 'Inteligentna lampka drewniana',
        badge: 'Coming Soon · Wkrótce w sprzedaży',
        descHtml:
          'Autorski produkt łączący naturalne, ręcznie wykończone drewno z nowoczesną elektroniką. Sercem urządzenia jest <span class="text-slate-200 light:text-slate-800">własne PCB</span> sterujące <span class="text-slate-200 light:text-slate-800">adresowalnym oświetleniem LED RGB</span>.',
        features: [
          'Autorski projekt PCB i firmware',
          'Pełna paleta kolorów LED RGB i płynne sceny świetlne',
          'Naturalne drewno, ręczne wykończenie każdego egzemplarza',
        ],
        cta: 'Powiadom mnie o premierze',
      },
      {
        title: 'Planer 3D ogrodu',
        badge: 'Coming Soon · Wkrótce',
        descHtml:
          'Aplikacja webowa do projektowania ogrodu w <span class="text-slate-200 light:text-slate-800">3D</span> — rozmieszczaj rośliny, strefy i elementy małej architektury i zobacz efekt, zanim chwycisz za łopatę.',
        features: [
          'Projektowanie w przeglądarce, bez instalacji',
          'Interaktywna wizualizacja 3D układu ogrodu',
          'Biblioteka roślin i elementów małej architektury',
        ],
        cta: 'Powiadom mnie o premierze',
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Porozmawiajmy o współpracy',
    lead: "Napisz w sprawie projektu software'owego, usługi lokalnej lub produktu. Odpowiadam zwykle w ciągu jednego dnia roboczego.",
    emailLabel: 'E-mail',
    phoneLabel: 'Telefon',
    registryHeading: 'Dane rejestrowe',
    fieldCompany: 'Firma',
    fieldAddress: 'Adres',
    fieldNip: 'NIP',
    fieldRegon: 'REGON',
    formName: 'Imię i nazwisko',
    formNamePlaceholder: 'Jan Kowalski',
    formEmail: 'E-mail',
    formEmailPlaceholder: 'jan@firma.pl',
    formTopic: 'Temat',
    formMessage: 'Wiadomość',
    formMessagePlaceholder: 'W czym mogę pomóc?',
    topics: [
      'Usługi software / B2B',
      'Audyt kodu',
      'Usługa lokalna (Sędziszów Małopolski i okolice)',
      'Wypożyczalnia sprzętu',
      'Inteligentna lampka drewniana',
      'Planer 3D ogrodu',
      'Inne',
    ],
    submit: 'Wyślij wiadomość',
    consent: 'Wysyłając formularz akceptujesz kontakt zwrotny w sprawie zapytania.',
    formSuccess: 'Dziękuję! Wiadomość została wysłana — odezwę się wkrótce.',
    formError: 'Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na e-mail.',
  },
  footer: {
    tagline:
      'Technologia i niezawodność — usługi dla biznesu i klientów indywidualnych. Software, usługi lokalne i produkty własne.',
    rights: 'Wszelkie prawa zastrzeżone.',
    builtWith: 'Zbudowano w Astro + Tailwind CSS.',
  },
};

const en: typeof pl = {
  a11y: {
    themeToggle: 'Toggle light / dark theme',
  },
  meta: {
    title: `${company.name} — technology and reliability for business`,
    description:
      'Przemysław Papla - Software: custom software development and code audits (B2B), local services in Sędziszów Małopolski and the surrounding area, and equipment rental.',
  },
  nav: {
    services: 'B2B services',
    local: 'Local services',
    printing: '3D printing',
    products: 'Products',
    contact: 'Contact',
    cta: 'Get in touch',
  },
  hero: {
    badge: 'Software · Local services · Own products',
    titleLead: 'Technology and reliability —',
    titleHighlight: 'services for business and individual clients',
    lead: 'Custom software and code audits for companies, hands-on local services in Sędziszów Małopolski and the surrounding area, and my own products. One business — many sources of value.',
    ctaPrimary: 'See what I offer',
    ctaSecondary: 'Contact',
  },
  services: {
    eyebrow: 'Software / B2B',
    title: 'Software that actually works',
    lead: 'B2B cooperation — from a single audit to long-term engineering support.',
    items: [
      {
        title: 'Custom software',
        desc: 'Design and build of web applications and tools tailored to a specific business process — from the API to the user interface.',
      },
      {
        title: 'Code audits',
        desc: 'A review of quality, security and architecture of your existing code. Concrete recommendations and priorities instead of generalities.',
      },
      {
        title: 'B2B development services',
        desc: 'Support for engineering teams, code review, development and maintenance of systems. Billed B2B with a VAT invoice.',
      },
    ],
  },
  local: {
    eyebrow: 'Sędziszów Małopolski and surroundings',
    title: 'Local services and equipment rental',
    lead: 'Practical help on site and equipment to rent when you only need it for a while.',
    carTitle: 'Emergency car jump-start',
    carDesc:
      'Flat battery? Help starting your car in Sędziszów Małopolski and the surrounding area. Fast arrival, no unnecessary paperwork.',
    carCta: 'Call for help',
    rentalTitle: 'Equipment rental',
    rentalDescHtml:
      'Equipment to rent, e.g. a <span class="text-slate-200 light:text-slate-800">paint sprayer</span> — ideal for one-off renovations without buying your own unit. Flexible rental periods.',
    rentalCta: 'Ask about availability',
  },
  printing: {
    eyebrow: '3D printing',
    title: 'Custom 3D printing',
    lead: 'I design and print made-to-order parts — personalized gadgets, organizers, holders, decorations and spare parts. Ready-made designs are available now on Allegro and OLX.',
    features: [
      'Personalization: name, logo, color, size',
      'Fast turnaround and shipping',
      'From single pieces to small batches',
    ],
    ctaAllegro: 'See on Allegro',
    ctaOlx: 'See on OLX',
  },
  products: {
    eyebrow: 'Own products',
    title: 'Products designed from scratch',
    items: [
      {
        title: 'Smart wooden lamp',
        badge: 'Coming Soon',
        descHtml:
          'An original product combining natural, hand-finished wood with modern electronics. At its heart is a <span class="text-slate-200 light:text-slate-800">custom PCB</span> driving <span class="text-slate-200 light:text-slate-800">addressable RGB LED lighting</span>.',
        features: [
          'Original PCB and firmware design',
          'Full RGB LED color palette and smooth lighting scenes',
          'Natural wood, each unit hand-finished',
        ],
        cta: 'Notify me at launch',
      },
      {
        title: '3D garden planner',
        badge: 'Coming Soon',
        descHtml:
          'A web app for designing your garden in <span class="text-slate-200 light:text-slate-800">3D</span> — arrange plants, zones and landscaping features and see the result before you pick up a spade.',
        features: [
          'Design in the browser, no install',
          'Interactive 3D visualization of the layout',
          'Library of plants and landscaping elements',
        ],
        cta: 'Notify me at launch',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about working together",
    lead: 'Write about a software project, a local service or a product. I usually reply within one business day.',
    emailLabel: 'E-mail',
    phoneLabel: 'Phone',
    registryHeading: 'Registration details',
    fieldCompany: 'Company',
    fieldAddress: 'Address',
    fieldNip: 'VAT ID (NIP)',
    fieldRegon: 'REGON',
    formName: 'Full name',
    formNamePlaceholder: 'John Smith',
    formEmail: 'E-mail',
    formEmailPlaceholder: 'john@company.com',
    formTopic: 'Topic',
    formMessage: 'Message',
    formMessagePlaceholder: 'How can I help?',
    topics: [
      'Software / B2B services',
      'Code audit',
      'Local service (Sędziszów Małopolski area)',
      'Equipment rental',
      'Smart wooden lamp',
      '3D garden planner',
      'Other',
    ],
    submit: 'Send message',
    consent: 'By submitting the form you agree to be contacted about your enquiry.',
    formSuccess: 'Thank you! Your message has been sent — I will get back to you soon.',
    formError: 'Something went wrong. Please try again or email me directly.',
  },
  footer: {
    tagline:
      'Technology and reliability — services for business and individual clients. Software, local services and own products.',
    rights: 'All rights reserved.',
    builtWith: 'Built with Astro + Tailwind CSS.',
  },
};

export const ui = { pl, en } as const;

/** Return the translation dictionary for a locale, falling back to default. */
export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui[defaultLang];
}
