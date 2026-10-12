import type { Metadata } from "next";
import Link from "next/link";
import { aiActionDiagram } from "../../../content/architecture";
import { ArchitectureCanvasLoader } from "@/components/architecture-canvas-loader";
import { DiagramReading } from "@/components/diagram-reading";
import { Frame, PageIntro } from "@/components/page-intro";

const production = [
  "Generative AI",
  "Agentic AI",
  "AgentCore Runtime",
  "Amazon Bedrock",
  "RAG",
  "MCP",
  "LLM applications",
  "Knowledge bases",
  "AI-assisted engineering",
  "Natural-language data interaction",
  "AI governance",
  "Evaluation",
  "Guardrails",
  "Langfuse",
];

export const metadata: Metadata = {
  title: "AI",
  description: "How AI is applied to enterprise engineering, data platforms, and application modernization.",
  alternates: { canonical: "/ai" },
};

export default function AiPage() {
  return (
    <Frame>
      <PageIntro
        index="05"
        eyebrow="AI"
        title="AI applied to the estate you already run."
        lede="The production practice is enterprise engineering, data platforms, and application modernization. Personal experiments are a different page and are not described as shipped work."
      />
      <section className="mt-12">
        <h2 className="font-semibold tracking-tight text-3xl">Production experience</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
          Taken from the current role and the résumé summary: AI and data modernization, integration of AI/ML with enterprise data for intelligent processing, natural-language interaction, automated documentation, and AI-assisted engineering.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {production.map((item) => (
            <li key={item} className="border-b border-line">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <ArchitectureCanvasLoader diagram={aiActionDiagram} />
      <DiagramReading diagram={aiActionDiagram} />
      <section className="plate mt-12">
        <h2 className="font-semibold tracking-tight text-2xl">Personal / experimental</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
          A local Llama-based model, a RAG system, an AI agent, grocery and product recognition, and a voice or multimodal assistant are listed as personal experiments. They are not production claims.
        </p>
        <Link href="/projects" className="mt-4 inline-block text-sm text-accent">
          Open personal projects
        </Link>
      </section>
    </Frame>
  );
}
