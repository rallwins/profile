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

  it("uses the résumé employers and does not invent extras", () => {
    expect(roles.map((role) => role.employer)).toEqual([
      "Tekizma Inc.",
      "Advanced Software Design, Inc.",
      "Marlabs Software Pvt. Ltd.",
      "Mapview Geographical Solutions",
      "Star4ce Technologies, Inc.",
      "Amtex Systems, Inc.",
      "3i-Infotech",
      "Asic Infotech Pvt. Ltd.",
    ]);
  });

  it("leaves early-career responsibility blank", () => {
    for (const role of roles.filter((item) => item.weight === "early")) {
      expect(role.responsibilities).toEqual([]);
      expect(role.omittedNote).toMatch(/Omitted/);
    }
  });

  it("publishes only the visible LinkedIn recommendation excerpts", () => {
    expect(recommendations.map((item) => item.attribution)).toEqual(["Anoop M.", "Previn Kutty"]);
    expect(recommendations[0]?.quote).toBe(
      "Allwins is very proactive in his approach. His technical skills in multiple areas, along with his ability to understand expectations and deliver on time meeting the demands is commendable.",
    );
    expect(recommendations[1]?.quote).toBe(
      "I know him as a very self-motivated individual, who took initiatives for making the Center of Excellence team in mobile.",
    );
    expect(recommendationsNote).toContain("14 people");
    expect(recommendationsNote).toContain("not visible");
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
    expect(roles.at(-1)?.employer).toBe("Asic Infotech Pvt. Ltd.");
    expect(progression.map((role) => role.id)).toEqual(roles.map((role) => role.id));
    expect(visualResume.roles[0]?.employer).toBe("Tekizma Inc.");
    expect(visualResume.roles.at(-1)?.employer).toBe("Asic Infotech");
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
