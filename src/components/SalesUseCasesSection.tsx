"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface UseCase {
  id: number;
  title: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  };
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Retail Experience Centers",
    description:
      "Transform traditional retail spaces into immersive brand experiences where customers can interact with products through dynamic LED displays, creating memorable shopping journeys that blend physical and digital touchpoints.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    stats: {
      label: "Engagement Increase",
      value: "85%",
    },
  },
  {
    id: 2,
    title: "Corporate Communication Hubs",
    description:
      "Elevate workplace environments with large-format LED installations that facilitate collaboration, display real-time data, and create inspiring spaces where teams connect and innovate together.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    stats: {
      label: "Productivity Boost",
      value: "40%",
    },
  },
  {
    id: 3,
    title: "Hospitality & Entertainment Venues",
    description:
      "Create captivating atmospheres in hotels, restaurants, and entertainment spaces with immersive LED environments that adapt to events, enhance guest experiences, and tell compelling brand stories.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    stats: {
      label: "Guest Satisfaction",
      value: "92%",
    },
  },
  {
    id: 4,
    title: "Architectural Landmarks",
    description:
      "Turn buildings into dynamic canvases with exterior LED installations that transform urban landscapes, create iconic landmarks, and engage communities through large-scale digital art and messaging.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
    stats: {
      label: "Visibility Range",
      value: "2km+",
    },
  },
];

function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.a
        href="/contact"
        style={{ scale }}
        className="block relative overflow-hidden "
      >
        {/* Image Container */}
        <div className="relative aspect-[16/8] lg:aspect-[16/9] overflow-hidden">
          <motion.div className="w-full h-full">
            <motion.img
              src={useCase.image}
              alt={useCase.title}
              className="w-full  object-cover h-full opacity-75"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Gradient Overlay - lighter by default, darker on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-700" />

          {/* Arrow Icon */}
          <motion.div className="absolute top-8 right-8 w-12 h-12 border-2 border-white/30 group-hover:border-[#2BCC07] group-hover:bg-[#2BCC07] flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
            <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
          </motion.div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Title - always visible with fixed height */}
              <div className=" flex flex-col justify-end mb-4  ">
                <h3
                  className="text-white group-hover:text-[#2BCC07] transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {useCase.title}
                </h3>
              </div>

              {/* Description - hidden by default, appears on hover */}
              <div className="overflow-hidden hidden xl:block">
                <p
                  className="text-white/80 mb-6 max-w-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  style={{
                    fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  {useCase.description}
                </p>
              </div>

              {/* Bottom line */}
              <div className="w-16 h-[2px] bg-[#2BCC07] group-hover:w-32 transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export function SalesUseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className="relative h-full overflow-hidden mb-20 lg:mb-0"
    >
      {/* Green border */}

      <div className="container mx-auto px-6 xl:px-24 h-full flex items-center justify-center ">
        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>

        {/* Bottom Divider */}
        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2BCC07] to-transparent mt-20 lg:mt-2 origin-center"
        /> */}
      </div>
    </div>
  );
}

export const SalesUseCasesHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className=" max-w-5xl mx-auto text-center"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-6 mb-8"
      >
        <div className="w-16 h-[2px] bg-[#2BCC07]" />
        <p
          className="tracking-[0.3em] uppercase text-[#2BCC07]"
          style={{ fontSize: "0.875rem", fontWeight: 400 }}
        >
          Use Cases
        </p>
        <div className="w-16 h-[2px] bg-[#2BCC07]" />
      </motion.div>

      <h2
        className="text-white mb-6"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        New <span className="text-[#2BCC07]">phygital use cases</span> for LED
        display solutions
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-white/70 max-w-3xl mx-auto"
        style={{
          fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
          fontWeight: 300,
          lineHeight: 1.7,
        }}
      >
        Discover how leading brands are transforming spaces and creating
        unforgettable experiences through innovative LED display applications
      </motion.p>
    </motion.div>
  );
};
