import { site } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.6c-1.4.1-2.6-.3-3.9-1.1v5.9c0 3.5-2.7 5.8-5.9 5.8-3.4 0-5.9-2.6-5.9-5.8 0-3.6 3.2-6.2 6.9-5.6v2.8c-1.8-.4-3.9.7-3.9 2.8 0 1.6 1.3 2.9 2.9 2.9 1.7 0 2.9-1.2 2.9-3.2V3h3z" />
    </svg>
  ),
};

/* Round social icon buttons. `tone` picks colours for light or dark backgrounds. */
export default function SocialLinks({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const style =
    tone === "dark"
      ? "border-[#F7EAD8]/25 text-[#F7EAD8] hover:border-[#C483C8] hover:bg-[#C483C8] hover:text-[#1E0F0B]"
      : "border-[#6B4841]/25 text-[#6B4841] hover:border-[#6B4841] hover:bg-[#6B4841] hover:text-[#F7EAD8]";

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {site.socials.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Wildflower Line Dancing on ${name}`}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8] ${style}`}
          >
            {icons[name]}
          </a>
        </li>
      ))}
    </ul>
  );
}
