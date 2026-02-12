"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Indoor LED Displays",
    description:
      "Premium indoor LED solutions designed for retail, corporate, and entertainment environments with stunning clarity and vibrant colors.",
    features: [
      "Fine pixel pitch for close viewing",
      "High brightness & contrast ratio",
      "Seamless modular design",
      "Energy-efficient technology",
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
  },
  {
    id: 2,
    number: "02",
    title: "Outdoor LED Billboards",
    description:
      "Weather-resistant, high-brightness outdoor displays that command attention in any environment, day or night.",
    features: [
      "IP65+ weatherproof rating",
      "Ultra-high brightness (>5000 nits)",
      "Anti-glare surface treatment",
      "Remote monitoring & control",
    ],
    image:
      "https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "Transparent LED Screens",
    description:
      "Innovative transparent displays that blend digital content with physical environments, perfect for storefronts and architectural installations.",
    features: [
      "Up to 85% transparency",
      "Lightweight aluminum design",
      "Maintains natural light flow",
      "Interactive touch options",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
  },
  {
    id: 4,
    number: "04",
    title: "LED Video Walls",
    description:
      "Seamless, large-format video walls for control rooms, broadcast studios, and immersive brand experiences.",
    features: [
      "Bezel-free seamless design",
      "4K & 8K resolution options",
      "Advanced color calibration",
      "24/7 continuous operation",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
  },
  {
    id: 5,
    number: "05",
    title: "Curved & Creative LED",
    description:
      "Custom-shaped LED displays that push creative boundaries, from curved screens to 3D installations.",
    features: [
      "Flexible module configuration",
      "Custom angles & curves",
      "Architectural integration",
      "Artistic installations",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
  },
  {
    id: 6,
    number: "06",
    title: "Interactive LED Solutions",
    description:
      "Touch-enabled LED displays that engage audiences through interactive experiences, perfect for retail and exhibitions.",
    features: [
      "Multi-touch capability",
      "Gesture recognition",
      "Real-time content updates",
      "Analytics & insights",
    ],
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
  },
];

function ServiceSection({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  // const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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
            className={`lg:w-1/2 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative  overflow-hidden max-h-[140px] md:max-h-[320px]">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover "
                whileInView={{ scale: 1 }}
                initial={{ scale: 1.15 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />

              {/* Small number overlay */}
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
                  {service.number}
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
            className={`lg:w-1/2 h-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
          >
            {/* Title */}
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
              {service.title}
            </motion.h3>

            {/* Description */}
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
              {service.description}
            </motion.p>

            {/* Features - Compact 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {service.features.map((feature, idx) => (
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
            </motion.div>

            {/* CTA - More compact */}
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
                Get a Quote
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

export const SalesServicesSection1 = () => {
  return (
    <div className=" h-full flex flex-col items-center justify-center md:gap-10 gap-6">
      {services.slice(0, 2).map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export const SalesServicesSection2 = () => {
  return (
    <div className=" max-h-[90vh] h-full flex flex-col items-center justify-center gap-10">
      {services.slice(2, 4).map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};
export const SalesServicesSection3 = () => {
  return (
    <div className=" max-h-[90vh] h-full flex flex-col items-center justify-center gap-10">
      {services.slice(4, 6).map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export const SalesServicesHeader = () => {
  return (
    <div className="container mx-auto px-6 lg:px-24 pt-20 lg:pt-28 pb-12 lg:pb-20">
      {/* Section Header */}
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
            Our Services
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
          Comprehensive LED Solutions
        </h2>
      </motion.div>
    </div>
  );
};
