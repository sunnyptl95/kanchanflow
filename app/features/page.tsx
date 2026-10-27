import type { Metadata } from "next";
import { Check } from "lucide-react";
import Section from "@/components/Section";
import ScreenPlaceholder from "@/components/ScreenPlaceholder";
import FooterCta from "@/components/FooterCta";
import { featureRows, compareRows } from "@/lib/content";

const description = "See how KanchanFlow handles quotes, BOM costing, the shop-floor pipeline, WhatsApp updates and the mobile app, and how it compares with spreadsheets.";

export const metadata: Metadata = {
  title: "Features",
  description,
  openGraph: { title: "KanchanFlow features", description, url: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-steel" aria-labelledby="features-title">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 id="features-title" className="max-w-4xl font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[0.9]">
            The tools a job shop actually uses, in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">From the first enquiry to the dispatch note, here is what KanchanFlow does at each step.</p>
        </div>
      </section>

      <div className="bg-paper py-8 md:py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-5 md:space-y-24">
          {featureRows.map((row, i) => (
            <section key={row.title} aria-labelledby={`row-${i}`} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={i % 2 ? "md:order-2" : ""}>
                <h2 id={`row-${i}`} className="font-display text-4xl font-bold leading-none md:text-5xl">{row.title}</h2>
                <p className="mt-4 text-muted">{row.text}</p>
                <ul className="mt-5 space-y-2">
                  {row.points.map((p) => <li key={p} className="flex gap-3"><Check aria-hidden className="mt-0.5 shrink-0 text-gold-deep" size={20} />{p}</li>)}
                </ul>
              </div>
              <ScreenPlaceholder title={row.screen} rows={row.rows} />
            </section>
          ))}
        </div>
      </div>

      <Section id="compare" tone="steel" title="Spreadsheets and chat, or KanchanFlow." intro="The same jobs, done both ways.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-2 border-graphite bg-white text-left">
            <caption className="sr-only">Comparison of spreadsheets and chat against KanchanFlow</caption>
            <thead className="bg-graphite text-paper">
              <tr>
                <th scope="col" className="p-4 font-display text-xl">Task</th>
                <th scope="col" className="p-4 font-display text-xl">Spreadsheets and chat</th>
                <th scope="col" className="p-4 font-display text-xl text-gold">KanchanFlow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-dark">
              {compareRows.map((r) => (
                <tr key={r.need}>
                  <th scope="row" className="p-4 font-semibold">{r.need}</th>
                  <td className="p-4 text-muted">{r.old}</td>
                  <td className="p-4">{r.now}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FooterCta />
    </>
  );
}
