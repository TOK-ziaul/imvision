"use client";

import { useEffect, useState } from "react";

/**
 * Match FullPageSlider's breakpoint so "mobile" (scroll mode) is consistent.
 * Below this width: full-page slider becomes a vertical scroll stack.
 */
export const SLIDER_MOBILE_BREAKPOINT = 800;

/**
 * Returns true when viewport width is strictly below the breakpoint (e.g. mobile).
 */
export function useBreakpoint(maxWidthPx: number = SLIDER_MOBILE_BREAKPOINT): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidthPx - 1}px)`);
    const set = () => setMatches(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, [maxWidthPx]);

  return matches;
}
