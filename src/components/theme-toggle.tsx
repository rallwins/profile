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
      className="h-10 bg-paper px-3 text-left text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink hover:text-accent xl:bg-paper"
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
