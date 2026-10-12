# Design system

A flat profile for a director of technology. Surfaces are solid, corners are generous, and one blue is the only accent. It is not a terminal, a hacker theme, a neon showcase, or a finance-app clone: there are no balances, payment cards, or charts.

The visual reference was the Dribbble shot [Finance Mobile App Light Mode](https://dribbble.com/shots/18647371-Finance-Mobile-App-Light-Mode). On 12 Oct 2026 that page returned an AWS WAF JavaScript challenge (`x-amzn-waf-action: challenge`) to both a plain fetch and headless Chrome, so no colors, radii, or letterforms were sampled from the image. The only usable title is “Finance Mobile App Light Mode.” The system below follows that light-mode intent and standard flat-design rules: solid fills, no gradients, no drop shadows, hairline or no borders, generous radius, and one accent.

## Color

Tokens live in `src/app/globals.css` and switch with the `dark` class. They are a flat palette chosen for WCAG 2.2 AA contrast. They are not claimed to match the blocked shot.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| paper | `#f2f4f7` | `#121418` | Page background |
| panel | `#ffffff` | `#1b1f26` | Rail, plates, fields, footer |
| ink | `#1c1e21` | `#f3f5f8` | Headings and body |
| slate | `#5c6570` | `#b6bec8` | Secondary text |
| line | `#e3e6eb` | `#2c323b` | Hairline dividers and field borders |
| accent | `#1b4fbf` | `#c5d4ff` | Links, focus, the current nav item, filled actions |

Slate on paper and accent on paper meet WCAG 2.2 AA for normal text. In dark mode the accent lightens so it stays readable on the field, and filled actions use `accent-ink` for the label. Accent is a solid fill. It is never a gradient or a glow.

## Type

- **Plus Jakarta Sans** for names, titles, navigation, body, labels, and diagrams.
- Semibold for names and headings. Regular for body. No italics and no serif.
- No monospace UI. Small labels use the same sans, semibold, with short tracking (`0.04em`–`0.06em`).

Scale: the home name is `clamp(2.75rem, 6vw, 4.25rem)` at semibold. Page titles are `text-4xl` to `text-5xl`. Section titles are `text-3xl`. Body stays near `1.0625rem` with a relaxed line height. Prose measure stays near 40rem.

## Space and structure

- On wide screens the identity rail is a white surface, `18rem` wide, inset `0.75rem` from the viewport, with a `1.5rem` radius. It holds the name, section index, theme, résumé, and the canonical host. Content sits in the remaining column, capped at `64rem` (`max-w-5xl`), with `1.5rem` padding on small screens and `2.5rem` from `md`.
- Below `xl`, the rail collapses to a solid sticky top bar and a focus-trapped menu with a rounded leading edge.
- Plates are panel fills with a `1.25rem` radius. Separation comes from the gray field and the white surface. There is no inset accent bar, no drop shadow, and no page grid.
- Hairline `line` borders are used for field edges, the mobile bar, the footer link row, and a few lists. Most grouping uses space and fill instead.

## Components

- **Index numeral.** A solid accent pill beside the page title, not a display figure. The eyebrow is semibold sans.
- **Fact tiles.** Home metadata is a grid of rounded panel tiles: label, then a semibold value.
- **Plates.** Expertise, roles, case notes, and colleague themes share the same rounded panel.
- **Diagram frame.** Caption, canvas on wide screens, and a plain-language flow that is always in the HTML. Canvas nodes are rounded panels with a hairline border. The selected node uses an accent border. The canvas itself is a solid plate.
- **Actions.** The primary action is a solid accent pill. Secondary actions are panel pills or accent text.
- **Navigation.** The current item is a solid accent pill. Inactive items are text on the rail.
- **Focus.** `2px` accent outline, `3px` offset, visible on keyboard focus only.

## Motion

Diagram edges use a slow dash after the figure scrolls into view, and only when the canvas is shown. `prefers-reduced-motion: reduce` removes animation, transition, and smooth scrolling. Theme changes do not animate color.

## Theme

`ar-theme` in `localStorage` is `light`, `dark`, or unset. Unset follows the system preference. An inline script in the root layout sets the class before paint.

## What this system refuses

Terminal chrome, matrix rain, neon glow, drop shadows, gradients, cartoon illustration, graph-paper backgrounds, fake finance widgets, and layout patterns copied from other personal portfolios.
