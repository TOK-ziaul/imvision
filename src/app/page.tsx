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
import { useQuery } from "@tanstack/react-query";
import { withoutAuthAxios } from "@/lib/config";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80";
const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

const PORTFOLIO_SLUGS = [
  "fashion-industry",
  "grocery-store",
  "automotive-industry",
  "outdoor-advertising-dooh",
];
const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
  DUMMY_IMAGE,
];
const fetchHome = async () => {
  const res = await withoutAuthAxios().get("/home");
  return res.data.data[0];
};
export default function HomePage() {
  const { data: homeData = {}, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: fetchHome,
  });

  console.log("homeData", homeData);
  const { t, language } = useTranslation();
  const portfolioItems: HomePortfolioItem[] = t.homePortfolio.items.map(
    (item, i) => ({
      title: item.title,
      category: item.category,
      image: PORTFOLIO_IMAGES[i],
      slug: PORTFOLIO_SLUGS[i],
    }),
  );

  const realportfolioItems: HomePortfolioItem[] =
    homeData?.thirdSection?.map((item, i) => ({
      _id: item?._id,
      title: item?.hero?.industry?.[language] || "",
      category: item?.hero?.category?.[language] || "",
      image: item?.hero?.image,
      slug: item?._id,
    })) || [];

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

  const realwhatWeDoServices: Service[] =
    homeData?.fourthSection?.serviceDetails?.map((item, i) => ({
      _id: item?._id,
      description: item?.description?.[language] || "",
      title: item?.title?.[language] || "",
      image: DUMMY_IMAGE,
    })) || [];


    console.log("fwvb",homeData)

  return (
    <FullPageSlider
      heroImage={HERO_IMAGE}
      contactImage={CONTACT_IMAGE}
      slides={[
        {
          background: "hero",
          content: <HeroSection part="content" homeData={homeData} />,
        },
        {
          background: "black",
          content: <HomePortfolioIntro homeData={homeData} />,
        },
        ...realportfolioItems.map((item, i) => ({
          background: "black" as const,
          content: <HomePortfolioSlide item={item} index={i + 1} />,
        })),
        {
          background: "black",
          content: (
            <WhatWeDoSectionHeader title={homeData?.fourthSection?.title[language]} />
          ),
        },
        ...realwhatWeDoServices.map((service, i) => ({
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
