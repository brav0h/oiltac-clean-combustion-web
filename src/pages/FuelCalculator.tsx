import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FuelCalculator = () => {
  const [formData, setFormData] = useState({
    fuelType: "hfo",
    fuelQuantity: "",
    units: "tonnes",
    fuelCost: "",
    co2Cost: "",
    fuelSavingsPercentage: 4.0
  });

  const [results, setResults] = useState({
    additiveRequired: "---",
    fuelSavings: "---",
    purchaseSavings: "---",
    co2Savings: "---",
    co2MoneySaved: "---"
  });

  const calculateResults = () => {
    const quantity = parseFloat(formData.fuelQuantity as string) || 0;
    const fuelCost = parseFloat(formData.fuelCost as string) || 0;
    const co2Cost = parseFloat(formData.co2Cost as string) || 0;
    const fuelSavingsPercentage = formData.fuelSavingsPercentage;
    
    // Calculation factors
    const CO2_EMISSION_FACTOR = 3.12; // Tonnes of CO2 per tonne of HFO
    const ADDITIVE_DOSAGE_RATE = 0.55 / 30; // Litres of additive per tonne of fuel
    
    // Calculations
    const fuelSavings_tonnes = quantity * (fuelSavingsPercentage / 100);
    const savingsOnPurchase_usd = fuelSavings_tonnes * fuelCost;
    const co2Savings_tonnes = fuelSavings_tonnes * CO2_EMISSION_FACTOR;
    const moneySavedOnCO2_usd = co2Savings_tonnes * co2Cost;
    const additiveRequired_litres = quantity * ADDITIVE_DOSAGE_RATE;

    setResults({
      additiveRequired: additiveRequired_litres.toFixed(2),
      fuelSavings: fuelSavings_tonnes.toFixed(2),
      purchaseSavings: savingsOnPurchase_usd.toFixed(2),
      co2Savings: co2Savings_tonnes.toFixed(2),
      co2MoneySaved: moneySavedOnCO2_usd.toFixed(2)
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateResults();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Background with overlay */}
      <div 
        className="min-h-screen flex items-center justify-center px-5 py-20"
        style={{
          backgroundColor: '#1a434a'
        }}
      >
        <div className="relative z-10 max-w-md w-full bg-transparent p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-8 text-shadow">
            Industrial Fuel and CO2 Savings Simulator
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Fuel Type */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Fuel type :
              </label>
              <select
                value={formData.fuelType}
                onChange={(e) => handleInputChange('fuelType', e.target.value)}
                className="w-full p-3 rounded-md border-0 text-sm bg-white text-gray-800 appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.2em'
                }}
              >
                <option value="hfo">Heavy Fuel (HFO)</option>
                <option value="mdo">Marine Diesel Oil (MDO)</option>
              </select>
            </div>

            {/* Fuel Quantity */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Quantity of fuel :
              </label>
              <input
                type="number"
                value={formData.fuelQuantity}
                onChange={(e) => handleInputChange('fuelQuantity', e.target.value)}
                step="any"
                placeholder="e.g., 30"
                className="w-full p-3 rounded-md border-0 text-sm bg-white text-gray-800"
              />
            </div>

            {/* Units */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Units :
              </label>
              <select
                value={formData.units}
                onChange={(e) => handleInputChange('units', e.target.value)}
                className="w-full p-3 rounded-md border-0 text-sm bg-white text-gray-800 appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.2em'
                }}
              >
                <option value="tonnes">Metric tonnes</option>
                <option value="gallons">Gallons</option>
              </select>
            </div>

            {/* Fuel Cost */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Fuel cost (US$/metric tonne) :
              </label>
              <input
                type="number"
                value={formData.fuelCost}
                onChange={(e) => handleInputChange('fuelCost', e.target.value)}
                step="any"
                placeholder="e.g., 650"
                className="w-full p-3 rounded-md border-0 text-sm bg-white text-gray-800"
              />
            </div>

            {/* CO2 Cost */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Cost of CO2 (US$/metric tonne) :
              </label>
              <p className="text-sm text-gray-300 italic mb-2 -mt-1">
                Please note that the cost of CO2 emissions varies by country. Please ensure to check the specific rates applicable to your country.
              </p>
              <input
                type="number"
                value={formData.co2Cost}
                onChange={(e) => handleInputChange('co2Cost', e.target.value)}
                step="any"
                placeholder="e.g., 50"
                className="w-full p-3 rounded-md border-0 text-sm bg-white text-gray-800"
              />
            </div>

            {/* Static OILTAC Additive */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Additive :
              </label>
              <div className="w-full p-3 rounded-md text-sm bg-white text-gray-800 font-medium">
                OILTAC
              </div>
            </div>

            {/* Fuel Savings Percentage Slider */}
            <div>
              <label className="block text-white font-bold mb-2 text-lg">
                Select Fuel Savings Percentage : <span className="text-white font-bold ml-2">{formData.fuelSavingsPercentage.toFixed(1)}%</span>
              </label>
              <input
                type="range"
                min="4"
                max="11"
                step="0.1"
                value={formData.fuelSavingsPercentage}
                onChange={(e) => handleInputChange('fuelSavingsPercentage', parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer mt-3 slider"
                style={{
                  background: '#ddd'
                }}
              />
            </div>

            <button
              type="submit"
              className="bg-white text-gray-800 border-0 py-3 px-6 rounded-md cursor-pointer font-bold text-base mt-3 transition-all duration-200 hover:bg-gray-100"
            >
              Calculate
            </button>
          </form>

          {/* Results Section */}
          <div className="mt-10">
            <h2 className="text-3xl text-white font-bold mb-4">Results :</h2>
            <div className="space-y-3">
              <p className="text-xl text-white font-medium">
                Quantity of additive required : <span className="font-bold">{results.additiveRequired}</span> litres
              </p>
              <p className="text-xl text-white font-medium">
                Fuel savings : <span className="font-bold">{results.fuelSavings}</span> metric tonnes
              </p>
              <p className="text-xl text-white font-medium">
                Savings on fuel purchase : US$<span className="font-bold">{results.purchaseSavings}</span>
              </p>
              <p className="text-xl text-white font-medium">
                CO2 savings : <span className="font-bold">{results.co2Savings}</span> metric tonnes
              </p>
              <p className="text-xl text-white font-medium">
                Money saved on CO2 reduction : US$<span className="font-bold">{results.co2MoneySaved}</span>
              </p>
            </div>
          </div>

          {/* Footer Notes */}
          <div className="mt-10 text-sm leading-relaxed text-gray-300">
            <p className="italic">
              These results depend on the fuel quality and operational conditions. The emission factors integrated into our simulator are sourced from a VPS database. The fuel savings facilitated by OILTAC have been validated by SGS, based on tests conducted by our team.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FuelCalculator;