import type { Metadata } from "next";
import { expertiseGroups } from "../../../content/expertise";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Architecture and leadership, AI and GenAI, cloud, data engineering, application and integration, DevOps, databases, and AI-assisted development.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <Frame>
      <PageIntro
        eyebrow="Expertise"
        title="Breadth to lead, depth to stay hands-on."
        lede="The technologies and practices I work with, from architecture and team leadership through AI, cloud, data, and application engineering."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {expertiseGroups.map((group) => (
          <article key={group.id} className="plate">
            <h2 className="font-sans text-lg font-semibold tracking-normal text-ink">{group.title}</h2>
            <p className="mt-2 leading-relaxed text-slate">{group.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Frame>
  );
}
