import { CommunityChannelPage } from "@/components/community-channel";
import { channels } from "@/data/channels";

const channel = channels.find((item) => item.slug === "telegram")!;

export default function TelegramPage() {
  return <CommunityChannelPage channel={channel} />;
}
