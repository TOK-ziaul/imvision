"use client";
import {
  cubicBezier,
  motion,
  useScroll,
  useTransform,
  type EasingFunction,
} from "motion/react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const handleMouseMove = () => {
      // setMousePosition({
      //   x: (e.clientX / window.innerWidth - 0.5) * 20,
      //   y: (e.clientY / window.innerHeight - 0.5) * 20,
      // });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Set showAll to true after individual animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
    }, 4500); // After all three words have shown individually
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation easing
  const customEase: EasingFunction = cubicBezier(0.22, 1, 0.36, 1);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Background Image - Static, no parallax during text reveal */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: customEase }}
      >
        <ImageWithFallback
          src={heroImage}
          alt="IMvision Creative Studio"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 lg:px-12 pt-32 md:pt-40 lg:pt-48 pb-48 md:pb-56 lg:pb-64">
        <motion.div
          className="w-full flex flex-col items-center justify-center"
          style={{ opacity }}
        >
          {/* Main Headline - Sequential text reveal */}
          <div
            className="mb-6 relative w-full flex items-center justify-center"
            style={{ minHeight: "min(35vh, 400px)" }}
          >
            {/* VISION. - Shows first, then fades out */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                key="vision-solo"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showAll ? 0 : [0, 1, 1, 0],
                  y: showAll ? 0 : [20, 0, 0, -20],
                }}
                transition={{
                  duration: 0.8,
                  times: [0, 0.2, 0.8, 1],
                  delay: 0.5,
                  ease: customEase,
                }}
                className="text-white uppercase"
                style={{
                  fontSize: "clamp(3rem, 10vw, 7rem)",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  opacity: showAll ? 0 : undefined,
                }}
              >
                {t.hero.vision}
              </motion.h1>
            </div>

            {/* TECHNOLOGY. - Shows second, then fades out */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                key="technology-solo"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showAll ? 0 : [0, 1, 1, 0],
                  y: showAll ? 0 : [20, 0, 0, -20],
                }}
                transition={{
                  duration: 0.8,
                  times: [0, 0.2, 0.8, 1],
                  delay: 1.8,
                  ease: customEase,
                }}
                className="text-white uppercase"
                style={{
                  fontSize: "clamp(3rem, 10vw, 7rem)",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  opacity: showAll ? 0 : undefined,
                }}
              >
                {t.hero.technology}
              </motion.h1>
            </div>

            {/* EXPERIENCE. - Shows third, then fades out */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h1
                key="experience-solo"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: showAll ? 0 : [0, 1, 1, 0],
                  y: showAll ? 0 : [20, 0, 0, -20],
                }}
                transition={{
                  duration: 0.8,
                  times: [0, 0.2, 0.8, 1],
                  delay: 3.1,
                  ease: customEase,
                }}
                className="text-white uppercase"
                style={{
                  fontSize: "clamp(3rem, 10vw, 7rem)",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  opacity: showAll ? 0 : undefined,
                }}
              >
                {t.hero.experience}
              </motion.h1>
            </div>

            {/* All three words together - Final state */}
            {showAll && (
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: customEase,
                    }}
                    className="text-white uppercase"
                    style={{
                      fontSize: "clamp(3rem, 10vw, 7rem)",
                      fontWeight: 300,
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {t.hero.vision}
                  </motion.h1>
                </div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: customEase,
                    }}
                    className="text-white uppercase"
                    style={{
                      fontSize: "clamp(3rem, 10vw, 7rem)",
                      fontWeight: 300,
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {t.hero.technology}
                  </motion.h1>
                </div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: customEase,
                    }}
                    className="text-white uppercase"
                    style={{
                      fontSize: "clamp(3rem, 10vw, 7rem)",
                      fontWeight: 300,
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {t.hero.experience}
                  </motion.h1>
                </div>
              </div>
            )}
          </div>

          {/* Subline - Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showAll ? 1 : 0 }}
            transition={{
              duration: 1,
              delay: showAll ? 1.2 : 0,
              ease: "easeOut",
            }}
            className="text-white mx-auto mb-2 text-center"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "0.02em",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            {t.hero.taglineLine1}
          </motion.p>

          {/* Sub-subline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showAll ? 1 : 0 }}
            transition={{
              duration: 1,
              delay: showAll ? 1.4 : 0,
              ease: "easeOut",
            }}
            className="text-white/70 mx-auto mb-8 text-center"
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.125rem)",
              fontWeight: 300,
              letterSpacing: "0.03em",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            {t.hero.taglineLine2}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showAll ? 1 : 0 }}
            transition={{
              duration: 0.8,
              delay: showAll ? 1.8 : 0,
              ease: "easeOut",
            }}
          >
            <motion.button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black/40 backdrop-blur-sm overflow-hidden cursor-pointer rounded-[8px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: "2px solid rgba(255, 255, 255, 0.3)",
                boxShadow:
                  "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Animated glowing trail */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  width: "30%",
                }}
                animate={{
                  x: ["-100%", "400%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 3,
                }}
              >
                <ArrowRight
                  size={20}
                  className="text-white"
                  strokeWidth={2}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))",
                  }}
                />
              </motion.div>

              {/* Text */}
              <span
                className="relative z-10 text-white tracking-[0.15em] font-light italic"
                style={{
                  fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                }}
              >
                {t.hero.ctaTalk}
              </span>

              {/* Pulsing glow on hover */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  boxShadow:
                    "0 0 40px rgba(255, 255, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)",
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showAll ? 1 : 0 }}
        transition={{ duration: 1, delay: showAll ? 1.5 : 0 }}
        style={{ opacity }}
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-white/60 tracking-widest"
            style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
          >
            {t.hero.scroll}
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
