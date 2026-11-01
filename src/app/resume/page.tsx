import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../../../content/profile";
import { Frame, PageIntro } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${profile.name}, ${profile.role}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Frame>
      <PageIntro eyebrow="Résumé" title="Résumé" lede={profile.supporting} />
      <div className="mt-8 flex flex-wrap gap-3">
        <TrackLink
          event="resume_download"
          href="/resume.pdf"
          download
          className={buttonVariants({ variant: "primary" })}
        >
          Download PDF
        </TrackLink>
        <Link href="/visual-resume" className={buttonVariants()}>
          One-page visual version
        </Link>
      </div>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="plate mt-8 h-[80vh] w-full p-0"
        aria-label="Résumé of Allwins Rajaiah"
      >
        <p className="p-6">
          Your browser can&apos;t display the PDF here.{" "}
          <a className="text-link" href="/resume.pdf">
            Download the résumé
          </a>
          .
        </p>
      </object>
    </Frame>
  );
}
