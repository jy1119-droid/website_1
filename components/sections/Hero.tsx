"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Command, Sparkles, Wand2 } from "lucide-react";
import { HERO_PROMPTS, SOCIAL_PROOF } from "@/lib/data";
import { cn } from "@/lib/cn";
import { GlowDot, Pill } from "@/components/ui/primitives";

/** Types each prompt out, holds, then deletes it before moving to the next. */
function useTypingPlaceholder(phrases: string[], typeMs = 42, holdMs = 1600) {
  const [state, setState] = useState({ index: 0, text: "", deleting: false });

  useEffect(() => {
    const full = phrases[state.index % phrases.length];

    // Delay before the next tick: pause on the full phrase, brief pause when empty.
    let delay = state.deleting ? typeMs / 2 : typeMs;
    if (!state.deleting && state.text === full) delay = holdMs;
    else if (state.deleting && state.text === "") delay = typeMs;

    const timer = setTimeout(() => {
      setState((prev) => {
        const target = phrases[prev.index % phrases.length];
        if (!prev.deleting && prev.text === target) {
          return { ...prev, deleting: true };
        }
        if (prev.deleting && prev.text === "") {
          return { index: (prev.index + 1) % phrases.length, text: "", deleting: false };
        }
        return {
          ...prev,
          text: prev.deleting
            ? target.slice(0, prev.text.length - 1)
            : target.slice(0, prev.text.length + 1),
        };
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [state, phrases, typeMs, holdMs]);

  return state.text;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const typed = useTypingPlaceholder(HERO_PROMPTS);

  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      {/* Local glow accents */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[820px] max-w-[95vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.22),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute right-1/4 top-56 -z-10 h-[320px] w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.16),transparent_65%)] blur-2xl" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Pill className="mb-7">
            <GlowDot />
            One studio for video, image, music &amp; text
          </Pill>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
          className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Cinematic video, stunning images, and original music —{" "}
          <span className="text-gradient animate-gradient-pan">from a single prompt, in seconds.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Describe the idea. WowMade writes it, shoots it, scores it and grades it — all inside one
          dark, distraction-free canvas built with privacy in mind.
        </motion.p>

        {/* Prompt bar */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 w-full max-w-2xl"
        >
          <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl transition-colors focus-within:border-white/25">
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-indigo-500/40 via-cyan-400/30 to-violet-500/40 opacity-0 blur-lg transition-opacity duration-500 group-focus-within:opacity-100" />
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 px-3 py-2">
                <Wand2 className="h-4 w-4 shrink-0 text-zinc-500" />
                <label htmlFor="hero-prompt" className="sr-only">
                  Describe what you want to make
                </label>
                <span className="hidden shrink-0 text-sm font-medium text-zinc-500 sm:inline">
                  I want to make:
                </span>
                <div className="relative flex-1">
                  <input
                    id="hero-prompt"
                    type="text"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-transparent"
                    placeholder="Describe your idea"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center truncate text-sm text-zinc-500"
                  >
                    {typed}
                    <span className="animate-caret ml-0.5 inline-block h-4 w-[2px] translate-y-px bg-cyan-400" />
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_28px_-6px_rgba(99,102,241,0.9)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
              >
                <Sparkles className="h-4 w-4" />
                Generate
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1">
              <Command className="h-3 w-3" /> K to open the studio
            </span>
            {["Cinematic", "Product shot", "Pixel sprite", "Lo-fi track"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 transition-colors hover:border-white/20 hover:text-zinc-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.form>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-12 w-full"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-zinc-500">
            {SOCIAL_PROOF.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-3">
                {i > 0 ? <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" /> : null}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Creator marquee */}
      <div className="mask-fade-x relative mx-auto mt-16 max-w-6xl overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-4" aria-hidden={dup === 1}>
              {MARQUEE.map((m) => (
                <figure
                  key={`${dup}-${m.name}`}
                  className="w-[280px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                >
                  <blockquote className="text-sm leading-relaxed text-zinc-300">
                    “{m.quote}”
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2.5">
                    <span
                      className={cn(
                        "h-7 w-7 rounded-full bg-gradient-to-br",
                        m.gradient,
                      )}
                    />
                    <span className="text-xs text-zinc-500">
                      <span className="block font-medium text-zinc-300">{m.name}</span>
                      {m.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MARQUEE = [
  {
    name: "Mara V.",
    role: "Brand filmmaker",
    quote: "I storyboarded, shot and scored a 40-second spot before my coffee went cold.",
    gradient: "from-indigo-500 to-cyan-400",
  },
  {
    name: "Devin O.",
    role: "Indie game dev",
    quote: "The pixel art studio replaced two freelancers and a month of back-and-forth.",
    gradient: "from-fuchsia-500 to-violet-500",
  },
  {
    name: "Priya N.",
    role: "E-commerce lead",
    quote: "Object Remover turned our messy warehouse shots into clean catalogue images.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Lukas B.",
    role: "Music producer",
    quote: "Original stems, no sample clearance headaches. That alone pays for the plan.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Sofia R.",
    role: "Agency creative director",
    quote: "Clients see three concepts the same day. It changed how we pitch.",
    gradient: "from-sky-500 to-indigo-500",
  },
];
