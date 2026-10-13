/**
 * Wording from Allwins_Rajaiah_Visual_Resume.pdf.
 * The sheet prints a mobile number; it is omitted here. It has no street address.
 */

export const visualResume = {
  name: "Allwins Kannan Rajaiah",
  tagline:
    "SOLUTIONS ARCHITECT | DIRECTOR OF TECHNOLOGY | AI | CLOUD | DATA | FULL STACK",
  linkedinLabel: "linkedin.com/in/allwinsrajaiah/",
  highlights: [
    "22+ Years of Experience",
    "Enterprise Architecture & Cloud",
    "AI / GenAI & Data Modernization",
    "Technical Leadership & Delivery",
  ],
  summary: [
    "Director of Technology and Solutions Architect with 22+ years of experience leading technology strategy, enterprise architecture, engineering, and delivery across Cloud, AI/GenAI, Data, Microservices, and Full-Stack platforms.",
    "Architect end-to-end enterprise and cloud solutions, translating business requirements into scalable, secure, resilient, and cost-effective architectures across AWS and GCP.",
    "Lead AI and data modernization initiatives spanning Generative AI, Agentic AI, AgentCore Runtime, Amazon Bedrock, RAG, MCP, AI Governance, Data Engineering, Databricks, PySpark, and dbt.",
    "Hands-on engineering leader with strong expertise in Java, Spring Boot, Angular, Kubernetes, Docker, Terraform, and CI/CD, with a focus on cloud-native application delivery.",
    "Drive architecture governance, engineering excellence, Agile delivery, and cross-functional technical leadership, partnering with business and technology stakeholders to deliver enterprise-scale solutions.",
  ],
  technologies: [
    {
      name: "Architecture & Tech Leadership",
      detail:
        "Solution & Cloud Architecture, Technology Strategy, Architecture Governance, Enterprise Modernization, Microservices, Distributed Systems, Event-Driven Architecture, API Design",
    },
    {
      name: "AI, GenAI",
      detail:
        "AIDLC, Generative AI, Agentic AI, AgentCore Runtime, Bedrock, RAG, MCP, LLM Applications, Knowledge Bases, AI Guardrails, AI Governance, AI Evaluation, Langfuse",
    },
    {
      name: "Cloud & Platform",
      detail:
        "AWS, GCP, Kubernetes, Docker, Terraform, Serverless, Cloud Security, Scalability, Reliability & Cost Optimization",
    },
    {
      name: "Data Architecture",
      detail:
        "Data Architecture, Data Pipelines, Data Modeling, Spark, Databricks, Data Quality, Data Governance",
    },
    {
      name: "DevOps",
      detail: "CI/CD, GitHub Actions, Jenkins, Automated Testing, Release Engineering",
    },
    {
      name: "Full Stack & Application",
      detail:
        "Java, Spring Boot, Hibernate, Angular, React, Node.js, REST APIs, JavaScript, HTML, OAuth, SAML, JWT",
    },
    {
      name: "Databases & Search",
      detail: "Oracle, PostgreSQL, MySQL, DB2, MongoDB, DynamoDB, Elasticsearch",
    },
    {
      name: "Mobile & Emerging Tech",
      detail: "Flutter, Android, iOS, Replit, Cursor, GitHub Copilot",
    },
  ],
  roles: [
    {
      start: "Sep 2024",
      end: "Present",
      employer: "Tekizma Inc.",
      title: "Director of Technology",
      points: [
        "Data & Application Engineering",
        "Solution Architecture",
        "AI/GenAI and Cloud initiatives",
      ],
    },
    {
      start: "Sep 2013",
      end: "Aug 2024",
      employer: "Advanced Software Design",
      title: "Solutions Architect / Application Designer",
      points: ["Solution architecture", "Application design", "Team leadership"],
    },
    {
      start: "Sep 2010",
      end: "Sep 2013",
      employer: "Marlabs Software",
      title: "Technical Manager",
      points: ["Solution design", "Team leadership", "Client delivery"],
    },
    {
      start: "Sep 2009",
      end: "Aug 2010",
      employer: "MapView Geographical Solutions (P) Ltd",
      title: "J2EE Tech Lead",
      points: [
        "Implemented geographical solutions to replace Google Maps for Saudi Space Research Centre.",
      ],
    },
    {
      start: "Nov 2007",
      end: "Sep 2009",
      employer: "Star4ce Technologies Inc",
      title: "J2EE Tech Lead",
      points: [
        "Converted a legacy application into a web-based workflow solution, implementing Oracle data structures and Spring/Hibernate-based business components.",
      ],
    },
    {
      start: "Apr 2007",
      end: "Sep 2007",
      employer: "Amtex Systems",
      title: "Senior Programmer Analyst",
      points: [
        "Developed multi-database application connectivity across Oracle, SQL Server, and MySQL, including PL/SQL development, query optimization, and database objects.",
      ],
    },
    {
      start: "Apr 2004",
      end: "Jan 2007",
      employer: "3i Infotech",
      title: "Senior Software Engineer",
      points: [
        "Contributed to KASTLE Web Internet Banking, implementing Oracle database components and transaction-intensive functionality including fund transfers and approval workflows.",
      ],
    },
    {
      start: "May 2003",
      end: "Feb 2004",
      employer: "Asic Infotech Pvt Ltd",
      title: "Software engineer",
      points: [
        "Developed core modules for Human Resources, Accounts, and Registration applications based on functional requirements and existing Oracle data models.",
      ],
    },
  ],
  achievements: [
    { figure: "50%", text: "Improved reconciliation accuracy" },
    { figure: "40%", text: "Reduced development effort" },
    { figure: "Enterprise Scale", text: "Designed and delivered scalable cloud and data platforms" },
    {
      figure: "Cross-functional Leadership",
      text: "Led engineering, data, QA and platform teams",
    },
  ],
  recent: {
    heading:
      "Tekizma Inc. | Director of Technology | Data and Application Engineering & Solution Architecture",
    when: "Sep 2024 – Present",
    points: [
      "Define technology strategy and technical roadmaps for data, cloud and AI platforms aligned with business outcomes.",
      "Lead architecture and solution design across data platforms, cloud services, microservices, APIs and AI/ML capabilities.",
      "Establish architecture governance, engineering standards and design patterns for scalability, security, data quality and resilience.",
      "Architect Azure Databricks data platforms covering ingestion, transformation, modeling, orchestration and reusable data products.",
      "Design and optimize data pipelines using PySpark, SQL, dbt and Databricks.",
      "Design reconciliation (Recon) architecture and data flows with data quality controls and scalable processing patterns.",
      "Design cloud architectures in AWS covering compute, storage, networking, security, monitoring, availability, scalability and cost optimization.",
      "Lead legacy application modernization and cloud migration from Spring/JSP to Spring Boot, Angular, REST API, Hibernate and MySQL on AWS.",
      "Drive decomposition of legacy components into modern application and API layers.",
      "Integrate AI/ML capabilities for intelligent data processing, natural-language interaction and AI-assisted engineering workflows.",
      "Lead architecture reviews, technical decisions, risk management and stakeholder communication.",
      "Provide technical leadership and mentoring across data engineering, application development, QA and cross-functional teams.",
    ],
  },
  education: {
    degree: "B.E., Computer Science & Engineering",
    school: "Amrita Institute, Bharathiar University, India",
  },
  certification: {
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
  },
} as const;
