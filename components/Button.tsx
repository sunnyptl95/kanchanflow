import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "dark" | "outline" | "outlineLight";

const base =
  "inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-graphite hover:bg-[#f0b82e] active:bg-[#c48f10]",
  dark: "bg-graphite text-paper hover:bg-coal active:bg-black",
  outline: "border-2 border-graphite text-graphite hover:bg-graphite hover:text-paper active:bg-coal",
  outlineLight: "border-2 border-paper text-paper hover:bg-paper hover:text-graphite active:bg-steel",
};

type LinkProps = { variant?: Variant } & ComponentProps<typeof Link>;
type ButtonProps = { variant?: Variant } & ComponentProps<"button">;

export function ButtonLink({ variant = "primary", className = "", ...props }: LinkProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
