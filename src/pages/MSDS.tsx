import { AlertTriangle, Shield, ThermometerSun, Droplets, Eye, Wind, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MSDS = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-oiltac-dark mb-4">
              MATERIAL SAFETY DATA SHEET
            </h1>
            <div className="text-2xl font-semibold text-oiltac-copper mb-2">
              OILTAC-NP
            </div>
            <div className="text-lg text-gray-700 mb-2">
              Manufacturer: Fukasawa Chemical Laboratory Inc.
            </div>
            <div className="text-sm text-gray-600 mb-2">
              Tokyo, Japan
            </div>
            <div className="text-lg text-gray-700 mb-2">
              Distributed by: Chie Tsiang Enterprise
            </div>
            <div className="text-sm text-gray-600 mb-2">
              Authorized Distributor
            </div>
            <div className="text-sm text-gray-600 mb-2">
              info@oiltacfuel.com
            </div>
            <div className="text-sm text-gray-600">
              Date Issued: MAR. 1st, 2019
            </div>
          </div>

          {/* Section 1: Product and Company Identification */}
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
                  <h4 className="font-semibold mb-3">Product Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Product Name:</strong> OILTAC-NP</p>
                    <p><strong>Product Use Description:</strong> FUEL ADDITIVE</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Company Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Manufacturer:</strong> Fukasawa Chemical Laboratory Inc.</p>
                    <p><strong>Location:</strong> Tokyo, Japan</p>
                    <p><strong>Distributed by:</strong> Chie Tsiang Enterprise</p>
                    <p><strong>Contact:</strong> info@oiltacfuel.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Hazards Identification */}
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
                    <li>May be fatal if swallowed and enters airways - do not siphon by mouth</li>
                    <li>Causes skin irritation. Repeated or prolonged skin contact can cause dermatitis</li>
                    <li>May cause drowsiness or dizziness by inhalation</li>
                    <li>May cause irritation to respiratory system</li>
                    <li>Toxic to aquatic life with long lasting effects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Precautionary Statements - Prevention</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Keep away from heat, sparks, open flames, welding, and hot surfaces</li>
                    <li>No smoking</li>
                    <li>Keep container capped. Keep away from heat and sources of ignition</li>
                    <li>Use explosion-proof electric apparatus and non-sparking tools</li>
                    <li>Provide antistatic measures. Do earth if transferred to other containers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Accidental Release Measures */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" size={24} />
                Section 6: Accidental Release Measures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Personal Precautions</h4>
                  <div className="text-sm space-y-1">
                    <p>Activate emergency response plan. Stay upwind and evacuate non-essential personnel. Eliminate ignition sources. Prevent product from entering sewers or waterways.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Environmental Precautions</h4>
                  <div className="text-sm space-y-1">
                    <p>Contain spills. Avoid contamination of water sources. Use foam or water spray to suppress vapors.</p>
                  </div>
                  <h4 className="font-semibold mb-3 mt-4">Methods for Cleaning Up</h4>
                  <div className="text-sm space-y-1">
                    <p>Use absorbent materials. Scoop into suitable waste container. Ensure proper PPE is worn.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Handling and Storage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Wind className="mr-2 text-green-500" size={24} />
                Section 7: Handling and Storage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Precautions for Safe Handling</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Keep away from heat and open flame</li>
                    <li>Ground/bond containers. Use non-sparking tools</li>
                    <li>Handle in well-ventilated areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Conditions for Safe Storage</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Store in cool, ventilated area away from oxidizers and acids</li>
                    <li>Keep container tightly closed</li>
                    <li>Avoid static discharge</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: Exposure Controls / Personal Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-purple-500" size={24} />
                Section 8: Exposure Controls / Personal Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Exposure Limits</h4>
                <p className="text-sm">TLV-TWA (ACGIH): 200 mg/m³ (iso-paraffins)</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Engineering Controls</h4>
                <p className="text-sm">Use local exhaust ventilation. Provide eyewash station nearby.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-4 mb-2">
                    <Eye className="mx-auto text-blue-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Eye Protection</p>
                  <p className="text-xs">Chemical safety goggles and full face shield</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-4 mb-2">
                    <Shield className="mx-auto text-green-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Hand Protection</p>
                  <p className="text-xs">Nitrile, neoprene, or PVC gloves</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-4 mb-2">
                    <Wind className="mx-auto text-purple-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Respiratory</p>
                  <p className="text-xs">NIOSH-approved vapor respirator when exposure limits are exceeded</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-50 rounded-lg p-4 mb-2">
                    <Shield className="mx-auto text-orange-600" size={32} />
                  </div>
                  <p className="font-semibold text-sm">Clothing</p>
                  <p className="text-xs">Lab coat, gloves, boots, vapor respirator</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 9: Physical and Chemical Properties */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <ThermometerSun className="mr-2 text-red-500" size={24} />
                Section 9: Physical and Chemical Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Appearance</p>
                    <p className="text-sm">Clear to straw colored liquid</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Odor</p>
                    <p className="text-sm">Characteristic petroleum or kerosene-like odor</p>
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
                    <p className="text-sm">&lt; -40°C</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Boiling Point & Range</p>
                    <p className="text-sm">150 - 370°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Flash Point</p>
                    <p className="text-sm text-red-600">62.5°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Upper Explosive Limit</p>
                    <p className="text-sm">7.0% (Vol.)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Lower Explosive Limit</p>
                    <p className="text-sm">1.0% (Vol.)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vapor Pressure</p>
                    <p className="text-sm">&lt; 0.35 kPa (37.8°C)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Vapor Density</p>
                    <p className="text-sm">4-5 (air = 1)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 10: Stability and Reactivity */}
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
                  <h4 className="font-semibold mb-3">Reactivity</h4>
                  <p className="text-sm mb-3">Vapors may form explosive mixtures with air. No hazardous polymerization expected.</p>
                  
                  <h4 className="font-semibold mb-3">Chemical Stability</h4>
                  <p className="text-sm mb-3">Stable under normal conditions.</p>
                  
                  <h4 className="font-semibold mb-3">Incompatible Materials</h4>
                  <p className="text-sm">Strong oxidizers, acids, alkalis.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Conditions to Avoid</h4>
                  <p className="text-sm mb-3">Heat, sparks, flames, static discharge.</p>
                  
                  <h4 className="font-semibold mb-3">Hazardous Decomposition Products</h4>
                  <p className="text-sm">Carbon monoxide, carbon dioxide, hydrocarbons, sulfur dioxide.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 11: Toxicological Information */}
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
                    <p><strong>Skin Irritation:</strong> Irritating. Repeated contact may cause dermatitis.</p>
                    <p><strong>Eye Irritation:</strong> May cause irritation.</p>
                    <p><strong>Inhalation:</strong> May cause dizziness, headache, respiratory irritation.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Chronic Effects & Toxicity Data</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Chronic Effects:</strong> Prolonged skin contact linked to cancer in lab animals.</p>
                    <p><strong>Oral Toxicity (LD₅₀, rat):</strong> &gt; 5,000 mg/kg</p>
                    <p><strong>Dermal Toxicity (LD₅₀, rabbit):</strong> &gt; 2,000 mg/kg</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 12: Ecological Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Droplets className="mr-2 text-blue-500" size={24} />
                Section 12: Ecological Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Ecotoxicity:</strong> Unknown</p>
                    <p><strong>Persistence and Degradability:</strong> Unknown</p>
                  </div>
                </div>
                <div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Bioaccumulative Potential:</strong> Unknown</p>
                    <p><strong>Mobility in Soil:</strong> Unknown</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 13: Disposal Considerations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <FileText className="mr-2 text-gray-500" size={24} />
                Section 13: Disposal Considerations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Dispose of in accordance with local, regional, national, and international regulations. Do not 
                release into the environment. Use licensed waste disposal contractors.
              </p>
            </CardContent>
          </Card>

          {/* Section 14: Transport Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Wind className="mr-2 text-blue-500" size={24} />
                Section 14: Transport Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Precautions</h4>
                  <p className="text-sm">Keep away from sources of ignition. Ensure proper labeling and containment.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Transport Regulations</h4>
                  <p className="text-sm">Comply with applicable domestic and international transport laws.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 15: Regulatory Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-green-500" size={24} />
                Section 15: Regulatory Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p>• Fire Defence Law: Hazardous material, Class 4 Petroleum No.2</p>
                <p>• Industrial Safety and Health Law: Indication required</p>
                <p>• Ship Safety Law / Aviation Law: Inflammable liquid</p>
                <p>• Marine Pollution Prevention Law: Effluent control</p>
                <p>• Chemical Management Law: Class 1 designated substance</p>
                <p>• Port Regulation Law / Road Vehicles Act: Explosive liquid</p>
                <p>• Sewerage / Water Pollution Control Law: Effluent control of oils</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 16: Other Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <FileText className="mr-2 text-gray-500" size={24} />
                Section 16: Other Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm">
                  This information is accurate to the best of our knowledge as of the date issued. It is intended 
                  only as guidance for safe handling and use. It does not constitute a warranty or guarantee.
                </p>
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
