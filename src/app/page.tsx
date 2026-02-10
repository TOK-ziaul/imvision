import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { HorizontalWorkGallery } from "@/components/HorizontalWorkGallery";
import { WhyIMvisionSection } from "@/components/WhyIMvisionSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { DUMMY_IMAGE } from "@/assets/dummyImage";

export default function HomePage() {
  const heroImage =
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80";

  const whatWeDo = [
    {
      title: "Sales",
      description:
        "Permanent LED solutions for retail environments, showrooms, and architectural installations.",
      image: DUMMY_IMAGE,
    },
    {
      title: "Rental",
      description:
        "Flexible LED solutions for events, launches, exhibitions, and temporary activations.",
      image: DUMMY_IMAGE,
    },
    {
      title: "Service",
      description:
        "From concept and design to installation, monitoring, and long-term support — ensuring your LED solution performs flawlessly over time.",
      image: DUMMY_IMAGE,
    },
  ];

  const whyImage =
    "https://images.unsplash.com/photo-1768796371824-668169e37e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZXF1aXBtZW50JTIwd2FyZWhvdXNlJTIwbW9kZXJufGVufDF8fHx8MTc2OTc5OTMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const cases = [
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
      image: DUMMY_IMAGE,
      slug: "outdoor-advertising-dooh",
    },
  ];

  const contactImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80";

  return (
    <div className="w-full" style={{ position: "relative" }}>
      <Navigation />
      <HeroSection heroImage={heroImage} />
      <HorizontalWorkGallery cases={cases} />
      <WhatWeDoSection services={whatWeDo} />
      <WhyIMvisionSection backgroundImage={whyImage} />
      <ContactSection backgroundImage={contactImage} />
      <Footer />
    </div>
  );
}
