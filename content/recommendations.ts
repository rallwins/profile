export type RecommendationPlaceholder = {
  id: string;
  theme: string;
  quote: null;
  attribution: null;
  note: string;
};

const note =
  "TODO: no verified public excerpt is available. This is a theme label, not a quotation.";

export const recommendations: RecommendationPlaceholder[] = [
  { id: "technical-depth", theme: "Technical depth", quote: null, attribution: null, note },
  { id: "proactive", theme: "Proactive approach", quote: null, attribution: null, note },
  {
    id: "expectations",
    theme: "Understanding expectations",
    quote: null,
    attribution: null,
    note,
  },
  {
    id: "delivery",
    theme: "Delivery reliability",
    quote: null,
    attribution: null,
    note,
  },
  {
    id: "mobile-coe",
    theme: "Mobile Center of Excellence leadership",
    quote: null,
    attribution: null,
    note,
  },
  {
    id: "team-building",
    theme: "Recruitment and team building",
    quote: null,
    attribution: null,
    note,
  },
  {
    id: "proposals",
    theme: "Solution proposals",
    quote: null,
    attribution: null,
    note,
  },
  {
    id: "architecture-design",
    theme: "Architecture and design",
    quote: null,
    attribution: null,
    note,
  },
  {
    id: "presentations",
    theme: "Customer presentations",
    quote: null,
    attribution: null,
    note,
  },
];
