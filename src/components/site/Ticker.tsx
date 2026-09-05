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
      aria-label="What JAAGR Mind includes"
      className="border-y border-border/70 bg-card/50 py-5"
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_9%,black_91%,transparent)]">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform"
          style={{ animation: "jm-marquee 42s linear infinite" }}
        >
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="text-sm font-medium tracking-wide text-muted-foreground">
                {item}
              </span>
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-primary/40"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
