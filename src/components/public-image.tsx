import { publicAsset } from "@/lib/asset";
import Image, { type ImageProps } from "next/image";

type PublicImageProps = Omit<ImageProps, "src"> & { src: string };

export function PublicImage({ src, alt, ...props }: PublicImageProps) {
  return <Image src={publicAsset(src)} alt={alt} {...props} />;
}
