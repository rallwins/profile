import Link from "next/link";
import { heroDiagram } from "../../content/architecture";
import { roles } from "../../content/experience";
import { heroMetadata, profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { ArchitectureCanvasLoader } from "@/components/architecture-canvas-loader";
import { DiagramReading } from "@/components/diagram-reading";
import { Frame } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";

const secondaryAction =
  "inline-flex h-11 items-center rounded-full bg-panel px-5 text-sm font-semibold text-ink";

export default function HomePage() {
  const recent = roles.filter((role) => role.weight === "recent");

  return (
    <Frame>
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">Technology leadership</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.75rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-snug text-ink">{profile.title}</p>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-slate lg:pb-2">{profile.supporting}</p>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/architecture"
          className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink"
        >
          View architecture
        </Link>
        <Link href="/experience" className={secondaryAction}>
          Explore experience
        </Link>
        <TrackLink event="resume_download" href="/resume.pdf" download className={secondaryAction}>
          Download résumé
        </TrackLink>
        <Link href="/visual-resume" className={secondaryAction}>
          Visual résumé
        </Link>
        <TrackLink event="linkedin_click" href={profile.linkedin} external className={secondaryAction}>
          LinkedIn
        </TrackLink>
      </div>
      <dl className="mt-12 grid gap-3 sm:grid-cols-2">
        {heroMetadata.map((item) => (
          <div key={item.label} className="rounded-[1.25rem] bg-panel px-5 py-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-slate">{item.label}</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
      <ArchitectureCanvasLoader diagram={heroDiagram} />
      <DiagramReading diagram={heroDiagram} />
      <section className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">Recent scope</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {recent.map((role) => (
            <article key={role.id} className="plate">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-accent">
                {role.end === "Present" ? "Current" : "Previous"}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{role.progression}</h3>
              <p className="mt-2 text-sm text-slate">
                {role.employer} · {role.start} – {role.end}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink">{role.architectureScope}</p>
              {role.achievements[0] ? (
                <p className="mt-4 text-sm leading-relaxed text-slate">{role.achievements[0]}</p>
              ) : null}
            </article>
          ))}
        </div>
        <Link href="/experience" className="mt-6 inline-block text-sm font-semibold text-accent">
          Full experience
        </Link>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">Contents</h2>
        <ol className="mt-6 grid gap-3">
          {routes
            .filter((route) => route.href !== "/")
            .map((route) => (
              <li key={route.href} className="rounded-[1.25rem] bg-panel">
                <Link
                  href={route.href}
                  className="grid gap-2 px-5 py-4 hover:text-accent md:grid-cols-[4rem_10rem_minmax(0,1fr)] md:items-baseline md:gap-6"
                >
                  <span className="text-sm font-semibold text-accent">{route.index}</span>
                  <span className="font-semibold text-ink">{route.label}</span>
                  <span className="text-sm text-slate">{route.description}</span>
                </Link>
              </li>
            ))}
        </ol>
      </section>
    </Frame>
  );
}
