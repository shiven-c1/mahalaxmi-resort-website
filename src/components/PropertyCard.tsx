import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, MessageCircle, Eye } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { ImageSlider } from "@/components/ImageSlider";
import img311 from "@/assets/image311.jpeg";
import img312 from "@/assets/image312.jpeg";
import img313 from "@/assets/image313.jpeg";
import img314 from "@/assets/image314.jpeg";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
  features: string[];
  description?: string;
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  image,
  type,
  features,
  description,
  gallery
}: PropertyCardProps & { gallery?: string[] }) {
  const navigate = useNavigate();
  
  const handleCall = () => {
  window.open("tel:+919763672641", "_self");
  };

  const handleViewDetails = () => {
    navigate(`/property/${id}`);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I am interested in this property: ${title}. Please share more details.`;
  window.open(`https://wa.me/919763672641?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="relative overflow-hidden">
  <ImageSlider images={gallery && gallery.length > 0 ? gallery : [image]} heightClass="aspect-[3/2] w-full" />
      </div>
      
      <CardContent className="p-4 sm:p-5 space-y-3">
        <div className="space-y-2">
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm line-clamp-1">{location}</span>
          </div>
          {description && (
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
              {description}
            </p>
          )}

        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {features.slice(0, 3).map((feature, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {feature}
            </Badge>
          ))}
        </div>

        {/* Amenities Accordion for each card */}
        <Accordion type="single" collapsible className="mt-2">
          <AccordionItem value="amenities" className="rounded-lg bg-yellow-50 border border-yellow-100">
            <AccordionTrigger className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-yellow-900">
              <span className="bg-yellow-100 rounded-full p-1"><CheckCircle className="text-yellow-500 w-5 h-5" /></span>
              Amenities
            </AccordionTrigger>
            <AccordionContent className="px-3 pb-2 text-xs text-gray-700">
              <ul className="space-y-1">
                <li>Internal Cement Concrete Road</li>
                <li>Sewage Line</li>
                <li>Electric Network With Transformer</li>
                <li>Kids Park</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>


        <div className="grid grid-cols-2 gap-2 pt-3">
          <Button
            onClick={handleViewDetails}
            variant="outline"
            className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            View Details
          </Button>
          <Button
            onClick={handleCall}
            className="w-full bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 text-xs sm:text-sm font-medium"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Call
          </Button>
        </div>

        <Button
          onClick={handleWhatsApp}
          className="w-full mt-2 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 text-xs sm:text-sm font-medium"
        >
          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          WhatsApp for Details
        </Button>
      </CardContent>
    </Card>
  );
}