import { CopyField } from "@/components/copy-field";
import { Badge } from "@/components/ui/badge";
import type { PostType } from "@/data/posts";

export function PostExamples({ post }: { post: PostType }) {
  return (
    <article className="rounded-3xl border border-line bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{post.line}</Badge>
        <Badge tone="muted">{post.when}</Badge>
      </div>
      <h3 className="font-serif mt-3 text-2xl">{post.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{post.purpose}</p>
      <p className="mt-2 text-sm">
        <b>Фото:</b> {post.photo}
      </p>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-good">
            ВКонтакте · {post.vk.format}
          </p>
          <CopyField label={post.vk.title ?? "Пост ВК"} value={post.vk.text} />
        </div>
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-good">
            Telegram · {post.telegram.format}
          </p>
          <CopyField label="Сообщение Telegram" value={post.telegram.text} />
        </div>
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-good">
            MAX · {post.max.format}
          </p>
          <CopyField label="Сообщение MAX" value={post.max.text} />
        </div>
      </div>
    </article>
  );
}
