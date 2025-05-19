
import { CircleCheck } from "lucide-react";

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start mb-6">
      <CircleCheck className="text-oiltac-forest mr-4 flex-shrink-0 mt-1" size={24} />
      <p className="text-lg">{text}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    "Reduces sludge and soot buildup",
    "Improves fuel combustion and engine cleanliness",
    "Cuts NOx, SOx, and PM",
    "Works with diesel, IFO, and HFO",
    "No engine modification needed"
  ];

  return (
    <section id="benefits" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title">What It Does</h2>
            <p className="text-lg mb-8 text-oiltac-gray">
              OILTAC is a plant-based fuel additive that transforms how your engines perform, 
              extending their lifetime while reducing environmental impact.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-oiltac-forest/10 to-oiltac-light p-6 rounded-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2070&auto=format" 
                  alt="Natural enzyme technology" 
                  className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-oiltac-forest/90 text-white p-4 rounded-b-lg">
                  <p className="text-center font-semibold">
                    Plant-based enzymes that enhance combustion naturally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
