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
      const n = note.getBoundingClientRect();
      const b = button.getBoundingClientRect();

      // Tail: just right of the note, level with its first line
      const sx = n.right - base.left + 8;
      const sy = n.top - base.top + n.height * 0.3;
      // Tip: centre of the menu button, just under its bottom edge
      const ex = b.left + b.width / 2 - base.left;
      const ey = b.bottom - base.top + 4;

      const head = 9;
      setPath({
        curve: `M${sx} ${sy} Q${ex} ${sy} ${ex} ${ey}`,
        head: `M${ex - head * 0.75} ${ey + head} L${ex} ${ey} L${ex + head * 0.75} ${ey + head}`,
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
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path && (
        <>
          <path d={path.curve} />
          <path d={path.head} />
        </>
      )}
    </svg>
  );
}
