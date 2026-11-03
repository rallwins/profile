export type RoleWeight = "recent" | "early";

export type RoleProject = {
  title: string;
  responsibilities: string[];
  achievement: string;
  technologies: string[];
};

export type Role = {
  id: string;
  employer: string;
  location: string | null;
  start: string;
  end: string;
  title: string;
  weight: RoleWeight;
  summary: string | null;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  projects?: RoleProject[];
};

export const roles: Role[] = [
  {
    id: "tekizma",
    employer: "Tekizma",
    location: "India",
    start: "Sep 2024",
    end: "Present",
    title: "Director of Technology | AI Solutions Architect",
    weight: "recent",
    summary:
      "Lead enterprise technology direction by defining solution architecture, target-state roadmaps, and design standards for application, data, cloud, and AI platforms, while overseeing architecture governance across development and QA teams.",
    responsibilities: [],
    technologies: [],
    achievements: [
      "Improved reconciliation accuracy by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.",
      "Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG to streamline code development, enable intelligent workflows, and improve contextual access to enterprise knowledge.",
    ],
    projects: [
      {
        title: "Enterprise Application Modernization",
        responsibilities: [
          "Led the modernization of a legacy Spring/JSP enterprise application into a cloud-native platform built on Spring Boot, Angular, REST APIs, Hibernate, MySQL, and Redis, delivered with Docker containerization, Terraform-based infrastructure provisioning, AWS CodePipeline CI/CD, and end-to-end observability using OpenTelemetry, Datadog, and Splunk.",
          "Defined the target AWS architecture across EC2, ECS/Fargate, and Lambda, with VPC networking, ALB/NLB, and CloudFront for delivery, secured through IAM, KMS, Secrets Manager, Cognito, and WAF, and monitored centrally via CloudWatch.",
          "Developed AI-powered application capabilities using Agentic AI and Amazon Bedrock AgentCore, enabling intelligent, task-oriented workflows integrated with enterprise application services and business processes.",
          "Designed secure AI agent integration using the Model Context Protocol (MCP), enabling AI agents to interact with application tools, APIs, and enterprise services through controlled, standardized interfaces.",
          "Implemented RAG-based AI workflows with an enterprise knowledge base, leveraging enterprise knowledge retrieval and Claude Code to support intelligent information access, contextual responses, and AI-assisted application functionality.",
          "Established AI-Driven Development Life Cycle (AIDLC) practices across requirements analysis, solution design, implementation, testing, and validation, incorporating structured human review and quality gates to improve delivery consistency, maintainability, and engineering governance.",
        ],
        achievement:
          "Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG to streamline code development, enable intelligent workflows, and improve contextual access to enterprise knowledge.",
        technologies: [
          "Spring Boot",
          "Angular",
          "Hibernate",
          "MySQL",
          "Redis",
          "Docker",
          "Terraform",
          "AWS CodePipeline",
          "OpenTelemetry",
          "Datadog",
          "Splunk",
          "Amazon Bedrock",
          "AgentCore (Runtime, Gateway, Identity)",
          "Strands Agents",
          "MCP",
          "RAG",
          "Bedrock Knowledge Bases",
          "Claude Code",
        ],
      },
      {
        title: "Databricks Data Engineering & Reconciliation",
        responsibilities: [
          "Built a scalable Databricks data engineering platform supporting incremental data ingestion through Auto Loader and Lakeflow, data modeling using PySpark, SQL, and dbt, and workflow orchestration through Databricks Workflows.",
          "Established data governance and reusable data-product capabilities using Unity Catalog, enabling governed data access and natural-language interaction with enterprise data, while leveraging GitHub Copilot to accelerate engineering productivity.",
          "Designed the end-to-end data reconciliation architecture, defining source-to-target mappings, data quality and validation rules, exception-handling mechanisms, and reconciliation controls across ingestion and transformation layers; implemented continuous delivery workflows using GitHub Actions.",
          "Developed an AI reconciliation agent to investigate Databricks pipeline exceptions, correlate failures with source-to-target mappings and operational runbooks, and recommend corrective actions for analyst review and approval. Integrated Langfuse for execution tracing and evaluation.",
        ],
        achievement:
          "Improved reconciliation accuracy by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.",
        technologies: [
          "Databricks",
          "Auto Loader",
          "Delta Live Tables",
          "Databricks Workflows",
          "Unity Catalog",
          "PySpark",
          "SQL",
          "dbt",
          "Langfuse",
          "GitHub Actions",
          "GitHub Copilot",
        ],
      },
    ],
  },
  {
    id: "asd",
    employer: "Advanced Software Design, Inc.",
    location: "USA",
    start: "Sep 2013",
    end: "Aug 2024",
    title: "Solutions Architect",
    weight: "recent",
    summary:
      "Delivering multi-tier enterprise applications on AWS and directing their modernization, from service boundaries and API contracts through release readiness.",
    responsibilities: [
      "Delivered multi-tier enterprise applications using Spring Boot, Angular, microservices, REST APIs, and AWS, with secure, high-performance APIs covering authentication, authorization, and operational readiness.",
      "Designed AWS deployments on EC2, ECS, Lambda, and Amazon RDS, using VPC, ELB, IAM, S3, and CloudFront for networking, load balancing, access control, storage, and content delivery.",
      "Defined service boundaries, API contracts, and integration patterns for complex enterprise workflows.",
      "Directed application modernization, assessing legacy components and defining incremental migration strategies.",
      "Introduced reusable design patterns and technical components, improving consistency and development efficiency.",
      "Collaborated with development, QA, business analysis, and delivery teams on estimation, release readiness, and resolution of complex production issues.",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "REST APIs",
      "Microservices",
      "AWS (EC2, ECS, Lambda, S3, RDS, VPC, ELB, IAM, CloudFront)",
      "Hibernate",
      "Oracle",
      "DB2",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
    ],
    achievements: [
      "Delivered the official Health Plan Marketplace for New York State of Health as Solutions Architect, supporting 5 million enrollments in 2020 at a peak load of concurrent users.",
    ],
  },
  {
    id: "marlabs",
    employer: "Marlabs Software Pvt. Ltd.",
    location: null,
    start: "Sep 2010",
    end: "Sep 2013",
    title: "Technical Manager | Mobile Solutions Architecture",
    weight: "recent",
    summary:
      "Leading the Mobile Centre of Excellence and defining cross-platform mobile architecture and enterprise integration for client and internal initiatives.",
    responsibilities: [
      "Defined cross-platform mobile solution architecture for iOS, Android, and PhoneGap, covering security, authentication, REST APIs, and logging, and produced application designs, SDLC plans, and delivery roadmaps.",
      "Delivered eFleetPro enterprise integration solutions connecting construction-equipment manufacturers, dealers, and rental fleets with ERP systems, punch-out integrations, and payment gateways.",
      "Established signed mobile-to-enterprise integration patterns for secure communication with backend services and external systems.",
      "Led the Mobile Centre of Excellence, setting platform standards and managing team formation, hiring, and delivery across client and internal initiatives.",
      "Presented cross-platform capabilities and technology solutions to customers and leadership, supporting client engagement and revenue growth.",
    ],
    technologies: [
      "iOS",
      "Android",
      "PhoneGap",
      "REST APIs",
      "Java",
      "Mobile Architecture",
      "Enterprise Integration",
      "ERP Integration",
      "Payment Gateway Integration",
      "Security & Authentication",
    ],
    achievements: [],
  },
  {
    id: "mapview",
    employer: "Mapview Geographical Solutions",
    location: null,
    start: "Sep 2009",
    end: "Aug 2010",
    title: "Tech Lead",
    weight: "early",
    summary: null,
    responsibilities: [
      "Created software solutions for the Saudi Space Research Centre (Riyadh, Saudi Arabia) that provided advertising over geographic maps, a geographical solution for financial institutions, and a ministry of education and national security system accessible with web browsers and mobile devices.",
      "Completed requirements gathering and performed design and development for the database schema in Postgres, services to utilize maps with panoramic views, and a Payment gateway for online payment functionality.",
    ],
    technologies: ["Postgres"],
    achievements: [
      "Implemented geographical solutions to replace Google Maps for Saudi Space Research Centre.",
    ],
  },
  {
    id: "star4ce",
    employer: "Star4ce Technologies, Inc.",
    location: null,
    start: "Nov 2007",
    end: "Jun 2009",
    title: "Tech Lead / Senior J2EE",
    weight: "early",
    summary: null,
    responsibilities: [
      "Converted a legacy application into a web-based workflow solution, implementing Oracle data structures and Spring/Hibernate-based business components.",
      "Built SOAP integrations using Axis/Axis2 for connectivity with internal and external systems, including Warner Brothers and Donovan Data Systems.",
      "Implemented application-level logging, security, exception handling, batch scheduling, and Linux deployment for production operations.",
    ],
    technologies: ["Oracle", "Spring", "Hibernate", "SOAP", "Axis", "Axis2", "Linux"],
    achievements: [],
  },
  {
    id: "amtex",
    employer: "Amtex Systems, Inc.",
    location: null,
    start: "Apr 2007",
    end: "Oct 2007",
    title: "Team Lead",
    weight: "early",
    summary: null,
    responsibilities: [
      "Developed multi-database application connectivity across Oracle, SQL Server, and MySQL, including PL/SQL development, query optimization, and database objects.",
      "Built reusable object-oriented application modules to support common functionality across multiple development components.",
      "Delivered web application interfaces using JavaScript, AJAX, CSS, and Rico, followed by deployment in Linux environments.",
    ],
    technologies: [
      "J2EE",
      "Oracle 10g",
      "SQL Server",
      "MySQL",
      "PL/SQL",
      "JavaScript",
      "AJAX",
      "CSS",
      "OOP",
      "Linux",
    ],
    achievements: [],
  },
  {
    id: "3i-infotech",
    employer: "3i-Infotech",
    location: null,
    start: "Apr 2004",
    end: "Feb 2007",
    title: "Team Lead",
    weight: "early",
    summary: null,
    responsibilities: [
      "Contributed to KASTLE Web Internet Banking, implementing Oracle database components and transaction-intensive functionality including fund transfers and approval workflows.",
      "Developed rich, cross-browser banking interfaces using GWT, JavaScript/JSNI, JUnit, internationalization, and HTTP services.",
      "Supported the SOAx Sarbanes-Oxley Compliance Toolkit through technology evaluation, change-request implementation, release planning, and production issue analysis.",
    ],
    technologies: [
      "Java",
      "GWT",
      "JavaScript/JSNI",
      "Oracle 9i",
      "JUnit",
      "HTTP Services",
      "SOA",
      "PL/SQL",
    ],
    achievements: [],
  },
  {
    id: "asic",
    employer: "Asic Infotech Pvt. Ltd.",
    location: null,
    start: "May 2003",
    end: "Feb 2004",
    title: "Java Developer",
    weight: "early",
    summary: null,
    responsibilities: [
      "Developed core modules for Human Resources, Accounts, and Registration applications based on functional requirements and existing Oracle data models.",
      "Created database-driven reports and custom queries to support business and operational reporting.",
      "Participated in requirements analysis, application coding, database integration, and functional validation.",
    ],
    technologies: ["Java", "J2EE", "Oracle 8i", "SQL/PL-SQL", "Reporting"],
    achievements: [],
  },
];
