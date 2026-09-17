import { publicAsset } from "@/lib/asset";

export function BrandFrame({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-line bg-white ${className}`}>
      <img src={publicAsset(src)} alt={alt} className="h-full w-full object-cover" />
      {caption ? (
        <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function AvatarMark({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={publicAsset(src)}
      alt={alt}
      className="h-16 w-16 rounded-full border border-line object-cover"
    />
  );
}
