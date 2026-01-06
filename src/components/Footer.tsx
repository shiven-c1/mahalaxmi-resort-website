import { Building, Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
  {/* Removed company info, contact, and services sections as requested */}

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="text-xs md:text-sm text-gray-500 text-center md:text-left">
              © 2024 Mahalaxmi Developers. All rights reserved. | Contact: 9763672641 | Email: shendeharshal183@gmail.com
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-400 fill-current" />
              <span>in Nagpur</span>
            </div>
          </div>
          
          <div className="mt-3 md:mt-4 text-center">
            <p className="text-[10px] md:text-xs text-gray-600">
              Disclaimer: All images are for representational purposes only. 
              Actual properties may vary. Please visit our office for detailed information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}