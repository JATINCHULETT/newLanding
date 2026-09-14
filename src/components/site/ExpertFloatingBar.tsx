import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUpRight, X, CalendarCheck } from "lucide-react";
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
        <div className="shell flex flex-col sm:flex-row items-center justify-between py-2.5 sm:py-3 gap-2 sm:gap-4 text-xs sm:text-sm">
          {/* Main Message with Phone Link */}
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left">
            <span className="relative flex h-2 w-2 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
            </span>

            <span className="text-white/80 font-normal">Meet our expert! Talk to us at</span>

            <a
              href="tel:+917820001282"
              className="inline-flex items-center gap-1 font-bold text-mint hover:text-white transition-colors tracking-wide underline sm:no-underline sm:hover:underline"
            >
              <Phone className="h-3.5 w-3.5 text-mint inline" />
              +91 78200 01282
            </a>

            <JaagrThreeLines className="h-4 w-5 text-mint/80 hidden lg:inline-block ml-0.5" />

            <span className="text-white/60 hidden sm:inline">or</span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={openExpertModal}
              className="inline-flex items-center gap-1.5 rounded-full bg-mint px-4 py-1.5 text-xs font-bold text-black shadow-md transition-all hover:bg-mint/90 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Request a Call</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={openExpertModal}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white/20 active:scale-95 cursor-pointer"
            >
              <CalendarCheck className="h-3.5 w-3.5 text-primary-soft" />
              <span>Book Demo</span>
            </button>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="rounded-full p-1 text-white/50 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
