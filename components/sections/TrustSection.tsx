import { Check } from "lucide-react";
import { TRUST_PILLARS } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";

export function TrustSection() {
  return (
    <section id="trust" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[760px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.14),transparent_70%)] blur-2xl" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why WowMade?"
          title={
            <>
              Built to be trusted, <span className="text-gradient">not just fast</span>
            </>
          }
          description="Speed is table stakes. The reason teams put their client work here is what happens around every render."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.title} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
