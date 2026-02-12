"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { SalesHeroSection } from "@/components/SalesHeroSection";
import { SalesIntroSection } from "@/components/SalesIntroSection";
import {
  SalesServicesHeader,
  SalesServicesSection1,
  SalesServicesSection2,
  SalesServicesSection3,
} from "@/components/SalesServicesSection";
import {
  SalesUseCasesHeader,
  SalesUseCasesSection,
} from "@/components/SalesUseCasesSection";
import { SalesDisplaySolutionsSection } from "@/components/SalesDisplaySolutionsSection";
import { SalesContactSection } from "@/components/SalesContactSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const TOTAL_SLIDES = 10; // Hero, Intro, Services, UseCases, DisplaySolutions, Contact
const BG_TRANSITION = { duration: 1.2, ease: [0.4, 0, 0.2, 1] };
const CONTENT_TRANSITION = {
  duration: 0.7,
  delay: 0.36,
  ease: [0.4, 0, 0.2, 1],
};
const CONTENT_SLIDE_HEIGHT_VH = 92;

export default function SalesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroImage =
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMExFRCUyMGRpc3BsYXl8ZW58MXx8fHwxNzM4NjY5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const contactImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

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
    }, MAX_TRANSITION + 100);

    return () => clearTimeout(t);
  }, [isAnimating]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <AnimatedBackground />
      <Navigation isRelative={true} />

      {/* Background strip – one panel per slide */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full"
          style={{ height: `${TOTAL_SLIDES * 100}vh` }}
          animate={{ y: `-${Math.round(activeIndex * 100)}vh` }}
          transition={BG_TRANSITION as object}
        >
          <div className="h-screen w-full relative">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={heroImage}
              alt="Sales hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full relative">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
        </motion.div>
      </div>

      {/* Content carousel */}
      <div className=" flex items-center justify-center overflow-hidden border border-blue-500">
        <div
          className="w-full overflow-hidden"
          style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
        >
          <motion.div
            className="w-full"
            style={{
              height: `${TOTAL_SLIDES * CONTENT_SLIDE_HEIGHT_VH}vh`,
            }}
            animate={{
              y: `-${Math.round(activeIndex * CONTENT_SLIDE_HEIGHT_VH)}vh`,
            }}
            transition={CONTENT_TRANSITION as object}
          >
            <div
              className="w-full flex items-center justify-center"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesHeroSection backgroundImage={heroImage} part="content" />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesIntroSection />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              {/* Section Header */}
              <SalesServicesHeader />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesServicesSection1 />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesServicesSection2 />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesServicesSection3 />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesUseCasesHeader />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesUseCasesSection />
            </div>
            <div
              className="w-full flex items-center justify-center overflow-y-auto"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesDisplaySolutionsSection />
            </div>
            <div
              className="w-full flex items-center justify-center"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <SalesContactSection part="content" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
