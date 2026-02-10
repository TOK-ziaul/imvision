"use client";
import { motion } from 'motion/react';
import { DUMMY_IMAGE } from "@/assets/dummyImage";

export function SectionBarrier() {
  return (
    <section className="relative h-32 w-full overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src={DUMMY_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </motion.div>
      
      {/* Green gradient overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
      
      {/* Optional accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-center"
        style={{ backgroundColor: '#2BCC07' }}
      />
    </section>
  );
}
