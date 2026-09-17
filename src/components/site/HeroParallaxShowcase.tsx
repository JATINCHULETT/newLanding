import { useState, useRef, useEffect } from "react";
import { HeroParallax, type ParallaxProduct } from "@/components/ui/hero-parallax";
import { Eyebrow, Reveal } from "@/lib/motion-primitives";
import { JaagrThreeLines, OrganicDecorations } from "@/components/site/OrganicDecorations";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import studentHeroImg from "@/assets/student-hero-banner.png";
import studentMindfulnessImg from "@/assets/student-mindfulness.jpg";
import studentFriendshipImg from "@/assets/students-friendship.jpg";
import storyClassroomImg from "@/assets/story-classroom.png";
import heroEcosystemImg from "@/assets/hero-ecosystem.png";
import emotionsMadeEasyImg from "@/assets/emotions-made-easy.png";
import schoolGatePosterImg from "@/assets/school-gate-poster.jpg";

const JAAGR_PARALLAX_ITEMS: ParallaxProduct[] = [
  // Row 1: Student & Classroom Moments
  {
    title: "Jaagr Pulse",
    subtitle:
      "A safe, 60-second morning mood check-in building emotional literacy without judgment.",
    category: "Student Routine",
    badge: "60 Seconds",
    link: "/students",
    thumbnail: studentHeroImg,
  },
  {
    title: "Box Breathing Reset",
    subtitle: "4-4-4-4 neuroscience-informed breathing cadence practiced right before board exams.",
    category: "Micro-Spark",
    badge: "Instant Calm",
    link: "/students",
    thumbnail: studentMindfulnessImg,
  },
  {
    title: "5-4-3-2-1 Sensory Grounding",
    subtitle: "Tactile cues that rapidly anchor students when classroom overstimulation peaks.",
    category: "Regulation Tool",
    badge: "Grounding",
    link: "/students",
    thumbnail:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Exam Resilience Journey",
    subtitle:
      "Term-long mental conditioning to convert exam fear into steady, focused preparation.",
    category: "Personal Track",
    badge: "Resilience",
    link: "/students",
    thumbnail: studentFriendshipImg,
  },
  {
    title: "Classroom Climate Signals",
    subtitle: "Simple, aggregated emotional patterns across grades with zero extra grading work.",
    category: "Teacher Insights",
    badge: "Zero Workload",
    link: "/teachers",
    thumbnail: storyClassroomImg,
  },

  // Row 2: Teacher & Family Interventions
  {
    title: "2-Minute Teacher Playbooks",
    subtitle:
      "Concrete classroom strategies giving teachers confidence to de-escalate stress quickly.",
    category: "Educator Toolkit",
    badge: "Practical",
    link: "/teachers",
    thumbnail:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Counselor Escalation Hub",
    subtitle:
      "Discreet early-signal pathways so students receive professional care before crises arise.",
    category: "Early Support",
    badge: "Confidential",
    link: "/#book-demo",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Parent Dinner Sparks",
    subtitle: "Weekly gentle prompts that spark rich, warm dinner conversations without pressure.",
    category: "Family Trust",
    badge: "At Home",
    link: "/parents",
    thumbnail:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Progressive Muscle Release",
    subtitle:
      "Isometric micro-exercises designed to relieve physical neck, shoulder, and back tension.",
    category: "Somatic Reset",
    badge: "Bite-Sized",
    link: "/students",
    thumbnail:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Emotional Vocabulary Wheel",
    subtitle:
      "Empowering Indian adolescents to articulate nuanced feelings beyond simple frustration.",
    category: "Curriculum",
    badge: "Vocabulary",
    link: "/#how-it-works",
    thumbnail: emotionsMadeEasyImg,
  },

  // Row 3: Institutional Wellbeing Architecture
  {
    title: "CBSE & NEP 2020 Compliance",
    subtitle: "Automated wellness audit documentation mapped to national educational directives.",
    category: "Leadership",
    badge: "Accredited",
    link: "/#cbse-alignment",
    thumbnail: heroEcosystemImg,
  },
  {
    title: "Deep Study & Focus Tracks",
    subtitle:
      "Evidence-based attention training to help teens disconnect from digital distraction.",
    category: "Academic Fitness",
    badge: "Focus",
    link: "/students",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "100% Student-First Privacy",
    subtitle: "Non-invasive zero-grading environment guaranteeing total psychological safety.",
    category: "Trust Standard",
    badge: "No Spying",
    link: "/#why-jaagr",
    thumbnail:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Staff Room Wellbeing Culture",
    subtitle:
      "Supportive faculty culture sessions ensuring teacher burnout is prevented proactively.",
    category: "Teacher Care",
    badge: "Community",
    link: "/teachers",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Annual School Growth Review",
    subtitle:
      "Annual longitudinal wellbeing trends providing clear metrics to principals and trustees.",
    category: "Analytics",
    badge: "Strategic",
    link: "/#book-demo",
    thumbnail: schoolGatePosterImg,
  },
];

