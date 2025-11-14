import dogsEating from "@/assets/dogs-eating-from-bowl.gif";

export const GutHealthSection = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            <div className="relative animate-on-scroll-scale">
              <div className="gut-health-image-container">
                <img
                  src={dogsEating}
                  alt="Dogs eating nutritious food"
                  className="gut-health-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="animate-on-scroll-delay-1">
              <h2 className="gut-health-heading mb-4 md:mb-6">
                Improve overall gastrointestinal health for better nutrient absorption
              </h2>
              
              <p className="gut-health-description">
                Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
