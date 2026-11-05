import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { profile } from "../../../content/profile";
import { visualResume, type VisualIcon } from "../../../content/visual-resume";
import { TrackLink } from "@/components/track-link";
import "./visual-resume.css";

export const metadata: Metadata = {
  title: "Visual résumé",
  description: `Visual résumé for ${visualResume.name}, ${profile.role}.`,
  alternates: { canonical: "/visual-resume" },
};

const logos: Record<string, string> = {
  tekizma: "/logos/tekizma.jpg",
  asd: "/logos/asd.png",
  marlabs: "/logos/marlabs.png",
  mapview: "/logos/mapview.png",
  star4ce: "/logos/star4ce.png",
  amtex: "/logos/amtex.svg",
  "3i-infotech": "/logos/3i-infotech.png",
  asic: "/logos/asic.png",
};

const iconPaths: Record<VisualIcon | "summary" | "career" | "trophy" | "target" | "education" | "badge", string> = {
  years: "M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8zM8 17l-2 5 6-2 6 2-2-5",
  cloud: "M7 18a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.5 1.6A3.8 3.8 0 0 1 17.5 18z",
  ai: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M6 6h12v12H6zM10 10h4v4h-4z",
  data: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  team: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.2a6.5 6.5 0 0 1 3.5 5.8",
  architecture: "M3 21h18M5 21V10l4-3v14M9 21V4l6 3v14M15 21V9l4 2v10",
  app: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  devops: "M7.5 8.5a3.5 3.5 0 1 0 0 7c2.5 0 6.5-7 9-7a3.5 3.5 0 1 1 0 7c-2.5 0-6.5-7-9-7z",
  database: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  assist: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8z",
  summary: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  career: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5a3 3 0 0 0 3.5 4M16 6h3.5a3 3 0 0 1-3.5 4M12 13v4M8 20h8M9.5 17h5",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01",
  education: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v5",
  badge: "M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM9 13l-2 8 5-2.5 5 2.5-2-8",
};

const githubMark =
  "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z";

function Icon({ name, className }: { name: keyof typeof iconPaths; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d={iconPaths[name]} />
    </svg>
  );
}

function Heading({ id, icon, children }: { id: string; icon: keyof typeof iconPaths; children: string }) {
  return (
    <h2 id={id} className="vr-heading">
      <span className="vr-heading-icon">
        <Icon name={icon} />
      </span>
      {children}
    </h2>
  );
}

const careerOldestFirst = [...visualResume.roles].reverse();

export default function VisualResumePage() {
  return (
    <div className="vr-page">
      <div className="vr-actions">
        <TrackLink event="resume_download" href="/visual-resume.pdf" download className="vr-download">
          Download visual résumé
        </TrackLink>
      </div>
      <article className="visual-resume">
        <header className="vr-id">
          <p className="vr-watermark" aria-hidden="true">
            {visualResume.watermark}
          </p>
          <div className="vr-id-main">
            <h1 className="vr-name">
              {visualResume.firstName} <span>{visualResume.lastName}</span>
            </h1>
            <p className="vr-tagline">{visualResume.tagline}</p>
            <ul className="vr-contact">
              <li>
                <span className="vr-in" aria-hidden="true">
                  in
                </span>
                <TrackLink event="linkedin_click" href={profile.linkedin} external>
                  {visualResume.linkedinLabel}
                </TrackLink>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="vr-gh">
                  <path d={githubMark} />
                </svg>
                <TrackLink event="github_click" href={profile.githubUrl} external>
                  {visualResume.githubLabel}
                </TrackLink>
              </li>
            </ul>
          </div>
          <ul className="vr-marks">
            {visualResume.highlights.map((item) => (
              <li key={item.label}>
                <Icon name={item.icon} className="vr-mark-icon" />
                <span>
                  {item.figure ? <strong>{item.figure}</strong> : null}
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </header>

        <div className="vr-top">
          <section className="vr-panel" aria-labelledby="vr-summary">
            <Heading id="vr-summary" icon="summary">
              Professional summary
            </Heading>
            <ul className="vr-summary">
              {visualResume.summary.map((item) => (
                <li key={item.lead}>
                  <strong>{item.lead}</strong> {item.rest}
                </li>
              ))}
            </ul>
          </section>
          <section className="vr-panel" aria-labelledby="vr-tech">
            <Heading id="vr-tech" icon="architecture">
              Core technology
            </Heading>
            <ul className="vr-tech">
              {visualResume.technologies.map((item) => (
                <li key={item.name}>
                  <strong style={{ "--tone": item.color } as CSSProperties}>
                    <Icon name={item.icon} />
                    {item.name}
                  </strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="vr-panel vr-timeline" aria-labelledby="vr-career">
          <Heading id="vr-career" icon="career">
            Career timeline & experience
          </Heading>
          <ol>
            {careerOldestFirst.map((role) => (
              <li key={`${role.employer}-${role.start}`} className="vr-role">
                <p className="vr-when">
                  <time>{role.start}</time> – {role.end === "Present" ? "Present" : <time>{role.end}</time>}
                </p>
                <span className="vr-dot" aria-hidden="true" />
                <div className="vr-role-card">
                  <span className="vr-logo">
                    <Image src={logos[role.logo]} alt="" width={96} height={36} unoptimized />
                  </span>
                  <h3>{role.employer}</h3>
                  <p className="vr-title">{role.title}</p>
                  <ul>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="vr-lower">
          <div className="vr-lower-left">
            <section className="vr-panel" aria-labelledby="vr-impact">
              <Heading id="vr-impact" icon="trophy">
                Key achievements & impact
              </Heading>
              <ul className="vr-achieve">
                {visualResume.achievements.map((item) => (
                  <li key={item.title} style={{ "--tone": item.color, "--tint": item.tint } as CSSProperties}>
                    <span className="vr-achieve-top">
                      <span className="vr-achieve-icon">
                        <Icon name={item.icon} />
                      </span>
                      {item.figure ? <strong className="vr-figure">{item.figure}</strong> : <strong>{item.title}</strong>}
                    </span>
                    <span>{item.figure ? item.title : item.text}</span>
                  </li>
                ))}
              </ul>
            </section>
            <div className="vr-close">
              <section className="vr-panel" aria-labelledby="vr-education">
                <Heading id="vr-education" icon="education">
                  Education
                </Heading>
                <p className="vr-strong">{visualResume.education.degree}</p>
                <p>{visualResume.education.school}</p>
              </section>
              <section className="vr-panel" aria-labelledby="vr-cert">
                <Heading id="vr-cert" icon="badge">
                  Certification
                </Heading>
                <ul className="vr-certs">
                  {visualResume.certifications.map((item) => (
                    <li key={item.name}>
                      <span className="vr-cert-logo">
                        <Image src={item.logo} alt="" width={64} height={32} unoptimized />
                      </span>
                      <span>
                        <span className="vr-strong">{item.name}</span> <span className="vr-code">{item.code}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <section className="vr-panel" aria-labelledby="vr-recent">
            <Heading id="vr-recent" icon="target">
              Recent experience highlights
            </Heading>
            <div className="vr-recent-head">
              <p>
                <strong>{visualResume.recent.employer}</strong> | {visualResume.recent.title}
              </p>
              <p>
                <time>{visualResume.recent.when}</time>
              </p>
            </div>
            <div className="vr-recent-cols">
              {visualResume.recent.columns.map((column) => (
                <div key={column.heading}>
                  <h3>{column.heading}</h3>
                  <ul className="vr-points">
                    {column.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
