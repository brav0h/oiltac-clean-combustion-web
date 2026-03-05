
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToContact = () => {
    setIsOpen(false);
    navigate("/#pilot-cta");
  };

  return (
    <nav className="bg-oiltac-dark py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="font-display font-bold text-xl">
            <span className="text-white font-bold tracking-wide">OILTAC</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/about-us" className="text-white hover:text-oiltac-light transition-colors">About Us</a>
          <a href="/#industries" className="text-white hover:text-oiltac-light transition-colors">Industries</a>
          <a href="/#benefits" className="text-white hover:text-oiltac-light transition-colors">Benefits</a>
          <a href="/proof" className="text-white hover:text-oiltac-light transition-colors">Proof</a>
          <a href="/#why-now" className="text-white hover:text-oiltac-light transition-colors">Why Now</a>
          <a href="/fuel-calculator" className="text-white hover:text-oiltac-light transition-colors">Calculator</a>
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
            <a href="/about-us" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="/#industries" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Industries</a>
            <a href="/#benefits" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Benefits</a>
            <a href="/proof" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Proof</a>
            <a href="/#why-now" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Why Now</a>
            <a href="/fuel-calculator" className="text-white hover:text-oiltac-light transition-colors" onClick={() => setIsOpen(false)}>Calculator</a>
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
