import type { Diagram } from "../../content/architecture";
import { DiagramFlow } from "@/components/diagram-flow";

export function DiagramDisclosure({ diagram, children }: { diagram: Diagram; children: React.ReactNode }) {
  return (
    <details className="disclosure">
      <summary>Diagram: {diagram.title}</summary>
      <div className="grid gap-6 pt-2 pb-6 lg:grid-cols-2 lg:items-start">
        <DiagramFlow diagram={diagram} />
        {children}
      </div>
    </details>
  );
}
