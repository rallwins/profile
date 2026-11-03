export type FlowNode = {
  id: string;
  logical: string;
  physical: string;
  description: string;
  column?: number;
  row?: number;
  tone?: "source" | "build" | "control" | "intelligence" | "outcome";
};

export type FlowEdge = {
  id: string;
  source: string;
  target: string;
};

export type Diagram = {
  id: string;
  figure: string;
  title: string;
  caption: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  headlineOutcome: string;
  businessProblem: string;
  architecture: string;
  technologyChoices: string[];
  designDecisions: string[];
  tradeoffs: string[];
  security: string;
  scalability: string;
  dataFlow: string;
  outcome: string;
  diagramId: string;
};

export type Adr = {
  slug: string;
  title: string;
  context: string;
  decision: string;
  alternatives: string[];
  tradeoffs: string[];
  outcome: string;
};

export const dataPlatformDiagram: Diagram = {
  id: "data-platform",
  figure: "Figure 1",
  title: "Enterprise data platform",
  caption:
    "Source systems become data products. Reconciliation sits beside validation rather than after the fact.",
  nodes: [
    {
      id: "sources",
      logical: "Source systems",
      physical: "Operational sources",
      description: "Systems of record that the platform does not replace.",
      column: 0,
      row: 1,
    },
    {
      id: "ingestion",
      logical: "Ingestion",
      physical: "Auto Loader and Lakeflow",
      description: "Incremental ingestion that lands data with enough lineage to trace a later exception.",
      column: 1,
      row: 1,
    },
    {
      id: "transform",
      logical: "Transformation",
      physical: "PySpark and dbt",
      description: "Reusable transformation, not one-off notebooks as the only contract.",
      column: 2,
      row: 1,
    },
    {
      id: "validation",
      logical: "Validation",
      physical: "Data quality controls",
      description: "Rules, exceptions, and source-to-target checks.",
      column: 3,
      row: 1,
    },
    {
      id: "recon",
      logical: "Reconciliation",
      physical: "Reconciliation controls",
      description:
        "Source-to-target mappings, data quality and validation rules, exception handling, and reconciliation controls across ingestion and transformation.",
      column: 4,
      row: 0,
    },
    {
      id: "recon-agent",
      logical: "Exception investigation",
      physical: "AI reconciliation agent",
      description:
        "An agent correlates pipeline failures with mappings and runbooks and recommends fixes for analyst approval, traced and evaluated in Langfuse.",
      column: 5,
      row: 0,
    },
    {
      id: "model",
      logical: "Data modeling",
      physical: "PySpark, SQL, and dbt",
      description: "Models shaped for reuse, not only for a single report, orchestrated with Databricks Workflows.",
      column: 4,
      row: 1,
    },
    {
      id: "products",
      logical: "Data products",
      physical: "Governed in Unity Catalog",
      description: "Reusable assets with governed access that other teams can consume without recopying the pipeline.",
      column: 5,
      row: 1,
    },
    {
      id: "analytics",
      logical: "Analytics and applications",
      physical: "Downstream use",
      description: "Analytics and applications that read the products.",
      column: 6,
      row: 1,
    },
  ],
  edges: [
    { id: "s-i", source: "sources", target: "ingestion" },
    { id: "i-t", source: "ingestion", target: "transform" },
    { id: "t-v", source: "transform", target: "validation" },
    { id: "v-r", source: "validation", target: "recon" },
    { id: "r-x", source: "recon", target: "recon-agent" },
    { id: "v-m", source: "validation", target: "model" },
    { id: "m-p", source: "model", target: "products" },
    { id: "p-a", source: "products", target: "analytics" },
  ],
};

