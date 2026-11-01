# Content map

Source of truth: `Allwins_Rajaiah_Director_of_Technology.pdf` (Allwins Kannan Rajaiah). If the résumé does not state a fact, the site does not invent it. A public LinkedIn, GitHub, or Credly value is kept only where the résumé is silent.

The public name is **Allwins Rajaiah**, matching the LinkedIn URL. The résumé header prints **Allwins Kannan Rajaiah**. The longer form appears on the résumé and visual résumé, the shorter form everywhere else.

## Verified and published

| Item | Source |
| --- | --- |
| Title line, 20+ years, professional summary | Résumé |
| Home headline "I build and lead the teams that build enterprise platforms." | Public LinkedIn About |
| LinkedIn `https://www.linkedin.com/in/allwinsrajaiah/` | Résumé |
| GitHub `https://github.com/rallwins` and the public repositories `ent_order_app`, `school-sync-ai`, `youtube_analyzer`, `face_detection`, `rag_resume`, `gro-vision-replit`, `voice_asst` | Public GitHub profile. Summaries follow each README where it is more precise than the repository description. `rallwins/profile` is this site and is not listed as a project. |
| Skill inventory | Résumé "Core Technology", in its ten groups. GCP is working knowledge. Azure appears only as Databricks on Azure. |
| Employers, titles, locations, dates, bullets, technology lines, key achievements | Résumé |
| Bullets and technologies for the five earlier roles | The site's earlier record. The résumé prints only title, employer, and dates for these roles and does not contradict them. |
| Education | Résumé. No years are printed, so none are shown. |
| AWS Certified AI Practitioner, exam AIF-C01 | Résumé |
| Credential ID, Credly verification URL, issued September 2026 | Public LinkedIn / Credly |
| Case-study flows and decision notes | Written to stay consistent with the résumé's Tekizma and modernization work |
| Recommendations | LinkedIn, quoted as written. Home excerpts are cut verbatim, and a test checks this. |

Résumé achievements are quoted:

- Enhanced reconciliation accuracy by 50% through the design and deployment of automated validation and exception-handling frameworks.
- Reduced development effort by 40% through reusable dbt/Databricks frameworks and AI-assisted engineering.
- Delivered the official Health Plan Marketplace for New York State of Health, supporting 5 million enrollments in 2020.

## Withheld on purpose

The résumé prints a phone number and an email address. Neither appears on the site, in JSON-LD, or in the generated PDF, and tests enforce this. LinkedIn is the contact route. The attached résumé PDF must not be copied to `public/`; run `npm run resume` instead.

The résumé lists no awards, so none are published.

## Hidden

Writing holds one sample draft, so `/writing` redirects to `/` and is out of the navigation and sitemap. The MDX file and `src/lib/writing.ts` remain. To bring it back, remove the redirects in `next.config.ts` and add the route to `src/lib/routes.ts`.

## AI versus experiments

The AI page stays within the résumé's AI inventory and the uses named under Tekizma: natural-language data interaction, automated documentation, and AI-assisted engineering. Public repositories are labelled personal projects and are not described as client work.
