
import { Card, CardContent } from "@/components/ui/card";

const WhyNow = () => {
  return (
    <section id="why-now" className="section-padding bg-zinc-800">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">The Window Is Closing Fast</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Regulations Are Getting Brutal
              </h3>
              <p className="mb-4 text-white/80">
                The government isn't asking nicely anymore. New emissions rules 
                will bankrupt unprepared operators.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Maritime sulfur limits enforced with $100K+ fines</li>
                <li>Carbon taxes doubling every two years</li>
                <li>Equipment bans hitting legacy fleets hard</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-zinc-900 border-0">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Your Equipment Still Has Value
              </h3>
              <p className="mb-4 text-white/80">
                Don't scrap millions in working machinery. OILTAC transforms 
                old engines into compliant profit centers.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Avoid $2M+ replacement costs per unit</li>
                <li>Keep operating while competitors shut down</li>
                <li>Turn compliance into competitive advantage</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
