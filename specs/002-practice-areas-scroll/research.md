# Research: Practice Areas Scroll Motion

## 1. Motion engine

**Decision:** Use **GSAP 3** with **ScrollTrigger** (user-requested). Register the plugin only in a Client Component. Do not animate with Framer Motion on the eight rows.

**Rationale:** Spec constraint. ScrollTrigger `once: true` maps to FR-011. Pin/scrub APIs exist but are out of scope.

**Alternatives considered:**
- Keep wrapping rows in `FadeIn` (Framer) — conflicts with GSAP and fires on load, not per-row scroll (FR-004).
- CSS `animation-timeline: view()` — no GSAP, rejected by the request.
- ScrollTrigger pin + scrub — rejected in spec (FR-005).

## 2. Next.js / React integration

**Decision:** Add a client child (e.g. `PracticeAreaRowMotion` or a hook `usePracticeAreaScrollReveal`) used only around each `<article>`’s visual panel and copy card. Parent `PracticeAreas` can stay a Server Component that maps data; the motion wrapper is `"use client"`. Use `gsap.context()` in `useLayoutEffect` and revert on unmount.

**Rationale:** GSAP touches the DOM. Context cleanup avoids leaks with Fast Refresh. `useLayoutEffect` reduces flash before first paint of the animation state.

**Alternatives considered:**
- Whole `PracticeAreas.tsx` as client — works but pulls the whole section client-side unnecessarily.
- Animate from a `useEffect` without context — cleanup is easy to miss.

## 3. Visibility fail-safe (FR-009, FR-008)

**Decision:** Default CSS remains **fully visible**. After GSAP + ScrollTrigger initialize successfully, `gsap.fromTo` (or `from`) on panel then card. If `prefers-reduced-motion: reduce`, skip GSAP entirely. If import/init throws, skip GSAP (content already visible). For rows already in the viewport (anchor or tall screen), `start` should treat them as complete immediately (`once: true` + `toggleActions` that don’t reverse; optionally `ScrollTrigger.batch` with `onEnter` only).

**Rationale:** Hiding with `opacity: 0` in CSS before JS runs fails FR-009 if the bundle never runs.

**Alternatives considered:**
- CSS `opacity: 0` until `.is-revealed` — fails if JS is blocked.
- Intersection Observer + GSAP without ScrollTrigger — extra code; user asked for GSAP scroll.

## 4. Timing

**Decision:** Panel `duration` ~0.55s, card starts ~0.12–0.18s later, same ease (`power2.out`). `y` offset ~24–32px. Per-row trigger `start: "top 82%"` (tune in implementation). `once: true`. No `pin`, no `scrub`.

**Rationale:** Matches 0.5–0.8s perceived block reveal and panel-before-card stagger.

## 5. Coexistence with `FadeIn`

**Decision:** **Remove `FadeIn` from each row** so GSAP owns enter motion. Keep existing `FadeIn` on the section intro (load-in only), which is not scroll-tied (FR-010).

**Rationale:** Double animation on rows would look like “all at once” on first paint.

## 6. Testing

**Decision:** Manual via `quickstart.md`. No new test runner. Check `prefers-reduced-motion` in DevTools.

**Alternatives considered:** Playwright screenshot tests — not in repo.
