import type { Metadata } from "next";
import { progression } from "../../../content/experience";
import { education, profile, summaryParagraphs } from "../../../content/profile";
import { recommendations, recommendationsNote } from "../../../content/recommendations";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: profile.aboutShort,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Frame>
      <PageIntro
        index="01"
        eyebrow="About"
        title="Director of Technology and Solutions Architect."
        lede={profile.aboutShort}
      />
      <p className="mt-6 text-sm text-slate">Résumé name: {profile.fullName}.</p>
      <div className="mt-10 max-w-3xl space-y-4 text-lg leading-relaxed text-ink">
        {summaryParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-semibold tracking-tight text-3xl">Timeline</h2>
        <ol className="mt-6 max-w-3xl border-l border-line pl-6">
          {progression.map((role) => (
            <li key={role.id} className="relative pb-6">
              <span className="absolute -left-[1.7rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.04em] text-slate">
                {role.start} – {role.end}
              </p>
              <p className="mt-1 text-ink">
                {role.title}
                <span className="text-slate"> · {role.employer}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-semibold tracking-tight text-3xl">Education</h2>
        <p className="mt-4 text-ink">{education.degree}</p>
        <p className="mt-1 text-sm text-slate">
          {education.school}
          {education.years ? <span> · {education.years}</span> : null}
        </p>
      </section>
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-semibold tracking-tight text-3xl">What colleagues say</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">{recommendationsNote}</p>
        <ul className="mt-6 grid gap-3 lg:grid-cols-2">
          {recommendations.map((item) => (
            <li key={item.id} className="plate">
              <blockquote>
                <p className="text-base leading-relaxed text-ink">“{item.quote}”</p>
                <footer className="mt-3 text-sm font-semibold text-slate">{item.attribution}</footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>
    </Frame>
  );
}
