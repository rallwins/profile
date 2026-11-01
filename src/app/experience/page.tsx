import type { Metadata } from "next";
import Link from "next/link";
import { roles } from "../../../content/experience";
import { profile } from "../../../content/profile";
import { Frame, PageIntro, Section } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Experience",
  description: `${profile.supporting} Career history from Director of Technology back to the first engineering roles.`,
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  const recent = roles.filter((role) => role.weight === "recent");
  const early = roles.filter((role) => role.weight === "early");

  return (
    <Frame>
      <PageIntro
        eyebrow="Experience"
        title="From engineer to Director of Technology."
        lede="20+ years of building enterprise platforms and leading the teams behind them, across application, cloud, data, mobile, and AI."
      />
      <Link href="/resume" className="text-link mt-4 inline-flex min-h-11 items-center text-[0.9375rem]">
        View the résumé
      </Link>

      <div className="mt-10 space-y-12 md:mt-14 md:space-y-16">
        {recent.map((role) => (
          <article
            key={role.id}
            id={role.id}
            className="grid gap-3 border-t border-line pt-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6"
          >
            <p className="text-[0.9375rem] text-slate">
              {role.start} – {role.end}
              {role.location ? <span className="block">{role.location}</span> : null}
            </p>
            <div className="min-w-0">
              <h2 className="text-3xl leading-tight text-ink">{role.title}</h2>
              <p className="mt-1 text-lg text-slate">{role.employer}</p>
              {role.summary ? <p className="mt-4 max-w-[65ch] leading-relaxed text-ink">{role.summary}</p> : null}
              {role.achievements.length > 0 ? (
                <div className="plate mt-5">
                  <h3 className="eyebrow">{role.achievements.length > 1 ? "Key achievements" : "Key achievement"}</h3>
                  <ul className="mt-2 space-y-2 font-medium leading-snug text-ink">
                    {role.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <ul className="bullets mt-5 max-w-[65ch] text-[0.9375rem] leading-relaxed text-ink">
                {role.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {role.technologies.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
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
                  <span className="grid flex-1 gap-0.5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6">
                    <span className="text-[0.9375rem] font-normal text-slate">
                      {role.start} – {role.end}
                    </span>
                    <span>
                      {role.title} <span className="font-normal text-slate">· {role.employer}</span>
                    </span>
                  </span>
                </summary>
                <div className="pb-5 md:pl-[12.5rem]">
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
