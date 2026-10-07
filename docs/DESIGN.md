# Design system

Editorial technology for a director of technology. The reference is an architecture report: wide margins, a strong serif for titles, a plain sans for reading, hairline rules, and one indigo used only for emphasis. It is not a terminal, a hacker theme, a neon showcase, or a generic card template.

## Color

Tokens live in `src/app/globals.css` and switch with the `dark` class.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| paper | `#f4f1ea` | `#101218` | Page background |
| panel | `#fbfaf6` | `#171b24` | Framed figures and form fields |
| ink | `#14161c` | `#f3f0e8` | Headings and body |
| slate | `#3e4754` | `#b7c0cc` | Secondary text |
| line | `#d5d0c6` | `#2e3440` | Borders and the background grid |
| accent | `#2436b0` | `#c5d0ff` | Links, focus, the single highlight |

Slate on paper and accent on paper are aimed at WCAG 2.2 AA for normal text. Accent is never used as a large gradient field.

## Type

- **Newsreader** for headings. Optical size is left to the font; tracking stays tight.
- **Source Sans 3** for navigation, body, and diagrams.
- No monospace UI. Figure numbers use the sans at small size with wide tracking.

Scale: hero name around `clamp(3.2rem, 7vw, 5.6rem)`. Page titles `text-4xl` to `text-5xl`. Body `1.0625rem` with a relaxed line height. Measure for prose stays near 68 characters.

## Space and structure

- Content width `76rem`, horizontal padding `1.25rem` on small screens and `2rem` from `md`.
- Sections separate with a full-width hairline, not with stacked drop shadows.
- A 72px grid sits behind the page at low contrast. It is decoration, not a layout cage.
- Depth is a 1px border plus, where a figure needs it, a single soft shadow in dark mode only.

## Components

- **Report index.** Section numbers (`01`) in accent, a slash, then a small-caps eyebrow.
- **Metadata row.** A definition list with vertical rules. Not pills or badges.
- **Expertise plates.** Bordered groups. Skills are a quiet list inside the plate.
- **Diagram frame.** Caption, canvas on wide screens, and a plain-language flow that is always in the HTML.
- **Buttons.** Border and text. The accent fill is reserved for the primary action on a page.
- **Focus.** `2px` accent outline, `3px` offset, visible on keyboard focus only.

## Motion

Framer Motion is limited to a 12px fade on first view and a slow dash on diagram edges after the figure scrolls into view. `prefers-reduced-motion: reduce` removes both. Theme changes do not animate color.

## Theme

`ar-theme` in `localStorage` is `light`, `dark`, or unset. Unset follows the system preference. An inline script in the root layout sets the class before paint.

## What this system refuses

Terminal chrome, matrix rain, neon glow, cartoon illustration, stock gradient meshes, and layout patterns copied from other personal portfolios.
