import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

const columns = [
  { title: "Product", links: [["Features", "/features"], ["Pricing", "/pricing"], ["Industries", "/#industries"], ["FAQ", "/#faq"]] },
  { title: "Get started", links: [["Start free trial", "/pricing#trial"], ["Compare plans", "/pricing#plans"]] },
  { title: "Contact", links: [["hello@kanchanflow.com", "mailto:hello@kanchanflow.com"], ["Sales on WhatsApp", "https://wa.me/910000000000"]] },
];

const socials = [
  { label: "KanchanFlow on LinkedIn", icon: Linkedin },
  { label: "KanchanFlow on X", icon: Twitter },
  { label: "KanchanFlow on YouTube", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-steel-dark">
            Quotes, bills of material and work orders for manufacturers who would rather be making parts than chasing paperwork.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a href="#" aria-label={label} className="flex size-10 items-center justify-center border border-steel-dark/40 hover:bg-gold hover:text-graphite">
                  <Icon aria-hidden size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="font-display text-xl font-semibold">{c.title}</h2>
            <ul className="mt-3 space-y-2">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-steel-dark hover:text-gold hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="border-t border-coal px-5 py-6 text-center text-sm text-steel-dark">
        &copy; {new Date().getFullYear()} KanchanFlow. All rights reserved.
      </p>
    </footer>
  );
}
