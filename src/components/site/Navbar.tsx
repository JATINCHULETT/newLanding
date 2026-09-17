import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, LogIn, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { openExpertModal } from "@/components/site/ExpertConsultationModal";

const LINKS = [
  { label: "Why Jaagr", href: "/#why-jaagr" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Students", href: "/students" },
  { label: "For Teachers", href: "/teachers" },
  { label: "For Parents", href: "/parents" },
  { label: "About Us", href: "/#about-us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 -mb-[4.25rem] sm:-mb-[4.75rem] pt-2.5 sm:pt-3.5 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/70 bg-card/90 px-4 py-2 sm:px-6 sm:py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300",
          scrolled && "border-border/90 bg-card/95 shadow-[var(--shadow-lift)]",
        )}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/70 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary active:scale-95 shadow-sm sm:h-9 sm:w-9 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-primary" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </button>

          {/* Sign In Button */}
          <a
            href="https://login.jaagrmind.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary hover:text-primary active:scale-95 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
          >
            <LogIn className="h-3.5 w-3.5 text-primary" />
            <span>Sign In</span>
          </a>

          <button
            type="button"
            onClick={openExpertModal}
            className="group hidden items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex cursor-pointer"
          >
            Request a Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground cursor-pointer lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-14 sm:top-20 bg-black/60 backdrop-blur-sm z-40 lg:hidden pointer-events-auto"
            />

            {/* Menu drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-50 lg:hidden pointer-events-auto"
            >
              <div className="mx-auto max-w-7xl px-3 sm:px-6 pb-6 pt-2">
                <div className="surface overflow-hidden rounded-3xl p-3 shadow-2xl border border-border/80 bg-background/95 backdrop-blur-2xl">
                  <ul className="flex flex-col">
                    {LINKS.map((l, i) => (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 + i * 0.03 }}
                      >
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary active:bg-secondary/80"
                        >
                          {l.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-col gap-2 border-t border-border/80 pt-3">
                    <a
                      href="https://login.jaagrmind.com"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-base font-semibold text-foreground transition-all active:scale-[0.98] hover:bg-secondary"
                    >
                      <LogIn className="h-4 w-4 text-primary" />
                      Sign In
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        openExpertModal();
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Request a Call <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
