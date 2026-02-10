"use client";
import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function SupportContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      detail: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'support@imvision.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Mon - Fri: 9am - 6pm PST',
      description: 'We are here when you need us',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      detail: 'Available during business hours',
      description: 'Chat with our support team',
    },
  ];

  return (
    <section
      id="contact-support"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-white mb-4 text-center"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
          }}
        >
          Contact Support
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="text-white/60 mb-16 text-center max-w-2xl mx-auto"
          style={{
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Reach out to our team through any of these channels for help with your LED display solutions.
        </motion.p>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(43, 204, 7, 0.5)' }}
                className="group relative p-8 bg-white/5 border border-white/10 transition-all duration-300"
              >
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-[#2BCC07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon 
                      size={36} 
                      className="text-[#2BCC07] group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white mb-2"
                    style={{
                      fontSize: 'clamp(1.2rem, 1.5vw, 1.4rem)',
                      fontWeight: 400,
                    }}
                  >
                    {method.title}
                  </h3>

                  {/* Detail */}
                  <p
                    className="text-[#2BCC07] mb-3"
                    style={{
                      fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                      fontWeight: 300,
                    }}
                  >
                    {method.detail}
                  </p>

                  {/* Description */}
                  <p
                    className="text-white/60"
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 300,
                      lineHeight: 1.5,
                    }}
                  >
                    {method.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Emergency Support Notice */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="mt-12 text-center p-6 bg-[#2BCC07]/10 border border-[#2BCC07]/30"
        >
          <p
            className="text-white/90"
            style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            <span className="text-[#2BCC07] font-medium">Emergency Support:</span> For urgent technical issues during events, 
            call our 24/7 emergency line at <span className="text-[#2BCC07]">+1 (555) 911-DISP</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}