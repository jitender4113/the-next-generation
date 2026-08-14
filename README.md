# The Next Generation Clinical Research — React + Vite

A React/Vite rebuild of the original WordPress homepage (`kcrindia.com`), keeping the same
layout, colors, typography, content, and interactive elements.

## Verifying the build

This project's `npm run build` needs network access to fetch dependencies (`vite`,
`@vitejs/plugin-react`, `react-router-dom`) from the npm registry the first time. If you're
running this in an offline/sandboxed environment, run `npm install` somewhere with internet
access first (or let your normal dev machine/CI do it) — after that, `npm run build` works
fully offline. Every source file (all 26 JS/JSX files and all 3 CSS files) has been
syntax-checked directly, and the whole app has been bundle-resolved end-to-end with esbuild
(including all newly added service/contact pages) to confirm there are no import, export, or
syntax errors.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## What was converted

- **Header / navigation** — `src/components/Header.jsx`, driven by `src/data/navigation.js`.
  Multi-level dropdowns (`Our Services → Specialised Site Support → …`) work on hover on
  desktop and tap-to-expand on mobile (≤1180px, matching the original breakpoint).
- **Hero slider** — `src/components/HeroSlider.jsx` replaces the Slider Revolution plugin with
  a small custom React fade slider (autoplay, arrows, dots) using the same 3 slides/copy/CTA.
- **"Get Instant Quote" popup** — `src/components/QuoteModal.jsx`, a controlled React form
  (was a Contact Form 7 popup, `#request-a-rate`).
- **Search overlay** — `src/components/SearchOverlay.jsx` (was `#search-overlay`), closes on
  Esc or the close button, same full-screen styling.
- **About / KCR in Numbers / Mission / Team / Contact** — one component per section in
  `src/components/`, assembled in `src/pages/Home.jsx`.
- **"KCR in Numbers" particle background** — the original used particles.js; this uses a small
  CSS-only floating-dot layer (`ParticleField` inside `KcrNumbers.jsx`) to avoid an extra
  dependency while keeping the same visual effect.
- **Contact form (with file upload)** — `src/components/ContactSection.jsx`, controlled React
  form including the PDF/DOCX file input from the original.
- **Footer, Back-to-top, floating Call-Now button** — `Footer.jsx`, `BackToTop.jsx`,
  `CallNowButton.jsx`. The call button is mobile-only, matching the original
  `cnb-displaymode-mobile-only` behavior.

## Pages

The entire site from `https://kcrindia.com/` is now built — every navbar/dropdown link has real
content, nothing is a placeholder.

- **Home** (`/`) — unchanged from the first version.
- **About Us** (`/about-us`) — unchanged from the previous version.
- **Services** (`/services`) — overview copy from the live page, plus a 4-card grid linking to
  each service (a small addition for usability/navigation; the original page had no such grid).
- **Site Selection & Feasibility** (`/services/site-selection-feasibility`)
- **Specialised Site Support** (`/services/specialised-site-support`) — includes the "Read
  More »" links into Rapid Start-up and Overall Study Management.
- **Rapid Start-up** (`/services/specialised-site-support/rapid-start-up`)
- **Overall Study Management** (`/services/specialised-site-support/overall-study-management`)
- **Training** (`/services/training`)
- **Clinical Research** (`/services/clinical-research`) — the live page only has a heading and no
  body copy; this is reflected faithfully, with one short intro sentence added so the page isn't
  empty.
- **Contact Us** (`/contact-us`) — address, phone, email and hours as shown on the live page
  (note: this page displays a different phone number, +91-8700068248, and different hours,
  10AM–8PM, than the header/footer's +91-9671004610 / 9AM–6PM — both numbers are reproduced
  exactly as they appear on the respective live pages). Includes the embedded Google Map iframe
  and a contact form (the live page's form fields weren't recoverable from the page's text
  content, so this reuses the same field set/style as the homepage's contact form for
  consistency).

The five service detail pages (Site Selection & Feasibility, Specialised Site Support, Rapid
Start-up, Overall Study Management, Training, Clinical Research) share:

- `src/components/PageBanner.jsx` — the light page-title banner (kept separate from Home/About
  Us styling, so those two pages are 100% unaffected).
- `src/components/ServiceSidebar.jsx` — the "Get Instant Quote" mini-form + "Our Services" link
  list widget that appears on every inner service page on the live site.
- `src/pages/servicePages.css` — shared layout/styling for all of the above, imported only by
  these new pages (does not touch `index.css` or `AboutUs.css`).

`react-router-dom` provides the routing for all of the above, and every dropdown link in the
navbar (`src/data/navigation.js`) resolves to a real route.

## Forms — important

Both forms (`QuoteModal`, `ContactSection`) are fully controlled React components, but they only
**simulate** submission (a timeout that shows a success message). The original site posted to a
WordPress Contact Form 7 endpoint on the backend. To make these functional, point `handleSubmit`
at your own API route, a form service (Formspree, Getform, etc.), or a re-implemented backend
endpoint.

## Notes on things intentionally simplified

- WordPress/WPBakery/Slider-Revolution-specific markup (`wpb_*`, `vc_*`, `rs-layer`, etc.) was
  replaced with plain semantic HTML + CSS producing the same visual result.
- jQuery plugins (Revolution Slider, particles.js, Animsition page transitions, Fancybox) were
  replaced with React state + CSS transitions rather than pulling in the original jQuery
  dependencies.
- Reference SVG icons for social links / arrows use Font Awesome (loaded via CDN in
  `index.html`) instead of the original inline SVG sprite, for simplicity.
