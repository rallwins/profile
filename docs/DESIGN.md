# Design system

One look, in light and dark. The audience, in priority order, is executive recruiters and hiring leaders scanning quickly, then CTOs and technical evaluators checking depth. Pages lead with proof and keep depth behind disclosure.

Tokens live in `src/app/globals.css`. `ar-theme` is `light`, `dark`, or unset (system).

## Color

Navy matches the résumé, so the PDF and the site read as one brand. Every text pair meets WCAG 2.2 AA.

| Token | Light | Dark |
| --- | --- | --- |
| paper | `#ffffff` | `#0f1720` |
| panel | `#f5f7fa` | `#18222e` |
| ink | `#14202e` | `#eef2f6` |
| slate | `#4a5868` | `#a9b6c4` |
| line | `#dde3ea` | `#2b3846` |
| accent | `#1a365d` | `#9cc2f0` |
| accent ink | `#ffffff` | `#0f1720` |

## Type and structure

Source Serif 4 sets `h1` and `h2`. Inter sets everything else, with a 17px body and a measure near 65 characters. The container is 70rem. Surfaces use 1px hairlines rather than shadows, with an 8–12px radius.

Shared utilities: `plate` (card), `eyebrow`, `tag`, `text-link`, `.bullets`, and `.disclosure` for `<details>`. `buttonVariants` in `src/components/ui/button.tsx` holds the two button styles. Each screen has one filled button as its main action.

## Interaction

Interactive targets are at least 44px. Focus is a 2px accent outline with a 3px offset. Hover changes color only. `prefers-reduced-motion: reduce` removes animation. The skip link slides in over the header on focus, so it never shifts layout.

The visual résumé prints on one A4 landscape page.

## What this system refuses

Glass effects, gradient washes, visitor-selectable styles, numbered navigation, terminal chrome, fake analytics, and copy that explains how the site was built.
