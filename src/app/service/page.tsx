"use client";

import { motion } from "motion/react";
import { FullPageSlider } from "@/components/FullPageSlider";
import { ServiceHeroSection } from "@/components/ServiceHeroSection";
import { ContactSection } from "@/components/ContactSection";
import {
  ServicesSectionHeader,
  ServicesSection1,
  ServicesSection2,
  ServicesSection3,
} from "@/components/ServicesSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1706248504630-d165ae5f7134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwaW5zdGFsbGluZyUyMExFRCUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNjMwMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const ServiceIntroContent = () => (
  <div className="relative w-full">
    <div className="container mx-auto px-6 lg:px-24 pt-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl"
      >
        <p
          className="text-white/80 mb-8"
          style={{
            fontSize: "clamp(1.25rem, 2vw, 2rem)",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          We deliver cutting-edge LED display solutions designed to meet the
          highest demands of today&apos;s market. Backed by a team of specialists
          we support our clients every step of the way, from design, project
          management, installation, and roll-out to ongoing maintenance,
          monitoring, and warranty, ensuring peace of mind throughout the entire
          lifecycle of the solution.
        </p>
        <p
          className="text-[#2BCC07]"
          style={{
            fontSize: "clamp(1.25rem, 2vw, 2rem)",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Let our experts help you bring your vision to life.
        </p>
      </motion.div>
    </div>
  </div>
);

export default function ServicePage() {
  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      topSlot={<AnimatedBackground />}
      slides={[
        {
          background: "hero",
          content: (
            <ServiceHeroSection
              backgroundImage={HERO_IMAGE}
              part="content"
            />
          ),
        },
        {
          background: "black",
          content: <ServiceIntroContent />,
        },
        {
          background: "black",
          content: <ServicesSectionHeader />,
        },
        {
          background: "black",
          content: <ServicesSection1 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <ServicesSection2 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <ServicesSection3 />,
          scrollable: true,
        },
        {
          background: "contact",
          content: <ContactSection part="content" />,
        },
      ]}
    />
  );
}
