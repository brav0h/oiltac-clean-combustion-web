import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const timelineItems = [
  {
    period: "1970s",
    text: "Fukasawa Chemical Laboratory develops OILTAC in Japan to address incomplete combustion in heavy industrial engines",
  },
  {
    period: "1982–1984",
    text: "Independent field trials conducted by Bulgarian and Korean national railways",
  },
  {
    period: "1985–1986",
    text: "200-hour controlled marine engine test by Japan's Marine Technical Institute, Ministry of Transportation",
  },
  {
    period: "2001–2003",
    text: "Two-year monitored operation at Hokkaido Electric Power's Okushiri Power Station",
  },
  {
    period: "Today",
    text: "Available to North American marine, rail, and industrial operators through Chie Tsiang Enterprise",
  },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About OILTAC | Cleaner Combustion Fuel Additive</title>
        <meta name="description" content="OILTAC is a fuel treatment additive with 40+ years of commercial use across marine, rail, and industrial power generation. Developed by Fukasawa Chemical Laboratory, Japan." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="bg-[#1B2A4A] text-white py-20">
          <div className="container-custom max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              A Formula Built in the 1970s. Still Running Engines Today.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl italic">
              Not because someone sold it.<br />
              Because people kept choosing to use it.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              It Started with a Problem That Didn't Make Sense
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              If you've ever been responsible for equipment that runs on diesel, you've seen it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Fuel goes in.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              But not all of it becomes useful work.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Some of it turns into soot. Some of it becomes carbon buildup. Some of it shows up later as maintenance you didn't plan for.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              And over time, it becomes something you accept.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              You clean injectors. You schedule maintenance. You adjust.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              That's just how it works.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              But One Engineer Didn't See It That Way
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              In the 1970s, a Japanese engineer named Fukasawa kept asking a different question:
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
              What if this isn't something to manage… but something to fix?
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Not after the fact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              At the moment combustion happens.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Because if that moment could be improved — if the fuel actually burned more completely — then everything else would change with it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Fuel consumption. Soot. Maintenance.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              So he focused there.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              And after years of work, he developed something that did exactly that.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              A formulation added directly to fuel — in small amounts — that works during combustion itself.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold">
              He called it OILTAC.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              What Happened Next Is What Makes This Story Different
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              There was no big launch.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              No marketing campaign.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Instead, something much simpler happened.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Someone tried it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              They saw a difference.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              And they told someone they trusted.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              That person tried it too.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              They saw the same thing.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              And then they told someone else.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Over time, OILTAC found its way into ships, rail systems, and power plants.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Not because it was pushed.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold">
              Because it kept working.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-10 text-[#1B2A4A]">
              Four Decades of Documented Use
            </h2>
            <ol className="relative border-l-2 border-[#F97316] space-y-10 pl-8">
              {timelineItems.map((item) => (
                <li key={item.period} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-[#F97316] border-2 border-white ring-2 ring-[#F97316]" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-1">
                    {item.period}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 4 */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              This Is Usually Where People Get Skeptical
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              And they should.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Because if something sounds too simple — or too good — the first instinct is to question it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              That's exactly what the people using it did.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              They didn't just run it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              They removed it.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              They watched what happened when it was gone.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Fuel use increased. Soot returned. Maintenance tightened.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Then they put it back.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              And things improved again.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground font-semibold mb-4">
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

        {/* Section 5 */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              For Me, This Was Never Just a Product
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The man who created OILTAC wasn't someone I discovered.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              He was a family friend.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              So this wasn't something I came across while looking for a business idea.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              It was something I had seen — indirectly — for years.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Something that worked. Something people kept using. Something that didn't need to be explained to the people who relied on it.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="py-16 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              And Then Something Became Clear
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Operators here are dealing with the exact same challenges.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Fuel costs. Carbon buildup. Maintenance pressure.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Nothing about combustion has changed.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              But access to solutions hasn't been the same.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#1B2A4A]">
              That's Why This Exists Today
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              OILTAC isn't new.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              It's simply new to the people who haven't had the chance to evaluate it yet.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              That's the role of Chie Tsiang Enterprise.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              To make it available.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              So you can test it. Measure it. And decide for yourself.
            </p>
          </div>
        </section>

        {/* Section 8 — Closing CTA */}
        <section className="py-20 bg-[#1B2A4A] text-white text-center">
          <div className="container-custom max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-6">
              Because That's the Only Part That Matters
            </h2>
            <p className="text-white/80 text-lg mb-4">
              Not what's written here.
            </p>
            <p className="text-white/80 text-lg mb-4">
              Not what anyone says.
            </p>
            <p className="text-white/80 text-lg mb-8">
              What happens when you run it on your equipment.
            </p>
            <Button
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white px-8 py-3 text-lg"
              onClick={() => { window.location.href = "/#pilot-cta"; }}
            >
              Request a Pilot on Your Fleet
            </Button>
            <p className="text-sm italic text-white/50 mt-6">
              The formula hasn't changed. The results haven't changed. What's changed is simply that you can now access it.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
