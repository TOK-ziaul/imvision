import { Navigation } from "@/components/Navigation";
import { ProjectDetailHero } from "@/components/ProjectDetailHero";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FashionContent } from "@/components/FashionContent";

export default function FashionIndustryPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80";

  return (
    <div className="w-full" style={{ position: "relative" }}>
      <AnimatedBackground />
      <Navigation />
      <ProjectDetailHero
        backgroundImage={heroImage}
        category="RETAIL & EVENTS"
        title="Fashion Industry"
        subtitle="Transforming retail spaces with immersive LED displays that create unforgettable brand experiences and drive customer engagement."
      />
      <FashionContent />
      <Footer />
    </div>
  );
}
