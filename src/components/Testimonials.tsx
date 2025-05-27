
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="proven" className="section-padding bg-oiltac-dark text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Tested & Proven</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">
            Tested in marine engines, locomotives, trucks, and factory boilers — 
            with measurable improvements in fuel efficiency, emissions, and engine condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="bg-white/20 backdrop-blur-sm border-0">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-oiltac-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic mb-4 text-white font-medium">
                "After implementing OILTAC across our vessel fleet, we've seen a consistent 4% reduction in fuel consumption and significant improvement in engine cleanliness during inspections."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Marine Fleet Manager</p>
                  <p className="text-sm text-white/90">International Shipping Company</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/20 backdrop-blur-sm border-0">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-oiltac-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic mb-4 text-white font-medium">
                "OILTAC helped us achieve our emissions targets ahead of schedule. The reduction in maintenance costs alone justified the investment."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Chief Engineer</p>
                  <p className="text-sm text-white/90">Regional Rail Authority</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/20 backdrop-blur-sm border-0">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-oiltac-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="italic mb-4 text-white font-medium">
                "We've documented a 15% reduction in soot and particulate matter since implementing OILTAC. The results were visible within the first month."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Maintenance Director</p>
                  <p className="text-sm text-white/90">Industrial Manufacturing Plant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
