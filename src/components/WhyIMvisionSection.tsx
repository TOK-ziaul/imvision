"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface WhyIMvisionSectionProps {
  backgroundImage: string;
}

export function WhyIMvisionSection({ backgroundImage }: WhyIMvisionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  const statement1Y = useTransform(scrollYProgress, [0, 0.22], ['100%', '0%']);
  const statement1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.22, 0.32], [0, 1, 1, 0]);
  
  const statement2Y = useTransform(scrollYProgress, [0.25, 0.47], ['100%', '0%']);
  const statement2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.47, 0.57], [0, 1, 1, 0]);
  
  const statement3Y = useTransform(scrollYProgress, [0.5, 0.72], ['100%', '0%']);
  const statement3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.72, 0.82], [0, 1, 1, 0]);
  
  const statement4Y = useTransform(scrollYProgress, [0.75, 0.95], ['100%', '0%']);
  const statement4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-black" style={{ position: 'relative' }}>
      {/* Header Section - Consistent with other sections */}
      <div className="relative bg-black py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-8 mb-8">
            {/* Slim Sleek Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-24 h-[2px] origin-left"
              style={{ backgroundColor: '#2BCC07' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="tracking-[0.3em]"
              style={{ fontSize: '0.875rem', color: '#2BCC07' }}
            >
              WHY IMVISION
            </motion.p>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white mb-8"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
            }}
          >
            Where Technology Meets Experience
          </motion.h2>
        </div>
      </div>

      {/* Cinematic Scroll Section with Brand Philosophy */}
      <div className="relative w-full h-[450vh]">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <ImageWithFallback
              src={backgroundImage}
              alt="Why IMvision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>

          {/* Statement 1 - Brand Vision */}
          <motion.div
            className="absolute top-[15%] left-[5%] lg:left-[10%] max-w-[85%] lg:max-w-3xl"
            style={{ 
              y: statement1Y,
              opacity: statement1Opacity,
            }}
          >
            <p
              className="text-white/90"
              style={{
                fontSize: 'clamp(1.25rem, 2.2vw, 2rem)',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              IM Vision combines long-standing expertise with both permanent installations and a refined rental operation, delivering premium large-scale LED experiences from Sweden for the Nordic region and Europe.
            </p>
          </motion.div>

          {/* Statement 2 - Our Philosophy */}
          <motion.div
            className="absolute top-[20%] right-[5%] lg:right-[10%] max-w-[85%] lg:max-w-3xl text-right"
            style={{ 
              y: statement2Y,
              opacity: statement2Opacity,
            }}
          >
            <h3 
              className="text-white"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              10+ Years of LED Expertise
            </h3>
          </motion.div>

          {/* Statement 3 - Market Leadership */}
          <motion.div
            className="absolute bottom-[25%] left-[5%] lg:left-[10%] max-w-[85%] lg:max-w-3xl"
            style={{ 
              y: statement3Y,
              opacity: statement3Opacity,
            }}
          >
            <h3 
              className="text-white mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              3,000+ m² Premium LED Inventory
            </h3>
            <p
              className="text-white/90"
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Global Projects Across Retail, Events & DOOH
            </p>
          </motion.div>

          {/* Statement 4 - Commitment to Excellence */}
          <motion.div
            className="absolute bottom-[15%] right-[5%] lg:right-[10%] max-w-[85%] lg:max-w-3xl text-right"
            style={{ 
              y: statement4Y,
              opacity: statement4Opacity,
            }}
          >
            <h3 
              className="text-white mb-12"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              End-to-End Delivery — From Design to Support
            </h3>
            
            {/* Direct Link to About Us Page */}
            <motion.a
              href="/about"
              className="inline-flex items-center gap-4 group cursor-pointer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-white tracking-[0.2em] italic"
                style={{
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  fontWeight: 300,
                }}
              >
                Learn More About Us
              </span>
              <motion.div 
                className="flex items-center justify-center rounded-full border-2 w-12 h-12 sm:w-14 sm:h-14"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)', borderColor: 'rgba(255, 255, 255, 1)' }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="transition-colors duration-300 group-hover:stroke-black"
                  style={{ stroke: 'white' }}
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}