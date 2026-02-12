"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

type Part = "full" | "content";

interface SalesContactSectionProps {
  part?: Part;
}

export function SalesContactSection({ part }: SalesContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const backgroundImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

  const contentInner = (
    <div className="container mx-auto max-w-5xl text-center">
      {/* Main Heading */}
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
        Let&apos;s Create Something
        <br />
        <span style={{ fontWeight: 500 }}>That Makes an Impact</span>
      </motion.h2>

      {/* Subtitle */}
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
        Ready to bring your vision to life? Let&apos;s start a conversation
        about your next project.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative inline-flex items-center gap-4 px-8 py-4 bg-black/40 backdrop-blur-sm overflow-hidden mb-24"
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
          Talk to an LED Specialist
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
      </motion.a>

      {/* Contact Info */}
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
            sales@imvision.se
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Phone className="text-white/60" size={28} strokeWidth={1.5} />
          <div
            className="text-white/90"
            style={{ fontSize: "1rem", fontWeight: 300 }}
          >
            +46 8 505 204 80
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <MapPin className="text-white/60" size={28} strokeWidth={1.5} />
          <div
            className="text-white/90"
            style={{ fontSize: "1rem", fontWeight: 300 }}
          >
            Spånga, Sweden
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (part === "content") {
    return (
      <section
        id="contact"
        ref={ref}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center h-full py-16 lg:py-24 px-6 lg:px-12">
          {contentInner}
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Contact IMvision"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="relative flex items-center justify-center min-h-screen py-32 px-6 lg:px-12">
        {contentInner}
      </div>
    </section>
  );
}
