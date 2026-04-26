
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { scrollDirection, atTop } = useScrollDirection();

  const scrollToContact = () => {
    setIsOpen(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "request_pilot_click", event_category: "engagement", event_label: "Navigation CTA" });
    const el = document.getElementById("pilot-cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#pilot-cta");
    }
  };

  const hidden = scrollDirection === "down" && !atTop;

  return (
    <nav
      className="bg-oiltac-dark py-4 fixed top-0 w-full z-50 shadow-sm transition-transform duration-300 ease-in-out"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="font-display font-bold text-xl">
            <span className="text-white font-bold tracking-wide">OILTAC</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/industries" className="text-white hover:text-oiltac-light transition-colors" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "nav_industries_click", event_category: "navigation", event_label: "Industries Nav Click" }); }}>Industries</a>
          <a href="/proof" className="text-white hover:text-oiltac-light transition-colors" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "nav_proof_click", event_category: "navigation", event_label: "Proof Nav Click" }); }}>Proof</a>
          <a href="/#benefits" className="text-white hover:text-oiltac-light transition-colors" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "nav_benefits_click", event_category: "navigation", event_label: "Benefits Nav Click" }); }}>Benefits</a>
          <a href="/fuel-calculator" className="text-white hover:text-oiltac-light transition-colors">Calculator</a>
          <a href="/#why-now" className="text-white hover:text-oiltac-light transition-colors">Why Now</a>
          <a href="/about-us" className="text-white hover:text-oiltac-light transition-colors">Our Story</a>
          <Button
            className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white"
            onClick={scrollToContact}
          >
            Request a Pilot
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-oiltac-dark py-4 px-4 shadow-md absolute top-16 left-0 right-0">
          <div className="flex flex-col space-y-4">
            <a href="/industries" className="text-white hover:text-oiltac-light transition-colors" onClick={() => { setIsOpen(false); if (typeof window !== 'undefined') { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "nav_industries_click", event_category: "navigation", event_label: "Industries Nav Click" }); } }}>Industries</a>
            <a href="/proof" className="text-white hover:text-oiltac-light transition-colors" onClick={() => { setIsOpen(false); if (typeof window !== 'undefined') { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "nav_proof_click", event_category: "navigation", event_label: "Proof Nav Click" }); } }}>Proof</a>
            <a href="/#benefits" className="text-white hover:text-oiltac-light transition-colors" onClick={() => { setIsOpen(false); if (typeof window !== 'undefined') { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "nav_benefits_click", event_category: "navigation", event_label: "Benefits Nav Click" }); } }}>Benefits</a>
            <a href="/fuel-calculator" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Calculator</a>
            <a href="/#why-now" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Why Now</a>
            <a href="/about-us" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Our Story</a>
            <Button
              className="bg-oiltac-cta hover:bg-oiltac-cta/90 text-white w-full"
              onClick={scrollToContact}
            >
              Request a Pilot
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
