
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
            Reduce Fuel Consumption and Carbon Buildup in Diesel Engines — Without Changing Your System
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-100">
            <span className="text-white font-semibold">OILTAC</span> is a fuel treatment additive added directly to diesel or heavy fuel oil. It improves combustion, reduces soot, and helps lower maintenance costs — with no engine modification and no new hardware.
          </p>
          <p className="text-sm text-white/60 mb-6">
            Manufactured by Fukasawa Chemical Laboratory, Japan &nbsp;·&nbsp; Validated in commercial marine, rail, and power generation trials &nbsp;·&nbsp; SOLAS flash point compliant
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start gap-2 text-white/90 text-sm">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Dosed at 1:10,000 — no injection system, no hardware required
            </li>
            <li className="flex items-start gap-2 text-white/90 text-sm">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              Compatible with diesel and heavy fuel oil (HFO / bunker fuel)
            </li>
            <li className="flex items-start gap-2 text-white/90 text-sm">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              In continuous commercial operation for 40+ years
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
