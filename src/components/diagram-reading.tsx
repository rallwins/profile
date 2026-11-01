import type { Diagram } from "../../content/architecture";

export function DiagramReading({ diagram }: { diagram: Diagram }) {
  return (
    <div className="plate mt-6">
      <h3 className="font-semibold text-ink">Step by step</h3>
      <ol className="mt-4 space-y-3">
        {diagram.nodes.map((node, index) => (
          <li key={node.id} className="grid grid-cols-[1.75rem_minmax(0,1fr)] border-t border-line pt-3 first:border-t-0 first:pt-0">
            <span className="text-sm font-semibold text-accent">{index + 1}</span>
            <div>
              <p className="font-medium text-ink">
                {node.logical}
                {node.physical !== node.logical ? <span className="font-normal text-slate"> · {node.physical}</span> : null}
              </p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-slate">{node.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
