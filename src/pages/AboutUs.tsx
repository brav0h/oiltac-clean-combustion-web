import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "1970s",
    label: "Origin",
    description: "A Japanese engineer develops OILTAC — a plant enzyme fuel additive — to address combustion inefficiency and carbon buildup in heavy industrial engines.",
  },
  {
    year: "1982–1986",
    label: "Independent Validation",
    description: "Field trials with Bulgarian and Korean national railways and a 200-hour marine engine test in Japan document fuel savings of 1.9–6.8% and reduced particulate emissions.",
  },
  {
    year: "2001–2003",
    label: "Long-Term Power Generation",
    description: "Hokkaido Electric's Okushiri Power Station runs OILTAC for two consecutive fiscal years — recording 2–6% fuel reduction and elimination of soot incidents.",
  },
  {
    year: "Today",
    label: "Global Distribution",
    description: "OILTAC is now available for marine, rail, and industrial operators worldwide — the same proven formula, with consistent production and modern supply infrastructure.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About OILTAC | Cleaner Combustion Fuel Additive</title>
        <meta name="description" content="OILTAC is a plant enzyme fuel additive with 50+ years of field-validated results across marine, rail, and industrial power generation in four countries. No engine modification required." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="bg-[#1B2A4A] text-white py-20">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              50 Years of Proven Combustion Technology
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              OILTAC was field-validated by national railway operators, power utilities, and marine engineers before most of today's emissions regulations existed. The science hasn't changed. The urgency has.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Where It Comes From
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              OILTAC was developed in Japan in the 1970s by an engineer who observed the same problem across every heavy engine he worked with: incomplete combustion leading to wasted fuel, carbon buildup, and premature wear. His answer was a plant enzyme concentrate that conditions fuel at the molecular level — improving burn efficiency without altering fuel chemistry or requiring any engine modification.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The formula was refined through controlled testing with Japan's Ministry of Transportation Marine Technical Institute and validated across international field trials with Bulgarian National Railways, Korean National Railways, and Hokkaido Electric Power Company. These weren't marketing studies. They were operational trials run by engineers and procurement officers who needed results they could stake budgets on.
            </p>
          </div>
        </section>

        {/* Technology */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              What OILTAC Does — and Doesn't Do
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              OILTAC is a natural plant enzyme concentrate added directly to diesel or heavy fuel oil at the point of use. It works by improving the combustion characteristics of the fuel itself — enabling a more complete burn, reducing unburned carbon, and lowering exhaust particulates.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              It does not alter fuel chemistry, require hardware installation, or affect engine oil composition. Spectroscopic oil analysis from Bulgarian locomotive trials confirmed no change in lubricant quality after extended use. Combustion chamber inspections from Japanese engine tests found deposits were soft and easily removed — compared to hard, adhesive carbon in untreated engines.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The result: measurable fuel savings, lower emissions, and reduced mechanical wear — without capex, downtime, or operational disruption.
            </p>
          </div>
        </section>

        {/* Multi-Generational Legacy */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              A Family Connection to an Enduring Formula
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The engineer who created OILTAC was a close family friend. Our families spent years together, and the technology — its results, its limitations, its potential — was something I grew up understanding rather than discovering. When fuel costs and emissions compliance moved to the top of every fleet manager's agenda, I saw the opportunity to bring OILTAC to the operators who need it most.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are not a startup building on speculation. We are distributing a formula with documented field history across four countries and multiple decades — now made available to global operators through consistent, reliable supply infrastructure.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-10 text-[#1B2A4A]">
              Documented History
            </h2>
            <ol className="relative border-l-2 border-[#F97316] space-y-10 pl-8">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-[#F97316] border-2 border-white ring-2 ring-[#F97316]" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-1">
                    {item.year} — {item.label}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Why Now
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Fuel costs are volatile. Emissions regulations are tightening across marine, rail, and industrial sectors. Equipment is expected to run longer with less maintenance spend. These pressures are structural — they are not going away.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              OILTAC addresses all three simultaneously: lower fuel consumption, reduced exhaust particulates, and slower engine wear — with no modification to existing equipment and no operational disruption during introduction.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The operators who ran these trials in the 1980s and early 2000s were solving the same problems fleet managers face today. The difference is the scale of urgency and the availability of the data. Both are now in your hands.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1B2A4A] text-white text-center">
          <div className="container-custom max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-4">
              Run a Pilot on Your Fleet
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We work with operators to design trials against your own baselines — so results are measured against your operation, not ours.
            </p>
            <Button
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white px-8 py-3 text-lg"
              onClick={() => { window.location.href = "/#pilot-cta"; }}
            >
              Request a Pilot
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
