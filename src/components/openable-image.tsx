"use client";

import { publicAsset } from "@/lib/asset";
import { cn } from "@/lib/cn";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

export function OpenableImage({
  src,
  alt,
  className,
  fill = false,
  hint = true,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  hint?: boolean;
}) {
  const href = publicAsset(src);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative cursor-zoom-in",
          fill ? "grid h-full w-full place-items-center" : "block w-full",
        )}
        aria-label={`Открыть изображение: ${alt}`}
      >
        <img
          src={href}
          alt={alt}
          className={cn(className, "object-contain")}
        />
        {hint ? (
          <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-[#111]/75 px-2 py-1 text-[10px] font-medium tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Открыть
          </span>
        ) : null}
      </button>
      {open && mounted
        ? createPortal(
            <Lightbox
              href={href}
              alt={alt}
              titleId={titleId}
              onClose={() => setOpen(false)}
            />,
            document.body,
          )
        : null}
    </>
  );
}

function Lightbox({
  href,
  alt,
  titleId,
  onClose,
}: {
  href: string;
  alt: string;
  titleId: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col bg-[#111]/92"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="sr-only">
        {alt}
      </p>
      <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-white">
        <p className="min-w-0 truncate">{alt}</p>
        <div
          className="flex shrink-0 items-center gap-4"
          onClick={(event) => event.stopPropagation()}
        >
          <a href={href} target="_blank" rel="noreferrer" className="underline">
            Открыть файл
          </a>
          <button type="button" onClick={onClose} className="underline">
            Закрыть
          </button>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-3 sm:p-6">
        <img
          src={href}
          alt={alt}
          className="h-auto max-h-[calc(100vh-5.5rem)] w-auto max-w-[min(1120px,96vw)] object-contain"
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    </div>
  );
}
