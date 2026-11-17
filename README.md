# MDB Group, LLC — Website Redesign Concept

> **Unofficial concept.** This is an independent portfolio project. It is not affiliated with, endorsed by, or published on behalf of MDB Group, LLC.

A multi-page React website concept for a veteran-owned defense management consulting firm, designed with a dark, cinematic military-operations theme.

**Stack:** React 18 · Vite 7 · Tailwind CSS 4 · React Router · Motion · Lucide icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/mdb-group-website/
npm run build    # production build in dist/ (also writes 404.html for GitHub Pages routing)
npm run preview
```

## Deployment

GitHub Actions builds and deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).
One-time setup: **Settings → Pages → Source: GitHub Actions**. The Vite `base` is `/mdb-group-website/`.

## Content and assets

- **Company information** (identifiers, GSA contract, service areas) was compiled from public sources: mdbgrp.com, GSA eLibrary and HigherGov. Sources are noted in `src/data/company.js`. Details should be confirmed with the company.
- **Photography:** U.S. Army imagery in the public domain, via Wikimedia Commons (DVIDS / U.S. Army Flickr). Credits are listed in `src/data/photos.js` and on the site's Photo Credits page. Use does not imply DoD endorsement, and the images do not depict MDB Group work.
- **Logos:** MDB Group logos are the property of MDB Group, LLC and are included only for this concept presentation.
