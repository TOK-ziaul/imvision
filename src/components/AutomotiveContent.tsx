"use client";
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AutomotiveContent() {
  return (
    <div className="relative bg-black">
      {/* Section 1: Hero - Client Introduction */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1736426341937-656fc3363b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDIzMDc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car showroom interior"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Background decorative text layers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        >
          <p
            className="text-white/10 text-center"
            style={{
              fontSize: 'clamp(3rem, 9vw, 10rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Elevating the
          </p>
          <p
            className="text-[#2BCC07]/10 text-center"
            style={{
              fontSize: 'clamp(3rem, 9vw, 10rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Showroom Experience
          </p>
        </motion.div>

        {/* Animated corner accents - Full Borders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Top border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2BCC07] to-transparent origin-center"
          />
          
          {/* Bottom border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2BCC07] to-transparent origin-center"
          />
          
          {/* Left border */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-[#2BCC07] to-transparent origin-center"
          />
          
          {/* Right border */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#2BCC07] to-transparent origin-center"
          />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#2BCC07]" />
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#2BCC07]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#2BCC07]" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#2BCC07]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl px-8 text-center">
          {/* Category Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <div className="inline-block relative">
              <p
                className="text-[#2BCC07] tracking-[0.4em] uppercase"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400 }}
              >
                AUTOMOTIVE INDUSTRY
              </p>
              
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#2BCC07]"
                style={{ transformOrigin: 'center' }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-white leading-[1.05]"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 8.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
              }}
            >
              Elevating the
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative inline-block"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 8.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
              }}
            >
              <span className="text-[#2BCC07]">Showroom Experience</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <p
              className="text-white/85"
              style={{
                fontSize: 'clamp(1rem, 1.65vw, 1.375rem)',
                fontWeight: 300,
                lineHeight: 1.75,
              }}
            >
              A premier automotive dealership network partnered with us to transform their showrooms 
              with cutting-edge LED displays that showcase vehicles in stunning detail and create 
              immersive brand experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Client Overview - Centered Text */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="text-white/5"
            style={{
              fontSize: 'clamp(10rem, 20vw, 25rem)',
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            02
          </div>
        </motion.div>

        <div className="relative z-10 max-w-6xl px-8 text-center">
          {/* Category Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-block relative">
              <p
                className="text-[#2BCC07] tracking-[0.4em] uppercase"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400 }}
              >
                AUTOMOTIVE INDUSTRY
              </p>
              
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#2BCC07]"
                style={{ transformOrigin: 'center' }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white leading-[1.05]"
              style={{
                fontSize: 'clamp(3rem, 7vw, 8rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
              }}
            >
              Redefining the
            </motion.h2>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-[#2BCC07] leading-[1.05]"
              style={{
                fontSize: 'clamp(3rem, 7vw, 8rem)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
              }}
            >
              Automotive Retail Space
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <p
              className="text-white/70"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Our client, a premium automotive dealer network, wanted to create showrooms that match 
              the luxury and innovation of the vehicles they sell. They needed dynamic visual solutions 
              that would captivate customers and enhance the buying experience across multiple locations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Showroom Displays Solution */}
      <div className="relative h-screen w-full">
        {/* Split screen layout */}
        <div className="absolute inset-0 flex">
          {/* Left side - Image */}
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-1/2 relative overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1733803102408-7f122d044ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwTEVEJTIwZGlzcGxheXxlbnwxfHx8fDE3NzAyMzA3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Showroom LED displays"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/60" />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-1/2 relative bg-black flex items-center justify-center"
          >
            <div className="max-w-2xl px-12">
              {/* Decorative number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-12 right-12 text-[#2BCC07] pointer-events-none"
                style={{
                  fontSize: 'clamp(8rem, 15vw, 18rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                01
              </motion.div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-[1px] bg-[#2BCC07]" />
                  <p
                    className="text-[#2BCC07] tracking-[0.3em] uppercase"
                    style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400 }}
                  >
                    Showroom Displays
                  </p>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-white mb-10"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Ultra High-Definition
                <br />
                <span className="text-[#2BCC07]">Video Walls</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-white/75 mb-12"
                style={{
                  fontSize: 'clamp(1rem, 1.35vw, 1.125rem)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                We installed seamless LED video walls that showcase vehicles in breathtaking 4K detail, 
                display brand stories, and create immersive environments that bring automotive innovation 
                to life in every showroom.
              </motion.p>

              {/* Animated feature list */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  '4K resolution vehicle displays',
                  'Interactive configurators',
                  'Real-time inventory updates',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-[#2BCC07] rounded-full" />
                    <p
                      className="text-white/60"
                      style={{
                        fontSize: 'clamp(0.875rem, 1.15vw, 1rem)',
                        fontWeight: 300,
                      }}
                    >
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Center dividing line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#2BCC07]/30 origin-top"
        />
      </div>

      {/* Section 4: Service Center Experience - Split Layout */}
      <div className="relative h-screen w-full">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center bg-black px-6 lg:px-16"
          >
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[#2BCC07] mb-6 tracking-[0.25em] uppercase"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
              >
                Service Center
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white mb-8"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 7rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                Enhanced
                <br />
                <span className="text-[#2BCC07]">Customer Comfort</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-white/80"
                style={{
                  fontSize: 'clamp(1rem, 1.35vw, 1.125rem)',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Digital displays in service waiting areas provide real-time updates on vehicle status, 
                estimated completion times, and personalized service recommendations, transforming wait 
                time into an engaging experience.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764743259058-a27178710a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc2VydmljZSUyMGNlbnRlciUyMG1vZGVybnxlbnwxfHx8fDE3NzAyMzA3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Service center displays"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Floating number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                fontSize: 'clamp(8rem, 15vw, 20rem)',
                fontWeight: 300,
                color: '#2BCC07',
                lineHeight: 1,
              }}
            >
              02
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section 5: Solutions & Goals - Stacking Cards */}
      <div className="relative bg-black pb-32">
        {/* Section label */}
        <div className="relative z-20 pt-32 pb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#2BCC07] tracking-[0.4em] uppercase mb-12"
            style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400 }}
          >
            Our Approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
            }}
          >
            <span className="text-white">Solutions designed to </span>
            <span className="text-[#2BCC07]">impress</span>
          </motion.h2>
        </div>

        {/* Stacking Cards */}
        <div className="relative px-6 lg:px-12">
          {/* Card 1 - Increase showroom appeal */}
          <div className="sticky top-24 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-10%", amount: 0.3 }}
              className="relative max-w-4xl mx-auto bg-black border border-[#2BCC07]/30 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768282698563-e2f16776c37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzaG93cm9vbSUyMGRpZ2l0YWwlMjBzaWduYWdlfGVufDF8fHx8MTc3MDIzMDc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Increase showroom appeal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                
                {/* Number overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="absolute top-8 right-8 text-[#2BCC07] pointer-events-none"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  01
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Increase showroom <span className="text-[#2BCC07]">appeal</span>
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-16 h-[1px] bg-[#2BCC07] mb-6 origin-left"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white/70"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.15vw, 1.0625rem)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  Creating stunning visual environments that showcase vehicles as works of art and attract 
                  premium customers seeking luxury experiences.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Card 2 - Strengthen brand presence */}
          <div className="sticky top-24 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-10%", amount: 0.3 }}
              className="relative max-w-4xl mx-auto bg-black border border-[#2BCC07]/30 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763071686691-3f77692c5ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwMjMwNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Strengthen brand presence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                
                {/* Number overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="absolute top-8 right-8 text-[#2BCC07] pointer-events-none"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  02
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Strengthen brand <span className="text-[#2BCC07]">identity</span>
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-16 h-[1px] bg-[#2BCC07] mb-6 origin-left"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white/70"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.15vw, 1.0625rem)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  Delivering consistent, premium brand experiences across all dealership locations with 
                  centralized content management and cohesive visual messaging.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Card 3 - Create immersive experiences */}
          <div className="sticky top-24 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-10%", amount: 0.3 }}
              className="relative max-w-4xl mx-auto bg-black border border-[#2BCC07]/30 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733803102408-7f122d044ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwTEVEJTIwZGlzcGxheXxlbnwxfHx8fDE3NzAyMzA3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Create immersive experiences"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                
                {/* Number overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="absolute top-8 right-8 text-[#2BCC07] pointer-events-none"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  03
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-12">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Create <span className="text-[#2BCC07]">immersive</span> experiences
                </motion.h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-16 h-[1px] bg-[#2BCC07] mb-6 origin-left"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-white/70"
                  style={{
                    fontSize: 'clamp(0.9375rem, 1.15vw, 1.0625rem)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  Engaging customers with interactive configurators, virtual test drives, and dynamic 
                  content that brings the excitement of automotive innovation into every interaction.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 6: Results - Dramatic Impact */}
      <div className="relative w-full bg-black py-32 lg:py-40">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-24 lg:mb-32"
          >
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-20 h-[1px] bg-[#2BCC07]"
              />
              <p
                className="text-[#2BCC07] tracking-[0.4em] uppercase"
                style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400 }}
              >
                Results
              </p>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-white max-w-4xl"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              Driving sales and customer satisfaction
            </motion.h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {/* Stat 1 - Main metric */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative border-l-2 border-[#2BCC07] pl-8 lg:pl-12">
                {/* Large number background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.04 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute -top-8 -left-4 text-[#2BCC07] pointer-events-none select-none"
                  style={{
                    fontSize: 'clamp(10rem, 20vw, 16rem)',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  45
                </motion.div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[#2BCC07] mb-6"
                    style={{
                      fontSize: 'clamp(5rem, 12vw, 10rem)',
                      fontWeight: 300,
                      lineHeight: 0.9,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    +45%
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-white mb-6"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                      lineHeight: 1.3,
                    }}
                  >
                    Increase in showroom dwell time
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="text-white/60 max-w-xl"
                    style={{
                      fontSize: 'clamp(0.9375rem, 1.15vw, 1.0625rem)',
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    Customers spend significantly more time exploring vehicles and configurations, 
                    leading to higher conversion rates across all locations.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Stat 2 - Secondary metric */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="border-l border-[#2BCC07]/30 pl-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-[#2BCC07] mb-4"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 0.9,
                }}
              >
                3.5x
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                viewport={{ once: true }}
                className="text-white mb-4"
                style={{
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                  fontWeight: 300,
                  lineHeight: 1.3,
                }}
              >
                Premium model inquiries
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                viewport={{ once: true }}
                className="text-white/60"
                style={{
                  fontSize: 'clamp(0.875rem, 1vw, 0.9375rem)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                High-end vehicle interest surged as immersive displays showcase luxury features in stunning detail.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 7: Contact Us CTA */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1736426341937-656fc3363b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDIzMDc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-5xl text-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block relative">
                <p
                  className="text-[#2BCC07] tracking-[0.4em] uppercase"
                  style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)', fontWeight: 400 }}
                >
                  Start Your Project
                </p>
                
                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#2BCC07]"
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-white mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 6.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Ready to elevate your
              <br />
              <span className="text-[#2BCC07]">automotive showroom?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-white/80 mb-16 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Let's discuss how our premium LED display solutions can transform your dealership 
              and create world-class automotive experiences.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block relative group"
              >
                <div className="relative px-12 py-6 bg-white overflow-hidden">
                  {/* Hover effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-[#2BCC07]"
                  />
                  
                  <span
                    className="relative z-10 text-black transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Get in Touch
                  </span>
                </div>

                {/* Border animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2BCC07] origin-left"
                />
              </motion.a>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-[1px] h-16 bg-[#2BCC07]" />
                <div className="w-2 h-2 rounded-full bg-[#2BCC07]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}