"use client";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

export function SalesIntroSection() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 lg:px-24 mt-20 lg:mt-0">
      {/* Main Statement */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-5xl mb-20"
      >
        <h2
          className="text-white mb-12"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Let <span className="text-[#2BCC07]">IM Vision</span> help you elevate
          your brand with immersive{" "}
          <span className="text-[#2BCC07]">phygital spaces</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-4xl"
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          {t.sales.intro.paragraph}
        </motion.p>
      </motion.div>

      {/* Three Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="mb-4">
            <div className="w-12 h-[2px] bg-[#2BCC07] mb-4 group-hover:w-20 transition-all duration-500" />
            <h3
              className="text-white"
              style={{
                fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Physical meets Digital
            </h3>
          </div>
          <p
            className="text-white/70"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Create unforgettable connections where physical presence meets
            digital interaction.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="mb-4">
            <div className="w-12 h-[2px] bg-[#2BCC07] mb-4 group-hover:w-20 transition-all duration-500" />
            <h3
              className="text-white"
              style={{
                fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Deeper Engagement
            </h3>
          </div>
          <p
            className="text-white/70"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Today&apos;s consumers expect more — they want to explore and
            experience through immersive environments.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="mb-4">
            <div className="w-12 h-[2px] bg-[#2BCC07] mb-4 group-hover:w-20 transition-all duration-500" />
            <h3
              className="text-white"
              style={{
                fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Dynamic Storytelling
            </h3>
          </div>
          <p
            className="text-white/70"
            style={{
              fontSize: "0.9375rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Large-format LED displays bring visuals to life and deepen the
            connection between your audience and your brand.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
