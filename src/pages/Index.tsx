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
        <section className="w-full flex flex-col items-center justify-center pt-12 pb-8 px-2 sm:px-4 bg-[#f8f7f4]">
          <div className="w-full max-w-md sm:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
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
