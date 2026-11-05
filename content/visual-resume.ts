/**
 * Wording from Allwins_Rajaiah_AI_Solutions_Architect.pdf.
 * The résumé prints a phone number, an email address, and a city; all are omitted here.
 */

export type VisualIcon =
  | "years"
  | "cloud"
  | "ai"
  | "data"
  | "team"
  | "architecture"
  | "app"
  | "devops"
  | "database"
  | "assist";

export const visualResume = {
  firstName: "Allwins Kannan",
  lastName: "Rajaiah",
  name: "Allwins Kannan Rajaiah",
  tagline: "AI Solutions Architect | Director of Technology | Agentic AI | Cloud | Data",
  linkedinLabel: "linkedin.com/in/allwinsrajaiah/",
  githubLabel: "github.com/rallwins",
  watermark: "Allwins Rajaiah",
  highlights: [
    { icon: "years", figure: "20+", label: "Years of Experience" },
    { icon: "cloud", figure: null, label: "Agentic AI on AWS" },
    { icon: "ai", figure: null, label: "AI-Driven Modernization" },
    { icon: "team", figure: null, label: "Technical Leadership & Delivery" },
  ],
  summary: [
    {
      lead: "AI Solutions Architect with 20+ years of experience",
      rest: "in delivering enterprise applications, cloud-native platforms, and AI-enabled solutions, translating business challenges into scalable, secure, and production-ready architectures.",
    },
    {
      lead: "Design end-to-end AI and cloud architectures on AWS,",
      rest: "integrating Generative AI, Agentic AI, Java, Spring Boot, Angular, React, microservices, and REST APIs.",
    },
    {
      lead: "Build agentic AI solutions",
      rest: "using Amazon Bedrock AgentCore, Strands Agents, MCP, RAG, and human-in-the-loop controls, with secure tool integration, observability, and evaluation.",
    },
    {
      lead: "Lead cloud-native application architecture and AI-enabled data engineering",
      rest: "with Databricks, Auto Loader, Lakeflow, PySpark, SQL, dbt, and Unity Catalog, delivering governed data products and automated reconciliation.",
    },
    {
      lead: "Drive technology strategy and engineering excellence",
      rest: "through governance, design reviews, roadmaps, security standards, and cross-functional leadership of development and QA teams.",
    },
  ],
  technologies: [
    {
      name: "Architecture & Leadership",
      icon: "architecture",
      color: "#1d3f73",
      detail:
        "Solution Architecture, Cloud Architecture, Architecture Governance, Design Reviews, Enterprise Modernization, Team Leadership, Estimation & Release Readiness",
    },
    {
      name: "AI & GenAI",
      icon: "ai",
      color: "#7b3fc4",
      detail:
        "Generative AI, Agentic AI, Amazon Bedrock, AgentCore, Strands Agents, MCP, RAG, Bedrock Knowledge Bases, LLM Applications, AI Governance, AI Evaluation, Langfuse",
    },
    {
      name: "Cloud & Platform",
      icon: "cloud",
      color: "#127a7f",
      detail: "AWS, Docker, Kubernetes, Terraform, Serverless, Cloud Security, Scalability & Cost Optimization",
    },
    {
      name: "Data Engineering",
      icon: "data",
      color: "#c4501b",
      detail:
        "Databricks, Lakeflow, Auto Loader, Databricks Workflows, Unity Catalog, PySpark, dbt, SQL, Data Pipelines",
    },
    {
      name: "Application & Integration",
      icon: "app",
      color: "#2b4c9b",
      detail:
        "Java, Spring Boot, Hibernate, Angular, Microservices, REST APIs, Redis, OAuth, JWT, Node.js, HTML, CSS, JavaScript, TypeScript",
    },
    {
      name: "DevOps & Observability",
      icon: "devops",
      color: "#b8174f",
      detail: "CI/CD, Git, Jenkins, AWS CodePipeline, Prometheus, Splunk, Datadog, OpenTelemetry",
    },
    {
      name: "Databases",
      icon: "database",
      color: "#1f7f62",
      detail: "Oracle, MySQL, DB2, Amazon RDS",
    },
    {
      name: "AI-Assisted Development",
      icon: "assist",
      color: "#cc2a5a",
      detail: "Claude Code, GitHub Copilot, Replit, Cursor",
    },
  ],
  roles: [
    {
      start: "Sep 2024",
      end: "Present",
      employer: "Tekizma",
      logo: "tekizma",
      title: "Director of Technology | AI Solutions Architect",
      points: ["Application modernization", "Agentic AI, MCP & RAG", "Databricks & reconciliation"],
    },
    {
      start: "Sep 2013",
      end: "Aug 2024",
      employer: "Advanced Software Design",
      logo: "asd",
      title: "Solutions Architect",
      points: ["Enterprise applications on AWS", "Application modernization", "NY State Health Plan Marketplace"],
    },
    {
      start: "Sep 2010",
      end: "Sep 2013",
      employer: "Marlabs Software",
      logo: "marlabs",
      title: "Technical Manager | Mobile Solutions Architecture",
      points: ["Mobile Centre of Excellence", "eFleetPro integration", "Team formation & hiring"],
    },
    {
      start: "Sep 2009",
      end: "Aug 2010",
      employer: "Mapview Geographical Solutions",
      logo: "mapview",
      title: "Tech Lead",
      points: ["Geographic solutions", "Payment gateway"],
    },
    {
      start: "Nov 2007",
      end: "Jun 2009",
      employer: "Star4ce Technologies, Inc.",
      logo: "star4ce",
      title: "Tech Lead / Senior J2EE",
      points: ["Web workflow solution", "SOAP integrations"],
    },
    {
      start: "Apr 2007",
      end: "Oct 2007",
      employer: "Amtex Systems, Inc.",
      logo: "amtex",
      title: "Team Lead",
      points: ["Multi-database connectivity", "Web interfaces"],
    },
    {
      start: "Apr 2004",
      end: "Feb 2007",
      employer: "3i-Infotech",
      logo: "3i-infotech",
      title: "Team Lead",
      points: ["Internet banking", "Compliance toolkit"],
    },
    {
      start: "May 2003",
      end: "Feb 2004",
      employer: "Asic Infotech Pvt. Ltd.",
      logo: "asic",
      title: "Java Developer",
      points: ["HR & accounts modules", "Database reports"],
    },
  ],
  achievements: [
    { icon: "data", figure: "50%", title: "Improved reconciliation accuracy", text: null, color: "#1d4fa3", tint: "#e8effb" },
    { icon: "years", figure: "5M", title: "Enrollments supported in 2020, NY State of Health", text: null, color: "#1f7f62", tint: "#e6f5ee" },
    { icon: "ai", figure: null, title: "AI-Driven Delivery", text: "AIDLC practices with human review and quality gates", color: "#7b3fc4", tint: "#f1eafb" },
    { icon: "team", figure: null, title: "Cross-functional Leadership", text: "Architecture governance across development and QA teams", color: "#c4501b", tint: "#fcefe6" },
  ],
  recent: {
    employer: "Tekizma",
    title: "Director of Technology | AI Solutions Architect",
    when: "Sep 2024 – Present",
    columns: [
      {
        heading: "Enterprise Application Modernization",
        points: [
          "Defined solution architecture, target-state roadmaps, and design standards for application, data, cloud, and AI platforms.",
          "Led the modernization of a legacy Spring/JSP application into a cloud-native platform on AWS.",
          "Developed AI-powered capabilities with Agentic AI and Amazon Bedrock AgentCore.",
          "Designed secure AI agent integration using the Model Context Protocol (MCP), with RAG over an enterprise knowledge base.",
          "Established AI-Driven Development Life Cycle (AIDLC) practices with human review and quality gates.",
        ],
      },
      {
        heading: "Databricks Data Engineering & Reconciliation",
        points: [
          "Built a Databricks platform with Auto Loader, Lakeflow, PySpark, SQL, dbt, and Databricks Workflows.",
          "Established data governance and reusable data products with Unity Catalog.",
          "Designed the end-to-end reconciliation architecture: mappings, validation rules, and exception handling.",
          "Developed an AI reconciliation agent that recommends corrective actions for analyst approval, traced with Langfuse.",
        ],
      },
    ],
  },
  education: {
    degree: "B.E., Computer Science & Engineering",
    school: "Bharathiar University, India",
  },
  certifications: [
    { name: "AWS Certified AI Practitioner", code: "AIF-C01", logo: "/logos/aws.svg" },
    { name: "HashiCorp Certified: Terraform Associate", code: "004", logo: "/logos/terraform.svg" },
  ],
} as const;
