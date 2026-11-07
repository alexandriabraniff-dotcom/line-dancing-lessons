import Image from "next/image";
import { coverImage, type Competition } from "@/lib/competitions";

/* 4:5 cover photo: a local file through next/image, or a Cloudinary crop.
   Fills its (relatively positioned, aspect-ratio) parent. */
export default function CompetitionCover({
  competition,
  sizes,
  preload = false,
  className = "",
}: {
  competition: Competition;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  const cover = coverImage(competition, 800, 1000);
  if (!cover) return <div aria-hidden className="image-placeholder absolute inset-0" />;

  if (cover.local) {
    return (
      <Image src={cover.src} alt={cover.alt} fill preload={preload} sizes={sizes} className={`object-cover ${className}`} />
    );
  }

  const srcSet = [400, 600, 800, 1200]
    .map((w) => `${coverImage(competition, w, Math.round(w * 1.25))!.src} ${w}w`)
    .join(", ");
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cover.src}
      srcSet={srcSet}
      sizes={sizes}
      alt={cover.alt}
      width={800}
      height={1000}
      loading={preload ? "eager" : "lazy"}
      fetchPriority={preload ? "high" : undefined}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
