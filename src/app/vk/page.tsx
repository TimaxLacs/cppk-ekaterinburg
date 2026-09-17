import { CommunityChannelPage } from "@/components/community-channel";
import { channels } from "@/data/channels";

const channel = channels.find((item) => item.slug === "vk")!;

export default function VkPage() {
  return <CommunityChannelPage channel={channel} />;
}
