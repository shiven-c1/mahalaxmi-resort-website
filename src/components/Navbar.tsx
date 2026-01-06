import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const handleCall = () => {
  window.open("tel:+919763672641", "_self");
  };

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your premium properties. Please provide more information.";
  window.open(`https://wa.me/919763672641?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center" aria-label="Mahalaxmi Developers Home">
          <span className="font-heading text-lg sm:text-xl font-bold text-gray-900">Mahalaxmi Developers</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#properties" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Properties</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button onClick={handleCall} size="sm" className="bg-yellow-500 text-black hover:bg-yellow-600 px-4 py-2 rounded-md text-sm font-medium">
            <Phone className="w-3.5 h-3.5 mr-1.5" /> Call
          </Button>
          <Button onClick={handleWhatsApp} size="sm" variant="outline" className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
            <MessageCircle className="w-3.5 h-3.5 mr-1.5" /> WhatsApp
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-gray-900">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              {/* Removed the extra close button */}
              <div className="px-6 py-4 flex flex-col gap-6">
                <a href="#properties" onClick={() => setOpen(false)} className="text-lg font-medium text-gray-900" aria-label="Go to properties">Properties</a>
                <a href="#contact" onClick={() => setOpen(false)} className="text-lg font-medium text-gray-900" aria-label="Go to contact">Contact</a>
                <div className="h-px bg-gray-200 my-2" />
                <Button onClick={() => { setOpen(false); handleCall(); }} className="w-full bg-yellow-500 text-black hover:bg-yellow-600 py-3 rounded-md text-base font-medium">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
                <Button onClick={() => { setOpen(false); handleWhatsApp(); }} className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md text-base font-medium">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
