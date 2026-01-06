import { PropertyCard } from "./PropertyCard";
import { properties } from "@/data/properties";

export function PropertiesSection() {
  return (
    <section id="properties" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our exclusive collection of RERA-approved residential properties across prime locations in Nagpur
          </p>
          <div className="w-16 md:w-24 h-1 bg-yellow-500 mx-auto mt-4 md:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="transition-all duration-300"
            >
              <PropertyCard 
                {...property} 
                description={property.description}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Don't see what you're looking for? We have more exclusive properties available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.open("tel:+919763672641", "_self")}
              className="bg-yellow-500 text-black px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-yellow-600 transition-all duration-300"
            >
              Call for More Properties
            </button>
            <button
              onClick={() => {
                const message = "Hi, I would like to see more properties from Mahalaxmi Developers.";
                window.open(`https://wa.me/919763672641?text=${encodeURIComponent(message)}`, "_blank");
              }}
              className="bg-green-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-base font-medium hover:bg-green-700 transition-all duration-300"
            >
              WhatsApp for Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}