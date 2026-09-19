import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Loader2,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { submitCallRequest } from "@/lib/call-request";
import { Reveal, Eyebrow } from "@/lib/motion-primitives";
import { JaagrThreeLines, OrganicDecorations } from "@/components/site/OrganicDecorations";
import emotionsMadeEasyImg from "@/assets/emotions-made-easy.png";

const PROMISES = [
  {
    icon: Clock,
    title: "30 minutes",
    copy: "A focused walkthrough, no sales theatre.",
  },
  {
    icon: Users,
    title: "Your team",
    copy: "Bring your principal, counsellor and coordinators.",
  },
  {
    icon: CalendarCheck,
    title: "A clear plan",
    copy: "Leave with a rollout map for your school.",
  },
];

const FIELD =
  "w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-4 focus:ring-primary/12";

export function DemoForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const email = (fd.get("email") as string) || "";
    setSubmittedEmail(email);

    try {
      const rawMessage = (fd.get("message") as string)?.trim();
      await submitCallRequest({
        data: {
          name: (fd.get("name") as string) || "",
          role: (fd.get("role") as string) || "",
          school: (fd.get("school") as string) || "",
          city: (fd.get("city") as string) || "",
          strength: (fd.get("strength") as string) || "",
          email: email,
          phone: (fd.get("phone") as string) || "",
          source: "demo_form",
          ...(rawMessage ? { message: rawMessage } : {}),
        },
      });
      setSent(true);
    } catch (err) {
      console.error("Failed to submit demo request:", err);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-demo" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <OrganicDecorations />
      <div className="shell relative z-10">
        <div className="ink-panel relative overflow-hidden rounded-4xl px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-mint/20 blur-3xl"
          />
          <div
            aria-hidden
            className="dotgrid pointer-events-none absolute bottom-8 left-8 hidden h-32 w-32 opacity-20 lg:block"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow tone="light">Book a School Demo</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.7rem]">
                  Let&apos;s build emotional strength
                  <span className="block text-mint">into your school year.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-md text-base leading-relaxed opacity-80">
                  Tell us a little about your school. We&apos;ll show you exactly how Jaagr Mind
                  would work in your classrooms, with your teachers, from day one.
                </p>
              </Reveal>

              <ul className="mt-10 space-y-5">
                {PROMISES.map(({ icon: Icon, title, copy }, i) => (
                  <Reveal as="li" key={title} delay={0.18 + i * 0.06}>
                    <div className="flex gap-4">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-bold">{title}</p>
                        <p className="text-sm opacity-70">{copy}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.35}>
                <div className="mt-8 relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-xl max-w-sm">
                  <img
                    src={emotionsMadeEasyImg}
                    alt="Emotions Made Easy - Jaagr Mind"
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3 bg-black/75 backdrop-blur-md text-xs flex items-center justify-between text-white border-t border-white/10">
                    <span className="font-medium text-white/80">Direct Advisor Line:</span>
                    <a
                      href="tel:+917820001282"
                      className="text-mint font-bold hover:underline flex items-center gap-1"
                    >
                      <Phone className="h-3 w-3" /> +91 78200 01282
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="surface relative rounded-3xl p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                    >
                      <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.1,
                          type: "spring",
                          stiffness: 180,
                          damping: 14,
                        }}
                        className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint/20 text-primary"
                      >
                        <CheckCircle2 className="h-8 w-8" aria-hidden />
                      </motion.span>
                      <h3 className="mt-6 text-2xl font-extrabold text-foreground">
                        Request received
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Our school partnerships team will reach out within one working day to
                        schedule your demo.
                      </p>
                      {submittedEmail && (
                        <p className="mt-2 text-xs font-semibold text-mint">
                          ✓ A confirmation email has been sent to {submittedEmail}.
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-extrabold text-foreground">
                        Request your school demo
                      </h3>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                          >
                            Your name
                          </label>
                          <input
                            id="name"
                            name="name"
                            required
                            placeholder="Full name"
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="role"
                            className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                          >
                            Your role
                          </label>
                          <input
                            id="role"
                            name="role"
                            required
                            placeholder="Principal / Coordinator"
                            className={FIELD}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="school"
                          className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                        >
                          School name
                        </label>
                        <input
                          id="school"
                          name="school"
                          required
                          placeholder="School name"
                          className={FIELD}
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="city"
                            className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                          >
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            required
                            placeholder="City"
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="strength"
                            className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                          >
                            Student strength
                          </label>
                          <select
                            id="strength"
                            name="strength"
                            defaultValue=""
                            required
                            className={FIELD}
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            <option>Under 500</option>
                            <option>500 to 1,500</option>
                            <option>1,500 to 3,000</option>
                            <option>3,000+</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@school.edu.in"
                            className={FIELD}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                          >
                            Phone number *
                          </label>
                          <div className="flex rounded-2xl border border-border bg-card overflow-hidden focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/12">
                            <span className="inline-flex items-center gap-1 px-3 bg-secondary text-xs font-semibold border-r border-border text-foreground select-none">
                              🇮🇳 +91
                            </span>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              placeholder="78200 01282"
                              className="w-full bg-transparent px-3 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-xs font-semibold text-secondary-foreground"
                        >
                          What would you like to solve first? (optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          placeholder="e.g. Exam anxiety, student emotional fitness, teacher training"
                          className={FIELD}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold tracking-wider uppercase text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Submitting Request...
                          </>
                        ) : (
                          <>
                            Request a Call / Book Demo
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-[0.7rem] text-muted-foreground leading-relaxed pt-1">
                        By submitting this form, you agree to our Terms of Service &amp; Privacy
                        Policy and to be contacted by us via Call/Email/WhatsApp/SMS.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