export const modernizationDiagram: Diagram = {
  id: "modernization",
  figure: "Figure 2",
  title: "Legacy application modernization",
  caption:
    "The path for the Spring/JSP application: decompose, expose REST, rebuild services and UI, and land on MySQL, Redis, and AWS.",
  nodes: [
    {
      id: "legacy",
      logical: "Legacy",
      physical: "Spring / JSP",
      description: "The starting estate: a Spring/JSP enterprise application.",
      column: 0,
      row: 0,
    },
    {
      id: "decompose",
      logical: "Decomposition",
      physical: "Bounded components",
      description: "Break the legacy surface into components that can move independently.",
      column: 1,
      row: 0,
    },
    {
      id: "rest",
      logical: "REST API layer",
      physical: "REST contracts",
      description: "A stable API boundary between clients and services.",
      column: 2,
      row: 0,
    },
    {
      id: "services",
      logical: "Spring Boot services",
      physical: "Spring Boot, Hibernate",
      description: "Services that own a business capability and a persistence model.",
      column: 3,
      row: 0,
    },
    {
      id: "ui",
      logical: "Angular UI",
      physical: "Angular",
      description: "A client that talks to the API instead of rendering on the server page.",
      column: 4,
      row: 0,
    },
    {
      id: "mysql",
      logical: "Data",
      physical: "MySQL, Redis",
      description: "The relational store for the modernized application, with Redis for caching.",
      column: 5,
      row: 0,
    },
    {
      id: "aws",
      logical: "AWS",
      physical: "ECS/Fargate, EC2, Lambda",
      description:
        "The cloud target: containers built with Docker, infrastructure in Terraform, delivery through AWS CodePipeline, and IAM, KMS, Secrets Manager, Cognito, and WAF for security.",
      column: 6,
      row: 0,
    },
  ],
  edges: [
    { id: "l-d", source: "legacy", target: "decompose" },
    { id: "d-r", source: "decompose", target: "rest" },
    { id: "r-s", source: "rest", target: "services" },
    { id: "s-u", source: "services", target: "ui" },
    { id: "s-m", source: "services", target: "mysql" },
    { id: "s-a", source: "services", target: "aws" },
  ],
};

export const aiDataDiagram: Diagram = {
  id: "ai-enterprise-data",
  figure: "Figure 3",
  title: "Agentic AI in the application",
  caption:
    "Agents grounded in enterprise knowledge reach application tools and services only through MCP's controlled interfaces.",
  nodes: [
    {
      id: "request",
      logical: "Business task",
      physical: "User or business process",
      description: "A task-oriented request from a user or a business process inside the application.",
      column: 0,
      row: 0,
    },
    {
      id: "agent",
      logical: "AI agent",
      physical: "Amazon Bedrock AgentCore",
      description: "Agentic AI that plans and carries out an intelligent, task-oriented workflow.",
      column: 1,
      row: 0,
    },
    {
      id: "knowledge",
      logical: "Enterprise knowledge",
      physical: "RAG knowledge base",
      description: "Enterprise knowledge retrieval for contextual responses and information access.",
      column: 2,
      row: 0,
    },
    {
      id: "gateway",
      logical: "Tool interfaces",
      physical: "Model Context Protocol",
      description: "Controlled, standardized interfaces to application tools, APIs, and enterprise services.",
      column: 2,
      row: 1,
    },
    {
      id: "services",
      logical: "Enterprise services",
      physical: "Application APIs and processes",
      description: "The application services and business processes the workflow is integrated with.",
      column: 3,
      row: 1,
      tone: "outcome",
    },
  ],
  edges: [
    { id: "q-a", source: "request", target: "agent" },
    { id: "a-k", source: "agent", target: "knowledge" },
    { id: "a-g", source: "agent", target: "gateway" },
    { id: "g-s", source: "gateway", target: "services" },
  ],
};

export const aiActionDiagram: Diagram = {
  id: "ai-action",
  figure: "Figure 4",
  title: "From enterprise data to an enterprise action",
  caption:
    "Retrieval and context come before the model. An agent is allowed to act only inside a defined boundary.",
  nodes: [
    {
      id: "edata",
      logical: "Enterprise data",
      physical: "Trusted data products",
      description: "Data with an owner and a quality bar.",
      column: 0,
      row: 0,
    },
    {
      id: "retrieval",
      logical: "Retrieval",
      physical: "RAG retrieval",
      description: "Find the smallest useful context.",
      column: 1,
      row: 0,
    },
    {
      id: "context",
      logical: "Context",
      physical: "Assembled context",
      description: "What the model is allowed to see for this request.",
      column: 2,
      row: 0,
    },
    {
      id: "llm",
      logical: "LLM",
      physical: "LLM",
      description: "The model proposes. It does not skip policy.",
      column: 3,
      row: 0,
    },
    {
      id: "agent",
      logical: "AI agent",
      physical: "Agentic AI, MCP",
      description:
        "Agentic AI and MCP, with tool use kept inside an explicit boundary.",
      column: 4,
      row: 0,
    },
    {
      id: "action",
      logical: "Enterprise action",
      physical: "A permitted system action",
      description: "A change or an answer the enterprise system is willing to accept.",
      column: 5,
      row: 0,
    },
  ],
  edges: [
    { id: "d-r", source: "edata", target: "retrieval" },
    { id: "r-c", source: "retrieval", target: "context" },
    { id: "c-l", source: "context", target: "llm" },
    { id: "l-a", source: "llm", target: "agent" },
    { id: "a-n", source: "agent", target: "action" },
  ],
};

