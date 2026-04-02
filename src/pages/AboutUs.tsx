import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flame, Filter, Droplet } from 'lucide-react';
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
            <h2 className="text-[1.4rem] md:text-[1.75rem] font-bold text-[#0D1B2A] mb-10 leading-tight max-w-[720px] mx-auto">
              Three Operating Costs. One Treatment.
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="border border-[rgba(13,27,42,0.12)] rounded-[6px] p-8">
                <Flame size={28} strokeWidth={1.5} className="text-[#0D1B2A] mb-5" />
                <h3 className="text-[1.1rem] font-bold text-[#0D1B2A] mb-3">Reduce Fuel Consumption</h3>
                <ul className="space-y-1.5">
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>More complete combustion</li>
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Less fuel for the same output</li>
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Lower operating cost per hour</li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="border border-[rgba(13,27,42,0.12)] rounded-[6px] p-8">
                <Filter size={28} strokeWidth={1.5} className="text-[#0D1B2A] mb-5" />
                <h3 className="text-[1.1rem] font-bold text-[#0D1B2A] mb-3">Reduce Carbon and Soot Buildup</h3>
                <ul className="space-y-1.5">
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Reduced at the source</li>
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Cleaner injectors and valves</li>
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Less unplanned maintenance over time</li>
                </ul>
              </div>
              {/* Card 3 */}
              <div className="border border-[rgba(13,27,42,0.12)] rounded-[6px] p-8">
                <Droplet size={28} strokeWidth={1.5} className="text-[#0D1B2A] mb-5" />
                <h3 className="text-[1.1rem] font-bold text-[#0D1B2A] mb-3">Extend Oil Life</h3>
                <ul className="space-y-1.5">
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Less carbon contamination</li>
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Slower TBN depletion</li>
                  <li className="flex gap-2 text-[0.95rem] leading-[1.7] text-[#374151]"><span className="flex-shrink-0 text-[#0D1B2A]/40 select-none">–</span>Longer protection between changes</li>
                </ul>
              </div>
            </div>
            {/* Closing strip */}
            <div className="mt-10 pt-10 border-t border-[rgba(13,27,42,0.10)]">
              <p className="text-[0.95rem] leading-[1.7] text-[#4B5563] text-center max-w-[640px] mx-auto">
                No hardware. No retrofit. No operational disruption. It goes directly into your fuel. The difference is measured in your own data.
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
