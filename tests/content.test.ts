import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { certifications } from "../content/certifications";
import { roles } from "../content/experience";
import { personalProjects } from "../content/projects";
import { profile } from "../content/profile";
import { recommendations } from "../content/recommendations";
import { radar } from "../content/radar";

describe("verified profile facts", () => {
  it("keeps the public identity and contact that were supplied", () => {
    expect(profile.name).toBe("Allwins Rajaiah");
    expect(profile.fullName).toBe("Allwins Kannan Rajaiah");
    expect(profile.email).toBe("allwins.rs@gmail.com");
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/allwinsrajaiah/");
    expect(profile.canonical).toBe("https://profile.allwinsrajaiah.com");
    expect(profile.githubUrl).toBeNull();
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

  it("does not invent recommendation quotes and records the published credential", () => {
    for (const item of recommendations) {
      expect(item.quote).toBeNull();
      expect(item.attribution).toBeNull();
    }
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

  it("keeps the radar bands from the brief", () => {
    expect(radar.filter((item) => item.band === "Core").map((item) => item.name)).toEqual([
      "AWS",
      "Azure",
      "Databricks",
      "Java",
      "Spring Boot",
      "SQL",
      "PySpark",
    ]);
    expect(radar.find((item) => item.name === "GCP")?.band).toBe("Exploring");
  });

  it("does not attach links to personal projects", () => {
    for (const project of personalProjects) {
      expect(project.github).toBeNull();
      expect(project.demo).toBeNull();
      expect(project.status).toBe("personal-experimental");
    }
  });

  it("does not publish a phone number in content, the generator, or the PDF", () => {
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
  });
});
