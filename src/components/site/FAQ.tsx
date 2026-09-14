import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow } from "@/lib/motion-primitives";
import { cn } from "@/lib/utils";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const ITEMS = [
  {
    q: "Is this therapy or counselling?",
    a: "No. JAAGR Mind is a preventive, skills-based system. It teaches emotional fitness the way schools teach physical fitness: through short, repeatable practice. When a student needs clinical support, the system helps the school notice earlier and escalate to the right professional.",
  },
  {
    q: "How much extra work is this for teachers?",
    a: "A few minutes a day. Check-ins take under two minutes, activities fit into existing homeroom or value-education slots, and teachers get ready-to-use scripts instead of theory. No lesson planning required.",
  },
  {
    q: "Does it fit CBSE and school compliance requirements?",
    a: "Yes. The framework maps to CBSE wellbeing, life-skills and school-safety expectations, and gives schools the documentation and reporting they need during inspections and audits.",
  },
  {
    q: "How is student data handled?",
    a: "Student-first by design. Data stays confidential, is visible only to authorised school staff, and is used to spot patterns and support students, never to label or rank them.",
  },
  {
    q: "How long before a school sees results?",
    a: "Most schools see clearer teacher confidence and earlier identification within one term. Culture-level change (calmer classrooms, fewer escalations) typically builds across an academic year.",
  },
  {
    q: "What does rollout look like?",
    a: "A short leadership alignment session, teacher training, then a phased class-by-class start. Our team stays with your school through the first term with reviews and coaching.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <OrganicDecorations />
      <div className="shell relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <Eyebrow>Questions Principals Ask</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Straight answers,
              <span className="block text-gradient">before you commit.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
              Still unsure? A 30-minute demo with your leadership team usually answers everything
              else.
            </p>
          </Reveal>
        </div>

        <ul className="space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={item.q} delay={i * 0.04}>
                <div className="surface overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-foreground sm:text-lg">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
