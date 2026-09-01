import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary: "bg-good text-white hover:bg-gold-soft",
  ghost: "bg-white text-ink border border-line hover:border-good hover:text-good",
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
