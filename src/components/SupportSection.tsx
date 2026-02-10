"use client";
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Headphones, MessageCircle, FileText, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface SupportSectionProps {
  backgroundImage: string;
}

export function SupportSection({ backgroundImage }: SupportSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const supportOptions = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance for your LED display systems',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support from our experienced technical team',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and resources for all our products',
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Average response time under 2 hours for critical issues',
    },
  ];

  return (
    <section id="support" ref={ref} className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt="IMvision Support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Content */}
      <div className="relative py-24 px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-start gap-6 mb-16"
        >
          <div className="w-1 h-16 bg-[#2BCC07]" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Support
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 max-w-3xl"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              We're Here to Help
            </h3>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Our dedicated support team ensures your LED display solutions operate flawlessly. 
              From installation to maintenance, we provide comprehensive assistance every step of the way.
            </p>
          </motion.div>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  {/* Green border accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="pl-8 pr-4 py-6 border border-white/10 bg-black/30 hover:border-white/20 transition-all duration-300">
                    <Icon 
                      className="text-[#2BCC07] mb-4" 
                      size={32} 
                      strokeWidth={1.5} 
                    />
                    <h4 className="text-xl font-light text-white mb-3">
                      {option.title}
                    </h4>
                    <p className="text-white/70 font-light leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-white/80 text-lg md:text-xl font-light mb-8">
              Need immediate assistance? Our support team is ready to help.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-12 py-4 bg-transparent border-2 border-white/30 text-white text-sm tracking-[0.3em] overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 italic">
                Contact Support
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 animate-pulse bg-white/20" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(43, 204, 7, .05) 25%, rgba(43, 204, 7, .05) 26%, transparent 27%, transparent 74%, rgba(43, 204, 7, .05) 75%, rgba(43, 204, 7, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(43, 204, 7, .05) 25%, rgba(43, 204, 7, .05) 26%, transparent 27%, transparent 74%, rgba(43, 204, 7, .05) 75%, rgba(43, 204, 7, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </section>
  );
}
