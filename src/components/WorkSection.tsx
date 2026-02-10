"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { DUMMY_IMAGE } from "@/assets/dummyImage";

interface CaseStudy {
  title: string;
  category: string;
  image: string;
}

interface WorkSectionProps {
  cases: CaseStudy[];
}

export function WorkSection({ cases }: WorkSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" ref={ref} className="w-full bg-black py-32" style={{ position: 'relative' }}>
      <div className="px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-8 mb-8">
              <motion.img
                src={DUMMY_IMAGE}
                alt="Line decoration"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-24 h-auto origin-left"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(67%) sepia(94%) saturate(2467%) hue-rotate(68deg) brightness(98%) contrast(101%)',
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="tracking-[0.3em]"
                style={{ fontSize: '0.875rem', color: '#2BCC07' }}
              >
                OUR PORTFOLIO
              </motion.p>
            </div>

            <h2
              className="text-white"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 0.9,
              }}
            >
              Selected Work
            </h2>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {cases.map((caseStudy, index) => (
              <CaseCard key={index} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <ImageWithFallback
        src={caseStudy.image}
        alt={caseStudy.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <motion.div
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 p-8"
      >
        <div
          className="text-white/60 mb-2"
          style={{
            fontSize: '0.85rem',
            fontWeight: 300,
            letterSpacing: '0.15em',
          }}
        >
          {caseStudy.category}
        </div>
        <h3
          className="text-white"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          {caseStudy.title}
        </h3>
      </motion.div>

      {/* Hover Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 h-[2px] bg-white"
      />
    </motion.div>
  );
}