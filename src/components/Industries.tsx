
import { Ship, TrainFront, Factory, Truck } from "lucide-react";

const IndustryCard = ({ icon: Icon, title, description }: { 
  icon: typeof Ship, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow">
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
    },
    {
      icon: TrainFront,
      title: "Rail Engine Managers",
      description: "Optimize locomotive fuel efficiency and reduce maintenance costs.",
    },
    {
      icon: Factory,
      title: "Industrial Plant Engineers",
      description: "Enhance boiler efficiency and meet stringent emissions requirements.",
    },
    {
      icon: Truck,
      title: "Diesel Fleet Owners",
      description: "Extend engine life and reduce operational costs across your fleet.",
    },
  ];

  return (
    <section id="industries" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Who It's For</h2>
        <p className="section-subtitle text-center">
          OILTAC delivers measurable benefits across multiple industries and applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              title={industry.title} 
              description={industry.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
