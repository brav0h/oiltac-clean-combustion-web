import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            50 Years in the Making. Backed by Legacy. Ready for Now.
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-oiltac-gray mb-8 leading-relaxed">
              OILTAC was created in the 1970s by an engineer who believed fuel could do more than just power an engine. His plant enzyme formula quietly improved combustion, reduced deposits, and kept engines running longer.
            </p>
            <p className="text-lg md:text-xl text-oiltac-gray mb-10 leading-relaxed">
              For decades it was a trusted secret among operators who valued real results. Today, with rising fuel costs and tightening emissions rules, it's back — modernized and more relevant than ever.
            </p>
            <Link to="/about-us">
              <Button className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2 mx-auto">
                Discover Our Full Story
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
