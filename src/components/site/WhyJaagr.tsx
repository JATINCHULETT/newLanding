import { BarChart3, CalendarCheck, Radar, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal, TiltCard } from "@/lib/motion-primitives";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const CARDS = [
  {
    icon: Radar,
    title: "Early Detection",
    body: "Identify emotional challenges before they escalate.",
  },
  {
    icon: CalendarCheck,
    title: "Daily Skill Building",
    body: "Students build focus, confidence and resilience through daily practice.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    body: "Clear school reports that enable timely support.",
  },
  {
    icon: ShieldCheck,
    title: "Student-First Privacy",
    body: "Secure systems designed for safe student engagement.",
  },
];

export function WhyJaagr() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <OrganicDecorations showLeftMiddleOrnament={false} />
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>The case for Jaagr</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              Why forward-thinking schools choose JaagrMind
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <TiltCard className="h-full">
                <article className="surface lift flex h-full flex-col gap-4 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <c.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="hand mx-auto mt-14 max-w-2xl text-center text-2xl text-primary sm:text-3xl">
            Jaagr combines emotional skill building with school intelligence in one unified system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
