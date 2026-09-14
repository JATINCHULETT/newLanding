import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Home,
  Lock,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";

const TITLE = "JAAGR for Parents: Nurturing Emotional Resilience & Family Trust";
const DESCRIPTION =
  "Practical conversation starters and gentle guidance to help parents understand adolescent pressure, build emotional resilience, and connect with care at home.";

export const Route = createFileRoute("/parents")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ParentsPage,
});

const DINNER_PROMPTS = [
  {
    category: "Connection & Calm",
    question: "“What was one moment today where you felt relaxed or had a good laugh?”",
    tip: "Focus on curiosity rather than asking about test marks or homework first.",
  },
  {
    category: "De-escalating Stress",
    question:
      "“Is there anything feeling heavy this week that you want me to just listen to without offering advice?”",
    tip: "Teens often want validation before solutions. Let them vent safely.",
  },
  {
    category: "Resilience Reflection",
    question: "“Was there something tricky you faced today that you figured out or survived?”",
    tip: "Celebrates coping skills and effort rather than perfection.",
  },
  {
    category: "Social Connection",
    question: "“Who was someone kind or interesting you talked to at school today?”",
    tip: "Encourages positive reflection on relationships and school community.",
  },
];

const PARENT_PILLARS = [
  {
    icon: MessageCircle,
    title: "Shared Emotional Vocabulary",
    desc: "When schools and homes use the same concepts (Pulse, Sparks, Grounding), children find it much easier to express how they feel without defensive barriers.",
  },
  {
    icon: Heart,
    title: "Care, Not Judgment",
    desc: "Adolescent brains undergo massive rewiring. JAAGR helps parents understand natural emotional waves during middle and high school with empathy.",
  },
  {
    icon: Lock,
    title: "Trust Over Surveillance",
    desc: "We don't spy on your children. Respecting their personal reflection space teaches them autonomy and encourages them to share with you willingly.",
  },
];

const PARENT_FAQS = [
  {
    q: "Will I get an app to monitor my child's daily emotions?",
    a: "No. Child psychologists confirm that surveillance breeds anxiety and dishonest reporting. JAAGR empowers students to develop self-awareness independently, while providing parents with shared language and conversation guidance to foster genuine connection at home.",
  },
  {
    q: "How can JAAGR help my child during board exam stress?",
    a: "JAAGR Sparks teach evidence-based physiological techniques (like box breathing and cognitive reframing) that students practice in 60 seconds daily. When exam tension hits, these routines kick in automatically to lower panic.",
  },
  {
    q: "How can our school adopt JAAGR Mind?",
    a: "Most schools launch JAAGR following a parent or school leader recommendation. You can share our information with your principal or PTA committee, and we provide a full school demonstration.",
  },
];

export function ParentsPage() {
  const [promptIndex, setPromptIndex] = useState(0);

  const nextPrompt = () => {
    setPromptIndex((prev) => (prev + 1) % DINNER_PROMPTS.length);
  };

  const activePrompt = DINNER_PROMPTS[promptIndex]!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pb-20 sm:pb-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 lg:pt-48 lg:pb-28">
          <OrganicDecorations />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-mint/20 blur-3xl"
          />

          <div className="shell relative z-10 text-center max-w-4xl mx-auto">
            <Reveal>
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  <Home className="h-3.5 w-3.5" /> JAAGR for Parents
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Connect with your child&apos;s world, with{" "}
                <span className="text-gradient">care, not judgment.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
                Adolescents navigate immense pressure every day. JAAGR gives parents practical
                conversation starters and gentle insights to nurture emotional strength at home and
                build lasting family trust.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#dinner-spark"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
                >
                  Try a Conversation Starter
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  to="/"
                  hash="book-demo"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Request a School Pilot
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground border-t border-border/70 pt-6">
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" /> Fosters Open Family Dialogue
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-mint" /> Child Psychologist-Backed
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-primary" /> Zero Invasive Tracking
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTERACTIVE DINNER TABLE PROMPT GENERATOR */}
        <section
          id="dinner-spark"
          className="relative py-20 lg:py-24 bg-secondary/30 border-y border-border/60"
        >
          <div className="shell max-w-3xl mx-auto text-center">
            <Reveal>
              <Eyebrow>Daily Home Tool</Eyebrow>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                Dinner Table Conversation Sparks
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Replace &ldquo;How was school? - Fine&rdquo; with questions that invite real,
                unpressured connection.
              </p>
            </Reveal>

            <div className="mt-8 rounded-3xl border border-border bg-background p-6 sm:p-10 shadow-xl relative text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {activePrompt.category}
              </span>
              <p className="mt-4 text-xl sm:text-2xl font-bold text-foreground leading-snug">
                {activePrompt.question}
              </p>
              <div className="mt-6 rounded-2xl bg-secondary/50 p-4 border border-border/60 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground">Parent Tip:</p>
                <p className="mt-1">{activePrompt.tip}</p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={nextPrompt}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-xs font-bold hover:bg-primary/20 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Next Conversation Spark
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* THREE CORE PILLARS */}
        <section className="relative py-24 lg:py-32">
          <div className="shell">
            <div className="max-w-3xl">
              <Reveal>
                <Eyebrow>Why parents appreciate JAAGR</Eyebrow>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Supporting your child without adding pressure
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {PARENT_PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.1}>
                    <div className="surface flex flex-col h-full rounded-3xl p-7">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative py-24 lg:py-28 bg-card/40 border-t border-border/60">
          <div className="shell max-w-3xl">
            <Reveal>
              <div className="text-center">
                <Eyebrow>Parent FAQs</Eyebrow>
                <h2 className="mt-4 text-3xl font-extrabold">Frequently Asked Questions</h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-4">
              {PARENT_FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="text-base font-bold text-foreground">{f.q}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative py-20 bg-primary/10 border-t border-primary/20 text-center">
          <div className="shell max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground">
              Bring JAAGR to your child&apos;s school
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Request an introduction package or recommend JAAGR Mind to your school administration.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/"
                hash="book-demo"
                className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform hover:scale-105"
              >
                Recommend to Your School
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
