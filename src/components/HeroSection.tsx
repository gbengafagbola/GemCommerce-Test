import { Button } from "@/components/ui/button";
import { ImageComparisonSlider } from "@/components/ImageComparisonSlider";
import { ShieldCheck } from "lucide-react";
import realFoodIcon from "@/assets/real-food-icon.png";
import premiumIngredientIcon from "@/assets/premium-ingredient-icon.png";
import madeFreshIcon from "@/assets/made-fresh-icon.png";
import vetDevelopedIcon from "@/assets/vet-developed-icon.png";
import paymentPaypal from "@/assets/payment-paypal.png";
import paymentVisa from "@/assets/payment-visa.png";
import paymentMaster from "@/assets/payment-master.png";
import paymentApple from "@/assets/payment-apple.png";
import paymentGoogle from "@/assets/payment-google.png";

interface Feature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: realFoodIcon,
    title: "Real Food",
    description: "Wholesome recipes for dogs with real meat and veggies.",
    bgColor: "#DCF9CA",
  },
  {
    icon: premiumIngredientIcon,
    title: "Premium Ingredient",
    description: "Elevating pet care with unmatched safety and quality.",
    bgColor: "#F8F0D6",
  },
  {
    icon: madeFreshIcon,
    title: "Made Fresh",
    description: "We prioritize maintaining the integrity of whole foods and nutrition.",
    bgColor: "#C8F2E7",
  },
  {
    icon: vetDevelopedIcon,
    title: "Vet Developed",
    description: "We raise the bar for dog nutrition, surpassing industry expectations.",
    bgColor: "#F7CABD",
  },
];

export const HeroSection = () => {
  return (
    <section className="relative py-10 md:py-14 lg:py-20 bg-background">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="hero-title">
            What makes us different<br />makes them stronger
          </h1>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center my-6 md:my-8 lg:my-12">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              {features.slice(0, 2).map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            <div className="flex justify-center order-1 lg:order-2 animate-on-scroll-scale">
              <div className="relative w-full max-w-sm md:max-w-md">
                <ImageComparisonSlider />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-3">
              {features.slice(2, 4).map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8 lg:mt-12 max-w-2xl mx-auto">
            <Button
              size="lg"
              className="cta-button hover-lift"
            >
              Get your dog's healthy meal today!
            </Button>
            
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-4 md:mt-6 w-full">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="guarantee-text">30-day money back guarantee</span>
              </div>
              <span className="text-muted-foreground/50 hidden sm:inline">•</span>
              <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center">
                <img src={paymentPaypal} alt="PayPal" className="payment-logo" />
                <img src={paymentVisa} alt="Visa" className="payment-logo" />
                <img src={paymentMaster} alt="Mastercard" className="payment-logo" />
                <img src={paymentApple} alt="Apple Pay" className="payment-logo" />
                <img src={paymentGoogle} alt="Google Pay" className="payment-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard = ({ icon, title, description, bgColor }: FeatureCardProps) => {
  return (
    <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div 
        className="feature-icon-circle flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <img 
          src={icon} 
          alt={title}
          className="feature-icon"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="feature-title">
          {title}
        </h3>
        <p className="feature-description">
          {description}
        </p>
      </div>
    </div>
  );
};
