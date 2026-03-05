import { Button } from "@/components/ui/button";
import { Check, AlertTriangle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-oiltac-works" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title flex items-center justify-center gap-3">
            <span className="text-4xl">🧬</span>
            How OILTAC Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Not all fuel additives are created equal.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Unlike traditional chemical additives that modify fuel properties directly, OILTAC uses plant-based enzymes that stay dormant in the fuel until combustion begins. At ignition, these enzymes activate and catalyze a cleaner, more complete burn — unlocking more energy from every drop of fuel within your existing fuel system.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <span className="text-2xl">🔥</span>
            Enzyme Additive vs. Chemical Additive
          </h3>
          
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Comparison Factor</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg">🧪</span>
                        Chemical Additives
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg">🌱</span>
                        OILTAC Enzyme Additive
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Works within your existing fuel system — no compatibility modifications needed</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <AlertTriangle size={20} />
                        <span>No</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>Yes</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Activates during combustion — no pre-treatment or fuel system changes required</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>Before</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>Activates during combustion only</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Impacts OEM compliance</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <AlertTriangle size={20} />
                        <span>Sometimes</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>OEM-safe</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Leaves chemical residue</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <AlertTriangle size={20} />
                        <span>Possible</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>None</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tested via fuel analysis</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>Yes</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <AlertTriangle size={20} />
                        <span>No (effect seen post-combustion)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Fuel compatibility</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <AlertTriangle size={20} />
                        <span>Limited</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>Diesel, gas oil, and heavy fuel oil (bunker A/C blend) — VLSFO/ULSFO under evaluation</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Compatible without affecting fuel compliance or engine performance</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <AlertTriangle size={20} />
                        <span>Depends on fuel type</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-green-600">
                        <Check size={20} />
                        <span>Yes (diesel, gas oil, HFO)</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-lg">🧪</span>
                Chemical Additives
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Works within your existing fuel system — no compatibility modifications needed</span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <AlertTriangle size={16} />
                    <span className="text-sm">No</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Activates during combustion — no pre-treatment or fuel system changes required</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">Before</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">OEM compliance</span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <AlertTriangle size={16} />
                    <span className="text-sm">Sometimes</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Chemical residue</span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <AlertTriangle size={16} />
                    <span className="text-sm">Possible</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fuel analysis testing</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">Yes</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fuel compatibility</span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <AlertTriangle size={16} />
                    <span className="text-sm">Limited</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Compliance & performance</span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <AlertTriangle size={16} />
                    <span className="text-sm">Depends on fuel</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-primary">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-primary">
                <span className="text-lg">🌱</span>
                OILTAC Enzyme Additive
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Works within your existing fuel system — no compatibility modifications needed</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">Yes</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Activates during combustion — no pre-treatment or fuel system changes required</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">During only</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">OEM compliance</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">OEM-safe</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Chemical residue</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">None</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fuel analysis testing</span>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <AlertTriangle size={16} />
                    <span className="text-sm">Post-combustion</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fuel compatibility</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">Diesel, gas oil, HFO</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Compliance & performance</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Check size={16} />
                    <span className="text-sm">Yes (diesel, gas oil, HFO)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
            <span className="text-2xl">💡</span>
            What This Means for You
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">No changes to fuel specs (ISO 8217 / ASTM D975 compliant)</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Safer for injectors, fuel lines, and emissions systems</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Tested with diesel, gas oil, and heavy fuel oil (bunker A/C blend) — compatibility with VLSFO and ULSFO under evaluation</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Results seen in fuel savings, cleaner engines, and lower emissions</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <blockquote className="text-xl font-medium text-primary italic mb-6">
              "We don't add to your fuel — we unlock its potential."
            </blockquote>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#how-it-works">See How the Trial Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;