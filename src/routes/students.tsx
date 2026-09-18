import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Compass,
  Heart,
  Lock,
  Moon,
  Rocket,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  Volume2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { JaagrThreeLines, OrganicDecorations } from "@/components/site/OrganicDecorations";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { cn } from "@/lib/utils";

import studentHeroImg from "@/assets/student-hero-banner.png";
import studentMindfulnessImg from "@/assets/student-mindfulness.jpg";
import studentFriendshipImg from "@/assets/students-friendship.jpg";

const TITLE = "Jaagr for Students: A Safe 60-Second Daily Emotional Fitness Habit";
const DESCRIPTION =
  "Daily 60-second check-ins, bite-sized calming exercises, and personalized journeys to help students navigate school stress, focus better, and feel stronger.";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: StudentsPage,
});

const PILLARS = [
  {
    icon: Activity,
    title: "Jaagr Pulse",
    badge: "Daily 60s Check-in",
    desc: "A quick, private daily moment to check in with yourself. Rate how you feel, pick the emotion, and track your patterns over the school term without judgment.",
    points: ["Quick 4-level mood check", "Name your exact feeling", "100% private to you"],
  },
  {
    icon: Sparkles,
    title: "Jaagr Sparks",
    badge: "Bite-Sized Calming",
    desc: "Gamified, 60-second neuroscience exercises you can use right before an exam, after a tough class, or when anxiety spikes.",
    points: ["Box breathing reset", "5-4-3-2-1 Sensory grounding", "Quick muscle release"],
  },
  {
    icon: Rocket,
    title: "Jaagr Journeys",
    badge: "Personal Skill Tracks",
    desc: "Follow guided paths to level up focus, build exam confidence, improve sleep routines, and navigate friendship drama with calm resilience.",
    points: ["Exam resilience pathway", "Focus & study habits", "Social confidence"],
  },
];

const FAQS = [
  {
    q: "Will my teachers or parents see my daily mood check-ins?",
    a: "Never. Your personal Pulse check-ins and notes are completely confidential. Schools and teachers only see anonymous, grade-wide patterns (e.g. 'Class 9 has high exam anxiety this week') so they can offer general support without invading your privacy.",
  },
  {
    q: "Is this therapy or counseling?",
    a: "No. Jaagr is emotional fitness, like a gym for your mind. It teaches you practical, everyday skills to handle stress, stay calm under pressure, and understand your own emotions before small worries become big problems.",
  },
  {
    q: "How much time does it take each day?",
    a: "Just 60 seconds. It is designed to fit smoothly into the start of your morning homeroom or zero period without adding any homework or pressure.",
  },
  {
    q: "What happens if I log a difficult emotion?",
    a: "Jaagr immediately suggests a micro-grounding tool (like slow box breathing or muscle release). If you ever need more support, it offers guidance on how to speak with your school counselor securely.",
  },
];

