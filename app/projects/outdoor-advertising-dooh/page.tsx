import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { OutdoorAdvertisingContent } from "@/components/OutdoorAdvertisingContent";

export default function OutdoorAdvertisingPage() {
  return (
    <div className="w-full" style={{ position: "relative" }}>
      <AnimatedBackground />
      <Navigation />
      <OutdoorAdvertisingContent />
      <Footer />
    </div>
  );
}
