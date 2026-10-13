"use client";

import { styleOptions, useStyle, type StyleId } from "@/components/style-provider";

function isStyleId(value: string): value is StyleId {
  return styleOptions.some((option) => option.id === value);
}

export function StyleSwitcher({
  variant = "list",
  name = "site-style",
}: {
  variant?: "list" | "menu";
  name?: string;
}) {
  const { style, setStyle } = useStyle();

  if (variant === "menu") {
    return (
      <label className="flex items-center gap-2 text-xs font-semibold text-slate">
        <span>Style</span>
        <select
          aria-label="Style"
          className="h-10 max-w-[11rem] rounded-full border border-line bg-paper px-3 text-xs font-semibold text-ink"
          value={style}
          onChange={(event) => {
            if (isStyleId(event.target.value)) setStyle(event.target.value);
          }}
        >
          {styleOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <fieldset className="style-switcher">
      <legend>Style</legend>
      <div className="style-switcher-options">
        {styleOptions.map((option) => (
          <label key={option.id}>
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={style === option.id}
              onChange={() => setStyle(option.id)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
