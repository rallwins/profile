export type ExpertiseGroup = {
  id: string;
  title: string;
  summary: string;
  skills: string[];
};

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "leadership",
    title: "Architecture & Technology Leadership",
    summary:
      "Solution architecture, governance, and the modernization decisions that connect business intent to a buildable system.",
    skills: [
      "Solution Architecture",
      "Cloud Architecture",
      "Technology Strategy",
      "Architecture Governance",
      "Enterprise Modernization",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "API Design",
    ],
  },
  {
    id: "ai-data-engineering",
    title: "AI, GenAI & Data Engineering",
    summary:
      "Applying generative and agentic AI to enterprise data and engineering work, with the data-engineering tools named on the résumé.",
    skills: [
      "AIDLC",
      "Generative AI",
      "Agentic AI",
      "AgentCore Runtime",
      "Amazon Bedrock",
      "RAG",
      "MCP",
      "LLM Applications",
      "Knowledge Bases",
      "AI Guardrails",
      "AI Governance",
      "AI Evaluation",
      "PySpark",
      "dbt",
      "Spark",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Platform Architecture",
    summary:
      "AWS, Azure, and GCP, plus the delivery platform around them. Azure sits here because the current role’s data platforms and the brief both place it in cloud work.",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Serverless",
      "Cloud Security",
      "Scalability",
      "Reliability & Cost Optimization",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Automated Testing",
      "Release Engineering",
      "Git",
    ],
  },
  {
    id: "data",
    title: "Data Architecture",
    summary:
      "Platforms, models, and the databases the résumé lists, including reconciliation and data-quality controls.",
    skills: [
      "Data Architecture",
      "Data Pipelines",
      "Data Modeling",
      "Databricks",
      "SQL",
      "Data Quality",
      "Data Governance",
      "Reconciliation Architecture",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "DB2",
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
    ],
  },
  {
    id: "application",
    title: "Application Engineering",
    summary:
      "Full-stack and mobile engineering from the résumé, including the PhoneGap work in the mobile architecture role.",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Angular",
      "React",
      "Node.js",
      "REST APIs",
      "JavaScript",
      "HTML",
      "OAuth",
      "SAML",
      "JWT",
      "Flutter",
      "Android",
      "iOS",
      "PhoneGap",
      "Replit",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];
