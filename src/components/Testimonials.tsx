
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="proven" className="section-padding bg-oiltac-dark text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Tested & Proven in the Field</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">
            Validated in marine vessels, locomotives, heavy trucks, and factory boilers — with measurable results in efficiency, emissions, and engine condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
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
                "We've seen a consistent <strong>4% reduction in fuel consumption</strong> and significant improvement in engine cleanliness during inspections."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Maritime Fleet Manager</p>
                  <p className="text-sm text-white/90">Intl. Shipping Co.</p>
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
                "Validated through independent lab testing in Japan, OILTAC showed clear improvements in combustion stability, reduced black smoke, and cleaner injectors — all without modifying the engine. <strong>The diesel particulate filter remained visibly cleaner throughout the test cycle.</strong>"
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Third-Party Lab Report</p>
                  <p className="text-sm text-white/90">Japan Vehicle Performance Testing Center</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Injector Condition - Before & After Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-4">
            📸 Injector Condition – Before &amp; After
          </h3>
          <p className="text-lg text-center text-white/90 mb-8 max-w-2xl mx-auto">
            The following images show real injector tips from the lab test: one using untreated fuel, and the other after 100 hours on OILTAC-treated fuel.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src="/lovable-uploads/bb1c2fd7-8f99-4a4f-b75e-6676b4d8f1d6.png" 
                alt="Injection nozzle with untreated fuel showing buildup and deposits"
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <p className="text-white font-semibold">Before: Untreated Fuel</p>
              <p className="text-white/80 text-sm">Heavy carbon buildup and deposits</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/4db4bbe7-3f15-4c74-884e-22c85bbc6e50.png" 
                alt="Clean injection nozzle after 100 hours with OILTAC treatment"
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <p className="text-white font-semibold">After: 100 Hours with OILTAC</p>
              <p className="text-white/80 text-sm">Visibly cleaner with minimal deposits</p>
            </div>
          </div>
        </div>

        {/* Exhaust and Suction Valves - Before & After Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-4">
            🔧 Exhaust &amp; Suction Valves – Before &amp; After
          </h3>
          <p className="text-lg text-center text-white/90 mb-8 max-w-2xl mx-auto">
            Additional evidence from the same test showing the difference in valve condition with and without OILTAC treatment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src="/lovable-uploads/bfcdc605-dad6-4446-a1b8-2a0e64d213ac.png" 
                alt="Exhaust and suction valves comparison showing untreated vs OILTAC treated"
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <p className="text-white font-semibold">Before: Exhaust Valves</p>
              <p className="text-white/80 text-sm">Untreated</p>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/0bf9ee34-9b9a-4ae9-a90c-e53b874a17fc.png" 
                alt="Suction valves comparison showing cleaner condition with OILTAC treatment"
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <p className="text-white font-semibold">After: Exhaust Valves</p>
              <p className="text-white/80 text-sm">Treated with OILTAC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
