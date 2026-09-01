import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  avitoAd,
  chain,
  directAds,
  doNot,
  mapFill,
  messages,
  orderFix,
  platformNav,
  searchResult,
  siteBlocks,
  vkProfile,
} from "@/data/platforms";

export default function PlatformsPage() {
  return (
    <main>
      <PageHero
        num="02"
        kicker="поиск · сайт · карты · Авито · Директ · VK · MAX"
        title="Как это написать и как оформить"
        lead="Готовые формулировки. Дату группы подставляете свою. Рекламу не включать, пока телефон на карте и на сайте разный."
        extra={<Button href="/rynok">К рынку</Button>}
      />

      <nav className="sticky top-[57px] z-30 border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {platformNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-line bg-white px-3 py-1 text-xs hover:border-good"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Section id="poryadok">
        <SectionTitle eyebrow="порядок" title="Сначала цепочка, потом реклама" />
        <div className="grid gap-2 md:grid-cols-5">
          {chain.map((step) => (
            <article key={step.n} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-serif text-3xl text-good">{step.n}</p>
              <h3 className="mt-1 text-lg font-bold">{step.t}</h3>
              <p className="text-sm text-muted">{step.d}</p>
            </article>
          ))}
        </div>
        <ol className="mt-6 space-y-2">
          {orderFix.map((item, i) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="poisk">
        <SectionTitle
          eyebrow="поиск"
          title="Так должен выглядеть Google и Яндекс"
          body="Человек пишет запрос с городом. Должна открыться страница филиала, не Петербург."
        />
        <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <p className="text-sm text-muted">Запрос: {searchResult.query}</p>
          <p className="mt-4 text-xl text-[#1a0dab]">{searchResult.title}</p>
          <p className="text-sm text-[#006621]">{searchResult.url}</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-6">{searchResult.snippet}</p>
          <div className="mt-4 space-y-1 text-sm text-[#1a0dab]">
            {searchResult.also.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <p className="mt-4 rounded-2xl bg-bad-bg p-4 text-sm">{searchResult.now}</p>
      </Section>

      <Section id="sajt">
        <SectionTitle
          eyebrow="сайт"
          title="Три блока на странице филиала"
          body="Не отдельный «сайт Екатеринбурга» с нуля. Блок на cppkspb.ru: город в первом экране, дата группы, один телефон."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {siteBlocks.map((block) => (
            <article key={block.name} className="rounded-3xl border border-line bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-good">
                {block.name}
              </p>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-[15px] leading-7">
                {block.text}
              </pre>
            </article>
          ))}
        </div>
      </Section>

      <Section id="karty">
        <SectionTitle
          eyebrow="карты"
          title="Что вписать в Яндекс и 2ГИС"
          body="Две карточки. Один телефон. Имя одно."
        />
        <div className="rounded-3xl border border-line bg-white p-6">
          <p className="text-sm text-muted">Название везде</p>
          <h3 className="font-serif text-3xl">{mapFill.name}</h3>
          <p className="text-muted">{mapFill.subtitle}</p>
          <p className="mt-3 rounded-xl bg-bad-bg px-4 py-3 text-sm">{mapFill.notName}</p>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-line bg-white p-6">
            <h3 className="font-serif text-2xl">{mapFill.office.title}</h3>
            <p className="mt-1 text-sm text-muted">{mapFill.office.address}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-good">{mapFill.office.category}</p>
            <p className="mt-4 text-sm leading-6">{mapFill.office.description}</p>
            <p className="mt-3 text-sm">
              <b>Часы:</b> {mapFill.office.hours}
            </p>
            <p className="mt-2 text-sm text-muted">{mapFill.office.photos}</p>
          </article>
          <article className="rounded-3xl border border-line bg-white p-6">
            <h3 className="font-serif text-2xl">{mapFill.track.title}</h3>
            <p className="mt-1 text-sm text-muted">{mapFill.track.address}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-good">{mapFill.track.category}</p>
            <p className="mt-4 text-sm leading-6">{mapFill.track.description}</p>
            <p className="mt-2 text-sm text-muted">{mapFill.track.photos}</p>
          </article>
        </div>
      </Section>

      <Section id="avito">
        <SectionTitle eyebrow="авито" title="Объявление рядом с вакансией" />
        <article className="rounded-3xl border border-line bg-white p-6">
          <p className="text-xs text-muted">{avitoAd.category}</p>
          <h3 className="font-serif mt-1 text-3xl">{avitoAd.title}</h3>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-[15px] leading-7">
            {avitoAd.text}
          </pre>
          <p className="mt-4 rounded-xl bg-warn-bg px-4 py-3 text-sm">{avitoAd.place}</p>
        </article>
      </Section>

      <Section id="direct">
        <SectionTitle eyebrow="яндекс директ" title="Два объявления, узкие запросы" />
        <p className="mb-4 rounded-2xl bg-bad-bg p-4 text-sm">{directAds.stop}</p>
        <div className="grid gap-4 lg:grid-cols-2">
          {directAds.ads.map((ad) => (
            <article key={ad.h} className="rounded-3xl border border-line bg-white p-6">
              <Badge>объявление</Badge>
              <p className="mt-3 text-xl text-[#1a0dab]">{ad.h}</p>
              <p className="mt-1 text-sm">{ad.t}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-white p-5">
            <p className="text-[11px] font-bold uppercase text-good">запросы</p>
            <ul className="mt-2 space-y-1 text-sm">
              {directAds.queries.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-line bg-white p-5">
            <p className="text-[11px] font-bold uppercase text-bad">минус-слова</p>
            <ul className="mt-2 space-y-1 text-sm">
              {directAds.minus.map((q) => (
                <li key={q}>− {q}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section id="sotsseti">
        <SectionTitle eyebrow="vk и max" title="Шапка и готовые ответы" />
        <div className="rounded-3xl border border-line bg-white p-6">
          <p className="text-[11px] font-bold uppercase text-good">сообщество</p>
          <h3 className="font-serif mt-1 text-3xl">{vkProfile.name}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7">{vkProfile.description}</p>
          <p className="mt-3 text-sm">
            Кнопки: {vkProfile.buttons.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-muted">Закреп: {vkProfile.pin}</p>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {messages.map((item) => (
            <article key={item.where} className="rounded-3xl border border-line bg-white p-5">
              <Badge tone="muted">{item.where}</Badge>
              <pre className="mt-3 whitespace-pre-wrap font-sans text-[15px] leading-7">
                {item.text}
              </pre>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-2">
          {doNot.map((item) => (
            <p key={item} className="rounded-2xl bg-bad-bg px-4 py-3 text-sm">
              {item}
            </p>
          ))}
        </div>
      </Section>
    </main>
  );
}
