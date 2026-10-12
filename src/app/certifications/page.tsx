import type { Metadata } from "next";
import { certifications } from "../../../content/certifications";
import { education } from "../../../content/profile";
import { Frame, PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Certifications",
  description: "AWS Certified AI Practitioner, issued September 2026, and education.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <Frame>
      <PageIntro
        index="07"
        eyebrow="Certifications"
        title="Credentials, only as recorded."
        lede="One completed certification, issued September 2026."
      />
      <ul className="mt-12 space-y-4">
        {certifications.map((item) => (
          <li key={item.id} className="plate">
            <p className="text-xs uppercase tracking-[0.14em] text-accent">
              {item.status === "completed" ? "Completed" : "Planned"}
            </p>
            <h2 className="mt-2 font-serif text-3xl">{item.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{item.note}</p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-slate">Issued</dt>
                <dd>{item.issued ?? "Not completed"}</dd>
              </div>
              <div>
                <dt className="text-slate">Exam</dt>
                <dd>{item.examCode ?? "TODO"}</dd>
              </div>
              <div>
                <dt className="text-slate">Credential ID</dt>
                <dd>{item.credentialId ?? item.note}</dd>
              </div>
              <div>
                <dt className="text-slate">Verification</dt>
                <dd>{item.verificationUrl ?? "TODO: verification link is unknown."}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <section className="mt-12 border-t border-line pt-8">
        <h2 className="font-serif text-3xl">Education</h2>
        <p className="mt-3 text-ink">{education.degree}</p>
        <p className="text-sm text-slate">
          {education.school}
          {education.years ? ` · ${education.years}` : ""}
        </p>
      </section>
    </Frame>
  );
}
