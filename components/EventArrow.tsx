"use client";

import { useEffect, useRef, useState } from "react";

/* ── TEMPORARY: phone-only arrow from the "Upcoming Special Event" note
   (above the logo in the hero arch) to the centre of the menu button.
   Positions are measured on the device so it lines up on every screen.
   Remove with lib/event.ts. ── */
export default function EventArrow() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [path, setPath] = useState<{ curve: string; head: string } | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const hero = document.getElementById("home-hero");
    const note = document.getElementById("hero-event-note");
    const button = hero?.querySelector<HTMLElement>('[aria-label="Open menu"]');
    if (!svg || !hero || !note || !button) return;

    const draw = () => {
      if (window.innerWidth >= 1024) return setPath(null);
      const base = svg.getBoundingClientRect();
      const top = document.getElementById("hero-event-note-top") ?? note;
      const t = top.getBoundingClientRect();
      const b = button.getBoundingClientRect();

      // Tail: just right of "Upcoming", level with the middle of that line
      const sx = t.right - base.left + 10;
      const sy = t.top - base.top + t.height * 0.5;
      // Tip: centre of the menu button, just under the icon's bottom bar
      const ex = b.left + b.width / 2 - base.left;
      const ey = b.top + b.height / 2 - base.top + 12;

      // Clean connector: straight out from the text, one rounded corner,
      // straight up into the button, finished with a solid arrowhead
      const headLen = 9;
      const headHalf = 5;
      const rise = sy - (ey + headLen);
      const r = Math.max(0, Math.min(10, rise, ex - sx));

      setPath({
        curve: `M${sx} ${sy} H${ex - r} Q${ex} ${sy} ${ex} ${sy - r} V${ey + headLen}`,
        head: `M${ex} ${ey} L${ex + headHalf} ${ey + headLen} L${ex - headHalf} ${ey + headLen} Z`,
      });
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(hero);
    observer.observe(note);
    window.addEventListener("resize", draw);
    document.fonts?.ready.then(draw);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible lg:hidden"
      fill="none"
      stroke="#C483C8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path && (
        <>
          <path d={path.curve} />
          <path d={path.head} fill="#C483C8" stroke="none" />
        </>
      )}
    </svg>
  );
}
