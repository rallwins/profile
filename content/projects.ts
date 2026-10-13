export type PublicRepository = {
  slug: string;
  name: string;
  url: string;
  language: string;
  description: string | null;
  updated: string;
};

export const personalProjectsIntro =
  "Public repositories listed on github.com/rallwins, most recently updated first. rallwins/profile is omitted because it is this site. No listed repository is marked as a fork. Each description is the text GitHub publishes.";

export const personalProjects: PublicRepository[] = [
  {
    slug: "rag-replit",
    name: "rag_replit",
    url: "https://github.com/rallwins/rag_replit",
    language: "TypeScript",
    description:
      "This repository is a production-style, workspace-scoped RAG (retrieval-augmented generation) application for document Q&A. The project is designed around uploading documents into a private workspace, indexing them for semantic search, and answering questions from the retrieved passages with citations.",
    updated: "2026-10-13",
  },
  {
    slug: "voice-asst",
    name: "voice_asst",
    url: "https://github.com/rallwins/voice_asst",
    language: "Python",
    description:
      "Python-powered voice assistant project with a browser-based front end, combining speech interaction, automation, and web UI experimentation. Built primarily in Python with a substantial HTML interface layer, making it a practical prototype for conversational AI and voice-driven workflows",
    updated: "2026-10-13",
  },
  {
    slug: "local-slm-chat",
    name: "local-slm-chat",
    url: "https://github.com/rallwins/local-slm-chat",
    language: "Python",
    description:
      "A local web chat interface for language models served by Ollama. FastAPI serves the frontend and proxies model discovery and streaming chat requests.",
    updated: "2026-10-13",
  },
  {
    slug: "rag-resume",
    name: "rag_resume",
    url: "https://github.com/rallwins/rag_resume",
    language: "HTML",
    description:
      "Retrieval-augmented resume application built with Python and HTML, combining document indexing, semantic retrieval, and a lightweight web interface to surface relevant resume content and supporting information from structured source material.",
    updated: "2026-10-13",
  },
];
