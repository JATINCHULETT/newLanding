import { useState } from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Building2,
  CheckCircle2,
  Copy,
  ExternalLink,
  Flame,
  Folder,
  Lightbulb,
  Sparkles,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import { StudentVsClassRadar } from "./StudentVsClassRadar";

interface StudentProfileProps {
  onBackToDashboard: () => void;
}

export function StudentProfile({ onBackToDashboard }: StudentProfileProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (title: string) => {
    setCopiedLink(title);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="w-full bg-card text-card-foreground p-4 sm:p-6 lg:p-8 space-y-6 relative"
    >
      {/* 1. Header with Student Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <Folder className="w-4 h-4" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Aarav Sharma
            </h3>
            <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-secondary text-secondary-foreground border border-border/60">
              ID: 101
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3 h-3" />
              The Deep Pacer
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Class 10th - Section A • Oakwood High School
          </p>
        </div>

        {/* Back navigation */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to School Dashboard</span>
          </button>
          <button
            type="button"
            onClick={onBackToDashboard}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title="Close Dossier"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Key Trait Score Cards (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Focus & Cognitive */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground block">
            Focus &amp; Cognitive
          </span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">80</span>
            <span className="text-sm text-muted-foreground font-semibold">/100</span>
          </div>
          <p className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> High Sustained Flow
          </p>
        </div>

        {/* Academic Tenacity */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground block">
            Academic Tenacity
          </span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">82</span>
            <span className="text-sm text-muted-foreground font-semibold">/100</span>
          </div>
          <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
            <Flame className="w-3 h-3" /> Strong Exam Drive
          </p>
        </div>

        {/* Stress Adaptability */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground block">
            Stress Adaptability
          </span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">64</span>
            <span className="text-sm text-muted-foreground font-semibold">/100</span>
          </div>
          <p className="mt-1 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <TrendingDown className="w-3 h-3" /> Internalized Stress
          </p>
        </div>

        {/* Momentum Trend */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground block">
            Momentum Trend
          </span>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">— Stable</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">4 Total Check-ins</p>
        </div>
      </div>

      {/* 3. Middle Section: Radar Chart (Student vs Class) + Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (6 cols): Radar Spider Chart */}
        <div className="lg:col-span-6 rounded-2xl border border-border/80 bg-background/70 p-5 shadow-xs flex flex-col items-center justify-center">
          <StudentVsClassRadar />
        </div>

        {/* Right Column (6 cols): Behavioral Friction & Counselor Playbook */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4">
          {/* Primary Behavioral Friction Point (Orange box) */}
          <div className="p-4 sm:p-5 rounded-2xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 space-y-2">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Primary Behavioral Friction Point
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              Routine Transition Friction
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Demonstrates low activation friction and balanced emotional regulation during structured classes, but experiences mild anxiety spikes right before sudden testing formats.
            </p>
          </div>

          {/* Tailored Teacher / Counselor Playbook (Blue box) */}
          <div className="p-4 sm:p-5 rounded-2xl border border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20 space-y-2">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <Lightbulb className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Tailored Teacher / Counselor Playbook
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground font-medium leading-relaxed">
              &quot;Provide self-directed inquiry challenges and appoint to collaborative anchor roles in peer study clusters.&quot;
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                Strategy: 4-4-4-4 Box Breathing
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                Counselor Review: Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Assigned Check-Ins & Evaluation Status Table */}
      <div className="rounded-2xl border border-border/80 bg-background/70 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border/40">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-bold text-foreground tracking-tight">
              Assigned Check-ins &amp; Evaluation Status
            </h4>
          </div>
          <span className="text-xs font-semibold text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
            2 of 2 Completed
          </span>
        </div>

        {/* Table representation */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="pb-2 font-semibold">Check-in Title &amp; Tier</th>
                <th className="pb-2 font-semibold">Target Cohort</th>
                <th className="pb-2 font-semibold">Current Status</th>
                <th className="pb-2 font-semibold text-center">Attempts</th>
                <th className="pb-2 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {/* Row 1 */}
              <tr className="group hover:bg-muted/30 transition-colors">
                <td className="py-3 pr-4">
                  <p className="font-semibold text-foreground text-xs">
                    Secondary Student Rhythm &amp; Resilience Check-In
                  </p>
                  <span className="text-[11px] text-muted-foreground">Secondary</span>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">Grades 9, 10</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3 h-3" /> Completed
                    </span>
                    <span className="font-medium text-foreground text-[11px]">
                      Seeker (Support Recommended)
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">
                    Score: 23 pts • 9/15/2026
                  </span>
                </td>
                <td className="py-3 pr-4 text-center font-mono font-semibold">2</td>
                <td className="py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleCopy("Rhythm & Resilience")}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md border border-border bg-background hover:bg-secondary text-foreground transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedLink === "Rhythm & Resilience" ? "Copied!" : "Copy Link"}</span>
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="group hover:bg-muted/30 transition-colors">
                <td className="py-3 pr-4">
                  <p className="font-semibold text-foreground text-xs">
                    Mind Weather &amp; Cognitive Focus Check-In
                  </p>
                  <span className="text-[11px] text-muted-foreground">Cognitive Tier</span>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">Grades 6 to 12</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3 h-3" /> Completed
                    </span>
                    <span className="font-medium text-foreground text-[11px]">pacer</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground block mt-0.5">
                    Score: 82 pts • 9/16/2026
                  </span>
                </td>
                <td className="py-3 pr-4 text-center font-mono font-semibold">2</td>
                <td className="py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleCopy("Cognitive Focus")}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md border border-border bg-background hover:bg-secondary text-foreground transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedLink === "Cognitive Focus" ? "Copied!" : "Copy Link"}</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Longitudinal Record & Academic Transfer Warning */}
      <div className="p-4 rounded-2xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
          <Building2 className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h5 className="text-xs font-bold text-foreground flex items-center gap-2">
            <span>Academic Transfer Records Detected</span>
            <span className="px-2 py-0.2 rounded-full bg-purple-500/15 text-purple-700 dark:text-purple-300 text-[10px] font-semibold">
              Counseling Continuity
            </span>
          </h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Historical records from student&apos;s previous school enrollment are retained for counseling continuity. Institutional identity is fully anonymized per Jaagr student-first privacy standards.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
