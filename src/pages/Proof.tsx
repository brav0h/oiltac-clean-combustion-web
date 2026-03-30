import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HorizCompareChart,
  StatCard,
  VertBarChart,
  DepositCompareCard,
  StatCardPair,
} from "@/components/ProofCharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Proof = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-[#1B2A4A] text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Test Data & Technical Validation
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Field results, controlled trials, and engine condition documentation from marine, rail, and industrial applications.
            </p>
            <p className="mt-6 text-sm text-white/50 border border-white/20 rounded px-4 py-3 inline-block">
              Results vary. Always follow SDS and dosing guidance. Claims reflect specific test conditions — duty cycle, fuel quality, and operating environment affect outcomes.
            </p>
            <div className="mt-6 max-w-2xl text-sm text-white/70 leading-relaxed">
              Before reviewing the data below, one important note on methodology: OILTAC results come from three types of evidence: (1) controlled engine tests conducted under standardized conditions, (2) long-term fleet operation monitored over months or years, and (3) removal/reinstatement studies — where OILTAC was withdrawn and later reintroduced, allowing operators to observe the before/after effect on the same equipment. The third type is the most operationally meaningful and the hardest to fabricate.
            </div>
          </div>
        </section>

        {/* Marine */}
        <section id="proof-marine" className="py-16 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Marine & Tugboats
            </h2>
            <p className="text-muted-foreground mb-6">
              Fuel consumption, emissions, injector condition, and oil consumption data from marine diesel engine testing and long-term power station operation.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Fuel consumption: 1.5–2% reduction documented in controlled marine engine testing, measured per engine hour and per nautical mile.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Exhaust particulates: 14–25% reduction in controlled testing. Smoke and soot levels visibly reduced in long-term operation.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Injector condition: Before/after images show significantly reduced hard deposits. Injection nozzle sticking prevented in real-world long-term operation.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Oil consumption — key finding: Hokkaido Electric documented reduced oil consumption during OILTAC use. When withdrawn, consumption returned to prior levels. When reintroduced, consumption reduced again.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Cetane improvement: Cetane number improvement validated by the Japan National Research Institute — an accredited independent laboratory.</span>
              </li>
            </ul>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="marine-1">
                <AccordionTrigger className="text-sm font-semibold">
                  200-Hour Continuous Marine Diesel Engine Test — Marine Technical Institute, Ministry of Transportation, Japan (1985–1986)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>A controlled 200-hour continuous operation test compared fuel consumption, combustion characteristics, and particulate output with and without OILTAC additive in marine diesel engines.</p>
                  <p>Fuel efficiency gains of 1.5–2% were documented over the test period, with improved combustion consistency throughout. Exhaust particulate levels decreased by 14–25% in controlled measurements.</p>
                  <p>Combustion chamber deposits with OILTAC treatment were soft and easy to scrape off during inspection. Without OILTAC, deposits were hard, adhesive, and difficult to remove. Crank pin bearing wear was reduced by 21% in the comparative test.</p>
                  <p className="text-xs text-muted-foreground/70">Source: OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transportation, Japan</p>

                  <HorizCompareChart
                    title="Fuel Consumption — Baseline vs. With OILTAC"
                    baselineLabel="Baseline"
                    treatedLabel="With OILTAC"
                    baselineValue={100}
                    treatedValue={98.25}
                    treatedNote="1.5–2% improvement"
                    source="200-hour continuous marine diesel engine test. Marine Technical Institute, Ministry of Transportation, Japan."
                  />

                  <HorizCompareChart
                    title="Exhaust Particulate Levels — Baseline vs. With OILTAC"
                    baselineLabel="Baseline"
                    treatedLabel="With OILTAC"
                    baselineValue={100}
                    treatedValue={80.5}
                    treatedNote="14–25% reduction"
                    source="200-hour continuous marine diesel engine test. Marine Technical Institute, Ministry of Transportation, Japan."
                  />

                  <div className="mt-4">
                    <StatCard
                      value="21% reduction in crank pin bearing wear"
                      subtext="Comparative 200-hour engine test"
                      source="200-hour continuous marine diesel engine test. Marine Technical Institute, Ministry of Transportation, Japan."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="marine-2">
                <AccordionTrigger className="text-sm font-semibold">
                  Long-Term Power Station Operation — Oil Consumption & Removal/Reinstatement Study — Hokkaido Electric, Okushiri Power Station (Japan)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>A major Japanese power utility (Hokkaido Electric Power) documented a significant reduction in oil consumption during OILTAC use at their Okushiri Power Station. When the product was withdrawn, oil consumption returned to prior levels. When OILTAC was reintroduced, consumption reduced again.</p>
                  <p>This removal/reinstatement pattern — independently observed — is among the strongest forms of causal evidence available in field conditions. Injection nozzle orifice sticking was also prevented during OILTAC use, a common failure mode in heavy fuel oil applications.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Okushiri Power Station, Hokkaido Electric, Japan</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Off-Road */}
        <section id="proof-offroad" className="py-16 bg-gray-50 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Off-Road & Heavy Equipment
            </h2>
            <p className="text-muted-foreground mb-6">
              Road test and engine bench data from Italy and Japan, reflecting constant-load and acceleration performance.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Up to 6.8% fuel reduction at constant load (controlled test). Approximately 3–4% reduction during acceleration testing.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>21% reduction in crank pin bearing wear in a 200-hour comparative engine test, supporting extended maintenance intervals in high-load applications.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Combustion deposits softer and easier to remove versus untreated fuel — reducing maintenance labor and shutdown time.</span>
              </li>
            </ul>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="offroad-1">
                <AccordionTrigger className="text-sm font-semibold">
                  Road Fuel Efficiency Test — Fuel Experimental Station San Donato Milanese, Italy (1982)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Controlled road testing with standard diesel fuel measured fuel consumption under two conditions: constant speed (60 km/h) and acceleration performance (30–80 km/h). Compared treated and untreated fuel under identical conditions.</p>
                  <p>Results: up to 6.8% fuel reduction at constant speed; approximately 3–4% reduction during acceleration testing. Both tests used standard diesel fuel with no other modifications.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Test Results — Verification of Efficacy on Diesel Engine, Fuel Experimental Station San Donato Milanese, Italy, 1982</p>

                  <VertBarChart
                    title="Fuel Consumption Reduction by Test Condition"
                    data={[
                      { name: "Constant Speed (60 km/h)", value: 6.8, label: "Up to 6.8%", color: "#1a2633" },
                      { name: "Pickup (30–80 km/h)", value: 3.5, label: "3–4%", color: "#1a2633" },
                    ]}
                    yLabel="% Reduction"
                    source="Road fuel efficiency test. Fuel Experimental Station San Donato Milanese, Italy. 1982."
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="offroad-2">
                <AccordionTrigger className="text-sm font-semibold">
                  200-Hour Engine Bench Test — Bearing Wear & Deposit Analysis
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>A 200-hour comparative engine test measured crank pin bearing wear and combustion chamber deposit condition with and without OILTAC. Crank pin bearing wear was reduced by 21% in the OILTAC-treated engine.</p>
                  <p>Combustion deposits in the treated engine were described as soft and easy to scrape off during inspection. In the control engine (untreated fuel), deposits were hard, adhesive, and difficult to remove — increasing the labor and downtime required during maintenance shutdowns.</p>
                  <p className="text-xs text-muted-foreground/70">Source: OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transportation, Japan</p>

                  <div className="mt-4">
                    <StatCard
                      value="21% reduction in crank pin bearing wear"
                      subtext="200-hour comparative engine bench test"
                    />
                  </div>

                  <DepositCompareCard
                    title="Combustion Chamber Deposit Condition"
                    withoutLabel="Hard, adhesive deposits — difficult to remove on inspection"
                    withLabel="Soft deposits — easy to scrape off on inspection"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Industrial */}
        <section id="proof-industrial" className="py-16 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Industrial Power
            </h2>
            <p className="text-muted-foreground mb-6">
              Multi-year field data from a monitored diesel power station in Japan, with removal/reinstatement data confirming causal effect.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>2–6% fuel reduction in multi-year generator monitoring at Hokkaido Electric's Okushiri Power Station (Engine 5), compared against baseline fiscal years without the additive.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Soot incidents: from 4–12 per year to zero within 2 months of OILTAC introduction. Incidents resumed when additive was removed — confirming causation.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Engine oil degradation delayed — viscosity increase prevention, oxidation prevention, and sludge reduction documented. Extended maintenance intervals observed in long-term operation.</span>
              </li>
            </ul>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="industrial-1">
                <AccordionTrigger className="text-sm font-semibold">
                  Two-Year Fuel Consumption Monitoring — Okushiri Power Station, Hokkaido Electric (FY2001–2003)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Engine 5 at Hokkaido Electric's Okushiri Power Station was monitored over two fiscal years with OILTAC additive. Fuel consumption was compared against baseline fiscal years without the additive.</p>
                  <p>Results showed a 2–6% reduction in diesel generator fuel consumption during the monitored period. The comparison used actual operational fiscal year data — not a controlled test environment — making this a real-world performance validation.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Okushiri Power Station, Hokkaido Electric, FY2001–FY2003</p>

                  <VertBarChart
                    title="Diesel Generator Fuel Consumption — Monitored Over Two Fiscal Years"
                    data={[
                      { name: "Baseline (no additive)", value: 100, label: "100%", color: "#e2e2e2" },
                      { name: "With OILTAC (FY2001–03)", value: 96, label: "2–6% reduction", color: "#1a2633" },
                    ]}
                    yLabel="Relative consumption %"
                    source="Two-year monitored field data. Hokkaido Electric, Okushiri Power Station, Engine 5. FY2001–2003."
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="industrial-2">
                <AccordionTrigger className="text-sm font-semibold">
                  Soot Incident Elimination & Oil Analysis — Okushiri Power Station
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Before OILTAC introduction, the station recorded 4–12 soot and smoke dispersion incidents per year from diesel generator exhaust stacks. Within 2 months of OILTAC use, incidents dropped to zero.</p>
                  <p>When the additive was subsequently removed, incidents resumed. This on/off cycle confirmed the causal relationship between OILTAC and the soot reduction, rather than attributing it to external factors.</p>
                  <p>Engine oil analysis during the same period documented viscosity increase prevention, oxidation prevention, and sludge reduction — with potential oil change interval extension observed in long-term operation.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Okushiri Power Station, Hokkaido Electric, Japan</p>

                  <VertBarChart
                    title="Soot & Smoke Dispersion Incidents Per Year"
                    data={[
                      { name: "Before OILTAC", value: 8, label: "4–12 per year", color: "#e2e2e2" },
                      { name: "With OILTAC", value: 0, label: "0 incidents", color: "#1a2633" },
                      { name: "After removal", value: 8, label: "Resumed", color: "#f97316" },
                    ]}
                    yLabel="Incidents / year"
                    callout="Incidents dropped to zero within 2 months of introduction and resumed when the additive was removed — confirming causation."
                    source="Soot incident monitoring. Hokkaido Electric, Okushiri Power Station."
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Rail */}
        <section id="proof-rail" className="py-16 bg-gray-50 scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Rail & Locomotives
            </h2>
            <p className="text-muted-foreground mb-6">
              Field trial data from national railway operators in Bulgaria and South Korea.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Bulgarian national railway trials: 1.9–2.8% fuel savings per locomotive (equivalent to 26–57.9 kg diesel saved per locomotive per day).</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Korean railway testing across 4 routes: 2.1–5.4% fuel savings. Exhaust particulates and soot reduced across both programs.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>No adverse impact on engine oil quality in long-term data — spectroscopic analysis confirmed no additional engine chemistry stress.</span>
              </li>
            </ul>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="rail-1">
                <AccordionTrigger className="text-sm font-semibold">
                  Field Trials — Bulgarian National Railways (1982)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Field trials conducted with Bulgarian National Railways measured fuel consumption per locomotive with and without OILTAC. Results showed fuel savings of 1.9–4.4% per locomotive, equivalent to 26–57.9 kg of diesel saved per locomotive per day depending on operating conditions.</p>
                  <p>Engine oil samples analyzed spectroscopically showed no discernible quality change, indicating OILTAC did not introduce additional chemical stress to the lubricant system.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Bulgarian National Railways, 1982; Bulgarian locomotive engine oil analysis</p>

                  <StatCardPair
                    card1Value="1.9–4.4% fuel savings per locomotive"
                    card2Value="26–57.9 kg diesel saved per locomotive per day"
                    sharedSubtext="Bulgarian National Railways field trials, 1982"
                    source="Bulgarian National Railways field trials, 1982."
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rail-2">
                <AccordionTrigger className="text-sm font-semibold">
                  Multi-Route Trials — Korean National Railways (1984)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Korean National Railways conducted trials across 4 separate diesel train routes. Fuel savings ranged from 1.1% to 5.4% depending on the route and operating profile. An additional 1.5–2% improvement was observed at idle engine conditions.</p>
                  <p>Exhaust particulate and soot levels were reduced across all measured routes. The range of results across different routes reflects variation in duty cycle, load, and operating environment.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Korean National Railways, 1984</p>

                  <VertBarChart
                    title="Fuel Savings — Korean National Railways Multi-Route Trial"
                    data={[
                      { name: "Active operation", value: 3.25, label: "1.1–5.4%", color: "#1a2633" },
                      { name: "Idle conditions", value: 1.75, label: "1.5–2%", color: "#1a2633" },
                    ]}
                    yLabel="% fuel savings"
                    source="Multi-route field trials across 4 diesel train routes. Korean National Railways. 1984."
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        {/* Before & After — Engine Condition */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Before & After — Engine Condition
            </h2>
            <p className="text-muted-foreground mb-10">
              Visual documentation from controlled marine engine testing.
            </p>

            <div className="mb-12">
              <h3 className="text-lg font-semibold text-[#1B2A4A] mb-4">Injector Condition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <img
                    src="/lovable-uploads/bb1c2fd7-8f99-4a4f-b75e-6676b4d8f1d6.png"
                    alt="Injection nozzle with untreated fuel showing buildup and deposits"
                    className="w-full h-auto rounded-lg shadow mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">Before OILTAC</p>
                  <p className="text-sm text-muted-foreground">Hard, adhesive carbon deposits — difficult to remove</p>
                </div>
                <div className="text-center">
                  <img
                    src="/lovable-uploads/4db4bbe7-3f15-4c74-884e-22c85bbc6e50.png"
                    alt="Clean injection nozzle after treatment with OILTAC"
                    className="w-full h-auto rounded-lg shadow mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">After OILTAC</p>
                  <p className="text-sm text-muted-foreground">Softer deposits — easier maintenance, longer service life</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Injector tips from a long-term controlled marine engine test. Before OILTAC: hard, adhesive carbon deposits, difficult to remove. After OILTAC: softer deposits, easier maintenance, longer service life.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1B2A4A] mb-4">Valve Condition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <img
                    src="/lovable-uploads/bfcdc605-dad6-4446-a1b8-2a0e64d213ac.png"
                    alt="Exhaust valves untreated"
                    className="w-full h-auto rounded-lg shadow mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">Before OILTAC</p>
                  <p className="text-sm text-muted-foreground">Untreated — carbon adhesion throughout test duration</p>
                </div>
                <div className="text-center">
                  <img
                    src="/lovable-uploads/0bf9ee34-9b9a-4ae9-a90c-e53b874a17fc.png"
                    alt="Exhaust valves OILTAC treated"
                    className="w-full h-auto rounded-lg shadow mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">After OILTAC</p>
                  <p className="text-sm text-muted-foreground">Reduced carbon adhesion observed across the full test duration</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Exhaust and suction valve condition with and without OILTAC. Reduced carbon adhesion observed across the full test duration.
              </p>
            </div>
          </div>
        </section>

        {/* Compatibility Table */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Compatibility & Compliance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1B2A4A]">
                    <th className="text-left py-3 pr-8 font-semibold text-[#1B2A4A]">Parameter</th>
                    <th className="text-left py-3 font-semibold text-[#1B2A4A]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Diesel (ULSD)", "Compatible"],
                    ["Heavy fuel oil (HFO / bunker)", "Compatible"],
                    ["ASTM D975 fuel spec compliance", "Not affected"],
                    ["SOLAS flash point requirement", "Compliant"],
                    ["Engine modification required", "None"],
                    ["Dosing hardware required", "None"],
                    ["DEF / SCR systems", "No adverse effects observed in testing — contact us for Tier 4-specific configurations"],
                  ].map(([param, status]) => (
                    <tr key={param} className="border-b border-gray-200">
                      <td className="py-3 pr-8 text-gray-700 font-medium">{param}</td>
                      <td className="py-3 text-gray-600">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What This Data Does Not Claim */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-8 py-8">
              <h2 className="text-2xl font-display font-bold mb-3 text-[#1B2A4A]">
                What This Data Does Not Claim
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">Because precision matters more than impressiveness:</p>
              <ul className="space-y-3">
                {[
                  "Results vary by duty cycle, fuel quality, and operating conditions — all trial data reflects specific test parameters",
                  "OILTAC is not an emissions compliance product and does not certify regulatory conformance",
                  "Oil consumption and maintenance interval results depend on baseline engine condition",
                  "SCR/Tier 4 compatibility data is ongoing — operators with these systems should contact us before trialing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-8 text-[#1B2A4A]">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-sm font-semibold text-left">
                  Does this void my OEM warranty?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Under the Magnuson-Moss Warranty Act, a manufacturer must demonstrate that an aftermarket product caused a specific failure — they cannot void a warranty solely for additive use. OILTAC does not modify hardware or fuel specification. For OEM-specific questions, we provide technical documentation upon request.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-sm font-semibold text-left">
                  I've tried fuel additives before and they didn't work.
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Most commercial fuel additives work by modifying fuel chemistry before combustion. OILTAC's mechanism is different: enzyme-derived compounds that activate during the combustion event itself. The controlled trial process exists so you don't have to take our word for it.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-sm font-semibold text-left">
                  How do I know the test data is real?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>The strongest evidence we have is the Hokkaido Electric Power removal/reinstatement study — a utility that withdrew the product, watched performance return to baseline, then reinstated it. We also reference cetane testing from Japan's National Research Institute. The pilot is designed to generate your own evidence.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-sm font-semibold text-left">
                  What's the ROI calculation?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>It depends on your fuel spend, duty cycle, and fuel type. Use the calculator on our site for an estimate, or contact us and we'll model it against your actual operating data.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#1B2A4A] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Run the Numbers?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              The fastest way to evaluate OILTAC is to run it in your own operation.
            </p>
            <a
              href="/#pilot-cta"
              className="inline-block bg-[#F97316] hover:bg-[#F97316]/90 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Request a Pilot Test
            </a>
            <p className="mt-4 text-sm text-white/60">
              Or contact us directly at{" "}
              <a href="mailto:info@oiltacfuel.com" className="text-white underline hover:text-white/80">
                info@oiltacfuel.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Proof;
