import { ChannelCover } from "@/components/brand-frame";
import type { Channel } from "@/data/channels";
import Link from "next/link";

export function ChannelCard({
  channel,
  compact = false,
}: {
  channel: Channel;
  compact?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white hover:border-good">
      <ChannelCover src={channel.cover} alt={channel.title} />
      <Link href={channel.href} className={compact ? "block p-4" : "block p-5"}>
        <p className="text-[11px] uppercase tracking-wide text-good">
          {channel.num}
          {compact ? null : ` · ${channel.isCommunity ? "сообщество" : "канал"}`}
        </p>
        <h3 className="font-serif mt-1 text-2xl">{channel.title}</h3>
        <p className="mt-1 text-sm text-muted">{channel.short}</p>
        {compact ? null : (
          <p className="mt-2 text-sm leading-6">{channel.role}</p>
        )}
      </Link>
    </article>
  );
}
