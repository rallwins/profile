"use client";

import dynamic from "next/dynamic";
import type { Diagram } from "../../content/architecture";

const Canvas = dynamic(
  () => import("@/components/architecture-canvas").then((mod) => mod.ArchitectureCanvas),
  {
    ssr: false,
    loading: () => <p className="mt-4 text-sm text-slate">Loading the diagram canvas…</p>,
  },
);

export function ArchitectureCanvasLoader({ diagram }: { diagram: Diagram }) {
  return <Canvas diagram={diagram} />;
}
