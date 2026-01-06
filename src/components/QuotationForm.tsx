import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function QuotationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
  phone: "9763672641",
    email: "",
    propertyType: "",
    budget: "",
    location: "",
    amenities: [] as string[],
    additionalRequirements: ""
  });

  const amenitiesList = [
    "Swimming Pool",
    "Gym/Fitness Center",
    "Kids Play Area",
    "Garden/Landscaping",
    "Car Parking",
    "24/7 Security",
    "Power Backup",
    "Elevator",
    "Club House",
    "Shopping Complex"
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
🏠 Property Quotation Request

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

🏘️ Property Details:
 - Type: ${formData.propertyType}
 - Budget: ${formData.budget}
 - Preferred Location: ${formData.location}

✨ Desired Amenities:
${formData.amenities.map(amenity => `- ${amenity}`).join('\n')}

📝 Additional Requirements:
${formData.additionalRequirements}

Please provide a detailed quotation for properties matching these requirements.
  `.trim();

  window.open(`https://wa.me/919763672641?text=${encodeURIComponent(message)}`, "_blank");
    
    toast({
      title: "Quotation Request Sent!",
      description: "We'll get back to you with personalized property options soon.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      additionalRequirements: ""
    });
  };

  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <Card className="max-w-4xl mx-auto bg-gray-800 border-gray-700">
          <CardHeader className="text-center p-4 md:p-6">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="bg-yellow-500 rounded-full p-2 md:p-3">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </div>
            </div>
            <CardTitle className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Get Your Dream Property Quotation
            </CardTitle>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Not sure which property suits you? Fill out this form and we'll send you personalized options!
            </p>
          </CardHeader>

          <CardContent className="p-4 md:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="flex flex-col space-y-1 md:space-y-2 w-full">
                <Label htmlFor="name" className="text-white text-sm font-medium">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white text-sm w-full"
                  placeholder="Enter your full name"
                />
              </div>

                <div className="space-y-1 md:space-y-2">
                  <Label htmlFor="phone" className="text-white text-sm font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white text-sm"
                    placeholder="9763672641"
                  />
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="text-white text-sm font-medium">Property Type *</Label>
                  <Select required onValueChange={(value) => setFormData(prev => ({ ...prev, propertyType: value }))}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white text-sm">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Residential Plot">Residential Plot</SelectItem>
                        <SelectItem value="Commercial Plot">Commercial Plot</SelectItem>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="text-white text-sm font-medium">Budget Range *</Label>
                  <Select required onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white text-sm">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20-50-lakh">₹20 - ₹50 Lakh</SelectItem>
                      <SelectItem value="50-75-lakh">₹50 - ₹75 Lakh</SelectItem>
                      <SelectItem value="75-1-crore">₹75 Lakh - ₹1 Crore</SelectItem>
                      <SelectItem value="1-2-crore">₹1 - ₹2 Crore</SelectItem>
                      <SelectItem value="2-crore-plus">₹2 Crore+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <Label className="text-white text-sm font-medium">Preferred Location</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white text-sm">
                      <SelectValue placeholder="Select preferred area" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Wardha Road">Wardha Road</SelectItem>
                    <SelectItem value="Besa">Besa</SelectItem>
                    <SelectItem value="Beltarodi">Beltarodi</SelectItem>
                    <SelectItem value="Shankarpur">Shankarpur</SelectItem>
                    <SelectItem value="Samruddhi Expressway">Samruddhi Expressway</SelectItem>
                    <SelectItem value="Umred Road">Umred Road</SelectItem>
                    <SelectItem value="Bhandara - Jabalpur Highway">Bhandara - Jabalpur Highway</SelectItem>
                    <SelectItem value="Kamptee Road">Kamptee Road</SelectItem>
                    <SelectItem value="Katol Road">Katol Road</SelectItem>
                    </SelectContent>
                  </Select>
                    </div>
                    {/* Number of Bedrooms field fully removed */}

              <div className="space-y-2 md:space-y-4">
                <Label className="text-white text-sm font-medium">Desired Amenities (Select all that apply)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {amenitiesList.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={formData.amenities.includes(amenity)}
                        onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                        className="border-gray-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                      />
                      <Label
                        htmlFor={amenity}
                        className="text-xs md:text-sm text-gray-300 cursor-pointer"
                      >
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <Label htmlFor="requirements" className="text-white text-sm font-medium">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalRequirements: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white text-sm min-h-[80px] md:min-h-[100px]"
                  placeholder="Any specific requirements, preferences, or questions you have..."
                />
              </div>

              <div className="text-center pt-4 md:pt-6">
                <Button
                  type="submit"
                  className="bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 font-medium text-sm md:text-base py-2 px-4 md:py-3 md:px-6 rounded-md w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
                  Send Quotation Request
                </Button>
                <p className="text-gray-400 text-xs md:text-sm mt-2 md:mt-3">
                  We'll send your quotation via WhatsApp within 2 hours
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}