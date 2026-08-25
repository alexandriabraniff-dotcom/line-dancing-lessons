import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E0F0B] text-[#F7EAD8] relative">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C483C8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <div>
            <p className="rye text-2xl text-[#F7EAD8] leading-none tracking-wide">Wildflower</p>
            <p className="brygada font-bold italic text-[#C483C8] text-lg mt-1">Line Dancing</p>
            <p className="text-[#F7EAD8]/40 text-sm mt-5 leading-relaxed max-w-xs">
              It&apos;s more than a dance, it&apos;s a good time. Weddings, birthdays, social events, and private groups across Adelaide.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <p className="rye text-[0.6rem] tracking-[0.3em] uppercase text-[#D49C84] mb-2">Navigation</p>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#F7EAD8]/50 hover:text-[#F7EAD8] transition-colors w-fit"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <Link
              href="/contact"
              className="rye text-xs border border-[#F7EAD8]/25 text-[#F7EAD8] px-7 py-3 rounded-full tracking-widest hover:bg-[#F7EAD8] hover:text-[#1E0F0B] transition-all"
            >
              Book Now
            </Link>
            <p className="brygada italic text-[#C483C8]/60 text-sm md:text-right">
              No experience required.
              <br />
              Just good vibes.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F7EAD8]/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[0.65rem] text-[#F7EAD8]/30 tracking-wide">
            &copy; {new Date().getFullYear()} Wildflower Line Dancing. All rights reserved.
          </p>
          <p className="text-[0.65rem] text-[#F7EAD8]/30 tracking-wide">
            Website designed by{" "}
            <a
              href="https://alexandriabraniff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7EAD8]/50 hover:text-[#C483C8] transition-colors"
            >
              Alexandria Braniff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
