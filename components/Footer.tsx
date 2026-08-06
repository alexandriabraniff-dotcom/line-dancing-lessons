import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D49C84]/40 bg-[#F7EAD8] mt-16">
      {/* Designer credit banner */}
      <div className="bg-[#6B4841] text-[#F7EAD8] text-center text-xs py-2 tracking-widest">
        Website designed by{" "}
        <a
          href="mailto:hello@alexandriabraniff.com"
          className="underline hover:text-[#C483C8] transition-colors"
        >
          Alexandria Braniff
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="rye text-lg text-[#6B4841]">Wildflower</p>
          <p className="brygada font-bold italic text-[#C483C8] text-base">Line Dancing</p>
          <p className="text-[#D49C84] text-sm mt-1">
            It&apos;s more than a dance, it&apos;s a good time.
          </p>
        </div>

        <nav className="flex gap-6 flex-wrap justify-center">
          {["/", "/about", "/services", "/contact"].map((href) => {
            const label = href === "/" ? "Home" : href.replace("/", "").charAt(0).toUpperCase() + href.slice(2);
            return (
              <Link
                key={href}
                href={href}
                className="rye text-xs text-[#6B4841] hover:text-[#C483C8] tracking-widest transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <p className="text-xs text-[#D49C84] text-center">
          &copy; {new Date().getFullYear()} Wildflower Line Dancing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
