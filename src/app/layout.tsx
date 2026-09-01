import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "ЦППК Екатеринбург: куда вкладывать",
  description:
    "Обзор рынка филиала Межрегионального ЦППК в Екатеринбурге и примеры текстов для поиска, сайта, карт, Авито и Директа.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
