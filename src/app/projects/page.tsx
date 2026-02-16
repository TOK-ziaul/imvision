"use client";

import { FullPageSlider } from "@/components/FullPageSlider";
import { ProjectsHeroSection } from "@/components/ProjectsHeroSection";
import {
  ProjectsSectionHeader,
  ProjectsSection1,
  ProjectsSection2,
} from "@/components/ProjectsGridSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1712903911104-cf22c142c04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBkaXNwbGF5JTIwcG9ydGZvbGlvJTIwcHJvamVjdHMlMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzAxOTkyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzA5MTI4ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function ProjectsPage() {
  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      topSlot={<AnimatedBackground />}
      slides={[
        {
          background: "hero",
          content: (
            <ProjectsHeroSection backgroundImage={HERO_IMAGE} part="content" />
          ),
        },
        {
          background: "black",
          content: <ProjectsSectionHeader />,
        },
        {
          background: "black",
          content: <ProjectsSection1 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <ProjectsSection2 />,
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
