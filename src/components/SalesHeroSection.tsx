"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MagneticButton } from '@/components/MagneticButton';

interface SalesHeroSectionProps {
  backgroundImage: string;
}

export function SalesHeroSection({ backgroundImage }: SalesHeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

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
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle with line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-16 h-[2px] origin-left"
              style={{ backgroundColor: '#2BCC07' }}
            />
            <p
              className="tracking-[0.3em] uppercase"
              style={{ fontSize: '0.875rem', color: '#2BCC07' }}
            >
              Permanent LED Solutions
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-16 h-[2px] origin-right"
              style={{ backgroundColor: '#2BCC07' }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white mb-8"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Sales
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 mb-12 max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Transform your space with cutting-edge LED display technology. From retail environments to architectural installations, we deliver permanent solutions that captivate and perform.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButton>
              <div
                className="group relative px-8 py-4 bg-transparent border-2 border-white text-white overflow-hidden transition-all duration-500 hover:text-black cursor-pointer"
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                }}
              >
                <span className="relative z-10">Request a Quote</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-[#2BCC07] rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}