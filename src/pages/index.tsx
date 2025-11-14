import { HeroSection } from "@/components/HeroSection";
import { NutritionSection } from "@/components/NutritionSection";
import { GutHealthSection } from "@/components/GutHealthSection";
import { PrebioticsSection } from "@/components/PrebioticsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NutritionSection />
      <GutHealthSection />
      <PrebioticsSection />
    </div>
  );
};

export default Index;
