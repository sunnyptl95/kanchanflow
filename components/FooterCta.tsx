import { ButtonLink } from "./Button";

export default function FooterCta() {
  return (
    <section className="bg-gold text-graphite" aria-labelledby="cta-title">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <h2 id="cta-title" className="font-display text-4xl font-bold leading-none md:text-5xl">
            Send your next quote from KanchanFlow.
          </h2>
          <p className="mt-3 max-w-xl">14 days free, no card. Import your customers from Excel and we will help you set up.</p>
        </div>
        <ButtonLink href="/pricing#trial" variant="dark">Start free trial</ButtonLink>
      </div>
    </section>
  );
}
