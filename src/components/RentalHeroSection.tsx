"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

type Part = "full" | "content";

interface RentalHeroSectionProps {
  backgroundImage: string;
  part?: Part;
}

export function RentalHeroSection({
  backgroundImage,
  part,
}: RentalHeroSectionProps) {
  const { t } = useTranslation();
  const heroContent = (
    <div className="relative z-10 container mx-auto px-6 lg:px-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="text-white mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          {t.rental.hero.title}
        </h1>
        <p
          className="text-white/80 max-w-3xl mx-auto"
          style={{
            fontSize: "clamp(1.125rem, 1.5vw, 1.75rem)",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          {t.rental.hero.description}
        </p>
      </motion.div>
    </div>
  );
  const scrollIndicator = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#2BCC07] to-transparent"
      />
    </motion.div>
  );

  if (part === "content") {
    return (
      <div className="relative w-full  h-full min-h-svh flex items-center justify-center">
        {heroContent}
        {scrollIndicator}
      </div>
    );
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          width={100}
          height={100}
          sizes="100vw"
          src={backgroundImage}
          alt="LED Rental Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      {heroContent}
      {scrollIndicator}
    </section>
  );
}
