# ZERRO Aberturas — Website export (clean HTML + CSS)

Single-page institutional website, built as **dependency-free static HTML + CSS**
ready to drop into WordPress (Custom HTML block, page template, or a static theme).

## Files
| File | Purpose |
|---|---|
| `index.html` | Semantic markup — all 8 sections. Inline SVG icons (no icon library). |
| `styles.css` | Full stylesheet: design tokens, Bebas Neue + Inter (self-hosted), every component, responsive breakpoints. |
| `site.js` | ~40 lines vanilla JS: sticky nav, mobile menu, smooth scroll. No frameworks. |
| `assets/` | Logos: `logo-primary.png` (dark nav), `logo-white.png` (hero/footer), `logo-isotype-white.png` (watermark). |
| `fonts/` | `BebasNeue-Regular.ttf` (headings), `Inter-VariableFont…ttf` (body). |

## Sections
1. Navbar (sticky, transparent → solid on scroll, mobile hamburger)
2. Hero — "Lo mejor en aluminio." + 2 CTAs + scroll indicator
3. Quiénes somos (Presentación / Objetivos) on a subtle glass-texture grid
4. Materiales — "Trabajamos con materiales de calidad." navy band
5. Carpintería en Aluminio — 6 cards (Modena, Modena 2, A30, Herrero, Línea Mass, Mass R60)
6. Por qué elegirnos — 4 features on turquoise
7. Contacto — dark navy: logo + full contact block + Google Maps embed
8. Footer + floating WhatsApp button

## Brand tokens
- Primary turquoise `#1E9DC0` · deep `#1888A8` · navy `#0D3B52` · cream bg `#F7F6F2`
- Headings **Bebas Neue**, body **Inter**, WhatsApp green `#25D366`

## Using in WordPress
- **Quick:** paste `index.html`'s `<body>` content into a *Custom HTML* block; enqueue `styles.css`, `site.js` and upload the `assets/` + `fonts/` folders to your theme/uploads, fixing the relative paths.
- **Proper:** convert `index.html` into a page template in your theme; move `styles.css`/`site.js` into the theme and `wp_enqueue_*` them.
- **Contact:** the section shows phone / WhatsApp / email / address / hours + a keyless Google Maps embed — no form. If you want lead capture, add a **Contact Form 7 / WPForms** block; the earlier form-based version is kept at the project root in `backups/`.

## To replace
- **Hero photo:** edit `.hero` in `styles.css` — a commented `background-image` line shows exactly where to add your architectural/glass-facade photo (a gradient is used as a placeholder now).
- **Social links:** the Facebook/Instagram `href="#"` in the footer — point them at the real profiles.
- **Map:** the embed is keyless and centered on Av. 72 N°522, La Plata; adjust the `?q=` if needed.
- Brand/social glyphs (WhatsApp, FB, IG) load from the Simple Icons CDN; download them locally if you need a fully offline build.
