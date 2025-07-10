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
              OILTAC was created in the 1970s by a close friend of my grandfather—an engineer who believed that fuel could do more than just power an engine. He developed a plant enzyme additive that quietly improved combustion, reduced deposits, and helped engines run cleaner and longer.
            </p>
            <p className="text-lg md:text-xl text-oiltac-gray mb-10 leading-relaxed">
              For decades, it was a trusted secret among operators who valued real results over marketing hype. Today, with rising fuel prices and tightening emissions regulations, I've brought that solution back—modernized, tested, and more relevant than ever.
            </p>
            <Link to="/about-us">
              <Button className="bg-oiltac-copper hover:bg-oiltac-copper/90 text-white py-6 px-8 text-lg rounded-md flex items-center gap-2 mx-auto">
                👉 Discover Our Full Story
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