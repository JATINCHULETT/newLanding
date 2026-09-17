import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUpRight, X } from "lucide-react";
import { openExpertModal } from "@/components/site/ExpertConsultationModal";
import { JaagrThreeLines } from "@/components/site/OrganicDecorations";

export function ExpertFloatingBar() {
  const [visible, setVisible] = useState(true);

  // Allow reopening or checking local storage if needed
  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-[#1e1131] text-white px-4 py-2 text-xs font-bold shadow-2xl border border-primary/40 backdrop-blur-md transition-all hover:scale-105 hover:border-primary"
        title="Meet Our Expert"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint" />
        </span>
        <Phone className="h-3.5 w-3.5 text-mint" />
        <span>Meet Our Expert</span>
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-40 w-full bg-gradient-to-r from-[#191024]/95 via-[#29173c]/95 to-[#191024]/95 text-white backdrop-blur-md border-t border-primary/30 shadow-[0_-8px_32px_rgba(40,15,60,0.5)]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between sm:justify-center py-1.5 sm:py-2 px-3 sm:px-8 gap-2 sm:gap-4 text-xs sm:text-sm">
          {/* Main Message / Phone */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>

            <span className="text-white/80 hidden md:inline whitespace-nowrap text-xs">
              Meet our expert! Talk to us at
            </span>
            <span className="text-white/80 hidden sm:inline md:hidden whitespace-nowrap text-xs">
              Talk to expert:
            </span>

            <a
              href="tel:+917820001282"
              className="inline-flex items-center gap-1 font-bold text-mint hover:text-white transition-colors tracking-tight text-[11px] sm:text-xs md:text-sm whitespace-nowrap"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-mint shrink-0" />
              +91 78200 01282
            </a>

            <JaagrThreeLines className="h-3.5 w-4 text-mint/80 hidden lg:inline-block ml-0.5" />

            <span className="text-white/60 hidden sm:inline text-xs">or</span>
          </div>

          {/* Action CTA + Dismiss Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={openExpertModal}
              className="group/modal-btn relative overflow-hidden rounded-full bg-mint px-2.5 py-1 sm:px-4 sm:py-1.5 text-[10.5px] sm:text-xs font-bold text-black shadow-md transition-all hover:bg-mint/90 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span className="inline-flex items-center gap-1">
                <span>Request Call</span>
                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </button>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="rounded-full p-1 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
