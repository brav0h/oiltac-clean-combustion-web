
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import OurStory from "@/components/OurStory";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyNow from "@/components/WhyNow";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Industries />
      <OurStory />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <WhyNow />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
