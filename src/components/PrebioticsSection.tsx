import dogFood from "@/assets/dog-food.jpg";

export const PrebioticsSection = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="prebiotics-heading mb-4 md:mb-6">
                Prebiotics nourish the beneficial gut bacteria, supporting digestive health
              </h2>
              
              <p className="prebiotics-description">
                Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
              </p>
            </div>

            <div className="relative animate-on-scroll-scale">
              <div className="prebiotics-image-container">
                <img
                  src={dogFood}
                  alt="Premium dog food kibble"
                  className="prebiotics-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

