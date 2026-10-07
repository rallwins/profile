"use client";

import { useTheme } from "@/components/theme-provider";

const order = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { choice, setChoice } = useTheme();
  const label =
    choice === "dark" ? "Dark theme" : choice === "light" ? "Light theme" : "System theme";

  return (
    <button
      type="button"
      className="h-9 border border-line px-3 text-xs tracking-[0.14em] uppercase text-ink hover:border-accent"
      aria-label={`${label}. Activate to change.`}
      onClick={() => {
        const index = order.indexOf(choice);
        setChoice(order[(index + 1) % order.length]);
      }}
    >
      {label}
    </button>
  );
}
