import type { Diagram, FlowNode } from "./architecture";

/**
 * Architecture diagrams for the personal projects, drawn from each repository's
 * README or architecture document. Loops and back-edges in the source diagrams
 * are simplified so the flow reads top to bottom.
 */

type ProjectArchitecture = {
  source: string;
  diagram: Diagram;
};

function node(id: string, logical: string, physical: string, tone: FlowNode["tone"], description = logical): FlowNode {
  return { id, logical, physical, tone, description };
}

function chain(...ids: string[]) {
  return ids.slice(1).map((target, index) => ({ id: `${ids[index]}-${target}`, source: ids[index], target }));
}

export const projectArchitecture: Record<string, ProjectArchitecture> = {
  "ent-order-app": {
    source: "https://github.com/rallwins/ent_order_app/blob/HEAD/docs/ARCHITECTURE.md",
    diagram: {
      id: "project-ent-order-app",
      figure: "",
      title: "ent_order_app",
      caption:
        "An event-driven order flow: the API writes to PostgreSQL, caches in Redis, and publishes orders.created to Kafka for the worker. API and worker both send traces and metrics.",
      nodes: [
        node("client", "Client", "Browser", "source"),
        node("nginx", "Gateway", "NGINX", "build"),
        node("api", "Order API", "FastAPI", "build"),
        node("pg", "Orders", "PostgreSQL", "build"),
        node("redis", "Cache", "Redis, cache-aside", "build"),
        node("kafka", "Events", "Kafka", "build"),
        node("worker", "Order worker", "Fulfils orders", "build"),
        node("obs", "Observability", "OpenTelemetry, Jaeger, Prometheus, Grafana", "control"),
      ],
      edges: [
        ...chain("client", "nginx", "api"),
        { id: "api-pg", source: "api", target: "pg" },
        { id: "api-redis", source: "api", target: "redis" },
        { id: "api-kafka", source: "api", target: "kafka" },
        ...chain("kafka", "worker", "obs"),
      ],
    },
  },
  "school-sync-ai": {
    source: "https://github.com/rallwins/school-sync-ai/blob/HEAD/docs/architecture.md",
    diagram: {
      id: "project-school-sync-ai",
      figure: "",
      title: "school-sync-ai",
      caption:
        "Rules, not an LLM, extract the dates. Sync writes only after explicit confirmation and is tested against a mock provider.",
      nodes: [
        node("user", "Calendar PDF", "Parent or school admin", "source"),
        node("web", "Web UI", "Next.js", "build"),
        node("api", "API and pipeline", "FastAPI", "build"),
        node("parse", "Layout and legend", "PyMuPDF, Delta E colour match", "build"),
        node("review", "Review and confirm", "Human approval", "control"),
        node("store", "Import store", "SQLite, duplicate-safe", "build"),
        node("export", "Export", "ICS and CSV", "outcome"),
        node("sync", "Calendar sync", "Google, mock-tested", "outcome"),
      ],
      edges: [
        ...chain("user", "web", "api", "parse", "review", "store", "export"),
        { id: "store-sync", source: "store", target: "sync" },
      ],
    },
  },
  "youtube-analyzer": {
    source: "https://github.com/rallwins/youtube_analyzer/blob/HEAD/README.md",
    diagram: {
      id: "project-youtube-analyzer",
      figure: "",
      title: "youtube_analyzer",
      caption:
        "One transcript feeds two paths: concurrent section summaries, and a timestamp-preserving index for grounded answers.",
      nodes: [
        node("user", "User", "URL or topic", "source"),
        node("ui", "Web interface", "Streamlit", "build"),
        node("video", "Video", "URL parse or yt-dlp search", "build"),
        node("transcript", "Transcript", "YouTube Transcript API", "build"),
        node("summaries", "Section summaries", "LangChain ChatOpenAI", "intelligence"),
        node("index", "Vector index", "OpenAI embeddings", "intelligence"),
        node("qa", "Grounded answers", "Timestamp citations", "outcome"),
      ],
      edges: [
        ...chain("user", "ui", "video", "transcript", "summaries"),
        ...chain("transcript", "index", "qa"),
      ],
    },
  },
  "face-detection": {
    source: "https://github.com/rallwins/face_detection/blob/HEAD/README.md",
    diagram: {
      id: "project-face-detection",
      figure: "",
      title: "face_detection",
      caption: "Camera frames are processed locally in the browser and are never uploaded or stored.",
      nodes: [
        node("camera", "Webcam", "Browser camera", "source"),
        node("app", "Browser app", "Static web page", "build"),
        node("model", "Face detection", "TensorFlow.js, BlazeFace", "intelligence"),
        node("output", "Outlined faces", "Confidence scores", "outcome"),
      ],
      edges: chain("camera", "app", "model", "output"),
    },
  },
  "rag-resume": {
    source: "https://github.com/rallwins/rag_resume/blob/HEAD/README.md",
    diagram: {
      id: "project-rag-resume",
      figure: "",
      title: "rag_resume",
      caption:
        "A question is embedded and ranked against the résumé chunks, and the app answers only when the evidence clears a similarity threshold. Langfuse receives metadata only.",
      nodes: [
        node("upload", "Résumé upload", "PDF, TXT, or Markdown", "source"),
        node("chunk", "Extract and chunk", "Text chunks", "build"),
        node("embed", "Embeddings", "Ollama", "intelligence"),
        node("kb", "Knowledge base", "SQLite", "build"),
        node("rank", "Rank chunks", "Against the question", "build"),
        node("gate", "Threshold check", "Similarity score", "control"),
        node("refuse", "Fixed refusal", "Below threshold", "control"),
        node("answer", "Answer with sources", "Ollama answer model", "outcome"),
      ],
      edges: [
        ...chain("upload", "chunk", "embed", "kb", "rank", "gate", "refuse"),
        { id: "gate-answer", source: "gate", target: "answer" },
      ],
    },
  },
  "gro-vision-replit": {
    source: "https://github.com/rallwins/gro-vision-replit/blob/HEAD/README.md",
    diagram: {
      id: "project-gro-vision",
      figure: "",
      title: "gro-vision-replit",
      caption: "Detection scores rank candidates rather than give calibrated probabilities, so the user can correct any suggestion.",
      nodes: [
        node("photo", "Product photo", "JPG, PNG, or WebP", "source"),
        node("runtime", "In-browser model", "Transformers.js", "build"),
        node("detect", "Zero-shot detection", "OWL-ViT, catalog prompts", "intelligence"),
        node("dedupe", "Duplicate suppression", "Overlapping boxes", "build"),
        node("sku", "SKU suggestions", "Brand, flavor, size", "outcome"),
        node("correct", "Manual correction", "User confirms", "control"),
      ],
      edges: chain("photo", "runtime", "detect", "dedupe", "sku", "correct"),
    },
  },
  "voice-asst": {
    source: "https://github.com/rallwins/voice_asst/blob/HEAD/README.md",
    diagram: {
      id: "project-voice-asst",
      figure: "",
      title: "voice_asst",
      caption: "Pipecat orchestrates every stage and keeps the conversation context between turns.",
      nodes: [
        node("mic", "Microphone", "Browser", "source"),
        node("webrtc", "Audio transport", "WebRTC", "build"),
        node("vad", "Turn detection", "Silero VAD", "control"),
        node("stt", "Speech to text", "Deepgram", "intelligence"),
        node("llm", "Response", "OpenAI", "intelligence"),
        node("tts", "Text to speech", "ElevenLabs", "intelligence"),
        node("play", "Playback", "Streamed to the browser", "outcome"),
      ],
      edges: chain("mic", "webrtc", "vad", "stt", "llm", "tts", "play"),
    },
  },
};
