import { CommunityChannelPage } from "@/components/community-channel";
import { channels } from "@/data/channels";

const channel = channels.find((item) => item.slug === "max")!;

export default function MaxPage() {
  return <CommunityChannelPage channel={channel} />;
}
