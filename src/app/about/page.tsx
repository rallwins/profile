import type { Metadata } from "next";
import { certifications } from "../../../content/certifications";
import { roles } from "../../../content/experience";
import { education, profile, summaryParagraphs } from "../../../content/profile";
import { recommendations, recommendationsNote } from "../../../content/recommendations";
import { CompanyLogo } from "@/components/company-logo";
import { ExpandableQuote } from "@/components/expandable-quote";
import { Frame, PageIntro, Section } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";

export const metadata: Metadata = {
  title: "About",
  description: profile.aboutShort,
  alternates: { canonical: "/about" },
};

const approach = [
  {
    title: "Teams",
    text: "Team structure, hiring, and mentoring across development and QA, with clear ownership from requirements through production.",
  },
  {
    title: "Delivery",
    text: "Agile execution, sprint planning, test strategy, and release readiness, so quality is planned into delivery.",
  },
  {
    title: "Governance",
    text: "Standards, design reviews, security, observability, and risk management, in partnership with business and technology stakeholders.",
  },
];

export default function AboutPage() {
  return (
    <Frame>
      <PageIntro eyebrow="About" title="Engineering leader and hands-on architect." lede={profile.aboutShort} />
      <div className="mt-10 max-w-[65ch] space-y-4 leading-relaxed text-ink">
        {summaryParagraphs.slice(1).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <Section title="How I lead">
        <div className="grid gap-4 md:grid-cols-3">
          {approach.map((item) => (
            <article key={item.title} className="plate">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Career timeline">
        <ol className="divide-y divide-line border-y border-line">
          {roles.map((role) => (
            <li key={role.id} className="flex items-center gap-4 py-4 sm:gap-6">
              <CompanyLogo id={role.id} />
              <div className="min-w-0">
                <p className="meta">
                  {role.start} – {role.end}
                </p>
                <p className="text-ink">
                  <span className="font-medium">{role.title}</span>
                  <span className="text-slate"> · {role.employer}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="credentials" title="Education and credentials">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="plate">
            <h3 className="text-lg font-semibold text-ink">{education.degree}</h3>
            <p className="mt-2 text-slate">
              {education.school}
              {education.years ? ` · ${education.years}` : ""}
            </p>
          </article>
          {certifications.map((item) => (
            <article key={item.id} className="plate">
              <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              <p className="mt-2 text-slate">
                {item.examCode} · Issued {item.issued}
              </p>
              <p className="mt-1 break-all text-sm text-slate">Credential ID {item.credentialId}</p>
              {item.verificationUrl ? (
                <TrackLink
                  event="credential_verify"
                  href={item.verificationUrl}
                  external
                  className="text-link mt-1 inline-flex min-h-11 items-center text-[0.9375rem]"
                >
                  Verify on Credly
                </TrackLink>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section id="recommendations" title="What colleagues say" intro={recommendationsNote}>
        <ol className="gap-4 md:columns-2">
          {recommendations.map((item) => (
            <li key={item.id} className="plate mb-4 break-inside-avoid">
              <blockquote>
                <ExpandableQuote quote={item.quote} />
                <footer className="mt-4 border-t border-line pt-4 text-[0.9375rem] leading-snug">
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-slate">{item.headline}</p>
                  <p className="mt-1 text-sm text-slate">{item.dated}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ol>
      </Section>
    </Frame>
  );
}
