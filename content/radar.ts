export type RadarBand = "Core" | "Advanced" | "Exploring";

export type RadarItem = {
  name: string;
  band: RadarBand;
};

export const radarBands: RadarBand[] = ["Core", "Advanced", "Exploring"];

export const radar: RadarItem[] = [
  { name: "AWS", band: "Core" },
  { name: "Azure", band: "Core" },
  { name: "Databricks", band: "Core" },
  { name: "Java", band: "Core" },
  { name: "Spring Boot", band: "Core" },
  { name: "SQL", band: "Core" },
  { name: "PySpark", band: "Core" },
  { name: "GenAI", band: "Advanced" },
  { name: "RAG", band: "Advanced" },
  { name: "MCP", band: "Advanced" },
  { name: "Agentic AI", band: "Advanced" },
  { name: "Terraform", band: "Advanced" },
  { name: "Kubernetes", band: "Advanced" },
  { name: "GCP", band: "Exploring" },
  { name: "LLM evaluation", band: "Exploring" },
  { name: "Multimodal AI", band: "Exploring" },
  { name: "AI agents", band: "Exploring" },
];

export const radarNote =
  "Bands are the working radar supplied for this profile. They are not a ranking of the skills inventory. GCP stays in Exploring here even though the résumé also lists GCP among cloud platforms.";
