
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Explicit href map — do not compute or derive these values
const proofLinks = {
  marine:     "/proof#proof-marine",
  rail:       "/proof#proof-rail",
  industrial: "/proof#proof-industrial",
  offroad:    "/proof#proof-offroad",
};

const IndustryCard = ({
  title,
  descriptor,
  bullets,
  imageSrc,
  proofHref
}: {
  title: string,
  descriptor: string,
  bullets: string[],
  imageSrc: string,
  proofHref: string
}) => {
  return (
    // Use <a href> (not React Router <Link>) so the browser handles
    // hash-anchor scrolling natively on page load.
    <a
      href={proofHref}
      className="group relative overflow-hidden rounded-md bg-[#1B2A4A] text-white flex flex-col no-underline hover:ring-2 hover:ring-[#F97316] transition-all duration-200"
    >
      <AspectRatio ratio={16/9} className="bg-black rounded-t-md overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-200"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://images.unsplash.com/photo-1577127279774-cb49232da6d0?w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-[#1B2A4A]/60 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-semibold mb-1 text-white">{title}</h3>
        </div>
      </AspectRatio>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-white/80 text-sm mb-4">{descriptor}</p>
        <ul className="space-y-2 mb-6 flex-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/90">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <span className="text-sm font-medium text-[#F97316] group-hover:text-[#F97316]/80 transition-colors">
          See proof →
        </span>
      </div>
    </a>
  );
};

const Industries = () => {
  const industries = [
    {
      title: "Maritime & Tugboat Operators",
      descriptor: "For marine and tug operators running diesel and heavy fuel oil engines.",
      bullets: [
        "Reduced fuel consumption observed in controlled marine engine testing",
        "Injection nozzle sticking prevented in real-world long-term operation",
        "Smoke and exhaust particulates decreased in controlled tests",
      ],
      imageSrc: "/lovable-uploads/9c599674-c722-41d9-a0d4-cd5f4fc0e969.png",
      proofHref: proofLinks.marine,
    },
    {
      title: "Railroad & Locomotive Operators",
      descriptor: "For railway fleets running high-hour diesel locomotive engines.",
      bullets: [
        "Fuel savings documented across multiple national railway field trials",
        "Lower exhaust particulate and soot levels observed in use",
        "No adverse effect on engine oil quality in long-term field data",
      ],
      imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop",
      proofHref: proofLinks.rail,
    },
    {
      title: "Industrial Plants & Power Generation",
      descriptor: "For diesel generators, stationary engines, and industrial power facilities.",
      bullets: [
        "Generator fuel consumption reduced in multi-year monitored operation",
        "Soot and smoke incidents eliminated during additive use",
        "Engine oil degradation delayed — extended maintenance intervals documented",
      ],
      imageSrc: "/lovable-uploads/0aee2ba0-20be-42f4-9b5f-afce192a0fb8.png",
      proofHref: proofLinks.industrial,
    },
    {
      title: "Off-Road Diesel & Mining Equipment",
      descriptor: "For heavy equipment fleets in high-load, high-hour environments.",
      bullets: [
        "Fuel reduction documented at constant speed and under acceleration",
        "Bearing wear reduced in comparative engine testing",
        "Combustion deposits softer and easier to remove versus untreated fuel",
      ],
      imageSrc: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop",
      proofHref: proofLinks.offroad,
    },
  ];

  return (
    <section id="industries" className="section-padding bg-black text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white mb-8">Who It's For</h2>
        <p className="section-subtitle text-center text-white/80 mb-16">
          OILTAC helps operators in high-fuel-use industries cut costs, reduce emissions, and keep equipment running longer — without capex or retrofits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              descriptor={industry.descriptor}
              bullets={industry.bullets}
              imageSrc={industry.imageSrc}
              proofHref={industry.proofHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
