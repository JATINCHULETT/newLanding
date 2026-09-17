import React from "react";

/**
 * 1. Top-left: small abstract dots / dotted pattern
 * Mint / teal dots in a clean vertical grid with subtle organic variation
 */
export function TopLeftDots({ className = "" }: { className?: string }) {
  const dots: { cx: number; cy: number; r: number; opacity: number }[] = [];
  const cols = 5;
  const rows = 9;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      // Gentle fading toward inner edge
      const distFromEdge = (cols - c) / cols;
      const opacity = 0.2 + distFromEdge * 0.38;
      dots.push({
        cx: 10 + c * 15,
        cy: 12 + r * 15,
        r: 2.3,
        opacity: Math.max(0.12, Math.min(0.65, opacity)),
      });
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 90 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-mint ${className}`}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="currentColor" fillOpacity={d.opacity} />
      ))}
    </svg>
  );
}

/**
 * 2. Left-middle: curved organic line / brush-stroke ornament
 * Soft, flowing organic stroke or wave doodle
 */
export function LeftMiddleOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 70 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-primary/40 ${className}`}
    >
      <path
        d="M8 12C24 30 38 58 24 86C16 102 12 114 26 128"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24C30 42 38 64 28 88"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 6"
        opacity="0.6"
      />
    </svg>
  );
}

/**
 * 3. Right-middle: decorative dotted halftone pattern
 * Staggered lavender/lilac halftone dots cluster
 */
export function RightMiddleHalftone({ className = "" }: { className?: string }) {
  const dots: { cx: number; cy: number; r: number; opacity: number }[] = [];
  const cols = 6;
  const rows = 10;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      // Staggered pattern
      const offsetX = (r % 2) * 8;
      const x = 12 + c * 16 + offsetX;
      const y = 14 + r * 15;
      const fade = 0.15 + (c / cols) * 0.45;
      const rSize = 1.8 + (c / cols) * 1.4;
      dots.push({ cx: x, cy: y, r: rSize, opacity: fade });
    }
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-primary/35 ${className}`}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="currentColor" fillOpacity={d.opacity} />
      ))}
    </svg>
  );
}

/**
 * 4. Top-right: Jaagr Brand Spark Lines (Three Straight Bars)
 * The signature 3 radiant straight pill bars from the official Jaagr logo mark
 */
export function JaagrThreeLines({ className = "", color }: { className?: string; color?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={color ? { color } : undefined}
    >
      <g transform="translate(-710, 2)">
        {/* Top spark bar (~45 deg) */}
        <path
          d="M763.057,10.585C766.55,7.738 769.825,5.184 772.999,2.512C777.107,-0.947 779.485,-0.915 783.165,3.113C785.628,5.807 788.001,8.604 790.189,11.524C792.524,14.638 792.385,17.433 789.054,20.133C769.577,35.92 750.196,51.825 730.784,67.693C726.598,71.115 724.808,70.922 721.315,66.686C719.096,63.995 716.908,61.275 714.603,58.658C711.667,55.325 712.105,52.504 715.473,49.75C729.871,37.978 744.224,26.151 758.59,14.34C760.001,13.181 761.393,11.998 763.057,10.585Z"
          fill="currentColor"
        />
        {/* Middle spark bar (~20 deg) */}
        <path
          d="M801.826,55.364C814.425,50.529 814.098,51.072 818.196,62.826C821.361,71.903 822.866,73.104 811.517,76.977C789.006,84.658 766.549,92.495 744.108,100.377C740.312,101.71 737.966,100.647 736.644,97.032C735.273,93.284 734.113,89.456 732.681,85.732C731.144,81.739 732.463,79.489 736.423,78.135C748.856,73.885 761.237,69.481 773.642,65.148C782.906,61.912 792.177,58.692 801.826,55.364Z"
          fill="currentColor"
        />
        {/* Bottom spark bar (~5 deg) */}
        <path
          d="M802.085,136.559C798.699,148.083 798.663,148.217 787.467,145.207C770.781,140.72 754.182,135.906 737.476,131.492C733.228,130.37 732.047,128.005 732.93,124.196C733.829,120.315 734.925,116.473 736.09,112.662C737.183,109.083 739.525,107.535 743.349,108.592C761.925,113.726 780.496,118.876 799.102,123.897C803.235,125.013 804.396,127.511 803.526,131.364C803.161,132.984 802.663,134.573 802.085,136.559Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

/** Legacy alias for backwards compatibility */
export const TopRightLeafStrokes = JaagrThreeLines;
export const JaagrBrandSpark = JaagrThreeLines;

/**
 * 5. Bottom-right: organic blob / watercolor shape
 * Soft watercolor-like translucent organic splash in mint / emerald
 */
export function BottomRightWatercolorBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <radialGradient id="organic-blob-grad" cx="85%" cy="85%" r="80%">
          <stop offset="0%" stopColor="var(--color-mint)" stopOpacity="0.45" />
          <stop offset="45%" stopColor="var(--color-mint)" stopOpacity="0.25" />
          <stop offset="75%" stopColor="var(--color-mint)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--color-mint)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="organic-blob-grad-2" cx="70%" cy="90%" r="60%">
          <stop offset="0%" stopColor="var(--color-primary-soft)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Layered fluid organic shapes */}
      <path
        d="M60 220C40 185 24 145 42 105C62 60 115 42 165 48C205 52 235 78 260 110V220H60Z"
        fill="url(#organic-blob-grad)"
      />
      <path
        d="M100 220C80 190 70 155 90 125C115 88 160 78 200 90C230 100 250 120 260 150V220H100Z"
        fill="url(#organic-blob-grad-2)"
      />
    </svg>
  );
}

/**
 * 6. Bottom-left: abstract curved loop / organic line
 * Hand-drawn style loose continuous overlapping curved loop in soft lilac
 */
export function BottomLeftCurvedLoop({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-primary/35 ${className}`}
    >
      <path
        d="M-15 95C18 128 55 145 88 132C126 116 135 68 102 46C70 24 30 68 42 108C54 148 116 156 152 130C172 114 182 92 188 68"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Composite Section Background:
 * Renders all 6 decorative abstract and organic elements placed around the perimeter
 * exactly as pictured in the design specification!
 */
