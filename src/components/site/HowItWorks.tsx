import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const PHASES = [
  {
    id: "prepare",
    label: "Phase 1",
    title: "Prepare",
    steps: [
      { name: "School Discovery", when: "Week 1" },
      { name: "Jaagr School Plan", when: "Week 2" },
      { name: "Staff Capability", when: "Month 1" },
    ],
  },
  {
    id: "activate",
    label: "Phase 2",
    title: "Activate",
    steps: [
      { name: "Jaagr Pulse", when: "Throughout the term" },
      { name: "Jaagr Spark", when: "Throughout the term" },
      { name: "Jaagr Journey", when: "Each term" },
      { name: "Jaagr Path", when: "Throughout the year" },
      { name: "Parent Engagement", when: "Each term" },
    ],
  },
  {
    id: "understand",
    label: "Phase 3",
    title: "Understand",
    steps: [
      { name: "Jaagr Insights", when: "Throughout the year" },
      { name: "Annual Wellbeing Review", when: "Year end" },
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <OrganicDecorations />
      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              From school readiness to everyday wellbeing.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-muted-foreground">
              One structured programme. One school year. Jaagr works alongside your school rather
              than becoming another programme teachers have to manage.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="surface p-7">
                <p className="hand text-2xl text-primary">One school year</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Three phases, sequenced around the academic calendar: prepare the school, activate
                  daily practice, then understand what changed.
                </p>
                <ul className="mt-6 space-y-3">
                  {PHASES.map((p) => (
                    <li key={p.id} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/12 text-xs text-primary">
                        {p.label.split(" ")[1]}
                      </span>
                      {p.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="relative space-y-12">
            <span
              aria-hidden
              className="absolute left-[15px] top-3 h-[calc(100%-2rem)] w-px bg-border"
            />
            {PHASES.map((phase, pi) => (
              <div key={phase.id} className="relative pl-12">
                <Reveal delay={pi * 0.05}>
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {pi + 1}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    {phase.label}
                  </p>
                  <h3 className="mt-1 text-2xl font-extrabold">{phase.title}</h3>
                </Reveal>

                <ul className="mt-5 space-y-3">
                  {phase.steps.map((s, i) => (
                    <Reveal as="li" key={s.name} delay={0.06 * i}>
                      <div className="surface lift flex items-center justify-between gap-4 px-5 py-4">
                        <span className="text-sm font-semibold">{s.name}</span>
                        <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-secondary-foreground">
                          {s.when}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-16 text-center text-xl font-bold sm:text-2xl">
            One framework. One school year.{" "}
            <span className="text-gradient">A stronger wellbeing culture.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
