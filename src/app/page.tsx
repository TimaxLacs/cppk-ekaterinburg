import { Button } from "@/components/ui/button";
import { chapters } from "@/data/nav";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
          ЦППК Екатеринбург · учебный центр Росавтодора
        </p>
        <h1 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-6xl">
          Куда вкладывать продвижение
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Не электрички и не обычная автошкола. Офис: 8 Марта, 158. Автодром:
          Пышма, Петрова, 59А. Сначала страница в поиске и один телефон, потом
          реклама.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/rynok">Рынок</Button>
          <Button href="/ploschadki" variant="ghost">
            Каналы и тексты
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 pb-16 sm:px-6 md:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.href}
            href={chapter.href}
            className="rounded-3xl border border-line bg-white p-6 hover:border-good"
          >
            <p className="text-sm text-muted">{chapter.num}</p>
            <h2 className="font-serif mt-2 text-3xl">{chapter.title}</h2>
            <p className="mt-2 text-muted">{chapter.short}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
