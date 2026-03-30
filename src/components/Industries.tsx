
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
      title: "Marine & Tugboat Operations",
      descriptor: "Fleet managers and chief engineers running high-cycle marine diesel engines where fuel is a top-three operating cost.",
      bullets: [
        "Fuel costs are a material line item in your operating budget",
        "Dealing with injector fouling, soot buildup, or escalating oil consumption",
        "Under pressure to reduce emissions without a capital retrofit",
      ],
      imageSrc: "/lovable-uploads/9c599674-c722-41d9-a0d4-cd5f4fc0e969.png",
      proofHref: proofLinks.marine,
    },
    {
      title: "Rail & Locomotive Fleets",
      descriptor: "Railway operators running high-hour diesel locomotive engines across national and regional networks.",
      bullets: [
        "Fuel savings documented across multiple national railway field trials",
        "Exhaust soot and particulates reduced without engine modification",
        "No adverse effect on engine oil quality in long-term field data",
      ],
      imageSrc: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop",
      proofHref: proofLinks.rail,
    },
    {
      title: "Industrial Plants & Power Generation",
      descriptor: "Operators of diesel generators and stationary engines in facilities where unplanned downtime is not an option.",
      bullets: [
        "Generator fuel consumption reduced in multi-year monitored operation",
        "Soot and smoke incidents eliminated during additive use",
        "Engine oil degradation delayed — extended maintenance intervals documented",
      ],
      imageSrc: "/lovable-uploads/0aee2ba0-20be-42f4-9b5f-afce192a0fb8.png",
      proofHref: proofLinks.industrial,
    },
    {
      title: "Off-Road & Heavy Equipment",
      descriptor: "Heavy equipment fleets in high-load, high-hour environments where fuel efficiency and component life directly affect margin.",
      bullets: [
        "Up to 6.8% fuel reduction at constant load in controlled testing",
        "Bearing wear reduced in comparative 200-hour engine testing",
        "Combustion deposits softer and easier to remove versus untreated fuel",
      ],
      imageSrc: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop",
      proofHref: proofLinks.offroad,
    },
  ];

  return (
    <section id="industries" className="section-padding bg-black text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white mb-8">Who This Is For</h2>
        <p className="section-subtitle text-center text-white/80 mb-16">
          OILTAC is used by fleet managers and chief engineers who run high-cycle diesel engines — where fuel is a top-three operating cost and unplanned downtime is not an option.
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

        <div className="mt-10 rounded-lg border border-white/20 px-6 py-5 max-w-2xl mx-auto bg-white/5">
          <p className="text-sm font-semibold text-white/50 uppercase tracking-wide mb-3">Not the right fit if:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30" />
              You need a regulatory emissions certification product
            </li>
            <li className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30" />
              You're looking for a one-time fix rather than an ongoing operational improvement
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Industries;
