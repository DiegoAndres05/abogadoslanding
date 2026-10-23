# Quickstart: Three Practice Pillars

## Prerequisites

- Node.js version supported by the repository.
- Dependencies installed with `npm install`.
- Approved corporate email, team biographies/photos, and privacy/terms content available before final publication.

## Development

```bash
npm run dev
```

Open the local URL shown by Next.js and inspect:

1. Home hero at `/`: exact three-pillar title and description visible without scrolling.
2. Home practice section: primary order and complementary treatment.
3. Detail routes:
   - `/practicas/corporativo`
   - `/practicas/contratacion-publica`
   - `/practicas/tributario`
4. Legal routes:
   - `/privacidad`
   - `/terminos`
5. Contact CTAs from each primary pillar: area preselected, WhatsApp message contextual, corporate email visible.

## Responsive and accessibility checks

- Inspect at approximately 375 px and desktop width.
- Navigate the home, detail pages, form fields, footer links, and CTAs using only the keyboard.
- Confirm visible focus, meaningful link/button names, no horizontal overflow, and no content hidden behind motion.
- Enable reduced motion in the browser/OS and confirm all copy remains immediately readable.
- Disable or block images and confirm alt text/fallbacks preserve the service information.

## Content and technical checks

```bash
rg -n "getlegalcol\\.com|href=[\"']#[\"']|\\[Fotografía\\]" app components data lib public
git diff --check
npm run lint
npm run build
```

The first search should return no production references after implementation. The build must generate all five new route families and metadata without TypeScript or Next.js errors.

## SEO checks

- Inspect rendered `<link rel="canonical">`, Open Graph URL/image, Twitter URL/image, JSON-LD, `/sitemap.xml`, and `/robots.txt`.
- Confirm every public URL uses `https://getlegalandtax.com`.
- Confirm JSON-LD lists the three primary services and the corporate email/telephone values supplied for production.
