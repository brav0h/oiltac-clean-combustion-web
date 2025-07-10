import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const scrollToContact = () => {
    // Navigate to home page and scroll to contact
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>About Us - OILTAC | A Proven Solution for Today's Challenges</title>
        <meta name="description" content="Learn about OILTAC's 50+ year history of providing plant enzyme-based fuel additives that improve combustion, reduce fuel waste, and extend engine life." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-oiltac-dark text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-oiltac-light max-w-3xl">
              A Proven Solution for Today's Challenges
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-custom max-w-4xl">
            {/* Introduction */}
            <div className="mb-16">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                For decades, OILTAC has been a quiet force in agriculture, marine, and industrial power generation. First developed in the 1970s, our plant enzyme-based fuel additive was validated through extensive real-world use—improving combustion, reducing fuel waste, and extending engine life long before emissions targets became headlines.
              </p>
            </div>

            {/* Why Haven't You Heard of Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-oiltac-dark">
                Why Haven't You Heard of Us?
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                For much of our history, OILTAC remained a best-kept secret—shared among operators and engineers who prioritized performance over promotion. Back when fuel was cheap and emissions weren't regulated, our solution was appreciated by a select group of forward-thinking users.
              </p>
              <div className="bg-oiltac-light/20 p-6 rounded-lg mb-6">
                <p className="text-lg font-semibold text-oiltac-dark mb-4">
                  But today, everything's changed.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Fuel prices are volatile.</li>
                  <li>Regulations are tightening.</li>
                  <li>Equipment is expected to last longer while running cleaner.</li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                The benefits OILTAC has quietly delivered for 50+ years—significant fuel savings, cleaner combustion, fewer breakdowns—are no longer niche advantages. They're mission-critical.
              </p>
              <div className="text-lg font-semibold text-oiltac-dark space-y-2">
                <p>We're not a new startup.</p>
                <p>We're not an unproven formula.</p>
                <p>We're a trusted solution whose time has come.</p>
              </div>
            </div>

            {/* Where It All Started */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-oiltac-dark">
                Where It All Started
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                In the 1970s, a close friend of my grandfather—a practical, hands-on engineer—began experimenting with plant enzymes to address the fuel inefficiency and carbon buildup he saw daily in industrial engines. Through trial and refinement, he created a formula that actually worked. Our families spent summers together, and while I wasn't there to see it all, that legacy was passed down through stories, relationships, and results.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, I've brought OILTAC back—with modern testing, consistent production, and the same core mission: <span className="font-semibold text-oiltac-dark">To help engines run cleaner, longer, and more efficiently—without modification.</span>
              </p>
            </div>

            {/* Why Choose OILTAC */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-oiltac-dark">
                Why Choose OILTAC
              </h2>
              <div className="grid gap-4">
                {[
                  "Proven Over Decades – Field-tested and used in agriculture, shipping, power generation",
                  "Drop-In Simplicity – No retrofitting or engine changes needed",
                  "Real-World Savings – Fuel savings of up to 11% in verified trials",
                  "Cleaner Burn, Less Maintenance – Reduced carbon buildup and soot",
                  "Built on Legacy, Revived with Purpose – A family connection to an enduring solution"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-oiltac-light/30">
                    <Check className="h-6 w-6 text-oiltac-copper mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Mission Today */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-oiltac-dark">
                Our Mission Today
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We're here to help operators, fleet managers, and businesses stay ahead of rising costs, stricter environmental rules, and mechanical wear—without overhauling their systems.
              </p>
              <p className="text-xl font-semibold text-oiltac-dark mb-4">
                If you use fuel, OILTAC can make that fuel work better.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                No gimmicks. No downtime. Just results backed by time.
              </p>
              <p className="text-lg font-medium text-oiltac-dark">
                Experience the additive that was ahead of its time—and finally has its moment.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-oiltac-dark text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Ready to Experience OILTAC?
              </h3>
              <p className="text-lg text-oiltac-light mb-6">
                Join the operators who've trusted OILTAC for decades.
              </p>
              <Button 
                className="bg-oiltac-copper hover:bg-oiltac-copper/90 text-white px-8 py-3 text-lg"
                onClick={scrollToContact}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;