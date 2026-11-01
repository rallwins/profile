import Link from "next/link";
import { caseStudies } from "../../content/architecture";
import { roles } from "../../content/experience";
import { impactMetrics, practices, profile } from "../../content/profile";
import { featuredRecommendations, recommendations } from "../../content/recommendations";
import { Frame, Section } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";
import { buttonVariants } from "@/components/ui/button";

const quietLink = "text-link inline-flex min-h-11 items-center text-[0.9375rem]";

export default function HomePage() {
  const recent = roles.filter((role) => role.weight === "recent");

  return (
    <Frame>
      <div className="max-w-4xl">
        <p className="eyebrow">
          {profile.name} · {profile.role}
        </p>
        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.06] text-ink">{profile.headline}</h1>
        <p className="mt-6 max-w-[60ch] text-xl leading-relaxed text-slate">{profile.supporting}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/experience" className={buttonVariants({ variant: "primary" })}>
            View experience
          </Link>
          <TrackLink event="resume_download" href="/resume.pdf" download className={buttonVariants()}>
            Download résumé
          </TrackLink>
          <span className="flex gap-5 sm:ml-3">
            <TrackLink event="linkedin_click" href={profile.linkedin} external className={quietLink}>
              LinkedIn
            </TrackLink>
            <TrackLink event="github_click" href={profile.githubUrl} external className={quietLink}>
              GitHub
            </TrackLink>
          </span>
        </div>
      </div>

      <dl className="mt-14 grid gap-px overflow-hidden rounded-surface border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((metric) => (
          <div key={metric.figure} className="flex flex-col bg-panel p-6">
            <dd className="order-first font-serif text-5xl font-medium tracking-tight text-accent">{metric.figure}</dd>
            <dt className="mt-3 font-semibold leading-snug text-ink">{metric.label}</dt>
            <dd className="mt-1 text-[0.9375rem] leading-snug text-slate">{metric.context}</dd>
          </div>
        ))}
      </dl>

      <Section title="What I lead">
        <div className="grid gap-4 md:grid-cols-2">
          {practices.map((practice) => (
            <article key={practice.title} className="plate flex flex-col">
              <h3 className="text-lg font-semibold text-ink">{practice.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-slate">{practice.summary}</p>
              <Link href={practice.href} className={`${quietLink} mt-2 self-start`}>
                {practice.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Selected work">
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <TrackLink
              key={study.slug}
              event="case_study_opened"
              href={`/architecture#${study.slug}`}
              className="plate group flex flex-col transition-colors hover:border-accent"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-accent">{study.title}</h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-slate">{study.businessProblem}</p>
              <p className="mt-4 border-t border-line pt-4 text-[0.9375rem] font-medium leading-snug text-ink">
                {study.headlineOutcome}
              </p>
            </TrackLink>
          ))}
        </div>
      </Section>

      <Section title="Career at a glance">
        <ol className="divide-y divide-line border-y border-line">
          {recent.map((role) => (
            <li key={role.id} className="grid gap-1 py-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6">
              <p className="text-[0.9375rem] text-slate">
                {role.start} – {role.end}
              </p>
              <div>
                <h3 className="font-semibold text-ink">{role.title}</h3>
                <p className="text-slate">{role.employer}</p>
                {role.achievements[0] ? (
                  <p className="mt-2 max-w-[65ch] text-[0.9375rem] leading-relaxed text-ink">{role.achievements[0]}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        <Link href="/experience" className={`${quietLink} mt-4`}>
          See the full career history
        </Link>
      </Section>

      <Section title="What colleagues say">
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredRecommendations.map((featured) => {
            const person = recommendations.find((item) => item.id === featured.id);
            if (!person) return null;
            return (
              <figure key={featured.id} className="plate flex flex-col">
                <blockquote className="flex-1 font-serif text-lg leading-snug text-ink">“{featured.excerpt}”</blockquote>
                <figcaption className="mt-5 text-[0.9375rem] leading-snug">
                  <span className="block font-semibold text-ink">{person.name}</span>
                  <span className="mt-0.5 line-clamp-2 text-slate">{person.headline}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <Link href="/about#recommendations" className={`${quietLink} mt-4`}>
          Read all {recommendations.length} recommendations
        </Link>
      </Section>

      <section className="mt-16 rounded-surface bg-accent p-8 text-accent-ink md:mt-20 md:p-12">
        <h2 className="max-w-2xl text-3xl leading-tight md:text-[2.25rem]">{profile.contactHeadline}</h2>
        <TrackLink
          event="contact_cta"
          href="/contact"
          className="mt-6 inline-flex h-12 items-center rounded-lg bg-accent-ink px-6 text-[0.9375rem] font-semibold text-accent transition-opacity hover:opacity-90"
        >
          Get in touch
        </TrackLink>
      </section>
    </Frame>
  );
}
