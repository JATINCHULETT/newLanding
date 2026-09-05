import { useEffect, type RefObject } from "react";

/**
 * GSAP + ScrollTrigger parallax. Loaded lazily on the client only so SSR and
 * the initial bundle stay light. Honours prefers-reduced-motion.
 */
export function useGsapParallax(
  scope: RefObject<HTMLElement | null>,
  selector = "[data-parallax]",
) {
  useEffect(() => {
    if (typeof window === "undefined" || !scope.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !scope.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
          const depth = Number(el.dataset["parallax"] ?? 0.15);
          gsap.fromTo(
            el,
            { yPercent: -depth * 50 },
            {
              yPercent: depth * 50,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("[data-parallax-scene]") ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });
      }, scope);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [scope, selector]);
}
