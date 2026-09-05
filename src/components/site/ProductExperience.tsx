import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Activity, Lock, Sparkles, TrendingUp } from "lucide-react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { cn } from "@/lib/utils";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

type TabId = "student" | "teacher" | "school";

const TABS: { id: TabId; label: string }[] = [
  { id: "student", label: "Student" },
  { id: "teacher", label: "Teacher" },
  { id: "school", label: "School" },
];

const COPY: Record<TabId, { title: string; body: string; points: string[] }> = {
  student: {
    title: "A calm, 60-second daily habit",
    body: "Students check in with JAAGR Pulse, practise one Spark, and keep moving along their Journey. Self-awareness becomes routine, not an event.",
    points: ["Daily Pulse check-in", "One Spark activity", "Journey progress"],
  },
  teacher: {
    title: "Classroom insight, with a clear next step",
    body: "Teachers see simple classroom-level wellbeing signals alongside practical, ready-to-use strategies — so noticing something always has a next step.",
    points: [
      "Classroom insights",
      "Guided support",
      "Practical recommendations",
    ],
  },
  school: {
    title: "One view of the whole school's wellbeing",
    body: "Leadership sees aggregated patterns, participation and programme implementation across grades — enough to act, without exposing individual students.",
    points: [
      "Aggregated insights",
      "Wellbeing trends",
      "Implementation & reporting",
    ],
  },
};

function StudentPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-background p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          JAAGR Pulse
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          How are you feeling today?
        </p>
        <div className="mt-4 flex gap-2">
          {["Low", "Okay", "Good", "Great"].map((m, i) => (
            <span
              key={m}
              className={cn(
                "flex-1 rounded-xl px-2 py-3 text-center text-xs font-semibold",
                i === 2
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground",
              )}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-background p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          JAAGR Spark
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/40 text-mint-foreground">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold">Box breathing</p>
            <p className="text-xs text-muted-foreground">
              60 seconds · focus &amp; calm
            </p>
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full bg-secondary">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-2 rounded-full bg-primary"
          />
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-background p-5 sm:col-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          JAAGR Journey
        </p>
        <div className="mt-4 flex items-center gap-2">
          {["Notice", "Name", "Regulate", "Reflect", "Repeat"].map((s, i) => (
            <div key={s} className="flex flex-1 flex-col items-center gap-2">
              <span
                className={cn(
                  "h-2.5 w-full rounded-full",
                  i < 3 ? "bg-primary" : "bg-secondary",
                )}
              />
              <span className="text-[0.65rem] font-medium text-muted-foreground">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeacherPanel() {
  const rows = [
    { label: "Class 8-B engagement", value: 78 },
    { label: "Check-in participation", value: 91 },
    { label: "Students needing a follow-up", value: 24 },
  ];
  return (
    <div className="space-y-4">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className="rounded-2xl border border-border bg-background p-5"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{r.label}</span>
            <span className="font-bold text-primary">{r.value}%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-secondary">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${r.value}%` }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-2 rounded-full bg-primary"
            />
          </div>
        </div>
      ))}
      <div className="rounded-2xl border border-mint/50 bg-mint/15 p-5">
        <p className="text-sm font-semibold text-mint-foreground">
          Suggested classroom strategy
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Open the period with a two-minute grounding routine before assessments
          this week.
        </p>
      </div>
    </div>
  );
}

function SchoolPanel() {
  const bars = [42, 58, 51, 66, 74, 69, 81];
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-background p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">School wellbeing trend</p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-mint-foreground">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden /> Improving
          </span>
        </div>
        <div className="mt-5 flex h-32 items-end gap-2">
          {bars.map((b, i) => (
            <motion.span
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${b}%` }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 rounded-t-lg bg-primary/70"
            />
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { k: "Grades active", v: "6-12" },
          { k: "Participation", v: "88%" },
          { k: "Reports ready", v: "Termly" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-border bg-background p-5"
          >
            <p className="text-xl font-extrabold text-primary">{s.v}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductExperience() {
  const [tab, setTab] = useState<TabId>("student");

  return (
    <section
      id="for-students"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <OrganicDecorations />
      <div className="shell relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Product experience</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.9rem]">
              Three experiences. One connected system.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Choose an experience"
            className="mt-10 inline-flex rounded-full border border-border bg-card p-1.5"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-7",
                  tab === t.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="exp-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${tab}-copy`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-2xl font-bold leading-snug">
                {COPY[tab].title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {COPY[tab].body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {COPY[tab].points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <Lock
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                <span>
                  <strong className="text-foreground">
                    Student-first privacy.
                  </strong>{" "}
                  Schools see meaningful aggregated patterns and programme-level
                  insights — never invasive individual mental-health logs.
                </span>
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="surface p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Activity className="h-4 w-4 text-primary" aria-hidden />
              {tab} view
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                {tab === "student" && <StudentPanel />}
                {tab === "teacher" && <TeacherPanel />}
                {tab === "school" && <SchoolPanel />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
