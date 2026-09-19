import {
  ArrowRight,
  Brain,
  ClipboardList,
  Laptop,
  Lock,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal, TiltCard } from "@/lib/motion-primitives";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";
import { openExpertModal } from "@/components/site/ExpertConsultationModal";

const CARDS = [
  {
    icon: Brain,
    title: "Evidence-Informed & Professionally Designed",
    body: "Designed by qualified wellbeing and mental health professionals using evidence-informed approaches and age-appropriate experiences for school settings.",
    iconBg: "bg-primary/10 text-primary",
    accentColor: "bg-primary/40",
  },
  {
    icon: ClipboardList,
    title: "CBSE-Aligned From Day One",
    body: "Structured to support school wellbeing requirements, staff training, documentation and reporting.",
    iconBg: "bg-mint/25 text-mint-foreground",
    accentColor: "bg-mint/60",
  },
  {
    icon: School,
    title: "Built for Indian Schools",
    body: "Designed around academic pressure, family expectations, social dynamics and the everyday realities of Indian students.",
    iconBg: "bg-amber-100/70 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    accentColor: "bg-amber-400/70",
  },
  {
    icon: Laptop,
    title: "Simple to Implement",
    body: "Online delivery, structured resources and flexible scheduling designed to fit your school's existing calendar.",
    iconBg: "bg-sky-100/70 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
    accentColor: "bg-sky-400/70",
  },
];

const TRUST_PILLARS = [
  { icon: ShieldCheck, label: "Trusted by Schools" },
  { icon: Users, label: "Designed for Indian Schools" },
  { icon: Lock, label: "Safe, Secure & Privacy-First" },
];

export function TrustSection() {
  return (
    <section id="what-jaagr-is" className="relative overflow-hidden py-24 lg:py-32">
      {/* Abstract and organic decorative background elements */}
      <OrganicDecorations />

      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          {/* Left Column: Heading, intro copy, CTA, trust indicators */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <span className="h-0.5 w-6 rounded-full bg-mint" />
                <span className="hand text-2xl font-semibold text-mint-foreground sm:text-3xl">
                  What Jaagr Mind Is
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[3.1rem]">
                A complete wellbeing system{" "}
                <span className="block text-gradient">for the whole school.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Jaagr brings together student skill-building, teacher capability, parent engagement
                and school-wide insights in one structured, school-ready programme.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openExpertModal}
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02] hover:bg-primary/90 cursor-pointer"
                >
                  Request A Call
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/80 pt-6">
                {TRUST_PILLARS.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80 sm:text-sm"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Feature / Credibility Cards in 2x2 grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.08}>
                <TiltCard className="h-full">
                  <article className="surface lift flex h-full flex-col rounded-3xl p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl ${c.iconBg}`}
                      >
                        <c.icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold leading-snug text-foreground sm:text-lg">
                      {c.title}
                    </h3>

                    <div className={`mt-2.5 h-0.5 w-8 rounded-full ${c.accentColor}`} />

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {c.body}
                    </p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
