import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Phone,
  Sparkles,
  X,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Building2,
} from "lucide-react";
import emotionsMadeEasyImg from "@/assets/emotions-made-easy.png";
import { JaagrThreeLines } from "@/components/site/OrganicDecorations";

export function openExpertModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-expert-modal"));
  }
}

export function closeExpertModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-expert-modal"));
  }
}

export function useExpertModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    window.addEventListener("open-expert-modal", handleOpen);
    window.addEventListener("close-expert-modal", handleClose);
    return () => {
      window.removeEventListener("open-expert-modal", handleOpen);
      window.removeEventListener("close-expert-modal", handleClose);
    };
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}

export function ExpertConsultationModal() {
  const { isOpen, close } = useExpertModal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "School Leader / Principal",
    program: "School Pilot Program",
    school: "",
    city: "",
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-border bg-card text-card-foreground shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-12 min-h-[580px]">
              {/* Left Column: Image & Highlights (Scaler-style dark card) */}
              <div className="lg:col-span-5 bg-[#0a0f1d] text-white p-6 sm:p-8 flex flex-col justify-between rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-primary/30 blur-2xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-mint/20 blur-2xl"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-mint">
                      <Sparkles className="h-3 w-3" /> Expert Consultation
                    </span>
                    <JaagrThreeLines className="h-4 w-5 text-mint" />
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-extrabold leading-tight text-white">
                    Make Young Minds <span className="text-mint">Emotionally Aware</span>
                  </h3>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">
                    Speak directly with our school wellbeing advisors to see how JAAGR transforms
                    student focus and stress resilience.
                  </p>

                  {/* Centered Image Uploaded by User */}
                  <div className="mt-5 relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-inner group">
                    <img
                      src={emotionsMadeEasyImg}
                      alt="Emotions Made Easy - JAAGR Mind"
                      className="w-full h-44 sm:h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[0.7rem] text-white/90">
                      <span className="font-semibold">JAAGR Mind System</span>
                      <span className="text-mint">CBSE & NEP Aligned</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs text-white/80">
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-mint shrink-0" />
                    <span>Quick 15-minute walkthrough, no sales fluff</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Zero teacher burden & 100% student privacy</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-mint shrink-0" />
                    <span>
                      Direct helpline: <strong>+91 78200 01282</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form (Scaler-style clean inputs) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint/15 text-mint mb-4">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground">Request Received!</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you,{" "}
                      <strong className="text-foreground">{formData.name || "Educator"}</strong>.
                      Our wellbeing advisor will call you shortly at{" "}
                      <strong className="text-primary">
                        {formData.phone || "+91 78200 01282"}
                      </strong>
                      .
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="tel:+917820001282"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
                      >
                        <Phone className="h-3.5 w-3.5" /> Call Directly: +91 78200 01282
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          close();
                        }}
                        className="rounded-full border border-border px-5 py-3 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
                      >
                        Close Window
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                          Talk to Our Advisor
                        </h2>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Fill out the details below to request a call or schedule a school demo.
                        </p>
                      </div>
                      <JaagrThreeLines className="h-5 w-6 text-primary/70 hidden sm:block" />
                    </div>

                    <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                      {/* Name */}
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      {/* Phone with India prefix */}
                      <div className="flex rounded-xl border border-border bg-background overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                        <span className="inline-flex items-center gap-1.5 px-3 bg-secondary/60 text-xs font-semibold text-foreground border-r border-border select-none">
                          <span role="img" aria-label="India flag">
                            🇮🇳
                          </span>{" "}
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-transparent px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
                        />
                      </div>

                      {/* Role dropdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[0.7rem] font-semibold text-muted-foreground mb-1">
                            Your Role *
                          </label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                          >
                            <option value="School Leader / Principal">
                              Principal / School Leader
                            </option>
                            <option value="School Counselor / Wellness Head">
                              School Counselor / Wellness Head
                            </option>
                            <option value="Teacher / Academic Coordinator">
                              Teacher / Academic Coordinator
                            </option>
                            <option value="Parent">Parent</option>
                            <option value="Student">Student</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* Program dropdown */}
                        <div>
                          <label className="block text-[0.7rem] font-semibold text-muted-foreground mb-1">
                            Interested In *
                          </label>
                          <select
                            value={formData.program}
                            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground outline-none focus:border-primary"
                          >
                            <option value="School Pilot Program">School Pilot Program</option>
                            <option value="Student 60s Habits">Student 60s Pulse & Sparks</option>
                            <option value="Teacher Training & SEN">
                              Teacher Training & SEN Support
                            </option>
                            <option value="Parent Workshop">Parent Wellbeing Workshop</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      {/* School / City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="School / Organization name"
                          value={formData.school}
                          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary"
                        />
                        <input
                          type="text"
                          placeholder="City / State (e.g. Pune, Delhi)"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary"
                        />
                      </div>

                      {/* Submit button (Scaler-style high impact) */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-primary-foreground shadow-lg transition-all hover:bg-primary/95 hover:shadow-xl focus:ring-4 focus:ring-primary/20 disabled:opacity-70 cursor-pointer"
                        >
                          {loading ? "Processing..." : "REQUEST A CALL"}
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Fine print */}
                      <p className="text-[0.68rem] text-center text-muted-foreground leading-relaxed pt-1">
                        By submitting this form, you agree to our Terms of Service & Privacy Policy
                        and to be contacted by us via Call/Email/WhatsApp/SMS.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
