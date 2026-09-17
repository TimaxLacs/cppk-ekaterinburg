import { BrandFrame } from "@/components/brand-frame";
import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { channels, siteBlocks } from "@/data/channels";

const channel = channels.find((item) => item.slug === "sajt")!;

export default function SiteChannelPage() {
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
            src="/brand/logo/variants/logo-ekb-cream.png"
            alt="Плашка филиала для сайта"
            ratio="square"
            caption="Светлая плашка для первого экрана страницы филиала."
          />
          <article className="rounded-3xl border border-line bg-white p-6">
            <p className="text-sm leading-6">{channel.audience}</p>
            <p className="mt-3 text-sm">
              <b>Цель:</b> {channel.goal}
            </p>
            <p className="mt-2 text-sm text-muted">
              Не отдельный сайт с нуля. Блок на cppkspb.ru. Поддомен ekb.cppkspb.ru
              мёртвый, людей туда не отправлять.
            </p>
          </article>
        </div>
      </Section>
      <Section>
        <SectionTitle
          eyebrow="блоки"
          title="Что должно быть на странице филиала"
          body="Город в первом экране, два адреса, один телефон, цены из PDF, дата группы после учебной части."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {siteBlocks.map((block) => (
            <article key={block.id} className="rounded-3xl border border-line bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-wide text-good">
                {block.title}
              </p>
              <CopyField label={block.title} value={block.text} />
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
