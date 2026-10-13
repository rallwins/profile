import { writeFileSync } from "node:fs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const ink = rgb(0.08, 0.13, 0.16);
const slate = rgb(0.24, 0.3, 0.34);
const accent = rgb(0.12, 0.31, 0.37);

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

page.drawText("Allwins Kannan Rajaiah", { x: margin, y, size: 22, font: bold, color: ink });
y -= 16;
page.drawText("Allwins Rajaiah", { x: margin, y, size: 11, font, color: slate });
y -= 18;
paragraph(
  "Solutions Architect | Director of Technology | AI | Cloud | Data | Full Stack",
  10,
  bold,
);
page.drawText("linkedin.com/in/allwinsrajaiah/", {
  x: margin,
  y,
  size: 9,
  font,
  color: slate,
});
y -= 20;

heading("Professional summary");
bullet(
  "Director of Technology and Solutions Architect with 22+ years of experience leading technology strategy, enterprise architecture, engineering, and delivery across Cloud, AI/GenAI, Data, Microservices, and Full-Stack platforms.",
);
bullet(
  "Architect end-to-end enterprise and cloud solutions, translating business requirements into scalable, secure, resilient, and cost-effective architectures across AWS and GCP.",
);
bullet(
  "Lead AI and data modernization initiatives spanning Generative AI, Agentic AI, AgentCore Runtime, Amazon Bedrock, RAG, MCP, AI Governance, Data Engineering, Databricks, PySpark, and dbt.",
);
bullet(
  "Hands-on engineering leader with strong expertise in Java, Spring Boot, Angular, Kubernetes, Docker, Terraform, and CI/CD, with a focus on cloud-native application delivery.",
);
bullet(
  "Drive architecture governance, engineering excellence, Agile delivery, and cross-functional technical leadership, partnering with business and technology stakeholders to deliver enterprise-scale solutions.",
);

heading("Core technology");
paragraph(
  "Architecture and technology leadership: Solution and Cloud Architecture, Technology Strategy, Architecture Governance, Enterprise Modernization, Microservices, Distributed Systems, Event-Driven Architecture, API Design.",
);
paragraph(
  "AI and GenAI: AIDLC, Generative AI, Agentic AI, AgentCore Runtime, Bedrock, RAG, MCP, LLM Applications, Knowledge Bases, AI Guardrails, AI Governance, AI Evaluation, Langfuse.",
);
paragraph(
  "Cloud and platform: AWS, GCP, Kubernetes, Docker, Terraform, Serverless, Cloud Security, Scalability, Reliability and Cost Optimization.",
);
paragraph(
  "Data architecture: Data Architecture, Data Pipelines, Data Modeling, Spark, Databricks, Data Quality, Data Governance.",
);
paragraph("DevOps: CI/CD, GitHub Actions, Jenkins, Automated Testing, Release Engineering.");
paragraph(
  "Full stack and application: Java, Spring Boot, Hibernate, Angular, React, Node.js, REST APIs, JavaScript, HTML, OAuth, SAML, JWT.",
);
paragraph("Databases and search: Oracle, PostgreSQL, MySQL, DB2, MongoDB, DynamoDB, Elasticsearch.");
paragraph("Mobile and emerging tech: Flutter, Android, iOS, Replit, Cursor, GitHub Copilot.");

