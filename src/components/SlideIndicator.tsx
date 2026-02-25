"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";

/** Vertical dot strip for fixed slide indicator (desktop). One dot per slide; active has a ring. */
export function SlideIndicatorDots({
  count,
  activeIndex,
  className = "",
  ariaLabel,
}: {
  count: number;
  activeIndex: number;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 right-10 flex flex-col items-center gap-4 select-none z-50 pointer-events-none ${className}`.trim()}
      aria-label={ariaLabel ?? `Slide ${activeIndex + 1} of ${count}`}
      role="status"
    >
      {Array.from({ length: count }, (_, i) => {
        const active = i === activeIndex;
        return (
          <div
            key={i}
            className="relative flex items-center justify-center w-4 h-4"
          >
            {active ? (
              <>
                <span
                  className="absolute w-4 h-4 rounded-full border-2 border-white/40"
                  aria-hidden
                />
                <span className="relative w-2 h-2 rounded-full bg-white shrink-0" />
              </>
            ) : (
              <span className="w-2 h-2 rounded-full bg-white/80" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export type SlideIndicatorNumberVariant = "default" | "accent";

/**
 * Formatted slide number (01, 02, …) for vertical full-page slider slides.
 * When showOnlyOnMobile: renders only below SLIDER_MOBILE_BREAKPOINT (desktop uses fixed dots).
 * variant: default = large top-right style, accent = green small.
 */
export function SlideIndicatorNumber({
  index,
  showOnlyOnMobile = true,
  variant = "default",
  className = "",
  style,
}: {
  index: number;
  showOnlyOnMobile?: boolean;
  variant?: SlideIndicatorNumberVariant;
  className?: string;
  style?: React.CSSProperties;
}) {
  const isMobile = useBreakpoint();
  const displayNumber = String(index).padStart(2, "0");

  if (showOnlyOnMobile && !isMobile) {
    return null;
  }

  const variantClasses =
    variant === "accent"
      ? "text-[#2BCC07] text-sm font-light tracking-[0.3em]"
      : "text-white/30 select-none";
  const defaultStyle =
    variant === "default"
      ? { fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 200 }
      : undefined;

  return (
    <span
      className={`${variantClasses} ${className}`.trim()}
      style={style ?? defaultStyle}
      aria-hidden
    >
      {displayNumber}
    </span>
  );
}
