import { writeFileSync } from "node:fs";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const ink = rgb(0.08, 0.09, 0.11);
const slate = rgb(0.28, 0.31, 0.36);
const accent = rgb(0.14, 0.21, 0.69);

const doc = await PDFDocument.create();
const font = await doc.embedFont(StandardFonts.Helvetica);
const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const pageSize = [612, 792];
const margin = 54;
let page = doc.addPage(pageSize);
let y = 742;

function newPage() {
  page = doc.addPage(pageSize);
  y = 742;
}

function wrap(text, size, face, width) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (face.widthOfTextAtSize(next, size) > width && line) {
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
  y -= 8;
  page.drawText(text.toUpperCase(), { x: margin, y, size: 10, font: bold, color: accent });
  y -= 14;
}

function paragraph(text, size = 10) {
  const lines = wrap(text, size, font, 504);
  ensure(lines.length * (size + 3) + 6);
  for (const line of lines) {
    page.drawText(line, { x: margin, y, size, font, color: ink });
    y -= size + 3;
  }
  y -= 4;
}

function role(title, meta) {
  ensure(32);
  page.drawText(title, { x: margin, y, size: 11, font: bold, color: ink });
  y -= 14;
  page.drawText(meta, { x: margin, y, size: 9, font, color: slate });
  y -= 14;
}

page.drawText("Allwins Kannan Rajaiah", { x: margin, y, size: 20, font: bold, color: ink });
y -= 18;
page.drawText("Allwins Rajaiah", { x: margin, y, size: 11, font, color: slate });
y -= 16;
paragraph(
  "Solutions Architect | Director of Technology | AI & GenAI | Cloud | Data | Full Stack",
  10,
);
page.drawText("allwins.rs@gmail.com  ·  linkedin.com/in/allwinsrajaiah/", {
  x: margin,
  y,
  size: 9,
  font,
  color: slate,
});
y -= 18;
paragraph(
  "Phone number omitted from this public copy. Early-career responsibility detail is omitted where the source résumé lists only title, employer, and dates.",
  8,
);

heading("Summary");
paragraph(
  "Director of Technology and Solutions Architect with 22+ years of experience leading technology strategy, enterprise architecture, engineering, and delivery across Cloud, AI/GenAI, Data, Microservices, and Full-Stack platforms.",
);
paragraph(
  "Architects enterprise and cloud solutions across AWS and GCP, and designs Azure and AWS platforms in the current role. Leads AI and data modernization spanning Generative AI, Agentic AI, AgentCore Runtime, Amazon Bedrock, RAG, MCP, AI Governance, Databricks, PySpark, and dbt.",
);

heading("Experience");
role(
  "Director of Technology | Data and Application Engineering & Solution Architecture",
  "Tekizma Inc.  ·  Sep 2024 – Present",
);
paragraph(
  "Technology strategy and solution architecture for enterprise data, cloud, and AI platforms. Azure Databricks platforms, PySpark, SQL, and dbt pipelines, reconciliation architecture, and cloud design across Azure and AWS. Legacy modernization from Spring/JSP to Spring Boot, Angular, REST, Hibernate, and MySQL on AWS. AI/ML integrated with enterprise data for natural-language interaction, documentation, and AI-assisted engineering.",
);
paragraph(
  "Stated results: improved data quality/reconciliation accuracy to 50% with automated validation and exception handling. Reduced development effort by 40% through reusable dbt/Databricks frameworks and AI-assisted engineering.",
);

role("Solutions Architect / Application Designer", "Advanced Software Design, Inc.  ·  Sep 2013 – Aug 2024");
paragraph(
  "Multi-tier applications on Spring Boot, Angular, microservices, REST APIs, and AWS. API contracts, authentication and authorization, modernization roadmaps, and reusable design patterns. Technologies also include Hibernate, Oracle, DB2, DynamoDB, Docker, Kubernetes, Jenkins, and Git.",
);
paragraph(
  "Stated achievement: orchestrated the official Health Plan Marketplace for New York State of Health, processing 5 million enrollments for 2020.",
);

role(
  "Technical Manager | Solutions Architecture & Mobile Platforms",
  "Marlabs Software Pvt. Ltd., Piscataway, NJ  ·  Sep 2010 – Sep 2013",
);
paragraph(
  "Cross-platform mobile architecture for iOS, Android, and PhoneGap. eFleetPro integrations with ERP, punch-out, and payment gateways. Led the Mobile Center of Excellence, including hiring and customer presentations.",
);

heading("Earlier roles");
paragraph("Detail omitted beyond title, employer, and dates.");
paragraph("Tech Lead, Mapview Geographical Solutions, Sep 2009 – Aug 2010.");
paragraph("Tech Lead / Senior J2EE, Star4ce Technologies, Inc., Nov 2007 – Jun 2009.");
paragraph("Team Lead, Amtex Systems, Inc., Apr 2007 – Oct 2007.");
paragraph("Team Lead, 3i-Infotech, Apr 2004 – Feb 2007.");
paragraph("Java Developer, Asic Infotech Pvt. Ltd., May 2003 – Feb 2004.");

heading("Certification and education");
paragraph("AWS Certified AI Practitioner (AIF-C01), issued September 2026. Credential ID and verification link: not stated.");
paragraph(
  "B.E., Computer Science & Engineering, Bharathiar University / Amrita Institute of Technology and Science, India, 1998–2002.",
);

heading("Awards");
paragraph("Product Innovation Award — Avishkar Contest, 2006, Java Socket Adapter.");
paragraph("MD's Merit Award, 2005, meeting business targets related to SOAx implementation at ICICI Bank.");

const bytes = await doc.save();
writeFileSync(new URL("../public/resume.pdf", import.meta.url), bytes);
console.log(`Wrote resume.pdf (${bytes.length} bytes, ${doc.getPageCount()} pages)`);
