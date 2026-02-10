"use client";
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { DUMMY_IMAGE } from "@/assets/dummyImage";

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision and goals through deep collaboration',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Crafting the perfect narrative approach for your story',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Bringing ideas to life with precision and artistry',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Exceeding expectations with every frame',
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  return (
    <section 
      id="process" 
      ref={containerRef} 
      className="relative w-full bg-neutral-950 py-24 lg:py-32"
      style={{ position: 'relative' }}
    >
      <div className="px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-8 mb-8">
              <motion.img
                src={DUMMY_IMAGE}
                alt="Line decoration"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-auto origin-left"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(94%) saturate(2467%) hue-rotate(68deg) brightness(98%) contrast(101%)'
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="tracking-[0.3em]"
                style={{ fontSize: '0.875rem', color: '#2BCC07' }}
              >
                OUR PROCESS
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
              Four Steps to<br />Excellence
            </h2>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-8 left-0 right-0 h-[1px] bg-white/10 origin-left hidden lg:block"
            />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Number Circle */}
                  <motion.div
                    className="relative w-16 h-16 mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Outer ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        borderWidth: '1px',
                        borderStyle: 'solid',
                      }}
                      animate={{
                        rotate: activeStep === index ? 360 : 0,
                        borderColor: activeStep === index ? '#2BCC07' : 'rgba(255,255,255,0.2)',
                      }}
                      transition={{ 
                        rotate: { duration: 1.5, ease: "linear" },
                        borderColor: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Inner circle */}
                    <motion.div
                      className="absolute inset-2 rounded-full backdrop-blur-sm"
                      animate={{
                        scale: activeStep === index ? 1.1 : 1,
                        backgroundColor: activeStep === index ? 'rgba(43, 204, 7, 0.15)' : 'rgba(255,255,255,0.05)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Number */}
                    <motion.span
                      className="relative z-10 transition-colors duration-300"
                      style={{
                        fontSize: '1rem',
                        fontWeight: 300,
                        letterSpacing: '0.1em',
                        color: activeStep === index ? '#2BCC07' : 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {step.number}
                    </motion.span>

                    {/* Timeline dot connector */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40 hidden lg:block"
                    />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-white mb-2 group-hover:text-white/90 transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                      }}
                    >
                      {step.title}
                    </h3>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="h-[1px] bg-gradient-to-r from-white/30 to-transparent mb-3 origin-left"
                      style={{ width: '60px' }}
                    />

                    <p
                      className="text-white/50 group-hover:text-white/70 transition-colors duration-300"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.03), transparent 70%)',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}