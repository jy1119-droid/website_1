"use client";

import { useCallback, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/cn";

type CompareSliderProps = {
  beforeLabel: string;
  afterLabel: string;
  gradient: string;
  className?: string;
};

/**
 * Draggable before/after comparison. Keyboard accessible via the slider role,
 * pointer drag via pointer events (works for mouse and touch).
 */
export function CompareSlider({
  beforeLabel,
  afterLabel,
  gradient,
  className,
}: CompareSliderProps) {
  const [value, setValue] = useState(52);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={trackRef}
      className={cn(
        "group relative aspect-video w-full touch-none select-none overflow-hidden rounded-2xl border border-white/10 bg-zinc-900",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER (full) */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.28),transparent_55%)]" />

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 bg-zinc-800"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:18px_18px] opacity-60" />
        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[3px]" />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-zinc-950/70 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      <span className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* Handle */}
      <div
        className="absolute inset-y-0 w-px bg-white/80 shadow-[0_0_18px_2px_rgba(255,255,255,0.4)]"
        style={{ left: `${value}%` }}
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setValue((v) => Math.max(0, v - 4));
          if (e.key === "ArrowRight") setValue((v) => Math.min(100, v + 4));
        }}
        className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-white/25 bg-zinc-950/80 text-white backdrop-blur transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group-hover:scale-105"
        style={{ left: `${value}%` }}
      >
        <GripVertical className="h-4 w-4" />
      </div>
    </div>
  );
}
