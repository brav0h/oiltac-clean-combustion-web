
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
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Classifications</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Flammable liquid - Category 3</li>
                  <li>Aspiration Hazard - Category 1</li>
                  <li>Skin Irritant - Category 2</li>
                  <li>Specific Target Organ Toxicity (Single Exposure) - Category 3</li>
                  <li>Chronic Aquatic Toxicity - Category 2</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center">
                <div className="bg-red-600 text-white p-2 rounded mr-4">
                  <AlertTriangle size={24} />
                </div>
                <p className="text-sm font-semibold text-red-800">Signal Word: DANGER</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Hazard Statements</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Flammable liquid and vapor</li>
                    <li>May be fatal if swallowed and enters airways - do not siphon by mouth</li>
                    <li>Causes skin irritation. Repeated or prolonged skin contact can cause skin irritation and dermatitis</li>
                    <li>May cause drowsiness or dizziness by inhalation</li>
                    <li>May cause irritation of respiratory system</li>
                    <li>Toxic to aquatic life with long lasting effects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Precautionary Statements - Prevention</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Keep away from heat, sparks, open flames, welding and hot surfaces</li>
                    <li>No smoking</li>
                    <li>Keep container capped. Keep away from heat and sources of ignition</li>
                    <li>Use explosion-proof electric apparatus and non-sparking tools</li>
                    <li>Provide antistatic measures. Do earth, if transferred to other containers</li>
                    <li>Use chemical safety goggles. Full face shield. Lab coat. Gloves. Boots. Vapor respirator</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Hazardous Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-oiltac-dark flex items-center">
                <FileText className="mr-2 text-blue-500" size={24} />
                Section 3: Hazardous Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Component</th>
                      <th className="border border-gray-300 p-2 text-left">CAS No.</th>
                      <th className="border border-gray-300 p-2 text-left">Weight%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Iso-paraffins</td>
                      <td className="border border-gray-300 p-2">Not applicable</td>
                      <td className="border border-gray-300 p-2">98 %</td>
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
                  <h4 className="font-semibold mb-2">Inhalation</h4>
                  <p className="text-sm">If inhaled, remove to fresh air and give a rest. If not breathing, give artificial respiration. If breathing is difficult, give oxygen. Get medical attention immediately.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skin Contact</h4>
                  <p className="text-sm">If contacted on skin, immediately wash and rinse thoroughly with soap and water. Cover the irritated skin with an emollient and get medical attention. Remove contaminated clothing and shoes. Wash clothing before reuse.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Eye Contact</h4>
                  <p className="text-sm">If contacted in eyes, check for and remove any contact lenses. Immediately flush eyes with plenty of water for at least 15 minutes. In case eye irritation continues, get medical attention.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ingestion</h4>
                  <p className="text-sm">If swallowed, do not induce vomiting, unless directed to do so by medical personnel. Never give anything by mouth to an unconscious person. Loosen tight clothing such as a collar, tie, belt or waistband. Get medical attention immediately.</p>
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
                  <h4 className="font-semibold mb-2">Extinguishing Media</h4>
                  <p className="text-sm">Foam, dry chemical, carbon dioxide and water spray (fog)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Special Fire Fighting Procedures</h4>
                  <p className="text-sm">Use extinguish/cooling with fires. Use water to keep fire-exposed containers cool. Minimize breathing of gases, vapor, fumes or decomposition products. Use supplied-air breathing equipment for enclosed or con fined spaces or as otherwise needed.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Unusual Fire and Explosion Hazards</h4>
                  <p className="text-sm">Empty metal containers retain residue and can be dangerous. Do not pressurize, cut, weld, braze, solder, drill, grind or expose such containers to heat, flame, sparks or other sources of ignition.</p>
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
                  <h4 className="font-semibold mb-2">Personal Precautions</h4>
                  <p className="text-sm">ACTIVATE FACILITY'S SPILL CONTINGENCY OR EMERGENCY RESPONSE PLAN if applicable. Consider wind direction, stay upwind and uphill, if possible. Evacuate nonessential personnel and remove or secure all ignition sources. Evaluate the direction of product travel, ditching, bermed, etc. to contain spill areas. Spills may infiltrate subsurface soil and groundwater; professional assistance may be necessary to determine the extent of subsurface impact.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environmental Precautions</h4>
                  <p className="text-sm">Carefully contain and stop the source of the spill, if safe to do so. Protect bodies of water by diking absorbents, or absorbent boom, if possible. Do not flush down sewer or drainage systems, unless system is designed and permitted to handle such material. The use of fire fighting foam may be useful in certain situations to reduce vapors. The proper use of water spray may effectively disperse product vapors or the liquid itself, preventing contact with ignition sources or areas/equipment that require protection.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Methods for Cleaning Up</h4>
                  <p className="text-sm">Take up spill sand or oil absorbing materials. Carefully shovel, scoop or sweep up into a waste container for reclamation or disposal – caution, flammable vapors may accumulate in closed containers. Response and cleanup crew must be properly trained and must utilize proper protective equipment (see Section 8).</p>
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
                  <h4 className="font-semibold mb-2">Precautions for Safe Handling</h4>
                  <p className="text-sm">Keep away from fire, sparks and surfaces. No smoking near areas where material is stored or handled. The product should only be stored and handled in areas with intrinsically safe electrical apparatus. Hydrocarbon liquids including this product can act as a non-conductive flammable liquid (or static accumulator), and may form ignitable vapor-air mixtures in storage tank or other containers. Precautions to prevent static-initiated fire or explosion during transfer, storage or handling, include but are not limited to these examples: (1) Ground and bond containers during product transfers. Grounding and bonding may not be adequate protection to prevent ignition or explosion of hydrocarbon liquids and vapors that are static accumulators. (2) Special slow load procedures for "switch loading" must be followed to avoid the static ignition hazard that can exist when higher flash point material (such as fuel oil or diesel) is loaded into tanks previously containing low flash point products (such gasoline or naphtha). (3) Storage tank level floats must be effectively bonded.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conditions for Safe Storage</h4>
                  <p className="text-sm">Keep away from heat, sparks, excessive temperatures and open flame. Use approved storage containers. Keep containers closed and clearly labeled. Empty or partially full product containers or vessels may contain explosive vapors. Do not pressurize, cut, heat, weld or expose containers to sources of ignition. Store in a well-ventilated area. Keep away from food, drink and animal feed. Incompatible with oxidizing agents. Incompatible with acids. Emergency eye wash capability should be available in the near proximity to operations presenting a potential splash exposure.</p>
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
                <h4 className="font-semibold mb-3">Exposure Guidelines</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">List</th>
                        <th className="border border-gray-300 p-2 text-left">Components</th>
                        <th className="border border-gray-300 p-2 text-left">CAS No.</th>
                        <th className="border border-gray-300 p-2 text-left">Type</th>
                        <th className="border border-gray-300 p-2 text-left">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">ACGIH</td>
                        <td className="border border-gray-300 p-2">Iso-paraffins</td>
                        <td className="border border-gray-300 p-2">Not applicable</td>
                        <td className="border border-gray-300 p-2">TLV-TWA</td>
                        <td className="border border-gray-300 p-2">200 mg/m³</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Engineering Measures</h4>
                <p className="text-sm">Use adequate ventilation to keep gas and vapor concentrations of this product below occupational exposure and flammable limits, particularly in confined spaces. Use only intrinsically safe electrical equipment approved for use in classified areas. Emergency eye wash capability should be available in the vicinity of any potential splash exposure.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Eye Protection</h4>
                  <p className="text-sm">Goggles and face shield as needed to prevent eye and face contact.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hand Protection</h4>
                  <p className="text-sm">Gloves constructed of nitrile, neoprene, or PVC are recommended</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skin and Body Protection</h4>
                  <p className="text-sm">A NIOSH/MSHA-approved air-purifying respirator with organic vapor cartridges or canister may be permissible under certain circumstances where airborne concentrations are or may be expected to exceed exposure limits or for odor or irritation. Protection provided by air-purifying respirators is limited. Refer to OSHA 29 CFR 1910.134, ANSI Z88.2-1992, NIOSH Respirator Decision Logic, and the manufacturer for additional guidance on respiratory protection selection. Use a NIOSH/MSHA-approved positive-pressure supplied-air respirator if there is a potential for uncontrolled release. Exposure levels are not known, in oxygen deficient atmospheres, or any other circumstances where air-purifying respirators may not provide adequate protection.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Work / Hygiene Practices</h4>
                  <p className="text-sm">Emergency eye wash capability should be available in the near proximity to operations presenting a potential splash exposure. Use good personal hygiene practices. Avoid repeated and/or prolonged skin exposure. Wash hands before eating, drinking, smoking or using toilet facilities. Do not use soap as a cleaning solvent on the skin. Do not use solvents or harsh abrasive skin cleaners for washing exposed skin. Waterless hand cleaners may be used when water is not available. Wash separately from other clothing. Discard clothing that can not be laundered effectively. Recommend laundering service personnel be informed of the potential presence of residues, and recommended practices to prevent the formation of flammable vapors which could ignite with weather reports. Consider the need to discard contaminated shoes and gloves.</p>
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
                    <p className="text-sm">0.1 - 1.0 ppm typically reported</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">pH</p>
                    <p className="text-sm">Not applicable</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Melting/Freezing Point</p>
                    <p className="text-sm">&lt; -40°C</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Initial Boiling Point & Range</p>
                    <p className="text-sm">150 - 370°C</p>
                  </div>
                </div>
                <div className="space-y-3">
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
                    <p className="text-sm">&lt; 0.35kPa (37.8°C)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vapor Density</p>
                    <p className="text-sm">4 - 5 (air=1)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Density</p>
                    <p className="text-sm">0.771g/cm³</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Water Solubility</p>
                    <p className="text-sm">Negligible</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Partition Coefficient (n-octanol/water)</p>
                    <p className="text-sm">-</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Ignition Point</p>
                    <p className="text-sm">240°C</p>
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
                  <p className="text-sm">Vapor may form explosive mixture with air. Hazardous polymerization does not occur.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Chemical Stability</h4>
                  <p className="text-sm">Stable under normal condition</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Possibility of Hazardous Reactions</h4>
                  <p className="text-sm">Can react with strong oxidizing agents, peroxides, acids and alkalis.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conditions to Avoid</h4>
                  <p className="text-sm">Avoid high temperatures, open flames, sparks, welding, smoking and other ignition sources. Ignition sources. Avoid static charge accumulation and discharge (see Section 7).</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hazardous Decomposition Products</h4>
                  <p className="text-sm">Ignition and burning can release carbon monoxide, carbon dioxide, non-combusted hydrocarbons (smoke) and, depending on formulation, trace amounts of sulfur dioxide. Diesel exhaust particles may be a lung hazard (see Section 11).</p>
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
                  <h4 className="font-semibold mb-2">Skin Irritation</h4>
                  <p className="text-sm">Irritation to skin. Repeated or prolonged contact can cause dryness, cracking and dermatitis. Liquid may be absorbed through skin in toxic amounts if large areas of the skin are repeatedly exposed.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Eye Irritation</h4>
                  <p className="text-sm">May cause eye irritation.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Inhalation</h4>
                  <p className="text-sm">Inhalation of vapor or mist may result in respiratory tract irritation and central nervous system effects including headache, dizziness, loss of balance and coordination, unconsciousness, coma, respiratory failure and death.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Chronic Exposure</h4>
                  <p className="text-sm">Similar products produced skin cancer and systemic toxicity in laboratory animals following repeated applications. The significance of these results to human exposure has not been determined.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Iso-paraffins Toxicity Data</h4>
                  <div className="text-sm space-y-1 ml-4">
                    <p><strong>Acute oral toxicity, LD₅₀ rat 4 hour:</strong></p>
                    <p>Dose: >5,000 mg/kg</p>
                    <p><strong>Acute dermal toxicity, LD₅₀ rabbit:</strong></p>
                    <p>Dose: >2,000 mg/kg</p>
                    <p><strong>Acute inhalation toxicity, LD₅₀ rat:</strong></p>
                    <p>Dose: >5mg/l</p>
                    <p>Exposure time: 4 h</p>
                    <p><strong>Skin irritation:</strong> Irritating to skin.</p>
                    <p>Result: Skin irritation</p>
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
                    <p><strong>Ecotoxicology:</strong> Unknown</p>
                    <p><strong>Environmental Residue:</strong> Unknown</p>
                  </div>
                </div>
                <div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Bioaccumulation:</strong> Unknown</p>
                    <p><strong>Movement in Underground Soil:</strong> Unknown</p>
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
                Waste must be disposed of in accordance with federal, state and local environmental control regulations.
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
              <p className="text-sm">Keep away from source of ignition. Follow all regulations in your country.</p>
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
                <p>• Industrial Safety and Health Law: Hazardous material, Indication / Information required material</p>
                <p>• Ship Safety Law: Inflammable liquid</p>
                <p>• Aviation Law: Inflammable liquid</p>
                <p>• Marine Pollution Prevention Law: Effluent control</p>
                <p>• Law for Promotion of Chemical Management: Class I designated chemical substance</p>
                <p>• Port Regulation Law: Inflammable liquid</p>
                <p>• Road Vehicles Act: Hazardous material, Explosive liquid</p>
                <p>• Sewerage Law: Effluent control of mineral oils</p>
                <p>• Water Pollution Control Law: Effluent control of oils</p>
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
                  The information provided in this Safety Data Sheet is correct to the best of our knowledge, information and belief at the date of its publication. The information relates only to the specific material designated and may not be valid for such material used in combination with any other materials or in any process, unless specified in the text.
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
