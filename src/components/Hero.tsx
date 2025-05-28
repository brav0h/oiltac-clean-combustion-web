
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToContact = () => {
    console.log('Button clicked, looking for contact section');
    const contactSection = document.getElementById('contact');
    console.log('Contact section found:', contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Contact section not found');
    }
  };

  return (
    <div className="relative">
      {/* Navigation positioned at top only, not covering entire hero */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      
      {/* Background image with improved visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format')",
          backgroundPosition: "center 30%"
        }}
      />
      
      {/* Dark overlay with reduced opacity for better image visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      <div className="container-custom min-h-[90vh] relative z-20 flex flex-col justify-center pt-20">
        <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
            Cut Fuel Costs by Up to 11% — Without Changing a Single Part of Your Engine
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            <span className="text-white font-semibold">OILTAC</span> is a natural enzyme fuel additive that enhances combustion, reduces soot and emissions, and helps engines run cleaner — from diesel to bunker fuel.
          </p>
          <Button 
            className="bg-oiltac-copper hover:bg-oiltac-copper/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2 relative z-30"
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
