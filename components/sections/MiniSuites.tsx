import { AudioLines, PenLine, GraduationCap, Layers } from "lucide-react";
import { cn } from "@/lib/cn";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";

const MINI = [
  {
    id: "music",
    icon: AudioLines,
    title: "AI Music",
    copy: "Original tracks with structure, stems and mastering — cleared for commercial use.",
    tags: ["Lo-fi", "Cinematic score", "EDM", "Ambient"],
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    id: "text",
    icon: PenLine,
    title: "AI Text",
    copy: "Hooks, scripts, product copy and long-form drafts that hold your brand voice.",
    tags: ["Ad hooks", "Video script", "Product copy", "Story"],
    gradient: "from-cyan-500/20 to-blue-500/5",
  },
  {
    id: "academy",
    icon: GraduationCap,
    title: "Academy",
    copy: "Short, practical lessons that turn a blank prompt into a repeatable workflow.",
    tags: ["Prompting 101", "Shot design", "Colour grading", "Sound"],
    gradient: "from-violet-500/20 to-fuchsia-500/5",
  },
];

/** Secondary suite anchors (music, text, academy) that the nav links point at. */
export function MiniSuites() {
  return (
    <section id="music" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beyond the frame"
          title={
            <>
              Sound, words and <span className="text-gradient-warm">craft</span>
            </>
          }
          description="Video is only one track. WowMade writes, scores and teaches the whole production."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {MINI.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.id} className="h-full">
                <article
                  id={item.id === "music" ? undefined : item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <div
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br text-white",
                      item.gradient,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{item.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-zinc-500">
          <Layers className="h-3.5 w-3.5" />
          One subscription covers every module on this page.
        </div>
      </div>
    </section>
  );
}
