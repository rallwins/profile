export type FlowNode = {
  id: string;
  logical: string;
  physical: string;
  description: string;
  column: number;
  row: number;
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

export const heroDiagram: Diagram = {
  id: "operating-model",
  figure: "Figure 01",
  title: "Operating model",
  caption:
    "Business intent moves through architecture into cloud, data, AI, and application structure, then into enterprise systems.",
  nodes: [
    {
      id: "business",
      logical: "Business",
      physical: "Strategy and requirements",
      description:
        "The starting point is a business outcome and a constraint, not a tool choice.",
      column: 0,
      row: 1.5,
    },
    {
      id: "architecture",
      logical: "Architecture",
      physical: "Solution and enterprise architecture",
      description:
        "Architecture turns that intent into boundaries, quality attributes, and a sequence of change.",
      column: 1,
      row: 1.5,
    },
    {
      id: "cloud",
      logical: "Cloud",
      physical: "AWS and GCP",
      description:
        "Cloud is the platform layer: compute, storage, networking, security, monitoring, availability, and cost. The résumé names architectures across AWS and GCP, and cloud design in AWS for the current role. Data platforms in that role use Azure Databricks.",
      column: 2,
      row: 0,
    },
    {
      id: "data",
      logical: "Data",
      physical: "Databricks, PySpark, dbt",
      description:
        "Data is the platform for ingestion, transformation, validation, modeling, and reusable data products, including reconciliation.",
      column: 2,
      row: 1,
    },
    {
      id: "ai",
      logical: "AI",
      physical: "GenAI, RAG, MCP",
      description:
        "AI here is generative and agentic work on enterprise data: RAG, MCP, Bedrock, AgentCore Runtime, guardrails, governance, and evaluation. It is not a claim of a separate product line.",
      column: 2,
      row: 2,
    },
    {
      id: "application",
      logical: "Application architecture",
      physical: "Spring Boot, Angular, REST",
      description:
        "Application architecture is the service and interface structure: REST, Spring Boot, Angular, and the modernization path off legacy Spring/JSP.",
      column: 2,
      row: 3,
    },
    {
      id: "enterprise",
      logical: "Enterprise systems",
      physical: "APIs, data products, applications",
      description:
        "The destination is the system a business user, an application, or a downstream platform actually runs.",
      column: 3,
      row: 1.5,
    },
  ],
  edges: [
    { id: "b-a", source: "business", target: "architecture" },
    { id: "a-c", source: "architecture", target: "cloud" },
    { id: "a-d", source: "architecture", target: "data" },
    { id: "a-i", source: "architecture", target: "ai" },
    { id: "a-p", source: "architecture", target: "application" },
    { id: "c-e", source: "cloud", target: "enterprise" },
    { id: "d-e", source: "data", target: "enterprise" },
    { id: "i-e", source: "ai", target: "enterprise" },
    { id: "p-e", source: "application", target: "enterprise" },
  ],
};

export const dataPlatformDiagram: Diagram = {
  id: "data-platform",
  figure: "Figure 02",
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
      physical: "Azure Databricks ingestion",
      description: "Landing data with enough lineage to trace a later exception.",
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
      physical: "Recon architecture",
      description:
        "Source-to-target mappings, validation rules, exception handling, and a processing pattern that can scale.",
      column: 3,
      row: 0,
    },
    {
      id: "model",
      logical: "Data modeling",
      physical: "Modeled datasets",
      description: "Models shaped for reuse, not only for a single report.",
      column: 4,
      row: 1,
    },
    {
      id: "products",
      logical: "Data products",
      physical: "Reusable data products",
      description: "Assets other teams can consume without recopying the pipeline.",
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
    { id: "v-m", source: "validation", target: "model" },
    { id: "m-p", source: "model", target: "products" },
    { id: "p-a", source: "products", target: "analytics" },
  ],
};

