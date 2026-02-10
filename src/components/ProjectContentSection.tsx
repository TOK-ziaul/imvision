"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface ProjectContentSectionProps {
  challenge: string;
  solution: string;
  results: string[];
  galleryImages: string[];
}

export function ProjectContentSection({
  challenge,
  solution,
  results,
  galleryImages,
}: ProjectContentSectionProps) {
  const challengeImageRef = useRef<HTMLDivElement>(null);
  const solutionImageRef = useRef<HTMLDivElement>(null);
  const resultsImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: challengeProgress } = useScroll({
    target: challengeImageRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: solutionProgress } = useScroll({
    target: solutionImageRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: resultsProgress } = useScroll({
    target: resultsImageRef,
    offset: ['start end', 'end start'],
  });

  const challengeY = useTransform(challengeProgress, [0, 1], [100, -100]);
  const solutionY = useTransform(solutionProgress, [0, 1], [-80, 80]);
  const resultsY = useTransform(resultsProgress, [0, 1], [60, -60]);

  return (
    <div className="relative bg-black">
      {/* Challenge Section - Image Behind Text */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        {galleryImages[0] && (
          <div ref={challengeImageRef} className="absolute inset-0 overflow-hidden">
            <motion.div
              style={{ y: challengeY }}
              className="absolute inset-0 w-full h-full"
            >
              <ImageWithFallback
                src={galleryImages[0]}
                alt="Challenge"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-12 py-40 lg:py-56">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-20 h-[2px] bg-[#2BCC07] mb-8 origin-left"
              />
              <h2
                className="text-[#2BCC07] mb-12 uppercase tracking-[0.3em]"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                The Challenge
              </h2>
              <p
                className="text-white max-w-4xl"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider Image - Full Bleed */}
      {galleryImages[1] && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative w-full h-screen"
        >
          <ImageWithFallback
            src={galleryImages[1]}
            alt="Divider"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      )}

      {/* Solution Section - Text Over Image */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        {galleryImages[2] && (
          <div ref={solutionImageRef} className="absolute inset-0 overflow-hidden">
            <motion.div
              style={{ y: solutionY }}
              className="absolute inset-0 w-full h-full"
            >
              <ImageWithFallback
                src={galleryImages[2]}
                alt="Solution"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-12 py-40 lg:py-56">
          <div className="max-w-6xl ml-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-20 h-[2px] bg-[#2BCC07] mb-8 ml-auto origin-right"
              />
              <h2
                className="text-[#2BCC07] mb-12 uppercase tracking-[0.3em] text-right"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Our Solution
              </h2>
              <p
                className="text-white text-right max-w-4xl ml-auto"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {solution}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery - Horizontal Scroll */}
      {galleryImages.length > 3 && (
        <div className="relative py-32 bg-black">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-6 lg:px-12">
              {galleryImages.slice(3, 7).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex-shrink-0 group"
                  style={{ width: '70vw', height: '70vh' }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <span className="text-white/40 uppercase tracking-[0.3em] text-xs">Scroll</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-[1px] bg-[#2BCC07]"
              />
            </motion.div>
          </div>
        </div>
      )}

      {/* Results - Large Statement with Background Image */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        {galleryImages[galleryImages.length - 1] && (
          <div ref={resultsImageRef} className="absolute inset-0 overflow-hidden">
            <motion.div
              style={{ y: resultsY }}
              className="absolute inset-0 w-full h-full"
            >
              <ImageWithFallback
                src={galleryImages[galleryImages.length - 1]}
                alt="Results"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-12 py-40 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-20 h-[2px] bg-[#2BCC07] mb-8 origin-left"
            />
            <h2
              className="text-[#2BCC07] uppercase tracking-[0.3em]"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              The Impact
            </h2>
          </motion.div>

          <div className="space-y-20 lg:space-y-24 max-w-7xl">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -left-6 top-0 w-1 h-full bg-[#2BCC07]/0 group-hover:bg-[#2BCC07] transition-colors duration-700 origin-top"
                />
                <p
                  className="text-white pl-0 group-hover:pl-8 transition-all duration-700"
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                    fontWeight: 300,
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}