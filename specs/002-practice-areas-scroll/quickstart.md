# Quickstart: Practice Areas Scroll Motion

Validate after implementation. Behavior: [contracts/scroll-reveal-ui.md](./contracts/scroll-reveal-ui.md).

## Prerequisites

- Branch `002-practice-areas-scroll`
- `npm install` (includes `gsap`)
- `npm run dev`

## Scenarios

### 1. Staggered enter (P1)

Desktop, `prefers-reduced-motion` off. Scroll slowly into `#areas`.

- Intro heading is visible without waiting for row motion.
- Each of the eight rows reveals as it enters (panel, then card).
- Rows below the fold do not all animate on first paint.

### 2. Reduced motion (P2)

DevTools → Rendering → emulate `prefers-reduced-motion: reduce`. Reload.

- All row content is visible; no fade/slide.
- CTA and `#contacto` still work.

### 3. Control of scroll (P2)

- Stop mid-section: page stays put (no pin).
- Scroll up past a revealed row and down again: no second animation.
- Viewport ~375px: stacked panel-then-card still reveals without horizontal overflow.

### 4. Anchors and fail-safe

- Open `/#corporativo-ma`: that row is readable immediately.
- CTA “Agenda una consulta” remains clickable while a row animates.

### 5. Build

```bash
npm run lint
npm run build
```
