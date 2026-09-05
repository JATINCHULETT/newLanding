import darkLogo from "@/assets/DarkColorLogo.svg";
import lightLogo from "@/assets/LightColorLogo.svg";

export function Logo({
  tone,
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  // If tone is explicitly "light" (e.g. in the dark Footer), always render the white/light logo
  if (tone === "light") {
    return (
      <span
        className={`inline-flex items-center ${className}`}
        aria-label="JAAGR MIND"
      >
        <img
          src={lightLogo}
          alt="JAAGR MIND"
          className="h-8 w-auto max-w-[160px] object-contain sm:h-9 sm:max-w-[180px]"
        />
      </span>
    );
  }

  // Default: adapts automatically to light / dark mode
  return (
    <span
      className={`relative inline-flex items-center ${className}`}
      aria-label="JAAGR MIND"
    >
      {/* Light mode: dark colored logo */}
      <img
        src={darkLogo}
        alt="JAAGR MIND"
        className="h-8 w-auto max-w-[160px] object-contain dark:hidden sm:h-9 sm:max-w-[180px]"
      />
      {/* Dark mode: light colored logo */}
      <img
        src={lightLogo}
        alt="JAAGR MIND"
        className="hidden h-8 w-auto max-w-[160px] object-contain dark:block sm:h-9 sm:max-w-[180px]"
      />
    </span>
  );
}
