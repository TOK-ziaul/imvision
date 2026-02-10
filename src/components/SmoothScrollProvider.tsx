"use client";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Ensure html and body have proper positioning for Lenis
    document.documentElement.style.position = "relative";
    document.body.style.position = "relative";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      // smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wrapper: window,
      content: document.documentElement,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      // Clean up styles
      document.documentElement.style.position = "";
      document.body.style.position = "";
    };
  }, []);

  return <>{children}</>;
}
