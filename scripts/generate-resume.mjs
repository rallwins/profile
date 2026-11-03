import { writeFileSync } from "node:fs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const ink = rgb(0.08, 0.13, 0.18);
const slate = rgb(0.24, 0.3, 0.34);
const accent = rgb(0.1, 0.21, 0.36);

const doc = await PDFDocument.create();
doc.setTitle("Allwins Kannan Rajaiah — résumé");
doc.setAuthor("Allwins Rajaiah");
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const pageSize = [612, 792];
const margin = 54;
const width = 504;
let page = doc.addPage(pageSize);
let y = 742;

function newPage() {
  page = doc.addPage(pageSize);
  y = 742;
}

function wrap(text, size, face, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (face.widthOfTextAtSize(next, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function ensure(height) {
  if (y - height < 48) newPage();
}

function heading(text) {
  ensure(28);
  y -= 10;
  page.drawText(text.toUpperCase(), { x: margin, y, size: 10, font: bold, color: accent });
  y -= 6;
  page.drawLine({
    start: { x: margin, y },
    end: { x: margin + width, y },
    thickness: 0.6,
    color: accent,
  });
  y -= 14;
}

function paragraph(text, size = 10, face = font, color = ink) {
  const lines = wrap(text, size, face, width);
  ensure(lines.length * (size + 3) + 4);
  for (const line of lines) {
    page.drawText(line, { x: margin, y, size, font: face, color });
    y -= size + 3;
  }
  y -= 3;
}

function bullet(text) {
  const lines = wrap(text, 10, font, width - 14);
  ensure(lines.length * 13 + 4);
  lines.forEach((line, index) => {
    page.drawText(index === 0 ? `•  ${line}` : `   ${line}`, {
      x: margin,
      y,
      size: 10,
      font,
      color: ink,
    });
    y -= 13;
  });
  y -= 2;
}

function role(title, meta) {
  ensure(36);
  page.drawText(title, { x: margin, y, size: 11, font: bold, color: ink });
  y -= 14;
  page.drawText(meta, { x: margin, y, size: 9, font, color: slate });
  y -= 14;
}

function subheading(text) {
  ensure(24);
  y -= 4;
  paragraph(text, 10, bold, accent);
}

function technologies(text) {
  paragraph(`Technologies: ${text}`, 9, font, slate);
}

page.drawText("Allwins Kannan Rajaiah", { x: margin, y, size: 22, font: bold, color: accent });
y -= 18;
paragraph("AI Solutions Architect", 10, bold);
paragraph(
  "Agentic AI on AWS  ·  AI-Driven Application Modernization  ·  Data Platforms  ·  Development & QA Team Leadership",
  9,
  font,
  slate,
);
page.drawText("linkedin.com/in/allwinsrajaiah/", { x: margin, y, size: 9, font, color: slate });
y -= 20;

heading("Professional summary");
bullet(
  "AI Solutions Architect with 20+ years of experience in delivering enterprise applications, cloud-native platforms, and AI-enabled solutions, translating business challenges into scalable, secure, and production-ready architectures.",
);
bullet(
  "Design end-to-end AI and cloud architectures on AWS, integrating Generative AI, Agentic AI, Java, Spring Boot, Angular, React, microservices, REST APIs, and enterprise systems to deliver business-aligned solutions.",
);
bullet(
  "Build agentic AI solutions using Amazon Bedrock AgentCore, Strands Agents, Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG), and human-in-the-loop controls, incorporating secure tool integration, observability, and evaluation.",
);
bullet(
  "Lead cloud-native application architecture and AI-enabled data engineering, combining enterprise application modernization with Databricks, Auto Loader, Lakeflow, PySpark, SQL, dbt, and Unity Catalog to deliver scalable data platforms, governed data products, automated reconciliation, and AI-powered exception investigation.",
);
bullet(
  "Drive technology strategy and engineering excellence through governance, solution design reviews, technology roadmaps, security standards, and cross-functional leadership of development and QA teams, using AI to improve engineering productivity and operational outcomes.",
);

heading("Core technology");
paragraph(
  "Architecture & Leadership: Solution Architecture, Cloud Architecture, Architecture Governance, Design Reviews, Enterprise Modernization, Team Leadership, Estimation & Release Readiness.",
);
paragraph(
  "AI & GenAI: Generative AI, Agentic AI, Amazon Bedrock, AgentCore, Strands Agents, MCP, RAG, Bedrock Knowledge Bases, LLM Applications, AI Governance, AI Evaluation, Langfuse.",
);
paragraph(
  "Cloud & Platform: AWS, Docker, Kubernetes, Terraform, Serverless, Cloud Security, Scalability & Cost Optimization.",
);
paragraph(
  "Data Engineering: Databricks, Lakeflow, Auto Loader, Databricks Workflows, Unity Catalog, PySpark, dbt, SQL, Data Pipelines.",
);
paragraph(
  "Application & Integration: Java, Spring Boot, Hibernate, Angular, Microservices, REST APIs, Redis, OAuth, JWT, Node.js, HTML, CSS, JavaScript, TypeScript.",
);
paragraph("DevOps & Observability: CI/CD, Git, Jenkins, AWS CodePipeline, Prometheus, Splunk, Datadog, OpenTelemetry.");
paragraph("Databases: Oracle, MySQL, DB2, Amazon RDS.");
paragraph("AI-Assisted Development: Claude Code, GitHub Copilot, Replit, Cursor.");

heading("Professional experience");
role("Director of Technology | AI Solutions Architect", "Tekizma, India  ·  Sep 2024 – Present");
bullet(
  "Lead enterprise technology direction by defining solution architecture, target-state roadmaps, and design standards for application, data, cloud, and AI platforms, while overseeing architecture governance across development and QA teams.",
);
subheading("Enterprise Application Modernization");
bullet(
  "Led the modernization of a legacy Spring/JSP enterprise application into a cloud-native platform built on Spring Boot, Angular, REST APIs, Hibernate, MySQL, and Redis, delivered with Docker containerization, Terraform-based infrastructure provisioning, AWS CodePipeline CI/CD, and end-to-end observability using OpenTelemetry, Datadog, and Splunk.",
);
bullet(
  "Defined the target AWS architecture across EC2, ECS/Fargate, and Lambda, with VPC networking, ALB/NLB, and CloudFront for delivery, secured through IAM, KMS, Secrets Manager, Cognito, and WAF, and monitored centrally via CloudWatch.",
);
bullet(
  "Developed AI-powered application capabilities using Agentic AI and Amazon Bedrock AgentCore, enabling intelligent, task-oriented workflows integrated with enterprise application services and business processes.",
);
bullet(
  "Designed secure AI agent integration using the Model Context Protocol (MCP), enabling AI agents to interact with application tools, APIs, and enterprise services through controlled, standardized interfaces.",
);
bullet(
  "Implemented RAG-based AI workflows with an enterprise knowledge base, leveraging enterprise knowledge retrieval and Claude Code to support intelligent information access, contextual responses, and AI-assisted application functionality.",
);
bullet(
  "Established AI-Driven Development Life Cycle (AIDLC) practices across requirements analysis, solution design, implementation, testing, and validation, incorporating structured human review and quality gates to improve delivery consistency, maintainability, and engineering governance.",
);
paragraph(
  "Key achievement: Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG to streamline code development, enable intelligent workflows, and improve contextual access to enterprise knowledge.",
  10,
  bold,
);
technologies(
  "Spring Boot, Angular, Hibernate, MySQL, Redis, Docker, Terraform, AWS CodePipeline, OpenTelemetry, Datadog, Splunk, Amazon Bedrock, AgentCore (Runtime, Gateway, Identity), Strands Agents, MCP, RAG, Bedrock Knowledge Bases, Claude Code.",
);
subheading("Databricks Data Engineering & Reconciliation");
bullet(
  "Built a scalable Databricks data engineering platform supporting incremental data ingestion through Auto Loader and Lakeflow, data modeling using PySpark, SQL, and dbt, and workflow orchestration through Databricks Workflows.",
);
bullet(
  "Established data governance and reusable data-product capabilities using Unity Catalog, enabling governed data access and natural-language interaction with enterprise data, while leveraging GitHub Copilot to accelerate engineering productivity.",
);
bullet(
  "Designed the end-to-end data reconciliation architecture, defining source-to-target mappings, data quality and validation rules, exception-handling mechanisms, and reconciliation controls across ingestion and transformation layers; implemented continuous delivery workflows using GitHub Actions.",
);
bullet(
  "Developed an AI reconciliation agent to investigate Databricks pipeline exceptions, correlate failures with source-to-target mappings and operational runbooks, and recommend corrective actions for analyst review and approval. Integrated Langfuse for execution tracing and evaluation.",
);
paragraph(
  "Key achievement: Improved reconciliation accuracy by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.",
  10,
  bold,
);
technologies(
  "Databricks, Auto Loader, Delta Live Tables, Databricks Workflows, Unity Catalog, PySpark, SQL, dbt, Langfuse, GitHub Actions, GitHub Copilot.",
);

role("Solutions Architect", "Advanced Software Design, Inc., USA  ·  Sep 2013 – Aug 2024");
bullet(
  "Delivered multi-tier enterprise applications using Spring Boot, Angular, microservices, REST APIs, and AWS, with secure, high-performance APIs covering authentication, authorization, and operational readiness.",
);
bullet(
  "Designed AWS deployments on EC2, ECS, Lambda, and Amazon RDS, using VPC, ELB, IAM, S3, and CloudFront for networking, load balancing, access control, storage, and content delivery.",
);
bullet("Defined service boundaries, API contracts, and integration patterns for complex enterprise workflows.");
bullet("Directed application modernization, assessing legacy components and defining incremental migration strategies.");
bullet(
  "Introduced reusable design patterns and technical components, improving consistency and development efficiency.",
);
bullet(
  "Collaborated with development, QA, business analysis, and delivery teams on estimation, release readiness, and resolution of complex production issues.",
);
paragraph(
  "Key achievement: Delivered the official Health Plan Marketplace for New York State of Health as Solutions Architect, supporting 5 million enrollments in 2020 at a peak load of concurrent users.",
  10,
  bold,
);
technologies(
  "Spring Boot, Angular, REST APIs, Microservices, AWS (EC2, ECS, Lambda, S3, RDS, VPC, ELB, IAM, CloudFront), Hibernate, Oracle, DB2, Docker, Kubernetes, Jenkins, Git.",
);

role("Technical Manager | Mobile Solutions Architecture", "Marlabs Software Pvt. Ltd.  ·  Sep 2010 – Sep 2013");
bullet(
  "Defined cross-platform mobile solution architecture for iOS, Android, and PhoneGap, covering security, authentication, REST APIs, and logging, and produced application designs, SDLC plans, and delivery roadmaps.",
);
bullet(
  "Delivered eFleetPro enterprise integration solutions connecting construction-equipment manufacturers, dealers, and rental fleets with ERP systems, punch-out integrations, and payment gateways.",
);
bullet(
  "Established signed mobile-to-enterprise integration patterns for secure communication with backend services and external systems.",
);
bullet(
  "Led the Mobile Centre of Excellence, setting platform standards and managing team formation, hiring, and delivery across client and internal initiatives.",
);
bullet(
  "Presented cross-platform capabilities and technology solutions to customers and leadership, supporting client engagement and revenue growth.",
);
technologies(
  "iOS, Android, PhoneGap, REST APIs, Java, Mobile Architecture, Enterprise Integration, ERP Integration, Payment Gateway Integration, Security & Authentication.",
);

heading("Additional experience");
paragraph("Tech Lead, Mapview Geographical Solutions, Sep 2009 – Aug 2010.");
paragraph("Tech Lead / Senior J2EE, Star4ce Technologies, Inc., Nov 2007 – Jun 2009.");
paragraph("Team Lead, Amtex Systems, Inc., Apr 2007 – Oct 2007.");
paragraph("Team Lead, 3i-Infotech, Apr 2004 – Feb 2007.");
paragraph("Java Developer, Asic Infotech Pvt. Ltd., May 2003 – Feb 2004.");

heading("Education");
paragraph("B.E., Computer Science & Engineering, Bharathiar University, India.");

heading("Certification");
paragraph(
  "AWS Certified AI Practitioner (AIF-C01). Issued September 2026. Credential ID cd4be8c7c3ea48aca09bc7a181355061. Verification: https://www.credly.com/earner/earned/badge/496bc744-8636-4032-9eb0-975867c4f0d5.",
);

const bytes = await doc.save();
writeFileSync(new URL("../public/resume.pdf", import.meta.url), bytes);
console.log(`Wrote resume.pdf (${bytes.length} bytes, ${doc.getPageCount()} pages)`);
