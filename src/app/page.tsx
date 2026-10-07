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
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Technology leadership</p>
      <h1 className="mt-4 max-w-5xl font-serif text-[clamp(3.1rem,7vw,5.5rem)] leading-[0.95] text-ink">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-snug text-ink">{profile.title}</p>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{profile.supporting}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/architecture" className="inline-flex h-11 items-center border border-accent bg-accent px-4 text-sm text-accent-ink">
          View architecture
        </Link>
        <Link href="/experience" className="inline-flex h-11 items-center border border-line px-4 text-sm text-ink">
          Explore experience
        </Link>
        <TrackLink
          event="resume_download"
          href="/resume.pdf"
          download
          className="inline-flex h-11 items-center border border-line px-4 text-sm text-ink"
        >
          Download résumé
        </TrackLink>
        <TrackLink
          event="linkedin_click"
          href={profile.linkedin}
          external
          className="inline-flex h-11 items-center border border-line px-4 text-sm text-ink"
        >
          LinkedIn
        </TrackLink>
      </div>
      <dl className="mt-12 grid border-y border-line sm:grid-cols-2 lg:grid-cols-5">
        {heroMetadata.map((item) => (
          <div key={item.label} className="border-b border-line px-0 py-4 sm:px-4 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <dt className="text-xs uppercase tracking-[0.14em] text-slate">{item.label}</dt>
            <dd className="mt-2 text-sm text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
      <ArchitectureCanvasLoader diagram={heroDiagram} />
      <DiagramReading diagram={heroDiagram} />
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-3xl text-ink">Recent scope</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {recent.map((role) => (
            <article key={role.id} className="border border-line bg-panel p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-accent">{role.end === "Present" ? "Current" : "Previous"}</p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{role.progression}</h3>
              <p className="mt-1 text-sm text-slate">
                {role.employer} · {role.start} – {role.end}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink">{role.architectureScope}</p>
              {role.achievements[0] ? <p className="mt-4 text-sm leading-relaxed text-slate">{role.achievements[0]}</p> : null}
            </article>
          ))}
        </div>
        <Link href="/experience" className="mt-6 inline-block text-sm text-accent">
          Full experience
        </Link>
      </section>
      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-3xl text-ink">Contents</h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {routes
            .filter((route) => route.href !== "/")
            .map((route) => (
              <li key={route.href}>
                <Link href={route.href} className="flex flex-col gap-1 py-4 hover:text-accent md:flex-row md:items-baseline md:gap-8">
                  <span className="w-16 text-xs tracking-[0.16em] text-accent">{route.index}</span>
                  <span className="w-40 text-ink">{route.label}</span>
                  <span className="text-sm text-slate">{route.description}</span>
                </Link>
              </li>
            ))}
        </ol>
      </section>
    </Frame>
  );
}
