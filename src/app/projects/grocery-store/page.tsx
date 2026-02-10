import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GroceryContent } from "@/components/GroceryContent";

export default function GroceryStorePage() {
  return (
    <div className="w-full" style={{ position: "relative" }}>
      <AnimatedBackground />
      <Navigation />
      <GroceryContent />
      <Footer />
    </div>
  );
}
