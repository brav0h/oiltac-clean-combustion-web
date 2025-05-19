
import { Ship, TrainFront, Factory, Truck } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const IndustryCard = ({ icon: Icon, title, description, imageSrc }: { 
  icon: typeof Ship, 
  title: string, 
  description: string,
  imageSrc: string
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow">
      <div className="w-full mb-4">
        <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://images.unsplash.com/photo-1577127279774-cb49232da6d0?w=800&auto=format&fit=crop";
            }}
          />
        </AspectRatio>
      </div>
      <div className="bg-oiltac-light p-4 rounded-full mb-4">
        <Icon size={32} className="text-oiltac-forest" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-oiltac-dark">{title}</h3>
      <p className="text-oiltac-gray">{description}</p>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: Ship,
      title: "Maritime Operators",
      description: "Reduce bunker fuel emissions and improve engine performance at sea.",
      imageSrc: "https://images.unsplash.com/photo-1577127279774-cb49232da6d0?w=800&auto=format&fit=crop"
    },
    {
      icon: TrainFront,
      title: "Rail Engine Managers",
      description: "Optimize locomotive fuel efficiency and reduce maintenance costs.",
      imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop"
    },
    {
      icon: Factory,
      title: "Industrial Plant Engineers",
      description: "Enhance boiler efficiency and meet stringent emissions requirements.",
      imageSrc: "https://images.unsplash.com/photo-1581092160607-cce5cfa2ac79?w=800&auto=format&fit=crop"
    },
    {
      icon: Truck,
      title: "Diesel Fleet Owners",
      description: "Extend engine life and reduce operational costs across your fleet.",
      imageSrc: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop"
    },
  ];

  return (
    <section id="industries" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Who It's For</h2>
        <p className="section-subtitle text-center">
          <span className="text-oiltac-dark">OIL</span><span className="text-oiltac-copper">TAC</span> delivers measurable benefits across multiple industries and applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              title={industry.title} 
              description={industry.description}
              imageSrc={industry.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
