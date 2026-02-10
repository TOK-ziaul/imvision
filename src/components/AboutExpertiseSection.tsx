"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ExpertiseProps {
  backgroundImage: string;
}

export function AboutExpertiseSection({ backgroundImage }: ExpertiseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

  const stats = [
    {
      value: '10+',
      label: 'Years of Experience',
    },
    {
      value: '3,000+',
      label: 'm² LED Inventory',
    },
    {
      value: '500+',
      label: 'Projects Delivered',
    },
    {
      value: '100%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '100vh', position: 'relative' }}
    >
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07] z-20" />

      {/* Parallax Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="mb-16 text-center"
          >
            <h2
              className="text-white leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 300,
              }}
            >
              Proven <span className="text-[#2BCC07] italic">Expertise</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.33, 1, 0.68, 1] }}
                className="text-center group"
              >
                {/* Value */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <span
                    className="text-[#2BCC07] tracking-tight leading-none block"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 200,
                    }}
                  >
                    {stat.value}
                  </span>
                </motion.div>

                {/* Label */}
                <div className="relative">
                  <p
                    className="text-white/70 tracking-wide uppercase"
                    style={{
                      fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
                      fontWeight: 300,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="mt-3 h-[1px] bg-[#2BCC07]/30 origin-center"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}