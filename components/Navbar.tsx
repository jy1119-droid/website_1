"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/cn";
import { GlowDot } from "@/components/ui/primitives";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled &&
            "mt-2 max-w-6xl rounded-2xl border border-white/10 bg-zinc-950/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl",
        )}
      >
        {/* Logo */}
        <a href="#top" className="group flex shrink-0 items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-black text-zinc-950 shadow-[0_0_22px_-2px_rgba(99,102,241,0.7)] transition-transform duration-300 group-hover:scale-105">
            W
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            WowMade
            <span className="text-zinc-500">.AI</span>
          </span>
          <GlowDot />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isOpen ? "text-white" : "text-zinc-400 hover:text-white",
                  )}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </a>
                <AnimatePresence>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 p-2 shadow-2xl backdrop-blur-xl">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                          >
                            <span className="text-sm font-medium text-white">{link.label}</span>
                            {link.hint ? (
                              <span className="text-xs text-zinc-500">{link.hint}</span>
                            ) : null}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-6px_rgba(99,102,241,0.9)] transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Get Credits
          </a>
          <a
            href="#top"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur transition-colors hover:bg-white/10 md:inline-flex"
          >
            Start Here
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 backdrop-blur transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-zinc-950/95 px-4 pb-24 pt-4 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-lg flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isOpen = mobileSection === item.label;
                return (
                  <div key={item.label} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => setMobileSection(isOpen ? null : item.label)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-medium text-white"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-4 w-4 text-zinc-400 transition-transform", isOpen && "rotate-180")}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="flex flex-col gap-0.5 px-2 pb-2">
                            {item.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                              >
                                {link.label}
                                {link.hint ? (
                                  <span className="ml-2 text-xs text-zinc-500">{link.hint}</span>
                                ) : null}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Credits
                </a>
                <a
                  href="#top"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200"
                >
                  Start Here
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