export function HeroParallaxShowcase() {
  const customHeader = (
    <div className="shell relative z-10 pt-10 pb-12 sm:pb-16 text-center max-w-4xl mx-auto">
      <Reveal>
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> The Living Ecosystem
          </span>
          <JaagrThreeLines className="h-4 w-6 text-primary" />
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.15]">
          Every corner of your school day.{" "}
          <span className="text-gradient block mt-1 sm:inline">Strengthened in motion.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          Scroll through the real surfaces of Jaagr Mind: from autonomous 60-second morning
          check-ins and teacher de-escalation playbooks to parent dinner connection cards and
          CBSE-compliant audit reports.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/#book-demo"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-105 hover:bg-primary/90"
          >
            See Live School Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/students"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Explore Student Tools
          </a>
        </div>
      </Reveal>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border/50">
      <OrganicDecorations />

      {/* Desktop & Wide Screen: Full 3D Cinematic Parallax (lg and above) */}
      <div className="hidden lg:block">
        <HeroParallax products={JAAGR_PARALLAX_ITEMS} header={customHeader} />
      </div>

      {/* Mobile & Tablet: Touch-Optimized Snap Carousel with Category Pills (< lg) */}
      <div className="block lg:hidden">
        <MobileEcosystemShowcase products={JAAGR_PARALLAX_ITEMS} />
      </div>
    </section>
  );
}

function MobileEcosystemShowcase({ products }: { products: ParallaxProduct[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { label: "All Surfaces", value: "All" },
    { label: "Students", value: "Students" },
    { label: "Teachers", value: "Teachers" },
    { label: "Leadership & Family", value: "Leadership" },
  ];

  const filtered = products.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Students") {
      return (
        item.link === "/students" ||
        item.category?.toLowerCase().includes("student") ||
        item.category?.toLowerCase().includes("spark") ||
        item.category?.toLowerCase().includes("regulation") ||
        item.category?.toLowerCase().includes("personal") ||
        item.category?.toLowerCase().includes("academic")
      );
    }
    if (activeCategory === "Teachers") {
      return (
        item.link === "/teachers" ||
        item.category?.toLowerCase().includes("teacher") ||
        item.category?.toLowerCase().includes("educator")
      );
    }
    if (activeCategory === "Leadership") {
      return (
        item.link === "/parents" ||
        item.link.includes("cbse") ||
        item.link.includes("book-demo") ||
        item.category?.toLowerCase().includes("leadership") ||
        item.category?.toLowerCase().includes("family") ||
        item.category?.toLowerCase().includes("trust") ||
        item.category?.toLowerCase().includes("analytics") ||
        item.category?.toLowerCase().includes("early support") ||
        item.category?.toLowerCase().includes("curriculum")
      );
    }
    return true;
  });

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 320 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), filtered.length - 1));
  };

  useEffect(() => {
    checkScroll();
  }, [filtered]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 relative">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <Reveal>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> The Living Ecosystem
            </span>
            <JaagrThreeLines className="h-3.5 w-5 text-primary" />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-snug">
            Every corner of your school day.{" "}
            <span className="text-gradient block mt-1">Strengthened in motion.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Swipe through real touchpoints: 60-second morning check-ins, teacher de-escalation
            playbooks, parent dinner cards, and CBSE-compliant audit reports.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/#book-demo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
            >
              See Live School Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/students"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Explore Student Tools
            </a>
          </div>
        </Reveal>
      </div>

      {/* Category Filter Pills */}
      <div className="max-w-xl mx-auto mb-5">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }
                }}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card/80 border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Horizontal Snap Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 scrollbar-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {filtered.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group shrink-0 snap-center w-[82vw] max-w-[320px] sm:w-[340px] rounded-3xl overflow-hidden border border-border/80 bg-card shadow-md flex flex-col active:scale-[0.98] transition-all"
          >
            {/* Thumbnail Image Container */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-muted">
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                {item.category && (
                  <span className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/95 backdrop-blur-md border border-white/15">
                    {item.category}
                  </span>
                )}
                {item.badge && (
                  <span className="inline-flex items-center rounded-full bg-mint/90 px-2.5 py-1 text-[0.65rem] font-bold text-mint-foreground shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Title inside bottom of image */}
              <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm line-clamp-1 group-hover:text-mint transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-4 flex flex-col justify-between flex-1 bg-card">
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {item.subtitle}
              </p>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/50 text-xs font-semibold text-primary">
                <span>Explore tool</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Navigation & Swipe Helper Bar */}
      <div className="mt-3 flex items-center justify-between max-w-xl mx-auto px-1">
        <p className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
          <span>
            Card {currentIndex + 1} of {filtered.length}
          </span>
          <span className="hidden sm:inline text-muted-foreground/60">
            • Swipe sideways to explore
          </span>
        </p>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous card"
            className="h-8 w-8 rounded-full border border-border bg-card/90 flex items-center justify-center text-foreground hover:bg-secondary disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next card"
            className="h-8 w-8 rounded-full border border-border bg-card/90 flex items-center justify-center text-foreground hover:bg-secondary disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
