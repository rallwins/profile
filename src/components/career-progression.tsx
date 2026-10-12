"use client";

import { useState } from "react";
import { progression, type Role } from "../../content/experience";

function Detail({ role }: { role: Role }) {
  return (
    <div className="plate" role="tabpanel" id={`role-panel-${role.id}`}>
      <p className="text-xs uppercase tracking-[0.04em] text-accent">{role.progression}</p>
      <h3 className="mt-2 font-semibold tracking-tight text-3xl text-ink">{role.title}</h3>
      <p className="mt-2 text-sm text-slate">
        {role.employer}
        {role.location ? ` · ${role.location}` : ""} · {role.start} – {role.end}
      </p>
      {role.omittedNote ? <p className="mt-4 text-sm leading-relaxed text-slate">{role.omittedNote}</p> : null}
      <dl className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-[0.04em] text-slate">Domain</dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink">
            {role.domain ?? "TODO: domain is not stated on the résumé."}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.04em] text-slate">Architecture scope</dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink">
            {role.architectureScope ?? "TODO: architecture scope is not stated on the résumé."}
          </dd>
        </div>
        <div className="md:col-span-2">
          <dt className="text-xs uppercase tracking-[0.04em] text-slate">Technology</dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink">
            {role.technologies.length > 0
              ? role.technologies.join(" · ")
              : "TODO: a technology list is not stated for this role."}
          </dd>
        </div>
      </dl>
      {role.responsibilities.length > 0 ? (
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-[0.04em] text-slate">Responsibility</h4>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
            {role.responsibilities.map((item) => (
              <li key={item} className="border-t border-line pt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function CareerProgression() {
  const [active, setActive] = useState(progression[progression.length - 1]?.id ?? "");
  const role = progression.find((item) => item.id === active) ?? progression[0];

  return (
    <div>
      <div role="tablist" aria-label="Career progression" className="flex gap-2 overflow-x-auto pb-3">
        {progression.map((item, index) => {
          const selected = item.id === role.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`role-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`role-panel-${item.id}`}
              className={`min-w-40 shrink-0 rounded-2xl px-4 py-3 text-left ${
                selected ? "bg-accent text-accent-ink" : "bg-panel text-ink"
              }`}
              onClick={() => setActive(item.id)}
            >
              <span className={`block text-[0.7rem] tracking-[0.04em] ${selected ? "text-accent-ink" : "text-slate"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`mt-1 block text-sm ${selected ? "text-accent-ink" : "text-ink"}`}>
                {item.progression}
              </span>
              <span className={`mt-1 block text-xs ${selected ? "text-accent-ink" : "text-slate"}`}>
                {item.start}
              </span>
            </button>
          );
        })}
      </div>
      <Detail role={role} />
    </div>
  );
}
