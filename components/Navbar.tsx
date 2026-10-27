"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { ButtonLink } from "./Button";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-dark bg-paper/95 backdrop-blur">
      <a href="#main" className="absolute left-2 top-2 -translate-y-20 bg-gold px-4 py-2 font-semibold focus:translate-y-0">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="py-1 font-medium text-graphite hover:underline hover:decoration-gold hover:decoration-4 hover:underline-offset-8 aria-[current=page]:underline aria-[current=page]:decoration-gold aria-[current=page]:decoration-4 aria-[current=page]:underline-offset-8"
            >
              {l.label}
            </Link>
          ))}
          <ButtonLink href="/pricing#trial" className="py-2">Start free trial</ButtonLink>
        </nav>
        <button
          type="button"
          className="p-2 hover:bg-steel active:bg-steel-dark md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-steel-dark bg-paper px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block border-b border-steel py-4 text-lg font-medium hover:bg-steel">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/pricing#trial" className="mt-5 w-full">Start free trial</ButtonLink>
        </nav>
      )}
    </header>
  );
}
