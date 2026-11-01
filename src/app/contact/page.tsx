import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../../../content/profile";
import { Frame, PageIntro } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: profile.contactHeadline,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Frame>
      <PageIntro
        eyebrow="Contact"
        title={profile.contactHeadline}
        lede="The best way to reach me is a message on LinkedIn. I'm glad to talk about engineering leadership, architecture and modernization challenges, and AI and data platform work."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <TrackLink
          event="linkedin_click"
          href={profile.linkedin}
          external
          className={buttonVariants({ variant: "primary" })}
        >
          Message me on LinkedIn
        </TrackLink>
        <TrackLink event="github_click" href={profile.githubUrl} external className={buttonVariants()}>
          GitHub
        </TrackLink>
        <Link href="/resume" className={buttonVariants()}>
          Résumé
        </Link>
      </div>
    </Frame>
  );
}
