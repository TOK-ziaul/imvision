"use client";

import { motion } from "motion/react";
import { FullPageSlider } from "@/components/FullPageSlider";
import { RentalHeroSection } from "@/components/RentalHeroSection";
import { ContactSection } from "@/components/ContactSection";
import {
  RentalServicesHeader,
  RentalSection1,
  RentalSection2,
  RentalSection3,
  RentalSection4,
} from "@/components/RentalsSection";
import { useTranslation } from "@/hooks/useTranslation";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBjb25jZXJ0JTIwZmVzdGl2YWwlMjBvdXRkb29yJTIwZXZlbnR8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

function RentalIntroContent() {
  const { t } = useTranslation();
  return (
    <div className="relative w-full">
      <div className="container mx-auto px-6 lg:px-24 pt-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <p
            className="text-white/80"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 2rem)",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            {t.rental.intro.paragraph}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function RentalPage() {
  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      slides={[
        {
          background: "hero",
          content: (
            <RentalHeroSection backgroundImage={HERO_IMAGE} part="content" />
          ),
        },
        {
          background: "black",
          content: <RentalIntroContent />,
        },
        {
          background: "black",
          content: <RentalServicesHeader />,
        },
        {
          background: "black",
          content: <RentalSection1 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <RentalSection2 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <RentalSection3 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <RentalSection4 />,
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
