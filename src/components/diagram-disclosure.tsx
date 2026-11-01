"use client";

import { useState } from "react";
import type { Diagram } from "../../content/architecture";
import { ArchitectureCanvasLoader } from "@/components/architecture-canvas-loader";

export function DiagramDisclosure({ diagram, children }: { diagram: Diagram; children: React.ReactNode }) {
  // The canvas measures its container, so it mounts only once the panel is open.
  const [opened, setOpened] = useState(false);

  return (
    <details
      className="disclosure"
      onToggle={(event) => {
        if (event.currentTarget.open) setOpened(true);
      }}
    >
      <summary>Diagram: {diagram.title}</summary>
      <div className="pb-6">
        {opened ? <ArchitectureCanvasLoader diagram={diagram} /> : null}
        {children}
      </div>
    </details>
  );
}
