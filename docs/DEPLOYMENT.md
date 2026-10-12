# Deployment

Primary target: Vercel. The canonical URL is `https://allwinsrajaiah.com`. `www.allwinsrajaiah.com` is attached on the same project and should redirect to the apex. Production deploys from `main`.

Until the custom domain resolves, the existing production alias is `https://profile-cyan-zeta.vercel.app`.

## How the names relate

```
allwinsrajaiah.com                 apex, canonical, DNS at Hostinger
  └─ www.allwinsrajaiah.com        redirects to the apex
        └─ Vercel project `profile`
              └─ Next.js (this repository, root)
```

This repository is the Next.js app at the repository root. It is not nested in another project.

## Vercel

1. The Vercel project is `profile` on account `allwinsrs-1112`, team `self-adec`.
2. Framework preset: Next.js. Root directory: the repository root. No environment variables are required for the site to build. Do not add API keys to the client.
3. Deploy the default branch (`main`). Vercel runs `next build`.
4. In the project domains, attach `allwinsrajaiah.com` as the primary domain and `www.allwinsrajaiah.com` so www redirects to the apex.
5. Copy the DNS records from the Vercel domain screen at the moment of attachment. Do not reuse an older project CNAME, and do not hard-code an IP from this document. Vercel’s instructions are the current ones; they change.
6. At Hostinger hPanel for `allwinsrajaiah.com`, add the records Vercel shows. Leave unrelated records alone.
7. Wait until the names resolve and Vercel reports the domains as valid. HTTPS is issued by Vercel.
8. Open `https://allwinsrajaiah.com` and check the homepage, `/resume`, and one article. Confirm the canonical link in the page source matches that host.

Vercel Analytics is included with `@vercel/analytics`. Enable Analytics in the project dashboard if the team wants the event stream. The package does not put a secret in the browser. Events: resume download, LinkedIn click, GitHub click, case study opened, contact CTA.

Security headers are set in `next.config.ts` for production responses.

## AWS

Build with `npm run build`. Host the output on Amplify (Next.js SSR) or, if a purely static export is required later, add `output: "export"` and host the `out` directory on S3 plus CloudFront. This app is not exported to static HTML today because the App Router server build is the Vercel path.

## Cloudflare Pages

Connect the same GitHub repository. Build command `npm run build`. For Next.js on Cloudflare, use the current Cloudflare Next.js guide rather than a guessed output directory. Attach the apex in the Pages custom-domain UI and copy the DNS records Cloudflare shows at that moment.

## Local check before a deploy

```bash
npm install
npm run lint
npm test
npm run build
npm start
```

The dev server is `npm run dev` on port 4320.
