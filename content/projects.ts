export type PersonalProject = {
  slug: string;
  name: string;
  status: "personal-experimental";
  problem: string;
  architecture: string;
  technology: string[];
  technologyTodo: string;
  learned: null;
  learnedTodo: string;
  github: null;
  demo: null;
};

export const personalProjectsIntro =
  "Personal and experimental work. These are not production engagements and are not client projects. Repositories, demos, and lessons are unpublished, so those fields stay empty.";

export const personalProjects: PersonalProject[] = [
  {
    slug: "local-slm",
    name: "Local SLM",
    status: "personal-experimental",
    problem:
      "A personal experiment with a smaller language model running locally, so prompts stay off a hosted API.",
    architecture:
      "A Llama-based local model behind a thin application boundary. Retrieval, tools, and an evaluation loop are not specified.",
    technology: ["Llama-based local model"],
    technologyTodo:
      "TODO: runtime, hardware, and serving stack are not documented.",
    learned: null,
    learnedTodo: "TODO: what was learned is not documented.",
    github: null,
    demo: null,
  },
  {
    slug: "rag-system",
    name: "RAG System",
    status: "personal-experimental",
    problem:
      "A personal experiment in grounding model answers in a private document set.",
    architecture:
      "Documents, a retrieval step, context assembly, and a language model. The index and the model host are not specified.",
    technology: ["Retrieval-augmented generation"],
    technologyTodo: "TODO: vector store, embeddings, and model are not documented.",
    learned: null,
    learnedTodo: "TODO: what was learned is not documented.",
    github: null,
    demo: null,
  },
  {
    slug: "ai-agent",
    name: "AI Agent",
    status: "personal-experimental",
    problem:
      "A personal experiment with an agent that turns a natural-language request into a bounded action.",
    architecture:
      "A request, a tool boundary, and an action step. The tool catalog is not specified.",
    technology: ["Agent loop"],
    technologyTodo: "TODO: framework, model, and tools are not documented.",
    learned: null,
    learnedTodo: "TODO: what was learned is not documented.",
    github: null,
    demo: null,
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    status: "personal-experimental",
    problem: "Recognize grocery or retail products from an image.",
    architecture:
      "An image in, a recognition step, and a product label out. The model family and the dataset are not specified.",
    technology: ["Computer vision", "Grocery and product recognition"],
    technologyTodo: "TODO: model, dataset, and runtime are not documented.",
    learned: null,
    learnedTodo: "TODO: what was learned is not documented.",
    github: null,
    demo: null,
  },
  {
    slug: "voice-multimodal",
    name: "Voice / Multimodal Assistant",
    status: "personal-experimental",
    problem:
      "A personal experiment combining voice or another modality with an assistant.",
    architecture:
      "A modality in, a model, and a spoken or multimodal response. The pipeline is not specified.",
    technology: ["Voice", "Multimodal assistant"],
    technologyTodo:
      "TODO: speech, vision, and model components are not documented.",
    learned: null,
    learnedTodo: "TODO: what was learned is not documented.",
    github: null,
    demo: null,
  },
];
