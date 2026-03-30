
import Hero from "@/components/Hero";
import SkepticInoculation from "@/components/SkepticInoculation";
import Industries from "@/components/Industries";
import ResultsGrid from "@/components/ResultsGrid";
import OurStory from "@/components/OurStory";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyNow from "@/components/WhyNow";
import HowTheTrialWorks from "@/components/HowTheTrialWorks";
import OemWarranty from "@/components/OemWarranty";
import PilotCta from "@/components/PilotCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <SkepticInoculation />
      <ResultsGrid />
      <Industries />
      <Benefits />
      <HowItWorks />
      <OurStory />
      <Testimonials />
      <WhyNow />
      <HowTheTrialWorks />
      <OemWarranty />
      <PilotCta />
      <Footer />
    </div>
  );
};

export default Index;
