"use client";
import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none border border-red-500">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(43, 204, 7, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(43, 204, 7, 0.02) 0%, transparent 50%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43, 204, 7, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43, 204, 7, 0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
          top: "50%",
          right: "10%",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43, 204, 7, 0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
          bottom: "20%",
          left: "30%",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(43, 204, 7, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43, 204, 7, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
