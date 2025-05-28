
import { AlertTriangle, Shield, ThermometerSun, Droplets, Eye, Wind, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MSDS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-oiltac-dark mb-4">
              Material Safety Data Sheet
            </h1>
            <div className="text-2xl font-semibold text-oiltac-copper mb-2">
              OILTAC Fuel Additive
            </div>
            <div className="text-gray-600">
              Document Version: 2.1 | Issue Date: January 2024 | Review Date: January 2025
            </div>
          </div>

          {/* Product Identification */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-oiltac-copper" size={24} />
                Section 1: Product Identification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Product Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Product Name:</strong> OILTAC Fuel Additive</p>
                    <p><strong>Chemical Name:</strong> Plant-based enzyme fuel catalyst</p>
                    <p><strong>Product Code:</strong> OTC-001</p>
                    <p><strong>CAS Number:</strong> Not applicable (proprietary blend)</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Manufacturer</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Company:</strong> OILTAC Technologies</p>
                    <p><strong>Address:</strong> Available upon request</p>
                    <p><strong>Phone:</strong> Available upon request</p>
                    <p><strong>Email:</strong> info@oiltacfuel.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hazard Identification */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <AlertTriangle className="mr-2 text-orange-500" size={24} />
                Section 2: Hazard Identification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm"><strong>Classification:</strong> Combustible liquid</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Physical Hazards</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Combustible liquid and vapor</li>
                    <li>May form explosive mixtures with air</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Health Hazards</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>May cause mild skin irritation</li>
                    <li>May cause eye irritation</li>
                    <li>Harmful if swallowed in large quantities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Physical Properties */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <ThermometerSun className="mr-2 text-red-500" size={24} />
                Section 3: Physical & Chemical Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Appearance</p>
                    <p className="text-sm">Clear to amber liquid</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Odor</p>
                    <p className="text-sm">Mild petroleum-like</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">pH</p>
                    <p className="text-sm">6.5 - 7.5</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Flash Point</p>
                    <p className="text-sm text-red-600">62.5°C (144.5°F)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Ignition Point</p>
                    <p className="text-sm text-red-600">240°C (464°F)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Specific Gravity</p>
                    <p className="text-sm">0.85 - 0.95</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Viscosity</p>
                    <p className="text-sm">2-5 cSt @ 40°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Solubility</p>
                    <p className="text-sm">Miscible with fuels</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vapor Pressure</p>
                    <p className="text-sm">Low</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Measures */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* First Aid */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-oiltac-dark flex items-center">
                  <Eye className="mr-2 text-blue-500" size={20} />
                  Section 4: First Aid Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Eye Contact</p>
                    <p className="text-sm">Flush with clean water for 15 minutes. Seek medical attention if irritation persists.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Skin Contact</p>
                    <p className="text-sm">Wash with soap and water. Remove contaminated clothing.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Inhalation</p>
                    <p className="text-sm">Move to fresh air. Seek medical attention if symptoms persist.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Ingestion</p>
                    <p className="text-sm">Do not induce vomiting. Seek immediate medical attention.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fire Fighting */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-oiltac-dark flex items-center">
                  <Droplets className="mr-2 text-red-500" size={20} />
                  Section 5: Fire Fighting Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Suitable Extinguishing Media</p>
                    <p className="text-sm">Foam, dry chemical, CO2, water spray</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Unsuitable Media</p>
                    <p className="text-sm">Direct water stream</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Special Hazards</p>
                    <p className="text-sm">May produce toxic gases when heated</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Protection</p>
                    <p className="text-sm">Use self-contained breathing apparatus</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Handling & Storage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Wind className="mr-2 text-green-500" size={24} />
                Section 6: Handling & Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Safe Handling</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Use only with adequate ventilation</li>
                    <li>Avoid contact with eyes and skin</li>
                    <li>Keep away from heat, sparks, and open flames</li>
                    <li>Use explosion-proof electrical equipment</li>
                    <li>Ground and bond containers during transfer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Storage Conditions</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Store in cool, dry, well-ventilated area</li>
                    <li>Keep containers tightly closed</li>
                    <li>Store away from incompatible materials</li>
                    <li>Temperature range: 5°C to 35°C</li>
                    <li>Protect from direct sunlight</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-purple-500" size={24} />
                Section 7: Personal Protective Equipment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-4 mb-2">
                    <Eye className="mx-auto text-blue-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Eye Protection</p>
                  <p className="text-xs">Safety glasses or goggles</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-4 mb-2">
                    <Shield className="mx-auto text-green-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Hand Protection</p>
                  <p className="text-xs">Chemical resistant gloves</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-4 mb-2">
                    <Wind className="mx-auto text-purple-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Respiratory</p>
                  <p className="text-xs">When ventilation inadequate</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-50 rounded-lg p-4 mb-2">
                    <Shield className="mx-auto text-orange-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Clothing</p>
                  <p className="text-xs">Chemical resistant apron</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Phone className="mr-2 text-red-500" size={24} />
                Section 8: Emergency Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="text-center">
                  <p className="font-semibold text-lg mb-2">24-Hour Emergency Response</p>
                  <p className="text-sm mb-1"><strong>CHEMTREC:</strong> 1-800-424-9300 (US)</p>
                  <p className="text-sm mb-1"><strong>International:</strong> +1-703-527-3887</p>
                  <p className="text-sm"><strong>Product Information:</strong> info@oiltacfuel.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="text-center">
            <a 
              href="/"
              className="inline-flex items-center px-8 py-3 bg-oiltac-copper text-white font-semibold rounded-lg hover:bg-oiltac-copper/90 transition-colors shadow-lg"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSDS;
