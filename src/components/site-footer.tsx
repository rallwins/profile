import Link from "next/link";
import { profile } from "../../content/profile";
import { routes } from "@/lib/routes";
import { TrackLink } from "@/components/track-link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid w-full max-w-[76rem] gap-8 px-5 py-10 md:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-ink">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate">{profile.title}</p>
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
          <p className="text-slate">Canonical host {profile.canonical.replace("https://", "")}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <ul className="mx-auto flex w-full max-w-[76rem] flex-wrap gap-x-4 gap-y-2 px-5 py-4 text-xs text-slate md:px-8">
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
