
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('pilot-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'request_pilot_click', {
        event_category: 'engagement',
        event_label: 'Request a Pilot Button'
      });
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
            Reduce Fuel Consumption and Carbon Buildup in Diesel Engines — Without Hardware Changes
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-100">
            A fuel treatment added directly to diesel or heavy fuel oil to improve combustion and reduce soot — no engine modification, no new hardware.
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-white/90 text-sm">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Works with diesel and HFO / bunker fuel
            </li>
            <li className="flex items-start gap-2 text-white/90 text-sm">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Used in commercial operations for 40+ years
            </li>
          </ul>
          <Button
            className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2 relative z-30"
            onClick={scrollToContact}
          >
            Request a Pilot Test
            <ArrowRight size={20} />
          </Button>
          <p className="text-sm italic text-white/50 mt-4">
            The pilot runs on your equipment, with your data. You decide if the numbers work.
          </p>
          <p className="text-xs italic text-white/40 mt-2">
            Validated in commercial marine, rail, and power operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
