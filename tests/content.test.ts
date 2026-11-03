import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { awards } from "../content/awards";
import { certifications } from "../content/certifications";
import { roles } from "../content/experience";
import { expertiseGroups } from "../content/expertise";
import { personalProjects } from "../content/projects";
import { projectArchitecture } from "../content/project-diagrams";
import { visualResume } from "../content/visual-resume";
import { education, profile } from "../content/profile";
import { featuredRecommendations, recommendations, recommendationsNote } from "../content/recommendations";
import { primaryNav, routes } from "../src/lib/routes";

describe("verified profile facts", () => {
  it("keeps the public identity and contact that were supplied", () => {
    expect(profile.name).toBe("Allwins Rajaiah");
    expect(profile.fullName).toBe("Allwins Kannan Rajaiah");
    expect("email" in profile).toBe(false);
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/allwinsrajaiah/");
    expect(profile.canonical).toBe("https://allwinsrajaiah.com");
    expect(profile.title).toBe("AI Solutions Architect");
    expect(profile.role).toBe("AI Solutions Architect");
    expect(profile.supporting).toContain("20+ years");
    expect(education.school).toBe("Bharathiar University, India");
    expect(education.degree).toBe("B.E., Computer Science & Engineering");
    expect(education.years).toBeNull();
    expect(awards).toEqual([]);
    expect(profile.githubUrl).toBe("https://github.com/rallwins");
    expect(profile.seoTitle).toBe("Allwins Rajaiah | AI Solutions Architect");
  });

  it("uses the recorded employers and does not invent extras", () => {
    expect(roles.map((role) => role.employer)).toEqual([
      "Tekizma",
      "Advanced Software Design, Inc.",
      "Marlabs Software Pvt. Ltd.",
      "Mapview Geographical Solutions",
      "Star4ce Technologies, Inc.",
      "Amtex Systems, Inc.",
      "3i-Infotech",
      "Asic Infotech Pvt. Ltd.",
    ]);
    expect(roles.find((role) => role.id === "star4ce")?.end).toBe("Jun 2009");
    expect(roles.find((role) => role.id === "3i-infotech")?.end).toBe("Feb 2007");
    expect(roles.find((role) => role.id === "amtex")?.end).toBe("Oct 2007");
    expect(roles.find((role) => role.id === "amtex")?.title).toBe("Team Lead");
    expect(roles.find((role) => role.id === "asic")?.title).toBe("Java Developer");
    expect(roles.find((role) => role.id === "asd")?.achievements[0]).toBe(
      "Delivered the official Health Plan Marketplace for New York State of Health as Solutions Architect, supporting 5 million enrollments in 2020 at a peak load of concurrent users.",
    );
    expect(roles.find((role) => role.id === "tekizma")?.start).toBe("Sep 2024");
    expect(roles.find((role) => role.id === "tekizma")?.title).toBe("Director of Technology | AI Solutions Architect");
    expect(roles.find((role) => role.id === "marlabs")?.title).toBe("Technical Manager | Mobile Solutions Architecture");
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

  it("keeps the expertise aligned with the résumé inventory", () => {
    const tekizma = roles.find((role) => role.id === "tekizma");
    expect(tekizma?.projects?.map((project) => project.title)).toEqual([
      "Enterprise Application Modernization",
      "Databricks Data Engineering & Reconciliation",
    ]);
    expect(tekizma?.projects?.[0]?.achievement).toBe(
      "Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG to streamline code development, enable intelligent workflows, and improve contextual access to enterprise knowledge.",
    );
    expect(tekizma?.projects?.[1]?.achievement).toBe(
      "Improved reconciliation accuracy by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.",
    );
    const skills = expertiseGroups.flatMap((group) => group.skills);
    expect(skills).toContain("Langfuse");
    expect(skills).toContain("Strands Agents");
    expect(skills).toContain("Unity Catalog");
    expect(skills).toContain("Datadog");
    expect(skills).not.toContain("Team Leadership (20 members, 4 pods)");
    expect(skills).toContain("Claude Code");
    const published = JSON.stringify({ roles, expertiseGroups, visualResume });
    expect(published).not.toContain("Azure");
    expect(published).not.toContain("GCP");
  });

  it("lists latest roles first and links only the visible public repositories", () => {
    expect(roles[0]?.employer).toBe("Tekizma");
    expect(roles.at(-1)?.employer).toBe("Asic Infotech Pvt. Ltd.");
    expect(visualResume.roles.map((role) => role.employer)).toEqual([
      "Tekizma",
      "Advanced Software Design",
      "Marlabs Software",
      "Mapview Geographical Solutions",
      "Star4ce Technologies, Inc.",
      "Amtex Systems, Inc.",
      "3i-Infotech",
      "Asic Infotech Pvt. Ltd.",
    ]);
    expect(visualResume.roles[4]?.end).toBe("Jun 2009");
    expect(visualResume.roles[6]?.end).toBe("Feb 2007");
    expect(personalProjects.map((project) => [project.name, project.url, project.language])).toEqual([
      ["ent_order_app", "https://github.com/rallwins/ent_order_app", "Python"],
      ["school-sync-ai", "https://github.com/rallwins/school-sync-ai", "Python"],
      ["youtube_analyzer", "https://github.com/rallwins/youtube_analyzer", "Python"],
      ["face_detection", "https://github.com/rallwins/face_detection", "JavaScript"],
      ["rag_resume", "https://github.com/rallwins/rag_resume", "HTML"],
      ["gro-vision-replit", "https://github.com/rallwins/gro-vision-replit", "TypeScript"],
      ["voice_asst", "https://github.com/rallwins/voice_asst", "Python"],
    ]);
    for (const project of personalProjects) {
      expect(project.description).toBeTruthy();
      expect(project.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(project.url).not.toContain("/profile");
      const architecture = projectArchitecture[project.slug];
      expect(architecture?.source).toContain(project.url);
      expect(architecture?.diagram.edges.every((edge) => architecture.diagram.nodes.some((n) => n.id === edge.target))).toBe(true);
    }
  });

  it("cuts featured recommendation excerpts verbatim from the full quotes", () => {
    for (const featured of featuredRecommendations) {
      const person = recommendations.find((item) => item.id === featured.id);
      expect(person?.quote).toContain(featured.excerpt.replace(/^…/, ""));
    }
  });

  it("keeps the retired routes out of navigation and the stale claims off the site", () => {
    expect(routes.map((route) => route.href)).not.toContain("/writing");
    expect(routes.map((route) => route.href)).not.toContain("/certifications");
    expect(primaryNav.length).toBeLessThanOrEqual(7);
    const published = JSON.stringify({ profile, roles, visualResume });
    expect(published).not.toContain("40%");
    expect(published).not.toContain("4 pods");
    expect(published).not.toContain("22+");
    expect(published).not.toContain("AWS and GCP");
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
    expect(generator).toContain("Tekizma, India");
    expect(blob).not.toContain("95666");
    expect(blob).not.toContain("87576");
    expect(blob).not.toContain("1998");
    expect(blob).not.toContain("Avishkar");
    expect(generator).toContain("Bharathiar University, India");
    expect(blob).not.toContain("Coimbatore");
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
