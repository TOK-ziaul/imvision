"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MoveRight } from "lucide-react";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "small" | "medium" | "large" | "wide";
}

const portfolioItems: Portfolio[] = [
  {
    id: 1,
    title: "Luxury Retail Flagship",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Urban Billboard Network",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "medium",
  },
  {
    id: 3,
    title: "Corporate Headquarters",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "large",
  },
  {
    id: 4,
    title: "Entertainment Complex",
    category: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "small",
  },
  {
    id: 5,
    title: "Transportation Hub",
    category: "Public Space",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "wide",
  },
  {
    id: 6,
    title: "Hotel Lobby Experience",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "medium",
  },
  {
    id: 7,
    title: "Stadium LED Installation",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "large",
  },
  {
    id: 8,
    title: "Museum Digital Wall",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "small",
  },
  {
    id: 9,
    title: "Shopping Mall Display",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "wide",
  },
  {
    id: 10,
    title: "Conference Center",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    size: "medium",
  },
];

export function SalesDisplaySolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [200, -200]);
  const descY = useTransform(scrollYProgress, [0, 0.5], [-100, 100]);

  // Scroll-driven horizontal movement
  const x = useTransform(scrollProgress, [0, 1], [0, -2000]);

  // const getSizeClasses = (size: string) => {
  //   switch (size) {
  //     case 'small':
  //       return 'w-[300px] h-[250px]';
  //     case 'medium':
  //       return 'w-[350px] h-[300px]';
  //     case 'large':
  //       return 'w-[450px] h-[350px]';
  //     case 'wide':
  //       return 'w-[600px] h-[280px]';
  //     default:
  //       return 'w-[350px] h-[300px]';
  //   }
  // };

  return (
    <div ref={sectionRef} className="relative bg-black overflow-hidden">
      {/* Split Title Section with Parallax */}
      <div className="relative min-h-screen flex items-center justify-center py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Animated Title */}
            <motion.div style={{ y: titleY }} className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-[#2BCC07] mb-8 origin-left"
              />

              <h2
                className="text-white mb-0 relative"
                style={{
                  fontSize: "clamp(4rem, 8vw, 9rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  Display
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block text-[#2BCC07] ml-12 lg:ml-24"
                >
                  Solutions
                </motion.span>

                {/* Animated number */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-8 -right-4 text-white/5"
                  style={{
                    fontSize: "clamp(8rem, 15vw, 18rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  03
                </motion.span>
              </h2>
            </motion.div>

            {/* Right - Description with parallax */}
            <motion.div style={{ y: descY }}>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white/50 mb-8"
                style={{
                  fontSize: "clamp(1.125rem, 1.4vw, 1.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                Our display solutions strengthen your brand, improve customer
                experience and contribute to effective communication. Whether
                it's about attracting customers in stores, streamlining
                information in public environments or improving workflows in
                corporate environments, we offer the right solution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-[#2BCC07] group cursor-pointer"
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore Portfolio
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <MoveRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll-Driven Horizontal Portfolio Section */}
      <div
        ref={scrollSectionRef}
        className="relative py-20 lg:py-32 min-h-screen"
      >
        <div className="container mx-auto px-6 lg:px-24 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[#2BCC07] mb-3"
              style={{
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Inspiring Ideas
            </p>
            <h3
              className="text-white"
              style={{
                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              Recent Projects
            </h3>
          </motion.div>
        </div>

        {/* Combined: Auto-scroll + Scroll-driven horizontal movement */}
        <div className="relative overflow-hidden">
          {/* Row 1 */}
          <motion.div className="flex gap-6 mb-6" style={{ x }}>
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -2000] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...portfolioItems, ...portfolioItems].map((item, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative flex-shrink-0 w-[400px] h-[280px] overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="text-[#2BCC07] mb-2"
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 400,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </span>
                    <h4
                      className="text-white"
                      style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Row 2 - opposite direction */}
          <motion.div
            className="flex gap-6"
            style={{ x: useTransform(scrollProgress, [0, 1], [-1000, 0]) }}
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: [-2000, 0] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                ...portfolioItems.slice().reverse(),
                ...portfolioItems.slice().reverse(),
              ].map((item, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative flex-shrink-0 w-[400px] h-[280px] overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="text-[#2BCC07] mb-2"
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 400,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </span>
                    <h4
                      className="text-white"
                      style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
