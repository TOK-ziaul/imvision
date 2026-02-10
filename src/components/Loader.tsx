"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
const logoImg = "/logo.png";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      onAnimationComplete={() => {
        document.body.style.overflow = "unset";
      }}
    >
      <div className="text-center">
        <div className="relative overflow-hidden">
          <motion.img
            src={logoImg}
            alt="IMvision Logo"
            className="h-20 lg:h-24 w-auto object-contain mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated reveal overlay - reveals logo from left to right */}
          <motion.div
            initial={{ left: 0, right: 0 }}
            animate={{ left: "100%", right: 0 }}
            transition={{
              duration: 2.2,
              delay: 0.3,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute top-0 bottom-0 bg-black"
            style={{ position: "absolute" }}
          />
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.65, 0, 0.35, 1] }}
          className="h-[1px] bg-[#2BCC07]/30 mx-auto max-w-xs origin-center"
        />
      </div>
    </motion.div>
  );
}
