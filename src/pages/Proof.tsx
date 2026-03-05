import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
              Test Data & Proof of Results
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              All claims on this site are drawn from documented field trials and controlled engine tests. Detailed source data is below.
            </p>
            <p className="mt-6 text-sm text-white/50 border border-white/20 rounded px-4 py-3 inline-block">
              Results vary. Always follow SDS and dosing guidance. Claims reflect specific test conditions — duty cycle, fuel quality, and operating environment affect outcomes.
            </p>
          </div>
        </section>

        {/* Marine */}
        <section id="proof-marine" className="py-16 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Marine & Tugboat Operators
            </h2>
            <p className="text-muted-foreground mb-6">
              Fuel, emissions, and injector data from marine diesel engine testing.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Fuel efficiency gains of 1.5–2% documented over a 200-hour continuous marine diesel engine test, with improved combustion consistency throughout.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Injection nozzle orifice sticking prevented — confirmed in long-term real-world diesel generator operation at Hokkaido Electric's Okushiri Power Station.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Smoke and soot emissions reduced, with exhaust particulates decreasing by 14–25% in controlled marine engine tests.</span>
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
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="marine-2">
                <AccordionTrigger className="text-sm font-semibold">
                  Long-Term Power Station Operation — Hokkaido Electric, Okushiri Power Station (Japan)
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>Real-world diesel generator operation at Hokkaido Electric's Okushiri Power Station confirmed injection nozzle orifice sticking was prevented during OILTAC use. This is notable because nozzle orifice sticking is a common failure mode in heavy fuel oil applications.</p>
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
              Off-Road Diesel & Mining Equipment
            </h2>
            <p className="text-muted-foreground mb-6">
              Road test and engine bench data from Italy and Japan.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Diesel fuel consumption reduced by up to 6.8% in controlled constant-speed road testing (60 km/h) and approximately 3–4% in performance pickup tests (30–80 km/h acceleration).</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Crank pin bearing wear reduced by 21% in a 200-hour comparative engine test, supporting extended maintenance intervals in high-load applications.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Combustion chamber deposits were soft and easy to remove with OILTAC treatment versus hard, adhesive deposits in the untreated control.</span>
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Industrial */}
        <section id="proof-industrial" className="py-16 border-b scroll-mt-28">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-2 text-[#1B2A4A]">
              Industrial Plants & Power Generation
            </h2>
            <p className="text-muted-foreground mb-6">
              Two-year field data from a monitored diesel power station in Japan.
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Diesel generator fuel consumption reduced by 2–6% at Hokkaido Electric's Okushiri Power Station (Engine 5) over a two-year monitored period, confirmed by comparing against baseline fiscal years without the additive.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Soot and smoke dispersion incidents from diesel generator exhaust stacks dropped from 4–12 events per year to zero within 2 months of OILTAC introduction — and resumed when the additive was removed, confirming causation.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Engine oil degradation delayed: viscosity increase prevention, oxidation prevention, and sludge reduction all documented during long-term operation.</span>
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
                <span>Fuel savings of 1.9–4.4% per locomotive documented in Bulgarian National Railways field trials (1982), equivalent to 26–57.9 kg of diesel saved per locomotive per day.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Korean National Railways trials across 4 diesel train routes achieved 1.1–5.4% fuel savings (1984), with an additional 1.5–2% improvement observed at idle engine conditions.</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                <span>Exhaust particulate and soot levels were reduced, with no discernible change in engine oil quality on spectroscopic analysis — cleaner exhaust without additional engine chemistry stress.</span>
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Proof;
