import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary:
    "bg-gold text-navy hover:bg-gold-soft shadow-[0_0_0_1px_rgba(212,160,23,0.3)]",
  ghost:
    "bg-transparent text-cream/90 border border-cream/15 hover:border-gold/50 hover:text-gold",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof styles;
  href?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...props
}: Props) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
