# UI Contract: Practice-area row scroll reveal

Surface: homepage `#areas` only. No HTTP API.

## In scope

- Each of the eight `<article id="{slug}">` rows: visual panel, then copy card.
- Trigger: row (or its children) entering the viewport while scrolling down.

## Out of scope (must not animate via this contract)

- Section intro (gold label, `h2`, subtitle).
- Other landing sections.

## Behavior

| Event | Required |
|-------|----------|
| Row enters view (first time) | Panel fades/slides in; card follows after a short delay |
| Scroll continues | Other rows wait for their own enter |
| Scroll stops | Page stops; no pin, no auto-scroll |
| Row already in view on load / hash | Row is readable immediately (reveal skipped or instant-complete) |
| `prefers-reduced-motion: reduce` | No reveal animation; content fully visible |
| GSAP/ScrollTrigger fails | Content fully visible |
| Row re-enters after leaving | No second animation; stays revealed |
| CTA during/after motion | `href="#contacto"` remains clickable |

## Timing (perceived)

- Full row reveal: ~0.5–0.8 s.
- Panel starts before card (~0.12–0.18 s).

## Explicit non-contracts

- No pin, scrub, or horizontal scrolljacking.
- No JSON API.
