"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export interface Rental {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const rentals: Rental[] = [
  {
    id: 1,
    number: "01",
    title: "Indoor LED Screens",
    description:
      "Perfect for conferences, trade shows, and corporate events, our indoor LED screens deliver stunning clarity and vivid colors. Available in various sizes and configurations, these screens are designed for easy setup and seamless integration into any indoor venue. With high resolution and excellent brightness control, they ensure your content looks exceptional in any lighting condition.",
    features: [
      "High resolution displays",
      "Quick setup and teardown",
      "Flexible configurations",
      "Perfect for corporate events",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBMRUQlMjBzY3JlZW4lMjBjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    number: "02",
    title: "Outdoor LED Screens",
    description:
      "Built to withstand the elements, our outdoor LED screens are ideal for festivals, sports events, and public gatherings. Featuring weatherproof construction and ultra-high brightness, these displays remain visible even in direct sunlight. Robust and reliable, they deliver exceptional performance in any outdoor environment.",
    features: [
      "Weatherproof design",
      "Ultra-high brightness",
      "Large format options",
      "Ideal for festivals & outdoor events",
    ],
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwTEVEJTIwc2NyZWVuJTIwZmVzdGl2YWwlMjBjb25jZXJ0fGVufDF8fHx8MTcwOTEyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    number: "03",
    title: "Mobile LED Trailers",
    description:
      "Flexible, portable solutions with remote monitoring and support. Ideal for temporary events, outdoor installations, and campaigns where speed and reach are critical. Available in a variety of sizes and configurations.",
    features: [
      "Modular and scalable",
      "Tour-ready construction",
      "Creative shapes and configurations",
      "Exceptional color accuracy",
    ],
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBMRUQlMjBzY3JlZW4lMjBsaXZlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    number: "04",
    title: "Live Events & Corporate Events",
    description:
      "Using our own cost-effective equipment, we create complete solutions for tours, trade fairs, product launches, and internal events—always with a sharp and immersive visual presence.",
    features: [
      "Professional image quality",
      "Seamless content integration",
      "Elegant and modern design",
      "Perfect for product launches",
    ],
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHByZXNlbnRhdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    number: "05",
    title: "Exhibitions & Sports",
    description:
      "We install LED solutions in stadiums and exhibition environments—efficiently, sustainably, and with high-end performance for both real-time information and audience engagement.",
    features: [
      "Large-scale formats",
      "Wide viewing angles",
      "High refresh rates for sports",
      "Durable and reliable",
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc3BvcnRzJTIwTEVEJTIwc2NyZWVuJTIwZmFuc3xlbnwxfHx8fDE3MDkxMjg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    number: "06",
    title: "Dry Hire",
    description:
      "For short-term needs, we offer smart LED display rentals, including support and quick deployment, where the customer handles pickup, installation, and return of the equipment.",
    features: [
      "Fully mobile solutions",
      "Turnkey operation",
      "Large outdoor screens",
      "Perfect for advertising campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBMRUQlMjB0cnVjayUyMGFkdmVydGlzaW5nJTIwdmVoaWNsZXxlbnwxfHx8fDE3MDkxMjg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    number: "07",
    title: "LED Configurator",
    description:
      "Once the strategy and concept are in place, our specialists assess the technical requirements. Using our LED configurator, we determine the optimal combination of hardware and software tailored to your needs, and provide a clear, customized quote.",
    features: [
      "Film & broadcast grade",
      "Real-time VFX capability",
      "Camera tracking integration",
      "Industry-leading color accuracy",
    ],
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcHJvZHVjdGlvbiUyMGZpbG0lMjBzdHVkaW8lMjBMRUQlMjB3YWxsfGVufDF8fHx8MTcwOTEyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

function RentalSectionItem({
  rental,
  index,
}: {
  rental: Rental;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="container mx-auto px-6 lg:px-24 h-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`md:w-1/2 relative ${isEven ? "md:order-1" : "md:order-2"} `}
          >
            <div className="relative overflow-hidden max-h-auto md:max-h-[320px]">
              <motion.img
                src={rental.image}
                alt={rental.title}
                className="w-full h-auto object-cover"
                whileInView={{ scale: 1 }}
                initial={{ scale: 1.15 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
              <div className="absolute top-6 right-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[#2BCC07]"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    fontWeight: 200,
                    lineHeight: 1,
                    textShadow: "0 2px 20px rgba(43, 204, 7, 0.3)",
                    opacity: 0.4,
                  }}
                >
                  {rental.number}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className={`md:w-1/2 h-full ${isEven ? "md:order-2" : "md:order-1"}`}
          >
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              {rental.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/70 mb-6"
              style={{
                fontSize: "clamp(0.9375rem, 1vw, 1rem)",
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              {rental.description}
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {rental.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-3 h-[2px] bg-[#2BCC07] mt-2 flex-shrink-0" />
                    <span
                      className="text-white/50"
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 300,
                        lineHeight: 1.5,
                      }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            <motion.a
              href="/contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 group"
            >
              <span
                className="text-white/80 group-hover:text-[#2BCC07] transition-colors duration-300"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Request Quote
              </span>
              <div className="w-6 h-6 border border-[#2BCC07] flex items-center justify-center group-hover:bg-[#2BCC07] transition-all duration-300">
                <ArrowUpRight className="w-3 h-3 text-[#2BCC07] group-hover:text-black transition-colors duration-300" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function RentalServicesHeader() {
  return (
    <div className="container mx-auto px-6 lg:px-24 pt-20 lg:pt-28 pb-12 lg:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-6 mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-[2px] origin-left bg-[#2BCC07]"
          />
          <p
            className="tracking-[0.3em] uppercase text-[#2BCC07]"
            style={{ fontSize: "0.875rem", fontWeight: 400 }}
          >
            Rental Solutions
          </p>
        </div>
        <h2
          className="text-white"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Choose from our comprehensive range of LED rental solutions designed
          for every type of event and application.
        </h2>
      </motion.div>
    </div>
  );
}

export function RentalSection1() {
  return (
    <div className="h-full flex flex-col items-center justify-center md:gap-10 gap-6">
      {rentals.slice(0, 2).map((rental, index) => (
        <RentalSectionItem key={rental.id} rental={rental} index={index} />
      ))}
    </div>
  );
}

export function RentalSection2() {
  return (
    <div className="lg:max-h-[90vh] h-full flex flex-col items-center justify-center gap-10">
      {rentals.slice(2, 4).map((rental, index) => (
        <RentalSectionItem key={rental.id} rental={rental} index={index + 2} />
      ))}
    </div>
  );
}

export function RentalSection3() {
  return (
    <div className="lg:max-h-[90vh] h-full flex flex-col items-center justify-center gap-10">
      {rentals.slice(4, 6).map((rental, index) => (
        <RentalSectionItem key={rental.id} rental={rental} index={index + 4} />
      ))}
    </div>
  );
}

export function RentalSection4() {
  return (
    <div className="lg:max-h-[90vh] h-full flex flex-col items-center justify-center gap-10 mb-20 lg:mb-0">
      {rentals.slice(6, 7).map((rental, index) => (
        <RentalSectionItem key={rental.id} rental={rental} index={index + 6} />
      ))}
    </div>
  );
}
