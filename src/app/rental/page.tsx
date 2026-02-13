"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { RentalHeroSection } from "@/components/RentalHeroSection";
import { ContactSection } from "@/components/ContactSection";
import {
  RentalServicesHeader,
  RentalSection1,
  RentalSection2,
  RentalSection3,
  RentalSection4,
} from "@/components/RentalsSection";

const TOTAL_SLIDES = 8; // Hero, RentalHeader, Section1, Section2, Section3, Section4, Contact
const BG_TRANSITION = { duration: 1.2, ease: [0.4, 0, 0.2, 1] };
const CONTENT_TRANSITION = {
  duration: 0.7,
  delay: 0.36,
  ease: [0.4, 0, 0.2, 1],
};
const CONTENT_SLIDE_HEIGHT_VH = 92;

export default function RentalPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroImage =
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzY3JlZW4lMjBjb25jZXJ0JTIwZmVzdGl2YWwlMjBvdXRkb29yJTIwZXZlbnR8ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const contactImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 200) return;
      lastScrollTime.current = now;

      if (isAnimating) return;
      if (Math.abs(e.deltaY) < 10) return;

      setActiveIndex((i) => {
        const next =
          e.deltaY > 0 ? Math.min(i + 1, TOTAL_SLIDES - 1) : Math.max(i - 1, 0);

        if (next !== i) {
          setIsAnimating(true);
        }
        return next;
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isAnimating]);

  useEffect(() => {
    if (!isAnimating) return;

    const MAX_TRANSITION =
      Math.max(
        BG_TRANSITION.duration,
        CONTENT_TRANSITION.duration + (CONTENT_TRANSITION.delay ?? 0),
      ) * 1000;

    const t = setTimeout(() => {
      setIsAnimating(false);
    }, MAX_TRANSITION + 100);

    return () => clearTimeout(t);
  }, [isAnimating]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <Navigation isRelative={true} />

      {/* Background strip – one panel per slide */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full"
          style={{ height: `${TOTAL_SLIDES * 100}vh` }}
          animate={{ y: `-${Math.round(activeIndex * 100)}vh` }}
          transition={BG_TRANSITION as object}
        >
          <div className="h-screen w-full relative">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={heroImage}
              alt="Rental hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full bg-black" />
          <div className="h-screen w-full relative">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
        </motion.div>
      </div>

      {/* Content carousel */}
      <div className=" flex items-center justify-center overflow-hidden h-[calc(100vh-62px)]">
        <div
          className="w-full overflow-hidden "
          style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
        >
          <motion.div
            className="w-full h-full"
            // style={{
            //   height: `${TOTAL_SLIDES * CONTENT_SLIDE_HEIGHT_VH}vh`,
            // }}
            animate={{
              y: `-${Math.round(activeIndex * CONTENT_SLIDE_HEIGHT_VH)}vh`,
            }}
            transition={CONTENT_TRANSITION as object}
          >
            {/* Slide 1: Hero */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <RentalHeroSection backgroundImage={heroImage} part="content" />
            </div>
            {/* Slide 2: Rental header */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <div className="relative">
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
                      At IM Vision, you can rent LED solutions the way it suits
                      you — full service with design, on-site setup and
                      dismantling and support. You&apos;re also welcome to pick
                      up and return the equipment yourself if you&apos;ve got
                      your own crew. Need something unique? Just get in touch
                      and we&apos;ll help create a concept that matches your
                      needs.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
            {/* Slide 3: RentalServicesHeader */}

            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <RentalServicesHeader />
            </div>
            {/* Slide 4: RentalSection1 */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <RentalSection1 />
            </div>
            {/* Slide 5: RentalSection2 */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <RentalSection2 />
            </div>
            {/* Slide 6: RentalSection3 */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <RentalSection3 />
            </div>
            {/* Slide 7: RentalSection4 */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <RentalSection4 />
            </div>
            {/* Slide 8: Contact */}
            <div
              className="w-full flex items-center justify-center overflow-hidden"
              style={{ height: `${CONTENT_SLIDE_HEIGHT_VH}vh` }}
            >
              <ContactSection part="content" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
