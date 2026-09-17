import { CopyField } from "@/components/copy-field";
import { Badge } from "@/components/ui/badge";
import { mapEditDocs, mapEditGuides } from "@/data/map-edit";

export function MapEditGuides() {
  return (
    <div className="grid gap-10">
      <Docs />
      {mapEditGuides.map((guide) => (
        <Guide key={guide.id} guide={guide} />
      ))}
    </div>
  );
}

function Docs() {
  return (
    <article className="rounded-3xl border border-gold/25 bg-gold/8 p-6">
      <p className="text-[11px] uppercase tracking-[0.16em] text-gold">что держать под рукой</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-cream/80">
        {mapEditDocs.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Guide({ guide }: { guide: (typeof mapEditGuides)[number] }) {
  return (
    <article id={`map-edit-${guide.id}`} className="scroll-mt-24 rounded-[2rem] border border-white/10 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{guide.name}</Badge>
        <Badge tone="muted">две карточки, не одна</Badge>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <ExtLink href={guide.cabinetUrl}>Кабинет владельца</ExtLink>
        <ExtLink href={guide.mapsUrl} ghost>
          Открыть карты
        </ExtLink>
        <ExtLink href={guide.helpUrl} ghost>
          Справка сервиса
        </ExtLink>
      </div>
      <StepList title="Как найти карточку" items={guide.find} />
      <StepList title="Как забрать права" items={guide.claim} numbered />
      <StepList title="Где нажать, чтобы поменять инфу" items={guide.edit} numbered />
      <Fields table={guide.fields} />
      <StepList title="Если доступа владельца ещё нет" items={guide.noAccess} />
    </article>
  );
}

function StepList({
  title,
  items,
  numbered = false,
}: {
  title: string;
  items: string[];
  numbered?: boolean;
}) {
  const List = numbered ? "ol" : "ul";
  return (
    <div className="mt-8">
      <h3 className="text-sm uppercase tracking-[0.16em] text-gold">{title}</h3>
      <List className="mt-3 space-y-2 pl-5 text-sm leading-6 text-cream/75">
        {items.map((item) => (
          <li key={item} className={numbered ? "list-decimal" : "list-disc"}>
            {item}
          </li>
        ))}
      </List>
    </div>
  );
}

function ExtLink({
  href,
  children,
  ghost = false,
}: {
  href: string;
  children: string;
  ghost?: boolean;
}) {
  const cls = ghost
    ? "rounded-full border border-white/15 px-4 py-2 text-sm text-cream/80"
    : "rounded-full bg-gold px-4 py-2 text-sm text-navy";
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  );
}

function Fields({ table }: { table: (typeof mapEditGuides)[number]["fields"] }) {
  return (
    <div className="mt-8">
      <h3 className="text-sm uppercase tracking-[0.16em] text-gold">Что вписать в каждое поле</h3>
      <div className="mt-3 grid gap-4">
        {table.map((row) => (
          <article key={row.field} className="rounded-3xl border border-white/8 bg-white/4 p-4">
            <p className="text-sm font-medium">{row.field}</p>
            <div className="mt-3 grid gap-3 lg:grid-cols-2">
              <CopyField label="Кабинет, 8 Марта" value={row.cabinet} />
              <CopyField label="Автодром, Петрова" value={row.autodrome} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
