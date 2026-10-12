import type { Metadata } from "next";
import { personalProjects, personalProjectsIntro } from "../../../content/projects";
import { GithubPlaceholder } from "@/components/github-placeholder";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal and experimental projects. Repositories and demos are not published.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Frame>
      <PageIntro index="06" eyebrow="Projects" title="Personal experiments, labeled as such." lede={personalProjectsIntro} />
      <div className="mt-12 space-y-8">
        {personalProjects.map((project) => (
          <article key={project.slug} className="plate">
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Personal / experimental</p>
            <h2 className="mt-2 font-serif text-3xl">{project.name}</h2>
            <dl className="mt-4 grid gap-4 text-sm leading-relaxed md:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-slate">Problem</dt>
                <dd className="mt-1">{project.problem}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-slate">Architecture</dt>
                <dd className="mt-1">{project.architecture}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-slate">Technology</dt>
                <dd className="mt-1">
                  {project.technology.join(", ")}. {project.technologyTodo}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-slate">What I learned</dt>
                <dd className="mt-1">{project.learnedTodo}</dd>
              </div>
            </dl>
            <div className="mt-4 flex flex-col gap-2">
              <GithubPlaceholder />
              <p className="text-sm text-slate">Demo — TODO: a demo URL is not published.</p>
            </div>
          </article>
        ))}
      </div>
    </Frame>
  );
}
