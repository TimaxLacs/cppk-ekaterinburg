import { BrandFrame } from "@/components/brand-frame";
import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { channels, searchQueries, searchResult } from "@/data/channels";

const channel = channels.find((item) => item.slug === "poisk")!;

export default function SearchChannelPage() {
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
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <BrandFrame
            src={channel.cover}
            alt="Макет для сниппета"
            caption="Широкий макет можно ставить превью страницы филиала, не как фото кабинета."
          />
          <article className="rounded-3xl border border-line bg-white p-6">
            <p className="text-sm text-muted">{channel.audience}</p>
            <p className="mt-3 text-sm">
              <b>Цель:</b> {channel.goal}
            </p>
            <p className="mt-2 text-sm">
              <b>Ритм:</b> {channel.cadence}
            </p>
          </article>
        </div>
      </Section>
      <Section>
        <SectionTitle
          eyebrow="сниппет"
          title="Так должен выглядеть Google и Яндекс"
          body="Человек пишет запрос с городом. Должна открыться страница филиала, не Петербург и не расписание электричек."
        />
        <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <p className="text-sm text-muted">Запрос: ДОПОГ Екатеринбург</p>
          <p className="mt-4 text-xl text-[#1a0dab]">{searchResult.title}</p>
          <p className="text-sm text-[#006621]">{searchResult.url}</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-6">{searchResult.snippet}</p>
        </div>
        <p className="mt-4 rounded-2xl bg-warn-bg p-4 text-sm">{searchResult.forkliftLine}</p>
      </Section>
      <Section>
        <SectionTitle eyebrow="запросы" title="Что покупать и что минусовать" />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-white p-5">
            <p className="text-[11px] font-bold uppercase text-good">плюсовые</p>
            <ul className="mt-2 space-y-1 text-sm">
              {searchQueries.map((query) => (
                <li key={query}>{query}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-line bg-white p-5">
            <p className="text-[11px] font-bold uppercase text-bad">минус-слова</p>
            <ul className="mt-2 space-y-1 text-sm">
              {searchResult.minus.map((query) => (
                <li key={query}>− {query}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-4">
          <CopyField label="Готовый title" value={searchResult.title} />
        </div>
        <div className="mt-3">
          <CopyField label="Готовый description" value={searchResult.snippet} />
        </div>
      </Section>
    </main>
  );
}
