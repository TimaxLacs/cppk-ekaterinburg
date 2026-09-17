import { channels } from "@/data/channels";

export const chapters = [
  { href: "/rynok", num: "01", title: "Рынок", short: "Куда вкладывать" },
  { href: "/ploschadki", num: "02", title: "Каналы", short: "Тексты и оформление" },
  { href: "/oformlenie", num: "03", title: "Оформление", short: "Лого, шапки, фото" },
] as const;

export const channelNav = channels.map((channel) => ({
  label: channel.title,
  href: channel.href,
}));

export const goals = chapters;
