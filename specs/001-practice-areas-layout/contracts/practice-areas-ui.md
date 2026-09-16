# UI Contract: Practice areas section

Surface: homepage section only. No HTTP API.

## Section

- Landmark: `<section id="areas">`.
- Background: dark brand (`navy` / charcoal), not ivory.
- Contains an intro heading for the section and **exactly eight** area rows.

## Area row

Each row is one practice area.

- Root has `id="{slug}"` matching `PracticeArea.slug` (footer contract).
- Large viewports: two columns — visual panel then copy card, same row, visual on the **left**.
- Narrow viewports: visual panel stacked **above** the copy card.
- No expand/collapse control. No “Ver servicios” / “Ocultar servicios”.

## Visual panel

- Rounded corners.
- Brand placeholder (CSS), not an `<img>` of a stock or firm photograph in v1.
- Superimposed area `title` (readable on the dark panel).
- Control labeled **Agenda una consulta**.
- Control is a link with `href="#contacto"`.

## Copy card

- Light (white/ivory) card on the dark section.
- Heading: **¿Por qué importa?**
- Body: `whyItMatters` (3–5 sentences).
- Heading: **Especialidades:**
- List of `featuredSpecialties`: **at most five** items, each with a check-style marker.
- MUST NOT list the full `services` array.

## Shared navigation

| From | To | Required |
|------|-----|----------|
| Navbar / Hero “áreas” | `#areas` | Unchanged |
| Row CTA | `#contacto` | New on each row |
| Footer area links | `#{slug}` | Unchanged; rows MUST provide those ids |

## Explicit non-contracts

- No JSON/REST payload.
- No per-area detail route.
- No query parameters on the CTA.
