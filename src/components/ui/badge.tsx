import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "cream" | "teal" | "muted";
  className?: string;
}) {
  const tones = {
    gold: "bg-gold/15 text-gold border-gold/25",
    cream: "bg-cream/10 text-cream border-cream/15",
    teal: "bg-teal/20 text-teal-soft border-teal/30",
    muted: "bg-white/5 text-cream/70 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
