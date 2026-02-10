"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import { AboutStatsSection } from "@/components/AboutStatsSection";
import { ContactSection } from "@/components/ContactSection";

export default function AboutPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1690964099658-b619682704ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBkaXNwbGF5JTIwdGVjaG5vbG9neSUyMGluc3RhbGxhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMzU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const contactImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSections = 3;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (isAnimating) return;
      const delta = event.deltaY;
      if (Math.abs(delta) < 10) return;
      setActiveIndex((current) => {
        let next = current;
        if (delta > 0) next = Math.min(current + 1, totalSections - 1);
        else if (delta < 0) next = Math.max(current - 1, 0);
        if (next !== current) setIsAnimating(true);
        return next;
      });
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isAnimating, totalSections]);

  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => setIsAnimating(false), 1100);
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
      style={{ position: "relative" }}
    >
      <div className="sticky top-0 h-screen w-full">
        <motion.div
          className="absolute inset-0"
          animate={{ y: "0%" }}
          transition={{ duration: 1.2, ease: [0.4, 0.0, 0.3, 1] }}
          style={{ zIndex: 1 }}
        >
          <AboutHeroSection backgroundImage={heroImage} />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ y: "100%" }}
          animate={{ y: activeIndex >= 1 ? "0%" : "100%" }}
          transition={{ duration: 1.2, ease: [0.4, 0.0, 0.3, 1] }}
          style={{ zIndex: 2 }}
        >
          <AboutStatsSection />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ y: "100%" }}
          animate={{ y: activeIndex >= 2 ? "0%" : "100%" }}
          transition={{ duration: 1.2, ease: [0.4, 0.0, 0.3, 1] }}
          style={{ zIndex: 4 }}
        >
          <ContactSection backgroundImage={contactImage} />
        </motion.div>
      </div>
    </section>
  );
}
