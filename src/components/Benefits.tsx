
import { CircleCheck } from "lucide-react";

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start mb-6">
      <CircleCheck className="text-white mr-4 flex-shrink-0 mt-1" size={24} />
      <p className="text-lg text-white/90">{text}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    "Up to 11% fuel savings",
    "Clears sludge, soot, and injector buildup",
    "Cuts NOx, SOx, smoke, and PM",
    "Works with diesel, HFO, IFO, biodiesel",
    "No engine modification required"
  ];

  return (
    <section id="benefits" className="section-padding bg-zinc-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title text-white">What OILTAC Does</h2>
            <p className="text-lg mb-8 text-white/80">
              OILTAC is a patented plant enzyme-based fuel additive that transforms how your fuel burns. It helps you extract more energy from every drop while protecting your engine and cutting emissions.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="p-6 rounded-lg">
              <div className="relative">
                <img 
                  src="/lovable-uploads/bb1c2fd7-8f99-4a4f-b75e-6676b4d8f1d6.png" 
                  alt="OILTAC ADOIL fuel additive container" 
                  className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 rounded-b-lg">
                  <p className="text-center font-semibold">
                    OILTAC ADOIL - Advanced fuel additive technology
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
