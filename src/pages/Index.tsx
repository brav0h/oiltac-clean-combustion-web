
import { ArrowRight, Ship, TrainFront, Factory, Truck, CircleCheck, FileText, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import WhyNow from "@/components/WhyNow";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Industries />
      <Benefits />
      <Testimonials />
      <WhyNow />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default Index;
