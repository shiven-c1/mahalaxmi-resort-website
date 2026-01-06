import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";

const amenities = [
  {
    title: "Internal Cement Concrete Road",
    description: "A paved road within the premises connecting all major parts.",
  },
  {
    title: "Sewage Line",
    description: "Underground waste disposal system in layout.",
  },
  {
    title: "Electric Network With Transformer",
    description: "Electricity distribution infrastructure for plots and amenities.",
  },
  {
    title: "Kids Park",
    description: "A playground for children in layout.",
  },
];

export function AmenitiesAccordion() {
  return (
    <section className="py-8 px-2 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Amenities</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {amenities.map((amenity, idx) => (
          <AccordionItem key={idx} value={amenity.title} className="rounded-xl bg-white shadow-sm border border-yellow-100">
            <AccordionTrigger className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-gray-900">
              <span className="bg-yellow-100 rounded-full p-2"><CheckCircle className="text-yellow-500 w-6 h-6" /></span>
              {amenity.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3 text-sm text-gray-600">
              {amenity.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
