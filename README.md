# Codeek Apps - Developer Website

Official developer website for the Codeek Apps mobile portfolio, built with Astro 5 and Tailwind CSS v4.

## Tech stack

- **[Astro 5](https://astro.build)** - static site generator, zero client JS by default
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **TypeScript** strict mode
- **`@astrojs/sitemap`** - auto-generates `sitemap-index.xml`

## Development

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build and deploy

```bash
npm run build
```

The build writes Astro output to `docs/`, then mirrors that static output to the repository root. This keeps the site compatible with the current GitHub Pages setup for `codeek-ai.github.io`, where Pages is serving from `main` / root.

Commit the generated root files and `docs/` after each production build.

GitHub Pages settings:

1. Go to **Settings -> Pages** in the GitHub repo.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Set branch to **`main`** and folder to **`/ (root)`**.

The site also includes `.nojekyll` at the root and in `docs/` so GitHub Pages serves Astro's `_astro` assets correctly.

## URLs preserved for Google Play

| Page | URL |
|------|-----|
| Home | `/` |
| Math Sprint | `/math-sprint/` |
| Codeek Camera | `/codeek-camera/` |
| Codeek Map | `/codeek-map/` |
| QR and Barcode | `/qr-and-barcode/` |
| Privacy hub | `/privacy/` |
| Per-app privacy policies | `/<app>/privacy-policy/` |
| AdMob app ads file | `/app-ads.txt` |

## Updating app icons

Replace `public/favicon.svg` with the final brand mark, then run:

```bash
npm run build
```

The build regenerates the PNG icons and publishes them into both `docs/` and the repository root.
