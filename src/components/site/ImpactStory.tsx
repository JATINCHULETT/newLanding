import { Activity, BarChart3, Route, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import classroomImg from "@/assets/story-classroom.png";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const PATHWAY = [
  { icon: Activity, name: "JAAGR Pulse", body: "Student checks in." },
  {
    icon: Sparkles,
    name: "JAAGR Spark",
    body: "Student practises a relevant coping or attention skill.",
  },
  {
    icon: Route,
    name: "JAAGR Path",
    body: "Repeated practice builds everyday emotional and self-management skills.",
  },
  {
    icon: BarChart3,
    name: "JAAGR Insights",
    body: "School sees aggregated patterns and programme-level insights.",
  },
];

export function ImpactStory() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 lg:py-32">
      <OrganicDecorations />
      <div className="shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>A realistic school scenario</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                What happens when a school starts noticing early?
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <figure className="relative mt-8 max-w-md rotate-[-1.4deg] rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
                <span
                  aria-hidden
                  className="absolute -top-3 left-10 h-6 w-24 rounded-sm bg-mint/50"
                />
                <blockquote className="hand text-2xl leading-snug text-foreground sm:text-[1.7rem]">
                  &ldquo;I&apos;ve noticed that Riya has become unusually quiet lately. Her work is
                  slipping too.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Class teacher&apos;s observation note
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.16}>
              <img
                src={classroomImg}
                alt="Illustration of a teacher quietly checking in with a student at a desk"
                width={1200}
                height={900}
                loading="lazy"
                className="mt-6 w-full max-w-sm float-slow"
              />
            </Reveal>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-border bg-card/70 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Without Jaagr
                  </p>
                  <p className="mt-3 text-base text-foreground">
                    Wait until the concern becomes a parent conversation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-full rounded-3xl border border-primary/25 bg-primary/8 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    With Jaagr
                  </p>
                  <p className="mt-3 text-base font-semibold text-foreground">
                    Build an earlier support pathway.
                  </p>
                </div>
              </Reveal>
            </div>

            <ol className="relative mt-8 space-y-4 pl-2">
              {PATHWAY.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 0.1}>
                  <div className="surface flex items-start gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <p.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{p.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                    <span className="ml-auto font-display text-2xl font-extrabold text-border">
                      {i + 1}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
