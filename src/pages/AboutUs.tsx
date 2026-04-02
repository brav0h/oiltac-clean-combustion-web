import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const pullQuoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pullQuoteRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
            <h1 className="text-[1.75rem] md:text-[2.5rem] font-bold text-white mb-4 leading-tight">
              Built in the 1970s. Still Solving the Same Problem.
            </h1>
            <p className="text-[1.05rem] md:text-[1.2rem] font-light text-[#CBD5E1] leading-snug">
              More complete combustion. Less fuel. Less maintenance.
            </p>
          </div>
        </section>

        {/* ── The Story ───────────────────────────────────────────────── */}
        <section className="py-12 md:py-20 bg-[#FAFAFA]">
          <div className="container-custom">
            <div className="max-w-[720px] mx-auto">
              <p className="text-[1.05rem] leading-[1.85] text-[#1F2937]">
                In the 1970s, a Japanese engineer named Fukasawa developed a fuel treatment that works during combustion itself, catalyzing a more complete burn without changing the fuel or modifying the engine. It spread through heavy industry the way things spread when something actually works: one engineer tried it, the numbers held, and they told someone they trusted. Over four decades it moved into marine fleets, railway systems, and power generation facilities across Japan and beyond. Not because it was marketed. Because it kept working.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pull Quote ──────────────────────────────────────────────── */}
        <section className="bg-[#1a1f2e] pt-[64px] pb-[80px] md:pt-[100px] md:pb-[120px]">
          <div className="container-custom">
            <div
              ref={pullQuoteRef}
              className="fade-up max-w-[640px] mx-auto text-center"
            >
              <p className="font-lora italic text-[1.2rem] md:text-[1.5rem] font-normal text-[#E8E8E8] leading-[1.8]">
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
            <div className="max-w-[720px] mx-auto">
              <h2 className="text-[1.4rem] md:text-[1.75rem] font-bold text-[#0D1B2A] mb-10 leading-tight">
                Three Costs It Addresses Directly
              </h2>
              <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-10">
                <div>
                  <p className="text-[1.25rem] font-bold text-[#0D1B2A] block mb-[0.4rem]">Fuel consumption</p>
                  <p className="text-[1rem] leading-[1.7] text-[#374151] font-normal">More complete combustion means less fuel doing the same work.</p>
                </div>
                <div>
                  <p className="text-[1.25rem] font-bold text-[#0D1B2A] block mb-[0.4rem]">Carbon and soot buildup</p>
                  <p className="text-[1rem] leading-[1.7] text-[#374151] font-normal">Reduced at the source. Cleaner injectors, cleaner valves, and less unplanned maintenance over time.</p>
                </div>
                <div>
                  <p className="text-[1.25rem] font-bold text-[#0D1B2A] block mb-[0.4rem]">Lube oil life</p>
                  <p className="text-[1rem] leading-[1.7] text-[#374151] font-normal">Incomplete combustion sends carbon particles past the piston rings into the crankcase oil. More complete combustion means less contamination, slower TBN depletion, and oil that protects longer between changes.</p>
                </div>
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
            <div className="max-w-[900px] mx-auto">
              <h2 className="text-[1.4rem] md:text-[1.75rem] font-bold text-white mb-8 leading-tight">
                Why You're Hearing About This Now
              </h2>
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="md:w-[60%]">
                  <p className="text-[1.05rem] leading-[1.85] text-[#CBD5E1] mb-5">
                    The engineer who created OILTAC was a close family friend. That relationship is not the point. It is what it led to.
                  </p>
                  <p className="text-[1.05rem] leading-[1.85] text-[#CBD5E1] mb-5">
                    Chie Tsiang Enterprise has direct access to the original Fukasawa formulation. Not a licensed copy. Not a reformulation. The same product that has been running in commercial fleets for four decades, with the original production and historical validation behind it.
                  </p>
                  <p className="text-[1.05rem] leading-[1.85] text-[#CBD5E1]">
                    North American operators were dealing with the same fuel cost and maintenance pressure it had already solved elsewhere. Access was the only gap. That is what this exists to close.
                  </p>
                </div>
                <div className="md:w-[40%] mt-10 md:mt-0 flex items-center justify-center">
                  <div className="bg-[#111827] border border-[#2D3748] rounded-sm p-8 text-center w-full">
                    <p className="text-[4rem] font-bold text-white leading-none mb-3">40+</p>
                    <p className="text-[1rem] font-medium text-[#CBD5E1]">Years of commercial operation</p>
                    <p className="text-[0.85rem] text-[#64748B] mt-2">Marine, rail, and power generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ─────────────────────────────────────────────── */}
        <section className="py-[100px] bg-[#0D1B2A] text-white text-center border-t border-[#1F2D40]">
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
