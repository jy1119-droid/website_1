"use client";

import { useState } from "react";
import { Check, Copy, Wand2 } from "lucide-react";
import {
  EFFECTS,
  PIXEL_ART,
  PIXEL_FILTERS,
  SEEDREAM_GALLERY,
  VIDEO_FEATURES,
  type PixelFilter,
} from "@/lib/data";
import { cn } from "@/lib/cn";
import { CompareSlider } from "./CompareSlider";

/* ----------------------------- Video & Image ----------------------------- */

export function VideoImagePanel() {
  const [active, setActive] = useState(VIDEO_FEATURES[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center">
      <CompareSlider
        beforeLabel={active.before}
        afterLabel={active.after}
        gradient={active.gradient}
      />

      <div className="flex flex-col gap-3">
        <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
          Live comparison — drag the handle
        </div>
        {VIDEO_FEATURES.map((card) => {
          const isActive = card.id === active.id;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setActive(card)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300",
                isActive
                  ? "border-white/25 bg-white/[0.07] shadow-[0_0_40px_-16px_rgba(99,102,241,0.8)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]",
              )}
              aria-pressed={isActive}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                  {card.badge}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{card.description}</p>
              {isActive ? (
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------ Visual effects --------------------------- */

export function EffectsPanel() {
  return (
    <div className="grid auto-rows-[132px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[150px]">
      {EFFECTS.map((effect) => (
        <button
          key={effect.name}
          type="button"
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-white/10 text-left transition-all duration-300 hover:border-white/25",
            effect.span,
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110",
              effect.gradient,
            )}
          />
          <div className="absolute inset-0 bg-zinc-950/35 transition-colors duration-300 group-hover:bg-zinc-950/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative flex h-full flex-col justify-between p-4">
            <span className="w-fit rounded-full border border-white/20 bg-zinc-950/40 px-2.5 py-0.5 text-[11px] font-medium text-zinc-200 backdrop-blur">
              {effect.tag}
            </span>
            <div className="flex items-end justify-between gap-2">
              <span className="text-base font-semibold text-white drop-shadow">
                {effect.name}
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-zinc-950/50 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

/* -------------------------------- Pixel art ------------------------------ */

export function PixelPanel() {
  const [filter, setFilter] = useState<PixelFilter>("All");
  const [copied, setCopied] = useState<string | null>(null);

  const items = PIXEL_ART.filter((a) => filter === "All" || a.category === filter);

  const copy = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(prompt);
      setTimeout(() => setCopied((c) => (c === prompt ? null : c)), 1600);
    } catch {
      setCopied(prompt);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {PIXEL_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              filter === f
                ? "border-white/25 bg-white/10 text-white"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-200",
            )}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((art) => (
          <figure
            key={art.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
          >
            <div className={cn("relative grid h-40 place-items-center bg-gradient-to-br", art.gradient)}>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.18)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.18)_75%,transparent_75%)] bg-[length:16px_16px] opacity-50" />
              <span
                className="relative select-none text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110"
                style={{ imageRendering: "pixelated" }}
                aria-hidden
              >
                {art.glyph}
              </span>
              <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-zinc-950/50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-200 backdrop-blur">
                {art.category}
              </span>
            </div>
            <figcaption className="flex flex-col gap-3 p-4">
              <div>
                <h3 className="text-sm font-semibold text-white">{art.title}</h3>
                <p className="mt-1 line-clamp-2 font-mono text-xs leading-relaxed text-zinc-500">
                  {art.prompt}
                </p>
              </div>
              <button
                type="button"
                onClick={() => copy(art.prompt)}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              >
                {copied === art.prompt ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    {copied ? <Copy className="h-3.5 w-3.5" /> : <Wand2 className="h-3.5 w-3.5" />}
                    Try this prompt
                  </>
                )}
              </button>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Seedream 5.0 ----------------------------- */

export function SeedreamPanel() {
  return (
    <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {SEEDREAM_GALLERY.map((item) => (
        <figure
          key={item.title}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-white/25",
            item.span,
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
              item.gradient,
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
          <figcaption className="relative flex h-full flex-col justify-end p-4">
            <span className="w-fit rounded-full border border-white/20 bg-zinc-950/40 px-2.5 py-0.5 text-[11px] font-medium text-zinc-200 backdrop-blur">
              {item.category}
            </span>
            <h3 className="mt-2 text-sm font-semibold text-white">{item.title}</h3>
            <p className="text-xs text-zinc-400">{item.meta}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
