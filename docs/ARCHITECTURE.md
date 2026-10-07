# Architecture

A static Next.js App Router site. Content lives in typed modules and one MDX note. Pages are server components. Client components are limited to theme, navigation chrome, the contact form, career selection, analytics clicks, and the React Flow canvas.

## Routing

| Route | Role |
| --- | --- |
| `/` | Executive hero, metadata, interactive operating model, proof points, report index |
| `/about` | Narrative, timeline, education, awards, recommendation placeholders |
| `/expertise` | Five expertise plates and the technology radar |
| `/architecture` | Case studies, diagrams, ADRs |
| `/experience` | Weighted roles and the career progression |
| `/ai` | Production AI practice versus personal experiments |
| `/projects` | Personal / experimental projects only |
| `/certifications` | Completed certification and education |
| `/writing` | Architecture Notes index |
| `/writing/[slug]` | MDX article |
| `/contact` | Mailto form |
| `/resume` | In-browser PDF viewer |

`src/lib/routes.ts` is the single nav list. The header, footer, sitemap, and homepage index read it.

## Data flow

```
content/*.ts  ──► server pages and JSON-LD
content/blog/*.mdx ──► src/lib/writing.ts (gray-matter) ──► MDXRemote
public/resume.pdf ──► /resume and the download link
```

Nothing is fetched at request time. `generateStaticParams` prebuilds article routes. There is no database and no API route.

Next.js 16 Cache Components stay off, and `partialPrefetching` stays off with them because that flag requires Cache Components. The site is fully static. `params` on dynamic pages are awaited, which Next.js 16 requires.

## Diagrams

`content/architecture.ts` describes nodes and edges. Each node has a logical label, a physical label, and a description.

- Wide screens mount `@xyflow/react` for pan, zoom, node selection, a logical/physical toggle, and a flow highlight.
- Every diagram also renders an ordered HTML flow with `<details>` so the same descriptions exist without the canvas, including on small screens and with JavaScript disabled.
- The canvas is a client enhancement. It does not replace the text.

## Interaction boundaries

| Client module | Why |
| --- | --- |
| `theme-provider.tsx` | Persists light, dark, or system |
| `site-header.tsx` | Pathname, mobile dialog, theme control |
| `architecture-canvas.tsx` | React Flow |
| `career-progression.tsx` | Selects one role |
| `contact-form.tsx` | Sanitizes input and opens `mailto:` |
| `track-link.tsx` | Vercel Analytics `track()` |

Radix Dialog traps focus in the mobile nav. The career control is a tab list with `aria-selected`, not a fake quote widget.

## SEO and analytics

Root metadata sets the canonical host, Open Graph, and Twitter card. `sitemap.ts` and `robots.ts` are generated from the route list. JSON-LD emits `Person`, `WebSite`, and `Article` (the sample note is typed as an article and flagged `status: draft` in the page, not as a prior publication).

`@vercel/analytics` is loaded from `@vercel/analytics/next`. Event names: `resume_download`, `linkedin_click`, `github_click`, `case_study_opened`, `contact_cta`. No analytics secret is shipped to the client.

## Security

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS, and a Content-Security-Policy in production. The contact form strips control characters and length-limits fields before building a `mailto` URL. There is no server that stores messages.
