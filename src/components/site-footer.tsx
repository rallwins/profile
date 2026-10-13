import Link from "next/link";
import { profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { TrackLink } from "@/components/track-link";

export function SiteFooter() {
  return (
    <footer className="mt-auto px-4 pb-6 md:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-[1.5rem] bg-panel px-6 py-10 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-ink">{profile.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">{profile.title}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <TrackLink event="linkedin_click" href={profile.linkedin} external>
              LinkedIn
            </TrackLink>
            <Link href="/resume" className="hover:text-accent">
              View résumé
            </Link>
            <Link href="/visual-resume" className="hover:text-accent">
              Visual résumé
            </Link>
            <TrackLink event="contact_cta" href="/contact">
              {profile.contactHeadline}
            </TrackLink>
            <p className="pt-3 font-normal text-slate">Canonical {profile.canonical.replace("https://", "")}</p>
          </div>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6 text-xs text-slate">
          {routes.map((route) => (
            <li key={route.href}>
              <Link href={route.href} className="inline-flex rounded-full px-3 py-1.5 hover:bg-paper hover:text-ink">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
