import { Navigation } from "@/components/Navigation";
import { SalesHeroSection } from "@/components/SalesHeroSection";
import { SalesIntroSection } from "@/components/SalesIntroSection";
import { SalesServicesSection } from "@/components/SalesServicesSection";
import { SalesUseCasesSection } from "@/components/SalesUseCasesSection";
import { SalesDisplaySolutionsSection } from "@/components/SalesDisplaySolutionsSection";
import { SalesContactSection } from "@/components/SalesContactSection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function SalesPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMExFRCUyMGRpc3BsYXl8ZW58MXx8fHwxNzM4NjY5MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full" style={{ position: "relative" }}>
      <AnimatedBackground />
      <Navigation />
      <SalesHeroSection backgroundImage={heroImage} />
      <SalesIntroSection />
      <SalesServicesSection />
      <SalesUseCasesSection />
      <SalesDisplaySolutionsSection />
      <SalesContactSection />
      <Footer />
    </div>
  );
}
