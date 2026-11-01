import Link from "next/link";
import { profile } from "../../content/profile";
import { TrackLink } from "@/components/track-link";

const linkClass = "inline-flex min-h-11 items-center font-medium text-slate transition-colors hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-[75.5rem] flex-col gap-4 px-4 py-8 text-[0.9375rem] md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-serif text-lg font-medium text-ink">{profile.name}</p>
          <p className="text-slate">
            {profile.role} · © {new Date().getFullYear()}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <TrackLink event="linkedin_click" href={profile.linkedin} external className={linkClass}>
              LinkedIn
            </TrackLink>
          </li>
          <li>
            <TrackLink event="github_click" href={profile.githubUrl} external className={linkClass}>
              GitHub
            </TrackLink>
          </li>
          <li>
            <Link href="/resume" className={linkClass}>
              Résumé
            </Link>
          </li>
          <li>
            <TrackLink event="contact_cta" href="/contact" className={linkClass}>
              Contact
            </TrackLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
