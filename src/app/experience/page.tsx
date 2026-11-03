import type { Metadata } from "next";
import Link from "next/link";
import { roles } from "../../../content/experience";
import { profile } from "../../../content/profile";
import { CompanyLogo } from "@/components/company-logo";
import { Frame, PageIntro, Section } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Experience",
  description: `${profile.supporting} Career history from AI Solutions Architect back to the first engineering roles.`,
  alternates: { canonical: "/experience" },
};

function WorkDetail({
  achievements,
  responsibilities,
  technologies,
}: {
  achievements: string[];
  responsibilities: string[];
  technologies: string[];
}) {
  return (
    <>
      {achievements.length > 0 ? (
        <div className="note mt-5">
          <p className="note-label">{achievements.length > 1 ? "Key achievements" : "Key achievement"}</p>
          <ul className="mt-3 space-y-2 font-medium leading-snug text-ink">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {responsibilities.length > 0 ? (
        <ul className="bullets mt-5 max-w-[65ch] text-[0.9375rem] leading-relaxed text-ink">
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {technologies.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {technologies.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default function ExperiencePage() {
  const recent = roles.filter((role) => role.weight === "recent");
  const early = roles.filter((role) => role.weight === "early");

  return (
    <Frame>
      <PageIntro
        eyebrow="Experience"
        title="From Java developer to AI Solutions Architect."
        lede="20+ years of delivering enterprise applications, cloud-native platforms, and AI-enabled solutions, and leading the teams behind them."
      />
      <Link href="/resume" className="text-link mt-4 inline-flex min-h-11 items-center text-[0.9375rem]">
        View the résumé
      </Link>

      <div className="mt-10 space-y-8 md:mt-14 md:space-y-12">
        {recent.map((role) => (
          <article
            key={role.id}
            id={role.id}
            className="sheet grid gap-3 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6"
          >
            <div>
              <CompanyLogo id={role.id} />
              <p className="meta mt-3">
                {role.start} – {role.end}
                {role.location ? <span className="block">{role.location}</span> : null}
              </p>
            </div>
            <div className="min-w-0">
              <h2 className="text-[clamp(1.625rem,2.75vw,2.125rem)] leading-[1.15] text-ink">{role.title}</h2>
              <p className="mt-1 text-lg text-slate">{role.employer}</p>
              {role.summary ? <p className="mt-4 max-w-[65ch] leading-relaxed text-ink">{role.summary}</p> : null}
              {role.projects ? (
                role.projects.map((project) => (
                  <section key={project.title} className="mt-8 border-t border-line pt-6">
                    <h3 className="font-serif text-xl leading-tight text-ink">{project.title}</h3>
                    <WorkDetail
                      achievements={[project.achievement]}
                      responsibilities={project.responsibilities}
                      technologies={project.technologies}
                    />
                  </section>
                ))
              ) : (
                <WorkDetail
                  achievements={role.achievements}
                  responsibilities={role.responsibilities}
                  technologies={role.technologies}
                />
              )}
            </div>
          </article>
        ))}
      </div>

      <Section title="Earlier roles">
        <ul className="border-b border-line">
          {early.map((role) => (
            <li key={role.id} id={role.id}>
              <details className="disclosure">
                <summary>
                  <CompanyLogo id={role.id} />
                  <span className="grid flex-1 gap-0.5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6">
                    <span className="meta pt-1 font-normal">
                      {role.start} – {role.end}
                    </span>
                    <span>
                      {role.title} <span className="font-normal text-slate">· {role.employer}</span>
                    </span>
                  </span>
                </summary>
                <div className="pb-5 md:pl-[8rem]">
                  {role.achievements.map((item) => (
                    <p key={item} className="mb-3 max-w-[65ch] font-medium leading-snug text-ink">
                      {item}
                    </p>
                  ))}
                  <ul className="bullets max-w-[65ch] text-[0.9375rem] leading-relaxed text-ink">
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm text-slate">{role.technologies.join(" · ")}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </Section>
    </Frame>
  );
}
