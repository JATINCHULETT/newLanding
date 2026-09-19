import { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  FileText,
  FolderOpen,
  GraduationCap,
  HelpCircle,
  Layers,
  MapPin,
  Plus,
  QrCode,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { EnrollmentChart } from "./EnrollmentChart";

interface SchoolDashboardProps {
  onSelectStudent: () => void;
}

export function SchoolDashboard({ onSelectStudent }: SchoolDashboardProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="w-full bg-card text-card-foreground p-4 sm:p-6 lg:p-8 space-y-6">
      {/* 1. Header with Institution Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/50">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Oakwood High School
            </h3>
            <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-secondary text-secondary-foreground border border-border/70 tracking-wider">
              OAKWOOD
            </span>
            <span className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-muted/50 rounded-md border border-border/40">
              1e6ec13e...070b
            </span>
            <span className="px-2 py-0.5 text-[11px] font-semibold text-primary bg-primary/10 rounded-md border border-primary/20">
              Main Campus
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
            <span>Welcome back,</span>
            <strong className="text-foreground font-semibold">Oakwood Admin</strong>
            <span>(School Administrator)</span>
            <span>•</span>
            <span className="inline-flex items-center gap-0.5">
              <MapPin className="w-3 h-3 text-muted-foreground" /> Bangalore
            </span>
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
          >
            <Layers className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Add Satellite Branch</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
          >
            <Settings className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Campus Settings</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Active Check-ins</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">4</span>
          </button>
        </div>
      </div>

      {/* 2. Top Metrics Cards (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Enrolled Students */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs hover:border-primary/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-1">
              Enrolled Students
              <HelpCircle className="w-3 h-3 opacity-60" />
            </span>
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">11</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs text-primary font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Longitudinal profiles</span>
          </div>
        </div>

        {/* Teacher & Class Access */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs hover:border-primary/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-1">
              Teacher & Class Access
              <HelpCircle className="w-3 h-3 opacity-60" />
            </span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">0</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            <span>Assigned class teachers</span>
          </div>
        </div>

        {/* Active Check-ins */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs hover:border-primary/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-1">
              Active Check-Ins
              <HelpCircle className="w-3 h-3 opacity-60" />
            </span>
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold text-foreground">4</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            <span>Psychological vectors</span>
          </div>
        </div>

        {/* Academic Cycle */}
        <div className="p-4 rounded-xl border border-border/80 bg-background/80 shadow-xs hover:border-primary/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-1">
              Academic Cycle
              <HelpCircle className="w-3 h-3 opacity-60" />
            </span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-foreground">AY 2026-27</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Active Session</span>
          </div>
        </div>
      </div>

      {/* 3. Quick Actions Toolbar */}
      <div className="rounded-xl border border-border/70 bg-background/60 p-3">
        <div className="flex items-center gap-2 mb-2 px-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Quick Actions
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            <Layers className="w-3 h-3 text-muted-foreground" />
            <span>Add Satellite Campus</span>
          </button>

          {/* Interactive Trigger to Student Dossier */}
          <button
            type="button"
            onClick={onSelectStudent}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg border-2 border-primary bg-primary/10 text-primary shadow-xs hover:bg-primary hover:text-primary-foreground transition-all group"
          >
            <FolderOpen className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground" />
            <span>Student Dossiers (Inspect Aarav)</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full bg-primary/20 group-hover:bg-white/20 text-[10px]">
              Live
            </span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            <Plus className="w-3 h-3 text-muted-foreground" />
            <span>Add / Manage Students</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            <TrendingUp className="w-3 h-3 text-muted-foreground" />
            <span>Class Promotions & AY Rollover</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            <QrCode className="w-3 h-3 text-muted-foreground" />
            <span>Check-In Links & QR</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            <HelpCircle className="w-3 h-3 text-muted-foreground" />
            <span>Support Desk</span>
          </button>
        </div>
      </div>

      {/* 4. Two Column Operational Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Grade-wise Enrollment Bar Chart */}
        <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-background/70 p-5 shadow-xs flex flex-col justify-between">
          <EnrollmentChart onSelectStudent={onSelectStudent} />
        </div>

        {/* Right Column (5 cols): Operational Telemetry & Readiness */}
        <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-background/70 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-border/40">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <h4 className="text-sm font-bold text-foreground tracking-tight">
                  Operational Telemetry & Readiness
                </h4>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Active
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Academic rollover jobs, student check-in readiness, and system alerts.
            </p>
          </div>

          {/* Telemetry Items */}
          <div className="space-y-3">
            {/* Item 1 */}
            <div className="p-3 rounded-xl border border-border/60 bg-card/60 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  Academic Year Promotions
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-secondary text-secondary-foreground">
                  Current
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                No pending rollover schedules. Class rosters are up to date for the current academic session.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-3 rounded-xl border border-border/60 bg-card/60 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  Wellness Check-In Instruments
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  4 Published
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Active instrument: &quot;Senior Scholar Mindset &amp; Stamina Reflection (Grades 11-12)&quot;. Students access via direct links and QR codes.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-3 rounded-xl border border-border/60 bg-card/60 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Student Access Identity
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Configured
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                System UUIDs are auto-generated for security. Students identify using their School Roll Number / Access ID during check-ins.
              </p>
            </div>
          </div>

          {/* Footer Support link */}
          <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
            <span className="text-[11px]">Need curriculum or technical assistance?</span>
            <button
              type="button"
              className="text-[11px] font-semibold text-primary hover:underline"
            >
              Open Support Ticket →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
