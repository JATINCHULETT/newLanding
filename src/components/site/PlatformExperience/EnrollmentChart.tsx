import { useState } from "react";
import { motion } from "motion/react";
import { Users } from "lucide-react";

interface GradeData {
  grade: string;
  count: number;
  highlight?: boolean;
}

const ENROLLMENT_DATA: GradeData[] = [
  { grade: "Class 6", count: 0 },
  { grade: "Class 7", count: 0 },
  { grade: "Class 8", count: 0 },
  { grade: "Class 9", count: 2 },
  { grade: "Class 10", count: 7, highlight: true },
  { grade: "Class 11", count: 2 },
  { grade: "Class 12", count: 0 },
];

const MAX_COUNT = 8;

export function EnrollmentChart({ onSelectStudent }: { onSelectStudent?: () => void }) {
  const [hoveredGrade, setHoveredGrade] = useState<string | null>("Class 10");

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between pb-4 border-b border-border/40">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-primary/10 text-primary">
              <Users className="w-3.5 h-3.5" />
            </span>
            <h4 className="text-sm font-bold text-foreground tracking-tight">
              Grade-wise Student Enrollment
            </h4>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Distribution of active student records across secondary and senior classes.
          </p>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary text-secondary-foreground border border-border/60">
          11 Total
        </span>
      </div>

      {/* SVG / Animated Bar Chart */}
      <div className="pt-6 pb-2 px-1 flex-1 flex flex-col justify-end">
        <div className="relative h-44 w-full flex items-end justify-between gap-2 sm:gap-4">
          {/* Y Axis reference lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            {[8, 6, 4, 2, 0].map((y) => (
              <div key={y} className="border-b border-dashed border-foreground/50 w-full relative">
                <span className="absolute -top-2.5 -left-4 text-[9px] text-muted-foreground font-mono">
                  {y}
                </span>
              </div>
            ))}
          </div>

          {/* Bars */}
          {ENROLLMENT_DATA.map((item) => {
            const heightPercent = (item.count / MAX_COUNT) * 100;
            const isHovered = hoveredGrade === item.grade;

            return (
              <div
                key={item.grade}
                className="relative flex-1 flex flex-col items-center h-full justify-end group cursor-pointer z-10"
                onMouseEnter={() => setHoveredGrade(item.grade)}
                onClick={() => {
                  if (item.highlight && onSelectStudent) {
                    onSelectStudent();
                  }
                }}
              >
                {/* Floating tooltip */}
                {(isHovered || item.highlight) && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute -top-7 px-1.5 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap shadow-sm border ${
                      item.highlight
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-popover text-popover-foreground border-border"
                    }`}
                  >
                    {item.count} {item.count === 1 ? "student" : "students"}
                  </motion.div>
                )}

                {/* The Bar */}
                <div className="w-full max-w-[42px] relative rounded-t-md overflow-hidden bg-muted/40">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full rounded-t-md transition-all ${
                      item.highlight
                        ? "bg-gradient-to-t from-primary to-primary/80 shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                        : item.count > 0
                          ? "bg-primary/50 hover:bg-primary/70"
                          : "bg-transparent h-1.5"
                    }`}
                  />
                </div>

                {/* Label */}
                <span
                  className={`mt-2 text-[11px] font-medium transition-colors ${
                    item.highlight ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                >
                  {item.grade}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer link / notification */}
      <div className="mt-3 pt-3 border-t border-border/40 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
        <span className="text-[11px]">Includes active roster submissions for AY 2026-27</span>
        {onSelectStudent && (
          <button
            onClick={onSelectStudent}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline group"
          >
            Inspect Class 10 Dossier (Aarav Sharma)
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        )}
      </div>
    </div>
  );
}
