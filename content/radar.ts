export type RadarBand = "Core" | "Advanced" | "Exploring";

export type RadarItem = {
  name: string;
  band: RadarBand;
};

export const radarBands: RadarBand[] = ["Core", "Advanced", "Exploring"];

export const radar: RadarItem[] = [
  { name: "AWS", band: "Core" },
  { name: "GCP", band: "Core" },
  { name: "Databricks", band: "Core" },
  { name: "Java", band: "Core" },
  { name: "Spring Boot", band: "Core" },
  { name: "SQL", band: "Core" },
  { name: "PySpark", band: "Core" },
  { name: "Generative AI", band: "Advanced" },
  { name: "RAG", band: "Advanced" },
  { name: "MCP", band: "Advanced" },
  { name: "Agentic AI", band: "Advanced" },
  { name: "Terraform", band: "Advanced" },
  { name: "Kubernetes", band: "Advanced" },
  { name: "AI Evaluation", band: "Advanced" },
  { name: "Flutter", band: "Exploring" },
  { name: "Replit", band: "Exploring" },
  { name: "Cursor", band: "Exploring" },
  { name: "GitHub Copilot", band: "Exploring" },
];

export const radarNote =
  "Core and Advanced follow the résumé’s architecture, cloud, data, and AI inventory. Exploring lists Flutter, Replit, Cursor, and GitHub Copilot from the résumé’s Mobile & Emerging Tech line. Android and iOS sit with application engineering from the Marlabs mobile platforms. Azure Databricks is named in the current data-platform role.";
