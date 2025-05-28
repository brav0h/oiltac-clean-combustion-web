
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
              SAFETY DATA SHEET
            </h1>
            <div className="text-2xl font-semibold text-oiltac-copper mb-2">
              OILTAC-NP
            </div>
            <div className="text-lg text-gray-700 mb-2">
              Manufacturer: Fukasawa Chemical Laboratory Inc., Tokyo, Japan
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
              Date of issue: 2019-03-01 | Version: 1.0
            </div>
          </div>

          {/* GHS Classification Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <AlertTriangle className="mr-2 text-orange-500" size={24} />
                GHS Classification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Signal Word</h4>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center">
                    <div className="bg-red-600 text-white p-2 rounded mr-4">
                      <AlertTriangle size={24} />
                    </div>
                    <p className="text-sm font-semibold text-red-800">DANGER</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Hazard Categories</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Flammable liquids - Category 3</li>
                    <li>Aspiration hazard - Category 1</li>
                    <li>Skin corrosion/irritation - Category 2</li>
                    <li>Specific target organ toxicity (single exposure) - Category 3</li>
                    <li>Hazardous to the aquatic environment (chronic) - Category 2</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

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
                    <p><strong>Product Code:</strong> FC-801</p>
                    <p><strong>Product Use:</strong> Fuel additive</p>
                    <p><strong>Uses advised against:</strong> Uses other than those recommended</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Company Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Manufacturer:</strong> Fukasawa Chemical Laboratory Inc., Tokyo, Japan</p>
                    <p><strong>Distributed by:</strong> Chie Tsiang Enterprise</p>
                    <p><strong>Authorized Distributor</strong></p>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Hazard Statements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>H226: Flammable liquid and vapour</li>
                    <li>H304: May be fatal if swallowed and enters airways</li>
                    <li>H315: Causes skin irritation</li>
                    <li>H336: May cause drowsiness or dizziness</li>
                    <li>H411: Toxic to aquatic life with long lasting effects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Precautionary Statements</h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="font-medium text-sm">Prevention:</h5>
                      <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                        <li>P210: Keep away from heat, hot surfaces, sparks, open flames and other ignition sources. No smoking</li>
                        <li>P233: Keep container tightly closed</li>
                        <li>P240: Ground and bond container and receiving equipment</li>
                        <li>P241: Use explosion-proof electrical equipment</li>
                        <li>P242: Use non-sparking tools</li>
                        <li>P243: Take action to prevent static discharges</li>
                        <li>P261: Avoid breathing mist/vapours</li>
                        <li>P264: Wash hands thoroughly after handling</li>
                        <li>P271: Use only outdoors or in a well-ventilated area</li>
                        <li>P273: Avoid release to the environment</li>
                        <li>P280: Wear protective gloves/protective clothing/eye protection/face protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-sm mb-2">Response:</h5>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>P301+P310: IF SWALLOWED: Immediately call a POISON CENTER/doctor</li>
                    <li>P331: Do NOT induce vomiting</li>
                    <li>P302+P352: IF ON SKIN: Wash with plenty of water</li>
                    <li>P304+P340: IF INHALED: Remove person to fresh air and keep comfortable for breathing</li>
                    <li>P312: Call a POISON CENTER/doctor if you feel unwell</li>
                    <li>P370+P378: In case of fire: Use foam, dry chemical, carbon dioxide, water spray for extinction</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-2">Storage & Disposal:</h5>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>P403+P235: Store in a well-ventilated place. Keep cool</li>
                    <li>P405: Store locked up</li>
                    <li>P501: Dispose of contents/container in accordance with local regulations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Composition/Information on Ingredients */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <FileText className="mr-2 text-blue-500" size={24} />
                Section 3: Composition/Information on Ingredients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Component</th>
                      <th className="border border-gray-300 p-2 text-left">CAS-No.</th>
                      <th className="border border-gray-300 p-2 text-left">EC-No.</th>
                      <th className="border border-gray-300 p-2 text-left">Concentration (%)</th>
                      <th className="border border-gray-300 p-2 text-left">Classification (GHS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Distillates (petroleum), hydrotreated light</td>
                      <td className="border border-gray-300 p-2">64742-47-8</td>
                      <td className="border border-gray-300 p-2">265-149-8</td>
                      <td className="border border-gray-300 p-2">90 - 100</td>
                      <td className="border border-gray-300 p-2">Flam. Liq. 3; H226<br/>Asp. Tox. 1; H304<br/>STOT SE 3; H336</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: First Aid Measures */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Eye className="mr-2 text-green-500" size={24} />
                Section 4: First Aid Measures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">General advice</h4>
                  <p className="text-sm">Show this safety data sheet to the doctor in attendance. Immediate medical attention is required.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">If inhaled</h4>
                  <p className="text-sm">Remove person to fresh air and keep comfortable for breathing. Call a POISON CENTER or doctor if you feel unwell.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">In case of skin contact</h4>
                  <p className="text-sm">Wash with plenty of soap and water. If skin irritation occurs: Get medical advice/attention. Take off contaminated clothing and wash it before reuse.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">In case of eye contact</h4>
                  <p className="text-sm">Rinse cautiously with water for several minutes. Remove contact lenses, if present and easy to do. Continue rinsing. If eye irritation persists: Get medical advice/attention.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">If swallowed</h4>
                  <p className="text-sm">Immediately call a POISON CENTER or doctor. Do NOT induce vomiting. If vomiting occurs naturally, place person in recovery position and seek medical attention.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Most important symptoms and effects, both acute and delayed</h4>
                  <p className="text-sm">May cause drowsiness or dizziness. May be fatal if swallowed and enters airways. Causes skin irritation.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Indication of immediate medical attention and special treatment needed</h4>
                  <p className="text-sm">Treat symptomatically.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Fire-Fighting Measures */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <ThermometerSun className="mr-2 text-red-500" size={24} />
                Section 5: Fire-Fighting Measures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Extinguishing media</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>Suitable:</strong> Foam, dry chemical, carbon dioxide (CO₂), water spray</p>
                    <p><strong>Unsuitable:</strong> Full water jet</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Special hazards arising from the substance or mixture</h4>
                  <p className="text-sm">Flammable liquid and vapour. In case of fire, toxic gases may be formed. May form explosive vapor-air mixture.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Advice for firefighters</h4>
                  <p className="text-sm">Wear self-contained breathing apparatus and full protective clothing. Cool containers with water spray. Collect contaminated fire extinguishing water separately.</p>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal precautions, protective equipment and emergency procedures</h4>
                  <p className="text-sm">Remove all sources of ignition. Ensure adequate ventilation. Use personal protective equipment. Avoid breathing vapors.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environmental precautions</h4>
                  <p className="text-sm">Do not allow to enter waterways, sewers or soil. Avoid release to the environment.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Methods and material for containment and cleaning up</h4>
                  <p className="text-sm">Contain spillage with sand, earth or vermiculite. Collect mechanically. Store in suitable, closed containers for disposal.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reference to other sections</h4>
                  <p className="text-sm">See Section 7 for information on safe handling. See Section 8 for information on personal protection equipment. See Section 13 for disposal information.</p>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Precautions for safe handling</h4>
                  <p className="text-sm">Avoid contact with skin and eyes. Avoid breathing mist/vapours. Use only outdoors or in a well-ventilated area. Keep away from sources of ignition - No smoking. Take action to prevent static discharges. Ground and bond container and receiving equipment.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conditions for safe storage, including any incompatibilities</h4>
                  <p className="text-sm">Store in a well-ventilated place. Keep cool. Keep container tightly closed. Store locked up. Keep away from heat, hot surfaces, sparks, open flames and other ignition sources.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specific end use(s)</h4>
                  <p className="text-sm">Fuel additive. Follow technical data sheet recommendations.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: Exposure Controls/Personal Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <Shield className="mr-2 text-purple-500" size={24} />
                Section 8: Exposure Controls/Personal Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Control parameters</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">Component</th>
                        <th className="border border-gray-300 p-2 text-left">CAS-No.</th>
                        <th className="border border-gray-300 p-2 text-left">Value type</th>
                        <th className="border border-gray-300 p-2 text-left">Value</th>
                        <th className="border border-gray-300 p-2 text-left">Basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Distillates (petroleum), hydrotreated light</td>
                        <td className="border border-gray-300 p-2">64742-47-8</td>
                        <td className="border border-gray-300 p-2">TWA</td>
                        <td className="border border-gray-300 p-2">200 mg/m³</td>
                        <td className="border border-gray-300 p-2">ACGIH</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Exposure controls</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm">Appropriate engineering controls</h5>
                    <p className="text-sm">Use only with adequate ventilation. Local exhaust ventilation may be necessary.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">Personal protective equipment</h5>
                    <div className="ml-4 space-y-2 text-sm">
                      <p><strong>Eye/face protection:</strong> Safety glasses with side shields</p>
                      <p><strong>Skin protection:</strong> Chemical resistant gloves (Nitrile rubber, Neoprene)</p>
                      <p><strong>Respiratory protection:</strong> When workplace exposure limits may be exceeded, use approved respirator</p>
                      <p><strong>Thermal hazards:</strong> Not applicable</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">Environmental exposure controls</h5>
                    <p className="text-sm">Do not allow to enter waterways, sewers or soil.</p>
                  </div>
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
                    <p className="font-semibold text-sm">Physical state</p>
                    <p className="text-sm">Liquid</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Colour</p>
                    <p className="text-sm">Clear to straw</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Odour</p>
                    <p className="text-sm">Characteristic petroleum odour</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Odour threshold</p>
                    <p className="text-sm">No data available</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">pH</p>
                    <p className="text-sm">Not applicable</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Melting point/freezing point</p>
                    <p className="text-sm">&lt; -40°C</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Initial boiling point and boiling range</p>
                    <p className="text-sm">150 - 370°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Flash point</p>
                    <p className="text-sm text-red-600">&gt; 62°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Evaporation rate</p>
                    <p className="text-sm">No data available</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Flammability (solid, gas)</p>
                    <p className="text-sm">Not applicable</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Upper/lower flammability or explosive limits</p>
                    <p className="text-sm">Lower: ~1% Upper: ~7%</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vapour pressure</p>
                    <p className="text-sm">&lt; 0.35 kPa at 37.8°C</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Vapour density</p>
                    <p className="text-sm">4 - 5 (air = 1)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Relative density</p>
                    <p className="text-sm">0.77 g/cm³ at 15°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Solubility(ies)</p>
                    <p className="text-sm">Water: Negligible</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Partition coefficient: n-octanol/water</p>
                    <p className="text-sm">{'>'}3</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Auto-ignition temperature</p>
                    <p className="text-sm">{'>'}240°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Decomposition temperature</p>
                    <p className="text-sm">No data available</p>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Reactivity</h4>
                  <p className="text-sm">No dangerous reaction known under conditions of normal use.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Chemical stability</h4>
                  <p className="text-sm">Stable under normal conditions.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Possibility of hazardous reactions</h4>
                  <p className="text-sm">None under normal processing.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conditions to avoid</h4>
                  <p className="text-sm">Heat, flames and sparks. Static discharge.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Incompatible materials</h4>
                  <p className="text-sm">Strong oxidizing agents.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hazardous decomposition products</h4>
                  <p className="text-sm">Carbon monoxide, carbon dioxide, smoke and irritating vapours as products of incomplete combustion.</p>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Information on toxicological effects</h4>
                  <div className="space-y-3 ml-4">
                    <div>
                      <h5 className="font-medium text-sm">Acute toxicity</h5>
                      <div className="text-sm space-y-1 ml-2">
                        <p><strong>Oral:</strong> LD₅₀ rat: &gt; 5000 mg/kg</p>
                        <p><strong>Dermal:</strong> LD₅₀ rabbit: &gt; 2000 mg/kg</p>
                        <p><strong>Inhalation:</strong> LC₅₀ rat (4 h): &gt; 5 mg/l</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Skin corrosion/irritation</h5>
                      <p className="text-sm ml-2">Causes skin irritation.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Serious eye damage/irritation</h5>
                      <p className="text-sm ml-2">May cause eye irritation.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Respiratory or skin sensitisation</h5>
                      <p className="text-sm ml-2">No data available.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Germ cell mutagenicity</h5>
                      <p className="text-sm ml-2">No data available.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Carcinogenicity</h5>
                      <p className="text-sm ml-2">No data available.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Reproductive toxicity</h5>
                      <p className="text-sm ml-2">No data available.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">STOT-single exposure</h5>
                      <p className="text-sm ml-2">May cause drowsiness or dizziness.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">STOT-repeated exposure</h5>
                      <p className="text-sm ml-2">No data available.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">Aspiration hazard</h5>
                      <p className="text-sm ml-2">May be fatal if swallowed and enters airways.</p>
                    </div>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Toxicity</h4>
                  <p className="text-sm">Toxic to aquatic life with long lasting effects.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Persistence and degradability</h4>
                  <p className="text-sm">No data available.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bioaccumulative potential</h4>
                  <p className="text-sm">No data available.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mobility in soil</h4>
                  <p className="text-sm">No data available.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results of PBT and vPvB assessment</h4>
                  <p className="text-sm">PBT/vPvB assessment not available.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other adverse effects</h4>
                  <p className="text-sm">No data available.</p>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Waste treatment methods</h4>
                  <p className="text-sm">Dispose of in accordance with local regulations. Recommended method: Incineration in a licensed facility.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contaminated packaging</h4>
                  <p className="text-sm">Empty containers should be taken to an approved waste handling site for recycling or disposal.</p>
                </div>
              </div>
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
                  <div className="space-y-2 text-sm">
                    <p><strong>UN number:</strong> 1268</p>
                    <p><strong>UN proper shipping name:</strong> PETROLEUM DISTILLATES, N.O.S.</p>
                    <p><strong>Transport hazard class(es):</strong> 3</p>
                    <p><strong>Packing group:</strong> III</p>
                  </div>
                </div>
                <div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Environmental hazards:</strong> Marine pollutant</p>
                    <p><strong>Special precautions for user:</strong> None specified</p>
                    <p><strong>Transport in bulk according to IMO instruments:</strong> Not applicable</p>
                  </div>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Safety, health and environmental regulations/legislation specific for the substance or mixture</h4>
                  <div className="text-sm space-y-1">
                    <p>• Industrial Safety and Health Law (Japan): Notifiable substance</p>
                    <p>• Fire Service Law (Japan): Class 4 petroleum (Category 2)</p>
                    <p>• Chemical Substances Control Law (Japan): Not regulated</p>
                    <p>• Poisonous and Deleterious Substances Control Law (Japan): Not regulated</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Chemical safety assessment</h4>
                  <p className="text-sm">No chemical safety assessment has been carried out.</p>
                </div>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Further information</h4>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm">
                      This safety data sheet is based on the properties of the material as supplied. Information contained in this publication or as otherwise supplied to Users is believed to be accurate and is given in good faith, but it is for the Users to satisfy themselves of the suitability of the material for their own particular purpose. OILTAC gives no warranty as to the fitness of the material for any particular purpose and any implied warranty or condition (statutory or otherwise) is excluded except to the extent that exclusion is prevented by law.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Training advice</h4>
                  <p className="text-sm">Regular training of employees in safe handling and emergency procedures is recommended.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Abbreviations and acronyms</h4>
                  <div className="text-sm space-y-1">
                    <p>ADR: European Agreement concerning the International Carriage of Dangerous Goods by Road</p>
                    <p>CAS: Chemical Abstracts Service</p>
                    <p>EINECS: European Inventory of Existing Commercial Chemical Substances</p>
                    <p>GHS: Globally Harmonized System of Classification and Labelling of Chemicals</p>
                    <p>IATA: International Air Transport Association</p>
                    <p>IMDG: International Maritime Dangerous Goods</p>
                    <p>OECD: Organisation for Economic Co-operation and Development</p>
                  </div>
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
