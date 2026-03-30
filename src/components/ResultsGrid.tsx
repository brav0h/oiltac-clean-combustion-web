import type { FC } from "react";

type MetricTile = {
  value: string;
  label: string;
};

type ResultCard = {
  segment: string;
  metrics: MetricTile[];
  proofHref: string;
  proofLabel: string;
};

const cards: ResultCard[] = [
  {
    segment: "Marine & Tugboats",
    metrics: [
      { value: "1.5–2%", label: "Fuel reduction — controlled marine engine testing" },
      { value: "14–25%", label: "Reduction in exhaust particulates" },
      { value: "Eliminated", label: "Injector sticking in long-term operation" },
    ],
    proofHref: "/proof#proof-marine",
    proofLabel: "See marine test data",
  },
  {
    segment: "Rail & Locomotives",
    metrics: [
      { value: "1.9–4.4%", label: "Fuel savings — national railway trials (Bulgaria, Korea)" },
      { value: "Reduced", label: "Exhaust soot and particulates" },
      { value: "No adverse", label: "Effect on engine oil quality in long-term data" },
    ],
    proofHref: "/proof#proof-rail",
    proofLabel: "See rail data",
  },
  {
    segment: "Industrial Power",
    metrics: [
      { value: "2–6%", label: "Fuel reduction in multi-year generator monitoring" },
      { value: "4–12 → 0", label: "Soot incidents per year" },
      { value: "Extended", label: "Maintenance intervals — oil degradation delayed" },
    ],
    proofHref: "/proof#proof-industrial",
    proofLabel: "See industrial data",
  },
  {
    segment: "Off-Road & Heavy Equipment",
    metrics: [
      { value: "Up to 6.8%", label: "Fuel reduction at constant load" },
      { value: "21%", label: "Reduction in crank pin bearing wear (200-hr test)" },
      { value: "Softer", label: "Combustion deposits — easier to remove" },
    ],
    proofHref: "/proof#proof-offroad",
    proofLabel: "See equipment data",
  },
];

const ResultsGrid: FC = () => {
  return (
    <section className="py-12 bg-zinc-950 text-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          What Operators Have Documented
        </h2>
        <p className="text-center text-white/50 text-xs mb-10 italic">
          Results from controlled engine trials, long-term fleet operation, and independently monitored field studies — not simulations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.segment}
              className="bg-[#1B2A4A] rounded-lg p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-4">
                {card.segment}
              </h3>
              <div className="space-y-4 flex-1">
                {card.metrics.map((m) => (
                  <div key={m.label} className="border-l-2 border-[#F97316] pl-3">
                    <p className="text-xl font-bold text-white leading-tight">{m.value}</p>
                    <p className="text-xs text-white/60 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
              <a
                href={card.proofHref}
                className="text-xs text-[#F97316] hover:text-[#F97316]/80 mt-4 block"
              >
                → {card.proofLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGrid;