export const modernizationDiagram: Diagram = {
  id: "modernization",
  figure: "Figure 03",
  title: "Legacy application modernization",
  caption:
    "The path recorded for the Spring/JSP estate: decompose, expose REST, rebuild services and UI, and land on MySQL and AWS.",
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
      logical: "MySQL",
      physical: "MySQL",
      description: "The relational store named for this modernization.",
      column: 5,
      row: 0,
    },
    {
      id: "aws",
      logical: "AWS",
      physical: "AWS",
      description: "The cloud target for compute, deployment, and operations.",
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
  figure: "Figure 04",
  title: "AI and enterprise data",
  caption:
    "A pattern for natural-language access to enterprise data. Retrieval, guardrails, evaluation, and security are part of the path, not an afterthought.",
  nodes: [
    {
      id: "edata",
      logical: "Enterprise data",
      physical: "Platform data products",
      description: "The data the business already trusts, not a shadow copy with no owner.",
      column: 0,
      row: 0,
    },
    {
      id: "eng",
      logical: "Data engineering",
      physical: "Pipelines and models",
      description: "The engineering that makes that data fit to retrieve.",
      column: 1,
      row: 0,
    },
    {
      id: "knowledge",
      logical: "Knowledge layer",
      physical: "Knowledge bases",
      description: "A knowledge layer, including the knowledge bases named in the skills inventory.",
      column: 2,
      row: 0,
    },
    {
      id: "rag",
      logical: "RAG",
      physical: "Retrieval",
      description: "Retrieval selects context. It is not a prompt stuffed with everything.",
      column: 3,
      row: 0,
    },
    {
      id: "llm",
      logical: "LLM",
      physical: "Bedrock and related LLMs",
      description: "The model answers from the retrieved context. Amazon Bedrock is the production platform named on the résumé.",
      column: 4,
      row: 0,
    },
    {
      id: "nli",
      logical: "Natural language interface",
      physical: "Guarded interface",
      description: "The interface a person uses. Guardrails, evaluation, and observability belong here.",
      column: 5,
      row: 0,
    },
    {
      id: "user",
      logical: "Business user",
      physical: "Business user",
      description: "The person asking a question of enterprise data.",
      column: 6,
      row: 0,
    },
  ],
  edges: [
    { id: "e-g", source: "edata", target: "eng" },
    { id: "g-k", source: "eng", target: "knowledge" },
    { id: "k-r", source: "knowledge", target: "rag" },
    { id: "r-l", source: "rag", target: "llm" },
    { id: "l-n", source: "llm", target: "nli" },
    { id: "n-u", source: "nli", target: "user" },
  ],
};

