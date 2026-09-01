import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

export function PageHero({
  num,
  kicker,
  title,
  lead,
  extra,
}: {
  num: string;
  kicker: string;
  title: string;
  lead: string;
  extra?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{num}</Badge>
          <Badge tone="muted">{kicker}</Badge>
        </div>
        <h1 className="font-serif mt-5 max-w-4xl text-4xl leading-[1.05] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {lead}
        </p>
        {extra ? <div className="mt-8">{extra}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-good">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
      {body ? <p className="mt-3 leading-7 text-muted">{body}</p> : null}
    </div>
  );
}
