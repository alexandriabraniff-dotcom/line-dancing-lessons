import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F7EAD8] border-t border-[#6B4841]/15">
      {/* Designer credit */}
      <div className="bg-[#1E0F0B] text-[#F7EAD8]/50 text-center py-2" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
        WEBSITE BY{" "}
        <a
          href="mailto:hello@alexandriabraniff.com"
          className="hover:text-[#C483C8] transition-colors"
        >
          ALEXANDRIA BRANIFF
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="rye text-xl text-[#6B4841] leading-none">Wildflower</p>
          <p className="brygada font-bold italic text-[#C483C8] text-base mt-0.5">Line Dancing</p>
          <p className="text-[#6B4841]/50 text-sm mt-3 leading-relaxed">
            It&apos;s more than a dance,<br />it&apos;s a good time.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="section-label mb-2">Navigation</p>
          {["/", "/about", "/services", "/contact"].map((href) => {
            const label = href === "/" ? "Home" : href.replace("/", "").charAt(0).toUpperCase() + href.slice(2);
            return (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#6B4841]/70 hover:text-[#6B4841] transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="md:text-right">
          <Link
            href="/contact"
            className="rye text-xs bg-[#6B4841] text-[#F7EAD8] px-6 py-2.5 rounded-full tracking-widest hover:bg-[#C483C8] transition-colors inline-block mb-6"
          >
            Book Now
          </Link>
          <p className="text-xs text-[#6B4841]/40">
            &copy; {new Date().getFullYear()} Wildflower Line Dancing.<br />All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
