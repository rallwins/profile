import Link from "next/link";
import { profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { TrackLink } from "@/components/track-link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_0.7fr] md:px-10">
        <div>
          <p className="font-serif text-4xl font-light italic text-ink">{profile.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">{profile.title}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <TrackLink event="linkedin_click" href={profile.linkedin} external>
            LinkedIn
          </TrackLink>
          <Link href="/resume" className="hover:text-accent">
            View résumé
          </Link>
          <TrackLink event="contact_cta" href="/contact">
            {profile.contactHeadline}
          </TrackLink>
          <p className="pt-3 text-slate">Canonical {profile.canonical.replace("https://", "")}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <ul className="mx-auto flex w-full max-w-5xl flex-wrap gap-x-5 gap-y-2 px-6 py-4 text-xs text-slate md:px-10">
          {routes.map((route) => (
            <li key={route.href}>
              <Link href={route.href} className="hover:text-ink">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
