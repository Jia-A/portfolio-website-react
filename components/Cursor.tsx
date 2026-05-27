"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom interactive cursor: a small filled dot that tracks the pointer 1:1
 * and a larger ring that trails it with easing. The ring grows and the accent
 * intensifies when hovering interactive elements (a, button, [data-cursor]).
 *
 * Progressive enhancement: renders nothing on coarse pointers (touch). On a
 * mouse OR trackpad it activates. If the user prefers reduced motion the ring
 * still works but follows instantly (no easing/trail).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Decide once on mount whether a fine pointer (mouse or trackpad) exists.
  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  // Attach the pointer listeners only after the elements are actually rendered.
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      if (reducedMotion) {
        ring.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, input, textarea, [data-cursor="hover"]');

    const onOver = (e: PointerEvent) => {
      if (isInteractive(e.target as Element)) ring.dataset.hover = "true";
    };
    const onOut = (e: PointerEvent) => {
      if (isInteractive(e.target as Element)) delete ring.dataset.hover;
    };
    const onDown = () => (ring.dataset.down = "true");
    const onUp = () => delete ring.dataset.down;
    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };
    const onEnter = () => {
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };
    // On back/forward (bfcache) restore the page returns frozen with the
    // cursor possibly hidden; force it visible again so it never vanishes.
    const onShow = () => {
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);
    window.addEventListener("pageshow", onShow);
    if (!reducedMotion) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("pageshow", onShow);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-fog/70 transition-[width,height,border-color,background-color] duration-200 ease-out data-[hover=true]:h-12 data-[hover=true]:w-12 data-[hover=true]:border-accent data-[hover=true]:bg-accent/10 data-[down=true]:scale-90"
      />
    </>
  );
}
