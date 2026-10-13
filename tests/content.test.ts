import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { awards } from "../content/awards";
import { certifications } from "../content/certifications";
import { progression, roles } from "../content/experience";
import { expertiseGroups } from "../content/expertise";
import { personalProjects } from "../content/projects";
import { visualResume } from "../content/visual-resume";
import { education, profile } from "../content/profile";
import { recommendations, recommendationsNote } from "../content/recommendations";
import { radar } from "../content/radar";

describe("verified profile facts", () => {
  it("keeps the public identity and contact that were supplied", () => {
    expect(profile.name).toBe("Allwins Rajaiah");
    expect(profile.fullName).toBe("Allwins Kannan Rajaiah");
    expect("email" in profile).toBe(false);
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/allwinsrajaiah/");
    expect(profile.canonical).toBe("https://allwinsrajaiah.com");
    expect(profile.title).toContain("AI | Cloud | Data | Full Stack");
    expect(education.school).toBe("Amrita Institute, Bharathiar University, India");
    expect(education.degree).toBe("B.E., Computer Science & Engineering");
    expect(education.years).toBeNull();
    expect(awards).toEqual([]);
    expect(profile.githubUrl).toBe("https://github.com/rallwins");
    expect(profile.seoTitle).toBe(
      "Allwins Rajaiah | Solutions Architect | Director of Technology | AI | Cloud | Data",
    );
  });

  it("uses the recorded employers and does not invent extras", () => {
    expect(roles.map((role) => role.employer)).toEqual([
      "Tekizma Inc.",
      "Advanced Software Design, Inc.",
      "Marlabs Software Pvt. Ltd.",
      "MapView Geographical Solutions (P) Ltd",
      "Star4ce Technologies Inc",
      "Amtex Systems",
      "3i Infotech",
      "Asic Infotech Pvt Ltd",
    ]);
    expect(roles.find((role) => role.id === "star4ce")?.end).toBe("Sep 2009");
    expect(roles.find((role) => role.id === "3i-infotech")?.end).toBe("Jan 2007");
    expect(roles.find((role) => role.id === "amtex")?.title).toBe("Senior Programmer Analyst");
    expect(roles.find((role) => role.id === "asic")?.title).toBe("Software engineer");
    expect(roles.find((role) => role.id === "tekizma")?.start).toBe("Sep 2024");
    expect(roles.find((role) => role.id === "marlabs")?.employer).toBe("Marlabs Software Pvt. Ltd.");
  });

  it("keeps the supplied early-career responsibilities", () => {
    const mapview = roles.find((role) => role.id === "mapview");
    expect(mapview?.achievements[0]).toBe(
      "Implemented geographical solutions to replace Google Maps for Saudi Space Research Centre.",
    );
    expect(mapview?.responsibilities[0]).toContain("Saudi Space Research Centre");
    expect(roles.find((role) => role.id === "star4ce")?.responsibilities[1]).toContain("Warner Brothers");
  });

  it("publishes the fourteen recommendations newest first", () => {
    expect(recommendations.map((item) => item.name)).toEqual([
      "Anoop Madhusudanan",
      "Previn Kutty",
      "Ramesh Kumar",
      "Sarang Kanase",
      "Banish K.K",
      "Hari Kumar",
      "Nitin Naithani",
      "Patrick Rice",
      "Mario Papi",
      "Naresh Patti",
      "Rajan Tawate",
      "Ushasri P",
      "B Narayana Bhat",
      "Eric Violland",
    ]);
    expect(recommendations[0]?.quote.startsWith("Allwins is very proactive in his approach.")).toBe(true);
    expect(recommendations[1]?.quote.startsWith("I know him as a very self-motivated individual")).toBe(true);
    expect(recommendations.at(-1)?.quote).toContain("hundred percent effort");
    expect(recommendationsNote).toContain("newest first");
    const completed = certifications.find((item) => item.status === "completed");
    expect(completed?.name).toBe("AWS Certified AI Practitioner");
    expect(completed?.issued).toBe("September 2026");
    expect(completed?.examCode).toBe("AIF-C01");
    expect(completed?.credentialId).toBe("cd4be8c7c3ea48aca09bc7a181355061");
    expect(completed?.verificationUrl).toBe(
      "https://www.credly.com/earner/earned/badge/496bc744-8636-4032-9eb0-975867c4f0d5",
    );
    expect(certifications.some((item) => item.id === "planned-slot" || item.status === "planned")).toBe(
      false,
    );
  });

  it("keeps the radar aligned with the résumé inventory", () => {
    expect(radar.filter((item) => item.band === "Core").map((item) => item.name)).toEqual([
      "AWS",
      "GCP",
      "Databricks",
      "Java",
      "Spring Boot",
      "SQL",
      "PySpark",
    ]);
    expect(radar.find((item) => item.name === "GCP")?.band).toBe("Core");
    expect(radar.some((item) => item.name === "Azure")).toBe(false);
    const tekizma = roles.find((role) => role.id === "tekizma");
    expect(tekizma?.technologies).not.toContain("Azure");
    expect(tekizma?.responsibilities.join(" ")).toContain("Design cloud architectures in AWS");
    expect(tekizma?.achievements[0]).toBe(
      "Enhanced reconciliation accuracy by 50% through the design and deployment of automated validation and exception-handling frameworks.",
    );
    const skills = expertiseGroups.flatMap((group) => group.skills);
    expect(skills).toContain("Langfuse");
    expect(skills).toContain("GCP");
    expect(skills).not.toContain("Azure");
  });

  it("lists latest roles first and links only the visible public repositories", () => {
    expect(roles[0]?.employer).toBe("Tekizma Inc.");
    expect(roles.at(-1)?.employer).toBe("Asic Infotech Pvt Ltd");
    expect(progression.map((role) => role.id)).toEqual(roles.map((role) => role.id));
    expect(visualResume.roles.map((role) => role.employer)).toEqual([
      "Tekizma Inc.",
      "Advanced Software Design",
      "Marlabs Software",
      "MapView Geographical Solutions (P) Ltd",
      "Star4ce Technologies Inc",
      "Amtex Systems",
      "3i Infotech",
      "Asic Infotech Pvt Ltd",
    ]);
    expect(visualResume.roles[4]?.end).toBe("Sep 2009");
    expect(visualResume.roles[6]?.end).toBe("Jan 2007");
    expect(personalProjects.map((project) => project.url)).toEqual([
      "https://github.com/rallwins/local-slm-chat",
      "https://github.com/rallwins/rag_replit",
      "https://github.com/rallwins/rag_resume",
      "https://github.com/rallwins/voice_asst",
    ]);
    expect(personalProjects.map((project) => project.language)).toEqual([
      "Python",
      "TypeScript",
      "HTML",
      "Python",
    ]);
    for (const project of personalProjects) {
      expect(project.description).toBeNull();
      expect(project.label).toContain("no description");
      expect(project.url).not.toContain("/profile");
    }
  });

  it("does not publish a phone number or a public email address", () => {
    const pdf = readFileSync(new URL("../public/resume.pdf", import.meta.url));
    const generator = readFileSync(new URL("../scripts/generate-resume.mjs", import.meta.url), "utf8");
    const blob = Buffer.concat([
      pdf,
      Buffer.from(JSON.stringify({ profile, roles, certifications })),
      Buffer.from(generator),
    ]).toString("latin1");
    expect(pdf.subarray(0, 5).toString("utf8")).toBe("%PDF-");
    expect(generator).toContain("Tekizma Inc.");
    expect(blob).not.toContain("95666");
    expect(blob).not.toContain("87576");
    expect(blob).not.toContain("1998");
    expect(blob).not.toContain("Avishkar");
    expect(generator).toContain("Amrita Institute, Bharathiar University");
    expect(generator).toContain("cd4be8c7c3ea48aca09bc7a181355061");
    const forbidden = ["allwins.rs", "gmail.com"].join("@");
    expect(blob).not.toContain(forbidden);
    const root = fileURLToPath(new URL("..", import.meta.url));
    const hits: string[] = [];
    const visit = (dir: string) => {
      for (const entry of readdirSync(dir)) {
        if (entry === "node_modules" || entry === ".git" || entry === ".next") continue;
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
          visit(full);
          continue;
        }
        if (readFileSync(full).includes(Buffer.from(forbidden))) hits.push(full);
      }
    };
    visit(root);
    expect(hits).toEqual([]);
  });
});
