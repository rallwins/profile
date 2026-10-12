import type { Metadata } from "next";
import { experienceIntro, roles } from "../../../content/experience";
import { CareerProgression } from "@/components/career-progression";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career progression from Java developer to Director of Technology, with scope taken from the résumé.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <Frame>
      <PageIntro index="04" eyebrow="Experience" title="The progression, with the recent work in full." lede={experienceIntro} />
      <section className="mt-12">
        <h2 className="font-semibold tracking-tight text-3xl">Career progression</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate">
          Select a role. Early roles keep only what the résumé printed.
        </p>
        <div className="mt-6">
          <CareerProgression />
        </div>
      </section>
      <div className="mt-16 space-y-12">
        {roles.map((role) => (
          <article key={role.id} id={role.id} className="border-t border-line pt-8">
            <p className="text-xs uppercase tracking-[0.04em] text-slate">
              {role.start} – {role.end}
              {role.location ? ` · ${role.location}` : ""}
            </p>
            <h2 className="mt-2 font-semibold tracking-tight text-3xl text-ink">{role.title}</h2>
            <p className="mt-1 text-slate">{role.employer}</p>
            {role.weight === "early" ? (
              <p className="mt-4 max-w-2xl text-sm text-slate">{role.omittedNote}</p>
            ) : (
              <>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed">{role.architectureScope}</p>
                <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {role.achievements.length > 0 ? (
                  <div className="mt-4">
                    <h3 className="text-xs uppercase tracking-[0.04em] text-slate">Stated achievement</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      {role.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <p className="mt-4 text-sm text-slate">{role.technologies.join(" · ")}</p>
              </>
            )}
          </article>
        ))}
      </div>
    </Frame>
  );
}
