import React, { useRef, useEffect } from "react";
import { motion, useTransform, useSpring, useMotionValue, MotionValue } from "motion/react";

export interface ParallaxProduct {
  title: string;
  link: string;
  thumbnail: string;
  subtitle?: string;
  badge?: string;
  category?: string;
}

export const HeroParallax = ({
  products,
  header,
  className = "",
}: {
  products: ParallaxProduct[];
  header?: React.ReactNode;
  className?: string;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef<HTMLDivElement>(null);

  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          const vh = window.innerHeight;
          // Start responsive motion as the header and top arrive near top of screen
          const start = vh * 0.2;
          const totalDistance = rect.height - vh * 0.4;
          if (totalDistance > 0) {
            const current = start - rect.top;
            const progress = Math.min(Math.max(current / totalDistance, 0), 1);
            scrollYProgress.set(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [scrollYProgress]);

  const springConfig = { stiffness: 260, damping: 28, bounce: 80 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 850]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -850]),
    springConfig,
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.45], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.25], [0.25, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.45], [16, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.55], [-500, 220]), springConfig);

  return (
    <div
      ref={ref}
      className={`min-h-[160vh] lg:min-h-[190vh] py-20 sm:py-28 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] ${className}`}
    >
      {header || <DefaultHeader />}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="w-full"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12 mb-12 sm:mb-16">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 sm:mb-16 space-x-8 sm:space-x-12">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const DefaultHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-28 px-4 w-full left-0 top-0">
      <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-foreground">
        The Complete School <br /> Wellbeing Ecosystem
      </h2>
      <p className="max-w-2xl text-base md:text-xl mt-6 text-muted-foreground leading-relaxed">
        Explore the practical touchpoints that weave quiet emotional self-awareness into every
        corner of the school day.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      key={product.title}
      className="group/product h-80 w-[24rem] sm:h-96 sm:w-[28rem] lg:w-[32rem] relative shrink-0 rounded-3xl overflow-hidden border border-border/80 bg-card shadow-lg hover:shadow-2xl transition-all"
    >
      <a href={product.link} className="block h-full w-full relative">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          loading="lazy"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-700 group-hover/product:scale-105"
          alt={product.title}
        />
        {/* Subtle base gradient so text is always crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          {product.category && (
            <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md border border-white/15">
              {product.category}
            </span>
          )}
          {product.badge && (
            <span className="inline-flex items-center rounded-full bg-mint/90 px-3 py-1 text-[0.7rem] font-bold text-mint-foreground shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-0 inset-x-0 p-6 pointer-events-none">
          <h3 className="text-xl font-bold text-white leading-tight drop-shadow-sm group-hover/product:text-mint transition-colors">
            {product.title}
          </h3>
          {product.subtitle && (
            <p className="mt-1.5 text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
              {product.subtitle}
            </p>
          )}
        </div>

        {/* Hover Highlight Glow */}
        <div className="absolute inset-0 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none ring-2 ring-primary/60 rounded-3xl" />
      </a>
    </motion.div>
  );
};
