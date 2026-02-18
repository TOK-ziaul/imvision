import { Navigation } from "@/components/Navigation";
import { ContactHeroSection } from "@/components/ContactHeroSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { ContactLocationsSection } from "@/components/ContactLocationsSection";
import { SupportTeamSection } from "@/components/SupportTeamSection";
import { Footer } from "@/components/Footer";
// import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function ContactPage() {
  const heroImage =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb250YWN0fGVufDF8fHx8MTczODY3MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="w-full" style={{ position: "relative" }}>
      {/* <AnimatedBackground /> */}
      <Navigation />
      <ContactHeroSection backgroundImage={heroImage} />
      <ContactFormSection />
      <SupportTeamSection />
      <ContactLocationsSection />
      <Footer />
    </div>
  );
}
