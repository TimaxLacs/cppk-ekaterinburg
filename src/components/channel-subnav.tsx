"use client";

import { channels } from "@/data/channels";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ChannelSubnav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[57px] z-30 border-b border-line bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        <Link
          href="/ploschadki"
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 text-xs",
            pathname.startsWith("/ploschadki")
              ? "border-good bg-good text-white"
              : "border-line bg-white hover:border-good",
          )}
        >
          Все каналы
        </Link>
        {channels.map((channel) => {
          const active =
            pathname === channel.href || pathname.startsWith(`${channel.href}/`);
          return (
            <Link
              key={channel.slug}
              href={channel.href}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-xs",
                active
                  ? "border-good bg-good text-white"
                  : "border-line bg-white hover:border-good",
              )}
            >
              {channel.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
