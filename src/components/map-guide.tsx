import { ChannelSubnav } from "@/components/channel-subnav";
import { CopyField } from "@/components/copy-field";
import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { mapEditGuides } from "@/data/maps";
import { notFound } from "next/navigation";

export function MapGuidePage({ id }: { id: string }) {
  const guide = mapEditGuides.find((item) => item.id === id);
  if (!guide) notFound();

  return (
    <main>
      <PageHero
        num="03"
        kicker="карты"
        title={guide.name}
        lead="Две точки. Один телефон 343. Часы автодрома пустые. Имя: Межрегиональный ЦППК."
      />
      <ChannelSubnav />
      <Section>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="text-good" href={guide.cabinetUrl} target="_blank" rel="noreferrer">
            Кабинет владельца
          </a>
          <a className="text-good" href={guide.mapsUrl} target="_blank" rel="noreferrer">
            Карта
          </a>
          <a className="text-good" href={guide.helpUrl} target="_blank" rel="noreferrer">
            Справка площадки
          </a>
          {guide.live.office ? (
            <a className="text-good" href={guide.live.office} target="_blank" rel="noreferrer">
              Живая карточка кабинета
            </a>
          ) : null}
          {guide.live.autodrome ? (
            <a className="text-good" href={guide.live.autodrome} target="_blank" rel="noreferrer">
              Живая карточка автодрома
            </a>
          ) : null}
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="найти" title="Как найти карточку" />
        <ol className="space-y-2">
          {guide.find.map((item, index) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionTitle eyebrow="доступ" title="Как забрать карточку" />
        <ol className="space-y-2">
          {guide.claim.map((item, index) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionTitle eyebrow="правка" title="Что изменить после доступа" />
        <ol className="space-y-2">
          {guide.edit.map((item, index) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <span className="mr-2 font-bold text-good">{index + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionTitle eyebrow="поля" title="Кабинет и автодром" />
        <div className="overflow-x-auto rounded-3xl border border-line bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#eef3f1] text-[11px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Поле</th>
                <th className="px-4 py-3">Кабинет</th>
                <th className="px-4 py-3">Автодром</th>
              </tr>
            </thead>
            <tbody>
              {guide.fields.map((row) => (
                <tr key={row.field} className="border-t border-line align-top">
                  <td className="px-4 py-3 font-medium">{row.field}</td>
                  <td className="px-4 py-3">{row.cabinet}</td>
                  <td className="px-4 py-3">{row.autodrome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="без доступа" title="Пока карточку не отдали" />
        <div className="grid gap-2">
          {guide.noAccess.map((item) => (
            <p key={item} className="rounded-2xl bg-warn-bg px-4 py-3 text-sm">
              {item}
            </p>
          ))}
        </div>
        <div className="mt-4">
          <CopyField label="Имя на карточке" value="Межрегиональный ЦППК" />
        </div>
        <Badge tone="muted">сверка 17.09.2026</Badge>
      </Section>
    </main>
  );
}