export const diagrams = [
  dataPlatformDiagram,
  modernizationDiagram,
  aiDataDiagram,
  aiActionDiagram,
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-data-platform",
    title: "Enterprise Data Platform",
    context:
      "The Databricks data engineering and reconciliation platform from my current role at Tekizma: incremental ingestion, governed data products, and an AI agent for exception investigation.",
    headlineOutcome: "50% better reconciliation accuracy.",
    businessProblem:
      "Operational data needed a path to analytics and applications that could be checked, reused, and explained when numbers disagreed.",
    architecture:
      "Auto Loader and Lakeflow ingest data incrementally. PySpark, SQL, and dbt model it, orchestrated by Databricks Workflows. Reconciliation is a first-class flow of mappings, rules, exceptions, and controls, and an AI agent investigates exceptions for analyst approval. Unity Catalog governs the data products, including natural-language access.",
    technologyChoices: [
      "Databricks",
      "Auto Loader",
      "Lakeflow",
      "Delta Live Tables",
      "Databricks Workflows",
      "Unity Catalog",
      "PySpark",
      "SQL",
      "dbt",
      "Langfuse",
      "GitHub Actions",
    ],
    designDecisions: [
      "Treat validation and reconciliation as architecture, not as a spreadsheet after the pipeline.",
      "Let an AI agent investigate exceptions and recommend fixes, but keep the analyst as the one who approves them.",
      "Keep source-to-target mappings explicit so an exception has a place to land.",
    ],
    tradeoffs: [
      "A managed lakehouse concentrates compute and cost, so both have to be watched.",
      "Spark and SQL skills both have to exist on the team.",
      "More control in dbt means less freedom for ad-hoc notebook logic.",
    ],
    security:
      "Unity Catalog governs data access, and agent runs are traced and evaluated in Langfuse.",
    scalability:
      "Incremental ingestion with Auto Loader and Lakeflow, and orchestration on Databricks Workflows, make volume a platform concern rather than a single job.",
    dataFlow:
      "Source Systems → Ingestion → Transformation → Validation → Data Modeling → Data Products → Analytics/Applications, with reconciliation and AI exception investigation beside validation.",
    outcome:
      "Improved reconciliation accuracy by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.",
    diagramId: "data-platform",
  },
  {
    slug: "legacy-modernization",
    title: "Legacy Application Modernization",
    context:
      "The modernization of a legacy Spring/JSP enterprise application into a cloud-native platform, led in my current role at Tekizma with AI-Driven Development Life Cycle practices.",
    headlineOutcome: "A cloud-native platform on AWS, delivered with AI-accelerated engineering.",
    businessProblem:
      "A server-page enterprise application had become hard to change, hard to integrate, and hard to deploy as a set of independent pieces.",
    architecture:
      "Decompose the legacy application, put a REST API layer in front of Spring Boot services, move the interface to Angular, and keep a relational model with Hibernate and MySQL, with Redis for caching. It runs on AWS across EC2, ECS/Fargate, and Lambda, containerized with Docker, provisioned with Terraform, delivered through AWS CodePipeline, and observed end to end with OpenTelemetry, Datadog, Splunk, and CloudWatch.",
    technologyChoices: [
      "Spring Boot",
      "Angular",
      "REST",
      "Hibernate",
      "MySQL",
      "Redis",
      "Docker",
      "Terraform",
      "AWS CodePipeline",
      "OpenTelemetry",
      "Datadog",
      "Splunk",
      "ECS/Fargate",
      "Lambda",
    ],
    designDecisions: [
      "Replace page-coupled JSP rendering with an API contract.",
      "Give services a Spring Boot boundary so deployment and testing can move with the component.",
      "Keep a relational database the domain already understood, rather than inventing a new store for its own sake.",
    ],
    tradeoffs: [
      "An incremental migration is slower than a rewrite and safer than one.",
      "REST is explicit and cacheable, and it is chatty if the contract is naive.",
      "Angular and Spring Boot split the team’s skills. That is accepted so the UI and the services can change apart.",
    ],
    security:
      "VPC networking, ALB/NLB, and CloudFront at the edge, with IAM, KMS, Secrets Manager, Cognito, and WAF as security controls.",
    scalability:
      "Separating UI, API, and services lets each scale and deploy on its own across ECS/Fargate, EC2, and Lambda.",
    dataFlow:
      "Legacy → Decomposition → REST API Layer → Spring Boot Services, then Angular UI, MySQL and Redis, and AWS as the target-state layers.",
    outcome:
      "Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG to streamline code development, enable intelligent workflows, and improve contextual access to enterprise knowledge.",
    diagramId: "modernization",
  },
  {
    slug: "ai-enterprise-data",
    title: "Agentic AI in the Application",
    context:
      "AI-powered capabilities inside the modernized application at Tekizma: agentic workflows on Amazon Bedrock AgentCore, MCP integration, and RAG, built through AI-Driven Development Life Cycle practices.",
    headlineOutcome: "Task-oriented AI workflows integrated with enterprise services through MCP.",
    businessProblem:
      "Users and business processes needed intelligent, task-oriented help inside the application, without giving AI agents uncontrolled access to enterprise systems.",
    architecture:
      "Agentic AI on Amazon Bedrock AgentCore runs task-oriented workflows integrated with enterprise application services and business processes. Agents reach application tools, APIs, and enterprise services through the Model Context Protocol's controlled, standardized interfaces. RAG workflows over an enterprise knowledge base supply contextual responses. The capabilities are built through AIDLC practices, with structured human review and quality gates from requirements to validation.",
    technologyChoices: [
      "Agentic AI",
      "Amazon Bedrock",
      "AgentCore",
      "Strands Agents",
      "MCP",
      "RAG",
      "Bedrock Knowledge Bases",
      "Claude Code",
    ],
    designDecisions: [
      "Integrate agents with application services through MCP rather than bespoke connections.",
      "Ground responses in enterprise knowledge retrieval rather than in the model alone.",
      "Put structured human review and quality gates into each AIDLC stage, from requirements to validation.",
    ],
    tradeoffs: [
      "Retrieval quality caps answer quality, and a richer knowledge base costs more to keep current.",
      "Bedrock AgentCore speeds up delivery and adds a platform dependency. That trade has to be made deliberately.",
      "Human review and quality gates slow the fastest path to release. That friction is intentional.",
    ],
    security:
      "Agents interact with tools, APIs, and enterprise services only through MCP's controlled, standardized interfaces.",
    scalability:
      "New tools and services join through MCP without changing each agent.",
    dataFlow:
      "Business Task → AI Agent → Enterprise Knowledge (RAG), and AI Agent → Tool Interfaces (MCP) → Enterprise Services.",
    outcome:
      "Accelerated engineering productivity using Claude Code, Agentic AI, MCP, and RAG, with intelligent workflows and better contextual access to enterprise knowledge.",
    diagramId: "ai-enterprise-data",
  },
];

