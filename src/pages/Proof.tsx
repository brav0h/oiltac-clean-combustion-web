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

/* ── Reusable inline components ───────────────────────────────────── */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-2">
    {children}
  </p>
);

const StatCallout = ({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub: string;
}) => (
  <div className="rounded-lg bg-[#1B2A4A] p-5 text-white flex flex-col">
    <p className="text-2xl font-bold leading-tight text-white">{value}</p>
    <p className="text-sm text-white/80 mt-1">{label}</p>
    <p className="text-xs text-white/50 mt-1 leading-snug">{sub}</p>
  </div>
);

const SectionBullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mb-8">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-sm">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Proof = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-[#1B2A4A] text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Test Data & Technical Validation
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-6">
              Field results, controlled trials, and engine condition documentation from marine, rail, and industrial applications.
            </p>
            <div className="max-w-2xl text-sm text-white/70 leading-relaxed mb-6">
              OILTAC results come from three types of evidence: (1) controlled engine tests under standardized conditions, (2) long-term fleet operation monitored over months or years, and (3) removal/reinstatement studies — where OILTAC was withdrawn and reintroduced to observe the effect on the same equipment. The third type is the most operationally meaningful.
            </div>
            <p className="text-sm text-white/50 border border-white/20 rounded px-4 py-3 inline-block italic">
              Results vary. Always follow SDS and dosing guidance. Claims reflect specific test conditions — duty cycle, fuel quality, and operating environment affect outcomes.
            </p>
          </div>
        </section>

        {/* ── Top Summary Stat Bar ──────────────────────────────────── */}
        <section className="py-10 bg-zinc-950 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  value: "~50%",
                  label: "Sustained particulate reduction",
                  sub: "Maintained across full 200-hour marine engine test",
                },
                {
                  value: "4.7%",
                  label: "Fuel consumption improvement",
                  sub: "Japan Coast Guard Academy — light oil diesel",
                },
                {
                  value: "21%",
                  label: "Less bearing wear",
                  sub: "200-hour comparative engine test",
                },
                {
                  value: "40+ Years",
                  label: "Commercial operation",
                  sub: "Marine, rail, and power generation",
                },
              ].map((card) => (
                <div key={card.label} className="bg-[#1B2A4A] rounded-lg p-5 flex flex-col">
                  <div className="border-l-2 border-[#F97316] pl-3">
                    <p className="text-xl font-bold text-white leading-tight">{card.value}</p>
                    <p className="text-xs text-white/60 leading-snug mt-1">{card.label}</p>
                    <p className="text-xs text-white/40 leading-snug mt-1">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marine ────────────────────────────────────────────────── */}
        <section id="proof-marine" className="py-20 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <Eyebrow>Marine Application</Eyebrow>
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Marine & Tugboats
            </h2>

            {/* Stat row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <StatCallout
                value="~2%"
                label="Fuel reduction"
                sub="200-hr marine test, Ministry of Transportation, Japan"
              />
              <StatCallout
                value="~50%"
                label="Particulate reduction"
                sub="Sustained across full test period"
              />
              <StatCallout
                value="Prevented"
                label="Injector sticking"
                sub="Long-term operation"
              />
            </div>

            <SectionBullets items={[
              "Controlled 200-hour test conducted by the Marine Technical Institute, Ministry of Transportation, Japan",
              "Fuel: A/C heavy oil blend (bunker A and C — representative of real-world marine fuel conditions)",
              "Exhaust smoke and particulates reduced to approximately 50% of baseline and maintained at that level throughout testing",
              "Deposits formed were soft and easily removed — versus hard, adhesive deposits in untreated engines",
              "Lubricating oil TBN better maintained with OILTAC — indicating slower oil degradation over time",
            ]} />

            {/* Marine callout block */}
            <div className="rounded-lg bg-[#1B2A4A] text-white p-6 mb-8">
              <Eyebrow>Key Marine Finding — Japan Coast Guard Academy</Eyebrow>
              <h3 className="text-xl font-bold mb-4">
                Simultaneous CO and NOx Reduction — Normally That Doesn't Happen.
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                In diesel combustion, CO and NOx typically trade off against each other — reducing one tends to increase the other. Testing at the Japan Coast Guard Academy documented simultaneous reduction in both.
              </p>
              <p className="text-white/80 mb-4 leading-relaxed">
                Specific fuel consumption improved 4.7% on light oil and 3.6% on heavy oil A — the fuel types relevant to marine operations. The simultaneous emissions reduction was flagged by test engineers as technically significant.
              </p>
              <p className="font-semibold text-white">
                This finding has direct relevance for operators navigating tightening marine emissions requirements without modifying their exhaust systems.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="marine-1">
                <AccordionTrigger className="text-sm font-semibold">
                  200-Hour Continuous Marine Diesel Engine Test — Marine Technical Institute, Ministry of Transportation, Japan (1985–1986)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>A controlled 200-hour continuous operation test compared fuel consumption, combustion characteristics, and particulate output with and without OILTAC additive in marine diesel engines.</p>
                  <p>Fuel efficiency gains of 1.5–2% were documented over the test period, with improved combustion consistency throughout. Exhaust particulate levels decreased to approximately 50% of baseline in controlled measurements.</p>
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
                    treatedValue={50}
                    treatedNote="~50% reduction, sustained across full test period"
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

        {/* ── Off-Road ──────────────────────────────────────────────── */}
        <section id="proof-offroad" className="py-20 bg-gray-50 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <Eyebrow>Heavy Equipment</Eyebrow>
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Off-Road & Heavy Equipment
            </h2>

            {/* Stat row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <StatCallout
                value="6.8%"
                label="Fuel reduction"
                sub="Constant-speed diesel test, Italy"
              />
              <StatCallout
                value="18.5%"
                label="Smoke reduction"
                sub="Acceleration from slow running"
              />
              <StatCallout
                value="21%"
                label="Less bearing wear"
                sub="200-hour comparative test"
              />
            </div>

            <SectionBullets items={[
              "San Donato Milanese Fuel Experimental Station, Italy: 6.8% fuel reduction at constant 60 km/h load",
              "Pickup performance improved ~3.8% (30–80 km/h test)",
              "Smoke opacity reduced 8% at constant speed; 18.5% during acceleration from slow running",
              "Crank pin bearing wear 21% lower over 200-hour test",
            ]} />

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="offroad-1">
                <AccordionTrigger className="text-sm font-semibold">
                  Road Fuel Efficiency Test — Fuel Experimental Station San Donato Milanese, Italy (1982)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Controlled road testing with standard diesel fuel measured fuel consumption under two conditions: constant speed (60 km/h) and acceleration performance (30–80 km/h). Compared treated and untreated fuel under identical conditions.</p>
                  <p>Results: up to 6.8% fuel reduction at constant speed; approximately 3–4% reduction during acceleration testing. Smoke opacity reduced 8% at constant speed and 18.5% during acceleration from slow running. Both tests used standard diesel fuel with no other modifications.</p>
                  <p className="text-xs text-muted-foreground/70">Source: Test Results — Verification of Efficacy on Diesel Engine, Fuel Experimental Station San Donato Milanese, Italy, 1982</p>

                  <VertBarChart
                    title="Fuel Consumption Reduction by Test Condition"
                    data={[
                      { name: "Constant Speed (60 km/h)", value: 6.8, label: "6.8%", color: "#1a2633" },
                      { name: "Pickup (30–80 km/h)", value: 3.8, label: "~3.8%", color: "#1a2633" },
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

        {/* ── Industrial ────────────────────────────────────────────── */}
        <section id="proof-industrial" className="py-20 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <Eyebrow>Power Generation</Eyebrow>
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Industrial Power
            </h2>

            {/* Stat row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <StatCallout
                value="2–6%"
                label="Fuel reduction"
                sub="Multi-year monitored operation"
              />
              <StatCallout
                value="4–12 → 0"
                label="Soot incidents/year"
                sub="Eliminated completely during additive use"
              />
              <StatCallout
                value="Delayed"
                label="Engine oil degradation"
                sub="Viscosity, oxidation, and sludge all reduced"
              />
            </div>

            <SectionBullets items={[
              "Okushiri Power Station (Hokkaido Electric, Japan): 2–6% fuel reduction documented over two consecutive fiscal years",
              "Soot and smoke stack incidents: from 4–12 per fiscal year to zero during OILTAC use",
              "Pattern confirmed by removal and reinstatement — incidents resumed when product was withdrawn, ceased again on reintroduction",
              "Engine oil degradation delayed: viscosity increase, oxidation, and sludge formation all reduced",
            ]} />

            <p className="text-xs text-muted-foreground italic mb-8 border-l-4 border-gray-200 pl-4">
              Note: The Hokkaido Electric data reflects stationary diesel generator operation — a different duty cycle from mobile marine or rail applications. Results in variable-load marine engines may differ.
            </p>

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

        {/* ── Rail ──────────────────────────────────────────────────── */}
        <section id="proof-rail" className="py-20 bg-gray-50 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <Eyebrow>Rail Application</Eyebrow>
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Rail & Locomotives
            </h2>

            {/* Stat row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <StatCallout
                value="1.9–4.4%"
                label="Fuel savings"
                sub="Bulgarian National Railways"
              />
              <StatCallout
                value="1.1–5.4%"
                label="Fuel savings"
                sub="Korean National Railways"
              />
              <StatCallout
                value="No change"
                label="Engine oil quality"
                sub="Spectroscopic analysis confirmed — Bulgaria"
              />
            </div>

            <SectionBullets items={[
              "Bulgarian national railway field trials: 04-series locomotives saved 3.5–4.4% fuel; 07-series saved ~1.9%",
              "Korean National Railways: fuel saving ratio 1.1–5.4% across 4 trains and routes",
              "Spectroscopic oil analysis on Bulgarian locomotive engines showed no discernible change in oil quality — confirming no adverse effect on lubrication",
              "Soot and exhaust particulates reduced across both programs",
            ]} />

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

        {/* ── Before & After ────────────────────────────────────────── */}
        <section className="py-20 border-b">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Before & After — Engine Condition
            </h2>
            <p className="text-muted-foreground mb-10">
              Visual documentation from controlled marine engine testing.
            </p>

            {/* Injector condition */}
            <div className="mb-14">
              <h3 className="text-lg font-semibold text-[#1B2A4A] mb-6">Injector Condition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Before</p>
                  <img
                    src="/lovable-uploads/bb1c2fd7-8f99-4a4f-b75e-6676b4d8f1d6.png"
                    alt="Injection nozzle with untreated fuel showing buildup and deposits"
                    className="w-full h-auto rounded-lg shadow-md mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">Without OILTAC</p>
                  <p className="text-sm text-muted-foreground">Hard, adhesive carbon deposits — difficult to remove</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-2">After</p>
                  <img
                    src="/lovable-uploads/4db4bbe7-3f15-4c74-884e-22c85bbc6e50.png"
                    alt="Clean injection nozzle after treatment with OILTAC"
                    className="w-full h-auto rounded-lg shadow-md mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">With OILTAC</p>
                  <p className="text-sm text-muted-foreground">Softer deposits — easily removed during maintenance</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Injector tips from a controlled 200-hour marine diesel engine test — Marine Technical Institute, Ministry of Transportation, Japan. Without OILTAC: hard, adhesive carbon deposits that are difficult to remove and accelerate wear. With OILTAC: softer deposits that are easily removed during maintenance shutdowns.
              </p>
            </div>

            {/* Valve condition */}
            <div>
              <h3 className="text-lg font-semibold text-[#1B2A4A] mb-6">Valve Condition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Before</p>
                  <img
                    src="/lovable-uploads/bfcdc605-dad6-4446-a1b8-2a0e64d213ac.png"
                    alt="Exhaust valves untreated"
                    className="w-full h-auto rounded-lg shadow-md mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">Without OILTAC</p>
                  <p className="text-sm text-muted-foreground">Carbon adhesion throughout test duration</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-2">After</p>
                  <img
                    src="/lovable-uploads/0bf9ee34-9b9a-4ae9-a90c-e53b874a17fc.png"
                    alt="Exhaust valves OILTAC treated"
                    className="w-full h-auto rounded-lg shadow-md mb-3"
                  />
                  <p className="font-semibold text-sm text-[#1B2A4A]">With OILTAC</p>
                  <p className="text-sm text-muted-foreground">Reduced carbon adhesion across full test duration</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Exhaust and suction valve condition from the same 200-hour test series. Reduced carbon adhesion observed consistently across the full test duration.
              </p>
            </div>
          </div>
        </section>

        {/* ── Compatibility Table ───────────────────────────────────── */}
        <section className="py-20 bg-gray-50 border-b">
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
                    { param: "Diesel (ULSD)", status: "Compatible", type: "positive" },
                    { param: "Heavy fuel oil (HFO / bunker)", status: "Compatible", type: "positive" },
                    { param: "ASTM D975 fuel spec compliance", status: "Not affected", type: "positive" },
                    { param: "SOLAS flash point requirement", status: "Compliant", type: "positive" },
                    { param: "Engine modification required", status: "None", type: "positive" },
                    { param: "Dosing hardware required", status: "None", type: "positive" },
                    { param: "DEF / SCR systems", status: "No adverse effects observed in testing — contact us for Tier 4 SCR-specific configurations", type: "conditional" },
                  ].map(({ param, status, type }) => (
                    <tr key={param} className="border-b border-gray-200">
                      <td className="py-3 pr-8 text-gray-700 font-medium">{param}</td>
                      <td className="py-3 text-gray-600">
                        {type === "positive" && (
                          <span className="text-[#F97316] font-semibold mr-1.5">✓</span>
                        )}
                        {type === "conditional" && (
                          <span className="text-amber-500 font-semibold mr-1.5">~</span>
                        )}
                        {status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Honest Data Note */}
            <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-6 py-5">
              <h3 className="text-base font-semibold text-[#1B2A4A] mb-3">
                A Note on the 200-Hour Wear Test
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The 200-hour Marine Technical Institute test documented increased piston ring wear alongside decreased bearing wear. The test authors noted the cause of increased ring wear was unclear and may relate to the specific A/C heavy oil blend used — an unusually harsh fuel mix not typical of standard marine diesel operation. The crank pin bearing wear result in the same test showed 21% improvement.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                We include this finding because operators deserve the complete picture. We flag it here because complete disclosure is how trust is built. If your engineering team has specific questions about test methodology, we're happy to discuss what we know.
              </p>
            </div>
          </div>
        </section>

        {/* ── What This Data Does Not Claim ─────────────────────────── */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-8 py-8">
              <h2 className="text-2xl font-display font-bold mb-2 text-[#1B2A4A]">
                What This Data Does Not Claim
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">Because precision matters more than impressiveness.</p>
              <ul className="space-y-3">
                {[
                  "Results vary by duty cycle, fuel quality, and operating conditions — all data reflects specific test parameters",
                  "OILTAC is not an emissions compliance product and does not certify regulatory conformance",
                  "Oil consumption and maintenance interval results depend on baseline engine condition",
                  "SCR / Tier 4 compatibility is ongoing — operators with these systems should contact us before trialing",
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

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-20 bg-gray-50 border-b">
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

        {/* ── Final CTA ─────────────────────────────────────────────── */}
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
