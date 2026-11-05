# Architecture

A static Next.js App Router site. Content lives in typed modules. Pages are server components. Client components are limited to theme, navigation chrome, expandable quotes, analytics clicks, and the React Flow canvas with its disclosure.

## Routing

| Route | Role |
| --- | --- |
| `/` | Hero, impact metrics, practices, selected work, recent roles, recommendation excerpts, contact call to action |
| `/about` | Summary, how I lead, timeline, education and credentials (`#credentials`), all recommendations (`#recommendations`) |
| `/experience` | Recent roles in full, earlier roles behind disclosure |
| `/architecture` | Case studies, diagrams, decision notes |
| `/ai` | Applied AI, the agent-boundary diagram, platforms |
| `/expertise` | The résumé's ten skill groups |
| `/projects` | Personal GitHub projects |
| `/contact` | LinkedIn as the contact route, with GitHub and the résumé |
| `/resume` | In-browser PDF viewer and download |
| `/visual-resume` | One-page HTML visual résumé, linked from `/resume` |

`src/lib/routes.ts` is the single route list. The header reads the `nav` entries, and the sitemap reads them all.

Redirects in `next.config.ts`: `/certifications` to `/about#credentials` (permanent), and `/writing` and `/writing/:slug` to `/` (temporary, while Writing is hidden).

## Data flow

```
content/*.ts  ──► server pages and JSON-LD
content/blog/*.mdx ──► src/lib/writing.ts (gray-matter) ──► MDXRemote (hidden by redirect)
original résumé ──► scripts/redact-resume.mjs ──► public/resume.pdf ──► /resume and the download links
public/visual-resume.pdf ──► the /visual-resume download (exported from that page)
```

Nothing is fetched at request time. There is no database and no API route.

Next.js 16 Cache Components stay off, and `partialPrefetching` stays off with them because that flag requires Cache Components. `params` on dynamic pages are awaited, which Next.js 16 requires.

## Diagrams

`content/architecture.ts` describes nodes and edges. Each node has a logical label, a physical label, and a description.

- `diagram-flow.tsx` draws a static top-to-bottom flow in HTML and SVG at every screen size. Rows come from the edges, so branches stay accurate, and colour marks each node's role.
- Every diagram also renders an ordered HTML list with the same descriptions.

## Interaction boundaries

| Client module | Why |
| --- | --- |
| `theme-provider.tsx` | Persists light, dark, or system |
| `site-header.tsx` | Pathname and mobile dialog |
| `expandable-quote.tsx` | Clamps long recommendations |
| `track-link.tsx` | Vercel Analytics `track()` |

Radix Dialog traps focus in the mobile nav.

## SEO and analytics

Root metadata sets the canonical host, Open Graph, and Twitter card. `sitemap.ts` and `robots.ts` are generated. JSON-LD emits `Person` and `WebSite`.

`@vercel/analytics` is loaded from `@vercel/analytics/next`. Event names: `resume_download`, `linkedin_click`, `github_click`, `case_study_opened`, `contact_cta`, `credential_verify`. No analytics secret is shipped to the client.

## Security

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS, and a Content-Security-Policy in production.
