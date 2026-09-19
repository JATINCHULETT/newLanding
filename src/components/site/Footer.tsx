import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { openExpertModal } from "@/components/site/ExpertConsultationModal";


const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Why Jaagr", href: "/#why-jaagr" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "About Us", href: "/#about-us" },
      { label: "Get Started", href: "https://app.jaagrmind.com" },
    ],
  },
  {
    title: "For",
    links: [
      { label: "Students", href: "/students" },
      { label: "Teachers", href: "/teachers" },
      { label: "Parents", href: "/parents" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="ink-panel relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-75">
              A school-wide emotional fitness system that helps Indian schools notice earlier,
              respond with confidence and build strength before problems become crises.
            </p>
            <p className="hand mt-5 text-xl text-mint">Notice early. Strengthen daily.</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm opacity-75 transition-opacity duration-300 hover:opacity-100"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              Talk to us
            </h3>
            <ul className="mt-4 space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-mint" aria-hidden />
                <a href="mailto:support@jaagrmind.com" className="hover:opacity-100">
                  support@jaagrmind.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-mint" aria-hidden />
                <a href="tel:+917820001282" className="hover:opacity-100 font-semibold text-mint">
                  +91 78200 01282
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-mint" aria-hidden />
                <span>India</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={openExpertModal}
              className="mt-6 inline-flex rounded-full bg-mint px-5 py-3 text-sm font-semibold text-mint-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request A Call
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs opacity-65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jaagr Mind. All rights reserved.</p>
          <p>Not a therapy or clinical service. Preventive, skills-based school programme.</p>
        </div>
      </div>
    </footer>
  );
}
