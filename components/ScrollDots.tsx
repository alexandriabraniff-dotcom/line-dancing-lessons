"use client";

import { useEffect, useState } from "react";

/* Position dots under a sideways card row (ported from The Yale Saloon site).
   Only shown while the row actually overflows; tapping a dot scrolls to that card. */
export default function ScrollDots({
  targetId,
  labels,
  groupLabel,
}: {
  targetId: string;
  labels: string[];
  groupLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const update = () => {
      setOverflows(el.scrollWidth > el.clientWidth + 1);
      const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
      const left = el.getBoundingClientRect().left + pad;
      let best = 0;
      let min = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const d = Math.abs(c.getBoundingClientRect().left - left);
        if (d < min) { min = d; best = i; }
      });
      // At the very end of the row the last card can't snap to the start, so mark it active
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) best = el.children.length - 1;
      setActive(best);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  function go(i: number) {
    const el = document.getElementById(targetId);
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    el.scrollTo({ left: el.scrollLeft + card.getBoundingClientRect().left - el.getBoundingClientRect().left - pad, behavior: "smooth" });
  }

  if (!overflows) return null;

  return (
    <div role="group" aria-label={groupLabel} className="flex justify-center gap-1">
      {labels.map((label, i) => (
        <button
          key={`${i}-${label}`}
          type="button"
          onClick={() => go(i)}
          aria-label={`Show ${label}`}
          aria-current={i === active}
          className="flex h-6 w-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-[#C483C8]"
        >
          <span className={`block h-2 w-2 rounded-full transition-all ${i === active ? "scale-125 bg-[#6B4841]" : "bg-[#6B4841]/35"}`} />
        </button>
      ))}
    </div>
  );
}
