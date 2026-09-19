import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  ArrowRight,
  Flame,
  HeartHandshake,
  Lock,
  Smartphone,
  Sparkles,
  Wind,
} from "lucide-react";

import dashboardLightImg from "@/assets/JaagrMind-Mobile-Application/DashBoardLandingPage-LightMode.jpg";
import activitiesImg from "@/assets/JaagrMind-Mobile-Application/DashBoard-ActivitiesTab-LightMode.jpg";
import panicModeImg from "@/assets/JaagrMind-Mobile-Application/ShakeDevice-PanicMode-Breathing-2.jpg";
import digitalGardenImg from "@/assets/JaagrMind-Mobile-Application/Digital-Garden.jpg";
import journalImg from "@/assets/JaagrMind-Mobile-Application/DashBoard-JournalTab-LightMode.jpg";

interface MobileFeature {
  id: string;
  title: string;
  short: string;
  badge: string;
  desc: string;
  image: string;
  icon: typeof Sparkles;
}

const MOBILE_FEATURES: MobileFeature[] = [
  {
    id: "pulse",
    title: "60-Second Morning Pulse",
    short: "Daily Pulse",
    badge: "Student Check-in",
    desc: "Autonomous, non-judgmental mood check-in done before the first bell. Zero scoring, zero grading — purely psychological safety.",
    image: dashboardLightImg,
    icon: Activity,
  },
  {
    id: "sparks",
    title: "Neuroscience-Informed Sparks",
    short: "Micro-Sparks",
    badge: "Tactile Exercises",
    desc: "Bite-sized somatic micro-interventions: Scatter & Settle, Shift Balance, and Coin Scratch designed to ground overstimulated students.",
    image: activitiesImg,
    icon: Sparkles,
  },
  {
    id: "panic",
    title: "Shake-to-Calm Somatic Reset",
    short: "Panic Reset",
    badge: "Acute Stress Relief",
    desc: "When panic or exam anxiety strikes, shaking the device initiates guided 4-4-4-4 box breathing with haptic sensory feedback.",
    image: panicModeImg,
    icon: Wind,
  },
  {
    id: "garden",
    title: "Digital Garden of Resilience",
    short: "Growth Garden",
    badge: "Longitudinal Habits",
    desc: "A blooming personal visual metaphor that flourishes as students practice daily self-regulation and emotional awareness.",
    image: digitalGardenImg,
    icon: Flame,
  },
  {
    id: "journal",
    title: "AI-Assisted Private Journal",
    short: "Secure Journal",
    badge: "100% Confidential",
    desc: "Safe, encrypted reflection space with compassionate linguistic prompts to help students articulate complex feelings beyond frustration.",
    image: journalImg,
    icon: Lock,
  },
];

export function StudentMobileAppView({ onOpenDossier }: { onOpenDossier: () => void }) {
  const [activeTab, setActiveTab] = useState<string>("pulse");

  const current = MOBILE_FEATURES.find((f) => f.id === activeTab) || MOBILE_FEATURES[0];

  return (
    <div className="w-full bg-card text-card-foreground p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/50">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-primary/10 text-primary">
              <Smartphone className="w-4 h-4" />
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              JaagrMind Student Mobile Experience
            </h3>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              iOS &amp; Android App
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            How individual student check-ins generate longitudinal school intelligence without educator workload.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenDossier}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs self-start md:self-auto"
        >
          <span>See Resulting Student Dossier (Aarav)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Feature Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {MOBILE_FEATURES.map((f) => {
          const Icon = f.icon;
          const isActive = f.id === activeTab;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveTab(f.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs scale-102"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{f.short}</span>
            </button>
          );
        })}
      </div>

      {/* Showcase Grid: Smartphone Mockup on Left + Feature Intelligence on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Phone Frame mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[280px] sm:w-[310px] aspect-[9/19] rounded-[42px] p-3 bg-neutral-900 shadow-2xl border-4 border-neutral-800 ring-1 ring-white/10">
            {/* Dynamic Island / Speaker Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-background">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Feature Narrative & How it Feeds the Dashboard */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
              {current.badge}
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-foreground">
              {current.title}
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Three Connected Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl border border-border/70 bg-background/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>Zero Surveillance</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Teachers never spy on individual diary entries. Pure psychological safety.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-border/70 bg-background/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <Activity className="w-3.5 h-3.5 text-emerald-500" />
                <span>60s Daily Habit</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Completed autonomously during morning homeroom without cutting into teaching periods.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-border/70 bg-background/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-500" />
                <span>Teacher Playbook</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Translates emotional vectors directly into concrete de-escalation strategies.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-foreground">
                Want to see the educator view for this student?
              </p>
              <p className="text-xs text-muted-foreground">
                Inspect Aarav Sharma&apos;s longitudinal radar profile, academic tenacity, and counselor recommendations.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenDossier}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shrink-0"
            >
              Open Dossier →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
