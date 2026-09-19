import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FolderOpen,
  Globe,
  LayoutDashboard,
  Lock,
  RotateCw,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SchoolDashboard } from "./SchoolDashboard";
import { StudentProfile } from "./StudentProfile";
import { StudentMobileAppView } from "./StudentMobileAppView";

export type PlatformView = "school" | "student" | "mobile";

export function PlatformBrowser({
  initialView = "school",
}: {
  initialView?: PlatformView;
}) {
  const [currentView, setCurrentView] = useState<PlatformView>(initialView);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* View Switcher Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="inline-flex items-center p-1 rounded-xl bg-card border border-border/80 shadow-xs">
          <button
            type="button"
            onClick={() => setCurrentView("school")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currentView === "school"
                ? "bg-primary text-primary-foreground shadow-xs scale-102"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>1. School Dashboard</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView("student")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currentView === "student"
                ? "bg-primary text-primary-foreground shadow-xs scale-102"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>2. Student Profile (Aarav)</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
              Class 10A
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView("mobile")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currentView === "mobile"
                ? "bg-primary text-primary-foreground shadow-xs scale-102"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>3. Student Mobile Habit</span>
          </button>
        </div>

        {/* Live status badge */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground">Interactive Demo</span>
          <span>•</span>
          <span>Oakwood High School AY 2026-27</span>
        </div>
      </div>

      {/* Realistic Browser Window Mockup */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-border/90 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden transition-all">
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/70 dark:bg-muted/40 border-b border-border/80 select-none backdrop-blur-sm">
          {/* Traffic Lights / Window Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40 inline-block hover:opacity-80 transition-opacity cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40 inline-block hover:opacity-80 transition-opacity cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/40 inline-block hover:opacity-80 transition-opacity cursor-pointer" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-background/80 border border-border/80 text-xs text-muted-foreground shadow-2xs">
              <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="text-foreground font-mono font-medium truncate">
                https://jaagrmind.app/console/oakwood-high
                {currentView === "student" ? "/students/101-aarav-sharma" : currentView === "mobile" ? "/mobile-preview" : ""}
              </span>
              <RotateCw className="w-3 h-3 text-muted-foreground/60 shrink-0 hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Right utilities */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3" /> CBSE &amp; NEP Aligned
            </span>
          </div>
        </div>

        {/* View Content Area */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentView === "school" && (
              <motion.div
                key="school-view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <SchoolDashboard onSelectStudent={() => setCurrentView("student")} />
              </motion.div>
            )}

            {currentView === "student" && (
              <motion.div
                key="student-view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <StudentProfile onBackToDashboard={() => setCurrentView("school")} />
              </motion.div>
            )}

            {currentView === "mobile" && (
              <motion.div
                key="mobile-view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <StudentMobileAppView onOpenDossier={() => setCurrentView("student")} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
