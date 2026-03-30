import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            40 Years of Commercial Use. Not a Startup Product.
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-oiltac-gray mb-8 leading-relaxed">
              OILTAC was developed by Fukasawa Chemical Laboratory in Japan in the 1970s, when industrial operators needed a way to squeeze more efficiency out of expensive fuel with aging equipment. It was never marketed aggressively — it spread through referrals among operators who saw consistent results and kept using it.
            </p>
            <p className="text-lg md:text-xl text-oiltac-gray mb-6 leading-relaxed">
              Fukasawa Chemical Laboratory has been producing OILTAC for continuous commercial use across marine, rail, and industrial applications for over four decades. Chie Tsiang Enterprise is the authorized North American distributor.
            </p>
            <p className="text-lg md:text-xl font-semibold text-oiltac-gray mb-10 leading-relaxed">
              This is not a new formulation looking for a market. This is a proven product now available to North American operators.
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
