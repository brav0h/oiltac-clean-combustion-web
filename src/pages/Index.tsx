
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import ResultsGrid from "@/components/ResultsGrid";
import OurStory from "@/components/OurStory";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyNow from "@/components/WhyNow";
import PilotCta from "@/components/PilotCta";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <ResultsGrid />
      <Industries />
      <Benefits />
      <HowItWorks />
      <OurStory />
      <Testimonials />
      <PilotCta />
      <WhyNow />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
