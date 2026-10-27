import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  intro?: string;
  tone?: "paper" | "steel" | "dark";
  children: ReactNode;
};

const tones = {
  paper: "bg-paper text-graphite",
  steel: "bg-steel text-graphite",
  dark: "bg-graphite text-paper",
};

export default function Section({ id, title, intro, tone = "paper", children }: Props) {
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-24`} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="mx-auto max-w-6xl px-5">
        <h2 id={id ? `${id}-title` : undefined} className="max-w-3xl font-display text-4xl font-bold leading-none md:text-6xl">
          {title}
        </h2>
        {intro && (
          <p className={`mt-4 max-w-2xl text-lg ${tone === "dark" ? "text-steel-dark" : "text-muted"}`}>{intro}</p>
        )}
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
