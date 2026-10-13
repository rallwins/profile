# Design system

The site has three selectable styles. Glass Dashboard is the initial look when `ar-style` is unset. Light and dark mode still apply to each style. The choice is stored in `localStorage` and set on `<html data-style>` before paint.

On 13 Oct 2026 each Dribbble shot returned an AWS WAF challenge (`x-amzn-waf-action: challenge`), so no pixels were sampled. The styles follow the titles and the named technique only.

| Style | `data-style` | Inferred from |
| --- | --- | --- |
| Glass Funnel | `glass-funnel` | Glassmorphism Funnel Analytics Dashboard. A vertical cyan wash, translucent panels, blur, light borders, and a stage edge. No charts. |
| Glass Dashboard | `glass-dashboard` | Glassmorphism Dashboard UI Design. Soft blue and lavender light, frosted panels, blur, light borders, restrained shadow. |
| Hire Sheet | `hire-sheet` | hire-io Smart Resume. A compact paper sheet: warm stock, hairline rules, tight radius, solid fills. |

Tokens live in `src/app/globals.css`. Glass panels use `backdrop-filter`. `prefers-reduced-transparency: reduce` drops the blur and uses solid fills. `prefers-reduced-motion: reduce` still removes animation and keeps the background attached to the page. Focus is a `2px` accent outline with a `3px` offset.

## Glass Dashboard color

Chosen for WCAG 2.2 AA on the frosted surface, not sampled from the shot.

| Token | Light | Dark |
| --- | --- | --- |
| ink | `#172033` | `#f8fafc` |
| slate | `#3c4b61` | `#d5deea` |
| accent | `#1e40af` | `#dbeafe` |
| accent ink | `#ffffff` | `#0f172a` |

Glass Funnel uses a darker cyan (`#0c4a5e` / `#c8f4ff`). Hire Sheet uses a document green (`#1e3a32`) in light mode and a warm tan (`#e4d2b0`) in dark mode. Filled actions use `accent-ink` for the label.

## Type and structure

Plus Jakarta Sans remains the only face. Hire Sheet tightens the name and section spacing so the page reads as one résumé sheet. Glass styles keep the rounded plates. The identity rail, mobile bar, and visual résumé all use the same tokens.

The visual résumé career block is a vertical timeline: one spine, a dated node per role, roles in the order already published.

## Theme and style

`ar-theme` is `light`, `dark`, or unset (system). `ar-style` is `glass-funnel`, `glass-dashboard`, or `hire-sheet`. Unset style is Glass Dashboard. The switcher offers those three labels and no fourth option.

## What this system refuses

Terminal chrome, neon glow, fake analytics, copied portfolio wording, and layout content taken from the reference shots. Glass depth stays restrained. Hire Sheet does not invent a second résumé.
