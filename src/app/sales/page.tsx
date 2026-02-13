"use client";

import { FullPageSlider } from "@/components/FullPageSlider";
import { SalesHeroSection } from "@/components/SalesHeroSection";
import { SalesIntroSection } from "@/components/SalesIntroSection";
import {
  SalesServicesHeader,
  SalesServicesSection1,
  SalesServicesSection2,
  SalesServicesSection3,
} from "@/components/SalesServicesSection";
import {
  SalesUseCasesHeader,
  SalesUseCasesSection,
} from "@/components/SalesUseCasesSection";
import { SalesDisplaySolutionsSection } from "@/components/SalesDisplaySolutionsSection";
import { SalesContactSection } from "@/components/SalesContactSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMExFRCUyMGRpc3BsYXl8ZW58MXx8fHwxNzM4NjY5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

export default function SalesPage() {
  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      topSlot={<AnimatedBackground />}
      slides={[
        {
          background: "hero",
          content: (
            <SalesHeroSection backgroundImage={HERO_IMAGE} part="content" />
          ),
        },
        {
          background: "black",
          content: <SalesIntroSection />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesServicesHeader />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesServicesSection1 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesServicesSection2 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesServicesSection3 />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesUseCasesHeader />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesUseCasesSection />,
          scrollable: true,
        },
        {
          background: "black",
          content: <SalesDisplaySolutionsSection />,
          scrollable: true,
        },
        {
          background: "contact",
          content: <SalesContactSection part="content" />,
        },
      ]}
    />
  );
}
