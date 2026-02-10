"use client";
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

interface Value {
  title: string;
  description: string;
  number: string;
}

export function AboutValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const values: Value[] = [
    {
      number: '01',
      title: 'Innovation First',
      description: 'We stay ahead of the curve, constantly exploring new LED technologies and creative applications to deliver cutting-edge solutions.',
    },
    {
      number: '02',
      title: 'Partnership Driven',
      description: 'Your success is our success. We work alongside you every step of the way, ensuring seamless collaboration from concept to completion.',
    },
    {
      number: '03',
      title: 'Quality Guaranteed',
      description: 'With a massive inventory and rigorous standards, we ensure every LED solution performs flawlessly and exceeds industry benchmarks.',
    },
    {
      number: '04',
      title: 'Reliability Always',
      description: 'From installation to ongoing support, we deliver on our promises with precision, professionalism, and unwavering commitment.',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: '100vh', position: 'relative' }}
    >
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07] z-20" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="mb-20"
          >
            <h2
              className="text-white leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 300,
              }}
            >
              Our <span className="text-[#2BCC07] italic">Values</span>
            </h2>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
              >
                {/* Card Container */}
                <div className="relative overflow-hidden border border-white/10 p-8 lg:p-10 transition-all duration-500">
                  {/* Animated border on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#2BCC07] origin-left"
                  />

                  {/* Number */}
                  <div className="mb-6">
                    <span
                      className="text-[#2BCC07]/30 tracking-tight leading-none"
                      style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 200,
                      }}
                    >
                      {value.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white mb-4 tracking-tight"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                    }}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/60 leading-relaxed"
                    style={{
                      fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                      fontWeight: 300,
                    }}
                  >
                    {value.description}
                  </p>

                  {/* Hover background effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 0.03 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[#2BCC07] pointer-events-none"
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