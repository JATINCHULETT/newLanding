import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const STEPS = [
  {
    letter: "J",
    name: "Joint",
    body: "The whole school moves together: leadership, teachers and students aligned around one emotional culture.",
  },
  {
    letter: "A",
    name: "Affective Awareness",
    body: "Students learn to recognise and understand their emotions clearly.",
  },
  {
    letter: "A",
    name: "Activation",
    body: "Students practise simple, practical regulation tools: usable skills, not theory.",
  },
  {
    letter: "G",
    name: "Growth",
    body: "Healthy emotional release, reflection and repeated practice prevent pressure from building.",
  },
  {
    letter: "R",
    name: "Reinforcement",
    body: "Consistent repetition turns emotional skills into habits, and habits into resilience.",
  },
];

function Step({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "start 42%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <motion.li ref={ref} style={{ opacity, x }} className="relative pl-16 sm:pl-24">
      <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 font-display text-xl font-extrabold text-primary sm:h-16 sm:w-16 sm:text-3xl">
        {step.letter}
      </span>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-foreground/70">
        Step {index + 1}
      </p>
      <h3 className="mt-1.5 text-xl font-bold sm:text-2xl">{step.name}</h3>
      <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {step.body}
      </p>
    </motion.li>
  );
}

export function JAAGRFramework() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <OrganicDecorations />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-secondary/60 to-transparent"
      />
      <div className="shell relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>The Jaagr Mind way</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              Emotional strength is built.
              <span className="block text-gradient">Not just talked about.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-muted-foreground">
              Think of J.A.A.G.R as installing an emotional fitness system inside your school.
            </p>
          </Reveal>
        </div>

        <div ref={trackRef} className="relative mt-16">
          <span
            aria-hidden
            className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-border sm:left-8 sm:block"
          />
          <motion.span
            aria-hidden
            style={{ height }}
            className="absolute left-6 top-2 hidden w-px origin-top bg-primary sm:left-8 sm:block"
          />
          <ol className="flex flex-col gap-12 sm:gap-16">
            {STEPS.map((s, i) => (
              <Step key={s.name} step={s} index={i} />
            ))}
          </ol>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-16 rounded-3xl border border-primary/20 bg-primary/6 px-6 py-6 text-center text-lg font-semibold text-secondary-foreground sm:text-xl">
            Structured emotional training built into daily school life.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
