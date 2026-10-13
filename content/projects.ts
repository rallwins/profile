export type PublicRepository = {
  slug: string;
  name: string;
  url: string;
  language: string;
  description: null;
  label: string;
};

export const personalProjectsIntro =
  "Public repositories listed on github.com/rallwins. rallwins/profile is omitted because it is this site. No listed repository is marked as a fork. None of the four below has a GitHub description, so the label is the repository name and the language GitHub reports.";

export const personalProjects: PublicRepository[] = [
  {
    slug: "local-slm-chat",
    name: "local-slm-chat",
    url: "https://github.com/rallwins/local-slm-chat",
    language: "Python",
    description: null,
    label: "Python repository named local-slm-chat. GitHub publishes no description.",
  },
  {
    slug: "rag-replit",
    name: "rag_replit",
    url: "https://github.com/rallwins/rag_replit",
    language: "TypeScript",
    description: null,
    label: "TypeScript repository named rag_replit. GitHub publishes no description.",
  },
  {
    slug: "rag-resume",
    name: "rag_resume",
    url: "https://github.com/rallwins/rag_resume",
    language: "HTML",
    description: null,
    label: "HTML repository named rag_resume. GitHub publishes no description.",
  },
  {
    slug: "voice-asst",
    name: "voice_asst",
    url: "https://github.com/rallwins/voice_asst",
    language: "Python",
    description: null,
    label: "Python repository named voice_asst. GitHub publishes no description.",
  },
];
