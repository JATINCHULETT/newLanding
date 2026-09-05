import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const LINKS = [
  { label: "Why Jaagr", href: "#why-jaagr" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Schools", href: "#for-schools" },
  { label: "For Teachers", href: "#for-teachers" },
  { label: "For Students", href: "#for-students" },
  { label: "About Us", href: "#about-us" },
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-border/70 bg-background/80 backdrop-blur-xl shadow-[0_10px_30px_-24px_oklch(0.32_0.09_288/0.6)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            "shell flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14" : "h-20",
          )}
        >
          <a href="#top" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-all duration-300 hover:scale-105 hover:bg-secondary active:scale-95"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-amber-400 transition-transform duration-300" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-primary transition-transform duration-300" />
              )}
            </button>

            <a
              href="#book-demo"
              className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Book a School Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <div className="shell pb-6 pt-4">
              <div className="surface overflow-hidden p-2">
                <ul className="flex flex-col">
                  {LINKS.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        {l.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-2 flex items-center justify-between border-t border-border/80 px-4 py-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Theme
                  </span>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="h-4 w-4 text-amber-400" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 text-primary" /> Dark Mode
                      </>
                    )}
                  </button>
                </div>

                <a
                  href="#book-demo"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-semibold text-primary-foreground"
                >
                  Book a School Demo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