export function StudentsPage() {
  const [selectedMood, setSelectedMood] = useState<string>("Good");
  const [activeTab, setActiveTab] = useState<"pulse" | "spark">("pulse");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pb-20 sm:pb-24">
        {/* HERO SECTION WITH POSTER IMAGE & BRAND LINES */}
        <section className="veil relative overflow-hidden pt-20 pb-16 sm:pt-24 lg:pt-28 lg:pb-24">
          <OrganicDecorations />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-28 -top-8 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-8 h-80 w-80 rounded-full bg-mint/20 blur-3xl"
          />

          <div className="shell relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Headline & Intro */}
              <div className="lg:col-span-6 text-left">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      <Smile className="h-3.5 w-3.5" /> Jaagr for Students
                    </span>
                    <JaagrThreeLines className="h-5 w-7 text-primary/80 dark:text-mint" />
                  </div>
                </Reveal>

                <Reveal delay={0.06}>
                  <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
                    Every emotion is valid.{" "}
                    <span className="text-gradient block mt-2">
                      Making young minds emotionally aware.
                    </span>
                  </h1>
                </Reveal>

                <Reveal delay={0.12}>
                  <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                    School life is full of big moments: exams, expectations, friendships, and future
                    plans. Jaagr gives you a safe 60-second daily pause to understand how you feel,
                    calm your mind under pressure, and build lifelong emotional strength.
                  </p>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href="#interactive-demo"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
                    >
                      Try a 60-Second Check-in
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <Link
                      to="/"
                      hash="how-it-works"
                      className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                    >
                      How It Works
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground border-t border-border/70 pt-6">
                    <span className="flex items-center gap-1.5">
                      <Lock className="h-4 w-4 text-primary" /> 100% Student-First Privacy
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-mint" /> Safe & Non-Judgmental
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Heart className="h-4 w-4 text-primary" /> Zero Grading
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: High-Res Student Campaign Poster Image */}
              <div className="lg:col-span-6">
                <Reveal delay={0.1}>
                  <div className="relative mx-auto max-w-lg lg:max-w-none">
                    {/* Ambient Glow & Accent Spark Lines */}
                    <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-mint/20 to-primary/20 blur-xl opacity-75" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-2xl">
                      <img
                        src={studentHeroImg}
                        alt="Every emotion is valid - Making young minds emotionally aware with Jaagr Mind"
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-102"
                      />

                      {/* Interactive Floating Micro-Badges */}
                      <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-background/80 px-3.5 py-1.5 backdrop-blur-md text-[0.72rem] font-bold text-foreground shadow-lg flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>Daily 60s Pulse</span>
                      </div>

                      <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-background/85 px-4 py-2 backdrop-blur-md text-[0.75rem] font-bold text-foreground shadow-lg flex items-center gap-2">
                        <Lock className="h-3.5 w-3.5 text-mint" />
                        <span>100% Student Privacy</span>
                        <JaagrThreeLines className="h-4 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE EXPERIENCE PREVIEW WITH MINDFULNESS PHOTO */}
        <section
          id="interactive-demo"
          className="relative py-20 lg:py-28 bg-card/40 border-y border-border/60"
        >
          <div className="shell">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2">
                  <Eyebrow>Interactive Preview</Eyebrow>
                  <JaagrThreeLines className="h-4 w-5 text-mint" />
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  See what a 60-second check-in feels like
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Try the morning energy check-in or practice the pre-exam box breathing reset.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
              {/* Left Column: Interactive Check-in Simulator */}
              <div className="lg:col-span-7">
                {/* Selector tabs */}
                <div className="flex justify-start gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("pulse")}
                    className={cn(
                      "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                      activeTab === "pulse"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground hover:text-foreground",
                    )}
                  >
                    1. Jaagr Pulse (Check-in)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("spark")}
                    className={cn(
                      "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                      activeTab === "spark"
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground hover:text-foreground",
                    )}
                  >
                    2. Jaagr Spark (Calm Reset)
                  </button>
                </div>

                {/* Interactive Box */}
                <div className="rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-xl">
                  {activeTab === "pulse" ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                          Daily Morning Check-in
                        </p>
                        <JaagrThreeLines className="h-4 w-5 text-primary/70" />
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-foreground">
                        How is your energy feeling this morning?
                      </h3>

                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["Low", "Okay", "Good", "Great"].map((mood) => (
                          <button
                            key={mood}
                            type="button"
                            onClick={() => setSelectedMood(mood)}
                            className={cn(
                              "rounded-2xl p-4 text-center font-bold text-sm transition-all border",
                              selectedMood === mood
                                ? "border-primary bg-primary text-primary-foreground shadow-md scale-105"
                                : "border-border bg-secondary/50 text-foreground hover:bg-secondary",
                            )}
                          >
                            {mood}
                          </button>
                        ))}
                      </div>

                      <div className="mt-6 rounded-2xl bg-secondary/40 p-4 border border-border/70 text-xs text-muted-foreground">
                        <p className="font-semibold text-foreground">
                          Selected: <span className="text-primary font-bold">{selectedMood}</span>
                        </p>
                        <p className="mt-1">
                          {selectedMood === "Low" &&
                            "Acknowledging low energy is the first step to pacing your day gently. Try a quick deep breath before period 1."}
                          {selectedMood === "Okay" &&
                            "Steady and balanced! A 60-second focus Spark can help you transition into deep study mode."}
                          {selectedMood === "Good" &&
                            "A solid foundation! Channel your positive energy into creative learning and problem-solving."}
                          {selectedMood === "Great" &&
                            "High energy! You are ready to tackle tricky chapters, sports, or exam prep."}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="flex items-center justify-center gap-1.5">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">
                          60-Second Spark Exercise
                        </p>
                        <JaagrThreeLines className="h-3.5 w-4 text-mint" />
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-foreground">
                        Box Breathing Focus Reset
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Used by athletes and top performers to settle racing thoughts in 60 seconds.
                      </p>

                      <div className="my-6 flex flex-col items-center justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.25, 1.25, 1],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            times: [0, 0.25, 0.75, 1],
                            ease: "easeInOut",
                          }}
                          className="h-24 w-24 rounded-3xl bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold shadow-lg"
                        >
                          <Brain className="h-9 w-9 text-primary" />
                        </motion.div>
                        <p className="mt-4 text-xs font-semibold text-primary">
                          Inhale (4s) → Hold (4s) → Exhale (4s) → Rest (4s)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Real Student Mindfulness Photo */}
              <div className="lg:col-span-5">
                <Reveal delay={0.15}>
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl">
                    <img
                      src={studentMindfulnessImg}
                      alt="Student practicing 60-second mindful calm in library"
                      className="h-72 sm:h-80 w-full rounded-2xl object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-bold text-foreground">
                          Neuroscience in 60 Seconds
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Simple breathing and grounding habits that reduce physical cortisol response
                        before exam papers and oral tests.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="relative py-24 lg:py-32">
          <div className="shell">
            <div className="max-w-3xl">
              <Reveal>
                <div className="flex items-center gap-2">
                  <Eyebrow>Fits the student day</Eyebrow>
                  <JaagrThreeLines className="h-4 w-5 text-primary" />
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Designed for real school life: Students
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Three tools built specifically for students. 60-second neuroscience routines with
                  zero homework.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.1}>
                    <div className="surface flex flex-col h-full rounded-3xl p-7 hover:border-primary/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-bold text-muted-foreground uppercase tracking-wider">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.desc}
                      </p>

                      <ul className="mt-6 space-y-2 border-t border-border/80 pt-5 text-xs font-medium text-foreground/80">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-mint shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* REAL STUDENT WELLBEING & FRIENDSHIP SHOWCASE */}
        <section className="relative py-20 bg-secondary/30 border-t border-border">
          <div className="shell">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                    <img
                      src={studentFriendshipImg}
                      alt="Indian high school students smiling and talking together in corridor"
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 p-3.5 backdrop-blur-md border border-border/80 text-xs">
                      <p className="font-bold text-foreground">
                        Real peer support without awkwardness
                      </p>
                      <p className="text-muted-foreground text-[0.75rem] mt-0.5">
                        Students feel safer and communicate better when emotional vocabulary is a
                        normal part of the school day.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 text-left">
                <Reveal delay={0.1}>
                  <div className="flex items-center gap-2">
                    <Eyebrow>Emotional Fitness</Eyebrow>
                    <JaagrThreeLines className="h-4 w-5 text-primary" />
                  </div>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    A calmer, more confident school day
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Mental strength isn&apos;t about pretending everything is fine. It&apos;s about
                    recognizing when stress is rising, knowing which 60-second tool to use, and
                    feeling confident reaching out when things get heavy.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4">
                      <div className="rounded-xl bg-primary/10 p-2 text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">Before Exams & Tests</h4>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Quick breathing exercises slow your racing heart and restore executive
                          focus so you can recall what you studied.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4">
                      <div className="rounded-xl bg-mint/10 p-2 text-mint">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          Friendships & Confidence
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Learn how to set healthy boundaries, resolve conflicts calmly, and feel
                          secure in who you are.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT PRIVACY MANIFESTO */}
        <section className="relative py-20 bg-background border-t border-border">
          <div className="shell max-w-3xl text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Our Student Privacy Promise
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We believe students can only be honest with their emotions when they know they
              aren&apos;t being graded, judged, or monitored. Your individual logs are never
              revealed. Schools only see anonymous trends to provide better collective care.
            </p>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative py-24 lg:py-28 bg-card/30 border-t border-border">
          <div className="shell max-w-3xl">
            <Reveal>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Eyebrow>Common Questions</Eyebrow>
                  <JaagrThreeLines className="h-4 w-5 text-mint" />
                </div>
                <h2 className="mt-4 text-3xl font-extrabold">Got questions? We got answers.</h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-4">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="text-base font-bold text-foreground">{f.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative py-20 bg-primary/10 border-t border-primary/20 text-center">
          <div className="shell max-w-2xl mx-auto">
            <div className="flex justify-center mb-3">
              <JaagrThreeLines className="h-6 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold text-foreground">Want Jaagr at your school?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell your school counselor, principal, or homeroom teacher about Jaagr Mind.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/"
                hash="book-demo"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform hover:scale-105"
              >
                Request a School Pilot
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
