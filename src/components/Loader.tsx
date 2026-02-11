"use client";

import { cubicBezier, motion } from "motion/react";
import type { EasingFunction } from "motion/react";
import { useEffect, useState } from "react";

const CAROUSEL_DURATION = 0.8;
const customEase: EasingFunction = cubicBezier(0.22, 1, 0.36, 1);

const TEXTS = ["VISION.", "TECHNOLOGY.", "EXPERIENCE."] as const;
const DELAYS_MS = [0, 1400, 2600];

const CURTAIN_DELAY = 4.2;
const CURTAIN_DURATION = 0.9;

const LINE_HEIGHT_STYLE = "clamp(3rem, 10vw, 7rem)";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timers = DELAYS_MS.map((ms, i) =>
      setTimeout(() => setActiveIndex(i), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleCurtainComplete = () => {
    document.body.style.overflow = "unset";
    setIsLoading(false);
  };

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{
        delay: CURTAIN_DELAY,
        duration: CURTAIN_DURATION,
        ease: customEase,
      }}
      onAnimationComplete={handleCurtainComplete}
    >
      {/* Single-line viewport: only one item visible, always centered */}
      <div
        className="w-full overflow-hidden flex items-start justify-center"
        style={{ height: LINE_HEIGHT_STYLE }}
      >
        <motion.div
          className="flex flex-col items-center justify-start w-full"
          style={{ height: "300%" }}
          initial={{ y: "0%" }}
          animate={{ y: `-${activeIndex * 33.333}%` }}
          transition={{ duration: CAROUSEL_DURATION, ease: customEase }}
        >
          {TEXTS.map((text) => (
            <div
              key={text}
              className="flex items-center justify-center w-full shrink-0"
              style={{ height: "33.333%", minHeight: LINE_HEIGHT_STYLE }}
            >
              <h1
                className="text-white uppercase text-center"
                style={{
                  fontSize: LINE_HEIGHT_STYLE,
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                {text}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
