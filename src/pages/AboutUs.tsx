import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "Controlled testing",
    label: "Marine Engine — Japan, 1985–1986",
    description: "A 200-hour controlled marine diesel engine test by Japan's Marine Technical Institute documented 1.5–2% fuel reduction and 14–25% particulate decrease. Bearing wear down 21%. This is the kind of controlled test that establishes a baseline of credibility.",
  },
  {
    year: "Field validation",
    label: "National Railways — Bulgaria & Korea, 1982–1984",
    description: "Bulgarian and Korean national railways ran independent field trials. Fuel savings of 1.9–5.4% documented per locomotive. No adverse effect on engine oil quality confirmed by spectroscopic analysis. Engineers making budget decisions — not marketing trials.",
  },
  {
    year: "Long-term monitoring",
    label: "Hokkaido Electric Power — Japan, 2001–2003",
    description: "Two consecutive fiscal years of monitored operation at Okushiri Power Station recorded 2–6% fuel reduction and elimination of soot incidents. Then the product was removed to confirm baseline — and reinstated when performance dropped back.",
  },
  {
    year: "What that sequence means",
    label: "Removal / Reinstatement",
    description: "When operators pull a product, watch performance return to baseline, and put it back — that's how engineers confirm causation rather than correlation. That's not a marketing pilot. That's how you validate something you're going to stake a maintenance budget on.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About OILTAC | Cleaner Combustion Fuel Additive</title>
        <meta name="description" content="OILTAC is a plant enzyme fuel additive with 40+ years of field-validated results across marine, rail, and industrial power generation. No engine modification required." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="bg-[#1B2A4A] text-white py-20">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              A Formula Built in the 1970s. Still Running Engines Today.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl italic mb-6">
              Not because it was marketed. Because it worked.
            </p>
            <p className="text-lg md:text-xl text-white font-semibold max-w-2xl">
              OILTAC is a fuel treatment added directly to diesel and heavy fuel oil that improves combustion, reduces soot, and lowers fuel consumption — without modifying your engine or disrupting operations.
            </p>
          </div>
        </section>

        {/* Quick Summary Block */}
        <section className="py-12 bg-zinc-950">
          <div className="container-custom max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">What OILTAC Does</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Improves combustion efficiency",
                "Reduces soot and carbon buildup",
                "Lowers fuel consumption over time",
                "Extends maintenance intervals",
                "No engine modification required",
                "No hardware or dosing system needed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 1 — Origin */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              It Started with One Engineer Staring at the Same Problem
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              In the 1970s, a Japanese engineer named Fukasawa was working across heavy industrial engines — the kind that run continuously, burn expensive fuel, and can't afford to stop.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              He kept seeing the same thing: fuel that wasn't burning completely.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Energy escaping as carbon deposits, soot, and heat rather than doing useful work. Injectors fouling. Maintenance intervals tightening. Operators absorbing costs they couldn't fully explain.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The prevailing answer was to treat the symptoms — clean the injectors, change the oil more often, schedule more downtime.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              Fukasawa thought that was the wrong place to intervene.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              He spent years focused on a different question: what happens in the moment combustion actually occurs — and can you make that moment more complete?
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The answer was a plant enzyme formulation. Not a chemical additive. Not a detergent. Not a fuel modifier.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Something that activates during combustion itself, catalyzing a more complete burn — without altering the fuel's chemistry or requiring any change to the engine.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold">
              He called it OILTAC.
            </p>
          </div>
        </section>

        {/* Section 2 — How It Spread */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              It Wasn't Marketed. It Was Passed Between Engineers.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              OILTAC didn't grow through advertising campaigns or trade show booths.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              It spread the way things spread in heavy industry: one engineer tried it, the numbers held up, and he told someone he trusted.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              That person ran their own trial. The numbers held up again.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Over the following decades it moved — quietly, without fanfare — into marine fleets, national railway systems, and power generation facilities across Japan and beyond.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Bulgarian and Korean national railways ran documented field trials.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Hokkaido Electric Power ran it across two consecutive fiscal years at the Okushiri Power Station. They recorded 2–6% fuel reduction and the elimination of soot incidents. Then they removed it to confirm the baseline — and reinstated it when performance dropped back.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold">
              Nobody was selling to these operators. They were engineers making budget decisions. The product stayed because the results stayed.
            </p>
          </div>
        </section>

        {/* Section 4 — Personal Connection */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              Why You're Hearing About This Now
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The engineer who created OILTAC — Mr. Fukasawa — was a close family friend. Not a business contact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              A family friend.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              I grew up around this product the way you grow up around anything that belongs to the adults in your life: knowing it existed, knowing it worked, understanding what it was for — long before I thought about what to do with it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              It was never presented to me as an opportunity. It was just something that ran in engines and got consistent results.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              When fuel costs became the defining operational pressure for fleet managers — when emissions regulations started tightening in ways that forced real decisions — I started to see what had been in front of me for years.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Operators in North America were dealing with exactly the problems OILTAC had been solving in Japan for decades.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              They just didn't have access to it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              That's what Chie Tsiang Enterprise is: the bridge between a formula with 40 years of operational history and the operators who need it now.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              We are not a startup with a new product looking for a market.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold">
              We are a distributor with access to something already proven — and a responsibility to make sure operators who evaluate it have everything they need to do that honestly.
            </p>
          </div>
        </section>

        {/* Section 3 — Validation (Timeline) */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-4 text-[#1B2A4A]">
              The Proof That Actually Means Something
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-3">
              There are three kinds of evidence in this industry.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-3">
              Marketing claims. Lab tests. And operational data from people whose jobs depend on getting it right.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-10">
              OILTAC's history is built on the third kind.
            </p>
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

        {/* Section 5 — Positioning */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              This Isn't a New Product. It's a Proven One That Finally Has Distribution.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              OILTAC has already done the hard work of proving itself — in national railway trials, in power generation facilities, in marine engine testing.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The formula hasn't changed. The manufacturing hasn't changed.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              What's changed is simply that North American operators can now access it, evaluate it with their own equipment, and make their own determination.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              That's all we're asking you to do.
            </p>
          </div>
        </section>

        {/* Section 6 — Why Now */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              The Problem Hasn't Changed. The Stakes Have.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The engineer who built OILTAC was solving for incomplete combustion in 1970s industrial Japan.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              The physics of diesel combustion haven't changed since then.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              What has changed:
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Fuel costs are higher and more volatile. Emissions regulations have moved from suggestions to compliance requirements. Equipment is expected to run longer with less maintenance spend.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Operators are being asked to close that gap — without the capital budget for new engines, retrofits, or system overhauls.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              OILTAC addresses three of the most persistent operational costs directly:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Fuel consumption — reduced through more complete combustion",
                "Carbon and soot buildup — reduced at the source, not treated downstream",
                "Maintenance frequency — extended through cleaner operating conditions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#F97316] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Without modifying your system. Without downtime. Without long-term commitment before you've seen your own results.
            </p>
          </div>
        </section>

        {/* Section 7 — CTA */}
        <section className="py-20 bg-[#1B2A4A] text-white text-center">
          <div className="container-custom max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-6">
              The Only Way to Know Is to Test It on Your Own Equipment
            </h2>
            <p className="text-white/80 text-lg mb-4">
              Every operator who uses OILTAC today started the same way.
            </p>
            <p className="text-white/80 text-lg mb-4">
              They ran a 30–45 day pilot on their own vessels, tracked their own fuel consumption data, and compared it against their own baseline.
            </p>
            <p className="text-white/80 text-lg mb-4">
              No proprietary measurement system. No black box.
            </p>
            <p className="text-white font-semibold text-lg mb-4">
              Their records. Their evaluation.
            </p>
            <p className="text-white/80 text-lg mb-8">
              Some saw results in the first trial. Some ran a second to confirm. All of them made the decision based on their own numbers. That's the only evaluation that matters in this industry — and it's the only one we ask you to run.
            </p>
            <Button
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white px-8 py-3 text-lg"
              onClick={() => { window.location.href = "/#pilot-cta"; }}
            >
              Request a Pilot on Your Fleet
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