export interface OrganicDecorationsProps {
  /** Optional custom classes for outer absolute layer */
  className?: string;
  /** Hide or show specific parts if a section needs customization */
  showTopLeftDots?: boolean;
  showLeftMiddleOrnament?: boolean;
  showRightMiddleHalftone?: boolean;
  showTopRightLeafStrokes?: boolean;
  showBottomRightBlob?: boolean;
  showBottomLeftLoop?: boolean;
}

export function OrganicDecorations({
  className = "",
  showTopLeftDots = true,
  showLeftMiddleOrnament = true,
  showRightMiddleHalftone = true,
  showTopRightLeafStrokes = true,
  showBottomRightBlob = true,
  showBottomLeftLoop = true,
}: OrganicDecorationsProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {/* 1. Top-left: small abstract dots */}
      {showTopLeftDots && (
        <div className="absolute -left-2 top-6 sm:top-10">
          <TopLeftDots className="w-16 sm:w-20 md:w-24 opacity-85" />
        </div>
      )}

      {/* 2. Left-middle: curved organic line / brush-stroke ornament */}
      {showLeftMiddleOrnament && (
        <div className="absolute left-0 top-[45%] -translate-y-1/2">
          <LeftMiddleOrnament className="w-12 sm:w-16 opacity-75" />
        </div>
      )}

      {/* 3. Right-middle: decorative dotted halftone pattern */}
      {showRightMiddleHalftone && (
        <div className="absolute -right-2 top-[55%] -translate-y-1/2">
          <RightMiddleHalftone className="w-20 sm:w-28 md:w-32 opacity-70" />
        </div>
      )}

      {/* 4. Top-right: Jaagr signature brand three straight spark lines */}
      {showTopRightLeafStrokes && (
        <div className="absolute right-4 top-4 sm:right-8 sm:top-8">
          <JaagrThreeLines className="w-14 sm:w-18 md:w-24 text-primary/70 dark:text-mint/80 transition-transform duration-500 hover:scale-110" />
        </div>
      )}

      {/* 5. Bottom-right: organic blob / watercolor shape */}
      {showBottomRightBlob && (
        <div className="absolute -bottom-6 -right-6">
          <BottomRightWatercolorBlob className="w-48 sm:w-64 md:w-80 opacity-90" />
        </div>
      )}

      {/* 6. Bottom-left: abstract curved loop / organic line */}
      {showBottomLeftLoop && (
        <div className="absolute -bottom-8 -left-8">
          <BottomLeftCurvedLoop className="w-36 sm:w-48 md:w-56 opacity-85" />
        </div>
      )}
    </div>
  );
}
