"use client";

import { FullPageSlider } from "@/components/FullPageSlider";
import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { HomePortfolioIntro } from "@/components/HomePortfolioIntro";
import {
  HomePortfolioSlide,
  type HomePortfolioItem,
} from "@/components/HomePortfolioSlide";
import {
  WhatWeDoSectionHeader,
  WhatWeDoSectionSlide,
  type Service,
} from "@/components/WhatWeDoSection";
import { useTranslation } from "@/hooks/useTranslation";
import { DUMMY_IMAGE } from "@/assets/dummyImage";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

const PORTFOLIO_ITEMS: HomePortfolioItem[] = [
  {
    title: "Fashion Industry",
    category: "RETAIL & EVENTS",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
    slug: "fashion-industry",
  },
  {
    title: "Grocery Store",
    category: "RETAIL",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80",
    slug: "grocery-store",
  },
  {
    title: "Automotive Industry",
    category: "SHOWROOM",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
    slug: "automotive-industry",
  },
  {
    title: "Outdoor Advertising (DOOH)",
    category: "DIGITAL OUT-OF-HOME",
    image: DUMMY_IMAGE, // black slide per reference
    slug: "outdoor-advertising-dooh",
  },
];

export default function HomePage() {
  const { t } = useTranslation();
  const whatWeDoServices: Service[] = [
    {
      title: t.whatWeDo.sales.title,
      description: t.whatWeDo.sales.description,
      image: DUMMY_IMAGE,
    },
    {
      title: t.whatWeDo.rental.title,
      description: t.whatWeDo.rental.description,
      image: DUMMY_IMAGE,
    },
    {
      title: t.whatWeDo.service.title,
      description: t.whatWeDo.service.description,
      image: DUMMY_IMAGE,
    },
  ];

  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      slides={[
        {
          background: "hero",
          content: <HeroSection part="content" />,
        },
        {
          background: "black",
          content: <HomePortfolioIntro />,
        },
        ...PORTFOLIO_ITEMS.map((item, i) => ({
          background: "black" as const,
          content: <HomePortfolioSlide item={item} index={i + 1} />,
        })),
        {
          background: "black",
          content: <WhatWeDoSectionHeader />,
        },
        ...whatWeDoServices.map((service, i) => ({
          background: "black" as const,
          content: <WhatWeDoSectionSlide service={service} index={i + 1} />,
        })),
        {
          background: "contact",
          content: <ContactSection part="content" />,
        },
      ]}
    />
  );
}
