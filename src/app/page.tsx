import { Button } from "@/components/ui/button";
import { autodrome, hours, office, phones } from "@/data/contacts";
import { channels } from "@/data/channels";
import { chapters } from "@/data/nav";
import { publicAsset } from "@/lib/asset";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
          ЦППК Екатеринбург · учебный центр Росавтодора
        </p>
        <h1 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-6xl">
          Куда вкладывать продвижение
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Не электрички и не обычная автошкола. Офис: 8 Марта, 158. Автодром:
          Пышма, Петрова, 59А. Сначала страница в поиске и один телефон 343,
          потом реклама.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/rynok">Рынок</Button>
          <Button href="/ploschadki" variant="ghost">
            Каналы и тексты
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 pb-8 sm:px-6 md:grid-cols-2">
        <div className="rounded-2xl bg-bad-bg p-5 text-center">
          <p className="text-sm font-bold text-muted">на Яндексе сейчас</p>
          <p className="font-serif text-5xl text-bad">922</p>
          <p className="mt-2 text-sm text-muted">«Учебный комбинат Допог» · 188-29-30</p>
        </div>
        <div className="rounded-2xl bg-good-bg p-5 text-center">
          <p className="text-sm font-bold text-muted">нужен один</p>
          <p className="font-serif text-5xl text-good">343</p>
          <p className="mt-2 text-sm text-muted">{phones.official}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 pb-8 sm:px-6 md:grid-cols-2">
        <article className="rounded-3xl border border-line bg-white p-6">
          <div className="flex items-center gap-3">
            <img
              src={publicAsset("/brand/logo/variants/signet-navy-gold.png")}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-good">
                кабинет
              </p>
              <h2 className="font-serif text-3xl">8 Марта, 158</h2>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">{office.line}</p>
          <p className="mt-3 text-lg font-medium">{phones.official}</p>
          <p className="mt-1 text-sm text-muted">{hours.line}</p>
          <p className="mt-3 text-sm">
            Теория, документы, экзамен УГАДН в этом здании. Автодром во дворе не
            находится.
          </p>
        </article>
        <article className="rounded-3xl border border-line bg-white p-6">
          <div className="flex items-center gap-3">
            <img
              src={publicAsset("/brand/logo/variants/signet-navy-gold.png")}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wide text-good">
                автодром
              </p>
              <h2 className="font-serif text-3xl">Петрова, 59А</h2>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">{autodrome.mapsLine}</p>
          <p className="mt-3 text-lg font-medium">{phones.official}</p>
          <p className="mt-1 text-sm text-muted">Часы площадки не публикуем.</p>
          <p className="mt-3 text-sm">{autodrome.note}</p>
        </article>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 pb-8 sm:px-6 md:grid-cols-3">
        {chapters.map((chapter) => (
          <Link
            key={chapter.href}
            href={chapter.href}
            className="rounded-3xl border border-line bg-white p-6 hover:border-good"
          >
            <p className="text-sm text-muted">{chapter.num}</p>
            <h2 className="font-serif mt-2 text-3xl">{chapter.title}</h2>
            <p className="mt-2 text-muted">{chapter.short}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <h2 className="font-serif text-3xl">Восемь каналов</h2>
        <p className="mt-2 max-w-2xl text-muted">
          У каждого своя страница: что править, какие тексты ставить, какие
          шапки и типы постов.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <Link
              key={channel.slug}
              href={channel.href}
              className="overflow-hidden rounded-3xl border border-line bg-white hover:border-good"
            >
              <img
                src={publicAsset(channel.cover)}
                alt=""
                className="h-24 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-wide text-good">
                  {channel.num}
                </p>
                <h3 className="font-serif mt-1 text-2xl">{channel.title}</h3>
                <p className="mt-1 text-sm text-muted">{channel.short}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Знак и шапки филиала тёмно-синие с золотом. Это фирменный цвет ЦППК, не
          тема этого сайта. Сами макеты собраны на странице{" "}
          <Link href="/oformlenie" className="text-good">
            Оформление
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
