"use client";
import { motion } from 'motion/react';

export function ServiceIntroSection() {
  return (
    <div className="relative bg-black py-20 lg:py-32">
      {/* Green border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2BCC07]" />

      <div className="container mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            Design & Engineering
          </motion.h2>

          {/* Main paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              fontWeight: 300,
              lineHeight: 1.7,
              letterSpacing: '0.01em',
            }}
          >
            Once we understand your needs and goals, we start creating your LED screen solution. This is where smart design and reliable technology come together. Our experts explore how your ideas can come to life and begin planning the setup, selecting the best combination of hardware and software to match your vision. What you want to achieve—and where the LED screen will be placed—along with your budget and preferences, guide us in choosing the ideal setup. This could include screens, audio systems, or smart sensors. No matter what, we always focus on high quality, sustainability, and energy efficiency. We act as your independent advisor and engineering partner, making sure you get the most value from your investment.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}