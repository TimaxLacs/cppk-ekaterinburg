import { ChannelCard } from "@/components/channel-card";
import { ChannelSubnav } from "@/components/channel-subnav";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { channels, chain, doNot, orderFix } from "@/data/channels";

export default function PlatformsPage() {
  return (
    <main>
      <PageHero
        num="02"
        kicker="поиск · сайт · карты · Авито · Директ · VK · Telegram · MAX"
        title="Как это написать и как оформить"
        lead="Отдельная страница на каждый канал. Дату группы подставляете свою. Рекламу не включать, пока телефон на Яндексе и на сайте разный."
        extra={<Button href="/rynok">К рынку</Button>}
      />
      <ChannelSubnav />

      <Section id="poryadok">
        <SectionTitle eyebrow="порядок" title="Сначала цепочка, потом реклама" />
        <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-6">
          {chain.map((step, index) => (
            <article key={step} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-serif text-3xl text-good">{index + 1}</p>
              <p className="mt-2 text-sm leading-6">{step}</p>
            </article>
          ))}
        </div>
        <ol className="mt-6 space-y-2">
          {orderFix.map((item) => (
            <li key={item.num} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{item.num}.</span>
              <b>{item.title}.</b> {item.text}
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="каналы"
          title="Восемь страниц"
          body="Сообщества содержат типы постов и готовые примеры. Карты содержат поля и шаги владельца."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <ChannelCard key={channel.slug} channel={channel} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="нельзя" title="Общий стоп-лист" />
        <div className="grid gap-2">
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
