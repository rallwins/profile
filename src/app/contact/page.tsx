import type { Metadata } from "next";
import { profile } from "../../../content/profile";
import { ContactForm } from "@/components/contact-form";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description: profile.contactHeadline,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Frame>
      <PageIntro index="09" eyebrow="Contact" title={profile.contactHeadline} lede={profile.aboutShort} />
      <ContactForm />
    </Frame>
  );
}
