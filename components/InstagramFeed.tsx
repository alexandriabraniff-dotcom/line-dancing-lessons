import { getInstagramProfile, INSTAGRAM_USERNAME } from "@/lib/instagram";

const POST_COUNT = 6;
const PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-white drop-shadow"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const compact = (n: number) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);

/* Latest Instagram posts, pulled live from the public profile (refreshes hourly) */
export default async function InstagramFeed() {
  const profile = await getInstagramProfile();
  const posts = profile?.posts.slice(0, POST_COUNT) ?? [];

  return (
    <section className="border-t border-[#6B4841]/15 pt-[var(--section)]">
      {/* Profile info */}
      <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-6 px-[var(--gutter)] sm:flex-row sm:items-center sm:justify-between">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
        >
          {profile?.profilePic ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.profilePic}
              alt=""
              width={64}
              height={64}
              referrerPolicy="no-referrer"
              className="h-16 w-16 shrink-0 rounded-full border-2 border-[#D49C84] bg-white"
            />
          ) : (
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#6B4841] text-[#F7EAD8]">
              <InstagramIcon className="h-6 w-6" />
            </span>
          )}
          <div className="min-w-0">
            <p className="brygada mb-1 text-[length:var(--text-eyebrow)] font-bold uppercase tracking-[0.35em] text-[#D49C84]">
              Follow Along on Instagram
            </p>
            <p
              className="rye break-all leading-none text-[#6B4841] transition-colors group-hover:text-[#C483C8]"
              style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.5rem)" }}
            >
              @{INSTAGRAM_USERNAME}
            </p>
            {profile?.followers != null && (
              <p className="mt-2 text-[length:calc(var(--text-body)*0.85)] text-[#6B4841]/70">
                {compact(profile.followers)} followers
                {profile.postCount != null && (
                  <> &middot; {profile.postCount.toLocaleString("en")} posts</>
                )}
              </p>
            )}
          </div>
        </a>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="brygada inline-flex h-[45px] lg:h-11 shrink-0 items-center justify-center bg-[#6B4841] px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8] sm:self-auto"
        >
          Follow Us
        </a>
      </div>

      {/* Posts: full width, edge to edge. Each opens that post on Instagram. */}
      <div className="grid grid-cols-3 gap-[2px] md:grid-cols-6">
        {posts.map((post) => (
          <a
            key={post.shortcode}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              post.caption
                ? `Instagram post: ${post.caption.slice(0, 100)}`
                : "View post on Instagram"
            }
            className="group relative block aspect-square overflow-hidden bg-[#EDE0CC]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {post.isVideo && (
              <span className="absolute right-2 top-2">
                <PlayIcon />
              </span>
            )}
            {/* Hover overlay */}
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#1E0F0B]/75 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <InstagramIcon className="h-7 w-7 text-[#FE9EED]" />
              {post.caption && (
                <span className="hidden lg:block">
                  <span className="line-clamp-4 text-xs leading-relaxed text-[#F7EAD8]/85">
                    {post.caption}
                  </span>
                </span>
              )}
            </span>
          </a>
        ))}
        {/* Fills any empty spots (fewer than six posts, or the feed is unavailable) */}
        {[...Array(POST_COUNT - posts.length)].map((_, i) => (
          <a
            key={i}
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wildflower Line Dancing on Instagram"
            className="flex aspect-square items-center justify-center bg-[#EDE0CC] transition-opacity hover:opacity-90"
          >
            <InstagramIcon className="h-6 w-6 text-[#6B4841]/20" />
          </a>
        ))}
      </div>
    </section>
  );
}
