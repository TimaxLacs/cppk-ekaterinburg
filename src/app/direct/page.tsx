import { BrandFrame } from "@/components/brand-frame";
import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { channels, directAds, searchQueries, searchResult } from "@/data/channels";

const channel = channels.find((item) => item.slug === "direct")!;

export default function DirectPage() {
  return (
    <main>
      <PageHero
        num={channel.num}
        kicker={channel.short}
        title="Яндекс Директ"
        lead={channel.role}
      />
      <ChannelSubnav />
      <Section>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <BrandFrame
            src={channel.cover}
            alt="Макет для объявления"
            caption="Превью посадочной. Пока Яндекс ведёт на 922, кампанию не включать."
          />
          <p className="rounded-3xl bg-bad-bg p-6 text-sm leading-6">
            Не включать, пока на Яндексе телефон 922, а на сайте 343. Закупки у
            ФГАОУ идут через 223-ФЗ, это не повод писать «госучреждение, сдадим с
            первого раза».
          </p>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="объявления" title="Четыре текста, узкие запросы" />
        <div className="grid gap-4 lg:grid-cols-2">
          {directAds.map((ad) => (
            <article key={ad.id} className="rounded-3xl border border-line bg-white p-6">
              <Badge>объявление</Badge>
              <p className="mt-3 text-xl text-[#1a0dab]">{ad.header}</p>
              <p className="mt-1 text-sm text-[#006621]">{ad.extra}</p>
              <p className="mt-2 text-sm">{ad.text}</p>
              <div className="mt-3">
                <CopyField label="Заголовок" value={`${ad.header}\n${ad.extra}\n${ad.text}`} />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-white p-5">
            <p className="text-[11px] font-bold uppercase text-good">запросы</p>
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
      </Section>
    </main>
  );
}
