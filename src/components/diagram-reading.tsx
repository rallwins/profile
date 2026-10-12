import type { Diagram } from "../../content/architecture";

export function DiagramReading({ diagram }: { diagram: Diagram }) {
  return (
    <div className="plate mt-6">
      <h3 className="text-xs uppercase tracking-[0.04em] text-slate">Plain-language flow</h3>
      <ol className="mt-4 space-y-3">
        {diagram.nodes.map((node, index) => (
          <li key={node.id} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
            <details>
              <summary className="cursor-pointer text-ink">
                <span className="mr-2 text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                {node.logical}
                <span className="text-slate"> — {node.physical}</span>
              </summary>
              <p className="mt-2 pl-8 text-sm leading-relaxed text-slate">{node.description}</p>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}
