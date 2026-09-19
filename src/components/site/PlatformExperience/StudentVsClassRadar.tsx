import { useState } from "react";
import { motion } from "motion/react";

interface RadarMetric {
  key: string;
  label: string;
  student: number;
  classAvg: number;
  angle: number; // in degrees, 0 = top
}

const METRICS: RadarMetric[] = [
  { key: "emotional", label: "Emotional Awareness", student: 74, classAvg: 70, angle: -90 },
  { key: "peer", label: "Peer Engagement", student: 68, classAvg: 65, angle: -30 },
  { key: "tenacity", label: "Academic Tenacity", student: 82, classAvg: 72, angle: 30 },
  { key: "stress", label: "Stress Adaptability", student: 64, classAvg: 68, angle: 90 },
  { key: "focus", label: "Focus & Cognitive", student: 80, classAvg: 71, angle: 150 },
  { key: "regulation", label: "Self-Regulation", student: 76, classAvg: 69, angle: 210 },
];

export function StudentVsClassRadar() {
  const [activeMetric, setActiveMetric] = useState<RadarMetric | null>(METRICS[0]); // default to Emotional Awareness as in screenshot

  const cx = 170;
  const cy = 145;
  const radius = 90;

  // Helper to convert polar to cartesian
  const getCoordinates = (value: number, angleDegrees: number) => {
    const angleRad = (angleDegrees * Math.PI) / 180;
    const r = (value / 100) * radius;
    const x = cx + r * Math.cos(angleRad);
    const y = cy + r * Math.sin(angleRad);
    return { x, y };
  };

  // Generate path string from metric values
  const studentPoints = METRICS.map((m) => getCoordinates(m.student, m.angle));
  const classPoints = METRICS.map((m) => getCoordinates(m.classAvg, m.angle));

  const studentPath =
    studentPoints.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(" ") +
    " Z";
  const classPath =
    classPoints.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)},${pt.y.toFixed(1)}`).join(" ") +
    " Z";

  return (
    <div className="relative flex flex-col items-center w-full select-none">
      {/* Legend */}
      <div className="w-full flex items-center justify-between px-2 mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-foreground">Student vs Class Average</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-medium">
          <span className="inline-flex items-center gap-1 text-primary">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Student
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
            Class Avg
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full aspect-[340/280] max-w-[380px]">
        <svg viewBox="0 0 340 280" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="studentGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
            </linearGradient>
            <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3b82f6" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Concentric rings (grids) */}
          {[0.25, 0.5, 0.75, 1.0].map((level) => {
            const gridPts = METRICS.map((m) => getCoordinates(100 * level, m.angle));
            const path =
              gridPts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") +
              " Z";
            return (
              <path
                key={level}
                d={path}
                fill="none"
                stroke="currentColor"
                className="text-border/60"
                strokeWidth={level === 1.0 ? "1.2" : "0.8"}
                strokeDasharray={level === 1.0 ? "none" : "3,3"}
              />
            );
          })}

          {/* Spokes from center */}
          {METRICS.map((m) => {
            const outer = getCoordinates(100, m.angle);
            return (
              <line
                key={m.key}
                x1={cx}
                y1={cy}
                x2={outer.x}
                y2={outer.y}
                stroke="currentColor"
                className="text-border/60"
                strokeWidth="0.8"
              />
            );
          })}

          {/* Class Average Polygon */}
          <path
            d={classPath}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="4,3"
            opacity="0.85"
          />

          {/* Student Polygon */}
          <motion.path
            d={studentPath}
            fill="url(#studentGradient)"
            stroke="#2563eb"
            strokeWidth="2.2"
            filter="url(#radarGlow)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Class Average Points */}
          {classPoints.map((pt, idx) => (
            <circle
              key={`class-${idx}`}
              cx={pt.x}
              cy={pt.y}
              r="2.5"
              fill="#94a3b8"
              opacity="0.7"
            />
          ))}

          {/* Student Interactive Points */}
          {studentPoints.map((pt, idx) => {
            const metric = METRICS[idx];
            const isSelected = activeMetric?.key === metric.key;

            return (
              <g
                key={`student-${metric.key}`}
                className="cursor-pointer"
                onMouseEnter={() => setActiveMetric(metric)}
                onClick={() => setActiveMetric(metric)}
              >
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isSelected ? "5" : "3.5"}
                  fill="#ffffff"
                  stroke="#2563eb"
                  strokeWidth={isSelected ? "2.5" : "1.8"}
                  className="transition-all hover:scale-125"
                />
              </g>
            );
          })}

          {/* Axis Labels around periphery */}
          {METRICS.map((m) => {
            const labelCoord = getCoordinates(126, m.angle);
            const isTop = m.angle === -90;
            const isBottom = m.angle === 90;
            const isRight = m.angle > -90 && m.angle < 90;
            const textAnchor = isTop || isBottom ? "middle" : isRight ? "start" : "end";
            const isActive = activeMetric?.key === m.key;

            return (
              <text
                key={`label-${m.key}`}
                x={labelCoord.x}
                y={labelCoord.y + (isTop ? -4 : isBottom ? 8 : 4)}
                textAnchor={textAnchor}
                className={`text-[10px] sm:text-[11px] font-medium transition-colors cursor-pointer ${
                  isActive ? "fill-primary font-bold" : "fill-muted-foreground"
                }`}
                onClick={() => setActiveMetric(m)}
              >
                {m.label}
              </text>
            );
          })}
        </svg>

        {/* Floating Tooltip matching Screenshot 2 */}
        {activeMetric && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-lg border border-border/80 bg-card/95 px-3 py-2 text-xs shadow-md backdrop-blur-md"
            style={{ minWidth: "150px" }}
          >
            <p className="font-bold text-foreground text-[11px] border-b border-border/40 pb-1 mb-1">
              {activeMetric.label}
            </p>
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>Class Avg :</span>
              <span className="font-semibold text-foreground font-mono">{activeMetric.classAvg}</span>
            </div>
            <div className="flex justify-between text-[11px] text-primary font-bold">
              <span>Student :</span>
              <span className="font-mono">{activeMetric.student}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
