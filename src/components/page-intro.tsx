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
    <header className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-4xl leading-[1.12] text-ink md:text-[3.25rem]">{title}</h1>
      <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-slate">{lede}</p>
    </header>
  );
}

export function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[70rem] px-4 py-12 md:px-8 md:py-20">{children}</div>;
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
    <section id={id} className="mt-16 border-t border-line pt-10 md:mt-20 md:pt-12">
      <h2 className="text-3xl leading-tight text-ink md:text-[2.25rem]">{title}</h2>
      {intro ? <p className="mt-3 max-w-[65ch] text-slate">{intro}</p> : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
