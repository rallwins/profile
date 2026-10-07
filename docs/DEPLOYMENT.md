# Deployment

Primary target: Vercel. The canonical URL is `https://profile.allwinsrajaiah.com`. `portfolio.allwinsrajaiah.com` is the alternate host if that name is ever preferred; the site metadata points at the profile host.

## How the names relate

```
allwinsrajaiah.com          apex, managed at the registrar
  └─ profile.allwinsrajaiah.com    CNAME or A/ALIAS to Vercel
        └─ Vercel project
              └─ Next.js (this repository, root)
```

This repository is the Next.js app at the repository root. It is not nested in another project.

## Vercel

1. Confirm the domain `allwinsrajaiah.com` is in an account you control. Create the `profile` host there only if it does not already point somewhere you intend to keep.
2. Create a Vercel project from `github.com/rallwins/profile`. Framework preset: Next.js. Root directory: the repository root. No environment variables are required for the site to build. Do not add API keys to the client.
3. Deploy the default branch (`main`). Vercel runs `next build`.
4. In the Vercel project, open **Settings → Domains** and add `profile.allwinsrajaiah.com`.
5. Copy the DNS records from that Vercel domain screen. Do not hard-code an IP from this document. Vercel’s instructions are the current ones; they change.
6. At the DNS host for `allwinsrajaiah.com`, add the records Vercel shows for the `profile` host. Leave unrelated records alone.
7. Wait until Vercel reports the domain as valid. HTTPS is issued by Vercel; do not install a separate certificate.
8. Open `https://profile.allwinsrajaiah.com` and check the homepage, `/resume`, and one article. Confirm the canonical link in the page source matches that host.

Vercel Analytics is included with `@vercel/analytics`. Enable Analytics in the project dashboard if the team wants the event stream. The package does not put a secret in the browser. Events: resume download, LinkedIn click, GitHub click, case study opened, contact CTA.

Security headers are set in `next.config.ts` for production responses.

## AWS

Build with `npm run build`. Host the output on Amplify (Next.js SSR) or, if a purely static export is required later, add `output: "export"` and host the `out` directory on S3 plus CloudFront. This app is not exported to static HTML today because the App Router server build is the Vercel path. Do not point the apex at a guessed CloudFront address.

## Cloudflare Pages

Connect the same GitHub repository. Build command `npm run build`. For Next.js on Cloudflare, use the current Cloudflare Next.js guide rather than a guessed output directory. Attach `profile.allwinsrajaiah.com` in the Pages custom-domain UI and copy the DNS records Cloudflare shows at that moment.

## Local check before a deploy

```bash
npm install
npm run lint
npm test
npm run build
npm start
```

The dev server is `npm run dev` on port 4320.
