import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E0F0B] text-[#F7EAD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-10">
        {/* Top: 3-column grid with center logo */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-16 items-start mb-14">
          {/* Left links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <nav className="flex flex-col gap-2.5">
              <p className="rye text-[0.55rem] tracking-[0.3em] uppercase text-[#D49C84] mb-1">Navigate</p>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs text-[#F7EAD8]/40 hover:text-[#F7EAD8] transition-colors uppercase tracking-wider"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-2.5">
              <p className="rye text-[0.55rem] tracking-[0.3em] uppercase text-[#D49C84] mb-1">Services</p>
              {["Weddings", "Birthdays", "Social Events", "Private Groups"].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="text-xs text-[#F7EAD8]/40 hover:text-[#F7EAD8] transition-colors uppercase tracking-wider"
                >
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center logo */}
          <div className="flex flex-col items-center text-center">
            <p className="rye text-2xl text-[#6B4841] tracking-widest leading-none uppercase">Wildflower</p>
            <p className="brygada font-bold text-[#C483C8] text-base mt-1">Line Dancing</p>
            <p className="text-[#F7EAD8]/25 text-xs mt-4 leading-relaxed">
              It&apos;s more than a dance,
              <br />it&apos;s a good time.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2.5 md:items-end md:text-right">
            <p className="rye text-[0.55rem] tracking-[0.3em] uppercase text-[#D49C84] mb-1">Get in Touch</p>
            <Link
              href="/contact"
              className="text-xs text-[#F7EAD8]/40 hover:text-[#F7EAD8] transition-colors uppercase tracking-wider"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="text-xs text-[#F7EAD8]/40 hover:text-[#F7EAD8] transition-colors uppercase tracking-wider"
            >
              Reach Out
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F7EAD8]/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[0.6rem] text-[#F7EAD8]/25 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Wildflower Line Dancing. All rights reserved.
          </p>
          <p className="text-[0.6rem] text-[#F7EAD8]/25 tracking-wider uppercase">
            Website designed by{" "}
            <a
              href="https://alexandriabraniff.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7EAD8]/40 hover:text-[#C483C8] transition-colors"
            >
              Alexandria Braniff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
