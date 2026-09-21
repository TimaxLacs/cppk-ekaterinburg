import { ChannelCover } from "@/components/brand-frame";
import { OpenableImage } from "@/components/openable-image";
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
      <ChannelCover src={channel.cover} alt={`Шапка: ${channel.title}`} />
      <div className={`flex items-start gap-3 ${compact ? "p-4" : "p-5"}`}>
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#0c1b33]">
          <OpenableImage
            src={channel.avatar}
            alt={`Аватар: ${channel.title}`}
            fill
            hint={false}
            className="h-12 w-12"
          />
        </div>
        <Link href={channel.href} className="min-w-0">
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
      </div>
    </article>
  );
}
