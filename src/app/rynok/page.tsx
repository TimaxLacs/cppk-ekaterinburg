import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  branch,
  competitors,
  footprint,
  marketFacts,
  mix,
  niche,
  searchIntents,
  sources,
  winsAndLosses,
} from "@/data/market";

export default function MarketPage() {
  return (
    <main>
      <PageHero
        num="01"
        kicker="Екатеринбург · 8 Марта, 158"
        title="Филиал сравнивают с сетями автошкол, хотя работает шире"
        lead="Человек в поиске видит «автошкола у метро». Учредитель, ДОПОГ и автодром в Пышме сами себя не объясняют. Ниже — с кем нас ставят рядом, какие запросы вообще существуют и где цифровой след сейчас рвётся."
        extra={<Button href="/ploschadki">Глава про площадки</Button>}
      />

      <Section>
        <SectionTitle
          eyebrow="филиал"
          title="Что это за место, если говорить коротко"
          body="Юридическое имя длинное. В разговоре и на витрине достаточно короткого. Полное — в реквизитах."
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Fact label="Кто" value={branch.short} />
          <Fact label="Учредитель" value={branch.founder} />
          <Fact label="Обучение" value={`с ${branch.since} года`} />
          <Fact label="Учебный центр" value={branch.office} />
          <Fact label="Автодром" value={branch.autodrome} />
          <Fact label="Связь" value={`${branch.phones[0]} · ${branch.email}`} />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-cream/55">
          Полное имя: {branch.legal}. Часы: {branch.hours}. Сайт центра:{" "}
          {branch.site}.
        </p>
      </Section>

      <Section>
        <SectionTitle eyebrow="рынок" title="На кого рассчитан филиал" />
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
              аудитория
            </p>
            <p className="mt-2 text-sm leading-7 text-cream/75">{marketFacts.audience}</p>
          </article>
          <article className="rounded-3xl border border-white/10 p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gold">масштаб</p>
            <p className="mt-2 text-sm leading-7 text-cream/75">{marketFacts.size}</p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">цены B</p>
            <p className="mt-2 text-sm leading-7 text-cream/75">{marketFacts.prices}</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="конкурентное поле"
          title="Три разных соседа, не один рейтинг «лучших автошкол»"
          body="В городских подборках филиал часто стоит рядом с сетями категории B. Это только один сосед. ДОПОГ и организации смотрят на других."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {competitors.map((item) => (
            <article key={item.name} className="rounded-3xl border border-white/10 bg-navy-2 p-6">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-3 text-sm text-cream/55">{item.examples}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">
                чем берут
              </p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{item.whatTheyWin}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">
                где слабее
              </p>
              <p className="mt-2 text-sm leading-6 text-cream/75">{item.whatTheyLose}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <article className="rounded-3xl border border-gold/25 bg-gold/8 p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gold">ниша</p>
          <h2 className="font-serif mt-2 text-3xl">{niche.title}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-cream/80">{niche.text}</p>
        </article>
      </Section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {winsAndLosses.map((block) => (
            <article key={block.side} className="rounded-3xl border border-white/10 p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold">
                {block.side}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-cream/75">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="запросы"
          title="Что люди вбивают, когда ищут нас"
          body="Один филиал отвечает на четыре разных поиска. На сайте и в картах это должны быть разные кнопки, не одно объявление «обучаем всем»."
        />
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-white/4 text-[11px] uppercase tracking-[0.14em] text-cream/45">
              <tr>
                <th className="px-4 py-3">Запрос</th>
                <th className="px-4 py-3">Кто ищет</th>
                <th className="px-4 py-3">Что хочет увидеть</th>
              </tr>
            </thead>
            <tbody>
              {searchIntents.map((row) => (
                <tr key={row.query} className="border-t border-white/8 align-top">
                  <td className="px-4 py-3 font-medium text-gold">{row.query}</td>
                  <td className="px-4 py-3 text-cream/75">{row.who}</td>
                  <td className="px-4 py-3 text-cream/75">{row.expect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="цифровой след"
          title="Где филиал уже есть и где картина рассыпается"
          body="Это не аудит агентства. Это то, что видно из открытых карточек и сайта в 2026 году. Подробный ремонт — в главе про площадки."
        />
        <div className="grid gap-4">
          {footprint.map((item) => (
            <article
              key={item.place}
              className="grid gap-4 rounded-3xl border border-white/10 p-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
            >
              <h3 className="font-serif text-2xl">{item.place}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gold">сейчас</p>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{item.now}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-gold">риск</p>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{item.risk}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="пропорция"
          title="Если заведём ленту — не сводить её к набору"
          body="Касание «запишитесь» держим около пятой части. Иначе филиал читается как ещё одна платная автошкола с акции."
        />
        <div className="grid gap-3 md:grid-cols-5">
          {mix.map((item) => (
            <article key={item.label} className="rounded-3xl border border-white/10 p-5">
              <p className="font-serif text-4xl text-gold">{item.value}%</p>
              <p className="mt-2 text-sm text-cream/80">{item.label}</p>
              <p className="mt-2 text-xs leading-5 text-cream/50">{item.hint}</p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-gold" style={{ width: `${item.value}%` }} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="источники" title="Откуда цифры" />
        <ul className="grid gap-2">
          {sources.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm leading-6 text-cream/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-3xl border border-white/10 p-5">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{label}</p>
      <p className="mt-2 text-sm leading-6 text-cream/80">{value}</p>
    </article>
  );
}
