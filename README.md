# Sangam Dairy \u2014 React + Vite Rebuild

A complete, production-style React rebuild of the Sangam Dairy website, built with **Vite**,
**React 18**, **React Router** and **Tailwind CSS**. All images, fonts and assets are served
locally \u2014 there are no runtime dependencies on the original `sangamdairy.com` site.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/images/     All downloaded site images + a central index.js re-export map
  components/        Reusable UI building blocks (Navbar, Footer, HeroSlider, cards, etc.)
  data/               siteData.js \u2014 all structured text content extracted from the
                      original site (nav, products, stats, tenders, quality-assurance copy...)
  pages/              One component per route
  App.jsx             Router + shared layout (Navbar / Footer / floating widgets)
  main.jsx            App entry point
  index.css           Tailwind base + global styles / small custom animations
```

## Pages / routes

| Route                  | Page                                            |
| ----------------------- | ------------------------------------------------ |
| `/`                     | Home (hero, about, area of operation, why-choose-us stats, products teaser, gallery, awards, QA teaser) |
| `/corporate`            | Founders, Management, Milestones, CSR, Infrastructure |
| `/dairy`                | Cattle Feed Operations, Seeds |
| `/products`             | Full product catalogue, grouped by category |
| `/services`             | Tech. Services & Welfare Schemes |
| `/press-tenders`        | Press Room + open Tenders |
| `/careers`              | Openings + application form |
| `/contact`              | Contact details, map, form, Parlour |
| `/quality-assurance`    | **New page** \u2014 QA pillars + interactive Batch Quality Checker |
| `/privacy-policy`, `/terms-conditions`, `/admin` | Footer/utility pages |

## Quality Assurance (new section)

A brand-new "Quality Assurance" item was added to the main navigation, linking to a dedicated
page that matches the site's visual language (Poppins/Oswald type, brand blue `#0B45BB`,
rounded cards, soft shadows). It covers:

- Milk Collection
- Laboratory Testing
- Processing
- Packaging
- Distribution
- Certifications
- An interactive **Batch Quality Checker** (`src/components/BatchQualityChecker.jsx`) built as a
  real React component with local state \u2014 enter any Batch ID to see a simulated Fat / SNF /
  Temperature reading and pass/fail status.

## Notes

- All 70+ images from the original download are stored under `src/assets/images/` and imported
  through the ES module bundler (no external/CDN image URLs are used anywhere).
- Fonts (`Poppins`, `Oswald`) are loaded from Google Fonts in `index.html`; swap for local
  `@font-face` files if a fully offline build is required.
- Colours, spacing and typography were reverse-engineered from the original Tailwind-generated
  CSS bundle (`entry.*.css`) found in the provided download.
