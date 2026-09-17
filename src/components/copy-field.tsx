"use client";

import { useState } from "react";

export function CopyField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-good">{label}</p>
        <button
          type="button"
          onClick={onCopy}
          className="text-xs text-muted hover:text-good"
        >
          {copied ? "скопировано" : "копировать"}
        </button>
      </div>
      <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-6 text-ink">
        {value}
      </pre>
    </div>
  );
}
