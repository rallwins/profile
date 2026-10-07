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
        lede="Generated from the résumé and the facts supplied with this profile. Early-career detail that was not on the source is omitted. A phone number is not printed."
      />
      <TrackLink
        event="resume_download"
        href="/resume.pdf"
        download
        className="mt-8 inline-flex h-11 items-center border border-accent bg-accent px-4 text-sm text-accent-ink"
      >
        Download résumé
      </TrackLink>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className="mt-8 h-[80vh] w-full border border-line bg-panel"
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
