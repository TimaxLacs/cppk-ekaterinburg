import { BrandFrame } from "@/components/brand-frame";
import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { avitoAd, channels } from "@/data/channels";

const channel = channels.find((item) => item.slug === "avito")!;

export default function AvitoPage() {
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
            src="/brand/channels/cover-cppk-ekb-16x9.png"
            alt="Макет 16 на 9 для Авито"
            caption="Первое фото объявления. Не ставить макет visual-system как «фото автодрома»."
          />
          <article className="rounded-3xl border border-line bg-white p-6">
            <p className="text-sm leading-6">{channel.audience}</p>
            <p className="mt-3 text-sm">
              <b>Цель:</b> {channel.goal}
            </p>
            <p className="mt-2 text-sm text-muted">{channel.cadence}</p>
          </article>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="объявление" title="Готовый текст" />
        <article className="rounded-3xl border border-line bg-white p-6">
          <p className="text-xs text-muted">{avitoAd.category}</p>
          <h3 className="font-serif mt-1 text-3xl">{avitoAd.title}</h3>
          <div className="mt-4">
            <CopyField label="Текст объявления" value={avitoAd.text} />
          </div>
          <p className="mt-4 rounded-xl bg-warn-bg px-4 py-3 text-sm">
            Ставить в обучение и курсы рядом с вакансиями «нужен ДОПОГ», не в
            общую «автошкола».
          </p>
        </article>
      </Section>
    </main>
  );
}
