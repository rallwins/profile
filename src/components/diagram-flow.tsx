import type { Diagram } from "../../content/architecture";

const boxHeight = 64;
const rowPitch = 96;

export const tones = {
  source: "Starting point",
  build: "Build",
  control: "Control",
  intelligence: "Intelligence",
  outcome: "Delivered",
} as const;

export type Tone = keyof typeof tones;

const nodeTones: Record<string, Tone> = {
  sources: "source",
  legacy: "source",
  edata: "source",
  request: "source",
  ingestion: "build",
  transform: "build",
  model: "build",
  decompose: "build",
  rest: "build",
  services: "build",
  retrieval: "build",
  context: "build",
  validation: "control",
  recon: "control",
  gateway: "control",
  knowledge: "intelligence",
  llm: "intelligence",
  agent: "intelligence",
  "recon-agent": "intelligence",
  products: "outcome",
  analytics: "outcome",
  ui: "outcome",
  mysql: "outcome",
  aws: "outcome",
  action: "outcome",
};

const toneOf = (node: Diagram["nodes"][number]): Tone => node.tone ?? nodeTones[node.id] ?? "build";

// Each node sits one row below its furthest upstream node, so branches share a row.
function rankNodes(diagram: Diagram) {
  const ranks = new Map(diagram.nodes.map((node) => [node.id, 0]));
  for (let pass = 0; pass < diagram.nodes.length; pass++) {
    for (const edge of diagram.edges) {
      const next = (ranks.get(edge.source) ?? 0) + 1;
      if (next > (ranks.get(edge.target) ?? 0)) ranks.set(edge.target, next);
    }
  }
  return ranks;
}

export function DiagramFlow({ diagram }: { diagram: Diagram }) {
  const ranks = rankNodes(diagram);
  const rows: Diagram["nodes"][] = [];
  for (const node of diagram.nodes) {
    const rank = ranks.get(node.id) ?? 0;
    (rows[rank] ??= []).push(node);
  }

  const positions = new Map(
    rows.flatMap((row, rank) =>
      row.map((node, index) => [node.id, { rank, index, count: row.length }] as const),
    ),
  );
  const centre = (id: string) => {
    const place = positions.get(id);
    return place ? ((place.index + 0.5) / place.count) * 100 : 50;
  };
  const markerId = `flow-arrow-${diagram.id}`;
  const usedTones = (Object.keys(tones) as Tone[]).filter((tone) =>
    diagram.nodes.some((node) => toneOf(node) === tone),
  );

  return (
    <figure id={`diagram-${diagram.id}`} className="min-w-0">
      <div className="rounded-surface border border-line bg-panel p-3 sm:p-5">
        <div
          className="relative mx-auto w-full max-w-xl"
          style={{ height: (rows.length - 1) * rowPitch + boxHeight }}
        >
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
              <marker id={markerId} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 8 4 0 8z" fill="var(--accent)" />
              </marker>
            </defs>
            {diagram.edges.map((edge) => {
              const source = positions.get(edge.source);
              const target = positions.get(edge.target);
              if (!source || !target) return null;
              return (
                <line
                  key={edge.id}
                  className="flow-edge"
                  x1={`${centre(edge.source)}%`}
                  y1={source.rank * rowPitch + boxHeight + 2}
                  x2={`${centre(edge.target)}%`}
                  y2={target.rank * rowPitch - 3}
                  markerEnd={`url(#${markerId})`}
                />
              );
            })}
          </svg>
          {rows.flatMap((row, rank) =>
            row.map((node, index) => (
              <div
                key={node.id}
                className="absolute px-1"
                style={{
                  top: rank * rowPitch,
                  left: `${(index / row.length) * 100}%`,
                  width: `${100 / row.length}%`,
                  height: boxHeight,
                }}
              >
                <div className={`flow-card flow-tone-${toneOf(node)}`}>
                  <p className="text-[0.8125rem] font-semibold leading-tight text-ink">{node.logical}</p>
                  {node.physical !== node.logical ? (
                    <p className="mt-0.5 text-[0.6875rem] leading-tight text-slate">{node.physical}</p>
                  ) : null}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
        {diagram.figure ? <span className="font-semibold text-ink">{diagram.figure}. </span> : null}
        {diagram.caption}
      </figcaption>
      <ul className="meta mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs" aria-label="Diagram key">
        {usedTones.map((tone) => (
          <li key={tone} className="flex items-center gap-1.5">
            <span aria-hidden="true" className={`flow-swatch flow-tone-${tone}`} />
            {tones[tone]}
          </li>
        ))}
      </ul>
    </figure>
  );
}
