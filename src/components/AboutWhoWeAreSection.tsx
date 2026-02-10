"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';

interface ContentItem {
  title: string;
  text: string;
  image: string;
}

export function AboutWhoWeAreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const contentItems: ContentItem[] = [
    {
      title: 'Convergence',
      text: 'Connection and collaboration without boundaries are essential for progress. At IMvision, we believe that intelligent solutions are the driving force behind both economic and social development.',
      image: 'https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwY29udmVyZ2VuY2UlMjBuZXR3b3JrfGVufDF8fHx8MTc3MDAzNzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Connection',
      text: 'With this in mind, IMvision was created as a platform where information flows seamlessly, fostering creativity and innovation. Our goal is to empower a space—both physical and virtual—where genuine connections can be made, and collaboration thrives, whether offline or online.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMGNvbm5lY3Rpb24lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MDAzNzIzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Innovation',
      text: 'The name IMvision reflects our commitment to intelligent display solutions that bring people together. We aim to provide advanced, integrated technology to elevate organizational efficiency and enhance communication.',
      image: 'https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3klMjBmdXR1cmV8ZW58MXx8fHwxNzcwMDM3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Synergy',
      text: 'By eliminating barriers to connection, we create environments that inspire innovation, enabling full immersion and sparking new possibilities for growth. At IMvision, we don\'t just rent displays - we help build the future of collaboration.',
      image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwc3luZXJneSUyMGNvbGxhYm9yYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMDM3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#2BCC07]" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 lg:py-32">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            className="mb-16 lg:mb-24"
          >
            <h2
              className="text-white tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Who We <span className="italic">Are</span>
            </h2>
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left - Navigation List */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                {contentItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative text-left w-full group"
                  >
                    <div className="relative">
                      <span
                        className={`block transition-all duration-500 ${
                          activeIndex === index
                            ? 'text-white'
                            : 'text-white/30 group-hover:text-white/60'
                        }`}
                        style={{
                          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                          fontWeight: 300,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </span>

                      {/* Underline */}
                      <motion.div
                        initial={false}
                        animate={{
                          scaleX: activeIndex === index ? 1 : 0,
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute -bottom-2 left-0 h-[2px] w-20 bg-[#2BCC07] origin-left"
                      />

                      {/* Number indicator */}
                      <motion.span
                        initial={false}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute -left-12 top-1/2 -translate-y-1/2 text-[#2BCC07] tabular-nums"
                        style={{
                          fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                          fontWeight: 300,
                        }}
                      >
                        0{index + 1}
                      </motion.span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right - Content and Image */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Content Card */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-10"
                    >
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#2BCC07]" />

                      {/* Title */}
                      <h3
                        className="text-white mb-6"
                        style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: 300,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {contentItems[activeIndex].title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-white/60"
                        style={{
                          fontSize: 'clamp(0.95rem, 1.1vw, 1.0625rem)',
                          fontWeight: 300,
                          lineHeight: '1.9',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {contentItems[activeIndex].text}
                      </p>

                      {/* Corner accent */}
                      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-[#2BCC07]/30" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Image */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                      className="relative aspect-[4/5] rounded-lg overflow-hidden"
                    >
                      {/* Image */}
                      <img
                        src={contentItems[activeIndex].image}
                        alt={contentItems[activeIndex].title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Green border overlay */}
                      <div className="absolute inset-0 border-2 border-[#2BCC07]/20 rounded-lg" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#2BCC07] blur-[200px] opacity-5 rounded-full -translate-y-1/2 pointer-events-none" />
    </div>
  );
}