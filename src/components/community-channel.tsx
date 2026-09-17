import { BrandFrame } from "@/components/brand-frame";
import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { PostExamples } from "@/components/post-examples";
import { Badge } from "@/components/ui/badge";
import { playbooks, type Channel } from "@/data/channels";
import { posts } from "@/data/posts";
import { publicAsset } from "@/lib/asset";

const playbookKey = {
  vk: "vk",
  telegram: "telegram",
  max: "max",
} as const;

export function CommunityChannelPage({ channel }: { channel: Channel }) {
  const key = playbookKey[channel.slug as keyof typeof playbookKey];
  const book = playbooks[key];
  if (!book) return null;

  return (
    <main>
      <PageHero
        num={channel.num}
        kicker={channel.short}
        title={channel.title}
        lead={channel.role}
      />
      <ChannelSubnav />
      <Section>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <BrandFrame
            src={channel.cover}
            alt={`Шапка ${channel.title}`}
            caption="Готовая шапка. Перед публикацией проверить обрезку в редакторе площадки."
          />
          <article className="rounded-3xl border border-line bg-white p-6">
            <div className="flex items-center gap-4">
              <img
                src={publicAsset(channel.avatar)}
                alt=""
                className="h-16 w-16 rounded-full border border-line object-cover"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-good">
                  сообщество
                </p>
                <h2 className="font-serif text-3xl">{book.profile.name}</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{channel.audience}</p>
            <p className="mt-3 text-sm">
              <b>Цель:</b> {channel.goal}
            </p>
            <p className="mt-2 text-sm">
              <b>Ритм:</b> {channel.cadence}
            </p>
            {book.profile.handle ? (
              <p className="mt-2 text-sm text-muted">Ник: {book.profile.handle}</p>
            ) : null}
          </article>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="шапка" title="Что поставить в профиль" />
        <div className="grid gap-3 lg:grid-cols-2">
          <CopyField label="Название" value={book.profile.name} />
          <CopyField label="Статус / описание коротко" value={book.profile.status || book.profile.description} />
        </div>
        <div className="mt-3">
          <CopyField label="Полное описание" value={book.profile.description} />
        </div>
        <div className="mt-3">
          <CopyField label="Закреп" value={book.profile.pin} />
        </div>
        {book.profile.buttons.length > 0 ? (
          <p className="mt-4 text-sm">
            Кнопки: {book.profile.buttons.join(" · ")}
          </p>
        ) : null}
      </Section>

      <Section>
        <SectionTitle
          eyebrow="форматы"
          title="Как писать на этой площадке"
          body="Один факт на пост. Цена только из прайса филиала 2024. Дату группы без учебной части не ставить."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {book.formats.map((item) => (
            <article key={item.name} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.how}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="неделя" title="Сетка на семь дней" />
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-7">
          {book.week.map((row) => (
            <article key={row.day} className="rounded-2xl border border-line bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-good">
                {row.day}
              </p>
              <p className="mt-2 text-sm font-medium">{row.wall}</p>
              {row.extra ? <p className="mt-2 text-sm text-muted">{row.extra}</p> : null}
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="первые посты"
          title="Чем открыть канал"
          body="Стена не должна быть пустой в день названия. Даты групп подставляете свои."
        />
        <div className="grid gap-3 lg:grid-cols-2">
          {book.firstPosts.map((item) => (
            <CopyField key={item.title} label={item.title} value={item.text} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="типы постов"
          title="Десять форматов с примерами"
          body="Для каждого типа готовы три текста: ВКонтакте, Telegram и MAX. На этой странице все три, чтобы можно было адаптировать, а не копировать одну карусель во все каналы."
        />
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostExamples key={post.id} post={post} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="модерация" title="Правила ответа" />
        <ol className="grid gap-2">
          {book.moderation.map((item, index) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <CopyField label="UTM на сайт" value={book.utm} />
        </div>
        <p className="mt-4 rounded-2xl bg-bad-bg p-4 text-sm">
          Номера 922 и 328 в ответах не давать. Категорию B не набирать. Часы
          автодрома не публиковать.
        </p>
        <Badge tone="muted">сверка 17.09.2026</Badge>
      </Section>
    </main>
  );
}
