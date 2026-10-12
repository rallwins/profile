"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useReducedMotion } from "framer-motion";
import type { Diagram } from "../../content/architecture";
import { useTheme } from "@/components/theme-provider";

type Mode = "logical" | "physical";

type ArchData = {
  logical: string;
  physical: string;
  mode: Mode;
  selected: boolean;
};

function ArchNode({ data }: NodeProps<Node<ArchData>>) {
  const title = data.mode === "logical" ? data.logical : data.physical;
  return (
    <div
      className={`w-48 bg-panel px-3 py-3 text-left shadow-[inset_3px_0_0_var(--accent)] ${
        data.selected ? "outline outline-1 outline-offset-2 outline-accent" : ""
      }`}
    >
      <Handle type="target" position={Position.Left} className="!h-2 !w-2 !border-line !bg-paper" />
      <p className="font-serif text-[0.95rem] leading-snug text-ink">{title}</p>
      <Handle type="source" position={Position.Right} className="!h-2 !w-2 !border-line !bg-paper" />
    </div>
  );
}

const nodeTypes = { arch: ArchNode };

export function ArchitectureCanvas({ diagram }: { diagram: Diagram }) {
  const reduce = useReducedMotion();
  const { resolved } = useTheme();
  const wide = useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia("(min-width: 1024px)");
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );
  const [mode, setMode] = useState<Mode>("logical");
  const [selected, setSelected] = useState(diagram.nodes[0]?.id ?? "");
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (!wide || reduce) return;
    const node = document.getElementById(`diagram-${diagram.id}`);
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setHighlight(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [diagram.id, reduce, wide]);

  const nodes = useMemo<Node<ArchData>[]>(
    () =>
      diagram.nodes.map((node) => ({
        id: node.id,
        type: "arch",
        position: { x: node.column * 230, y: node.row * 120 },
        data: {
          logical: node.logical,
          physical: node.physical,
          mode,
          selected: selected === node.id,
        },
        ariaLabel: `${node.logical}. ${node.physical}`,
      })),
    [diagram.nodes, mode, selected],
  );

  const edges = useMemo<Edge[]>(
    () =>
      diagram.edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        animated: highlight && !reduce,
        style: {
          stroke: highlight ? "var(--accent)" : "var(--slate)",
          strokeWidth: highlight ? 1.6 : 1,
        },
      })),
    [diagram.edges, highlight, reduce],
  );

  const current = diagram.nodes.find((node) => node.id === selected) ?? diagram.nodes[0];

  return (
    <figure id={`diagram-${diagram.id}`} className="mt-8">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.16em] text-slate">
          {diagram.figure} — {diagram.title}
        </span>
        <span className="max-w-xl text-sm text-slate">{diagram.caption}</span>
      </figcaption>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Diagram labels">
        {(["logical", "physical"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            className={`h-9 px-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] ${
              mode === value ? "bg-accent text-accent-ink" : "bg-panel text-ink"
            }`}
            onClick={() => setMode(value)}
          >
            {value}
          </button>
        ))}
        <button
          type="button"
          aria-pressed={highlight}
          className={`h-9 px-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] ${
            highlight ? "bg-accent text-accent-ink" : "bg-panel text-ink"
          }`}
          onClick={() => setHighlight((value) => !value)}
        >
          Highlight flow
        </button>
      </div>
      {wide ? (
        <div className="plate mt-4 h-[32rem] p-0">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            colorMode={resolved}
            nodesFocusable
            edgesFocusable
            proOptions={{ hideAttribution: false }}
            onNodeClick={(_, node) => setSelected(node.id)}
            aria-label={`${diagram.title}. Pan and zoom the canvas. Select a node for its description.`}
          >
            <Background gap={28} color="var(--line)" />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
      ) : (
        <p className="plate mt-4 text-sm text-slate lg:hidden">
          On a small screen the canvas is replaced by the plain-language flow below. Widen the window for pan, zoom, and the logical or physical labels.
        </p>
      )}
      {current ? (
        <div className="mt-4 border-l-2 border-accent pl-4" aria-live="polite">
          <h3 className="font-serif text-2xl text-ink">
            {mode === "logical" ? current.logical : current.physical}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">{current.description}</p>
        </div>
      ) : null}
    </figure>
  );
}
