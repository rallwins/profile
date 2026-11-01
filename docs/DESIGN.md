# Design system

One look, in light and dark. The audience, in priority order, is executive recruiters and hiring leaders scanning quickly, then CTOs and technical evaluators checking depth. Pages lead with proof and keep depth behind disclosure.

Tokens live in `src/app/globals.css`. `ar-theme` is `light`, `dark`, or unset (system).

## Color

The structure follows a design-board idea: white sheets on a light canvas with a faint grid. One cobalt accent marks the emphasis in headlines. Every text pair meets WCAG 2.2 AA. The résumé PDF and the printed visual résumé stay navy.

| Token | Light | Dark |
| --- | --- | --- |
| canvas | `#fbfbfb` | `#111114` |
| paper | `#ffffff` | `#18181c` |
| panel | `#f6f6f3` | `#212126` |
| ink | `#18181c` | `#f2f2ef` |
| slate | `#4a4a52` | `#b6b6bc` |
| line | ink at 13% | white at 14% |
| accent | `#1f4bb8` | `#a3b8ff` |
| accent ink | `#ffffff` | `#111114` |

## Type and structure

Young Serif sets `h1`, `h2`, and card titles. Figtree sets everything else, with a 17px body and a measure near 65 characters. Dates use the system monospace. The container is 75.5rem. Page intros sit on the canvas, and each `Section` is a white sheet.

Shared utilities: `sheet` (section surface), `plate` (card), `eyebrow`, `meta` (monospace detail), `tag`, `text-link`, `.note` with `.note-label` (accent-outlined highlight box), `.bullets`, and `.disclosure` for `<details>`. `CompanyLogo` shows employer logos from `public/logos`. The ASIC, 3i Infotech, Star4ce, and ASD files are HD redraws of low-resolution originals, so replace them if official artwork becomes available. `buttonVariants` in `src/components/ui/button.tsx` holds the two button styles. Each screen has one filled button as its main action.

## Interaction

Interactive targets are at least 44px. Focus is a 2px accent outline with a 3px offset. Hover changes color only. `prefers-reduced-motion: reduce` removes animation. The skip link slides in over the header on focus, so it never shifts layout.

The visual résumé prints on one A4 landscape page.

## What this system refuses

Glass effects, gradient washes, visitor-selectable styles, numbered navigation, terminal chrome, fake analytics, and copy that explains how the site was built.