export const aiActionDiagram: Diagram = {
  id: "ai-action",
  figure: "Figure 05",
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
        "Agentic AI and MCP as named in the practice. Tool use stays inside an explicit boundary.",
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
  heroDiagram,
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
      "Pattern drawn from the current Director of Technology role: Azure Databricks platforms, reconciliation, and reusable data products. Client names are not added.",
    businessProblem:
      "Operational data needed a path to analytics and applications that could be checked, reused, and explained when numbers disagreed.",
    architecture:
      "Source systems feed ingestion, transformation, and validation. Reconciliation is a first-class flow: mappings, rules, exceptions, and a processing pattern. Modeled data is published as products for analytics and applications.",
    technologyChoices: ["Azure Databricks", "PySpark", "dbt", "SQL"],
    designDecisions: [
      "Treat validation and reconciliation as architecture, not as a spreadsheet after the pipeline.",
      "Prefer reusable dbt and Databricks assets over one-off transformations.",
      "Keep source-to-target mappings explicit so an exception has a place to land.",
    ],
    tradeoffs: [
      "A managed lakehouse concentrates compute and cost. That has to be watched; a specific savings figure is not stated.",
      "Spark and SQL skills both have to exist on the team. The résumé does not state a team size.",
      "More control in dbt means less freedom for ad-hoc notebook logic.",
    ],
    security:
      "Cloud design for this work covers security, networking, and monitoring alongside compute and storage. A control catalog (specific IAM policies, keys, or network layouts) is not stated and is not invented here.",
    scalability:
      "The reconciliation design calls for scalable processing patterns. Ingestion, transformation, and orchestration sit on Azure Databricks so volume is a platform concern rather than a single job.",
    dataFlow:
      "Source Systems → Ingestion → Transformation → Validation → Data Modeling → Data Products → Analytics/Applications, with reconciliation beside validation.",
    outcome:
      "Stated on the résumé: enhanced reconciliation accuracy by 50% through the design and deployment of automated validation and exception-handling frameworks. Reduced development effort by 40% through reusable dbt/Databricks frameworks and AI-assisted engineering. No other figures are added.",
    diagramId: "data-platform",
  },
  {
    slug: "legacy-modernization",
    title: "Legacy Application Modernization",
    context:
      "The Spring/JSP modernization described in the current role, read together with the longer Solutions Architect practice of REST, Spring Boot, Angular, and AWS.",
    businessProblem:
      "A server-page enterprise application had become hard to change, hard to integrate, and hard to deploy as a set of independent pieces.",
    architecture:
      "Decompose the legacy application, put a REST API layer in front of Spring Boot services, move the interface to Angular, keep a relational model with Hibernate and MySQL, and run it on AWS.",
    technologyChoices: [
      "Spring Boot",
      "Angular",
      "REST",
      "Hibernate",
      "MySQL",
      "AWS",
    ],
    designDecisions: [
      "Replace page-coupled JSP rendering with an API contract.",
      "Give services a Spring Boot boundary so deployment and testing can move with the component.",
      "Keep a relational database the domain already understood, rather than inventing a new store for its own sake.",
    ],
    tradeoffs: [
      "A strangled migration is slower than a rewrite and safer than one. The résumé describes decomposition and a target state, not a cutover calendar.",
      "REST is explicit and cacheable, and it is chatty if the contract is naive.",
      "Angular and Spring Boot split the team’s skills. That is accepted so the UI and the services can change apart.",
    ],
    security:
      "The broader API practice calls out authentication and authorization on REST services. This case does not name a particular identity product.",
    scalability:
      "Separating UI, API, and services lets each scale and deploy on its own. AWS is the named cloud target. Instance sizes and traffic numbers are not stated.",
    dataFlow:
      "Legacy → Decomposition → REST API Layer → Spring Boot Services, then Angular UI, MySQL, and AWS as the target-state layers.",
    outcome:
      "Stated qualitatively: better scalability, maintainability, deployment automation, and integration. A numeric outcome for this modernization is not on the résumé.",
    diagramId: "modernization",
  },
  {
    slug: "ai-enterprise-data",
    title: "AI and Enterprise Data",
    context:
      "How the résumé describes AI on enterprise data: intelligent processing, natural-language interaction, automated documentation, and AI-assisted engineering, using the named platforms.",
    businessProblem:
      "People who need answers from enterprise data should not have to learn the warehouse, and a model should not answer from untrusted context.",
    architecture:
      "Enterprise data is engineered into a knowledge layer. Retrieval (RAG) supplies context to an LLM. A natural-language interface sits in front, with guardrails, evaluation, security, and observability as part of the design. An agent path uses MCP where a tool call is actually required.",
    technologyChoices: [
      "Generative AI",
      "RAG",
      "MCP",
      "Amazon Bedrock",
      "AgentCore Runtime",
      "Knowledge Bases",
      "AI Guardrails",
      "AI Evaluation",
    ],
    designDecisions: [
      "Retrieve before generating.",
      "Keep guardrails and evaluation in the architecture, not in a later review.",
      "Separate a natural-language interface from an agent that can take an action.",
    ],
    tradeoffs: [
      "Retrieval quality caps answer quality. A richer index costs more to govern.",
      "Bedrock and AgentCore Runtime are the named production platforms. Lock-in versus speed is a real trade; a formal alternative study is not in the résumé.",
      "Agents that can act need a narrower permission set than a chatbot. That friction is intentional.",
    ],
    security:
      "Security here means the model sees retrieved enterprise context under the same ownership as the data, with guardrails on what it may say or do. Specific policies, customer names, and internal URLs are not published.",
    scalability:
      "The data platform underneath has to absorb retrieval load. The interface itself should stay stateless aside from the conversation the product actually needs. No traffic figure is stated.",
    dataFlow:
      "Enterprise Data → Data Engineering → Knowledge Layer → RAG → LLM → Natural Language Interface → Business User.",
    outcome:
      "The résumé ties AI-assisted engineering, together with reusable dbt and Databricks frameworks, to a 40% reduction in development effort. It does not state a separate metric for the natural-language interface. That number is left as TODO rather than invented.",
    diagramId: "ai-enterprise-data",
  },
];

export const adrs: Adr[] = [
  {
    slug: "why-databricks",
    title: "Why Databricks?",
    context:
      "The current data platforms need ingestion, transformation, modeling, orchestration, validation, and products that more than one team can reuse. Reconciliation needs a place to run rules and exceptions at volume. This note is architecture reasoning consistent with that work. It is not a client scorecard.",
    decision:
      "Use Azure Databricks as the processing platform, with PySpark for data-intensive transformation and dbt for reusable, reviewable models.",
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
      "The résumé states reusable dbt/Databricks frameworks as part of a 40% reduction in development effort, and the design and deployment of automated validation and exception-handling frameworks as enhancing reconciliation accuracy by 50%. This note does not add further results.",
  },
  {
    slug: "why-rest-spring-boot",
    title: "Why REST and Spring Boot?",
    context:
      "A Spring/JSP application needed a structure that could be integrated, tested, and deployed in parts. The longer application practice is multi-tier systems on Spring Boot, Angular, REST, and AWS. This is the rationale for that shape, not a fabricated implementation report.",
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
      "The stated benefits are scalability, maintainability, deployment automation, and cleaner integration. No separate performance or cost figure is given for this decision.",
  },
];
