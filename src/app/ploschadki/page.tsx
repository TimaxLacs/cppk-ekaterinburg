import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  doNot,
  mapCards,
  mapDont,
  mapFields,
  matrix,
  messengers,
  nameRule,
  order,
  platformNav,
  postTypes,
  siteBrief,
  surfaceMap,
  vkCadence,
  vkHousekeeping,
  vkProfile,
  whyPlatforms,
} from "@/data/platforms";

export default function PlatformsPage() {
  return (
    <main>
      <PageHero
        num="02"
        kicker="карты · ВКонтакте · Telegram · MAX · сайт"
        title="Одно имя на всех площадках. Сайт — ваша отдельная работа"
        lead="Эта глава про внешний вид и ритм: как оформить карточки в картах, сообщество, каналы в мессенджерах и что должно быть на сайте, который вы сделаете сами. Не про календарь на квартал."
        extra={<Button href="/rynok">Вернуться к рынку</Button>}
      />

      <nav className="sticky top-[57px] z-30 border-b border-white/8 bg-navy/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {platformNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-cream/70 hover:border-gold/40 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Section id="zachem">
        <SectionTitle eyebrow="зачем" title="Сначала узнать нас, потом поверить рекламе" />
        <p className="mb-6 max-w-3xl text-sm leading-7 text-cream/75">{whyPlatforms.lead}</p>
        <div className="grid gap-3 md:grid-cols-3">
          {whyPlatforms.points.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 p-5">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/70">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="karta">
        <SectionTitle
          eyebrow="карта площадок"
          title="Семь точек, одна организация"
          body="Роли не менять местами: карта не продаёт курс длинным текстом, сайт не заменяет ответ на отзыв."
        />
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-[760px] w-full text-left text-sm">
            <thead className="bg-white/4 text-[11px] uppercase tracking-[0.14em] text-cream/45">
              <tr>
                <th className="px-4 py-3">Площадка</th>
                <th className="px-4 py-3">Зачем человеку</th>
                <th className="px-4 py-3">Кто смотрит</th>
                <th className="px-4 py-3">Статус</th>
              </tr>
            </thead>
            <tbody>
              {surfaceMap.map((row) => (
                <tr key={row.platform} className="border-t border-white/8 align-top">
                  <td className="px-4 py-3 font-medium text-gold">{row.platform}</td>
                  <td className="px-4 py-3 text-cream/75">{row.role}</td>
                  <td className="px-4 py-3 text-cream/75">{row.owner}</td>
                  <td className="px-4 py-3 text-cream/85">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gold">имя везде одно</p>
          <p className="font-serif mt-2 text-3xl">{nameRule.publicName}</p>
          <p className="mt-2 text-cream/70">{nameRule.subtitle}</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-cream/70">
            {nameRule.avoid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="karty">
        <SectionTitle
          eyebrow="карты"
          title="2ГИС, Яндекс и Google — это витрина с улицы"
          body="Большая часть людей из Екатеринбурга выбирает автошколу по карточке организации, а не по сайту. Если имя, телефон и фото не совпадают, филиал выглядит как три разных конторы."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {mapCards.map((card) => (
            <article key={card.id} className="rounded-3xl border border-white/10 bg-navy-2 p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                {card.category}
              </p>
              <h3 className="font-serif mt-2 text-3xl">{card.title}</h3>
              <p className="mt-2 text-sm text-cream/60">{card.address}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-cream/75">
                {card.must.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-[640px] w-full text-left text-sm">
            <thead className="bg-white/4 text-[11px] uppercase tracking-[0.14em] text-cream/45">
              <tr>
                <th className="px-4 py-3">Поле в карточке</th>
                <th className="px-4 py-3">Как заполнять</th>
              </tr>
            </thead>
            <tbody>
              {mapFields.map((row) => (
                <tr key={row.field} className="border-t border-white/8 align-top">
                  <td className="px-4 py-3 font-medium text-gold">{row.field}</td>
                  <td className="px-4 py-3 text-cream/75">{row.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-2">
          {mapDont.map((item) => (
            <p
              key={item}
              className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-cream/75"
            >
              {item}
            </p>
          ))}
        </div>
      </Section>

      <Section id="sotsseti">
        <SectionTitle
          eyebrow="соцсети"
          title="Одно сообщество ВКонтакте на филиал"
          body="Не пять групп «на категорию B», «на ДОПОГ» и «на технику». Одно сообщество, явные метки тем, кнопки на сайт. Одноклассники и клипы на сторонних витринах не заменяют эту точку."
        />
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="bg-navy-3 px-6 py-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">шапка</p>
            <h3 className="font-serif mt-2 text-4xl">{vkProfile.name}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-cream/75">
              {vkProfile.description}
            </p>
          </div>
          <div className="grid gap-6 bg-navy-2 p-6 lg:grid-cols-3">
            <Meta title="Кнопки" body={vkProfile.buttons.join(" · ")} />
            <Meta title="Закреп" body={vkProfile.pin} />
            <Meta title="Обложка" body={vkProfile.cover} />
          </div>
        </div>
        <ul className="mt-6 grid gap-2 md:grid-cols-2">
          {vkHousekeeping.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-cream/75"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <SectionTitle
            eyebrow="типы постов"
            title="Что писать, чтобы лента не стала рекламой"
            body="Справочный пост может обходиться без кнопки «запишитесь». Для государственного центра это основной способ отличаться от сетей."
          />
          <div className="grid gap-4">
            {postTypes.map((item) => (
              <article
                key={item.name}
                className="grid gap-4 rounded-3xl border border-white/10 p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
              >
                <div>
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/70">{item.purpose}</p>
                </div>
                <div className="rounded-2xl bg-cream p-5 text-ink">
                  <Badge tone="muted" className="border-ink/10 text-ink/50">
                    пример
                  </Badge>
                  <h4 className="mt-3 font-medium">{item.example.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-ink/75">{item.example.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="messendzhery">
        <SectionTitle
          eyebrow="мессенджеры"
          title="Telegram и MAX — не вторая стена ВКонтакте"
          body="В ленте ВКонтакте пост ещё можно пролистать. В мессенджере каждое сообщение — уведомление. Лишний текст здесь стоит дороже."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {messengers.map((item) => (
            <article key={item.id} className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-serif text-3xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/75">{item.role}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">ритм</p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{item.cadence}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">форма</p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{item.form}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">время</p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{item.when}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">
                ежедневность
              </p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{item.daily}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="sajt">
        <SectionTitle eyebrow="сайт" title="Свой. Здесь только постановка" />
        <p className="mb-4 max-w-3xl text-sm leading-7 text-cream/75">{siteBrief.lead}</p>
        <article className="mb-6 rounded-3xl border border-gold/25 bg-gold/8 p-6">
          <p className="text-sm leading-7 text-cream/85">{siteBrief.principle}</p>
        </article>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {siteBrief.pages.map((page) => (
            <article key={page.name} className="rounded-3xl border border-white/10 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold">страница</p>
              <h3 className="mt-2 font-serif text-2xl">{page.name}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/70">{page.need}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">тон</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-cream/75">
              {siteBrief.tone.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">не делать</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-cream/75">
              {siteBrief.notThis.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="одна тема"
          title="Один факт — пять форм"
          body="Так проще объяснить собеседнику, зачем «не копировать пост». Источник правды всегда сайт."
        />
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-[960px] w-full text-left text-sm">
            <thead className="bg-white/4 text-[11px] uppercase tracking-[0.14em] text-cream/45">
              <tr>
                <th className="px-4 py-3">Тема</th>
                <th className="px-4 py-3">Карты</th>
                <th className="px-4 py-3">ВКонтакте</th>
                <th className="px-4 py-3">Telegram</th>
                <th className="px-4 py-3">MAX</th>
                <th className="px-4 py-3">Сайт</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.theme} className="border-t border-white/8 align-top">
                  <td className="px-4 py-3 font-medium text-gold">{row.theme}</td>
                  <td className="px-4 py-3 text-cream/75">{row.maps}</td>
                  <td className="px-4 py-3 text-cream/75">{row.vk}</td>
                  <td className="px-4 py-3 text-cream/75">{row.telegram}</td>
                  <td className="px-4 py-3 text-cream/75">{row.max}</td>
                  <td className="px-4 py-3 text-cream/75">{row.site}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="ritm">
        <SectionTitle
          eyebrow="ритм"
          title="Когда публиковать и нужна ли ежедневность"
          body={vkCadence.sources}
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <Cadence title="Стена VK" body={vkCadence.wall} />
          <Cadence title="Клипы" body={vkCadence.clips} />
          <Cadence title="Сторис" body={vkCadence.stories} />
          <Cadence title="Комментарии" body={vkCadence.comments} />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="порядок" title="Что чинить раньше" />
            <ol className="space-y-3">
              {order.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/8 px-4 py-3 text-sm leading-6 text-cream/75"
                >
                  <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionTitle eyebrow="ограничения" title="Что ослабляет картину" />
            <div className="space-y-3">
              {doNot.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-cream/75"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Meta({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-cream/80">{body}</p>
    </div>
  );
}

function Cadence({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-3xl border border-gold/20 bg-gold/8 p-5">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-cream/80">{body}</p>
    </article>
  );
}
