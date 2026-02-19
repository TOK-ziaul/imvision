"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
type Part = "background" | "content";

interface AboutHeroSectionProps {
  backgroundImage?: string;
  contentY?: string;
  backgroundY?: string;
  transition?: { duration: number; ease: string };
  part?: Part;
}

export function AboutHeroSection({
  backgroundImage = "",
  contentY = "0%",
  backgroundY = "0%",
  transition = { duration: 1.2, ease: "linear" },
  part,
}: AboutHeroSectionProps) {
  const trans = transition as object;
  const router = useRouter();
  if (part === "background") {
    return (
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ y: backgroundY }}
        transition={trans}
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </motion.div>
    );
  }

  if (part === "content") {
    return (
      <div className="relative w-full h-full min-h-svh flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
        {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07] z-20" /> */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="text-white leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 300,
              }}
            >
              Experts In LED Solutions
              <br />
              <span className="text-white font-light italic">
                For All Types Of Purpose
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontWeight: 300,
            }}
          >
            IM vision is a professional and reliable partner and we are with you
            all the way from order to execution.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.button
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black/40 backdrop-blur-sm overflow-hidden cursor-pointer rounded-[8px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                Talk to an Expert
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
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[#2BCC07]/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07] z-20" />
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ y: backgroundY }}
        transition={trans}
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20"
        animate={{ y: contentY }}
        transition={trans}
        style={{ willChange: "transform" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="text-white leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                fontWeight: 300,
              }}
            >
              Experts In LED Solutions
              <br />
              <span className="text-white font-light italic">
                For All Types Of Purpose
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontWeight: 300,
            }}
          >
            IM vision is a professional and reliable partner and we are with you
            all the way from order to execution.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.button
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black/40 backdrop-blur-sm overflow-hidden cursor-pointer rounded-[8px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                Talk to an Expert
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
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#2BCC07]/50 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
