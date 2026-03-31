import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About OILTAC | Cleaner Combustion Fuel Additive</title>
        <meta name="description" content="OILTAC is a fuel treatment additive with 40+ years of commercial use across marine, rail, and industrial power generation. Developed by Fukasawa Chemical Laboratory, Japan." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">

        {/* ── Section 1: Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/ship-engine.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#1B2A4A]/65" />
          <div className="relative z-10 container-custom max-w-4xl py-32">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              A Formula Built in the 1970s.<br />
              Still Running Engines Today.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 italic font-light max-w-2xl leading-relaxed">
              Not because someone sold it.<br />
              Because people kept choosing to use it.
            </p>
          </div>
        </section>

        {/* ── Orange divider ───────────────────────────────────────────── */}
        <div className="h-1 bg-[#F97316]" />

        {/* ── Section 2: The Problem ──────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-[#1B2A4A] leading-tight">
              It Started with a Problem That Didn't Make Sense
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              If you've ever been responsible for equipment that runs on diesel, you've seen it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Fuel goes in.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              But not all of it becomes useful work.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Some of it turns into soot. Some of it becomes carbon buildup. Some of it shows up later as maintenance you didn't plan for.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              And over time, it becomes something you accept.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              You clean injectors. You schedule maintenance. You adjust.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              That's just how it works.
            </p>
          </div>
        </section>

        {/* ── Pull Quote 1 ────────────────────────────────────────────── */}
        <section className="py-24 md:py-36 bg-[#1a1f2e]">
          <div className="container-custom">
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl font-normal text-[#F5F0EB] leading-relaxed tracking-[0.03em]">
                What if this isn't something to manage…<br />
                but something to fix?
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3: The Engineer ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-[#1B2A4A] leading-tight">
              But One Engineer Didn't See It That Way
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              In the 1970s, a Japanese engineer named Fukasawa kept asking a different question.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Not after the fact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              At the moment combustion happens.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Because if that moment could be improved — if the fuel actually burned more completely — then everything else would change with it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Fuel consumption. Soot. Maintenance.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              So he focused there.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              And after years of work, he developed something that did exactly that.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              A formulation added directly to fuel — in small amounts — that works during combustion itself.
            </p>
            <p className="text-2xl md:text-3xl font-display font-bold text-center text-[#F97316]">
              He called it OILTAC.
            </p>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────────── */}
        <div className="h-px bg-gray-200" />

        {/* ── Section 4: How It Spread ────────────────────────────────── */}
        <section className="py-24 bg-gray-50">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-[#1B2A4A] leading-tight">
              What Happened Next Is What Makes This Story Different
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              There was no big launch.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              No marketing campaign.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Instead, something much simpler happened.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Someone tried it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              They saw a difference.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              And they told someone they trusted.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              That person tried it too.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              They saw the same thing.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              And then they told someone else.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Over time, OILTAC found its way into ships, rail systems, and power plants.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              Not because it was pushed.
            </p>
            <p className="text-2xl md:text-3xl font-display font-bold text-center text-[#F97316]">
              Because it kept working.
            </p>
          </div>
        </section>

        {/* ── Pull Quote 2 — background image ─────────────────────────── */}
        <section className="relative py-24 md:py-36">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/ship-engine.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 container-custom">
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl font-normal text-[#F5F0EB] leading-relaxed tracking-[0.03em]">
                That's how engineers decide<br />
                something is real.<br />
                Not by what they're told.<br />
                But by what they can measure.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 5: The Skeptics ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-[#1B2A4A] leading-tight">
              This Is Usually Where People Get Skeptical
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              And they should.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Because if something sounds too simple — or too good — the first instinct is to question it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              That's exactly what the people using it did.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              They didn't just run it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              They removed it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              They watched what happened when it was gone.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Fuel use increased. Soot returned. Maintenance tightened.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              Then they put it back.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              And things improved again.
            </p>
            <p className="text-xl font-semibold text-[#1B2A4A] mb-4">
              That's how engineers decide something is real.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Not by what they're told.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              But by what they can measure.
            </p>
          </div>
        </section>

        {/* ── Orange divider ───────────────────────────────────────────── */}
        <div className="h-1 bg-[#F97316]" />

        {/* ── Sections 6 + 7: Personal + Opportunity — shared dark bg ─── */}
        <section className="bg-[#1B2A4A] text-white">

          {/* Section 6 */}
          <div className="pt-24 pb-16">
            <div className="container-custom max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">
                For Me, This Was Never Just a Product
              </h2>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                The man who created OILTAC wasn't someone I discovered.
              </p>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                He was a family friend.
              </p>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                So this wasn't something I came across while looking for a business idea.
              </p>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                It was something I had seen — indirectly — for years.
              </p>
              <p className="text-lg leading-relaxed text-white/80">
                Something that worked. Something people kept using. Something that didn't need to be explained to the people who relied on it.
              </p>
            </div>
          </div>

          {/* Section 7 — flows directly, no divider */}
          <div className="pt-16 pb-24">
            <div className="container-custom max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 leading-tight">
                And Then Something Became Clear
              </h2>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                Operators here are dealing with the exact same challenges.
              </p>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                Fuel costs. Carbon buildup. Maintenance pressure.
              </p>
              <p className="text-lg leading-relaxed text-white/80 mb-5">
                Nothing about combustion has changed.
              </p>
              <p className="text-lg leading-relaxed text-white/80">
                But access to solutions hasn't been the same.
              </p>
            </div>
          </div>

        </section>

        {/* ── Section 8: Why It Exists ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container-custom max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-[#1B2A4A] leading-tight">
              That's Why This Exists Today
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              OILTAC isn't new.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              It's simply new to the people who haven't had the chance to evaluate it yet.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              That's the role of Chie Tsiang Enterprise.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-5">
              To make it available.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              So you can test it. Measure it. And decide for yourself.
            </p>
          </div>
        </section>

        {/* ── Pull Quote 3 / Closing CTA ──────────────────────────────── */}
        <section className="py-24 md:py-36 bg-[#1a1f2e] text-white">
          <div className="container-custom">
            <div className="max-w-xl mb-16">
              <h2 className="text-xl md:text-2xl font-normal text-[#F5F0EB] leading-relaxed tracking-[0.03em]">
                Because That's the Only Part<br />
                That Matters
              </h2>
            </div>
            <div className="max-w-xl">
            <p className="text-lg text-white/60 mb-4">
              Not what's written here.
            </p>
            <p className="text-lg text-white/60 mb-4">
              Not what anyone says.
            </p>
            <p className="text-lg text-white/60 mb-12">
              What happens when you run it on your equipment.
            </p>
            <Button
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white px-10 py-6 text-lg"
              onClick={() => { window.location.href = "/#pilot-cta"; }}
            >
              Request a Pilot on Your Fleet
            </Button>
            <p className="text-sm italic text-white/40 mt-8">
              The formula hasn't changed. The results haven't changed. What's changed is simply that you can now access it.
            </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
