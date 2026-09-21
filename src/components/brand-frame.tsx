import { OpenableImage } from "@/components/openable-image";

const ratioClass = {
  auto: "",
  square: "aspect-square",
  banner: "",
  photo: "",
};

export function BrandFrame({
  src,
  alt,
  caption,
  className = "",
  ratio = "auto",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  ratio?: keyof typeof ratioClass;
}) {
  const isTile = ratio === "square";

  return (
    <figure
      className={`overflow-hidden rounded-3xl border border-line bg-white ${className}`}
    >
      {isTile ? (
        <div className="relative aspect-square bg-[#eef0f3]">
          <div className="absolute inset-0 p-4">
            <OpenableImage
              src={src}
              alt={alt}
              fill
              className="h-full w-full"
            />
          </div>
        </div>
      ) : (
        <div className={`bg-[#eef0f3] ${ratioClass[ratio]}`}>
          <OpenableImage src={src} alt={alt} className="h-auto w-full" />
        </div>
      )}
      <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
        {caption ? `${caption} ` : null}
        Нажмите, чтобы открыть целиком.
      </figcaption>
    </figure>
  );
}

export function ChannelCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-[#0c1b33]">
      <OpenableImage src={src} alt={alt} className="h-auto w-full" />
    </div>
  );
}
