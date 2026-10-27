import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="KanchanFlow home">
      <Image src="/mark.svg" alt="" width={32} height={32} priority />
      <span className={`font-display text-2xl font-bold ${light ? "text-paper" : "text-graphite"}`}>KanchanFlow</span>
    </Link>
  );
}
