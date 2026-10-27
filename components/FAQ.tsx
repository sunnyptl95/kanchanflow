"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

export default function FAQ({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const uid = useId();

  return (
    <div className="max-w-3xl divide-y divide-steel-dark border-y border-steel-dark">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={open}
                aria-controls={`${uid}-a${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold hover:bg-steel/60"
              >
                {item.q}
                <Plus aria-hidden className={`shrink-0 transition-transform ${open ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <div id={`${uid}-a${i}`} role="region" aria-labelledby={`${uid}-q${i}`} hidden={!open}>
              <p className="pb-5 pr-10 text-muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
