import { BrandFrame } from "@/components/brand-frame";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { coverVariants, lockupVariants, photoKit, signetVariants } from "@/data/brand";
import { shootRules } from "@/data/oformlenie";

export default function BrandPage() {
  return (
    <main>
      <PageHero
        num="03"
        kicker="знак · плашки · шапки · фото"
        title="Оформление филиала"
        lead="Готовые файлы для аватаров, шапок и внутренних макетов. Макет визуальной системы не выдавать за фото входа на 8 Марта."
      />

      <Section>
        <BrandFrame
          src="/brand/cppk-visual-system.png"
          alt="Лист визуальной системы ЦППК"
          caption="Сводка знака и полей. Для согласования оформления, не для карточки на картах."
        />
      </Section>

      <Section>
        <SectionTitle eyebrow="знак" title="Круглый знак, варианты цвета" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signetVariants.map((item) => (
            <BrandFrame
              key={item.file}
              src={item.file}
              alt={item.title}
              ratio="square"
              caption={`${item.title}. ${item.use}.`}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="плашка" title="Имя филиала в кадре" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lockupVariants.map((item) => (
            <BrandFrame
              key={item.file}
              src={item.file}
              alt={item.title}
              ratio="square"
              caption={`${item.title}. ${item.use}.`}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="шапки" title="Обложки каналов" />
        <div className="grid gap-4">
          {coverVariants.map((item) => (
            <BrandFrame
              key={item.file}
              src={item.file}
              alt={item.title}
              caption={`${item.title}. ${item.use}.`}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="файлы"
          title="Что куда ставить"
          body="Живую съёмку кабинета и въезда Петрова ещё нужно снять. Пока в карточки карт не ставить макет visual-system как «фото фасада»."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {photoKit.map((item) => (
            <BrandFrame
              key={item.file}
              src={item.file}
              alt={item.use}
              ratio={
                item.size.includes("800") ||
                item.file.includes("signet") ||
                item.file.includes("avatar")
                  ? "square"
                  : "auto"
              }
              caption={`${item.caption}`}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="съёмка" title="Правила кадра" />
        <div className="grid gap-2">
          {shootRules.map((item) => (
            <p key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              {item}
            </p>
          ))}
        </div>
      </Section>
    </main>
  );
}
