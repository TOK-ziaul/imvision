"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
const ABOUT_IMG = "/aboutImg.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutStatsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      stat: "10+",
      label: "Years of Experience",
      description:
        "Delivering large-scale LED installations for events, architecture, and brands worldwide.",
      stats: [
        { value: "3,000+", unit: "m²", label: "Installed LED Displays" },
        { value: "8", unit: "", label: "Markets Served" },
        { value: "220", unit: "m²", label: "Largest Single Installation" },
      ],
    },
    {
      stat: "3,000+",
      label: "Square Meters of LED",
      description:
        "Our extensive inventory ensures we can handle projects of any scale, from intimate displays to massive installations.",
      stats: [
        { value: "15+", unit: "", label: "LED Product Lines" },
        { value: "100%", unit: "", label: "Quality Guarantee" },
        { value: "24/7", unit: "", label: "Technical Support" },
      ],
    },
    {
      stat: "8",
      label: "Markets Worldwide",
      description:
        "From retail to corporate events, we bring cutting-edge LED technology to diverse industries across the globe.",
      stats: [
        { value: "500+", unit: "", label: "Projects Completed" },
        { value: "95%", unit: "", label: "Client Satisfaction" },
        { value: "50+", unit: "", label: "Global Partners" },
      ],
    },
  ];

  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <h2
              className="text-white mb-8"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              The IMvision Difference
            </h2>

            {/* Underline */}
            <div className="w-16 h-[1px] bg-white/50 mb-12" />

            {/* Main Stat */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <h3
                  className="text-white"
                  style={{
                    fontSize: "clamp(4rem, 8vw, 8rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 0.9,
                  }}
                >
                  {tabs[activeTab].stat}
                </h3>
                <span
                  className="text-white/80"
                  style={{
                    fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
                    fontWeight: 300,
                  }}
                >
                  {tabs[activeTab].label}
                </span>
              </div>

              <p
                className="text-white/70 max-w-xl mb-12"
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {tabs[activeTab].description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              key={`stats-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 mb-12"
            >
              {tabs[activeTab].stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-white"
                      style={{
                        fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span
                        className="text-white/60"
                        style={{
                          fontSize: "clamp(0.875rem, 1vw, 1rem)",
                          fontWeight: 300,
                        }}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-white/50"
                    style={{
                      fontSize: "clamp(0.75rem, 0.85vw, 0.875rem)",
                      fontWeight: 300,
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Tab Indicators */}
            <div className="flex items-center gap-3 mb-12">
              {tabs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === index ? "bg-white w-8" : "bg-white/30"
                  }`}
                  aria-label={`Switch to tab ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 group"
              whileHover={{ x: 5 }}
            >
              <span
                style={{
                  fontSize: "clamp(0.875rem, 1vw, 1rem)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                Talk to an LED Specialist
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <ImageWithFallback
              src={ABOUT_IMG}
              alt="LED Billboard on Busy City Street"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
