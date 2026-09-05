import { useRef } from "react";
import { EyeOff, HeartHandshake, Radar } from "lucide-react";
import { Eyebrow, Reveal, TiltCard } from "@/lib/motion-primitives";
import { useGsapParallax } from "@/lib/use-gsap-parallax";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const TRUTHS = [
  {
    icon: EyeOff,
    title: "Students don't always ask for help",
    body: "Academic pressure, comparison, social anxiety, friendships, isolation and digital stress can remain invisible.",
  },
  {
    icon: HeartHandshake,
    title: "Teachers need practical support",
    body: "Teachers care deeply, but they need clear guidance to recognise concerns and respond appropriately.",
  },
  {
    icon: Radar,
    title: "Schools need earlier visibility",
    body: "Schools often see problems only after they become visible in behaviour, attendance or performance.",
  },
];

const FLOW = ["Invisible signals", "Early notice", "Earlier support"];

export function ProblemSection() {
  const scope = useRef<HTMLElement>(null);
  useGsapParallax(scope);

  return (
    <section
      id="why-jaagr"
      ref={scope}
      data-parallax-scene
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <OrganicDecorations showBottomRightBlob={false} />
      <div
        aria-hidden
        data-parallax="0.3"
        className="pointer-events-none absolute right-8 top-24 hidden h-24 w-24 rounded-[38%_62%_54%_46%/48%_38%_62%_52%] bg-lilac/60 lg:block"
      />

      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>The gap in most schools</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              A child&apos;s emotional state is invisible to most schools.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-muted-foreground">
              The students who need support don&apos;t always ask for it — and
              by the time a school notices, the moment for gentle, early help
              has often passed.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TRUTHS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <article className="surface lift flex h-full flex-col gap-4 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <t.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-stretch gap-3 rounded-3xl border border-border bg-secondary/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            {FLOW.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-4">
                <div className="flex flex-1 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card text-xs font-bold text-primary shadow-[var(--shadow-soft)]">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary-foreground">
                    {step}
                  </span>
                </div>
                {i < FLOW.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 bg-primary/25 sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
