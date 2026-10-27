import type { Metadata } from "next";
import { X, Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import Section from "@/components/Section";
import Mockup from "@/components/Mockup";
import FAQ from "@/components/FAQ";
import FooterCta from "@/components/FooterCta";
import { features, industries, homeFaqs } from "@/lib/content";

const title = "CRM for manufacturers: quotes, BOM and work orders";
const description = "KanchanFlow takes a manufacturing job from quote to dispatch on one screen, with BOM costing, a shop-floor pipeline and WhatsApp updates.";

export const metadata: Metadata = {
  title: { absolute: `KanchanFlow | ${title}` },
  description,
  openGraph: { title, description, url: "/" },
};

const before = ["Quotes rebuilt in Excel every time", "Order status lives in the supervisor's head", "Customer approvals buried in WhatsApp chats"];
const after = ["Quote from the item master in minutes", "Every job visible on one pipeline board", "Approvals attached to the order automatically"];

export default function HomePage() {
  return (
    <>
      <section className="bg-steel" aria-labelledby="hero-title">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 id="hero-title" className="font-display text-[clamp(3.25rem,9vw,6.5rem)] font-bold leading-[0.9]">
              Quote it. Make it. Ship it. One screen.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              KanchanFlow is the CRM for manufacturers who run on quotes, drawings and work orders. Price a job from its BOM, track it on the shop floor and update the customer on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/pricing#plans">Start free trial</ButtonLink>
              <ButtonLink href="/features" variant="outline">See how it works</ButtonLink>
            </div>
          </div>
          <div className="pb-3 pr-3"><Mockup /></div>
        </div>
      </section>

      <Section id="problem" title="Your shop runs faster than your paperwork." intro="Most small manufacturers hold a job together with spreadsheets, notebooks and chat threads. It works until two big orders land in the same week.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-steel-dark bg-white p-7">
            <h3 className="font-display text-3xl font-bold">Without KanchanFlow</h3>
            <ul className="mt-5 space-y-3">
              {before.map((t) => <li key={t} className="flex gap-3"><X aria-hidden className="mt-0.5 shrink-0 text-gold-deep" size={20} />{t}</li>)}
            </ul>
          </div>
          <div className="border-2 border-graphite bg-graphite p-7 text-paper">
            <h3 className="font-display text-3xl font-bold">With KanchanFlow</h3>
            <ul className="mt-5 space-y-3">
              {after.map((t) => <li key={t} className="flex gap-3"><Check aria-hidden className="mt-0.5 shrink-0 text-gold" size={20} />{t}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="features" tone="steel" title="Everything between enquiry and dispatch." intro="Six tools that share one set of records, so nobody types the same part number twice.">
        <ul className="grid border-l-2 border-t-2 border-graphite bg-paper md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title: t, text }) => (
            <li key={t} className="border-b-2 border-r-2 border-graphite p-7">
              <Icon aria-hidden className="text-gold-deep" size={32} />
              <h3 className="mt-4 font-display text-2xl font-bold">{t}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8"><ButtonLink href="/features" variant="dark">Explore all features</ButtonLink></p>
      </Section>

      <Section id="industries" tone="dark" title="Built for the floor, not the boardroom." intro="KanchanFlow is shaped by job shops and make-to-order plants like these.">
        <ul className="flex flex-wrap gap-3">
          {industries.map((i) => <li key={i} className="border-2 border-gold px-4 py-2 font-display text-xl font-semibold">{i}</li>)}
        </ul>
      </Section>

      <Section id="pricing-teaser" title="Plans start at ₹1,999 a month for three users." intro="Every plan includes quotes, orders and the pipeline board. Add WhatsApp, costing and the mobile app on Growth.">
        <ButtonLink href="/pricing" variant="dark">Compare plans</ButtonLink>
      </Section>

      <Section id="faq" tone="steel" title="Questions from shop owners">
        <FAQ items={homeFaqs} />
      </Section>

      <FooterCta />
    </>
  );
}
