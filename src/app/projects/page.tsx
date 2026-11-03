import type { Metadata } from "next";
import { profile } from "../../../content/profile";
import { projectArchitecture } from "../../../content/project-diagrams";
import { personalProjects, personalProjectsIntro } from "../../../content/projects";
import { DiagramFlow } from "@/components/diagram-flow";
import { TrackLink } from "@/components/track-link";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects by Allwins Rajaiah on GitHub: platform engineering, retrieval, computer vision, and voice interfaces.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Frame>
      <PageIntro eyebrow="Projects" title="Personal projects, built in the open." lede={personalProjectsIntro} />
      <TrackLink
        event="github_click"
        href={profile.githubUrl}
        external
        className="text-link mt-4 inline-flex min-h-11 items-center text-[0.9375rem]"
      >
        See my GitHub profile
      </TrackLink>
      <div className="mt-10 grid gap-4 md:grid-cols-2 md:items-start">
        {personalProjects.map((project) => {
          const architecture = projectArchitecture[project.slug];
          return (
            <article key={project.slug} className="plate flex flex-col">
              <h2 className="font-sans text-lg font-semibold tracking-normal text-ink">{project.name}</h2>
              <p className="mt-2 leading-relaxed text-slate">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
              {architecture ? (
                <details className="disclosure mt-4 border-b border-line" open>
                  <summary>Architecture</summary>
                  <div className="pb-5">
                    <DiagramFlow diagram={architecture.diagram} />
                    <TrackLink
                      event="github_click"
                      href={architecture.source}
                      external
                      className="text-link mt-2 inline-flex min-h-11 items-center text-[0.875rem]"
                    >
                      Source: the repository&apos;s documentation
                    </TrackLink>
                  </div>
                </details>
              ) : null}
              <TrackLink
                event="github_click"
                href={project.url}
                external
                className="text-link mt-2 inline-flex min-h-11 items-center self-start text-[0.9375rem]"
              >
                View {project.name} on GitHub
              </TrackLink>
            </article>
          );
        })}
      </div>
    </Frame>
  );
}
