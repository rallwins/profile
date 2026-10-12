import type { Metadata } from "next";
import { expertiseGroups } from "../../../content/expertise";
import { radar, radarBands, radarNote } from "../../../content/radar";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Architecture, AI, cloud, data, and application engineering groups, plus a technology radar.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <Frame>
      <PageIntro
        index="02"
        eyebrow="Expertise"
        title="Practice, grouped."
        lede="Practice groups from the résumé’s technology inventory. A skill can appear in the group the résumé gives it, and again where a role names it."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {expertiseGroups.map((group, index) => (
          <article key={group.id} className="plate">
            <p className="text-xs tracking-[0.04em] text-accent">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 font-semibold tracking-tight text-2xl text-ink">{group.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">{group.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink">
              {group.skills.map((skill) => (
                <li key={skill} className="border-b border-line">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-semibold tracking-tight text-3xl">Technology radar</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">{radarNote}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {radarBands.map((band) => (
            <div key={band} className="plate">
              <h3 className="text-xs uppercase tracking-[0.04em] text-accent">{band}</h3>
              <ul className="mt-4 space-y-2 text-ink">
                {radar
                  .filter((item) => item.band === band)
                  .map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Frame>
  );
}
