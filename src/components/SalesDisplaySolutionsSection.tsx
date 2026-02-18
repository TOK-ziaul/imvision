"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { MoveRight } from "lucide-react";

export function SalesDisplaySolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // const scrollSectionRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"],
  // });

  // const { scrollYProgress: scrollProgress } = useScroll({
  //   target: scrollSectionRef,
  //   offset: ["start end", "end start"],
  // });

  // const titleY = useTransform(scrollYProgress, [0, 0.5], [200, -200]);
  // const descY = useTransform(scrollYProgress, [0, 0.5], [-100, 100]);

  // Scroll-driven horizontal movement
  // const x = useTransform(scrollProgress, [0, 1], [0, -2000]);

  // const getSizeClasses = (size: string) => {
  //   switch (size) {
  //     case 'small':
  //       return 'w-[300px] h-[250px]';
  //     case 'medium':
  //       return 'w-[350px] h-[300px]';
  //     case 'large':
  //       return 'w-[450px] h-[350px]';
  //     case 'wide':
  //       return 'w-[600px] h-[280px]';
  //     default:
  //       return 'w-[350px] h-[300px]';
  //   }
  // };

  return (
    <div ref={sectionRef} className="relative overflow-hidden mb-20 lg:mb-0">
      {/* Split Title Section with Parallax */}
      <div className="relative flex items-center justify-center ">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Animated Title */}
            <motion.div className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-[#2BCC07] mb-8 origin-left"
              />

              <h2
                className="text-white mb-0 relative"
                style={{
                  fontSize: "clamp(4rem, 8vw, 9rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  Display
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block text-[#2BCC07] ml-12 lg:ml-24"
                >
                  Solutions
                </motion.span>

                {/* Animated number */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-8 -right-4 text-white/50"
                  style={{
                    fontSize: "clamp(8rem, 15vw, 18rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  03
                </motion.span>
              </h2>
            </motion.div>

            {/* Right - Description with parallax */}
            <motion.div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white/50 mb-8"
                style={{
                  fontSize: "clamp(1.125rem, 1.4vw, 1.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Our display solutions strengthen your brand, improve customer
                experience and contribute to effective communication. Whether
                it&apos;s about attracting customers in stores, streamlining
                information in public environments or improving workflows in
                corporate environments, we offer the right solution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#2BCC07] group cursor-pointer"
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore Portfolio
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <MoveRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
