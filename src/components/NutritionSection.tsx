import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import dogWithHappyDogBite from "@/assets/dog-with-happy-dog-bites.png";

interface Stat {
  percentage: string;
  description: string;
}

const stats: Stat[] = [
  {
    percentage: "97%",
    description: "Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor."
  },
  {
    percentage: "84%",
    description: "Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption."
  },
  {
    percentage: "92%",
    description: "Our dog food's high protein and fat digestibility contribute to ideal stool quality."
  }
];

export const NutritionSection = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            <div className="nutrition-content animate-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h2>
              
              <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
              </p>

              <div className="nutrition-stats mb-4 md:mb-6">
                <h3 className="font-semibold text-base md:text-lg text-foreground mb-3 md:mb-4">Key Points:</h3>
                
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex gap-3 md:gap-4 pb-3 md:pb-4">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary flex-shrink-0">
                        {stat.percentage}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                    {index < stats.length - 1 && <Separator className="bg-separator-light mb-6" />}
                  </div>
                ))}
              </div>

              <Button size="lg" className="nutrition-button bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg hover-lift">
                Give your furry friend the gift of wholesome nutrition
              </Button>
            </div>

            <div className="relative animate-on-scroll-scale">
              <div className="nutrition-image-container">
                <img 
                  src={dogWithHappyDogBite} 
                  alt="Happy dog enjoying nutritious food" 
                  className="nutrition-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};