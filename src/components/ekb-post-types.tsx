import { CopyField } from "@/components/copy-field";
import { Badge } from "@/components/ui/badge";
import { ekbPostTypes } from "@/data/ekb-playbook";

export function EkbPostTypes() {
  return (
    <div className="grid gap-8">
      {ekbPostTypes.map((item) => (
        <article key={item.id} id={`post-${item.id}`} className="scroll-mt-24 rounded-[2rem] border border-white/10 p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{item.name}</Badge>
            <Badge tone="muted">{item.line}</Badge>
          </div>
          <p className="mt-4 text-sm leading-7 text-cream/80">{item.purpose}</p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            <Meta label="Когда" value={item.when} />
            <Meta label="Какой кадр" value={item.photo} />
          </dl>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <Example platform="ВКонтакте" format={item.vk.format} title={item.vk.title} text={item.vk.text} />
            <Example platform="Telegram" format={item.telegram.format} text={item.telegram.text} />
            <Example platform="MAX" format={item.max.format} text={item.max.text} />
          </div>
        </article>
      ))}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
      <dt className="text-[11px] uppercase tracking-[0.16em] text-gold">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-cream/75">{value}</dd>
    </div>
  );
}

function Example({
  platform,
  format,
  title,
  text,
}: {
  platform: string;
  format: string;
  title?: string;
  text: string;
}) {
  const value = title ? `${title}\n\n${text}` : text;
  return (
    <div className="rounded-3xl border border-white/8 bg-navy-2 p-4">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{platform}</p>
      <p className="mt-2 text-xs leading-5 text-cream/50">{format}</p>
      <div className="mt-3">
        <CopyField label={title ? "Текст поста" : "Текст"} value={value} />
      </div>
    </div>
  );
}
