import { ArrowRight, Check } from "lucide-react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";

const SUPPORTS = [
  "Structured implementation",
  "Staff training",
  "Wellbeing initiatives",
  "Documentation",
  "Reporting",
  "Parent engagement",
  "School-level insights",
];

export function CBSESection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="shell">
        <div className="ink-panel relative overflow-hidden rounded-4xl px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-mint/15 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow tone="light">School readiness</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-indigo-foreground sm:text-4xl">
                  Build your school&apos;s wellbeing system with confidence.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-indigo-foreground/70">
                  Jaagr works alongside your existing wellbeing approach, giving your team the
                  structure, materials and records that school wellbeing initiatives ask for.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {SUPPORTS.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-foreground/15 bg-indigo-foreground/8 px-3.5 py-2 text-sm text-indigo-foreground/85"
                    >
                      <Check className="h-3.5 w-3.5 text-mint" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <a
                  href="#book-demo"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-indigo-foreground px-6 py-3.5 text-sm font-semibold text-indigo transition-transform duration-300 hover:-translate-y-0.5"
                >
                  See How Jaagr Supports Schools
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -left-4 top-6 h-full w-full rotate-[-4deg] rounded-3xl border border-indigo-foreground/10 bg-indigo-foreground/6" />
                <div className="relative rounded-3xl bg-card p-7 shadow-[var(--shadow-lift)]">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-primary">
                    School wellbeing record
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "Implementation plan",
                      "Staff training log",
                      "Term participation summary",
                      "Parent engagement record",
                      "Annual wellbeing review",
                    ].map((line, i) => (
                      <div key={line} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/40 text-mint-foreground">
                          <Check className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        <span className="text-sm text-foreground">{line}</span>
                        {i === 4 && (
                          <span className="ml-auto text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
                            Year end
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground">
                      Documentation your school can keep, share and build on.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
