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
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="currentColor"
          fillOpacity={d.opacity}
        />
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
export function RightMiddleHalftone({
  className = "",
}: {
  className?: string;
}) {
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
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="currentColor"
          fillOpacity={d.opacity}
        />
      ))}
    </svg>
  );
}

/**
 * 4. Top-right: abstract leaf/swoosh strokes
 * 3 radiant curved leaf / swoosh strokes fanning out gracefully (mint/teal)
 */
export function TopRightLeafStrokes({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 95 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none text-mint ${className}`}
    >
      {/* Top curved stroke */}
      <path
        d="M24 64C36 50 56 34 84 28"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Middle curved stroke */}
      <path
        d="M12 44C28 32 50 18 78 8"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Lower stroke */}
      <path
        d="M36 78C48 66 66 54 90 50"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 5. Bottom-right: organic blob / watercolor shape
 * Soft watercolor-like translucent organic splash in mint / emerald
 */
export function BottomRightWatercolorBlob({
  className = "",
}: {
  className?: string;
}) {
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
          <stop
            offset="0%"
            stopColor="var(--color-primary-soft)"
            stopOpacity="0.2"
          />
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
export function BottomLeftCurvedLoop({
  className = "",
}: {
  className?: string;
}) {
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

      {/* 4. Top-right: abstract leaf/swoosh strokes */}
      {showTopRightLeafStrokes && (
        <div className="absolute right-4 top-4 sm:right-10 sm:top-8">
          <TopRightLeafStrokes className="w-14 sm:w-18 md:w-22 opacity-80" />
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
