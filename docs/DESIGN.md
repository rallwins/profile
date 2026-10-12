# Design system

A limestone atelier for a director of technology. The page is a cool stone field with a fixed identity rail, a soft high-contrast serif for names, and a geometric sans for reading. One deep teal is the only accent. It is not a terminal, a hacker theme, a neon showcase, or a graph-paper report.

## Color

Tokens live in `src/app/globals.css` and switch with the `dark` class.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| paper | `#e7eef2` | `#0e1418` | Page background |
| panel | `#f7fafb` | `#162026` | Identity rail, plates, fields |
| ink | `#142028` | `#e7eef2` | Headings and body |
| slate | `#3d4c57` | `#a9bac6` | Secondary text |
| line | `#c5d0d8` | `#2a3944` | Rules and dividers |
| accent | `#1f4e5f` | `#d7e4ea` | Links, focus, the single highlight, filled actions |

Slate on paper and accent on paper are aimed at WCAG 2.2 AA for normal text. In dark mode the accent lightens so it stays readable on the stone field, and filled actions use `accent-ink` for the label. Accent is never a gradient or a glow.

## Type

- **Fraunces** for names, page titles, and large index numerals. Light weight, with italics reserved for the name.
- **Outfit** for navigation, body, labels, and diagrams.
- No monospace UI. Small labels use the sans with wide tracking.

Scale: the home name is `clamp(3.5rem, 8vw, 6.25rem)` and italic. Page titles are `text-4xl` to `text-5xl` at a light weight. Body stays near `1.0625rem` with a relaxed line height. Prose measure stays near 40rem.

## Space and structure

- On wide screens a 18rem identity rail is fixed at the left: name, section index, theme, résumé, and the canonical host. Content sits in the remaining column, capped at `64rem` (`max-w-5xl`), with `1.5rem` padding on small screens and `2.5rem` from `md`.
- Below `xl`, the rail collapses to a sticky top bar and a focus-trapped menu.
- Sections separate with space and a single rule. Plates are panel fills with a 3px accent inset on the left edge.
- Depth is that inset mark. There is no background grid and no drop-shadow stack.

## Components

- **Index numeral.** A large Fraunces figure in accent beside the page title. The eyebrow is small-caps sans, without a slash.
- **Specification row.** Home metadata is a stacked definition list: a fixed label column and a serif value. Not a five-column rule grid.
- **Plates.** Expertise, roles, case notes, and colleague themes share the left accent mark.
- **Diagram frame.** Caption, canvas on wide screens, and a plain-language flow that is always in the HTML. Canvas nodes repeat the left accent mark.
- **Actions.** The primary action is a solid accent fill. Secondary actions are underlined text.
- **Focus.** `2px` accent outline, `3px` offset, visible on keyboard focus only.

## Motion

Diagram edges use a slow dash after the figure scrolls into view, and only when the canvas is shown. `prefers-reduced-motion: reduce` removes animation, transition, and smooth scrolling. Theme changes do not animate color.

## Theme

`ar-theme` in `localStorage` is `light`, `dark`, or unset. Unset follows the system preference. An inline script in the root layout sets the class before paint.

## What this system refuses

Terminal chrome, matrix rain, neon glow, cartoon illustration, stock gradient meshes, graph-paper backgrounds, and layout patterns copied from other personal portfolios.
