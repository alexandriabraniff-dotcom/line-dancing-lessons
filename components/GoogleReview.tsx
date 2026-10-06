import Image from "next/image";
import { googleReviewUrl } from "@/lib/site";

/* Google's four colour "G" */
export function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.13.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.87.92 7.53 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/* Asks happy dancers to leave a Google review (helps the business show up in local search).
   Cream-to-pink band that flows into the Instagram section, copy beside an arch-framed photo. */
export default function GoogleReview() {
  return (
    <section className="bg-gradient-to-b from-[#FEEFB8] to-[#FFE3E2] px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto grid max-w-6xl items-center gap-[var(--gap)] md:grid-cols-[1.15fr_1fr]">
        {/* Copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="brygada mb-3 text-[length:var(--text-eyebrow)] font-bold uppercase tracking-[0.35em] text-[#D49C84]">
            Kind Words Go a Long Way
          </p>
          <h2 className="rye uppercase tracking-wide text-[#6B4841]" style={{ fontSize: "var(--text-h2)" }}>
            Loved Your Lesson?
          </h2>
          <p className="brygada mt-5 text-[length:clamp(1.3rem,1.7vw,1.85rem)] italic leading-snug text-[#6B4841]">
            Tell the world how it felt to hit the dance floor with us.
          </p>
          <p className="mt-4 max-w-xl text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75 max-md:mx-auto">
            Whether you two-stepped through a wedding reception, surprised the birthday crowd or
            found your feet in a private lesson, we&apos;d love to hear about it. Every Google
            review helps another group across Greater Vancouver find their way to the floor.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-center">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brygada inline-flex h-[45px] lg:h-11 w-full sm:w-auto items-center justify-center gap-3 bg-[#6B4841] pl-2 pr-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
            >
              <span className="flex h-[calc(100%-0.75rem)] aspect-square items-center justify-center bg-white">
                <GoogleIcon className="h-[1.1rem] w-[1.1rem]" />
              </span>
              Write a Google Review
            </a>
            <p className="brygada text-[length:calc(var(--text-body)*0.9)] italic text-[#6B4841]/70">
              Takes less than a minute
            </p>
          </div>
        </div>

        {/* Arch photo */}
        <div className="order-1 mx-auto w-[min(70vw,22rem)] md:order-2 md:w-full md:max-w-[26rem]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border-[6px] border-[#F7EAD8] shadow-[0_18px_40px_-24px_rgba(30,15,11,0.45)]">
            <Image
              src="/gallery/group-photo.png"
              alt="Dancers in cowboy hats smiling together under string lights"
              fill
              sizes="(min-width: 768px) 26rem, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
