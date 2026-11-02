import type { Metadata } from "next";
import Link from "next/link";
import { aiActionDiagram } from "../../../content/architecture";
import { expertiseGroups } from "../../../content/expertise";
import { DiagramFlow } from "@/components/diagram-flow";
import { DiagramReading } from "@/components/diagram-reading";
import { Frame, PageIntro, Section } from "@/components/page-intro";

const uses = [
  {
    title: "Natural-language data interaction",
    text: "People ask questions of enterprise data directly, with retrieval and guardrails in the path.",
  },
  {
    title: "Automated documentation",
    text: "Generative AI integrated with data platforms to keep documentation produced as part of the work.",
  },
  {
    title: "AI-assisted engineering",
    text: "AI in the engineering workflow, which together with reusable dbt/Databricks frameworks reduced development effort by 40%.",
  },
];

function skillsFor(id: string) {
  return expertiseGroups.find((group) => group.id === id)?.skills ?? [];
}

export const metadata: Metadata = {
  title: "AI",
  description: "How Generative and Agentic AI are applied to enterprise engineering, data platforms, and application modernization.",
  alternates: { canonical: "/ai" },
};

export default function AiPage() {
  return (
    <Frame>
      <PageIntro
        eyebrow="AI"
        title="AI applied to the systems you already run."
        lede="I treat AI as part of enterprise engineering: integrated with trusted data, governed, and evaluated. Retrieval and context come first, and agents act only inside a defined boundary."
      />

      <Section title="Where I apply it">
        <div className="grid gap-4 lg:grid-cols-3">
          {uses.map((use) => (
            <article key={use.title} className="plate">
              <h3 className="text-lg font-semibold text-ink">{use.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{use.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={aiActionDiagram.title}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <DiagramFlow diagram={aiActionDiagram} />
          <DiagramReading diagram={aiActionDiagram} />
        </div>
      </Section>

      <Section title="Platforms and practices">
        <h3 className="font-semibold text-ink">AI & GenAI</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {skillsFor("ai").map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="mt-6 font-semibold text-ink">AI-assisted development</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {skillsFor("ai-assisted").map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[65ch] text-slate">
          I also build personal AI experiments in the open.{" "}
          <Link href="/projects" className="text-link">
            See my projects
          </Link>
          .
        </p>
      </Section>
    </Frame>
  );
}
