import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap, Heart, School, Users, UserCog } from "lucide-react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";

const NODES = [
  { icon: GraduationCap, label: "Students", note: "Daily skills" },
  { icon: Users, label: "Teachers", note: "Practical support" },
  { icon: Heart, label: "Counsellors", note: "Earlier pathways" },
  { icon: UserCog, label: "Parents", note: "Shared language" },
  { icon: School, label: "School Leaders", note: "Meaningful insights" },
];

export function SchoolEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="for-schools"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>One connected system</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              One school. One wellbeing system. Everyone supported.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-muted-foreground">
              JAAGR helps schools build a proactive wellbeing system — equipping
              students with practical skills, teachers with confidence, parents
              with guidance, and school leaders with meaningful insights.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          <span
            aria-hidden
            className="absolute left-[27px] top-6 h-[calc(100%-3rem)] w-px bg-border sm:left-1/2"
          />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute left-[27px] top-6 h-[calc(100%-3rem)] w-px origin-top bg-primary sm:left-1/2"
          />

          <ul className="flex flex-col gap-5">
            {NODES.map((n, i) => (
              <Reveal as="li" key={n.label} delay={i * 0.08}>
                <div
                  className={`flex items-center gap-4 sm:w-1/2 ${
                    i % 2 === 0
                      ? "sm:ml-auto sm:pl-10"
                      : "sm:mr-auto sm:flex-row-reverse sm:pr-10 sm:text-right"
                  }`}
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-[var(--shadow-soft)]">
                    <n.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-base font-bold">{n.label}</p>
                    <p className="text-sm text-muted-foreground">{n.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
