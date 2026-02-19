"use client";

import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

export function HomePortfolioIntro() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-20 lg:pt-0">
      <div className="flex items-center gap-4 sm:gap-8 mb-4">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-16 sm:w-24 h-[2px] origin-left"
          style={{ backgroundColor: "#2BCC07" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="tracking-[0.3em] uppercase"
          style={{ fontSize: "0.875rem", color: "#2BCC07" }}
        >
          {t.gallery.subtitle}
        </motion.p>
      </div>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white"
        style={{
          fontSize: "clamp(2rem, 6vw, 5rem)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {t.gallery.title}
      </motion.h2>
    </div>
  );
}
