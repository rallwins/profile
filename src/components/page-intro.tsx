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
      <p className="font-serif text-6xl font-light leading-none text-accent">{index}</p>
      <p className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-slate">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate">{lede}</p>
    </header>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 md:py-20">{children}</div>;
}
