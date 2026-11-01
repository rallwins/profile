"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const order = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { choice, setChoice } = useTheme();
  const label =
    choice === "dark" ? "Dark theme" : choice === "light" ? "Light theme" : "System theme";
  const Icon = choice === "dark" ? Moon : choice === "light" ? Sun : Monitor;

  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-accent hover:text-accent"
      aria-label={`${label}. Activate to change.`}
      title={label}
      onClick={() => {
        const index = order.indexOf(choice);
        setChoice(order[(index + 1) % order.length]);
      }}
    >
      <Icon aria-hidden="true" size={18} />
    </button>
  );
}
