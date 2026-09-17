import { PageHero, Section, SectionTitle } from "@/components/page-hero";
import { PostExamples } from "@/components/post-examples";
import { Button } from "@/components/ui/button";
import { contentMix, posts } from "@/data/posts";

export default function PostsPage() {
  return (
    <main>
      <PageHero
        num="04"
        kicker="ВК · Telegram · MAX"
        title="Типы постов и примеры"
        lead="Один факт, три текста. Категорию B не набирать. Цену погрузчика не обещать. Телефон только 343."
        extra={<Button href="/vk">К сообществу ВК</Button>}
      />
      <Section>
        <SectionTitle eyebrow="микс" title="Из чего состоит стена" />
        <div className="grid gap-2 md:grid-cols-5">
          {contentMix.map((item) => (
            <article key={item.label} className="rounded-2xl border border-line bg-white p-4">
              <p className="font-serif text-3xl text-good">{item.value}%</p>
              <p className="mt-2 text-sm">{item.label}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostExamples key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </main>
  );
}
