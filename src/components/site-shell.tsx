"use client";

import { chapters } from "@/data/nav";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-good text-sm font-semibold text-white">
              Ц
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">
                Екатеринбург
              </span>
              <span className="block font-medium">ЦППК · обзор</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex">
            {chapters.map((chapter) => {
              const active = pathname === chapter.href || pathname === `${chapter.href}/`;
              return (
                <Link
                  key={chapter.href}
                  href={chapter.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs tracking-wide transition-colors",
                    active
                      ? "bg-good text-white"
                      : "text-muted hover:bg-white hover:text-ink",
                  )}
                >
                  {chapter.title}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line sm:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-line px-4 py-3 sm:hidden">
            <div className="grid gap-1">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.href}
                  href={chapter.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    pathname.startsWith(chapter.href) ? "bg-good text-white" : "text-ink",
                  )}
                >
                  {chapter.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>
      {children}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm leading-6 text-muted sm:px-6">
          Рабочий документ. Срез открытых данных cppkspb.ru, Яндекс и 2ГИС, 27.08.2026.
          Не электрички АО «ЦППК».
        </div>
      </footer>
    </div>
  );
}
