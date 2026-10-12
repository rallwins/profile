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
      className="h-10 rounded-full bg-paper px-4 text-left text-xs font-semibold text-ink"
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
