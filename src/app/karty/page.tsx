import { BrandFrame } from "@/components/brand-frame";
import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { channels, mapFill } from "@/data/channels";
import { currentProblems, mapEditDocs, mapEditGuides } from "@/data/maps";
import Link from "next/link";

const channel = channels.find((item) => item.slug === "karty")!;

const platformHref = {
  yandex: "/karty/yandex",
  gis: "/karty/2gis",
  google: "/karty/google",
} as const;

export default function MapsChannelPage() {
  return (
    <main>
      <PageHero
        num={channel.num}
        kicker={channel.short}
        title={channel.title}
        lead={channel.role}
        extra={<Button href="/karty/yandex">Сначала Яндекс</Button>}
      />
      <ChannelSubnav />
      <Section>
        <div className="mb-4 grid gap-3 md:grid-cols-2">
          <BrandFrame
            src="/brand/photos/card-office.jpg"
            alt="Макет карточки кабинета"
            caption="Кабинет. Живой фасад ещё нужно снять и заменить этот макет."
          />
          <BrandFrame
            src="/brand/photos/card-autodrome.jpg"
            alt="Макет карточки автодрома"
            caption="Автодром. Живой въезд с Петрова ещё нужно снять."
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <BrandFrame
            src="/brand/logo/variants/signet-navy-gold.png"
            alt="Знак для карточек карт"
            ratio="square"
            caption="Знак на карточки Яндекса, 2ГИС и Google. Один и тот же файл."
          />
          <article className="rounded-3xl border border-line bg-white p-6">
            <p className="text-sm text-muted">Название везде</p>
            <h2 className="font-serif text-3xl">{mapFill.name}</h2>
            <p className="mt-2 text-sm">Кабинет: {mapFill.phone}</p>
            <p className="mt-1 text-sm">Автодром: {mapFill.phoneAutodrome}</p>
            <p className="mt-1 text-sm">{mapFill.email}</p>
            <p className="mt-4 rounded-xl bg-bad-bg px-4 py-3 text-sm">
              Не «Учебный комбинат Допог». Это одна программа, не имя центра.
            </p>
          </article>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="сейчас" title="Что сломано на картах" />
        <div className="grid gap-3 md:grid-cols-2">
          {currentProblems.map((item) => (
            <article key={item.id} className="rounded-3xl border border-line bg-white p-5">
              <Badge tone="muted">{item.platform}</Badge>
              <h3 className="font-serif mt-3 text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6">{item.text}</p>
              <p className="mt-2 text-sm text-muted">{item.action}</p>
              {item.url ? (
                <a href={item.url} className="mt-3 inline-block text-sm text-good" target="_blank" rel="noreferrer">
                  Открыть карточку
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-line bg-white p-6">
            <h3 className="font-serif text-2xl">Карточка кабинета</h3>
            <CopyField label="Адрес" value={mapFill.officeAddress} />
            <div className="mt-3">
              <CopyField label="Часы" value={mapFill.officeHours} />
            </div>
            <div className="mt-3">
              <CopyField label="Координаты" value={mapFill.officeCoords} />
            </div>
            <p className="mt-3 text-sm text-muted">Фото: вход с 8 Марта, офис 207, класс. Свои кадры, не сток и не макет visual-system.</p>
          </article>
          <article className="rounded-3xl border border-line bg-white p-6">
            <h3 className="font-serif text-2xl">Карточка автодрома</h3>
            <CopyField label="Адрес" value={mapFill.autodromeAddress} />
            <div className="mt-3">
              <CopyField label="Телефон площадки" value={mapFill.phoneAutodrome} />
            </div>
            <div className="mt-3">
              <CopyField label="Часы" value="Пусто. Не заполнять." />
            </div>
            <div className="mt-3">
              <CopyField label="Координаты" value={mapFill.autodromeCoords} />
            </div>
            <p className="mt-3 text-sm text-muted">Фото: въезд с Петрова, разметка, техника. Телефон площадки 328-29-30, его передали отдельно. На сайте филиала этой строки нет.</p>
          </article>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="площадки" title="Отдельная инструкция на каждую карту" />
        <div className="grid gap-3 md:grid-cols-3">
          {mapEditGuides.map((guide) => (
            <Link
              key={guide.id}
              href={platformHref[guide.id as keyof typeof platformHref]}
              className="rounded-3xl border border-line bg-white p-6 hover:border-good"
            >
              <p className="text-[11px] uppercase tracking-wide text-good">как править</p>
              <h3 className="font-serif mt-2 text-2xl">{guide.name}</h3>
              <p className="mt-2 text-sm text-muted">Поля кабинета и автодрома, доступ владельца, что делать без доступа.</p>
            </Link>
          ))}
        </div>
        <ol className="mt-6 space-y-2">
          {mapEditDocs.map((item, index) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </Section>
    </main>
  );
}
