"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export const styleOptions = [
  { id: "glass-funnel", label: "Glass Funnel" },
  { id: "glass-dashboard", label: "Glass Dashboard" },
  { id: "hire-sheet", label: "Hire Sheet" },
] as const;

export type StyleId = (typeof styleOptions)[number]["id"];

type StyleContextValue = {
  style: StyleId;
  setStyle: (style: StyleId) => void;
};

const StyleContext = createContext<StyleContextValue | null>(null);
const STORAGE_KEY = "ar-style";
const CHANGE_EVENT = "ar-style-change";
const DEFAULT_STYLE: StyleId = "glass-dashboard";

function isStyleId(value: string | null): value is StyleId {
  return styleOptions.some((option) => option.id === value);
}

function readStyle(): StyleId {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isStyleId(stored) ? stored : DEFAULT_STYLE;
}

function subscribe(onStoreChange: () => void) {
  const onChange = () => onStoreChange();
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function apply(style: StyleId) {
  document.documentElement.dataset.style = style;
}

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const style = useSyncExternalStore(subscribe, readStyle, () => DEFAULT_STYLE);

  useEffect(() => {
    apply(style);
  }, [style]);

  function setStyle(next: StyleId) {
    window.localStorage.setItem(STORAGE_KEY, next);
    apply(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return <StyleContext.Provider value={{ style, setStyle }}>{children}</StyleContext.Provider>;
}

export function useStyle() {
  const value = useContext(StyleContext);
  if (!value) throw new Error("useStyle must be used within StyleProvider");
  return value;
}
