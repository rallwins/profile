export type PublicRepository = {
  slug: string;
  name: string;
  url: string;
  language: string;
  description: string | null;
  summary: string;
  updated: string;
};

export const personalProjectsIntro =
  "Personal projects I build in the open to explore local models, retrieval, and voice interfaces. These are experiments, separate from my client work.";

export const personalProjects: PublicRepository[] = [
  {
    slug: "rag-replit",
    name: "rag_replit",
    url: "https://github.com/rallwins/rag_replit",
    summary:
      "Upload documents into a private workspace, index them for semantic search, and get answers from the retrieved passages with citations.",
    language: "TypeScript",
    description:
      "This repository is a production-style, workspace-scoped RAG (retrieval-augmented generation) application for document Q&A. The project is designed around uploading documents into a private workspace, indexing them for semantic search, and answering questions from the retrieved passages with citations.",
    updated: "2026-10-13",
  },
  {
    slug: "voice-asst",
    name: "voice_asst",
    url: "https://github.com/rallwins/voice_asst",
    summary:
      "A Python voice assistant with a browser front end, prototyping conversational AI and voice-driven workflows.",
    language: "Python",
    description:
      "Python-powered voice assistant project with a browser-based front end, combining speech interaction, automation, and web UI experimentation. Built primarily in Python with a substantial HTML interface layer, making it a practical prototype for conversational AI and voice-driven workflows",
    updated: "2026-10-13",
  },
  {
    slug: "local-slm-chat",
    name: "local-slm-chat",
    url: "https://github.com/rallwins/local-slm-chat",
    summary:
      "A local web chat for language models served by Ollama, with FastAPI handling model discovery and streaming.",
    language: "Python",
    description:
      "A local web chat interface for language models served by Ollama. FastAPI serves the frontend and proxies model discovery and streaming chat requests.",
    updated: "2026-10-13",
  },
  {
    slug: "rag-resume",
    name: "rag_resume",
    url: "https://github.com/rallwins/rag_resume",
    summary:
      "Document indexing and semantic retrieval behind a lightweight web interface, surfacing relevant résumé content.",
    language: "HTML",
    description:
      "Retrieval-augmented resume application built with Python and HTML, combining document indexing, semantic retrieval, and a lightweight web interface to surface relevant resume content and supporting information from structured source material.",
    updated: "2026-10-13",
  },
];
