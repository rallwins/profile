import type { Metadata } from "next";
import { adrs, caseStudies, diagrams } from "../../../content/architecture";
import { ArchitectureCanvasLoader } from "@/components/architecture-canvas-loader";
import { DiagramReading } from "@/components/diagram-reading";
import { Frame, PageIntro } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Case studies, architecture diagrams, and decision notes for data platforms and application modernization.",
  alternates: { canonical: "/architecture" },
};

export default function ArchitecturePage() {
  const figures = diagrams.filter((diagram) => diagram.id !== "operating-model" && diagram.id !== "ai-action");

  return (
    <Frame>
      <PageIntro
        index="03"
        eyebrow="Architecture"
        title="Systems, drawn as decisions."
        lede="Three case studies from the current data, modernization, and AI work. Numbers appear only where the résumé states them."
      />
      <div className="mt-12 space-y-16">
        {caseStudies.map((study) => {
          const diagram = figures.find((item) => item.id === study.diagramId);
          return (
            <article key={study.slug} id={study.slug} className="border-t border-line pt-10">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">Case study</p>
              <h2 className="mt-2 font-serif text-4xl text-ink">{study.title}</h2>
              <p className="mt-4 max-w-3xl text-slate">{study.context}</p>
              <TrackLink event="case_study_opened" href={`#${study.slug}`} className="mt-3 inline-block text-sm text-accent">
                Open this case
              </TrackLink>
              <dl className="mt-8 grid gap-6 md:grid-cols-2">
                {[
                  ["Business problem", study.businessProblem],
                  ["Architecture", study.architecture],
                  ["Security", study.security],
                  ["Scalability", study.scalability],
                  ["Data flow", study.dataFlow],
                  ["Outcome", study.outcome],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs uppercase tracking-[0.14em] text-slate">{label}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="mt-8 text-xs uppercase tracking-[0.14em] text-slate">Technology choices</h3>
              <p className="mt-2 text-sm text-ink">{study.technologyChoices.join(" · ")}</p>
              <h3 className="mt-6 text-xs uppercase tracking-[0.14em] text-slate">Design decisions</h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink">
                {study.designDecisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-xs uppercase tracking-[0.14em] text-slate">Trade-offs</h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink">
                {study.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {diagram ? (
                <>
                  <ArchitectureCanvasLoader diagram={diagram} />
                  <DiagramReading diagram={diagram} />
                </>
              ) : null}
            </article>
          );
        })}
      </div>
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-3xl">Architecture decision notes</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate">
          Reasoning consistent with the case studies. These are not signed client records and they do not add results beyond the résumé.
        </p>
        <div className="mt-8 space-y-10">
          {adrs.map((adr) => (
            <article key={adr.slug} id={adr.slug} className="border border-line bg-panel p-6">
              <h3 className="font-serif text-2xl">{adr.title}</h3>
              <dl className="mt-4 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate">Context</dt>
                  <dd className="mt-1">{adr.context}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate">Decision</dt>
                  <dd className="mt-1">{adr.decision}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate">Alternatives</dt>
                  <dd className="mt-1">{adr.alternatives.join(" ")}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate">Trade-offs</dt>
                  <dd className="mt-1">{adr.tradeoffs.join(" ")}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-slate">Outcome</dt>
                  <dd className="mt-1">{adr.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </Frame>
  );
}
