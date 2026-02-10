"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

interface Case {
  title: string;
  category: string;
  image: string;
  slug: string;
}

interface HorizontalWorkGalleryProps {
  cases: Case[];
}

export function HorizontalWorkGallery({ cases }: HorizontalWorkGalleryProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black" style={{ position: 'relative' }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Section Title - Fixed at top with background */}
        <div className="w-full bg-black pt-8 sm:pt-12 pb-4 sm:pb-6 px-6 sm:px-12 z-10">
          <div className="flex items-center gap-4 sm:gap-8 mb-4">
            {/* Slim Sleek Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 sm:w-24 h-[2px] origin-left"
              style={{ backgroundColor: '#2BCC07' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="tracking-[0.3em]"
              style={{ fontSize: '0.875rem', color: '#2BCC07' }}
            >
              OUR PORTFOLIO
            </motion.p>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            Where Vision Comes to Life
          </motion.h2>
        </div>

        {/* Horizontal Scrolling Container - Positioned below header */}
        <div className="flex-1 flex items-center pb-8 sm:pb-12 -mt-4 sm:-mt-8">
          <motion.div 
            style={{ x }}
            className="flex gap-6 sm:gap-12 px-6 sm:px-12"
          >
            {cases.map((item, index) => (
              <Link
                key={index}
                href={`/projects/${item.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer flex-shrink-0"
                  style={{ 
                    width: 'clamp(280px, 70vw, 70vw)', 
                    height: 'clamp(350px, 60vh, 70vh)' 
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 text-white"
                    >
                      <motion.p
                        className="text-white/60 mb-2 tracking-widest"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}
                      >
                        {item.category}
                      </motion.p>
                      <motion.h3
                        style={{
                          fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </motion.h3>

                      {/* Hover Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        className="h-[2px] bg-white mt-4 sm:mt-6 origin-left"
                        style={{ width: '150px' }}
                      />
                    </motion.div>

                    {/* Number Badge */}
                    <div className="absolute top-6 sm:top-8 right-6 sm:right-8 text-white/30 text-6xl sm:text-8xl font-light">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Clean SVG Circle with Arrow Icon */}
                    <motion.div
                      className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 cursor-pointer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View project details"
                    >
                      <svg 
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 sm:w-12 sm:h-12"
                      >
                        {/* Circle */}
                        <circle 
                          cx="24" 
                          cy="24" 
                          r="23" 
                          stroke="#2BCC07" 
                          strokeWidth="2"
                          fill="transparent"
                        />
                        {/* Arrow pointing up-right */}
                        <path 
                          d="M18 30L30 18M30 18H22M30 18V26" 
                          stroke="#2BCC07" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* End Spacer */}
            <div className="flex-shrink-0 w-6 sm:w-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}