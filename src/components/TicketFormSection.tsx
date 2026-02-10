"use client";
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export function TicketFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="ticket-form"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-3xl w-full">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-white mb-4"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
          }}
        >
          Submit a Ticket
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="text-white/60 mb-12"
          style={{
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Fill out the form below and our team will get back to you within 24 hours.
        </motion.p>

        {!isSubmitted ? (
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-white/80 mb-2"
                style={{ fontSize: '0.9rem', fontWeight: 300 }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#2BCC07] transition-colors"
                style={{ fontSize: '1rem', fontWeight: 300 }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-white/80 mb-2"
                style={{ fontSize: '0.9rem', fontWeight: 300 }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#2BCC07] transition-colors"
                style={{ fontSize: '1rem', fontWeight: 300 }}
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-white/80 mb-2"
                style={{ fontSize: '0.9rem', fontWeight: 300 }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#2BCC07] transition-colors"
                style={{ fontSize: '1rem', fontWeight: 300 }}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-white/80 mb-2"
                style={{ fontSize: '0.9rem', fontWeight: 300 }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 focus:outline-none focus:border-[#2BCC07] transition-colors resize-none"
                style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.6 }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#2BCC07] overflow-hidden"
              style={{
                border: '2px solid #2BCC07',
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  width: '30%',
                }}
                animate={{
                  x: ['-100%', '400%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 1.5,
                }}
              />

              <Send size={20} className="text-black relative z-10" strokeWidth={2} />
              <span
                className="text-black relative z-10 tracking-[0.1em] font-medium"
                style={{
                  fontSize: '1rem',
                }}
              >
                Submit Ticket
              </span>
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <CheckCircle size={64} className="text-[#2BCC07] mb-6" strokeWidth={1.5} />
            <h3
              className="text-white mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 300,
              }}
            >
              Ticket Submitted
            </h3>
            <p
              className="text-white/70"
              style={{
                fontSize: '1.1rem',
                fontWeight: 300,
              }}
            >
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
