import type { Metadata } from "next";
import { adrs, caseStudies, diagrams } from "../../../content/architecture";
import { DiagramDisclosure } from "@/components/diagram-disclosure";
import { DiagramReading } from "@/components/diagram-reading";
import { Frame, PageIntro, Section } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Case studies, architecture diagrams, and decision notes for data platforms, application modernization, and AI on enterprise data.",
  alternates: { canonical: "/architecture" },
};

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-ink">{title}</h3>
      <ul className="bullets mt-2 text-[0.9375rem] leading-relaxed text-ink">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function DetailText({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{text}</p>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <Frame>
      <PageIntro
        eyebrow="Architecture"
        title="Systems, drawn as decisions."
        lede="Three case studies from my data, modernization, and AI work. Client details are withheld; these describe the patterns used."
      />
      <nav aria-label="Case studies" className="mt-6">
        <ul className="flex flex-col gap-x-6 sm:flex-row sm:flex-wrap">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <a href={`#${study.slug}`} className="text-link inline-flex min-h-11 items-center text-[0.9375rem]">
                {study.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#decisions" className="text-link inline-flex min-h-11 items-center text-[0.9375rem]">
              Decision notes
            </a>
          </li>
        </ul>
      </nav>

      {caseStudies.map((study) => {
        const diagram = diagrams.find((item) => item.id === study.diagramId);
        return (
          <section key={study.slug} id={study.slug} className="sheet mt-12 md:mt-16">
            <p className="eyebrow">Case study</p>
            <h2 className="mt-3 text-[clamp(1.625rem,2.75vw,2.125rem)] leading-[1.15] text-ink">{study.title}</h2>
            <p className="mt-4 max-w-[65ch] leading-relaxed text-slate">{study.context}</p>
            <dl className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                ["Problem", study.businessProblem],
                ["Approach", study.architecture],
                ["Outcome", study.outcome],
              ].map(([label, value]) => (
                <div key={label} className={label === "Outcome" ? "note" : "plate"}>
                  <dt className={label === "Outcome" ? "note-label" : "eyebrow"}>{label}</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
              {study.technologyChoices.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-b border-line">
              <details className="disclosure">
                <summary>Decisions, trade-offs, and security</summary>
                <div className="grid gap-6 pb-6 md:grid-cols-2">
                  <DetailList title="Design decisions" items={study.designDecisions} />
                  <DetailList title="Trade-offs" items={study.tradeoffs} />
                  <DetailText title="Security" text={study.security} />
                  <DetailText title="Scalability" text={study.scalability} />
                </div>
              </details>
              {diagram ? (
                <DiagramDisclosure diagram={diagram}>
                  <DiagramReading diagram={diagram} />
                </DiagramDisclosure>
              ) : null}
            </div>
          </section>
        );
      })}

      <Section id="decisions" title="Decision notes" intro="The reasoning behind two choices that recur in this work.">
        <div className="border-b border-line">
          {adrs.map((adr) => (
            <details key={adr.slug} id={adr.slug} className="disclosure">
              <summary>{adr.title}</summary>
              <div className="grid gap-6 pb-6 md:grid-cols-2">
                <DetailText title="Context" text={adr.context} />
                <DetailText title="Decision" text={adr.decision} />
                <DetailList title="Alternatives considered" items={adr.alternatives} />
                <DetailList title="Trade-offs" items={adr.tradeoffs} />
                <DetailText title="Outcome" text={adr.outcome} />
              </div>
            </details>
          ))}
        </div>
      </Section>
    </Frame>
  );
}
