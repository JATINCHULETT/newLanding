import { useEffect } from "react";
import { useMotionValue, MotionValue } from "motion/react";

interface ScrollProgressOptions {
  /**
   * Viewport fraction where tracking starts (e.g. 0.75 for 75% down from top of viewport).
   */
  startViewportPercent?: number;
  /**
   * Viewport fraction where tracking finishes (e.g. 0.5 for 50% down from top of viewport).
   */
  endViewportPercent?: number;
  /**
   * Whether the progress completes when target top ("start") or target bottom ("end") reaches endViewportPercent.
   */
  targetOrigin?: "start" | "end";
}

/**
 * Robust scroll progress hook that calculates progress from getBoundingClientRect() directly,
 * ensuring complete immunity to CSS zoom or transformed coordinate space mismatches.
 */
export function useElementScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  options: ScrollProgressOptions = {},
): MotionValue<number> {
  const {
    startViewportPercent = 0.8,
    endViewportPercent = 0.5,
    targetOrigin = "end",
  } = options;

  const progress = useMotionValue(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const vh = window.innerHeight;
            const startY = vh * startViewportPercent;
            const endY =
              targetOrigin === "end"
                ? vh * endViewportPercent - rect.height
                : vh * endViewportPercent;

            const totalDist = startY - endY;
            if (totalDist > 0) {
              const current = startY - rect.top;
              const val = Math.min(Math.max(current / totalDist, 0), 1);
              progress.set(val);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, startViewportPercent, endViewportPercent, targetOrigin, progress]);

  return progress;
}
