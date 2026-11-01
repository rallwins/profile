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

page.drawText("Allwins Kannan Rajaiah", { x: margin, y, size: 22, font: bold, color: accent });
y -= 18;
paragraph("Director of Technology | Engineering Leadership & Solutions Architecture", 10, bold);
paragraph(
  "Full-Stack & Cloud-Native Platforms  ·  AI / GenAI  ·  Data Platforms  ·  Development & QA Team Leadership",
  9,
  font,
  slate,
);
page.drawText("linkedin.com/in/allwinsrajaiah/", { x: margin, y, size: 9, font, color: slate });
y -= 20;

heading("Professional summary");
bullet(
  "Director of Technology with 20+ years of experience leading engineering, architecture, and delivery of full-stack, cloud-native, data, and AI platforms.",
);
bullet(
  "Engineering leadership: own team structure, delivery planning, quality strategy, hiring, and mentoring, driving Agile execution and release quality from requirements through production.",
);
bullet(
  "Hands-on architect in Java, Spring Boot, Angular, React, microservices and AWS, translating business goals into scalable, secure, and cost-effective solutions.",
);
bullet(
  "AI and data modernization with Generative AI, Agentic AI, Amazon Bedrock, AgentCore Runtime, RAG, and MCP, and Databricks, PySpark, and dbt data platforms.",
);
bullet(
  "Architecture governance and engineering excellence: standards, design reviews, CI/CD, and observability partnering with business and technology stakeholders.",
);

heading("Core technology");
paragraph(
  "Leadership & Architecture: Engineering Leadership, Multi-Team Management (Dev & QA), Technology Strategy, Architecture Governance, Agile Delivery, Hiring & Mentoring, Stakeholder Management, Enterprise Modernization.",
);
paragraph(
  "Full Stack & Application: Java, Spring Boot, Hibernate, Angular, React, Node.js, REST APIs, JavaScript, HTML, OAuth, SAML, JWT.",
);
paragraph(
  "Distributed Systems & Messaging: Microservices, Event-Driven Architecture, Apache Kafka, Redis (Caching, Pub/Sub), API Design, Integration Patterns.",
);
paragraph(
  "Cloud & Platform: AWS (EC2, ECS, Fargate, Lambda, VPC, ALB/NLB, S3, CloudFront, IAM, KMS, Cognito, WAF), Kubernetes, Docker, Terraform, CloudFormation, Serverless, Cloud Security & Cost Optimization, GCP (working knowledge).",
);
paragraph(
  "AI & GenAI: Generative AI, Agentic AI, Amazon Bedrock, AgentCore Runtime, RAG, MCP, LLM Applications, Knowledge Bases, AI Guardrails, AI Governance, AI Evaluation, Langfuse.",
);
paragraph(
  "Data Engineering: Databricks (on Azure), Spark, PySpark, dbt, SQL, Data Pipelines, Data Modeling, Data Quality, Data Governance.",
);
paragraph(
  "DevOps & Observability: CI/CD, AWS CodePipeline, GitHub Actions, Jenkins, CloudWatch, Prometheus, Automated Testing, Release Engineering.",
);
paragraph("Databases & Search: Oracle, PostgreSQL, MySQL, DB2, MongoDB, DynamoDB, Elasticsearch.");
paragraph("Mobile: Flutter, Android, iOS.");
paragraph("AI-Assisted Development: Claude Code, GitHub Copilot, Cursor, Replit.");

heading("Professional experience");
role("Director of Technology", "Tekizma Inc.  ·  Sep 2024 – Present");
bullet(
  "Lead engineering teams across application, data, and AI workstreams, owning team structure, sprint planning, hiring, mentoring, and delivery from requirements through production release.",
);
bullet(
  "Define technology strategy, solution architecture, and technical roadmaps for enterprise application, data, cloud, and AI platforms, aligning architecture decisions with business outcomes.",
);
bullet(
  "Led the modernization and AWS migration of a Spring/JSP enterprise application to Spring Boot, Angular, REST APIs, Hibernate, and MySQL, decomposing legacy components into modern application and API layers with automated deployments.",
);
bullet(
  "Direct the QA function, aligning test strategy, release readiness, and defect management with the development teams' Agile delivery.",
);
bullet(
  "Architect Databricks data platforms on Azure with PySpark, SQL, and dbt, covering ingestion, transformation, modeling, orchestration, and reusable data products for analytics and ML workloads.",
);
bullet(
  "Design reconciliation (Recon) architecture, defining source-to-target mappings, validation rules, data quality controls, and exception handling.",
);
bullet(
  "Integrate Generative AI capabilities with enterprise data platforms for natural-language data interaction, automated documentation, and AI-assisted engineering workflows.",
);
bullet(
  "Establish architecture governance and engineering standards, including design reviews, security, observability, risk and dependency management, and stakeholder communication.",
);
paragraph("Key achievements", 10, bold);
bullet(
  "Enhanced reconciliation accuracy by 50% through the design and deployment of automated validation and exception-handling frameworks.",
);
bullet(
  "Reduced development effort by 40% through reusable dbt/Databricks frameworks and AI-assisted engineering.",
);
paragraph(
  "Technologies: Databricks (Azure), PySpark, dbt, SQL, AWS, Spring Boot, Angular, REST APIs, Hibernate, MySQL, Microservices, Generative AI, Data Engineering.",
  9,
  font,
  slate,
);

