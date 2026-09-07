# Olaitan Adeniyi — portfolio

A portfolio aimed at two readers at once: graduate admissions committees, and
engineering teams hiring into visa-sponsored roles. Each gets its own route and
its own document, from one shared set of facts.

## Design

The site is laid out as an engineering drawing sheet. That is not decoration —
it comes from the subject. The work being presented is measured work (a CGPA to
two decimals, a 98.7% latency reduction, course scores out of 100), so every
claim is presented the way an instrument presents a reading: a value, a unit,
and the source it came from.

- **Hero** is a drawing *title block* — the panel in the corner of every
  engineering sheet stating who drew it, what it is, and its status. Here the
  status cell carries work authorisation, which is the first thing both
  audiences need to know.
- **Palette** is drawing-office stock: cool vellum paper, graphite rules,
  blueprint ink for structure. The survey-flag orange is reserved exclusively
  for measured values — if it is orange, it is a number with a source.
- **Type** pairs `Archivo` (engineered grotesque, uppercase) for headings with
  `Source Serif 4` for prose and `IBM Plex Mono` with tabular figures for all
  data. The drawing and the thesis, which is the argument the site is making.
- **Motion** is restrained. Page transitions never animate opacity, and the
  hero readings move without fading, so a throttled or interrupted animation
  can never leave a visitor on an invisible page. `prefers-reduced-motion` is
  honoured in JavaScript as well as CSS.

## Content lives in one place

All facts are in `src/content/` and nothing else hard-codes them:

| File | Holds |
| --- | --- |
| `profile.js` | Identity, availability, hero readings, positioning, roles, field practice, teaching |
| `academic.js` | Degree, transcript scores, awards, certifications, memberships, research tracks |
| `projects.js` | Selected systems, archive, writing, skills inventory |

`src/theme.js` holds the design tokens. Update those two places and the whole
site follows.

### Keeping it truthful

Everything on the site traces to `src/file/Olaitan_Adeniyi_Software_Resume.pdf`
or `src/file/Olaitan_Adeniyi_Academic_CV.pdf`. When either PDF changes, update
the matching entry in `src/content/` in the same commit, and bump
`availability.revision` — it is printed in the title block and the footer.

## Routes

| Path | For |
| --- | --- |
| `/` | Both — title block, positioning, selected work, career log, writing |
| `/engineering` | Hiring — 19 systems, filterable by discipline, plus the skills inventory |
| `/research` | Supervisors — research tracks, degree record, transcript, awards, teaching |
| `/contact` | Both — channels, eligibility, and both documents |

Every page is built to be shared on its own, so none of them number themselves
as part of a set or refer to the others to make sense. `/research` goes furthest:
it opens with its own identity strip (name, degree class, academic email) and
closes with a supervision-enquiry block, because it gets pasted into cold emails
where it is the only thing a supervisor sees. `usePageMeta` sets the document
title and description per route for the same reason.

## Prerendering & SEO

`npm run build` runs `react-snap` as a `postbuild` step, which loads each route
in a headless browser and writes real static HTML to `build/<route>/index.html`.
This matters because these links are *sent*, not found: LinkedIn, Slack,
WhatsApp, X and most AI crawlers never execute JavaScript, so without it every
route previewed as the homepage.

`src/index.js` therefore calls `hydrate()` when `#root` already has markup, and
`render()` when it does not (dev server).

**Motion interacts with this, carefully.** `src/prerender.js` exposes two
states, and `useMotionStart` in `useScroll.js` reads both:

- *During* prerendering, entrance variants must not be captured — an `opacity: 0`
  serialised into the static HTML would hand crawlers a page of invisible
  content. Verify after any motion change: `grep -c 'opacity:0' build/research/index.html`
  must be `0`.
- *After* hydrating that HTML, entrances are skipped too. The page has already
  painted, so animating from invisible would blank out what the reader can
  see. The trade is that scroll reveals do not play in production; the page
  arrives fully readable instead. They still run on the dev server.

Also in place: per-route `<title>`, description, canonical and Open Graph tags
(`usePageMeta`); a JSON-LD `Person` block in the static HTML; `sitemap.xml`
referenced from `robots.txt`; and absolute `og:image` URLs, which LinkedIn and X
require — a relative path silently yields a card with no image.

Project screenshots are WebP at 1200px (10.5 MB of PNGs became 507 KB). Measured
CLS on the prerendered build is 0.

## Running it

```bash
npm install
npm start
```

Dev server settings live in `.env.local` (port and browser behaviour); it is
not committed. Production build:

```bash
npm run build
```

`homepage` is `/`, so assets resolve absolutely and deep links such as
`/research/` work. `public/_redirects` and `netlify.toml` both route all paths
to `index.html` for client-side routing.

The stack is Create React App 4 on React 17, with styled-components and Framer
Motion 4. CRA 4 runs on webpack 4, so both scripts pass
`--openssl-legacy-provider` for Node 17 and later — do not remove that flag
without upgrading the toolchain.

`react-snap` pulls in Puppeteer, so `npm install` downloads a Chromium build.
To skip prerendering temporarily, run `react-scripts build` directly rather than
`npm run build`.

## Screenshots still needed

Five projects render a hatched "plot pending" cell instead of a screenshot,
because no real image exists for them. Add a WebP (or PNG) to `src/images/projects/`,
import it at the top of `src/content/projects.js`, and set it on the entry:

- EagleSight — <https://eaglesight.deniyi.link/>
- Locus — <https://locus-agent-service-380433705339.us-central1.run.app/>
- Enzo — <https://enzo.stabilty.com/>
- WatchWay — <https://watchway.stabilty.com/>
- Whisperer — no live deployment

## Links deliberately omitted

Three links from the previous site were dead and have been dropped rather than
shipped broken. Restore them when the underlying service returns:

- Codeity live demo — the Cloud Run deployment 404s
- Closetic source — the repository is private, so it 404s for visitors
- Hypertrove live demo — `hypertrove.deniyi.link` no longer resolves
