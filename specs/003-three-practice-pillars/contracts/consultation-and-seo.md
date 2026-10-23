# Contract: Consultation, Legal Pages, and SEO

## Consultation

The consultation form accepts an optional primary practice context. Valid contexts are:

- `corporativo`
- `contratacion-publica`
- `tributario`

When a context is supplied:

1. The area select is initialized to the matching display label.
2. The visitor may change the selection.
3. Validation requires a non-empty area on submit.
4. The WhatsApp message includes the selected display label.
5. A visible email alternative uses the approved `@getlegalandtax.com` mailbox.

When no context is supplied, the select starts with “Seleccione un área” and behaves as the current required field.

## Site identity and metadata

All public identity values MUST derive from `lib/site.ts`:

- Origin: `https://getlegalandtax.com`
- Site name: `GET Legal & Tax`
- Corporate email: approved mailbox under `getlegalandtax.com`
- Primary service types: the three pillars

The following MUST use that origin and identity:

- `metadataBase`
- root and detail-page canonical URLs
- Open Graph URL and image URL
- Twitter card URL/image
- LegalService JSON-LD URL, image, email, telephone, and service types
- `/sitemap.xml`
- `/robots.txt` sitemap URL

## Legal navigation

- Footer privacy link: `/privacidad`
- Footer terms link: `/terminos`
- Neither legal link may use `#`.
- Legal pages must clearly identify their title and show a reviewed-content state; unapproved legal copy must not be presented as final.
