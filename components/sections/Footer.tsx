import { Globe, Mail } from "lucide-react";
import { FOOTER_COLUMNS, PAYMENTS } from "@/lib/data";
import { SITE } from "@/lib/site";
import { GlowDot } from "@/components/ui/primitives";
import { CookieToggle } from "@/components/ui/CookieToggle";

function PaymentBadge({ name }: { name: string }) {
  const glyph = name === "Visa" ? "VISA" : name === "Mastercard" ? "MC" : "AMEX";
  return (
    <span className="grid h-7 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-[10px] font-bold tracking-wider text-zinc-300">
      {glyph}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-black text-zinc-950">
                W
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                WowMade<span className="text-zinc-500">.AI</span>
              </span>
              <GlowDot />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              One studio for cinematic video, images, music and text. Built with privacy in mind.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <a
                href="#top"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-200"
              >
                <Mail className="h-4 w-4" />
                hello@wowmade.ai
              </a>
              <a
                href="#top"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-200"
              >
                <Globe className="h-4 w-4" />
                English
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 text-xs text-zinc-500">
            <p>
              © {SITE.copyrightYear} {SITE.company}. All rights reserved.
            </p>
            <p>
              WowMade.AI is operated by {SITE.company}. Registered in {SITE.jurisdiction}. Company
              registration no. {SITE.registrationNo}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              {PAYMENTS.map((p) => (
                <PaymentBadge key={p} name={p} />
              ))}
            </div>
            <CookieToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
