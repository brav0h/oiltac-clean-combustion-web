import { Button } from "@/components/ui/button";

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
  },
  {
    number: 2,
    title: "Trial Design",
    description:
      "We recommend a treat rate and application method suited to your equipment and operating conditions. You define what a successful result looks like before the trial begins.",
    bullets: [],
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
    bullets: [],
  },
];

const HowTheTrialWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">How the Trial Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-2">
            A straightforward evaluation process — designed for busy operations teams.
          </p>
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          We don't ask for long commitments or system changes. A typical OILTAC trial fits within
          your existing operation — measurable, low-disruption, and built around your equipment and
          data.
        </p>

        <div className="space-y-6 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Step {step.number} — {step.title}
                </h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                {"bulletsLabel" in step && step.bulletsLabel && (
                  <p className="text-gray-600 mb-2">{step.bulletsLabel}</p>
                )}
                {step.bullets.length > 0 && (
                  <ul className="space-y-1 pl-1">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-gray-600 mb-6">
            Most trials run alongside normal operations. Your team stays in control throughout.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="#pilot-cta">Request a Pilot</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowTheTrialWorks;
