import { Hero } from "@/components/Hero";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* Mobile-first Hero Section */}
      <main className="flex-1 flex flex-col gap-0">
        <section className="w-full flex flex-col items-center justify-center pt-20 pb-8 px-2 sm:px-4 bg-[#f8f7f4]">
          <div className="w-full max-w-md sm:max-w-2xl mx-auto flex flex-col items-center text-center gap-4">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Discover Your <span className="text-yellow-500">Dream Home</span> in Nagpur</h1>
            <p className="text-base sm:text-lg text-gray-700">Premium, RERA-approved properties in prime locations. Trusted for 13+ years. Book your site visit today!</p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
              <a href="#properties" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow w-full sm:w-auto text-base transition-all">View Properties</a>
              <a href="#contact" className="bg-white hover:bg-gray-100 text-yellow-600 border border-yellow-400 font-semibold px-6 py-3 rounded-lg shadow w-full sm:w-auto text-base transition-all">Contact Us</a>
            </div>
          </div>
          <div className="w-full max-w-md sm:max-w-2xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg">
            <Hero />
          </div>
        </section>

        {/* Properties Section */}
        <section className="w-full px-2 sm:px-4">
          <PropertiesSection />
        </section>

        {/* Contact Section */}
        <section className="w-full px-0">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
