import { publicAsset } from "@/lib/asset";

export function HtmlHandbook() {
  return (
    <iframe
      title="ЦППК Екатеринбург"
      src={publicAsset("/oformlenie.html")}
      className="fixed inset-0 h-dvh w-full border-0 bg-[#f7f3e8]"
    />
  );
}
