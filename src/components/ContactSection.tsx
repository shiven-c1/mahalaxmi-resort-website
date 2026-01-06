import { QuotationForm } from "./QuotationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Mail, Clock, Building } from "lucide-react";

export function ContactSection() {
  const handleCall = () => {
  window.open("tel:+919763672641", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi, I would like to schedule a site visit and get more information about your properties.";
  window.open(`https://wa.me/919763672641?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Ready to Book Your Dream Property?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Contact us today for site visits, property details, and exclusive offers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-4 md:space-y-6">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 md:p-3">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">Call Us Now</h3>
                    <p className="text-gray-400 text-sm md:text-base">Get instant assistance from our property experts</p>
                    <p className="text-yellow-500 font-bold text-lg md:text-xl mt-1">97636 72641</p>
                  </div>
                  <Button
                    onClick={handleCall}
                    className="mt-2 sm:mt-0 w-full sm:w-auto bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 text-sm md:text-base py-2 px-4 rounded-md"
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="bg-green-600 rounded-full p-2 md:p-3">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-lg">WhatsApp Chat</h3>
                    <p className="text-gray-400 text-sm md:text-base">Chat with us for quick responses and property updates</p>
                    <p className="text-green-500 font-bold text-lg md:text-xl mt-1">97636 72641</p>
                  </div>
                  <Button
                    onClick={handleWhatsApp}
                    className="mt-2 sm:mt-0 w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 transition-all duration-300 text-sm md:text-base py-2 px-4 rounded-md"
                  >
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Removed office address and email cards */}
          </div>

          {/* Why Choose Us */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Why Choose Mahalaxmi Developers?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <Building className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base md:text-lg">13+ Years of Excellence</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Trusted name in Nagpur's real estate market</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <Clock className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base md:text-lg">On-Time Delivery</h4>
                  <p className="text-gray-400 text-xs md:text-sm">100% track record of timely project completion</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base md:text-lg">24/7 Customer Support</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Always available for your queries and assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base md:text-lg">Prime Locations</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Strategic locations across Nagpur's best areas</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Quotation Form */}
      <QuotationForm />
    </section>
  );
}