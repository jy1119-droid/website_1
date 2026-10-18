import { ArrowUpRight } from "lucide-react";
import { TOOLS, TOOLS_EXTRAS } from "@/lib/data";
import { cn } from "@/lib/cn";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";

export function ToolsGrid() {
  return (
    <section id="tools" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The toolkit"
          title={
            <>
              Every AI tool you need, <span className="text-gradient">in one place</span>
            </>
          }
          description="Nine production tools that share one library, one brand kit and one bill — so nothing gets lost between apps."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <RevealItem key={tool.name} className={tool.span}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]">
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      tool.accent,
                    )}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:border-white/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <a
                      href="#top"
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:border-white/25 hover:text-white focus-visible:opacity-100"
                    >
                      Open
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{tool.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
          <span className="text-sm text-zinc-500">Also included:</span>
          {TOOLS_EXTRAS.map((extra) => {
            const Icon = extra.icon;
            return (
              <span
                key={extra.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                <Icon className="h-3.5 w-3.5" />
                {extra.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
