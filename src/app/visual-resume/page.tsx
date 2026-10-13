import type { Metadata } from "next";
import { profile } from "../../../content/profile";
import { visualResume } from "../../../content/visual-resume";
import { TrackLink } from "@/components/track-link";
import "./visual-resume.css";

export const metadata: Metadata = {
  title: "Visual résumé",
  description: `Visual résumé for ${visualResume.name}, Director of Technology and Solutions Architect.`,
  alternates: { canonical: "/visual-resume" },
};

export default function VisualResumePage() {
  return (
    <article className="visual-resume">
      <header className="vr-id">
        <div>
          <h1 className="vr-name">{visualResume.name}</h1>
          <p className="vr-tagline">{visualResume.tagline}</p>
          <ul className="vr-contact">
            <li>
              <a href={`mailto:${profile.email}`}>{visualResume.email}</a>
            </li>
            <li>
              <TrackLink event="linkedin_click" href={profile.linkedin} external>
                {visualResume.linkedinLabel}
              </TrackLink>
            </li>
          </ul>
        </div>
        <ul className="vr-marks">
          {visualResume.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      <div className="vr-band vr-top">
        <section className="vr-panel" aria-labelledby="vr-summary">
          <h2 id="vr-summary">PROFESSIONAL SUMMARY</h2>
          <ul className="vr-summary">
            {visualResume.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="vr-panel" aria-labelledby="vr-tech">
          <h2 id="vr-tech">CORE TECHNOLOGY</h2>
          <ul className="vr-tech">
            {visualResume.technologies.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="vr-timeline" aria-labelledby="vr-career">
        <h2 id="vr-career">CAREER TIMELINE & EXPERIENCE</h2>
        <ol>
          {visualResume.roles.map((role) => (
            <li key={`${role.employer}-${role.start}`} className="vr-role">
              <p className="vr-when">
                <time>{role.start}</time>
                {" – "}
                {role.end === "Present" ? "Present" : <time>{role.end}</time>}
              </p>
              <h3>{role.employer}</h3>
              <p>{role.title}</p>
              <ul>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <div className="vr-band vr-lower">
        <section className="vr-panel" aria-labelledby="vr-impact">
          <h2 id="vr-impact">KEY ACHIEVEMENTS & IMPACT</h2>
          <ul className="vr-achieve">
            {visualResume.achievements.map((item) => (
              <li key={item.figure}>
                <strong>{item.figure}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="vr-panel" aria-labelledby="vr-recent">
          <h2 id="vr-recent">RECENT EXPERIENCE HIGHLIGHTS</h2>
          <div className="vr-recent-head">
            <p>{visualResume.recent.heading}</p>
            <p>
              <time>{visualResume.recent.when}</time>
            </p>
          </div>
          <ul className="vr-points">
            {visualResume.recent.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="vr-close">
        <section className="vr-panel" aria-labelledby="vr-education">
          <h2 id="vr-education">EDUCATION</h2>
          <p>{visualResume.education.degree}</p>
          <p>{visualResume.education.school}</p>
        </section>
        <section className="vr-panel" aria-labelledby="vr-cert">
          <h2 id="vr-cert">CERTIFICATION</h2>
          <p>{visualResume.certification.name}</p>
          <p>{visualResume.certification.code}</p>
        </section>
      </div>
    </article>
  );
}
