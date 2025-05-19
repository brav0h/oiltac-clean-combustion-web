
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-oiltac-forest text-xl font-display font-bold">
            OIL<span className="text-oiltac-copper">TAC</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#industries" className="text-oiltac-dark hover:text-oiltac-forest transition-colors">Industries</a>
          <a href="#benefits" className="text-oiltac-dark hover:text-oiltac-forest transition-colors">Benefits</a>
          <a href="#proven" className="text-oiltac-dark hover:text-oiltac-forest transition-colors">Results</a>
          <a href="#why-now" className="text-oiltac-dark hover:text-oiltac-forest transition-colors">Why Now</a>
          <Button className="bg-oiltac-forest hover:bg-oiltac-forest/90 text-white">
            Contact Us
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute top-16 left-0 right-0">
          <div className="flex flex-col space-y-4">
            <a 
              href="#industries" 
              className="text-oiltac-dark hover:text-oiltac-forest transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </a>
            <a 
              href="#benefits" 
              className="text-oiltac-dark hover:text-oiltac-forest transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#proven" 
              className="text-oiltac-dark hover:text-oiltac-forest transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Results
            </a>
            <a 
              href="#why-now" 
              className="text-oiltac-dark hover:text-oiltac-forest transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Now
            </a>
            <Button 
              className="bg-oiltac-forest hover:bg-oiltac-forest/90 text-white w-full"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
