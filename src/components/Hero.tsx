
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('pilot-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/assets/images/ship-engine.jpg')",
          backgroundPosition: "center center"
        }}
      />

      <div className="absolute inset-0 bg-[#1B2A4A] bg-opacity-70 z-10"></div>

      <div className="container-custom min-h-[90vh] relative z-20 flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
            Cut Diesel Fuel Costs by 2–6% — Proven Across Marine, Rail, and Industrial Engines
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            <span className="text-white font-semibold">OILTAC</span> is a natural enzyme fuel additive that enhances combustion and reduces soot — from diesel to bunker fuel, with no engine modification.
          </p>
          <Button
            className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2 relative z-30"
            onClick={scrollToContact}
          >
            See How Much You Could Save
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
