import { PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  city,
  days,
  flow,
  order,
  prices,
  products,
  status,
} from "@/data/market";

const toneClass = {
  good: "bg-good-bg",
  warn: "bg-warn-bg",
  us: "bg-[#e8f2f7]",
  mute: "bg-[#f3f4f6]",
  bad: "bg-bad-bg",
};

export default function MarketPage() {
  return (
    <main>
      <PageHero
        num="01"
        kicker="Екатеринбург · 8 Марта, 158"
        title="Куда вкладывать"
        lead="Категория B — чужой объём. Свой кусок: погрузчик, ДОПОГ, договоры с фирмами. Пока на карте телефон 922, а на сайте 343 — рекламу не включать."
        extra={<Button href="/ploschadki">Как оформить каналы</Button>}
      />

      <Section>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-bad-bg p-5 text-center">
            <p className="text-sm font-bold text-muted">на Яндексе</p>
            <p className="font-serif text-5xl text-bad">922</p>
          </div>
          <div className="rounded-2xl bg-good-bg p-5 text-center">
            <p className="text-sm font-bold text-muted">нужен один</p>
            <p className="font-serif text-5xl text-good">343</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {status.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl p-5 ${item.tone === "bad" ? "bg-bad-bg" : "bg-warn-bg"}`}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-3 lg:grid-cols-3">
          <article className="rounded-3xl border border-line bg-white p-5 lg:col-span-1">
            <h2 className="font-serif text-2xl">Город</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {city.map((zone) => (
                <div key={zone.id} className={`rounded-2xl p-4 ${toneClass[zone.tone]}`}>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                    {zone.lab}
                  </p>
                  <h3 className="font-serif mt-1 text-xl">{zone.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    {zone.items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-line bg-white p-5">
            <h2 className="font-serif text-2xl">Что продавать</h2>
            <div className="mt-3 space-y-2">
              <div className="rounded-2xl bg-bad-bg p-4">
                <p className="text-[11px] font-bold uppercase text-muted">не ваше</p>
                <h3 className="font-serif text-2xl">Категория B</h3>
                <ul className="mt-2 text-sm">
                  {products.notOurs.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-good-bg p-4">
                <p className="text-[11px] font-bold uppercase text-muted">ваш кусок</p>
                <h3 className="font-serif text-2xl">Техника и ДОПОГ</h3>
                <ul className="mt-2 text-sm">
                  {products.ours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-line bg-white p-5">
            <h2 className="font-serif text-2xl">Порядок</h2>
            <div className="mt-3 space-y-2">
              {order.map((row) => (
                <div key={row.n} className="flex items-center gap-2">
                  <span className="font-serif w-6 text-xl text-muted">{row.n}</span>
                  <div className="h-10 flex-1 overflow-hidden rounded-xl bg-[#eef0f3]">
                    <div
                      className={`flex h-full items-center px-3 text-sm font-bold ${row.n === 5 ? "bg-[#ececec] text-muted" : "bg-good-bg"}`}
                      style={{ width: row.w }}
                    >
                      {row.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {prices.map((row) => (
                <div key={row.label} className="flex items-center gap-2 text-sm font-bold">
                  <span className="w-24 shrink-0">{row.kind}</span>
                  <span
                    className={`rounded-lg px-2 py-1 ${row.us ? "bg-good-bg" : "bg-[#eee]"}`}
                    style={{ width: row.w }}
                  >
                    {row.label}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <div className="grid gap-2 md:grid-cols-5">
          {flow.map((step) => (
            <article key={step.n} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-serif text-3xl text-good">{step.n}</p>
              <h3 className="mt-1 text-lg font-bold">{step.t}</h3>
              <p className="mt-1 text-sm text-muted">{step.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-3">
          {days.map((block) => (
            <article key={block.t} className="rounded-2xl border border-line bg-white p-4">
              <h3 className="font-serif text-xl">{block.t}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {block.chips.map((chip) => (
                  <span key={chip} className="rounded-full bg-[#eef2f4] px-3 py-1 text-sm font-bold">
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <p className="rounded-2xl bg-bad-bg p-4">
            <b>Сначала выровнять.</b> Пока на карте 922, а на сайте 343 — реклама
            приводит не к вам.
          </p>
          <p className="rounded-2xl bg-good-bg p-4">
            <b>Потом продавать.</b> «Экзамен в Пышме» и «учёба там, где экзамен
            ДОПОГ». Не снижать цену до 3 000.
          </p>
        </div>
      </Section>
    </main>
  );
}
