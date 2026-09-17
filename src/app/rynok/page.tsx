import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  audiences,
  cityZones,
  competitorsTable,
  corrections,
  days,
  flow,
  marketVerifiedAt,
  objections,
  order,
  prices,
  programsTable,
  productNotes,
  products,
  spendHints,
  sources,
  statusCards,
} from "@/data/market";

const statusTone = ["bad", "warn", "warn", "good", "bad", "warn"] as const;

export default function MarketPage() {
  return (
    <main>
      <PageHero
        num="01"
        kicker="Екатеринбург · 8 Марта, 158"
        title="Куда вкладывать"
        lead="Категория B - чужой объём. Свой кусок: ДОПОГ 4 500 ₽, БДД, контролёр, диспетчер, ОТБ. Погрузчик без цены в прайсе филиала. Пока на Яндексе 922, рекламу не включать."
        extra={<Button href="/ploschadki">Как оформить каналы</Button>}
      />

      <Section>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-bad-bg p-5 text-center">
            <p className="text-sm font-bold text-muted">на Яндексе</p>
            <p className="font-serif text-5xl text-bad">922</p>
            <p className="mt-2 text-sm">188-29-30 · «Учебный комбинат Допог»</p>
          </div>
          <div className="rounded-2xl bg-good-bg p-5 text-center">
            <p className="text-sm font-bold text-muted">нужен один</p>
            <p className="font-serif text-5xl text-good">343</p>
            <p className="mt-2 text-sm">257-57-92 · Межрегиональный ЦППК</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {statusCards.map((item, index) => (
            <article
              key={item.id}
              className={`rounded-2xl p-5 ${statusTone[index] === "bad" ? "bg-bad-bg" : statusTone[index] === "good" ? "bg-good-bg" : "bg-warn-bg"}`}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="город"
          title="Две свои точки и чужой рынок вокруг"
          body="Кабинет и экзамен на 8 Марта. Площадка в Пышме. Автошколы B в этом городе не конкуренты по продукту, но они занимают поиск «автошкола»."
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {cityZones.map((zone) => (
            <article key={zone.id} className="rounded-2xl border border-line bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                {zone.name}
              </p>
              <p className="mt-2 text-sm leading-6">{zone.meaning}</p>
              <p className="mt-2 text-sm text-muted">{zone.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-line bg-white p-5">
            <h2 className="font-serif text-2xl">Что продавать</h2>
            <div className="mt-3 space-y-2">
              {products.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl p-4 ${item.offer ? "bg-good-bg" : "bg-bad-bg"}`}
                >
                  <p className="text-[11px] font-bold uppercase text-muted">
                    {item.offer ? "оффер филиала" : "не оффер"}
                  </p>
                  <h3 className="font-serif text-xl">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium">{item.price}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </div>
              ))}
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {productNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-line bg-white p-5">
            <h2 className="font-serif text-2xl">Порядок работ</h2>
            <div className="mt-3 space-y-2">
              {order.map((row) => (
                <div key={row.num} className="rounded-2xl bg-[#eef3f1] p-4">
                  <p className="font-serif text-xl text-good">{row.num}</p>
                  <h3 className="mt-1 font-bold">{row.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{row.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="цены"
          title="Честное сравнение"
          body="Где филиал дороже, так и написано. Где цены нет, так и написано. Петербургские 5 000 и 11 000 сюда не переносим."
        />
        <div className="overflow-x-auto rounded-3xl border border-line bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#eef3f1] text-[11px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Программа</th>
                <th className="px-4 py-3">ЦППК Екб</th>
                <th className="px-4 py-3">Рядом на рынке</th>
                <th className="px-4 py-3">Как говорить</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row) => (
                <tr key={row.id} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{row.program}</td>
                  <td className="px-4 py-3">{row.cppk}</td>
                  <td className="px-4 py-3 text-muted">{row.market}</td>
                  <td className="px-4 py-3 text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="цепочка" title="Как человек доходит до договора" />
        <div className="grid gap-2 md:grid-cols-5">
          {flow.map((step) => (
            <article key={step.step} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-serif text-3xl text-good">{step.step}</p>
              <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-7">
          {days.map((block) => (
            <article key={block.day} className="rounded-2xl border border-line bg-white p-4">
              <p className="text-[11px] font-bold uppercase text-good">{block.day}</p>
              <p className="mt-2 text-sm font-medium">{block.line}</p>
              <p className="mt-2 text-sm text-muted">{block.item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="прайс филиала" title="Что есть в PDF 2024" />
        <div className="overflow-x-auto rounded-3xl border border-line bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#eef3f1] text-[11px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Программа</th>
                <th className="px-4 py-3">Объём</th>
                <th className="px-4 py-3">Цена</th>
                <th className="px-4 py-3">Где</th>
                <th className="px-4 py-3">В рекламу</th>
              </tr>
            </thead>
            <tbody>
              {programsTable.map((row) => (
                <tr key={row.program} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{row.program}</td>
                  <td className="px-4 py-3">{row.volume}</td>
                  <td className="px-4 py-3">{row.price}</td>
                  <td className="px-4 py-3 text-muted">{row.where}</td>
                  <td className="px-4 py-3">{row.public}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="конкуренты" title="Срез 17.09.2026" />
        <div className="grid gap-3 md:grid-cols-2">
          {competitorsTable.map((row) => (
            <article key={row.name} className="rounded-2xl border border-line bg-white p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-2xl">{row.name}</h3>
                <Badge tone="muted">{row.field}</Badge>
              </div>
              <p className="mt-2 text-sm">{row.offer}</p>
              <p className="mt-1 text-sm text-muted">{row.place}</p>
              <p className="mt-2 text-sm">{row.vs}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="аудитории" title="Кому писать, кому нет" />
        <div className="grid gap-3 md:grid-cols-2">
          {audiences.map((item) => (
            <article key={item.id} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6">{item.need}</p>
              <p className="mt-2 text-sm text-muted">{item.channel}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-3">
          {objections.map((item) => (
            <article key={item.q} className="rounded-2xl bg-[#eef3f1] p-5">
              <p className="font-medium">{item.q}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.a}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="сверка"
          title="Что на живом сайте было неточно"
          body={`Проверено ${marketVerifiedAt}. Старые формулировки не копировать в шапки.`}
        />
        <div className="grid gap-3">
          {corrections.map((item) => (
            <article key={item.id} className="grid gap-2 rounded-2xl border border-line bg-white p-5 md:grid-cols-2">
              <div className="rounded-xl bg-bad-bg p-3">
                <p className="text-[11px] font-bold uppercase text-muted">было</p>
                <p className="mt-1 text-sm">{item.was}</p>
              </div>
              <div className="rounded-xl bg-good-bg p-3">
                <p className="text-[11px] font-bold uppercase text-muted">стало</p>
                <p className="mt-1 text-sm">{item.now}</p>
              </div>
              <p className="text-sm text-muted md:col-span-2">{item.where}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="бюджет" title="Куда не класть деньги рано" />
        <div className="grid gap-3 md:grid-cols-3">
          {spendHints.map((item) => (
            <article key={item.channel} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-serif text-2xl">{item.channel}</h3>
              <p className="mt-2 text-sm">{item.spend}</p>
              <p className="mt-2 text-sm text-muted">{item.why}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-2">
          {sources.map((item) => (
            <p key={item.id} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <b>{item.title}.</b> {item.date}. {item.use}
            </p>
          ))}
        </div>
      </Section>
    </main>
  );
}
