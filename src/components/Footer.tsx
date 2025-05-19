import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-oiltac-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-display font-bold">
              <span className="text-white">OIL</span><span className="text-oiltac-copper">TAC</span>
            </a>
            <p className="mt-4 text-gray-300">
              Plant-based fuel additive technology for cleaner, more efficient combustion.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#proven" className="text-gray-300 hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#why-now" className="text-gray-300 hover:text-white transition-colors">
                  Why Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Technical Data Sheet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Safety Data Sheet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>123 Green Tech Way</p>
              <p>Suite 400</p>
              <p>Houston, TX 77002</p>
              <p className="mt-4">info@oiltac.com</p>
              <p>+1 (888) 555-FUEL</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} <span className="text-white">OIL</span><span className="text-oiltac-copper">TAC</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
