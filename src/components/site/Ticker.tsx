const ITEMS = [
  "Evidence-Informed",
  "CBSE-Aligned",
  "Teacher Training",
  "Daily Skill Building",
  "Parent Sensitisation",
  "School Insights",
  "Online Delivery",
  "Student Privacy",
  "Structured School-Year Programme",
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="What Jaagr Mind includes"
      className="border-y border-white/15 bg-[#7061F0] py-4 sm:py-5 text-white shadow-sm"
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
          style={{ animation: "jm-marquee 42s linear infinite" }}
        >
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="text-sm font-medium tracking-wide text-white">{item}</span>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
