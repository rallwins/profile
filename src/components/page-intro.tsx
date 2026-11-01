export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-4xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-[clamp(2.125rem,3.5vw,3rem)] leading-[1.1] text-ink">{title}</h1>
      <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-slate">{lede}</p>
    </header>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[75.5rem] px-4 py-12 md:px-8 md:py-20">{children}</div>;
}

export function Section({
  title,
  intro,
  id,
  children,
}: {
  title: string;
  intro?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="sheet mt-12 md:mt-16">
      <h2 className="text-[clamp(1.625rem,2.75vw,2.125rem)] leading-[1.15] text-ink">{title}</h2>
      {intro ? <p className="mt-3 max-w-[65ch] text-slate">{intro}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
