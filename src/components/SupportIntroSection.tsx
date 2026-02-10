"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Send, Phone } from "lucide-react";

interface SupportIntroSectionProps {
  onSubmitTicket?: () => void;
  onCallSupport?: () => void;
}

export function SupportIntroSection({
  onSubmitTicket,
  onCallSupport,
}: SupportIntroSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-32"
    >
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07]" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-white mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Support
        </motion.h1>

        {/* Explanatory Text */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-white/70 mb-16 max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          We're here to help. Submit a support ticket or call us directly for
          immediate assistance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button - Submit Ticket */}
          <motion.button
            onClick={onSubmitTicket}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#2BCC07] overflow-hidden min-w-[240px] justify-center"
            style={{
              border: "2px solid #2BCC07",
            }}
          >
            {/* Animated shine effect */}
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
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1.5,
              }}
            />

            <Send
              size={20}
              className="text-black relative z-10"
              strokeWidth={2}
            />
            <span
              className="text-black relative z-10 tracking-[0.1em] font-medium"
              style={{
                fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
              }}
            >
              Submit Ticket
            </span>
          </motion.button>

          {/* Secondary Button - Call Support */}
          <motion.button
            onClick={onCallSupport}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent overflow-hidden min-w-[240px] justify-center"
            style={{
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <Phone
              size={20}
              className="text-white relative z-10"
              strokeWidth={2}
            />
            <span
              className="text-white relative z-10 tracking-[0.1em] font-light"
              style={{
                fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
              }}
            >
              Call Support
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
