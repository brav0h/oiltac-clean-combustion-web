
import { Card, CardContent } from "@/components/ui/card";

const WhyNow = () => {
  return (
    <section id="why-now" className="section-padding bg-zinc-800">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Why Now</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <span className="mr-3">🌍</span>
                Global Emissions Rules Are Tightening
              </h3>
              <p className="mb-4 text-white/80">
                Stricter fuel and emissions regulations are hitting hard across maritime, rail, and industrial sectors.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>IMO 2020 and upcoming carbon intensity limits</li>
                <li>EU Green Deal: 55% emissions cut by 2030</li>
                <li>India's TREM V and rising enforcement in Asia</li>
                <li>Heavier fines, audits, and reporting pressure</li>
                <li>Customers and regulators demand cleaner operations</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                <span className="mr-3">🛠</span>
                Bridge the Gap Without Replacing Equipment
              </h3>
              <p className="mb-4 text-white/80">
                OILTAC is a plug-and-play additive that helps legacy engines meet modern standards — fast and affordably.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Extend equipment life without major investment</li>
                <li>Avoid costly retrofits or replacements</li>
                <li>Cut emissions immediately while planning upgrades</li>
                <li>Stay compliant and fuel-efficient with your existing setup</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
