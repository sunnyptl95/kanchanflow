"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { ButtonLink } from "./Button";
import { plans } from "@/lib/content";

const rupee = new Intl.NumberFormat("en-IN");

export default function PricingPlans() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className={annual ? "text-muted" : "font-semibold"}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Bill annually"
          onClick={() => setAnnual((a) => !a)}
          className="relative h-8 w-14 border-2 border-graphite bg-steel transition-colors aria-checked:bg-gold"
        >
          <span className={`absolute top-0.5 size-6 bg-graphite transition-all ${annual ? "left-[26px]" : "left-0.5"}`} />
        </button>
        <span className={annual ? "font-semibold" : "text-muted"}>Annual <span className="ml-1 bg-gold px-2 py-0.5 text-sm font-semibold text-graphite">save 20%</span></span>
      </div>

      <div id="plans" className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => {
          const price = annual ? p.annual : p.monthly;
          return (
            <article key={p.name} className={`flex flex-col border-2 border-graphite p-7 ${p.featured ? "bg-graphite text-paper lg:-mt-4 lg:pb-11" : "bg-white"}`}>
              <h3 className="font-display text-3xl font-bold">{p.name}</h3>
              <p className={p.featured ? "text-steel-dark" : "text-muted"}>{p.blurb}</p>
              <p className="mt-6">
                {price ? (
                  <>
                    <span className="font-display text-5xl font-bold">&#8377;{rupee.format(price)}</span>
                    <span className={p.featured ? "text-steel-dark" : "text-muted"}> a month, before GST</span>
                  </>
                ) : (
                  <span className="font-display text-5xl font-bold">Custom</span>
                )}
              </p>
              <p className="mt-1 font-semibold">{p.users}</p>
              <ul className="my-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3"><Check aria-hidden className="mt-0.5 shrink-0 text-gold" size={20} />{it}</li>
                ))}
              </ul>
              <ButtonLink href="/pricing#trial" variant={p.featured ? "primary" : "dark"} aria-label={`${p.cta}, ${p.name} plan`}>{p.cta}</ButtonLink>
            </article>
          );
        })}
      </div>
    </div>
  );
}
