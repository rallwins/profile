"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const LONG_QUOTE = 360;

export function ExpandableQuote({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false);
  const long = quote.length > LONG_QUOTE;

  return (
    <>
      <p className={cn("whitespace-pre-line leading-relaxed text-ink", long && !expanded && "line-clamp-6")}>
        “{quote}”
      </p>
      {long ? (
        <button
          type="button"
          aria-expanded={expanded}
          className="text-link mt-2 inline-flex min-h-11 items-center text-[0.9375rem]"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </>
  );
}
