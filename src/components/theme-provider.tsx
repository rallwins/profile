"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type ThemeChoice = "light" | "dark" | "system";

type ThemeContextValue = {
  choice: ThemeChoice;
  resolved: "light" | "dark";
  setChoice: (choice: ThemeChoice) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "ar-theme";
const CHANGE_EVENT = "ar-theme-change";

function readChoice(): ThemeChoice {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

function resolveChoice(choice: ThemeChoice): "light" | "dark" {
  if (choice === "light" || choice === "dark") return choice;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => onStoreChange();
  media.addEventListener("change", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function apply(resolved: "light" | "dark") {
  document.documentElement.classList.toggle("dark", resolved === "dark");
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const choice = useSyncExternalStore(subscribe, readChoice, () => "system" as ThemeChoice);
  const resolved = useSyncExternalStore(
    subscribe,
    () => resolveChoice(readChoice()),
    () => "light" as const,
  );

  useEffect(() => {
    apply(resolved);
  }, [resolved]);

  function setChoice(next: ThemeChoice) {
    window.localStorage.setItem(STORAGE_KEY, next);
    apply(resolveChoice(next));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <ThemeContext.Provider value={{ choice, resolved, setChoice }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within ThemeProvider");
  return value;
}
