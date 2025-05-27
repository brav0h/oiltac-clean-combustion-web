
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="proven" className="section-padding bg-oiltac-dark text-white">
      <div className="container-custom">
        <h2 className="section-title text-center text-white">Real Results From Real Companies</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">
            These aren't lab results. They're bank statements.
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
                "We saved $180,000 in fuel costs last quarter. OILTAC paid for itself in three weeks."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Captain Rodriguez</p>
                  <p className="text-sm text-white/90">Atlantic Shipping Lines</p>
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
                "Our locomotives run cleaner and stronger. Maintenance costs dropped 40%."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Mike Chen</p>
                  <p className="text-sm text-white/90">Pacific Rail Corp</p>
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
                "Emissions compliance achieved. No fines. No headaches. Just results."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">Sarah Williams</p>
                  <p className="text-sm text-white/90">Industrial Power Systems</p>
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
