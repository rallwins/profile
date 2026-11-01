/**
 * Wording from Allwins_Rajaiah_Director_of_Technology.pdf.
 * The résumé prints a phone number and an email address; both are omitted here.
 */

export const visualResume = {
  name: "Allwins Kannan Rajaiah",
  tagline: "DIRECTOR OF TECHNOLOGY | ENGINEERING LEADERSHIP & SOLUTIONS ARCHITECTURE",
  linkedinLabel: "linkedin.com/in/allwinsrajaiah/",
  highlights: [
    "20+ Years of Experience",
    "Engineering Leadership & Delivery",
    "Full-Stack & Cloud-Native Platforms",
    "AI / GenAI & Data Platforms",
  ],
  summary: [
    "Director of Technology with 20+ years of experience leading engineering, architecture, and delivery of full-stack, cloud-native, data, and AI platforms.",
    "Engineering leadership: own team structure, delivery planning, quality strategy, hiring, and mentoring, driving Agile execution and release quality from requirements through production.",
    "Hands-on architect in Java, Spring Boot, Angular, React, microservices and AWS, translating business goals into scalable, secure, and cost-effective solutions.",
    "AI and data modernization with Generative AI, Agentic AI, Amazon Bedrock, AgentCore Runtime, RAG, and MCP, and Databricks, PySpark, and dbt data platforms.",
    "Architecture governance and engineering excellence: standards, design reviews, CI/CD, and observability partnering with business and technology stakeholders.",
  ],
  technologies: [
    {
      name: "Leadership & Architecture",
      detail:
        "Engineering Leadership, Multi-Team Management (Dev & QA), Technology Strategy, Architecture Governance, Agile Delivery, Hiring & Mentoring, Stakeholder Management, Enterprise Modernization",
    },
    {
      name: "Full Stack & Application",
      detail:
        "Java, Spring Boot, Hibernate, Angular, React, Node.js, REST APIs, JavaScript, HTML, OAuth, SAML, JWT",
    },
    {
      name: "Distributed Systems & Messaging",
      detail:
        "Microservices, Event-Driven Architecture, Apache Kafka, Redis (Caching, Pub/Sub), API Design, Integration Patterns",
    },
    {
      name: "Cloud & Platform",
      detail:
        "AWS (EC2, ECS, Fargate, Lambda, VPC, ALB/NLB, S3, CloudFront, IAM, KMS, Cognito, WAF), Kubernetes, Docker, Terraform, CloudFormation, Serverless, Cloud Security & Cost Optimization, GCP (working knowledge)",
    },
    {
      name: "AI & GenAI",
      detail:
        "Generative AI, Agentic AI, Amazon Bedrock, AgentCore Runtime, RAG, MCP, LLM Applications, Knowledge Bases, AI Guardrails, AI Governance, AI Evaluation, Langfuse",
    },
    {
      name: "Data Engineering",
      detail:
        "Databricks (on Azure), Spark, PySpark, dbt, SQL, Data Pipelines, Data Modeling, Data Quality, Data Governance",
    },
    {
      name: "DevOps & Observability",
      detail:
        "CI/CD, AWS CodePipeline, GitHub Actions, Jenkins, CloudWatch, Prometheus, Automated Testing, Release Engineering",
    },
    {
      name: "Databases & Search",
      detail: "Oracle, PostgreSQL, MySQL, DB2, MongoDB, DynamoDB, Elasticsearch",
    },
    {
      name: "Mobile",
      detail: "Flutter, Android, iOS",
    },
    {
      name: "AI-Assisted Development",
      detail: "Claude Code, GitHub Copilot, Cursor, Replit",
    },
  ],
  roles: [
    {
      start: "Sep 2024",
      end: "Present",
      employer: "Tekizma Inc.",
      title: "Director of Technology",
      points: ["Engineering and QA leadership", "Technology strategy and solution architecture", "Data, cloud, and AI platforms"],
    },
    {
      start: "Sep 2013",
      end: "Aug 2024",
      employer: "Advanced Software Design",
      title: "Solutions Architect",
      points: ["Enterprise application architecture", "Application modernization", "Official Health Plan Marketplace for New York State of Health"],
    },
    {
      start: "Sep 2010",
      end: "Sep 2013",
      employer: "Marlabs Software",
      title: "Technical Manager | Solutions Architecture & Mobile Platforms",
      points: ["Mobile Center of Excellence", "Enterprise integration", "Team formation, hiring, and delivery"],
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
    { figure: "50%", text: "Enhanced reconciliation accuracy" },
    { figure: "40%", text: "Reduced development effort" },
    { figure: "Dev & QA", text: "Lead engineering teams across application, data, and AI, and direct the QA function" },
  ],
  recent: {
    heading: "Tekizma Inc. | Director of Technology",
    when: "Sep 2024 – Present",
    points: [
      "Lead engineering teams across application, data, and AI workstreams, owning team structure, sprint planning, hiring, mentoring, and delivery.",
      "Define technology strategy, solution architecture, and technical roadmaps for application, data, cloud, and AI platforms.",
      "Led the modernization and AWS migration of a Spring/JSP enterprise application to Spring Boot, Angular, REST APIs, Hibernate, and MySQL.",
      "Direct the QA function, aligning test strategy, release readiness, and defect management with Agile delivery.",
      "Architect Databricks data platforms on Azure with PySpark, SQL, and dbt.",
      "Design reconciliation (Recon) architecture with validation rules, data quality controls, and exception handling.",
      "Integrate Generative AI with enterprise data platforms for natural-language data interaction, automated documentation, and AI-assisted engineering.",
      "Establish architecture governance and engineering standards, including design reviews, security, and observability.",
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
