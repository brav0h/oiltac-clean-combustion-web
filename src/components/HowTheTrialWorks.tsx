import { ClipboardList, Settings2, Droplets, BarChart2, ArrowRight, ArrowDown } from "lucide-react";
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

/* ── Vertical connector between step circles ──────────────────────── */
const StepConnector = () => (
  <div className="flex" style={{ height: 20 }}>
    <div className="flex justify-center flex-shrink-0" style={{ width: 40 }}>
      <div className="bg-gray-200" style={{ width: 2, height: "100%" }} />
    </div>
    <div className="flex-1" />
  </div>
);

/* ── Trial parameters card ────────────────────────────────────────── */
const TrialParamsCard = () => (
  <div className="flex gap-5">
    <div className="flex flex-col items-center flex-shrink-0" style={{ width: 40 }}>
      <div className="bg-gray-200 w-full flex-1" style={{ width: 2, margin: "0 auto" }} />
    </div>
    <div
      className="flex-1 rounded-lg p-5 mb-0"
      style={{
        backgroundColor: "#f9f9f9",
        border: "1px solid #e5e7eb",
        borderLeft: `4px solid ${ORANGE}`,
      }}
    >
      <p className="text-sm font-semibold mb-3" style={{ color: NAVY }}>
        Typical Trial Parameters
      </p>
      <ul className="space-y-1.5">
        {[
          "Treatment ratio: ~1:10,000",
          "Trial duration: 30–45 days",
          "No engine modification required",
          "Compatible with diesel and heavy fuel oil",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ORANGE }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ── Step card data ───────────────────────────────────────────────── */
const steps = [
  {
    number: 1,
    title: "Baseline Measurement",
    description:
      "We start by recording your existing fuel consumption and operating data — per engine hour, per nautical mile, or per unit of output depending on your operation. This becomes the reference point everything is measured against.",
    bullets: [
      "Fuel consumption per engine hour",
      "Fuel consumption per nautical mile or per mile",
      "Fuel consumption per ton of output or work performed",
      "Engine load and duty cycle",
    ],
    bulletsLabel: null as string | null,
  },
  {
    number: 2,
    title: "Trial Design",
    description:
      "We recommend a treat rate and application method suited to your equipment and operating conditions. You define what a successful result looks like before the trial begins.",
    bullets: [
      "What does a successful result look like for your operation?",
      "Which vessel, engine, or equipment will run the trial?",
    ],
    bulletsLabel: null as string | null,
  },
  {
    number: 3,
    title: "Controlled Application",
    description:
      "OILTAC is introduced into the fuel supply at a very low treat rate — typically around 1:10,000. No retrofitting, no downtime, no changes to your existing systems. Most trials run 30–45 days to generate sufficient operating data.",
    bullets: [
      "Fuel consumption",
      "Engine performance",
      "Exhaust smoke and combustion quality",
      "Operational consistency",
    ],
    bulletsLabel: "During the trial period we monitor:",
  },
  {
    number: 4,
    title: "Your Data, Your Decision",
    description:
      "Fuel consumption and performance data is compared against your baseline. You own the evaluation — we are simply here to support it. If the numbers work for your operation, you will know it from your own records.",
    bullets: [
      "Fuel consumption per engine hour",
      "Fuel consumption per nautical mile",
      "Fuel consumption per ton of output",
      "Smoke opacity observations",
      "Engine load vs fuel rate",
    ],
    bulletsLabel: "Common evaluation metrics include:",
    additionalBulletsLabel: "Additional Metrics Often Evaluated",
    additionalBullets: [
      "DPF regeneration frequency (Tier IV engines)",
      "Exhaust smoke opacity",
      "Fuel consumption per engine hour",
      "Exhaust backpressure trends",
      "Injector cleanliness after extended use",
    ],
  },
];

/* ── Main component ───────────────────────────────────────────────── */
const HowTheTrialWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="section-title">How the Trial Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-2">
            A structured evaluation process designed to produce measurable results using your own operational data.
          </p>

          {/* Duration badge */}
          <span
            className="inline-block mt-4 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: "#f5f5f5", color: NAVY }}
          >
            Typical trial: 30–45 days
          </span>
        </div>

        {/* Intro paragraph — left aligned */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          We don't ask for long commitments or system changes. A typical OILTAC trial fits within
          your existing operation — measurable, low-disruption, and built around your equipment and
          data.
        </p>

        {/* Flow diagram */}
        <FlowDiagram />

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const showTrialParams = step.number === 2;

            return (
              <div key={step.number}>
                {/* Step row */}
                <div className="flex gap-5">
                  {/* Left column: circle */}
                  <div className="flex-shrink-0 flex flex-col items-center" style={{ width: 40 }}>
                    <div
                      className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg flex-shrink-0"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {step.number}
                    </div>
                    {/* Connector down to next element */}
                    {!isLast && (
                      <div className="bg-gray-200 flex-1 mt-1" style={{ width: 2, minHeight: 16 }} />
                    )}
                  </div>

                  {/* Right column: card */}
                  <div className={`flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-5 ${!isLast ? "mb-1" : ""}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Step {step.number} — {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    {step.bulletsLabel && (
                      <p className="text-gray-600 mb-2">{step.bulletsLabel}</p>
                    )}
                    {step.bullets.length > 0 && (
                      <ul className="space-y-1 pl-1">
                        {step.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-gray-600">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: ORANGE }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {"additionalBulletsLabel" in step && step.additionalBulletsLabel && (
                      <p className="text-gray-600 mb-2 mt-3">{step.additionalBulletsLabel}</p>
                    )}
                    {"additionalBullets" in step && step.additionalBullets && step.additionalBullets.length > 0 && (
                      <ul className="space-y-1 pl-1">
                        {step.additionalBullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-gray-600">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: ORANGE }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Trial parameters card injected after step 2 */}
                {showTrialParams && (
                  <>
                    <StepConnector />
                    <TrialParamsCard />
                    <StepConnector />
                  </>
                )}

                {/* Connector between steps (not after last, not after step 2 since handled above) */}
                {!isLast && !showTrialParams && (
                  <div style={{ height: 4 }} />
                )}
              </div>
            );
          })}
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
              <a href="#pilot-cta">Request a Pilot</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowTheTrialWorks;
