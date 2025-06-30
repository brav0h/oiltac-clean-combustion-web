
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - OILTAC</title>
        <meta name="description" content="Privacy Policy for OILTAC fuel additive technology." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <a href="/" className="text-2xl font-display font-bold mb-6 inline-block">
                <span className="text-oiltac-dark">OIL</span><span className="text-oiltac-copper">TAC</span>
              </a>
              <h1 className="text-4xl font-bold text-oiltac-dark mb-4">Privacy Policy</h1>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-oiltac-dark mb-4">
                  Privacy Policy Content
                </h2>
                <p className="text-gray-600 mb-4">
                  This section is ready for your Termly privacy policy script.
                </p>
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500 text-lg mb-2">Termly Privacy Policy</p>
                    <p className="text-gray-400 text-sm">
                      Paste your Termly script or HTML content here
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/" 
                className="inline-flex items-center text-oiltac-copper hover:text-oiltac-dark transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
