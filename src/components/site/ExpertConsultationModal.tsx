import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Loader2, Phone, ShieldCheck } from "lucide-react";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@/components/ui/animated-modal";

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
    setIsOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}

export function ExpertConsultationModal() {
  const { isOpen, setIsOpen, close } = useExpertModal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Principal / School Head",
    school: "",
    city: "",
    strength: "",
    preferredTime: "Call ASAP (Next Available)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "Principal / School Head",
      school: "",
      city: "",
      strength: "",
      preferredTime: "Call ASAP (Next Available)",
      message: "",
    });
  };

  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      <ModalBody className="max-w-2xl border-primary/20 bg-background/95 backdrop-blur-xl">
        <ModalContent className="p-5 sm:p-6">
          {/* Compact Top Header Bar */}
          <div className="flex items-center justify-between pb-2.5 border-b border-border/70 pr-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Callback &amp; School Demo Request
              </span>
            </div>
            <span className="text-[0.7rem] text-muted-foreground hidden sm:inline">
              Direct response within 24 hours
            </span>
          </div>

          {/* MAIN CONTENT BODY */}
          {submitted ? (
            /* Success confirmation */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint/20 text-mint">
                <CheckCircle2 className="h-8 w-8 text-mint" />
              </div>
              <h4 className="mt-3 text-lg font-extrabold text-foreground">
                Call Request Received!
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you,{" "}
                <span className="font-semibold text-foreground">{formData.name || "Educator"}</span>
                . Our school wellbeing advisor will call you at{" "}
                <span className="font-semibold text-primary">
                  {formData.phone ? `+91 ${formData.phone}` : "your number"}
                </span>{" "}
                {formData.preferredTime ? `(${formData.preferredTime})` : "shortly"}
                {formData.school ? ` for ${formData.school}` : ""}.
              </p>

              <div className="mt-5 inline-flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:+917820001282"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Directly: +91 78200 01282
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="mt-3 space-y-3">
              {/* Form: Unified Callback & Demo Request */}
              <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* Row 1: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name (e.g. Dr. Ananya Sharma)"
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@school.edu.in"
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Role */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Phone Number / WhatsApp *
                    </label>
                    <div className="mt-1 flex rounded-xl border border-border bg-background overflow-hidden focus-within:border-primary">
                      <span className="inline-flex items-center gap-1 px-2.5 bg-secondary text-[0.7rem] font-semibold border-r border-border text-foreground select-none shrink-0">
                        🇮🇳 +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="78200 01282"
                        className="w-full bg-transparent px-3 py-1.5 text-xs text-foreground outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Your Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none cursor-pointer"
                    >
                      <option>Principal / School Head</option>
                      <option>Trustee / Management Leader</option>
                      <option>School Counselor / Psychologist</option>
                      <option>Academic Coordinator / Teacher</option>
                      <option>Parent / PTA Representative</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: School Name & City */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      School Name
                    </label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      placeholder="e.g. DPS, Bangalore"
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Bengaluru"
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 4: Student Strength & Callback Time */}
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Student Strength
                    </label>
                    <select
                      value={formData.strength}
                      onChange={(e) => setFormData({ ...formData, strength: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none cursor-pointer"
                    >
                      <option value="">Select student count</option>
                      <option>Under 500 students</option>
                      <option>500 to 1,500 students</option>
                      <option>1,500 to 3,000 students</option>
                      <option>3,000+ students</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Preferred Callback Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none cursor-pointer"
                    >
                      <option>Call ASAP (Next Available)</option>
                      <option>Morning (9:00 AM – 12:00 PM)</option>
                      <option>Afternoon (12:00 PM – 4:00 PM)</option>
                      <option>Evening (4:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: What would you like to solve first? */}
                <div>
                  <label className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                    What would you like to solve first? (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Exam anxiety, student emotional fitness, teacher training"
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Action & Terms */}
                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <p className="text-[0.66rem] text-muted-foreground leading-snug order-2 sm:order-1 text-center sm:text-left">
                    By submitting, you agree to our Terms &amp; Privacy Policy.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 disabled:opacity-60 cursor-pointer shrink-0"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        Confirm Request <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Direct Dial Fast Track Banner (Downside) */}
              <div className="rounded-xl border border-mint/40 bg-mint/10 p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <div>
                  <p className="text-xs font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-mint" /> Need an instant answer?
                  </p>
                  <p className="text-[0.72rem] text-muted-foreground">
                    Call our lead educator directly on our dedicated line.
                  </p>
                </div>
                <a
                  href="tel:+917820001282"
                  className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1.5 text-xs font-bold text-black shadow-sm hover:bg-mint/90 transition-all hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>+91 78200 01282</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}
        </ModalContent>

        {/* Modal Footer */}
        <ModalFooter className="justify-between py-2.5 px-5 sm:px-6">
          <div className="flex items-center gap-1.5 text-[0.72rem] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-mint" />
            <span>100% Confidential. Zero sales pressure.</span>
          </div>

          <button
            type="button"
            onClick={close}
            className="rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Close
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
