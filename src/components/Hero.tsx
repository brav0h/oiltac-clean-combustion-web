
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-50">
        <Navigation />
      </div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format')"
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      
      <div className="container-custom min-h-[90vh] relative z-20 flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Clean Combustion Across Industries
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From diesel to bunker fuel, <span className="text-white">OIL</span><span className="text-white">TAC</span> optimizes performance and cuts emissions — naturally.
          </p>
          <Button 
            className="bg-oiltac-copper hover:bg-oiltac-copper/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2"
            onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Use Cases
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
