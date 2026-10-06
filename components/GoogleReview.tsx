import { googleReviewUrl } from "@/lib/site";

/* Google's four colour "G" */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.13.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.87.92 7.53 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/* Asks happy dancers to leave a Google review (helps the business show up in local search) */
export default function GoogleReview() {
  return (
    <section className="px-[var(--gutter)] pb-[var(--section)]">
      <div className="mx-auto max-w-4xl border border-[#D49C84]/40 bg-[#FEE2BC]/45 px-[max(1.5rem,4vw)] py-[max(2.5rem,4vw)] text-center">
        <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_-10px_rgba(30,15,11,0.35)]">
          <GoogleIcon className="h-8 w-8" />
        </span>
        <p className="brygada font-bold text-[length:var(--text-eyebrow)] tracking-[0.35em] uppercase text-[#D49C84] mb-3">
          Danced With Us?
        </p>
        <h2 className="rye text-[#6B4841] uppercase tracking-wide" style={{ fontSize: "var(--text-h2)" }}>
          Leave Us a Review
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[length:var(--text-body)] leading-relaxed text-[#6B4841]/75">
          We&apos;d love to hear how your lesson or event went. A quick Google review helps more
          people across Greater Vancouver find us and get on the dance floor.
        </p>
        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="brygada mt-7 inline-flex h-[45px] lg:h-11 items-center justify-center bg-[#6B4841] px-6 text-[1.15rem] font-bold tracking-[0.18em] text-[#F7EAD8] transition-colors duration-300 hover:bg-[#1E0F0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]"
        >
          Review Us on Google
        </a>
      </div>
    </section>
  );
}
