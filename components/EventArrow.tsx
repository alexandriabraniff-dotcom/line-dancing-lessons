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
      // Tip: centre of the menu button, just under its bottom edge
      const ex = b.left + b.width / 2 - base.left;
      const ey = b.bottom - base.top + 6;

      // Hand-drawn style swoop: out to the right with a slight dip,
      // then curving up so the head points straight into the button
      const dx = ex - sx;
      const dy = Math.max(0, sy - ey);
      const c1x = sx + dx * 0.45;
      const c1y = sy + 10;
      const c2x = ex;
      const c2y = ey + Math.max(34, dy + 24);

      // Arrowhead follows the direction the curve arrives in
      const angle = Math.atan2(ey - c2y, ex - c2x);
      const len = 11;
      const spread = 0.5;
      const hx1 = ex - len * Math.cos(angle - spread);
      const hy1 = ey - len * Math.sin(angle - spread);
      const hx2 = ex - len * Math.cos(angle + spread);
      const hy2 = ey - len * Math.sin(angle + spread);

      setPath({
        curve: `M${sx} ${sy} C${c1x} ${c1y} ${c2x} ${c2y} ${ex} ${ey}`,
        head: `M${hx1} ${hy1} L${ex} ${ey} L${hx2} ${hy2}`,
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
      strokeWidth="2.25"
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
