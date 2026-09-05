import {
  Activity,
  BarChart3,
  Clock4,
  Compass,
  Eye,
  FileCheck2,
  MonitorSmartphone,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Eyebrow, Reveal, TiltCard } from "@/lib/motion-primitives";

const GROUPS = [
  {
    id: "for-students",
    audience: "Students",
    tint: "text-primary",
    items: [
      {
        icon: Sparkles,
        title: "JAAGR Sparks",
        body: "60-second neuroscience-informed, game-inspired activities that help students practise coping skills, emotional regulation and resilience.",
      },
      {
        icon: Activity,
        title: "JAAGR Pulse",
        body: "Daily emotional check-ins that encourage self-awareness and help students recognise and understand how they feel.",
      },
      {
        icon: Rocket,
        title: "JAAGR Journeys",
        body: "Personalised skill-building journeys that strengthen focus, confidence, healthy habits and lifelong stress management.",
      },
    ],
  },
  {
    id: "for-teachers",
    audience: "Teachers",
    tint: "text-mint-foreground",
    items: [
      {
        icon: Eye,
        title: "JAAGR Insights",
        body: "Identify students who may need additional support through simple classroom wellbeing insights.",
      },
      {
        icon: Compass,
        title: "Guided Support",
        body: "Access practical, classroom-ready strategies that help teachers respond with confidence.",
      },
      {
        icon: Clock4,
        title: "Built Into The School Day",
        body: "Designed to fit naturally into existing routines with no additional workload.",
      },
    ],
  },
  {
    id: "for-schools",
    audience: "School Leaders",
    tint: "text-primary",
    items: [
      {
        icon: BarChart3,
        title: "JAAGR Insights",
        body: "Monitor wellbeing trends across students, classrooms, grades and the entire school from one unified dashboard.",
      },
      {
        icon: FileCheck2,
        title: "CBSE-Ready Reporting",
        body: "Generate structured reports and documentation that support school wellbeing initiatives and requirements.",
      },
      {
        icon: MonitorSmartphone,
        title: "School Dashboard",
        body: "Track programme implementation, participation and impact from one place.",
      },
    ],
  },
];

export function RealSchoolLife() {
  return (
    <section id="for-teachers" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Fits the timetable you already have</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              Designed for real school life.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-muted-foreground">
              Easy for students. Simple for teachers. Valuable for schools.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {GROUPS.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <Reveal>
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-secondary-foreground">
                    {group.audience}
                  </h3>
                  <span className="h-px flex-1 bg-border" />
                </div>
              </Reveal>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <TiltCard className="h-full">
                      <article className="surface lift group relative h-full overflow-hidden p-7">
                        <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/8 transition-transform duration-500 group-hover:scale-125" />
                        <span
                          className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary ${group.tint}`}
                        >
                          <item.icon className="h-6 w-6" aria-hidden />
                        </span>
                        <h4 className="relative mt-5 text-lg font-bold">
                          {item.title}
                        </h4>
                        <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </article>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mt-16 max-w-3xl text-base text-muted-foreground">
            The student experience matters because it is what drives adoption
            and daily skill building — not because there happens to be an app.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
