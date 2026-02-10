import { Navigation } from "@/components/Navigation";
import { SupportPageDark } from "@/components/SupportPageDark";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function SupportPage() {
  return (
    <div className="w-full" style={{ position: "relative" }}>
      <AnimatedBackground />
      <Navigation />
      <SupportPageDark />
      <Footer />
    </div>
  );
}
