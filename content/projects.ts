export type PublicRepository = {
  slug: string;
  name: string;
  url: string;
  language: string;
  description: string | null;
  summary: string;
  tags: string[];
  updated: string;
};

export const personalProjectsIntro =
  "Personal projects I build in the open to explore platform engineering, retrieval, computer vision, and voice interfaces. These are experiments, separate from my client work.";

export const personalProjects: PublicRepository[] = [
  {
    slug: "ent-order-app",
    name: "ent_order_app",
    tags: ["docker", "grafana", "jenkins", "kafka", "kubernetes", "nginx", "openapi", "opentelemetry", "postgresql", "prometheus", "python", "redis", "terraform"],
    url: "https://github.com/rallwins/ent_order_app",
    summary:
      "A small ordering app that exercises a full platform stack: an event-driven flow through FastAPI, Kafka, and a worker, with Redis, PostgreSQL, OpenTelemetry tracing, Prometheus and Grafana, Kubernetes, Terraform, and Jenkins.",
    language: "Python",
    description:
      "An end-to-end order management app for restaurants and ecommerce, built with Python, HTML, and infrastructure as code. It helps teams track inventory, process orders, manage workflows, and automate deployments while providing a clean user experience for operations and customers across every stage",
    updated: "2026-10-29",
  },
  {
    slug: "school-sync-ai",
    name: "school-sync-ai",
    tags: ["audit", "deduplication", "evaluation", "extraction", "imports", "ingestion", "ocr", "providers", "validation"],
    url: "https://github.com/rallwins/school-sync-ai",
    summary:
      "Extracts events from school calendar PDFs, including colour-coded legends and half-days, for review and duplicate-safe export to ICS or CSV. In progress: the demo runs on synthetic data, and calendar sync is tested against a mock provider.",
    language: "Python",
    description:
      "SchoolSync AI streamlines school operations with AI-powered scheduling, attendance tracking, and communication tools. It helps administrators save time, improve student engagement, and make smarter decisions with actionable insights.",
    updated: "2026-10-24",
  },
  {
    slug: "youtube-analyzer",
    name: "youtube_analyzer",
    tags: ["openai-api"],
    url: "https://github.com/rallwins/youtube_analyzer",
    summary:
      "A Streamlit research assistant that finds a YouTube video, summarizes its transcript sections concurrently, and answers questions with timestamp citations from a LangChain vector index.",
    language: "Python",
    description:
      "A Streamlit app that searches YouTube by topic or accepts a video URL, fetches its English transcript, summarizes transcript sections concurrently, and answers questions using a timestamp-preserving LangChain vector index",
    updated: "2026-10-14",
  },
  {
    slug: "face-detection",
    name: "face_detection",
    tags: ["blazeface", "tensorflow"],
    url: "https://github.com/rallwins/face_detection",
    summary:
      "Real-time webcam face detection in the browser with TensorFlow.js and BlazeFace. Frames are processed locally and are never uploaded or stored.",
    language: "JavaScript",
    description:
      "A compact, production-ready face detection repository using TensorFlow and the BlazeFace model for fast, accurate real-time face localization on CPU/GPU and mobile devices.",
    updated: "2026-10-14",
  },
  {
    slug: "rag-resume",
    name: "rag_resume",
    tags: ["chatbot", "embeddings", "knowledge-base", "langfuse", "ollama", "rag", "slm", "vector"],
    url: "https://github.com/rallwins/rag_resume",
    summary:
      "A local résumé chatbot on Ollama and SQLite that answers only when retrieved résumé evidence clears a similarity threshold.",
    language: "HTML",
    description:
      "Retrieval-augmented resume application built with Python and HTML, combining document indexing, semantic retrieval, and a lightweight web interface to surface relevant resume content and supporting information from structured source material.",
    updated: "2026-10-11",
  },
  {
    slug: "gro-vision-replit",
    name: "gro-vision-replit",
    tags: ["huggingface-transformers", "owl-vit", "replit", "sku-detection", "typescript"],
    url: "https://github.com/rallwins/gro-vision-replit",
    summary:
      "Scans a photo for multiple grocery packages and suggests the closest product variants, using OWL-ViT object detection in the browser through Transformers.js, with manual correction.",
    language: "TypeScript",
    description:
      "Gro Vision Replit is a TypeScript-driven project focused on visual intelligence and interactive data experiences. Built with modern frontend tooling, responsive styling, and a clean UI, it showcases a scalable interface for exploring insights, presenting data, and delivering polished user experiences.",
    updated: "2026-10-09",
  },
  {
    slug: "voice-asst",
    name: "voice_asst",
    tags: ["chatbot", "llm", "voice-assistant"],
    url: "https://github.com/rallwins/voice_asst",
    summary:
      "A streaming voice assistant built with Pipecat: microphone audio over WebRTC, Deepgram for transcription, OpenAI for responses, and ElevenLabs for speech.",
    language: "Python",
    description:
      "Python-powered voice assistant project with a browser-based front end, combining speech interaction, automation, and web UI experimentation. Built primarily in Python with a substantial HTML interface layer, making it a practical prototype for conversational AI and voice-driven workflows",
    updated: "2026-10-08",
  },
];
