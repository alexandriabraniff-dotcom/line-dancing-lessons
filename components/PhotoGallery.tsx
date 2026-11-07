"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cldDownloadUrl, cldSrcSet, cldUrl, type GalleryPhoto, type GallerySection } from "@/lib/gallery";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C483C8]";

/* Square thumbnails, cropped around the most interesting part of the photo */
const thumbWidths = [240, 360, 480, 720];
const thumb = (w: number) => `c_fill,g_auto,ar_1:1,w_${w},f_auto,q_auto`;
/* Lightbox: whole photo, never cropped */
const largeWidths = [800, 1200, 1600, 2400];
const large = (w: number) => `c_limit,w_${w},f_auto,q_auto`;
/* How many thumbnails load straight away (roughly the first screenful) */
const EAGER = 8;

function DownloadIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function PhotoGallery({
  cloudName,
  sections,
  photos,
}: {
  cloudName: string;
  sections: GallerySection[];
  photos: GalleryPhoto[];
}) {
  /* One flat list in section order, so the lightbox can step through everything */
  const groups = useMemo(() => {
    const list = sections.length > 0 ? sections : [{ id: "", label: "" }];
    const withItems = list
      .map((s) => ({ ...s, items: photos.filter((p) => sections.length === 0 || p.section === s.id) }))
      .filter((g) => g.items.length > 0);
    /* Each group's position in the flat list */
    return withItems.map((g, i) => ({
      ...g,
      offset: withItems.slice(0, i).reduce((sum, prev) => sum + prev.items.length, 0),
    }));
  }, [sections, photos]);
  const ordered = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastIndex = useRef(0);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const open = (i: number) => {
    lastIndex.current = i;
    setIndex(i);
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (by: number) => setIndex((i) => (i === null ? i : (i + by + ordered.length) % ordered.length)),
    [ordered.length]
  );

  /* Open as a modal dialog: the rest of the page becomes inert, so focus stays
     inside, and Escape closes it. */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (index === null || !dialog || dialog.open) return;
    dialog.showModal();
    dialog.querySelector<HTMLElement>("[data-close]")?.focus();
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    const onClose = () => {
      html.style.overflow = previous;
      setIndex(null);
      /* Back to the thumbnail that was last on screen */
      thumbRefs.current[lastIndex.current]?.focus();
    };
    dialog.addEventListener("close", onClose, { once: true });
  }, [index]);

  /* Remember the current photo, and warm up its neighbours */
  useEffect(() => {
    if (index === null) return;
    lastIndex.current = index;
    for (const n of [index - 1, index + 1]) {
      const p = ordered[(n + ordered.length) % ordered.length];
      if (!p) continue;
      const img = new window.Image();
      img.sizes = "100vw";
      img.srcset = cldSrcSet(cloudName, p.id, largeWidths, large);
    }
  }, [index, ordered, cloudName]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Tab") {
      /* Keep Tab cycling inside the viewer instead of escaping to the browser bar */
      const items = [...e.currentTarget.querySelectorAll<HTMLElement>("a[href], button")];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  };

  const current = index === null ? null : ordered[index];
  const multipleSections = groups.length > 1;

  return (
    <>
      {multipleSections && (
        <nav aria-label="Gallery sections" className="mb-10">
          <ul className="flex flex-wrap justify-center gap-3">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#photos-${g.id || "more"}`}
                  className={`brygada inline-flex min-h-11 items-center border border-[#6B4841]/40 px-4 text-[1.05rem] font-bold tracking-[0.12em] text-[#6B4841] transition-colors duration-300 hover:border-[#6B4841] hover:bg-[#6B4841] hover:text-[#F7EAD8] ${focusRing}`}
                >
                  {g.label}
                  <span className="ml-2 font-normal">({g.items.length})</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {groups.map((g) => (
        <section
          key={g.id}
          id={multipleSections ? `photos-${g.id || "more"}` : undefined}
          aria-labelledby={multipleSections ? `photos-${g.id || "more"}-heading` : undefined}
          className="scroll-mt-[calc(var(--header-logo)+var(--header-pad-y)*2+1.5rem)] [&+&]:mt-[var(--section-sm)]"
        >
          {multipleSections && (
            <h3
              id={`photos-${g.id || "more"}-heading`}
              className="rye mb-5 uppercase tracking-wide text-[#6B4841]"
              style={{ fontSize: "var(--text-h3)" }}
            >
              {g.label}
            </h3>
          )}
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-3">
            {g.items.map((photo, n) => {
              const i = g.offset + n;
              return (
                <li key={`${photo.id}-${i}`} className="group relative">
                  <button
                    ref={(el) => {
                      thumbRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => open(i)}
                    className={`block w-full overflow-hidden bg-[#E9D9C4] ${focusRing}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cldUrl(cloudName, photo.id, thumb(480))}
                      srcSet={cldSrcSet(cloudName, photo.id, thumbWidths, thumb)}
                      sizes="(min-width: 1152px) 280px, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 48vw"
                      alt={photo.alt}
                      width={480}
                      height={480}
                      loading={i < EAGER ? "eager" : "lazy"}
                      decoding="async"
                      className="aspect-square h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="sr-only">, open larger view</span>
                  </button>
                  <a
                    href={cldDownloadUrl(cloudName, photo)}
                    aria-label={`Download full-size photo ${i + 1}`}
                    className={`brygada absolute bottom-2 right-2 inline-flex min-h-11 items-center gap-1.5 bg-[#1E0F0B]/85 px-3 text-[0.95rem] font-bold tracking-[0.08em] text-[#F7EAD8] opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 pointer-coarse:opacity-100 hover:bg-[#1E0F0B] ${focusRing}`}
                  >
                    <DownloadIcon />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {/* ── Lightbox ── */}
      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={(e) => {
          /* Clicking the dark backdrop around the photo closes it */
          if (e.target === e.currentTarget) close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-[#140906] p-0 text-[#F7EAD8] open:flex open:flex-col backdrop:bg-transparent"
      >
        {current && index !== null && (
          <>
            <div className="flex items-center justify-between gap-3 px-[var(--gutter)] py-3">
              <p aria-live="polite" className="brygada text-[1.05rem] font-bold tracking-[0.12em]">
                Photo {index + 1} of {ordered.length}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={cldDownloadUrl(cloudName, current)}
                  className={`brygada inline-flex min-h-11 items-center gap-2 bg-[#F7EAD8] px-4 text-[1rem] font-bold tracking-[0.1em] text-[#6B4841] transition-colors duration-300 hover:bg-[#FEEFB8] ${focusRing}`}
                >
                  <DownloadIcon />
                  Download
                </a>
                <button
                  type="button"
                  data-close
                  onClick={close}
                  aria-label="Close photo viewer"
                  className={`relative h-11 w-11 ${focusRing}`}
                >
                  <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 rotate-45 bg-current" />
                  <span aria-hidden className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -rotate-45 bg-current" />
                </button>
              </div>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 sm:px-16"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={current.id}
                src={cldUrl(cloudName, current.id, large(1600))}
                srcSet={cldSrcSet(cloudName, current.id, largeWidths, large)}
                sizes="100vw"
                alt={current.alt}
                width={current.width}
                height={current.height}
                className="max-h-full w-auto max-w-full select-none object-contain"
                draggable={false}
              />

              {ordered.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className={`absolute left-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-[#1E0F0B]/70 transition-colors hover:bg-[#1E0F0B] sm:left-3 ${focusRing}`}
                  >
                    <Chevron dir="left" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className={`absolute right-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-[#1E0F0B]/70 transition-colors hover:bg-[#1E0F0B] sm:right-3 ${focusRing}`}
                  >
                    <Chevron dir="right" />
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
