# Content map

Source of truth: `Allwins_Rajaiah_AI_Solutions_Architect.pdf` (Allwins Kannan Rajaiah). If the résumé does not state a fact, the site does not invent it. A public LinkedIn, GitHub, or Credly value is kept only where the résumé is silent.

The public name is **Allwins Rajaiah**, matching the LinkedIn URL. The résumé header prints **Allwins Kannan Rajaiah**. The longer form appears on the résumé and visual résumé, the shorter form everywhere else.

## Verified and published

| Item | Source |
| --- | --- |
| Title line, 20+ years, professional summary | Résumé |
| Home headline "I build and lead the teams that build enterprise platforms." | Public LinkedIn About |
| LinkedIn `https://www.linkedin.com/in/allwinsrajaiah/` | Résumé |
| GitHub `https://github.com/rallwins` and the public repositories `ent_order_app`, `school-sync-ai`, `youtube_analyzer`, `face_detection`, `rag_resume`, `gro-vision-replit`, `voice_asst` | Public GitHub profile. Summaries follow each README where it is more precise than the repository description. `rallwins/profile` is this site and is not listed as a project. |
| Skill inventory | Résumé "Core Technology", in its eight groups. |
| Employers, titles, locations, dates, bullets, technology lines, key achievements | Résumé |
| Bullets and technologies for the five earlier roles | The site's earlier record. The résumé prints only title, employer, and dates for these roles and does not contradict them. |
| Education | Résumé. No years are printed, so none are shown. |
| AWS Certified AI Practitioner, exam AIF-C01 | Résumé |
| HashiCorp Certified: Terraform Associate (004) | Résumé. No credential ID or issue date is printed, so none are shown. |
| Credential ID, Credly verification URL, issued September 2026 | Public LinkedIn / Credly |
| Case-study flows and decision notes | Written to stay consistent with the résumé's two Tekizma workstreams: Enterprise Application Modernization and Databricks Data Engineering & Reconciliation |
| Recommendations | LinkedIn, quoted as written. Home excerpts are cut verbatim, and a test checks this. |

Résumé achievements are quoted:

- Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG to streamline code development, enable intelligent workflows, and improve contextual access to enterprise knowledge.
- Improved reconciliation accuracy by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.
- Delivered the official Health Plan Marketplace for New York State of Health as Solutions Architect, supporting 5 million enrollments in 2020 at a peak load of concurrent users.

## Withheld on purpose

The résumé prints a phone number, an email address, and a city (Coimbatore). None of them appears on the site, in JSON-LD, or in `public/resume.pdf`, and tests enforce this. LinkedIn is the contact route. Never copy the original résumé PDF into the repository; publish it with `npm run resume -- <path to the original>`, which redacts the contact line, re-centres the LinkedIn link, and refuses to write the file if any contact detail remains.

The résumé lists no awards, so none are published.

## Hidden

Writing holds one sample draft, so `/writing` redirects to `/` and is out of the navigation and sitemap. The MDX file and `src/lib/writing.ts` remain. To bring it back, remove the redirects in `next.config.ts` and add the route to `src/lib/routes.ts`.

## AI versus experiments

The AI page stays within the résumé's AI inventory and the uses named under Tekizma: the agentic AI engineering platform, the AI reconciliation agent, and governed, natural-language data access. Public repositories are labelled personal projects and are not described as client work.
