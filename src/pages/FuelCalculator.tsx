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

  // Calculation constants and conversion factors
  const FACTORS = {
    hfo: {
      co2PerTonne: 3.12,      // tonnes CO2 per tonne HFO
      additiveRatePerTonne: 0.55 / 30, // litres additive per tonne HFO
      litresPerTonne: 990,    // Approx. litres in 1 metric tonne of HFO
      gallonsPerTonne: 261.5  // Approx. US gallons in 1 metric tonne of HFO
    },
    diesel: {
      co2PerTonne: 3.16,      // tonnes CO2 per tonne Diesel
      additiveRatePerTonne: (1/4000) * 1176, // litres additive per tonne Diesel (1:4000L ratio)
      litresPerTonne: 1176,   // Approx. litres in 1 metric tonne of Diesel (density ~0.85)
      gallonsPerTonne: 310.7  // Approx. US gallons in 1 metric tonne of Diesel
    }
  };

  const getFuelCostLabel = () => {
    let unitText = 'metric tonne';
    if (formData.units === 'litres') unitText = 'litre';
    if (formData.units === 'gallons') unitText = 'gallon (US)';
    return `Fuel cost (US$/${unitText}) :`;
  };

  const getFuelSavingsUnit = () => {
    if (formData.units === 'litres') return 'litres';
    if (formData.units === 'gallons') return 'gallons';
    return 'metric tonnes';
  };

  const calculateResults = () => {
    const quantity = parseFloat(formData.fuelQuantity as string) || 0;
    const fuelCost = parseFloat(formData.fuelCost as string) || 0;
    const co2Cost = parseFloat(formData.co2Cost as string) || 0;
    const fuelSavingPercentage = formData.fuelSavingsPercentage / 100;
    
    if (quantity === 0) return;

    const factors = FACTORS[formData.fuelType as keyof typeof FACTORS];

    // Normalize input quantity to metric tonnes
    let quantityInTonnes = 0;
    if (formData.units === 'tonnes') {
      quantityInTonnes = quantity;
    } else if (formData.units === 'litres') {
      quantityInTonnes = quantity / factors.litresPerTonne;
    } else if (formData.units === 'gallons') {
      quantityInTonnes = quantity / factors.gallonsPerTonne;
    }

    // Perform calculations using standardized tonne unit
    const fuelSavingsInTonnes = quantityInTonnes * fuelSavingPercentage;
    const additiveRequired = quantityInTonnes * factors.additiveRatePerTonne; // Always in litres
    const co2SavingsInTonnes = fuelSavingsInTonnes * factors.co2PerTonne;
    const moneySavedOnCO2 = co2SavingsInTonnes * co2Cost;
    
    // Calculate fuel savings in the user's original unit for display
    let fuelSavingsInOriginalUnit = 0;
    if (formData.units === 'tonnes') {
      fuelSavingsInOriginalUnit = fuelSavingsInTonnes;
    } else if (formData.units === 'litres') {
      fuelSavingsInOriginalUnit = fuelSavingsInTonnes * factors.litresPerTonne;
    } else if (formData.units === 'gallons') {
      fuelSavingsInOriginalUnit = fuelSavingsInTonnes * factors.gallonsPerTonne;
    }

    // Cost savings on fuel purchase based on saved amount in original unit
    const savingsOnPurchase = fuelSavingsInOriginalUnit * fuelCost;

    setResults({
      additiveRequired: additiveRequired.toFixed(2),
      fuelSavings: fuelSavingsInOriginalUnit.toFixed(2),
      purchaseSavings: savingsOnPurchase.toFixed(2),
      co2Savings: co2SavingsInTonnes.toFixed(2),
      co2MoneySaved: moneySavedOnCO2.toFixed(2)
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
        className="min-h-screen flex items-center justify-center px-5 py-20 relative"
        style={{
          backgroundColor: '#1a434a'
        }}
      >
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.imgur.com/vHqQ9hK.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: 'rgba(30, 75, 84, 0.9)'
          }}
        />

        <div className="relative z-20 max-w-2xl w-full bg-transparent p-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 text-shadow">
            Industrial Fuel and CO2 Savings Simulator
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Fuel Type */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
                Fuel type :
              </label>
              <select
                value={formData.fuelType}
                onChange={(e) => handleInputChange('fuelType', e.target.value)}
                className="w-full p-4 rounded-md border-0 text-base bg-white text-gray-800 appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.2em'
                }}
              >
                <option value="hfo">Heavy Fuel (HFO)</option>
                <option value="diesel">Diesel (Agriculture/Vehicle)</option>
              </select>
            </div>

            {/* Fuel Quantity */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
                Quantity of fuel :
              </label>
              <input
                type="number"
                value={formData.fuelQuantity}
                onChange={(e) => handleInputChange('fuelQuantity', e.target.value)}
                step="any"
                placeholder="Enter quantity"
                className="w-full p-4 rounded-md border-0 text-base bg-white text-gray-800"
              />
            </div>

            {/* Units */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
                Units :
              </label>
              <select
                value={formData.units}
                onChange={(e) => handleInputChange('units', e.target.value)}
                className="w-full p-4 rounded-md border-0 text-base bg-white text-gray-800 appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.2em'
                }}
              >
                <option value="tonnes">Metric tonnes</option>
                <option value="litres">Litres</option>
                <option value="gallons">Gallons (US)</option>
              </select>
            </div>

            {/* Fuel Cost */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
                {getFuelCostLabel()}
              </label>
              <input
                type="number"
                value={formData.fuelCost}
                onChange={(e) => handleInputChange('fuelCost', e.target.value)}
                step="any"
                placeholder="Enter cost per unit"
                className="w-full p-4 rounded-md border-0 text-base bg-white text-gray-800"
              />
            </div>

            {/* CO2 Cost */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
                Cost of CO2 (US$/metric tonne) :
              </label>
              <p className="text-sm text-gray-300 italic mb-3 -mt-1">
                Please note that the cost of CO2 emissions varies by country. Please ensure to check the specific rates applicable to your country.
              </p>
              <input
                type="number"
                value={formData.co2Cost}
                onChange={(e) => handleInputChange('co2Cost', e.target.value)}
                step="any"
                placeholder="e.g., 50"
                className="w-full p-4 rounded-md border-0 text-base bg-white text-gray-800"
              />
            </div>

            {/* Static OILTAC Additive */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
                Additive :
              </label>
              <div className="w-full p-4 rounded-md text-base bg-white text-gray-800 font-medium">
                OILTAC
              </div>
            </div>

            {/* Fuel Savings Percentage Slider */}
            <div>
              <label className="block text-white font-bold mb-3 text-lg">
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
              className="bg-white text-gray-800 border-0 py-4 px-8 rounded-md cursor-pointer font-bold text-lg mt-4 transition-all duration-200 hover:bg-gray-100"
            >
              Calculate
            </button>
          </form>

          {/* Results Section */}
          <div className="mt-10">
            <h2 className="text-3xl text-white font-bold mb-6">Results :</h2>
            <div className="space-y-3">
              <p className="text-xl text-white font-medium">
                Quantity of additive required : <span className="font-bold">{results.additiveRequired}</span> litres
              </p>
              <p className="text-xl text-white font-medium">
                Fuel savings : <span className="font-bold">{results.fuelSavings}</span> {getFuelSavingsUnit()}
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
              Results shown are estimates based on average fuel conditions and operating environments. Actual savings may vary depending on fuel quality, engine condition, and duty cycle. Emission factors used in this calculator are based on third-party databases and internal field data. Fuel savings attributed to OILTAC have been validated through independent testing and real-world trials.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FuelCalculator;