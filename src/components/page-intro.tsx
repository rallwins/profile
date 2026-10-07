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
      <p className="text-xs uppercase tracking-[0.18em] text-slate">
        <span className="text-accent">{index}</span>
        <span className="px-2 text-line">/</span>
        {eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-ink md:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate">{lede}</p>
    </header>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[76rem] px-5 py-14 md:px-8 md:py-16">{children}</div>;
}
