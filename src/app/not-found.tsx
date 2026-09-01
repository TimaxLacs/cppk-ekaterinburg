import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="text-good">404</p>
      <h1 className="font-serif mt-3 text-4xl">Этой страницы нет</h1>
      <p className="mt-3 text-muted">Откройте рынок или каналы.</p>
      <Link href="/" className="mt-6 inline-block text-good">
        На старт
      </Link>
    </main>
  );
}
