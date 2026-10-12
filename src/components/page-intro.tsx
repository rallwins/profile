export function PageIntro({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="inline-flex h-9 items-center rounded-full bg-accent px-3.5 text-sm font-semibold text-accent-ink">
        {index}
      </p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.06em] text-slate">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate">{lede}</p>
    </header>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 md:py-20">{children}</div>;
}
