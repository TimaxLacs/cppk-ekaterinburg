import { chapters, talkNotes } from "@/data/nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-16">
        <Badge>документ для разговора</Badge>
        <h1 className="font-serif mt-6 max-w-4xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
          ЦППК в Екатеринбурге:
          <br />
          рынок и цифровые площадки
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">
          Филиал образовательного центра Росавтодора на улице 8 Марта и автодром
          в Верхней Пышме. Две главы, которые можно открыть с телефона и
          проговаривать по карточкам: сначала с кем нас сравнивают, затем как
          выглядеть одинаково на картах, во ВКонтакте, в мессенджерах и на своём
          сайте.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/rynok">Начать с рынка</Button>
          <Button href="/ploschadki" variant="ghost">
            Сразу к площадкам
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 pb-12 sm:px-6 md:grid-cols-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.href}
            href={chapter.href}
            className="group rounded-3xl border border-white/10 bg-white/4 p-6 transition-colors hover:border-gold/40 hover:bg-white/7"
          >
            <p className="text-gold">{chapter.num}</p>
            <h2 className="font-serif mt-3 text-3xl group-hover:text-gold">
              {chapter.title}
            </h2>
            <p className="mt-2 text-sm text-cream/60">{chapter.short}</p>
          </Link>
        ))}
      </section>

      <section className="border-y border-white/8 bg-navy-2/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
            как пользоваться
          </p>
          <h2 className="font-serif mt-3 text-4xl">Для разговора, не для слайда</h2>
          <p className="mt-4 max-w-2xl leading-7 text-cream/70">
            Если собеседник не из маркетинга, достаточно трёх остановок: кто мы
            на рынке, почему карты важнее рекламы, что должно быть на сайте.
            Календарный план на 90 дней здесь специально не стоит — он быстро
            спорит с реальной учебной частью.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {talkNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-3xl border border-white/10 bg-navy p-5"
              >
                <h3 className="font-medium">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
