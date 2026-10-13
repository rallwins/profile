import type { Metadata } from "next";
import { profile } from "../../../content/profile";
import { Frame, PageIntro } from "@/components/page-intro";
import { TrackLink } from "@/components/track-link";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé for ${profile.name}, generated from verified facts.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Frame>
      <PageIntro
        index="10"
        eyebrow="Résumé"
        title="The record, without the gaps filled in."
        lede="Generated from the résumé. Early-career roles keep the title, employer, and dates the résumé prints. Contact on this copy is LinkedIn."
      />
      <TrackLink
        event="resume_download"
        href="/resume.pdf"
        download
        className="mt-8 inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink"
      >
        Download résumé
      </TrackLink>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="plate mt-8 h-[80vh] w-full p-0"
        aria-label="Résumé of Allwins Rajaiah"
      >
        <p className="p-4 text-sm">
          The viewer could not display the PDF.{" "}
          <a className="text-accent" href="/resume.pdf">
            Download the résumé
          </a>
          .
        </p>
      </object>
    </Frame>
  );
}
