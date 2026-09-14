import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, BadgeCheck, Lock, MapPin, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-ecosystem.png";
import floatImg from "@/assets/float-objects.png";
import { JaagrThreeLines, OrganicDecorations } from "@/components/site/OrganicDecorations";

const TRUST = [
  { icon: BadgeCheck, label: "Evidence-informed" },
  { icon: MapPin, label: "Built for Indian Schools" },
  { icon: ShieldCheck, label: "CBSE-aligned" },
  { icon: Lock, label: "Student-first privacy" },
];

const CHIPS = [
  { label: "Pulse", top: "6%", left: "-4%", delay: 0 },
  { label: "Spark", top: "26%", left: "84%", delay: 0.12 },
  { label: "Journey", top: "72%", left: "-6%", delay: 0.24 },
  { label: "Insights", top: "88%", left: "70%", delay: 0.36 },
];

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useSpring(useTransform(scrollYProgress, [0, 0.25], [0, 60]), {
    stiffness: 90,
    damping: 24,
  });

  const mx = useSpring(0, { stiffness: 60, damping: 18 });
  const my = useSpring(0, { stiffness: 60, damping: 18 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !sceneRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 26);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 20);
  };

  return (
    <section
      id="top"
      className="veil relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <OrganicDecorations />
      <div
        aria-hidden
        className="dotgrid pointer-events-none absolute left-2 top-40 hidden h-40 w-28 opacity-70 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-mint/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <p className="hand text-xl sm:text-2xl text-primary">
              The best schools don&apos;t wait for a crisis.
            </p>
            <JaagrThreeLines className="h-5 w-6 text-primary/80 dark:text-mint hidden sm:inline-block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-2xl font-extrabold leading-[1.18] sm:text-4xl sm:leading-[1.1] lg:text-[3.6rem] lg:leading-[1.05]"
          >
            Every child shows signs.
            <span className="mt-2 block text-gradient">
              The earlier schools notice, the better the outcome.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
          >
            Help your school identify students who need support earlier, equip every teacher to
            respond with confidence, and build emotional strength into everyday school life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 inline-flex rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-secondary-foreground sm:px-4 sm:py-2 sm:text-sm"
          >
            Not therapy. Not lectures. Trainable life skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#book-demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-base"
            >
              Book a School Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#why-jaagr"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 sm:px-7 sm:py-4 sm:text-base"
            >
              See How Jaagr Works
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 pt-6"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          ref={sceneRef}
          onPointerMove={onPointerMove}
          onPointerLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          style={{ y: reduce ? 0 : heroY }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.img
            src={floatImg}
            alt=""
            aria-hidden
            width={1024}
            height={1024}
            loading="lazy"
            style={{ x: mx, y: my }}
            className="pointer-events-none absolute -left-6 -top-6 w-28 opacity-70 float-slow sm:w-36"
          />
          <motion.img
            src={heroImg}
            alt="An illustrated school wellbeing system connecting a student, teacher, school leader and parent"
            width={1408}
            height={1200}
            fetchPriority="high"
            style={{
              x: useTransform(mx, (v) => v * -0.4),
              y: useTransform(my, (v) => v * -0.4),
            }}
            className="relative z-10 w-full drop-shadow-[0_40px_60px_oklch(0.32_0.09_288/0.18)]"
          />

          {CHIPS.map((chip) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + chip.delay }}
              style={{ top: chip.top, left: chip.left, x: mx, y: my }}
              className="absolute z-20 hidden rounded-full border border-border bg-card/90 px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground shadow-[var(--shadow-soft)] backdrop-blur sm:inline-flex"
            >
              JAAGR {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
