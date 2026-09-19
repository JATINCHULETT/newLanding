import { useState, useEffect } from "react";
import { ArrowRight, Check, Paperclip, Download, X, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { openExpertModal } from "@/components/site/ExpertConsultationModal";

const SUPPORTS = [
  "Structured implementation",
  "Staff training",
  "Wellbeing initiatives",
  "Documentation",
  "Reporting",
  "Parent engagement",
  "School-level insights",
];

function CBSESeal({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CBSE Official Emblem"
    >
      {/* Outer concentric rings */}
      <circle cx="50" cy="50" r="47" stroke="#b45309" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" stroke="#d97706" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="39" stroke="#b45309" strokeWidth="1.5" />
      
      {/* Inner sun rays */}
      <g stroke="#d97706" strokeWidth="1.5" strokeLinecap="round">
        <line x1="50" y1="20" x2="50" y2="13" />
        <line x1="39" y1="23" x2="35" y2="17" />
        <line x1="61" y1="23" x2="65" y2="17" />
        <line x1="30" y1="30" x2="24" y2="26" />
        <line x1="70" y1="30" x2="76" y2="26" />
        <line x1="24" y1="40" x2="17" y2="38" />
        <line x1="76" y1="40" x2="83" y2="38" />
      </g>
      
      {/* Sun disk */}
      <circle cx="50" cy="36" r="10" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
      
      {/* Flame of knowledge / Diya */}
      <path
        d="M50 25 C47 30 46 33 50 38 C54 33 53 30 50 25 Z"
        fill="#f59e0b"
        stroke="#b45309"
        strokeWidth="1"
      />
      
      {/* Open Book */}
      <path
        d="M50 56 L32 50 C38 46 45 46 50 49 C55 46 62 46 68 50 Z"
        fill="#ffffff"
        stroke="#b45309"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M50 56 L32 63 C38 59 45 59 50 62 C55 59 62 59 68 63 Z"
        fill="#fef3c7"
        stroke="#b45309"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="50" y1="49" x2="50" y2="62" stroke="#b45309" strokeWidth="1.5" />

      {/* Decorative wreath leaves */}
      <path
        d="M24 64 C22 72 32 78 50 79 C68 78 78 72 76 64"
        stroke="#b45309"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 67 C36 74 64 74 72 67"
        stroke="#d97706"
        strokeWidth="1"
        fill="none"
        strokeDasharray="2 2"
      />

      {/* Small emblem base */}
      <path
        d="M38 82 H62 L59 86 H41 Z"
        fill="#b45309"
      />
    </svg>
  );
}

export function CBSESection() {
  const [isCircularOpen, setIsCircularOpen] = useState(false);

  // Close modal on Escape key and prevent background scrolling
  useEffect(() => {
    if (!isCircularOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCircularOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCircularOpen]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="shell">
        <div className="ink-panel relative overflow-hidden rounded-4xl px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-mint/15 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow tone="light">School readiness</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Build your school&apos;s wellbeing system with confidence.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-indigo-foreground/70">
                  Jaagr works alongside your existing wellbeing approach, giving your team the
                  structure, materials and records that school wellbeing initiatives ask for.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {SUPPORTS.map((s) => (
                    <li
                      key={s}
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-foreground/15 bg-indigo-foreground/8 px-3.5 py-2 text-sm text-indigo-foreground/85"
                    >
                      <Check className="h-3.5 w-3.5 text-mint" aria-hidden />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={openExpertModal}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-100 shadow-sm cursor-pointer"
                  >
                    Request a Call
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsCircularOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-foreground/20 bg-indigo-foreground/10 px-4 py-3 text-xs sm:text-sm font-medium text-indigo-foreground/90 transition-all duration-200 hover:bg-indigo-foreground/15 hover:border-indigo-foreground/30 cursor-pointer"
                  >
                    <Paperclip className="h-4 w-4 text-mint rotate-[-45deg]" aria-hidden />
                    <span>Attached: CBSE Circular (TRG–03/2026)</span>
                  </button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -left-4 top-6 h-full w-full rotate-[-4deg] rounded-3xl border border-indigo-foreground/10 bg-indigo-foreground/6" />
                <div className="relative rounded-3xl bg-card p-7 shadow-[var(--shadow-lift)]">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#4f46e5]">
                      School wellbeing record
                    </p>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-mint/50 bg-mint/15 px-2.5 py-0.5 text-[0.68rem] font-semibold text-mint-foreground">
                      <ShieldCheck className="h-3.5 w-3.5 text-mint-foreground" aria-hidden />
                      <span>CBSE Verified</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Implementation plan",
                      "Staff training log",
                      "Term participation summary",
                      "Parent engagement record",
                      "Annual wellbeing review",
                    ].map((line, i) => (
                      <div key={line} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/40 text-mint-foreground">
                          <Check className="h-3 w-3 stroke-[2.5]" aria-hidden />
                        </span>
                        <span className="text-sm text-foreground">{line}</span>
                        {i === 4 && (
                          <span className="ml-auto text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
                            Year end
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground">
                      Documentation your school can keep, share and build on.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* CBSE Circular Modal Popup */}
      {isCircularOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsCircularOpen(false)}
        >
          <div
            className="relative flex flex-col w-full max-w-2xl max-h-[92vh] rounded-2xl bg-[#0e1320] border border-white/15 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="bg-[#090d16] px-5 py-3.5 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <Paperclip className="h-5 w-5 text-mint shrink-0" aria-hidden />
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    Attached: CBSE Circular No. TRG-03 /2026
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Dated 20.02.2026 • Supreme Court Judgment Compliance Directive
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="hover:text-white transition p-1 cursor-pointer"
                  title="Print / Save Document"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsCircularOpen(false)}
                  className="hover:text-white transition p-1 cursor-pointer"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Document Content Paper */}
            <div className="p-3 sm:p-5 overflow-y-auto flex-1 bg-[#0e1320]">
              <div className="bg-white text-gray-900 rounded-xl p-5 sm:p-8 shadow-lg border border-gray-200">
                {/* Official Circular Header */}
                <div className="flex items-center gap-4 sm:gap-6 border-b border-gray-300 pb-3">
                  <CBSESeal className="h-16 w-16 sm:h-20 sm:w-20 shrink-0" />
                  <div className="flex-1 text-center font-serif">
                    <h4 className="text-base sm:text-xl font-bold text-gray-900 tracking-wide">
                      केन्द्रीय माध्यमिक शिक्षा बोर्ड
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-700 font-sans mt-0.5">
                      (शिक्षा मंत्रालय, भारत सरकार के अधीन एक स्वायत्त संगठन)
                    </p>
                    <h5 className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider mt-1 uppercase">
                      Central Board of Secondary Education
                    </h5>
                    <p className="text-[9px] sm:text-[11px] text-gray-700 font-sans">
                      (An Autonomous Organisation Under the Ministry of Education, Govt. of India)
                    </p>
                  </div>
                </div>

                {/* Circular Metadata */}
                <div className="mt-3 flex justify-between items-start text-[11px] sm:text-xs text-gray-800 font-sans">
                  <div>No: CBSE/Training Unit/2026</div>
                  <div className="text-right">
                    <div>Date: 20.02.2026</div>
                    <div className="font-bold">Circular No. TRG-03 /2026</div>
                  </div>
                </div>

                {/* Recipient */}
                <div className="mt-4 text-[11px] sm:text-xs font-semibold text-gray-900 font-sans leading-snug">
                  <div>All the Principals/Heads of Schools</div>
                  <div>Affiliated to CBSE</div>
                </div>

                {/* Subject */}
                <div className="mt-3.5 text-center text-[11px] sm:text-xs font-bold text-gray-900 font-sans">
                  Subject: Promoting &apos;Mental Health and Wellness&apos; and &apos;Social Emotional Learning&apos; in Schools
                </div>

                {/* Intro Body */}
                <p className="mt-3 text-[11px] sm:text-xs leading-relaxed text-gray-800 font-sans text-justify">
                  In today&apos;s dynamic and demanding educational landscape, the emotional resilience and mental health of our students require collective attention and proactive support. The Hon&apos;ble Supreme Court of India in its Judgment dated 25.07.2025 in Criminal Appeal No 3177/2025, has laid down certain guidelines, compliance of which is expected from all of us. Accordingly,
                </p>

                {/* Numbered Directives */}
                <ol className="mt-3 space-y-2.5 text-[11px] sm:text-xs leading-relaxed text-gray-800 font-sans text-justify">
                  <li className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">1.</span>
                    <span>
                      All teaching and non-teaching staff shall undergo mandatory training at least twice a year, conducted by certified mental health professional, on psychological first aid, identification of warning signs, response to self-harm and referral mechanism. All teaching, non-teaching and administrative staff is adequately trained to engage with students in a sensitive, inclusive and non-discriminatory manner.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">2.</span>
                    <span>
                      Schools shall regularly organise sensitisation program for parents and guardians on students&apos; mental health. It shall sensitise parents and guardians to avoid placing undue academic pressure, to recognise signs of psychological distress, and to respond, empathetically and supportively. Further mental health literacy, emotional regulation, life skills education, and awareness of institutional support services shall be integrated into student orientation programmes and curricular activities.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-gray-900 shrink-0">3.</span>
                    <span>
                      The school shall maintain anonymous records and prepare an annual report, indicating the number of wellness interventions, student referrals, training sessions, and mental health related activities.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="bg-[#090d16] px-5 py-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 text-mint text-xs sm:text-[13px] font-medium">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
                <span>Jaagr Mind provides 100% turnkey compliance for all 3 circular directives</span>
              </div>
              <div className="flex items-center gap-2.5 shrink-0 justify-end">
                <button
                  type="button"
                  onClick={() => setIsCircularOpen(false)}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10 transition cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#book-demo"
                  onClick={() => setIsCircularOpen(false)}
                  className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-gray-950 hover:bg-gray-100 transition shadow cursor-pointer"
                >
                  Book School Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

