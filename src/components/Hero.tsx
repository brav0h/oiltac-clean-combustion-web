
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-oiltac-dark to-oiltac-gray text-white">
      <Navigation />
      
      <div 
        className="absolute inset-0 bg-black opacity-60 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          mixBlendMode: "multiply"
        }}
      />
      
      <div className="container-custom min-h-[80vh] relative z-10 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Clean Combustion Across Industries
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From diesel to bunker fuel, OILTAC optimizes performance and cuts emissions — naturally.
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
