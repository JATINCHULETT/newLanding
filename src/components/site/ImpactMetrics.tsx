import { Counter, Eyebrow, Reveal } from "@/lib/motion-primitives";

const METRICS = [
  { value: 10000, suffix: "+", label: "Students building emotional strength" },
  { value: 50, suffix: "+", label: "Schools implementing JaagrMind" },
  { value: 98, suffix: "%", label: "Schools continuing Jaagr after pilots" },
];

export function ImpactMetrics() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>Our impact so far</Eyebrow>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="surface flex h-full flex-col items-center gap-3 px-6 py-10 text-center">
                <p className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                  <Counter to={m.value} suffix={m.suffix} />
                </p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
            Additional outcome measures — emotional awareness, teacher
            confidence and focus — are tracked with partner schools and
            published as they are validated.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
