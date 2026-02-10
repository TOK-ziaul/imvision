"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Rental {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const rentals: Rental[] = [
  {
    id: 1,
    number: '01',
    title: 'Indoor LED Screens',
    description: 'Perfect for conferences, trade shows, and corporate events, our indoor LED screens deliver stunning clarity and vivid colors. Available in various sizes and configurations, these screens are designed for easy setup and seamless integration into any indoor venue. With high resolution and excellent brightness control, they ensure your content looks exceptional in any lighting condition.',
    features: [
      'High resolution displays',
      'Quick setup and teardown',
      'Flexible configurations',
      'Perfect for corporate events',
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBMRUQlMjBzY3JlZW4lMjBjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    number: '02',
    title: 'Outdoor LED Screens',
    description: 'Built to withstand the elements, our outdoor LED screens are ideal for festivals, sports events, and public gatherings. Featuring weatherproof construction and ultra-high brightness, these displays remain visible even in direct sunlight. Robust and reliable, they deliver exceptional performance in any outdoor environment.',
    features: [
      'Weatherproof design',
      'Ultra-high brightness',
      'Large format options',
      'Ideal for festivals & outdoor events',
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwTEVEJTIwc2NyZWVuJTIwZmVzdGl2YWwlMjBjb25jZXJ0fGVufDF8fHx8MTcwOTEyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    number: '03',
    title: 'Mobile LED Trailers',
    description: 'Flexible, portable solutions with remote monitoring and support. Ideal for temporary events, outdoor installations, and campaigns where speed and reach are critical. Available in a variety of sizes and configurations.',
    features: [
      'Modular and scalable',
      'Tour-ready construction',
      'Creative shapes and configurations',
      'Exceptional color accuracy',
    ],
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBMRUQlMjBzY3JlZW4lMjBsaXZlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    number: '04',
    title: 'Live Events & Corporate Events',
    description: 'Using our own cost-effective equipment, we create complete solutions for tours, trade fairs, product launches, and internal events—always with a sharp and immersive visual presence.',
    features: [
      'Professional image quality',
      'Seamless content integration',
      'Elegant and modern design',
      'Perfect for product launches',
    ],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByZXNlbnRhdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    number: '05',
    title: 'Exhibitions & Sports',
    description: 'We install LED solutions in stadiums and exhibition environments—efficiently, sustainably, and with high-end performance for both real-time information and audience engagement.',
    features: [
      'Large-scale formats',
      'Wide viewing angles',
      'High refresh rates for sports',
      'Durable and reliable',
    ],
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwTEVEJTIwc2NyZWVuJTIwZmFuc3xlbnwxfHx8fDE3MDkxMjg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    number: '06',
    title: 'Dry Hire',
    description: 'For short-term needs, we offer smart LED display rentals, including support and quick deployment, where the customer handles pickup, installation, and return of the equipment.',
    features: [
      'Fully mobile solutions',
      'Turnkey operation',
      'Large outdoor screens',
      'Perfect for advertising campaigns',
    ],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBMRUQlMjB0cnVjayUyMGFkdmVydGlzaW5nJTIwdmVoaWNsZXxlbnwxfHx8fDE3MDkxMjg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 7,
    number: '07',
    title: 'LED Configurator',
    description: 'Once the strategy and concept are in place, our specialists assess the technical requirements. Using our LED configurator, we determine the optimal combination of hardware and software tailored to your needs, and provide a clear, customized quote.',
    features: [
      'Film & broadcast grade',
      'Real-time VFX capability',
      'Camera tracking integration',
      'Industry-leading color accuracy',
    ],
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcHJvZHVjdGlvbiUyMGZpbG0lMjBzdHVkaW8lMjBMRUQlMjB3YWxsfGVufDF8fHx8MTcwOTEyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

function RentalAccordionItem({ rental }: { rental: Rental }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full py-8 px-6 lg:px-12 flex items-center justify-between group hover:bg-white/5 transition-colors duration-300"
      >
        <h3
          className="text-white text-left"
          style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          {rental.title}
        </h3>
        
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="ml-6 flex-shrink-0"
        >
          <ArrowRight className="w-12 h-12 text-[#2BCC07]" strokeWidth={1} />
        </motion.div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-12 pb-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Description & CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p
                    className="text-white/70 mb-8"
                    style={{
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    {rental.description}
                  </p>

                  <motion.a
                    href="/contact"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-3 text-[#2BCC07] group cursor-pointer"
                  >
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Request Quote
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={rental.image}
                    alt={rental.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#2BCC07] text-black px-4 py-1.5 font-light tracking-[0.2em] text-sm">
                    {rental.number}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function RentalsSection() {
  return (
    <div className="relative bg-black">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-24 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Rental Solutions
          </h2>
          <p
            className="text-white/60"
            style={{
              fontSize: 'clamp(1.125rem, 1.3vw, 1.5rem)',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Choose from our comprehensive range of LED rental solutions designed for every type of event and application.
          </p>
        </motion.div>
      </div>

      {/* Accordion Rentals */}
      <div className="container mx-auto">
        {rentals.map((rental) => (
          <RentalAccordionItem key={rental.id} rental={rental} />
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="h-32" />
    </div>
  );
}