role("Solutions Architect", "Advanced Software Design, Inc.  ·  Sep 2013 – Aug 2024");
bullet(
  "Architected multi-tier enterprise applications using Spring Boot, Angular, microservices, REST APIs, and AWS, applying cloud-native and distributed design patterns.",
);
bullet(
  "Defined service boundaries, API contracts, and integration patterns for complex enterprise workflows, translating business requirements into architecture specifications and roadmaps.",
);
bullet(
  "Designed secure, high-performance REST APIs and microservices, addressing authentication, authorization, and operational readiness.",
);
bullet(
  "Led application modernization, evaluating legacy components and defining target-state architectures and incremental migration strategies.",
);
bullet(
  "Established reusable design patterns and technical components, improving consistency and development efficiency across enterprise applications.",
);
bullet(
  "Partnered with development, QA, business analysis, and delivery teams on estimation, release readiness, and resolution of complex production and integration issues.",
);
paragraph("Key achievement", 10, bold);
bullet(
  "Delivered the official Health Plan Marketplace for New York State of Health, supporting 5 million enrollments in 2020.",
);
paragraph(
  "Technologies: Spring Boot, Angular, REST APIs, Microservices, AWS, Hibernate, Oracle, DB2, DynamoDB, Docker, Kubernetes, Jenkins, Git.",
  9,
  font,
  slate,
);

role(
  "Technical Manager | Solutions Architecture & Mobile Platforms",
  "Marlabs Software Pvt. Ltd., Piscataway, NJ  ·  Sep 2010 – Sep 2013",
);
bullet(
  "Defined cross-platform mobile solution architecture for iOS, Android, and PhoneGap applications, covering security, authentication, REST APIs, logging, and platform standards.",
);
bullet(
  "Translated business and technical requirements into mobile solution architecture, application designs, wireframes, SDLC plans, and delivery roadmaps for client and internal products.",
);
bullet(
  "Architected eFleetPro enterprise integration solutions connecting construction-equipment manufacturers, dealers, and rental fleets with ERP systems, punch-out integrations, and payment gateways.",
);
bullet(
  "Designed mobile-to-enterprise integration patterns for secure communication between mobile applications, backend services, ERP platforms, and external systems.",
);
bullet(
  "Led the Mobile Center of Excellence, defining reusable architecture patterns, platform standards, and technical practices for cross-platform application development.",
);
bullet(
  "Managed solution design, development planning, team formation, hiring, and delivery across client and internal mobile initiatives.",
);
bullet(
  "Presented cross-platform architecture capabilities and technology solutions to customers and leadership, supporting solution positioning, client engagement, and revenue growth.",
);
paragraph(
  "Technologies: iOS, Android, PhoneGap, REST APIs, Java, Mobile Architecture, Enterprise Integration, ERP Integration, Payment Gateway Integration, Security & Authentication.",
  9,
  font,
  slate,
);

heading("Additional experience");
paragraph("Tech Lead, Mapview Geographical Solutions, Sep 2009 – Aug 2010.");
paragraph("Tech Lead / Senior J2EE, Star4ce Technologies, Inc., Nov 2007 – Jun 2009.");
paragraph("Team Lead, Amtex Systems, Inc., Apr 2007 – Oct 2007.");
paragraph("Team Lead, 3i-Infotech, Apr 2004 – Feb 2007.");
paragraph("Java Developer, Asic Infotech Pvt. Ltd., May 2003 – Feb 2004.");

heading("Education");
paragraph("B.E., Computer Science & Engineering, Amrita Institute, Bharathiar University, India.");

heading("Certification");
paragraph(
  "AWS Certified AI Practitioner (AIF-C01). Issued September 2026. Credential ID cd4be8c7c3ea48aca09bc7a181355061. Verification: https://www.credly.com/earner/earned/badge/496bc744-8636-4032-9eb0-975867c4f0d5.",
);

const bytes = await doc.save();
writeFileSync(new URL("../public/resume.pdf", import.meta.url), bytes);
console.log(`Wrote resume.pdf (${bytes.length} bytes, ${doc.getPageCount()} pages)`);