heading("Professional experience");
role(
  "Director of Technology | Data and Application Engineering & Solution Architecture",
  "Tekizma Inc.  ·  Sep 2024 – Present",
);
bullet(
  "Define technology strategy, solution architecture, and technical roadmaps for enterprise data, cloud, and AI platforms, aligning architecture decisions with business outcomes and engineering priorities.",
);
bullet(
  "Lead architecture and solution design across data platforms, cloud services, microservices, APIs, and AI/ML capabilities, ensuring scalable, secure, maintainable, and resilient solutions.",
);
bullet(
  "Establish architecture governance, engineering standards, and design patterns covering scalability, security, data quality, observability, maintainability, and operational resilience.",
);
bullet(
  "Architect Azure Databricks data platforms covering data ingestion, transformation, modeling, orchestration, validation, and reusable data products for analytics and downstream applications.",
);
bullet(
  "Design and optimize data engineering pipelines using PySpark, SQL, dbt, and Databricks, with emphasis on data quality, performance, reliability, and reusable data assets.",
);
bullet(
  "Design reconciliation architecture and data flows, defining source-to-target mappings, validation rules, data quality controls, exception handling, and scalable processing patterns.",
);
bullet(
  "Design cloud architectures in AWS, covering compute, storage, networking, security, monitoring, availability, scalability, and cost optimization.",
);
bullet(
  "Lead legacy application modernization and cloud migration, migrating a Spring/JSP-based enterprise application to a modern Spring Boot, Angular, REST API, Hibernate, and MySQL architecture on AWS.",
);
bullet(
  "Drive decomposition of legacy application components into modern application and API layers, improving scalability, maintainability, deployment automation, and integration capabilities.",
);
bullet(
  "Integrate AI/ML capabilities with enterprise data platforms for intelligent data processing, natural-language data interaction, automated documentation, and AI-assisted engineering workflows.",
);
bullet(
  "Lead architecture reviews, technical decisions, dependency and risk management, and stakeholder communication from requirements and solution design through implementation and production release.",
);
bullet(
  "Provide technical leadership and mentoring across data engineering, application development, QA, and cross-functional engineering teams, driving engineering excellence and Agile delivery.",
);
paragraph("Key achievement", 10, bold);
bullet(
  "Enhanced reconciliation accuracy by 50% through the design and deployment of automated validation and exception-handling frameworks.",
);
bullet(
  "Reduced development effort by 40% through reusable dbt/Databricks frameworks and AI-assisted engineering.",
);
paragraph(
  "Technologies: Databricks, PySpark, dbt, SQL, AWS, Spring Boot, Angular, REST APIs, Hibernate, MySQL, Microservices, AI/ML, Data Engineering.",
  9,
  font,
  slate,
);

role("Solutions Architect / Application Designer", "Advanced Software Design, Inc.  ·  Sep 2013 – Aug 2024");
bullet(
  "Architected scalable multi-tier enterprise applications using Spring Boot, Angular, microservices, REST APIs, and AWS, applying cloud-native and distributed application patterns.",
);
bullet(
  "Designed application and integration architectures for complex enterprise workflows, defining service boundaries, API contracts, integration patterns, and technology components.",
);
bullet(
  "Designed secure, resilient, and high-performance REST APIs and microservices, addressing authentication, authorization, scalability, maintainability, and operational readiness.",
);
bullet(
  "Designed AWS-based application solutions covering compute, storage, databases, security, deployment, and availability, aligning cloud services with application requirements.",
);
bullet(
  "Led application modernization initiatives, evaluating legacy application components and defining target-state architectures and incremental modernization strategies.",
);
bullet(
  "Established application design patterns and reusable technical components to improve consistency, maintainability, scalability, and development efficiency across enterprise applications.",
);
bullet(
  "Translated complex business requirements into technical designs, architecture specifications, integration solutions, and implementation roadmaps.",
);
bullet(
  "Collaborated with development, QA, business analysis, and delivery teams to resolve complex technical issues, architectural dependencies, and integration challenges throughout the application lifecycle.",
);
bullet(
  "Contributed to technical estimation, solution planning, release readiness, and production issue resolution, ensuring successful delivery of enterprise applications.",
);
paragraph("Key achievement", 10, bold);
bullet(
  "Orchestrated the official Health Plan Marketplace for New York State of Health, processing 5 million enrollments for 2020.",
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
  "Technologies: iOS, Android, PhoneGap, REST APIs, Java, Mobile Architecture, Enterprise Integration, ERP Integration, Payment Gateway Integration, Security and Authentication.",
  9,
  font,
  slate,
);

heading("Additional experience");
paragraph("The source résumé lists title, employer, and dates for these roles.");
paragraph("Tech Lead, Mapview Geographical Solutions, Sep 2009 – Aug 2010.");
paragraph("Tech Lead / Senior J2EE, Star4ce Technologies, Inc., Nov 2007 – Jun 2009.");
paragraph("Team Lead, Amtex Systems, Inc., Apr 2007 – Oct 2007.");
paragraph("Team Lead, 3i-Infotech, Apr 2004 – Feb 2007.");
paragraph("Java Developer, Asic Infotech Pvt. Ltd., May 2003 – Feb 2004.");

heading("Education");
paragraph("B.E., Computer Science & Engineering, Amrita Institute, Bharathiar University, India.");

heading("Certification");
paragraph(
  "AWS Certified AI Practitioner (AIF-C01). Issued September 2026. Credential ID cd4be8c7c3ea48aca09bc7a181355061. Verification: https://www.credly.com/earner/earned/badge/496bc744-8636-4032-9eb0-975867c4f0d5. The source résumé names the certification and exam code. The credential ID, verification link, and issue month are the public LinkedIn and Credly values.",
);

const bytes = await doc.save();
writeFileSync(new URL("../public/resume.pdf", import.meta.url), bytes);
console.log(`Wrote resume.pdf (${bytes.length} bytes, ${doc.getPageCount()} pages)`);
