"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import { AboutStatsSection } from "@/components/AboutStatsSection";
import Image from "next/image";
import { ContactSection } from "@/components/ContactSection";

const TOTAL_SLIDES = 3; // Hero, Stats, Contact
const BG_TRANSITION = { duration: 1.2, ease: [0.4, 0, 0.2, 1] };
// Content scrolls when background is half scrolled
const CONTENT_TRANSITION = {
  duration: 0.6,
  delay: 0.3,
  ease: [0.4, 0, 0.2, 1],
};
// Content carousel uses small height so change happens over short vertical distance (not full viewport)
const CONTENT_SLIDE_HEIGHT_VH = 90;

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroImage =
    "https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwdGVjaG5vbG9neSUyMGluc3RhbGxhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMzU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const contactImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 200) return;
      lastScrollTime.current = now;

      if (isAnimating) return;
      if (Math.abs(e.deltaY) < 10) return;

      setActiveIndex((i) => {
        const next =
          e.deltaY > 0 ? Math.min(i + 1, TOTAL_SLIDES - 1) : Math.max(i - 1, 0);

        if (next !== i) {
          setIsAnimating(true);
        }
        return next;
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) return;

    const MAX_TRANSITION =
      Math.max(
        BG_TRANSITION.duration,
        CONTENT_TRANSITION.duration + (CONTENT_TRANSITION.delay ?? 0),
      ) * 1000;

    const t = setTimeout(() => {
      setIsAnimating(false);
    }, MAX_TRANSITION + 100); // buffer to fully settle

    return () => clearTimeout(t);
  }, [isAnimating]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Slider 1: Background strip – Hero, Stats, Contact */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full"
          style={{ height: `${TOTAL_SLIDES * 100}vh` }}
          animate={{ y: `-${activeIndex * 100}vh` }}
          transition={BG_TRANSITION as object}
        >
          <div className="h-screen w-full relative">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={heroImage}
              alt="bg-1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full relative">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={contactImage}
              alt="bg-contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
        </motion.div>
      </div>
      {/* Slider 2: Content carousel – small height, centered; content change over short vertical distance */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <div
          className="w-full overflow-hidden"
          style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
        >
          <motion.div
            className="w-full"
            style={{ height: `${TOTAL_SLIDES * CONTENT_SLIDE_HEIGHT_VH}vh` }}
            animate={{ y: `-${activeIndex * CONTENT_SLIDE_HEIGHT_VH}vh` }}
            transition={CONTENT_TRANSITION as object}
          >
            <div
              className="w-full flex items-center justify-center"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              {/* <p className="text-[10rem] text-white">SIMPLE</p> */}
              <AboutHeroSection part="content" />
            </div>
            <div
              className="w-full flex items-center justify-center"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <AboutStatsSection part="content" />
            </div>
            <div
              className="w-full flex items-center justify-center"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <ContactSection part="content" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
