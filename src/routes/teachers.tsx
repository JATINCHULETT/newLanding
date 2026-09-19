import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck2,
  CheckCircle2,
  Clock4,
  Compass,
  Eye,
  FileCheck2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { cn } from "@/lib/utils";
import { openExpertModal } from "@/components/site/ExpertConsultationModal";

const TITLE = "Jaagr for Teachers: Classroom Wellbeing Insights with Zero Extra Workload";
const DESCRIPTION =
  "Equip teachers with simple, non-clinical classroom wellbeing insights and ready-to-use strategies that fit naturally into the existing school timetable.";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TeachersPage,
});

const STRATEGIES = [
  {
    id: "pre-exam",
    title: "Before High-Stakes Assessments",
    category: "Pre-Exam Grounding",
    duration: "2 minutes",
    instructions:
      "Run the Box Breathing Spark or 'Feet on the Floor' physical grounding before handing out question papers to lower acute adrenaline and steady student focus.",
  },
  {
    id: "post-break",
    title: "Post-Recess Restlessness",
    category: "Transition Reset",
    duration: "90 seconds",
    instructions:
      "Use the 'Sound Horizon' auditory reset: ask students to close their eyes and count 3 distinct sounds outside the classroom before returning attention to the blackboard.",
  },
  {
    id: "withdrawal",
    title: "Noticing Quiet Withdrawal",
    category: "Early Support",
    duration: "1-on-1 check-in",
    instructions:
      "If a student records consecutive 'Low' check-ins, use the non-invasive prompt: 'I noticed your energy has been quiet this week. No pressure, just wanted you to know I am here if you need anything.'",
  },
];

const TEACHER_PILLARS = [
  {
    icon: Eye,
    title: "Jaagr Insights",
    desc: "Identify students who may need additional support through simple classroom wellbeing insights.",
    badge: "Early Identification",
  },
  {
    icon: Compass,
    title: "Guided Support",
    desc: "Access practical, classroom-ready strategies that help teachers respond with confidence.",
    badge: "Classroom Ready",
  },
  {
    icon: Clock4,
    title: "Built Into The School Day",
    desc: "Designed to fit naturally into existing routines with no additional workload.",
    badge: "Zero Extra Workload",
  },
];

export function TeachersPage() {
  const [selectedStrategy, setSelectedStrategy] = useState(STRATEGIES[0]!);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pb-20 sm:pb-24">
        {/* HERO SECTION */}
        <section className="veil relative overflow-hidden pt-20 pb-16 sm:pt-24 lg:pt-28 lg:pb-24">
          <OrganicDecorations />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-8 h-80 w-80 rounded-full bg-mint/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-28 -top-8 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />

          <div className="shell relative z-10 text-center max-w-4xl mx-auto">
            <Reveal>
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-mint-foreground">
                  <BookOpen className="h-3.5 w-3.5" /> Jaagr for Teachers
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Classroom emotional insight, with a{" "}
                <span className="text-gradient">clear, practical next step.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
                Teachers notice subtle changes in students long before a crisis. Jaagr gives your
                staff simple classroom-level signals and 2-minute strategies to respond with
                confidence, without adding a single minute of grading or admin work.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://app.jaagrmind.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#strategies"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Explore Classroom Strategies
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground border-t border-border/70 pt-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-mint" /> 60-Second Homeroom Integration
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" /> CBSE &amp; NEP 2020 Aligned
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarCheck2 className="h-4 w-4 text-mint" /> Non-Clinical &amp; Safe
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THREE CORE TEACHER PILLARS */}
        <section className="relative py-24 lg:py-28 bg-secondary/30 border-y border-border/60">
          <div className="shell">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>Fits the timetable you already have</Eyebrow>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Designed for real school life: Teachers
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Simple for teachers. Actionable in classrooms. Zero grading paperwork.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {TEACHER_PILLARS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal key={b.title} delay={i * 0.1}>
                    <div className="surface flex flex-col h-full rounded-3xl p-7 hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/20 text-mint-foreground">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-bold text-muted-foreground uppercase tracking-wider">
                          {b.badge}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold">{b.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE STRATEGY SELECTOR */}
        <section id="strategies" className="relative py-24 lg:py-32">
          <div className="shell max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center">
                <Eyebrow>Classroom Tool</Eyebrow>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
                  Practical strategies for real school moments
                </h2>
                <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
                  Select a common classroom situation to see the exact 2-minute strategy Jaagr
                  equips teachers with.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {STRATEGIES.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedStrategy(st)}
                  className={cn(
                    "rounded-2xl p-5 text-left border transition-all",
                    selectedStrategy.id === st.id
                      ? "border-primary bg-card shadow-lg ring-2 ring-primary/30"
                      : "border-border bg-card/60 hover:bg-secondary text-muted-foreground hover:text-foreground",
                  )}
                >
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">
                    {st.category}
                  </p>
                  <p className="mt-2 text-sm font-bold text-foreground">{st.title}</p>
                  <span className="mt-3 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[0.7rem] font-semibold text-muted-foreground">
                    {st.duration}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-mint">
                    Strategy Detail
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {selectedStrategy.title}
                  </h3>
                </div>
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold">
                  {selectedStrategy.duration}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  How to execute with your class:
                </p>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground">
                  {selectedStrategy.instructions}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative py-20 bg-primary/10 border-t border-primary/20 text-center">
          <div className="shell max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground">
              Empower your school&apos;s teachers today
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Schedule a 20-minute school demonstration to see how Jaagr supports your staff.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <button
                type="button"
                onClick={openExpertModal}
                className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform hover:scale-105 cursor-pointer"
              >
                Request A Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
