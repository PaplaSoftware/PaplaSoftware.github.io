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
// TODO: replace `email` / `phone` placeholders with real contact details.
export const company = {
  name: 'Przemysław Papla - Software',
  short: 'Papla Software',
  street: 'Wrzosowa 6',
  city: '43-370 Szczyrk',
  nip: '9372761119',
  regon: '528464558',
  email: 'kontakt@paplasoftware.pl',
  phone: '+48 000 000 000',
  phoneHref: '+48000000000',
} as const;

// A static site has no backend. Paste a Formspree endpoint
// (https://formspree.io, free tier) to enable real submissions;
// otherwise the form falls back to a `mailto:` link.
export const FORMSPREE_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

// Section anchors are locale-independent and shared across languages.
export const anchors = {
  services: '#services',
  local: '#local',
  products: '#products',
  contact: '#contact',
} as const;

const pl = {
  meta: {
    title: `${company.name} — technologia i niezawodność dla biznesu`,
    description:
      'Przemysław Papla - Software: dedykowane oprogramowanie i audyty kodu (B2B), usługi lokalne w Szczyrku i okolicach oraz wypożyczalnia sprzętu.',
  },
  nav: {
    services: 'Usługi B2B',
    local: 'Usługi lokalne',
    products: 'Produkty',
    contact: 'Kontakt',
    cta: 'Napisz do mnie',
  },
  hero: {
    badge: 'Software · Usługi lokalne · Produkty własne',
    titleLead: 'Technologia i niezawodność —',
    titleHighlight: 'usługi dla biznesu i klientów indywidualnych',
    lead: "Dedykowane oprogramowanie i audyty kodu dla firm, praktyczne usługi lokalne w Szczyrku i okolicach oraz własne produkty elektroniczne. Jedna działalność — wiele źródeł wartości.",
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
    eyebrow: 'Szczyrk i okolice',
    title: 'Usługi lokalne i wypożyczalnia sprzętu',
    lead: 'Praktyczna pomoc na miejscu oraz sprzęt do wynajęcia, gdy potrzebny jest tylko na chwilę.',
    carTitle: 'Awaryjne odpalanie aut',
    carDesc:
      'Rozładowany akumulator? Pomoc w odpaleniu samochodu na terenie Szczyrku i okolic. Szybki dojazd, bez zbędnych formalności.',
    carCta: 'Zadzwoń po pomoc',
    rentalTitle: 'Wypożyczalnia sprzętu',
    rentalDescHtml:
      'Sprzęt do wynajęcia, m.in. <span class="text-slate-200">agregat malarski</span> — idealny do jednorazowych remontów bez inwestowania we własne urządzenie. Elastyczne okresy najmu.',
    rentalCta: 'Zapytaj o dostępność',
  },
  products: {
    eyebrow: 'Produkty własne',
    title: 'Elektronika projektowana od podstaw',
    badge: 'Coming Soon · Wkrótce w sprzedaży',
    itemTitle: 'Inteligentna lampka drewniana',
    itemDescHtml:
      'Autorski produkt łączący naturalne, ręcznie wykończone drewno z nowoczesną elektroniką. Sercem urządzenia jest <span class="text-slate-200">własne PCB</span> sterujące <span class="text-slate-200">adresowalnym oświetleniem LED RGB</span>.',
    features: [
      'Autorski projekt PCB i firmware',
      'Pełna paleta kolorów LED RGB i płynne sceny świetlne',
      'Naturalne drewno, ręczne wykończenie każdego egzemplarza',
    ],
    cta: 'Zapisz się na informację o premierze',
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
      'Usługa lokalna (Szczyrk i okolice)',
      'Wypożyczalnia sprzętu',
      'Inteligentna lampka drewniana',
      'Inne',
    ],
    submit: 'Wyślij wiadomość',
    consent: 'Wysyłając formularz akceptujesz kontakt zwrotny w sprawie zapytania.',
  },
  footer: {
    tagline:
      'Technologia i niezawodność — usługi dla biznesu i klientów indywidualnych. Software, usługi lokalne i produkty własne.',
    rights: 'Wszelkie prawa zastrzeżone.',
    builtWith: 'Zbudowano w Astro + Tailwind CSS.',
  },
};

const en: typeof pl = {
  meta: {
    title: `${company.name} — technology and reliability for business`,
    description:
      'Przemysław Papla - Software: custom software development and code audits (B2B), local services in Szczyrk and the surrounding area, and equipment rental.',
  },
  nav: {
    services: 'B2B services',
    local: 'Local services',
    products: 'Products',
    contact: 'Contact',
    cta: 'Get in touch',
  },
  hero: {
    badge: 'Software · Local services · Own products',
    titleLead: 'Technology and reliability —',
    titleHighlight: 'services for business and individual clients',
    lead: 'Custom software and code audits for companies, hands-on local services in Szczyrk and the surrounding area, and my own electronic products. One business — many sources of value.',
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
    eyebrow: 'Szczyrk and surroundings',
    title: 'Local services and equipment rental',
    lead: 'Practical help on site and equipment to rent when you only need it for a while.',
    carTitle: 'Emergency car jump-start',
    carDesc:
      'Flat battery? Help starting your car in Szczyrk and the surrounding area. Fast arrival, no unnecessary paperwork.',
    carCta: 'Call for help',
    rentalTitle: 'Equipment rental',
    rentalDescHtml:
      'Equipment to rent, e.g. a <span class="text-slate-200">paint sprayer</span> — ideal for one-off renovations without buying your own unit. Flexible rental periods.',
    rentalCta: 'Ask about availability',
  },
  products: {
    eyebrow: 'Own products',
    title: 'Electronics designed from scratch',
    badge: 'Coming Soon',
    itemTitle: 'Smart wooden lamp',
    itemDescHtml:
      'An original product combining natural, hand-finished wood with modern electronics. At its heart is a <span class="text-slate-200">custom PCB</span> driving <span class="text-slate-200">addressable RGB LED lighting</span>.',
    features: [
      'Original PCB and firmware design',
      'Full RGB LED color palette and smooth lighting scenes',
      'Natural wood, each unit hand-finished',
    ],
    cta: 'Get notified about the launch',
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
      'Local service (Szczyrk area)',
      'Equipment rental',
      'Smart wooden lamp',
      'Other',
    ],
    submit: 'Send message',
    consent: 'By submitting the form you agree to be contacted about your enquiry.',
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
