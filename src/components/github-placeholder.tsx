"use client";

import { track } from "@vercel/analytics";
import { profile } from "../../content/profile";

export function GithubPlaceholder({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className ?? "text-left text-sm text-slate"}
      onClick={() => track("github_click")}
    >
      GitHub — {profile.githubTodo}
    </button>
  );
}
