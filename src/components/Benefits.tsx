
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
    "Eliminates engine sludge in 30 days",
    "Burns fuel 15% more efficiently",
    "Cuts toxic emissions by half",
    "Works with any fuel type",
    "Zero engine modifications required"
  ];

  return (
    <section id="benefits" className="section-padding bg-zinc-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="section-title text-white">The Science Behind Your Savings</h2>
            <p className="text-lg mb-8 text-white/80">
              OILTAC contains plant enzymes that break down fuel at the molecular level. 
              Complete combustion means more power from every drop.
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
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2070&auto=format" 
                  alt="Natural enzyme technology" 
                  className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 rounded-b-lg">
                  <p className="text-center font-semibold">
                    Nature's solution to fuel efficiency
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
