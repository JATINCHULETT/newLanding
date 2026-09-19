import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Eye,
  FileSpreadsheet,
  FolderOpen,
  LayoutDashboard,
  Lock,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { JaagrThreeLines, OrganicDecorations } from "@/components/site/OrganicDecorations";
import { PlatformBrowser } from "./PlatformBrowser";

export function PlatformExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="platform-experience"
      ref={containerRef}
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32 bg-background border-y border-border/60"
    >
      <OrganicDecorations />

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                The JaagrMind Platform
              </span>
              <JaagrThreeLines className="h-4 w-6 text-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.15]">
              See what your school sees.{" "}
              <span className="text-gradient block mt-1">
                A clearer picture of every student.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From school-wide readiness to individual student insights, JaagrMind turns simple 60-second check-ins into longitudinal intelligence for educators.
            </p>
          </Reveal>

          {/* Quick Pillars Microcopy */}
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                School-wide visibility
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Patterns, not snapshots
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Context before you act
              </span>
            </div>
          </Reveal>
        </div>

        {/* Interactive Platform Browser Showcase */}
        <Reveal delay={0.2} className="mt-12 sm:mt-16">
          <PlatformBrowser initialView="school" />
        </Reveal>

        {/* Value Proposition Under the Browser */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xs space-y-2">
            <div className="p-2 w-fit rounded-xl bg-primary/10 text-primary mb-3">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-foreground">
              Longitudinal Intelligence
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every morning check-in automatically aggregates into grade-level and student-level trends without teachers having to grade or enter manual data.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xs space-y-2">
            <div className="p-2 w-fit rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-foreground">
              Actionable Educator Playbooks
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instead of raw numbers, teachers receive tailored 2-minute behavioral micro-strategies for transition anxiety, exam stamina, and focus friction.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xs space-y-2">
            <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-foreground">
              Zero-Surveillance Trust
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              100% student-first privacy with anonymized transfer continuity and zero invasive reading of diary entries. Trust is the foundation of genuine reflection.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/#book-demo"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-105 hover:bg-primary/90"
          >
            <span>Request a Live Demo for Your School</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
