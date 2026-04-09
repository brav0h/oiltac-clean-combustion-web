import { ClipboardList, Settings2, Droplets, BarChart2, ArrowRight, ArrowDown, Wrench, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORANGE = "#f97316";
const NAVY = "#1a2633";

/* ── Flow diagram ─────────────────────────────────────────────────── */
const flowStages = [
  { icon: ClipboardList, label: "Baseline Measurement" },
  { icon: Settings2,     label: "Trial Design" },
  { icon: Droplets,      label: "Controlled Application" },
  { icon: BarChart2,     label: "Data Comparison" },
];

const FlowDiagram = () => (
  <div className="max-w-3xl mx-auto mb-8">
    {/* Desktop: horizontal */}
    <div className="hidden sm:flex items-center justify-between bg-white border border-gray-100 rounded-lg shadow-sm px-6 py-5">
      {flowStages.map((stage, i) => {
        const Icon = stage.icon;
        return (
          <div key={stage.label} className="flex items-center">
            <div className="flex flex-col items-center gap-2 text-center" style={{ minWidth: 96 }}>
              <Icon size={22} style={{ color: ORANGE }} strokeWidth={1.75} />
              <span className="text-xs font-medium leading-tight" style={{ color: NAVY }}>
                {stage.label}
              </span>
            </div>
            {i < flowStages.length - 1 && (
              <ArrowRight size={18} className="mx-3 flex-shrink-0" style={{ color: ORANGE }} />
            )}
          </div>
        );
      })}
    </div>

    {/* Mobile: vertical */}
    <div className="sm:hidden flex flex-col items-center gap-1 bg-white border border-gray-100 rounded-lg shadow-sm px-6 py-5">
      {flowStages.map((stage, i) => {
        const Icon = stage.icon;
        return (
          <div key={stage.label} className="flex flex-col items-center">
            <div className="flex items-center gap-3 py-2">
              <Icon size={20} style={{ color: ORANGE }} strokeWidth={1.75} />
              <span className="text-sm font-medium" style={{ color: NAVY }}>{stage.label}</span>
            </div>
            {i < flowStages.length - 1 && (
              <ArrowDown size={16} style={{ color: ORANGE }} />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

/* ── Icon feature grid ────────────────────────────────────────────── */
const iconFeatures = [
  { icon: Wrench,        label: "No Engine Modifications" },
  { icon: Clock,         label: "No Operational Downtime" },
  { icon: ClipboardList, label: "No Long-Term Commitment" },
  { icon: Droplets,      label: "Diesel and HFO Compatible" },
];

/* ── Horizontal step cards ────────────────────────────────────────── */
const stepCards = [
  {
    number: 1,
    title: "Baseline",
    description:
      "Document your current fuel consumption per engine hour, nautical mile, or ton of output using your existing operational records. No proprietary tracking required.",
  },
  {
    number: 2,
    title: "Trial Design",
    description:
      "We define the treatment schedule, vessel selection, and measurement intervals together before the trial begins. Nothing changes operationally.",
  },
  {
    number: 3,
    title: "Controlled Application",
    description:
      "OILTAC is applied at the confirmed treat rate of 1:10,000. Your crew continues normal operations throughout.",
  },
  {
    number: 4,
    title: "Data Comparison",
    description:
      "At trial close, pre- and post-treatment consumption data is compared side by side. You own the results.",
  },
];

/* ── Main component ───────────────────────────────────────────────── */
const HowTheTrialWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="section-title">Don't Take Our Word For It. Test It Yourself.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-2">
            A structured 30–45 day pilot on your own vessels, with your own data.
          </p>
        </div>

        {/* Icon feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          {iconFeatures.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-lg shadow-sm px-4 py-5 gap-3"
            >
              <Icon size={24} style={{ color: ORANGE }} strokeWidth={1.75} />
              <span className="text-sm font-semibold" style={{ color: NAVY }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <FlowDiagram />

        {/* Horizontal step cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stepCards.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex flex-col"
            >
              <div
                className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-base flex-shrink-0 mb-3"
                style={{ backgroundColor: ORANGE }}
              >
                {card.number}
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: NAVY }}>
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto mt-8">
          <div
            className="rounded-lg px-6 py-5 mb-6 border-t-2"
            style={{ backgroundColor: "#f9f9f9", borderTopColor: ORANGE }}
          >
            <p className="text-lg italic text-gray-700 text-center">
              Most trials run alongside normal operations. Your team stays in control throughout.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white px-8"
              asChild
            >
              <a href="#pilot-cta">Request a Pilot Test</a>
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Tell us about your operation and we'll design a trial around it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowTheTrialWorks;
