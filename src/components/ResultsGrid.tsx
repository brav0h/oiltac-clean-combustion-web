import type { FC } from "react";

type MetricTile = {
  value: string;
  label: string;
};

type ResultCard = {
  segment: string;
  metrics: MetricTile[];
};

const cards: ResultCard[] = [
  {
    segment: "Marine & Tugboats",
    metrics: [
      { value: "1.5–2%", label: "Fuel reduction (marine engine test)" },
      { value: "14–25%", label: "Particulate decrease (controlled test)" },
      { value: "Prevented", label: "Injection nozzle sticking" },
    ],
  },
  {
    segment: "Off-Road & Heavy Equipment",
    metrics: [
      { value: "Up to 6.8%", label: "Fuel reduction (constant-speed test)" },
      { value: "21% less", label: "Crank pin bearing wear (200-hr test)" },
      { value: "Softer deposits", label: "Easier maintenance shutdowns" },
    ],
  },
  {
    segment: "Industrial Power",
    metrics: [
      { value: "2–6%", label: "Generator fuel reduction (2-yr trial)" },
      { value: "4–12 → 0", label: "Soot incidents per year" },
      { value: "Delayed", label: "Engine oil degradation" },
    ],
  },
  {
    segment: "Rail & Locomotives",
    metrics: [
      { value: "1.9–4.4%", label: "Fuel savings (Bulgarian railways)" },
      { value: "1.1–5.4%", label: "Fuel savings (Korean railways)" },
      { value: "Reduced", label: "Exhaust soot & particulates" },
    ],
  },
];

const ResultsGrid: FC = () => {
  return (
    <section className="py-12 bg-zinc-950 text-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
          Results, at a glance
        </h2>
        <p className="text-center text-white/50 text-xs mb-10">
          Results vary by duty cycle, fuel quality, and operating conditions.
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
              <div className="space-y-4">
                {card.metrics.map((m) => (
                  <div key={m.label} className="border-l-2 border-[#F97316] pl-3">
                    <p className="text-xl font-bold text-white leading-tight">{m.value}</p>
                    <p className="text-xs text-white/60 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGrid;
