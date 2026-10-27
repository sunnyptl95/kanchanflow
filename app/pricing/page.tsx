import type { Metadata } from "next";
import Section from "@/components/Section";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";
import TrialForm from "@/components/TrialForm";
import FooterCta from "@/components/FooterCta";
import { pricingFaqs } from "@/lib/content";

const description = "Simple KanchanFlow pricing from ₹1,999 a month. Compare Starter, Growth and Scale, and save 20% with annual billing.";

export const metadata: Metadata = {
  title: "Pricing",
  description,
  openGraph: { title: "KanchanFlow pricing", description, url: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-steel" aria-labelledby="pricing-title">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h1 id="pricing-title" className="max-w-4xl font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[0.9]">
            Pay for the people on your team, not the features.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">Every plan starts with a 14-day free trial. Customers who receive your quotes are always free.</p>
          <div className="mt-10"><PricingPlans /></div>
        </div>
      </section>
      <Section id="trial" title="Start your 14-day trial." intro="Tell us who you are and we will set up your workspace. No card needed.">
        <TrialForm />
      </Section>
      <Section id="faq" tone="steel" title="Pricing questions">
        <FAQ items={pricingFaqs} />
      </Section>
    </>
  );
}
