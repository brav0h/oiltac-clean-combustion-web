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
              OILTAC-NP Fuel Additive
            </div>
            <div className="text-gray-600">
              Document Version: 2.1 | Issue Date: March 11, 2019 | Review Date: March 2025
            </div>
          </div>

          {/* Product Identification */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-oiltac-copper" size={24} />
                Section 1: Product and Company Identification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Product Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Product Name:</strong> OILTAC-NP</p>
                    <p><strong>Product Use Description:</strong> FUEL ADDITIVE</p>
                    <p><strong>Date Issued:</strong> MAR. 11, 2019</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Company Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Company:</strong> FUKASAWA CHEMICAL LABORATORY INC.</p>
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
                Section 2: Hazards Identification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-red-800 mb-2">Signal Word: DANGER</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Classifications</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Flammable Liquid - Category 3</li>
                  <li>Aspiration Hazard - Category 1</li>
                  <li>Skin Irritation - Category 2</li>
                  <li>Specific Target Organ Toxicity (Single Exposure) - Category 3</li>
                  <li>Chronic Aquatic Toxicity - Category 2</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Hazard Statements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Flammable liquid and vapor</li>
                    <li>May be fatal if swallowed and enters airways</li>
                    <li>Causes skin irritation and serious eye irritation</li>
                    <li>May cause drowsiness or dizziness</li>
                    <li>Toxic to aquatic life with long lasting effects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Precautionary Statements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Keep away from heat, sparks, open flames, welding, and hot surfaces</li>
                    <li>No smoking. Use explosion-proof electrical equipment</li>
                    <li>Wear protective gloves, clothing, and eye/face protection</li>
                    <li>Avoid release into the environment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Physical & Chemical Properties */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <ThermometerSun className="mr-2 text-red-500" size={24} />
                Section 9: Physical & Chemical Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Appearance</p>
                    <p className="text-sm">Clear to straw-colored liquid</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Odor</p>
                    <p className="text-sm">Characteristic petroleum or kerosene-like</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Odor Threshold</p>
                    <p className="text-sm">0.1 - 1.0 ppm</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">pH</p>
                    <p className="text-sm">Not applicable</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Melting/Freezing Point</p>
                    <p className="text-sm">< -20°C</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Initial Boiling Point</p>
                    <p className="text-sm">150 - 370°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Flash Point</p>
                    <p className="text-sm text-red-600">62°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Explosive Limits</p>
                    <p className="text-sm">Upper 7.0% (Vol.), Lower 1.0% (Vol.)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vapor Density</p>
                    <p className="text-sm">4 - 5 (air = 1)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Density</p>
                    <p className="text-sm">0.77 g/cm³</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Water Solubility</p>
                    <p className="text-sm">Negligible</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Partition Coefficient</p>
                    <p className="text-sm">Not determined</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Ignition Point</p>
                    <p className="text-sm text-red-600">240°C</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stability and Reactivity */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" size={24} />
                Section 10: Stability and Reactivity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Chemical Stability & Reactivity</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Vapor may form explosive mixture with air</li>
                    <li>Stable under normal conditions</li>
                    <li>Can react with strong oxidizers, peroxides, acids, and alkalis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Conditions to Avoid</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Heat, sparks, flame, smoking, and static discharge</li>
                  </ul>
                  <h4 className="font-semibold mb-3 mt-4">Hazardous Decomposition Products</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Carbon monoxide, CO2, hydrocarbons, sulfur dioxide</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toxicological Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Eye className="mr-2 text-purple-500" size={24} />
                Section 11: Toxicological Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Acute Effects</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Skin Irritation:</strong> Causes skin dryness, cracking, and dermatitis</p>
                    <p><strong>Eye Irritation:</strong> May cause eye irritation</p>
                    <p><strong>Inhalation:</strong> Vapors may affect respiratory system and central nervous system</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Chronic Effects</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Chronic Exposure:</strong> Long-term exposure may cause systemic toxicity in lab animals</p>
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

          {/* Other Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-gray-500" size={24} />
                Section 16: Other Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm">
                  The information herein is accurate to the best of our knowledge as of the date of issue. 
                  It is intended for safe handling, use, processing, transport, and disposal of the material. 
                  This does not constitute a warranty or quality specification.
                </p>
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
