"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

type Part = "background" | "content";

interface ContactSectionProps {
  backgroundImage?: string;
  contentY?: string;
  backgroundY?: string;
  transition?: { duration: number; ease: number[] };
  part?: Part;
}

export function ContactSection({
  backgroundImage = "",
  contentY = "0%",
  backgroundY = "0%",
  transition = { duration: 1.2, ease: [0.4, 0, 0.3, 1] },
  part,
}: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const trans = transition as object;
  const router = useRouter();
  const { t } = useTranslation();
  if (part === "background") {
    return (
      <motion.div
        className="absolute inset-0"
        animate={{ y: backgroundY }}
        transition={trans}
        style={{ willChange: "transform" }}
      >
        <ImageWithFallback
          src={backgroundImage}
          alt="Contact IMvision"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>
    );
  }

  if (part === "content") {
    return (
      <div
        id="contact"
        ref={ref}
        className="relative w-full flex items-center justify-center py-32 px-6 lg:px-12"
        style={{ height: "100vh", minHeight: "100vh" }}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-8"
            style={{
              fontSize: "var(--text-section-title)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t.contactSection.titleLine1}
            <br />
            <span style={{ fontWeight: 500 }}>{t.contactSection.titleLine2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 mb-16 max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body-large)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {t.contactSection.description}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black/40 backdrop-blur-sm overflow-hidden mb-24 rounded-[8px] cursor-pointer"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow:
                "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)",
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                width: "30%",
              }}
              animate={{ x: ["-100%", "400%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
            <motion.div
              className="relative z-10"
              animate={{ rotateY: [0, 360] }}
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
            <span
              className="relative z-10 text-white tracking-[0.15em] font-light italic"
              style={{
                fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
              }}
              onClick={() => {
                router.push("/contact");
              }}
            >
              {t.contactSection.cta}
            </span>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-3">
              <Mail className="text-white/60" size={28} strokeWidth={1.5} />
              <div className="text-white/90" style={{ fontSize: "1rem", fontWeight: 300 }}>
                {t.contactSection.email}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone className="text-white/60" size={28} strokeWidth={1.5} />
              <div className="text-white/90" style={{ fontSize: "1rem", fontWeight: 300 }}>
                {t.contactSection.phone}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-white/60" size={28} strokeWidth={1.5} />
              <div className="text-white/90" style={{ fontSize: "1rem", fontWeight: 300 }}>
                {t.contactSection.address}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ y: backgroundY }}
        transition={trans}
        style={{ willChange: "transform" }}
      >
        <ImageWithFallback
          src={backgroundImage}
          alt="Contact IMvision"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen py-32 px-6 lg:px-12"
        animate={{ y: contentY }}
        transition={trans}
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-8"
            style={{
              fontSize: "var(--text-section-title)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {t.contactSection.titleLine1}
            <br />
            <span style={{ fontWeight: 500 }}>{t.contactSection.titleLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 mb-16 max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body-large)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {t.contactSection.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black/40 backdrop-blur-sm overflow-hidden mb-24 rounded-[8px] cursor-pointer"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow:
                "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)",
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                width: "30%",
              }}
              animate={{ x: ["-100%", "400%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />

            <motion.div
              className="relative z-10"
              animate={{ rotateY: [0, 360] }}
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

            <span
              className="relative z-10 text-white tracking-[0.15em] font-light italic"
              style={{
                fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
              }}
              onClick={() => {
                router.push("/contact");
              }}
            >
              {t.contactSection.cta}
            </span>

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

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-3">
              <Mail className="text-white/60" size={28} strokeWidth={1.5} />
              <div
                className="text-white/90"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                {t.contactSection.email}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone className="text-white/60" size={28} strokeWidth={1.5} />
              <div
                className="text-white/90"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                {t.contactSection.phone}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-white/60" size={28} strokeWidth={1.5} />
              <div
                className="text-white/90"
                style={{ fontSize: "1rem", fontWeight: 300 }}
              >
                {t.contactSection.address}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
