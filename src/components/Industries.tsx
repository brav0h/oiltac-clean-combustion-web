
import { Ship, TrainFront, Factory, Truck } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const IndustryCard = ({ 
  icon: Icon, 
  title, 
  subtitle,
  imageSrc 
}: { 
  icon: typeof Ship, 
  title: string, 
  subtitle: string,
  imageSrc: string
}) => {
  return (
    <div className="relative overflow-hidden rounded-md">
      <AspectRatio ratio={16/9} className="bg-black rounded-md overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://images.unsplash.com/photo-1577127279774-cb49232da6d0?w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-semibold mb-1 text-white">{title}</h3>
          <p className="text-white/80 text-lg">{subtitle}</p>
        </div>
      </AspectRatio>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: Ship,
      title: "Maritime Operators",
      subtitle: "Lower emissions, clean injectors, and improve engine performance at sea — without touching your hardware.",
      imageSrc: "/lovable-uploads/50f3319d-544b-409b-a101-93cd0d7804d2.png"
    },
    {
      icon: TrainFront,
      title: "Rail Engine Managers",
      subtitle: "Optimize fuel combustion, reduce particulate buildup, and extend locomotive engine life.",
      imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop"
    },
    {
      icon: Factory,
      title: "Industrial Plant Engineers",
      subtitle: "Increase boiler and furnace efficiency while meeting strict emissions standards.",
      imageSrc: "/lovable-uploads/2af66211-fc6e-46c5-9eed-1b491d2091e6.png"
    },
    {
      icon: Truck,
      title: "Diesel Fleet Owners",
      subtitle: "Reduce fuel use, prevent sludge buildup, and extend engine life across your diesel vehicle fleet.",
      imageSrc: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="industries" className="section-padding bg-black text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white mb-8">Who It's For</h2>
        <p className="section-subtitle text-center text-white/80 mb-16">
          <span className="text-white">OILTAC</span> helps operators in high-fuel-use industries cut costs, reduce emissions, and keep equipment running longer — without capex or retrofits.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              title={industry.title} 
              subtitle={industry.subtitle}
              imageSrc={industry.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
