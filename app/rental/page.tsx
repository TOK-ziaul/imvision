"use client";
import { Navigation } from "@/components/Navigation";
import { RentalHeroSection } from "@/components/RentalHeroSection";
import { RentalsSection } from "@/components/RentalsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "motion/react";

export default function RentalPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBjb25jZXJ0JTIwZmVzdGl2YWwlMjBvdXRkb29yJTIwZXZlbnR8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const contactImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full" style={{ position: "relative" }}>
      <AnimatedBackground />
      <Navigation />
      <RentalHeroSection backgroundImage={heroImage} />
      <div className="relative bg-black">
        <div className="container mx-auto px-6 lg:px-24 py-24 lg:py-32">
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
              At IM Vision, you can rent LED solutions the way it suits you —
              full service with design, on-site setup and dismantling and support.
              You&apos;re also welcome to pick up and return the equipment yourself
              if you&apos;ve got your own crew. Need something unique? Just get in
              touch and we&apos;ll help create a concept that matches your needs.
            </p>
          </motion.div>
        </div>
      </div>
      <RentalsSection />
      <ContactSection backgroundImage={contactImage} />
      <Footer />
    </div>
  );
}
