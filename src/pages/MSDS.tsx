
const MSDS = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-oiltac-dark mb-8 text-center">
            Material Safety Data Sheet
          </h1>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/96165fa3-bac7-4ee2-8f93-62262554b982.png"
              alt="OILTAC Material Safety Data Sheet"
              className="w-full h-auto"
            />
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-oiltac-copper text-white font-semibold rounded-lg hover:bg-oiltac-copper/90 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold text-oiltac-dark mb-4">Important Safety Information</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Keep away from heat, sparks, open flames, and hot surfaces</li>
              <li>• Use explosion-proof electrical equipment</li>
              <li>• Wear protective gloves and eye protection</li>
              <li>• Store in a well-ventilated place</li>
              <li>• Flash point: 62.5°C</li>
              <li>• Ignition point: 240°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSDS;
