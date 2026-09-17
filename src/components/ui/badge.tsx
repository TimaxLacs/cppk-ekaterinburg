import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "gold",
  className,
}: {
  children: ReactNode;
  tone?: "gold" | "cream" | "teal" | "muted" | "bad" | "warn";
  className?: string;
}) {
  const tones = {
    gold: "bg-good-bg text-good border-good/20",
    cream: "bg-white text-ink border-line",
    teal: "bg-[#e8f2f7] text-teal border-teal/20",
    muted: "bg-white text-muted border-line",
    bad: "bg-bad-bg text-bad border-bad/20",
    warn: "bg-warn-bg text-warn border-warn/20",
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
