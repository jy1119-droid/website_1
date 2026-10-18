"use client";

import { useMemo, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { PLANS, PRICING_ASSURANCES } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/primitives";

/** Credit cost per finished asset, used by the estimator below. */
const CREDIT_COST = { video: 20, image: 2, song: 40 } as const;

type UsageKey = keyof typeof CREDIT_COST;

const USAGE: { key: UsageKey; label: string; max: number; step: number }[] = [
  { key: "video", label: "Videos / month", max: 400, step: 10 },
  { key: "image", label: "Images / month", max: 6000, step: 50 },
  { key: "song", label: "Songs / month", max: 120, step: 5 },
];

export function Pricing() {
  const [usage, setUsage] = useState<Record<UsageKey, number>>({
    video: 60,
    image: 600,
    song: 12,
  });

  const estimate = useMemo(
    () =>
      (Object.keys(CREDIT_COST) as UsageKey[]).reduce(
        (sum, key) => sum + usage[key] * CREDIT_COST[key],
        0,
      ),
    [usage],
  );

  const recommended = useMemo(() => {
    return PLANS.find((p) => p.credits >= estimate) ?? PLANS[PLANS.length - 1];
  }, [estimate]);

  return (
    <section id="pricing" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple plans, <span className="text-gradient">generous credits</span>
            </>
          }
          description="Every plan unlocks the whole studio. Pick a tier for the volume you need — upgrade or cancel whenever."
        />

        {/* Plan cards */}
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <RevealItem key={plan.id} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-colors duration-300",
                  plan.featured
                    ? "border-white/25 bg-white/[0.07] shadow-[0_0_60px_-20px_rgba(99,102,241,0.9)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
                )}
              >
                {plan.featured ? (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{plan.tagline}</p>
                  </div>
                  {plan.badge ? (
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold",
                        plan.featured
                          ? "bg-gradient-to-r from-indigo-400 to-cyan-300 text-zinc-950"
                          : "border border-white/10 bg-white/5 text-zinc-300",
                      )}
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    ${plan.price}
                  </span>
                  <span className="pb-1 text-sm text-zinc-500">/ month</span>
                </div>

                <dl className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  {[
                    { label: "Videos", value: plan.videos },
                    { label: "Images", value: plan.images },
                    { label: "Songs", value: plan.songs },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-[11px] uppercase tracking-wide text-zinc-500">
                        {stat.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-white">
                        {stat.value.toLocaleString()}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={cn(
                    "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]",
                    plan.featured
                      ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-zinc-950 shadow-[0_0_28px_-6px_rgba(99,102,241,0.9)]"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
                  )}
                >
                  <Sparkles className="h-4 w-4" />
                  Choose {plan.name}
                </button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Credit calculator */}
        <Reveal className="mt-8">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">Estimate your month</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Slide to match your output. We&apos;ll suggest the cheapest plan that covers it.
              </p>

              <div className="mt-6 flex flex-col gap-6">
                {USAGE.map((row) => (
                  <div key={row.key}>
                    <div className="flex items-center justify-between text-sm">
                      <label htmlFor={`usage-${row.key}`} className="font-medium text-zinc-300">
                        {row.label}
                      </label>
                      <span className="tabular-nums text-zinc-400">
                        {usage[row.key].toLocaleString()}
                      </span>
                    </div>
                    <input
                      id={`usage-${row.key}`}
                      type="range"
                      min={0}
                      max={row.max}
                      step={row.step}
                      value={usage[row.key]}
                      onChange={(e) =>
                        setUsage((prev) => ({ ...prev, [row.key]: Number(e.target.value) }))
                      }
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-400 outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-indigo-400 [&::-webkit-slider-thumb]:to-cyan-300 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Estimated credits
              </p>
              <p className="mt-2 text-4xl font-semibold tabular-nums tracking-tight text-gradient">
                {estimate.toLocaleString()}
              </p>
              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Suggested plan</p>
                <p className="mt-1 text-xl font-semibold text-white">{recommended.name}</p>
                <p className="mt-1 text-sm text-zinc-400">
                  ${recommended.price}/mo · {recommended.credits.toLocaleString()} credits
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Assurances */}
        <Reveal className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-400">
            {PRICING_ASSURANCES.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
