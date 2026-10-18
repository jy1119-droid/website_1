"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SHOWCASE_TABS, type ShowcaseTabId } from "@/lib/data";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/primitives";
import { EffectsPanel, PixelPanel, SeedreamPanel, VideoImagePanel } from "./showcase/panels";

const PANEL_COPY: Record<ShowcaseTabId, { eyebrow: string; title: string; description: string }> = {
  video: {
    eyebrow: "AI Video & Image",
    title: "See the difference before you commit",
    description:
      "Upscale, clean and extend in the same canvas. Drag the handle to compare the draft you shot with the master you ship.",
  },
  effects: {
    eyebrow: "Visual Effects",
    title: "Big-screen looks, one click away",
    description:
      "Forty-plus cinematic effects with matched grain, motion and colour. Hover any tile to preview the treatment.",
  },
  pixel: {
    eyebrow: "AI Pixel Art",
    title: "Sprites, tiles and icons on your palette",
    description:
      "Filter the library, steal a prompt, and drop game-ready assets straight into your engine.",
  },
  seedream: {
    eyebrow: "Seedream 5.0 Pro",
    title: "Print-ready images with real typography",
    description:
      "Posters, game interfaces and product branding that survive a client review — and a printing press.",
  },
};

export function CapabilityShowcase() {
  const [tab, setTab] = useState<ShowcaseTabId>("video");
  const baseId = useId();
  const copy = PANEL_COPY[tab];

  return (
    <section id="video" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capability showcase"
          title={
            <>
              Every model, <span className="text-gradient">one canvas</span>
            </>
          }
          description="Switch tools without leaving the page. Each module below is the real interface — tabs, filters and sliders included."
        />

        {/* Tab bar */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Capability showcase"
            className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur"
          >
            {SHOWCASE_TABS.map((t) => {
              const selected = t.id === tab;
              return (
                <button
                  key={t.id}
                  id={`${baseId}-tab-${t.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${t.id}`}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "relative flex-1 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                    selected ? "text-zinc-950" : "text-zinc-400 hover:text-white",
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId={`${baseId}-tab-pill`}
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-400 to-cyan-300"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel header */}
        <div className="mt-12 flex flex-col gap-2 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {copy.eyebrow}
          </span>
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {copy.title}
          </h3>
          <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
            {copy.description}
          </p>
        </div>

        {/* Panels */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              id={`${baseId}-panel-${tab}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${tab}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === "video" ? <VideoImagePanel /> : null}
              {tab === "effects" ? <EffectsPanel /> : null}
              {tab === "pixel" ? <PixelPanel /> : null}
              {tab === "seedream" ? <SeedreamPanel /> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
