
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
                Global Regulations Tightening
              </h3>
              <p className="mb-4 text-white/80">
                Cleaner fuel regulations are rising globally with stricter emissions standards 
                across maritime, rail, and industrial applications.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>IMO 2020 sulfur cap and upcoming carbon intensity regulations</li>
                <li>EU's Green Deal targeting 55% emissions reduction by 2030</li>
                <li>Increasing carbon taxes and emissions reporting requirements</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Bridge Solution for Legacy Equipment
              </h3>
              <p className="mb-4 text-white/80">
                OILTAC is a low-cost, scalable solution to bridge legacy engines toward 
                compliance and performance without major capital investments.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Extend the useful life of existing equipment</li>
                <li>Avoid costly premature replacements and retrofits</li>
                <li>Achieve immediate emissions reductions while planning for future transitions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
