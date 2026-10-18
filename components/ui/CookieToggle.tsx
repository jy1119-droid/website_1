"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";
import { cn } from "@/lib/cn";

export function CookieToggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setEnabled((v) => !v)}
      aria-pressed={enabled}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
    >
      <Cookie className="h-3.5 w-3.5" />
      Cookies
      <span
        className={cn(
          "relative ml-0.5 inline-flex h-4 w-7 items-center rounded-full transition-colors",
          enabled ? "bg-gradient-to-r from-indigo-500 to-cyan-400" : "bg-white/15",
        )}
      >
        <span
          className={cn(
            "absolute h-3 w-3 rounded-full bg-white transition-transform",
            enabled ? "translate-x-3.5" : "translate-x-0.5",
          )}
        />
      </span>
    </button>
  );
}
