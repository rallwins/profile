import type { Metadata } from "next";
import { profile } from "../../../content/profile";
import { personalProjects, personalProjectsIntro } from "../../../content/projects";
import { TrackLink } from "@/components/track-link";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Projects",
  description: "Public GitHub repositories for Allwins Rajaiah, excluding this site.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Frame>
      <PageIntro index="06" eyebrow="Projects" title="Public repositories." lede={personalProjectsIntro} />
      <p className="mt-6 text-sm text-slate">
        Profile:{" "}
        <TrackLink event="github_click" href={profile.githubUrl} external>
          github.com/rallwins
        </TrackLink>
      </p>
      <div className="mt-12 space-y-8">
        {personalProjects.map((project) => (
          <article key={project.slug} className="plate">
            <p className="text-xs uppercase tracking-[0.04em] text-accent">{project.language}</p>
            <h2 className="mt-2 font-semibold tracking-tight text-3xl">{project.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink">
              {project.description ??
                `${project.language} repository named ${project.name}. GitHub publishes no description.`}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.04em] text-slate">
              Updated {project.updated}
            </p>
            <p className="mt-4">
              <TrackLink event="github_click" href={project.url} external>
                {project.url.replace("https://", "")}
              </TrackLink>
            </p>
          </article>
        ))}
      </div>
    </Frame>
  );
}
