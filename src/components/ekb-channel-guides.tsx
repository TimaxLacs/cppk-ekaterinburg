import { CopyField } from "@/components/copy-field";
import { Badge } from "@/components/ui/badge";
import { ekbChannels, ekbVkFormats } from "@/data/ekb-playbook";

export function EkbChannelGuides() {
  return (
    <div className="grid gap-10">
      {ekbChannels.map((channel) => (
        <ChannelGuide key={channel.id} channel={channel} />
      ))}
    </div>
  );
}

function ChannelGuide({ channel }: { channel: (typeof ekbChannels)[number] }) {
  return (
    <article id={`channel-${channel.id}`} className="scroll-mt-24">
      <Header channel={channel} />
      <Blocks channel={channel} />
      {channel.id === "vk" ? <VkFormats /> : null}
      <WeekTable week={channel.week} />
      <FirstPosts posts={channel.firstPosts} />
      <Moderation items={channel.moderation} utm={channel.utm} />
    </article>
  );
}

function Header({ channel }: { channel: (typeof ekbChannels)[number] }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{channel.platform}</Badge>
        <Badge tone="muted">{channel.cadence}</Badge>
      </div>
      <h3 className="font-serif mt-4 text-3xl sm:text-4xl">{channel.title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-cream/75">{channel.role}</p>
    </>
  );
}

function Blocks({ channel }: { channel: (typeof ekbChannels)[number] }) {
  return (
    <>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Block title="Кто читает" body={channel.audience} />
        <Block title="Зачем канал" body={channel.goal} />
        <Block title="Почему не дубль другой площадки" body={channel.why} />
        <Block title="Слоты" body={channel.slots} />
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {channel.notFor.map((item) => (
          <li key={item} className="rounded-2xl border border-white/8 px-4 py-3 text-sm leading-6 text-cream/70">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function VkFormats() {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {ekbVkFormats.map((item) => (
        <article key={item.name} className="rounded-3xl border border-white/10 p-5">
          <h4 className="font-medium">{item.name}</h4>
          <p className="mt-2 text-sm leading-6 text-cream/65">{item.how}</p>
        </article>
      ))}
    </div>
  );
}

function WeekTable({ week }: { week: (typeof ekbChannels)[number]["week"] }) {
  return (
    <>
      <h4 className="mt-8 text-sm uppercase tracking-[0.16em] text-gold">Сетка недели</h4>
      <div className="mt-3 overflow-hidden rounded-3xl border border-white/10">
        {week.map((row) => (
          <div
            key={row.day}
            className="grid gap-2 border-b border-white/8 px-4 py-3 last:border-b-0 sm:grid-cols-[70px_1fr_1fr]"
          >
            <p className="text-gold">{row.day}</p>
            <p className="text-sm text-cream/80">{row.wall}</p>
            <p className="text-sm text-cream/50">{row.extra}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function FirstPosts({ posts }: { posts: (typeof ekbChannels)[number]["firstPosts"] }) {
  return (
    <>
      <h4 className="mt-8 text-sm uppercase tracking-[0.16em] text-gold">Первые публикации</h4>
      <div className="mt-3 grid gap-4">
        {posts.map((post) => (
          <CopyField key={post.title} label={post.title} value={post.text} />
        ))}
      </div>
    </>
  );
}

function Moderation({ items, utm }: { items: string[]; utm: string }) {
  return (
    <>
      <h4 className="mt-8 text-sm uppercase tracking-[0.16em] text-gold">Модерация</h4>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-cream/75">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <CopyField label="UTM на сайт" value={utm} />
      </div>
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-3xl border border-white/10 p-5">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-cream/75">{body}</p>
    </article>
  );
}
