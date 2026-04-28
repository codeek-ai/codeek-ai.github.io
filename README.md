# Codeek Apps — Developer Website

Official developer website for the Codeek Apps mobile portfolio, built with Astro 5 and Tailwind CSS v4.

## Tech stack

- **[Astro 5](https://astro.build)** — static site generator, zero client JS by default
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **TypeScript** (strict)
- **`@astrojs/sitemap`** — auto-generates `sitemap-index.xml`

## Development

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build & deploy

```bash
npm run build        # generates icons, then builds to /docs
```

Commit the `/docs` folder. GitHub Pages must be configured to serve from **`main` / `/docs`**:

1. Go to **Settings → Pages** in the GitHub repo
2. Under *Build and deployment*, choose **Deploy from a branch**
3. Set branch: **`main`**, folder: **`/docs`**

## URLs preserved (Google Play links to these)

| Page | URL |
|------|-----|
| Home | `/` |
| Math Sprint | `/math-sprint/` |
| Codeek Camera | `/codeek-camera/` |
| Codeek Map | `/codeek-map/` |
| QR and Barcode | `/qr-and-barcode/` |
| Privacy hub | `/privacy/` |
| Per-app privacy policies | `/<app>/privacy-policy/` |

## Adding real app icons/screenshots

Replace `public/favicon.svg` with your final brand mark (SVG), then run:

```bash
npm run build:icons   # regenerates PNG icons from favicon.svg
```

To add phone screenshots on app pages, edit `src/components/PhoneMockup.astro` and replace the skeleton UI with an `<img>` in the screen area.