export const adrs: Adr[] = [
  {
    slug: "why-databricks",
    title: "Why Databricks?",
    context:
      "The current data platforms need ingestion, transformation, modeling, orchestration, validation, and products that more than one team can reuse. Reconciliation needs a place to run rules and exceptions at volume.",
    decision:
      "Use Databricks as the processing platform, with Auto Loader and Lakeflow for incremental ingestion, PySpark and SQL for data-intensive transformation, dbt for reusable, reviewable models, and Unity Catalog for governance.",
    alternatives: [
      "Leave transformation inside the operational database.",
      "Use a warehouse SQL path only, with no Spark processing layer.",
      "Run unmanaged Spark without a shared workspace for orchestration and collaboration.",
    ],
    tradeoffs: [
      "Databricks concentrates cost and skills. Both have to be governed.",
      "dbt improves reuse and review, and it is a poor fit for every low-level Spark transformation. PySpark remains for that work.",
      "A managed platform shortens the path to orchestration and raises a dependency on that platform.",
    ],
    outcome:
      "Reconciliation accuracy improved by 50% through automated validation, standardized exception handling, and AI-assisted exception investigation.",
  },
  {
    slug: "why-rest-spring-boot",
    title: "Why REST and Spring Boot?",
    context:
      "A Spring/JSP application needed a structure that could be integrated, tested, and deployed in parts. The longer application practice is multi-tier systems on Spring Boot, Angular, REST, and AWS.",
    decision:
      "Decompose the legacy application behind REST APIs implemented as Spring Boot services, with an Angular client, Hibernate, MySQL, and AWS as the target.",
    alternatives: [
      "Continue rendering the enterprise UI as JSP inside the same deployable.",
      "Expose integration only through the existing page flows.",
      "Replace the relational model at the same time as the application structure.",
    ],
    tradeoffs: [
      "REST makes the contract visible and makes chatty designs obvious.",
      "Spring Boot standardizes service structure and adds framework weight.",
      "Moving the UI to Angular separates release cadence and splits the skills a squad needs.",
      "Keeping MySQL avoids a data-platform rewrite inside an application rewrite.",
    ],
    outcome:
      "Better scalability, maintainability, deployment automation, and cleaner integration.",
  },
];
