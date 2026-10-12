import Link from "next/link";
import { heroDiagram } from "../../content/architecture";
import { roles } from "../../content/experience";
import { heroMetadata, profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { ArchitectureCanvasLoader } from "@/components/architecture-canvas-loader";
import { DiagramReading } from "@/components/diagram-reading";
import { Frame } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";

export default function HomePage() {
  const recent = roles.filter((role) => role.weight === "recent");

  return (
    <Frame>
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)]">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-accent">
            Technology leadership
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.5rem,8vw,6.25rem)] font-light italic leading-[0.88] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-snug text-ink">{profile.title}</p>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-slate lg:pb-2">{profile.supporting}</p>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href="/architecture" className="inline-flex h-11 items-center bg-accent px-5 text-sm text-accent-ink">
          View architecture
        </Link>
        <Link href="/experience" className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-accent">
          Explore experience
        </Link>
        <TrackLink
          event="resume_download"
          href="/resume.pdf"
          download
          className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-accent"
        >
          Download résumé
        </TrackLink>
        <TrackLink
          event="linkedin_click"
          href={profile.linkedin}
          external
          className="text-sm text-ink underline decoration-line underline-offset-4 hover:text-accent"
        >
          LinkedIn
        </TrackLink>
      </div>
      <dl className="mt-14 divide-y divide-line border-y border-line">
        {heroMetadata.map((item) => (
          <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
            <dt className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-slate">{item.label}</dt>
            <dd className="font-serif text-xl font-light text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
      <ArchitectureCanvasLoader diagram={heroDiagram} />
      <DiagramReading diagram={heroDiagram} />
      <section className="mt-20">
        <h2 className="font-serif text-4xl font-light text-ink">Recent scope</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {recent.map((role) => (
            <article key={role.id} className="plate">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-accent">
                {role.end === "Present" ? "Current" : "Previous"}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-light text-ink">{role.progression}</h3>
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
        <Link href="/experience" className="mt-6 inline-block text-sm text-accent">
          Full experience
        </Link>
      </section>
      <section className="mt-20">
        <h2 className="font-serif text-4xl font-light text-ink">Contents</h2>
        <ol className="mt-6">
          {routes
            .filter((route) => route.href !== "/")
            .map((route) => (
              <li key={route.href} className="border-t border-line">
                <Link
                  href={route.href}
                  className="grid gap-2 py-5 hover:text-accent md:grid-cols-[4rem_10rem_minmax(0,1fr)] md:items-baseline md:gap-6"
                >
                  <span className="font-serif text-2xl font-light text-accent">{route.index}</span>
                  <span className="text-ink">{route.label}</span>
                  <span className="text-sm text-slate">{route.description}</span>
                </Link>
              </li>
            ))}
        </ol>
      </section>
    </Frame>
  );
}
