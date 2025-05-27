
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-50">
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
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="container-custom min-h-[90vh] relative z-20 flex flex-col justify-center pt-20">
        <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Cut Fuel Costs 15% While Slashing Emissions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            <span className="text-white font-semibold">OIL</span><span className="text-white font-semibold">TAC</span> works in any engine. No modifications needed. Results guaranteed in 30 days.
          </p>
          <Button 
            className="bg-oiltac-copper hover:bg-oiltac-copper/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2"
            onClick={() => {
              const industriesSection = document.getElementById('industries');
              if (industriesSection) {
                industriesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            See How It Works
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
