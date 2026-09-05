import { Quote } from "lucide-react";
import { Reveal, Eyebrow } from "@/lib/motion-primitives";
import founderPhoto from "@/assets/founder.jpg";
import { OrganicDecorations } from "@/components/site/OrganicDecorations";

const BELIEFS = [
  "Emotional strength is a skill, not a personality trait.",
  "Teachers are the first responders — they deserve tools, not extra burden.",
  "Schools should see patterns early, not incidents late.",
];

export function Founder() {
  return (
    <section
      id="about-us"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <OrganicDecorations />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mint/20 blur-3xl"
      />
      <div className="shell grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="dotgrid absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl opacity-70"
            />
            <div className="surface relative overflow-hidden rounded-3xl p-2">
              <img
                src={founderPhoto}
                alt="Dr. Srishty Puri Gajbhiye, founder of JAAGR Mind"
                loading="lazy"
                className="h-full w-full rounded-[1.35rem] object-cover"
              />
            </div>
            <div className="surface absolute -bottom-7 right-2 max-w-[13rem] rounded-2xl px-4 py-3">
              <p className="text-sm font-bold">Dr. Srishty Puri Gajbhiye</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Founder, JAAGR Mind
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>About Us</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.7rem]">
              Built by people who have sat with children
              <span className="block text-gradient">
                long before the crisis arrived.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                JAAGR Mind began inside real classrooms, staff rooms and parent
                meetings — not in a lab. Working with students across Indian
                schools made one pattern impossible to ignore: children almost
                always show early signs, but schools rarely have a system to
                notice them in time.
              </p>
              <p>
                So we built one. A practical, everyday system that helps schools
                spot what matters earlier, gives teachers language and
                confidence to respond, and teaches students the skills that make
                them steadier for life.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {BELIEFS.map((b) => (
                <li
                  key={b}
                  className="surface lift rounded-2xl p-4 text-sm font-medium leading-snug text-secondary-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <figure className="surface mt-8 flex gap-4 rounded-2xl p-6">
              <Quote className="h-6 w-6 shrink-0 text-primary" aria-hidden />
              <div>
                <blockquote className="hand text-xl leading-snug text-foreground sm:text-2xl">
                  “JAAGR Mind does not wait for children to struggle loudly. It
                  helps schools build the skills and systems that allow them to
                  notice, support and strengthen students earlier.”
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Dr. Srishty Puri Gajbhiye
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
