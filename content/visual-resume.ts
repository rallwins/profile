/**
 * Wording from Allwins_Rajaiah_AI_Solutions_Architect.pdf.
 * The résumé prints a phone number, an email address, and a city; all are omitted here.
 */

export const visualResume = {
  name: "Allwins Kannan Rajaiah",
  tagline: "AI SOLUTIONS ARCHITECT",
  linkedinLabel: "linkedin.com/in/allwinsrajaiah/",
  highlights: [
    "20+ Years of Experience",
    "Agentic AI on AWS",
    "AI-Driven Modernization",
    "Data Platforms & Governance",
  ],
  summary: [
    "AI Solutions Architect with 20+ years of experience in delivering enterprise applications, cloud-native platforms, and AI-enabled solutions.",
    "End-to-end AI and cloud architectures on AWS, integrating Generative AI, Agentic AI, Java, Spring Boot, Angular, React, microservices, and REST APIs.",
    "Agentic AI with Amazon Bedrock AgentCore, Strands Agents, MCP, RAG, and human-in-the-loop controls, with secure tool integration, observability, and evaluation.",
    "Cloud-native application architecture and AI-enabled data engineering with Databricks, Auto Loader, Lakeflow, PySpark, SQL, dbt, and Unity Catalog.",
    "Technology strategy and engineering excellence: governance, design reviews, roadmaps, security standards, and cross-functional leadership of development and QA teams.",
  ],
  technologies: [
    {
      name: "Architecture & Leadership",
      detail:
        "Solution Architecture, Cloud Architecture, Architecture Governance, Design Reviews, Enterprise Modernization, Team Leadership, Estimation & Release Readiness",
    },
    {
      name: "AI & GenAI",
      detail:
        "Generative AI, Agentic AI, Amazon Bedrock, AgentCore, Strands Agents, MCP, RAG, Bedrock Knowledge Bases, LLM Applications, AI Governance, AI Evaluation, Langfuse",
    },
    {
      name: "Cloud & Platform",
      detail: "AWS, Docker, Kubernetes, Terraform, Serverless, Cloud Security, Scalability & Cost Optimization",
    },
    {
      name: "Data Engineering",
      detail:
        "Databricks, Lakeflow, Auto Loader, Databricks Workflows, Unity Catalog, PySpark, dbt, SQL, Data Pipelines",
    },
    {
      name: "Application & Integration",
      detail:
        "Java, Spring Boot, Hibernate, Angular, Microservices, REST APIs, Redis, OAuth, JWT, Node.js, HTML, CSS, JavaScript, TypeScript",
    },
    {
      name: "DevOps & Observability",
      detail: "CI/CD, Git, Jenkins, AWS CodePipeline, Prometheus, Splunk, Datadog, OpenTelemetry",
    },
    {
      name: "Databases",
      detail: "Oracle, MySQL, DB2, Amazon RDS",
    },
    {
      name: "AI-Assisted Development",
      detail: "Claude Code, GitHub Copilot, Replit, Cursor",
    },
  ],
  roles: [
    {
      start: "Sep 2024",
      end: "Present",
      employer: "Tekizma",
      title: "Director of Technology | AI Solutions Architect",
      points: ["Enterprise application modernization", "Agentic AI, MCP, and RAG in the application", "Databricks data engineering and reconciliation"],
    },
    {
      start: "Sep 2013",
      end: "Aug 2024",
      employer: "Advanced Software Design",
      title: "Solutions Architect",
      points: ["Multi-tier enterprise applications on AWS", "Application modernization", "Official Health Plan Marketplace for New York State of Health"],
    },
    {
      start: "Sep 2010",
      end: "Sep 2013",
      employer: "Marlabs Software",
      title: "Technical Manager | Mobile Solutions Architecture",
      points: ["Mobile Centre of Excellence", "Enterprise integration", "Team formation, hiring, and delivery"],
    },
    {
      start: "Sep 2009",
      end: "Aug 2010",
      employer: "Mapview Geographical Solutions",
      title: "Tech Lead",
      points: [
        "Implemented geographical solutions to replace Google Maps for Saudi Space Research Centre.",
      ],
    },
    {
      start: "Nov 2007",
      end: "Jun 2009",
      employer: "Star4ce Technologies, Inc.",
      title: "Tech Lead / Senior J2EE",
      points: [
        "Converted a legacy application into a web-based workflow solution, implementing Oracle data structures and Spring/Hibernate-based business components.",
      ],
    },
    {
      start: "Apr 2007",
      end: "Oct 2007",
      employer: "Amtex Systems, Inc.",
      title: "Team Lead",
      points: [
        "Developed multi-database application connectivity across Oracle, SQL Server, and MySQL, including PL/SQL development, query optimization, and database objects.",
      ],
    },
    {
      start: "Apr 2004",
      end: "Feb 2007",
      employer: "3i-Infotech",
      title: "Team Lead",
      points: [
        "Contributed to KASTLE Web Internet Banking, implementing Oracle database components and transaction-intensive functionality including fund transfers and approval workflows.",
      ],
    },
    {
      start: "May 2003",
      end: "Feb 2004",
      employer: "Asic Infotech Pvt. Ltd.",
      title: "Java Developer",
      points: [
        "Developed core modules for Human Resources, Accounts, and Registration applications based on functional requirements and existing Oracle data models.",
      ],
    },
  ],
  achievements: [
    { figure: "5M", text: "Enrollments supported in 2020 on the official Health Plan Marketplace for New York State of Health" },
    { figure: "50%", text: "Improved reconciliation accuracy" },
    { figure: "20+", text: "Years delivering enterprise applications, cloud-native platforms, and AI-enabled solutions" },
    { figure: "AIF-C01", text: "AWS Certified AI Practitioner" },
  ],
  recent: {
    heading: "Tekizma | Director of Technology | AI Solutions Architect",
    when: "Sep 2024 – Present",
    points: [
      "Define solution architecture, target-state roadmaps, and design standards for application, data, cloud, and AI platforms.",
      "Led the modernization of a legacy Spring/JSP application into a cloud-native platform on AWS.",
      "Developed AI-powered application capabilities with Agentic AI and Amazon Bedrock AgentCore.",
      "Designed secure AI agent integration using the Model Context Protocol (MCP).",
      "Implemented RAG-based AI workflows with an enterprise knowledge base.",
      "Established AI-Driven Development Life Cycle (AIDLC) practices with human review and quality gates.",
      "Built a Databricks platform with Auto Loader, Lakeflow, PySpark, SQL, dbt, and Unity Catalog.",
      "Designed the end-to-end data reconciliation architecture and an AI reconciliation agent.",
    ],
  },
  education: {
    degree: "B.E., Computer Science & Engineering",
    school: "Bharathiar University, India",
  },
  certification: {
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
  },
} as const;
