export type Award = {
  id: string;
  title: string;
  year: string;
  detail: string;
};

export const awards: Award[] = [
  {
    id: "avishkar-2006",
    title: "Product Innovation Award — Avishkar Contest",
    year: "2006",
    detail: "Java Socket Adapter.",
  },
  {
    id: "md-merit-2005",
    title: "MD's Merit Award",
    year: "2005",
    detail:
      "Meeting business targets related to SOAx implementation at ICICI Bank.",
  },
];
