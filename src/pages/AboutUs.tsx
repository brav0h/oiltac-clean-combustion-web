import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Used in Commercial Engines for Over 40 Years | OILTAC</title>
        <meta name="description" content="OILTAC is a fuel treatment additive with 40+ years of commercial use across marine, rail, and industrial power generation. Developed by Fukasawa Chemical Laboratory, Japan." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/ship-engine.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 container-custom pb-16 md:pb-24 pt-24">
            <h1 className="text-[1.75rem] md:text-[2.5rem] font-bold text-white mb-5 leading-tight">
              A Formula Built in the 1970s.<br />
              Still Running Engines Today.
            </h1>
            <p className="text-[1rem] text-[#CBD5E1] italic font-light leading-relaxed">
              Not because someone sold it.<br />
              Because people kept choosing to use it.
            </p>
          </div>
        </section>

        {/* ── The Story ───────────────────────────────────────────────── */}
        <section className="py-12 md:py-20 bg-[#FAFAFA]">
          <div className="container-custom">
            <div className="max-w-[560px]">
              <p className="text-[1.05rem] leading-[1.85] text-[#1F2937]">
                In the 1970s, a Japanese engineer named Fukasawa developed a fuel treatment that works during combustion itself, catalyzing a more complete burn without changing the fuel or modifying the engine. It spread through heavy industry the way things spread when something actually works: one engineer tried it, the numbers held, and they told someone they trusted. Over four decades it moved into marine fleets, railway systems, and power generation facilities across Japan and beyond. Not because it was marketed. Because it kept working.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pull Quote ──────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-[#1a1f2e]">
          <div className="container-custom">
            <div className="max-w-[520px]">
              <p className="text-[1.15rem] md:text-[1.35rem] font-light text-[#E8E8E8] leading-[1.9] tracking-[0.025em]">
                That's how engineers decide something is real.<br />
                Not by what they're told.<br />
                But by what they can measure.
              </p>
            </div>
          </div>
        </section>

        {/* ── Three Costs ─────────────────────────────────────────────── */}
        <section className="py-12 md:py-20 bg-[#FAFAFA]">
          <div className="container-custom">
            <h2 className="text-[1.4rem] md:text-[1.75rem] font-bold text-[#0D1B2A] mb-8 leading-tight max-w-[480px]">
              Three Costs It Addresses Directly
            </h2>
            <div className="max-w-[560px]">
              <div className="mb-8">
                <p className="text-[1.05rem] font-bold text-[#0D1B2A] mb-2">Fuel consumption</p>
                <p className="text-[1.05rem] leading-[1.85] text-[#1F2937]">More complete combustion means less fuel doing the same work.</p>
              </div>
              <div className="mb-8">
                <p className="text-[1.05rem] font-bold text-[#0D1B2A] mb-2">Carbon and soot buildup</p>
                <p className="text-[1.05rem] leading-[1.85] text-[#1F2937]">Reduced at the source. Cleaner injectors, cleaner valves, and less unplanned maintenance over time.</p>
              </div>
              <div className="mb-10">
                <p className="text-[1.05rem] font-bold text-[#0D1B2A] mb-2">Lube oil life</p>
                <p className="text-[1.05rem] leading-[1.85] text-[#1F2937]">Incomplete combustion sends carbon particles past the piston rings into the crankcase oil. More complete combustion means less contamination, slower TBN depletion, and oil that protects longer between changes.</p>
              </div>
              <p className="text-[1.05rem] leading-[1.85] text-[#1F2937]">
                No hardware. No engine modification. No operational disruption. It goes into your fuel. You measure the difference with your own data.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why You're Hearing About It Now ─────────────────────────── */}
        <section className="bg-[#0D1B2A] text-white py-20">
          <div className="container-custom">
            <h2 className="text-[1.4rem] md:text-[1.75rem] font-bold text-white mb-8 leading-tight max-w-[480px]">
              Why You're Hearing About This Now
            </h2>
            <div className="max-w-[560px]">
              <p className="text-[1.05rem] leading-[1.85] text-[#CBD5E1] mb-5">
                The engineer who created OILTAC was a close family friend. Not a business contact. A family friend. I grew up around this product long before I thought about what to do with it. It was not an opportunity. It was just something that ran in engines and worked.
              </p>
              <p className="text-[1.05rem] leading-[1.85] text-[#CBD5E1]">
                Operators in North America were facing the same challenges it had been solving in Japan for decades. They just did not have access to it. That is what Chie Tsiang Enterprise is here to change.
              </p>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ─────────────────────────────────────────────── */}
        <section className="py-[100px] bg-[#0D1B2A] text-white text-center">
          <div className="container-custom max-w-2xl mx-auto">
            <h2 className="text-[1.4rem] md:text-[1.75rem] font-bold text-white mb-8 leading-tight">
              The Only Way to Know Is to<br />
              Run It Yourself
            </h2>
            <p className="text-[1.05rem] leading-[1.85] text-[#CBD5E1] mb-12">
              Thirty to forty-five days. Your vessels. Your fuel records. Your baseline. Your decision.
            </p>
            <Button
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white px-10 py-6 text-lg"
              onClick={() => { window.location.href = "/#pilot-cta"; }}
            >
              Request a Pilot on Your Fleet
            </Button>
            <p className="text-[0.9rem] italic text-[#64748B] mt-6">
              The formula has not changed. The results have not changed. What has changed is simply that you can now access it.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
