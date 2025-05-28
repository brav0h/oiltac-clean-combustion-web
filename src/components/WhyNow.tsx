
import { Card, CardContent } from "@/components/ui/card";

const WhyNow = () => {
  return (
    <section id="why-now" className="section-padding bg-zinc-800">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Why Now</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                New Emissions Rules Are Here — And Only Getting Stricter
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>IMO 2020, EU Green Deal, India's TREM V</li>
                <li>Heavier penalties and reporting requirements</li>
                <li>Customers and regulators demand cleaner ops</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Bridge the Gap Without Expensive Retrofits
              </h3>
              <p className="mb-4 text-white/80">
                OILTAC is a plug-and-play additive that helps your existing equipment stay compliant and efficient — while you plan your transition strategy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
