import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const C = {
  bg:       "#0A1524",
  surface:  "#11203A",
  surface2: "#15274A",
  line:     "#1F3358",
  line2:    "#28406B",
  ink:      "#E6ECF5",
  inkDim:   "#A7B4CC",
  inkMute:  "#6F7F9E",
  accent:   "#F97316",
};
const SANS = '"Inter", Helvetica, Arial, sans-serif';
const DISPLAY = '"Montserrat", "Inter", Helvetica, Arial, sans-serif';

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: SANS,
  fontSize: "0.68rem",
  fontWeight: 600,
  letterSpacing: "0.09em",
  textTransform: "uppercase",
  color: C.inkDim,
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  fontSize: "0.85rem",
  fontFamily: SANS,
  fontWeight: 400,
  color: C.ink,
  backgroundColor: C.surface,
  border: `1px solid ${C.line}`,
  borderRadius: "4px",
  outline: "none",
  boxSizing: "border-box",
};

const selectArrow = `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A7B4CC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`;

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: selectArrow,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.75rem center",
  backgroundSize: "1em",
  paddingRight: "2.5rem",
  cursor: "pointer",
};

interface CalcResults {
  additiveRequired: number | null;
  fuelSavingsQty: number | null;
  purchaseSavings: number | null;
  co2Savings: number | null;
  co2MoneySaved: number | null;
  additiveCost: number | null;
  netSavings: number | null;
}

const nullResults: CalcResults = {
  additiveRequired: null,
  fuelSavingsQty: null,
  purchaseSavings: null,
  co2Savings: null,
  co2MoneySaved: null,
  additiveCost: null,
  netSavings: null,
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const FuelCalculator = () => {
  const [formData, setFormData] = useState({
    fuelType: "hfo",
    fuelQuantity: "",
    units: "tonnes",
    fuelCost: "",
    co2Cost: "",
    fuelSavingsPercentage: 2.0,
    additivePricePerLitre: "",
  });

  const [results, setResults] = useState<CalcResults>(nullResults);

  // Calculation constants and conversion factors
  const FACTORS = {
    hfo: {
      co2PerTonne: 3.12,
      litresPerTonne: 990,
      gallonsPerTonne: 261.5,
      additiveRatePerTonne: 990 / 10000, // 1:10,000 V/V
    },
    ifo: {
      co2PerTonne: 3.14,
      litresPerTonne: 970,
      gallonsPerTonne: 256.2,
      additiveRatePerTonne: 970 / 10000,
    },
    mdo: {
      co2PerTonne: 3.16,
      litresPerTonne: 860,
      gallonsPerTonne: 227.1,
      additiveRatePerTonne: 860 / 10000,
    },
    diesel: {
      co2PerTonne: 3.16,
      litresPerTonne: 840,
      gallonsPerTonne: 221.9,
      additiveRatePerTonne: 840 / 10000,
    },
  };

  const getFuelCostLabel = () => {
    let unitText = "metric tonne";
    if (formData.units === "litres") unitText = "litre";
    if (formData.units === "gallons") unitText = "gallon (US)";
    return `Fuel cost (US$/${unitText}) :`;
  };

  const getFuelSavingsUnit = () => {
    if (formData.units === "litres") return "litres";
    if (formData.units === "gallons") return "gallons";
    return "metric tonnes";
  };

  useEffect(() => {
    const quantity = parseFloat(formData.fuelQuantity) || 0;
    const fuelCost = parseFloat(formData.fuelCost) || 0;
    const co2Cost = parseFloat(formData.co2Cost) || 0;
    const additivePricePerLitre = parseFloat(formData.additivePricePerLitre) || 0;
    const fuelSavingPercentage = formData.fuelSavingsPercentage / 100;

    if (quantity === 0 || fuelCost === 0) {
      setResults(nullResults);
      return;
    }

    const factors = FACTORS[formData.fuelType as keyof typeof FACTORS];

    // Normalize input quantity to metric tonnes
    let quantityInTonnes = 0;
    if (formData.units === "tonnes") {
      quantityInTonnes = quantity;
    } else if (formData.units === "litres") {
      quantityInTonnes = quantity / factors.litresPerTonne;
    } else if (formData.units === "gallons") {
      quantityInTonnes = quantity / factors.gallonsPerTonne;
    }

    // Perform calculations using standardized tonne unit
    const fuelSavingsInTonnes = quantityInTonnes * fuelSavingPercentage;
    const additiveRequired = quantityInTonnes * factors.additiveRatePerTonne; // Always in litres
    const co2SavingsInTonnes = fuelSavingsInTonnes * factors.co2PerTonne;
    const moneySavedOnCO2 = co2SavingsInTonnes * co2Cost;

    // Calculate fuel savings in the user's original unit for display
    let fuelSavingsInOriginalUnit = 0;
    if (formData.units === "tonnes") {
      fuelSavingsInOriginalUnit = fuelSavingsInTonnes;
    } else if (formData.units === "litres") {
      fuelSavingsInOriginalUnit = fuelSavingsInTonnes * factors.litresPerTonne;
    } else if (formData.units === "gallons") {
      fuelSavingsInOriginalUnit = fuelSavingsInTonnes * factors.gallonsPerTonne;
    }

    // Cost savings on fuel purchase based on saved amount in original unit
    const savingsOnPurchase = fuelSavingsInOriginalUnit * fuelCost;

    setResults({
      additiveRequired,
      fuelSavingsQty: fuelSavingsInOriginalUnit,
      purchaseSavings: savingsOnPurchase,
      co2Savings: co2SavingsInTonnes,
      co2MoneySaved: co2Cost > 0 ? moneySavedOnCO2 : null,
      additiveCost: additivePricePerLitre > 0 ? additiveRequired * additivePricePerLitre : null,
      netSavings: additivePricePerLitre > 0 ? savingsOnPurchase - additiveRequired * additivePricePerLitre : null,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sliderPercent = ((formData.fuelSavingsPercentage - 1) / (8 - 1)) * 100;

  const hasBasicResults = results.additiveRequired !== null;
  const hasAdditiveResults = results.additiveCost !== null;
  const hasCO2Results = results.co2MoneySaved !== null;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: C.bg, fontFamily: SANS }}>
      <Navigation />

      <style>{`
        .calc-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 5px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          margin-top: 10px;
        }
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: ${C.accent};
          cursor: pointer;
          border: 2px solid ${C.bg};
          box-shadow: 0 0 0 1px ${C.accent};
        }
        .calc-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: ${C.accent};
          cursor: pointer;
          border: 2px solid ${C.bg};
          box-shadow: 0 0 0 1px ${C.accent};
        }
        .calc-input::placeholder {
          color: ${C.inkMute};
          opacity: 1;
        }
        .calc-input:focus {
          border-color: ${C.line2};
          outline: none;
        }
        .calc-select option {
          background-color: ${C.surface};
          color: ${C.ink};
        }
      `}</style>

      <div style={{ padding: "100px 16px 64px" }}>
        <div style={{ maxWidth: "490px", margin: "0 auto" }}>

          <h1 style={{
            fontFamily: DISPLAY,
            fontSize: "1.75rem",
            fontWeight: 700,
            color: C.ink,
            letterSpacing: "-0.01em",
            marginBottom: "36px",
          }}>
            Fuel &amp; CO2 Savings Simulator
          </h1>

          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Fuel Type */}
            <div>
              <label style={labelStyle}>Fuel type :</label>
              <select
                value={formData.fuelType}
                onChange={(e) => handleInputChange("fuelType", e.target.value)}
                className="calc-select"
                style={selectStyle}
              >
                <option value="hfo">Heavy Fuel Oil (HFO)</option>
                <option value="ifo">Intermediate Fuel Oil (IFO 380 / IFO 180)</option>
                <option value="mdo">Marine Diesel / MGO</option>
                <option value="diesel">Diesel — General (Rail · Power Generation · Mining · Heavy Equipment)</option>
              </select>
            </div>

            {/* Fuel Quantity */}
            <div>
              <label style={labelStyle}>Quantity of fuel :</label>
              <input
                type="number"
                value={formData.fuelQuantity}
                onChange={(e) => handleInputChange("fuelQuantity", e.target.value)}
                step="any"
                placeholder="Enter quantity"
                className="calc-input"
                style={inputStyle}
              />
            </div>

            {/* Units */}
            <div>
              <label style={labelStyle}>Units :</label>
              <select
                value={formData.units}
                onChange={(e) => handleInputChange("units", e.target.value)}
                className="calc-select"
                style={selectStyle}
              >
                <option value="tonnes">Metric tonnes</option>
                <option value="litres">Litres</option>
                <option value="gallons">Gallons (US)</option>
              </select>
            </div>

            {/* Fuel Cost */}
            <div>
              <label style={labelStyle}>{getFuelCostLabel()}</label>
              <input
                type="number"
                value={formData.fuelCost}
                onChange={(e) => handleInputChange("fuelCost", e.target.value)}
                step="any"
                placeholder="Enter cost per unit"
                className="calc-input"
                style={inputStyle}
              />
            </div>

            {/* CO2 Cost */}
            <div>
              <label style={labelStyle}>Cost of CO2 (US$/metric tonne) :</label>
              <p style={{
                fontFamily: SANS,
                fontSize: "0.72rem",
                fontStyle: "italic",
                color: C.inkMute,
                marginBottom: "8px",
                marginTop: "-2px",
                lineHeight: 1.5,
              }}>
                Please note that the cost of CO2 emissions varies by country. Please ensure to check the specific rates applicable to your country.
              </p>
              <input
                type="number"
                value={formData.co2Cost}
                onChange={(e) => handleInputChange("co2Cost", e.target.value)}
                step="any"
                placeholder="e.g., 50"
                className="calc-input"
                style={inputStyle}
              />
            </div>

            {/* Static OILTAC Additive */}
            <div>
              <label style={labelStyle}>Additive :</label>
              <div style={{
                ...inputStyle,
                fontWeight: 600,
                color: C.inkDim,
                letterSpacing: "0.04em",
              }}>
                OILTAC
              </div>
            </div>

            {/* Fuel Savings Percentage Slider */}
            <div>
              <label style={{ ...labelStyle, marginBottom: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Select Fuel Savings Percentage :</span>
                <span style={{ color: C.accent, fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                  {formData.fuelSavingsPercentage.toFixed(1)}%
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="8"
                step="0.1"
                value={formData.fuelSavingsPercentage}
                onChange={(e) => handleInputChange("fuelSavingsPercentage", parseFloat(e.target.value))}
                className="calc-slider"
                style={{
                  background: `linear-gradient(to right, ${C.accent} 0%, ${C.accent} ${sliderPercent}%, ${C.line} ${sliderPercent}%, ${C.line} 100%)`,
                }}
              />
            </div>

            {/* Additive Price */}
            <div>
              <label style={labelStyle}>OILTAC Additive Cost (US$/litre) :</label>
              <p style={{
                fontFamily: SANS,
                fontSize: "0.72rem",
                fontStyle: "italic",
                color: C.inkMute,
                marginBottom: "8px",
                marginTop: "-2px",
                lineHeight: 1.5,
              }}>
                Contact us for pricing — enter your quoted rate to calculate net ROI
              </p>
              <input
                type="number"
                value={formData.additivePricePerLitre}
                onChange={(e) => handleInputChange("additivePricePerLitre", e.target.value)}
                step="any"
                placeholder="Enter your quoted rate"
                className="calc-input"
                style={inputStyle}
              />
            </div>

          </form>

          {/* Results Section */}
          <div style={{
            marginTop: "36px",
            backgroundColor: C.surface,
            border: `1px solid ${C.line}`,
            borderRadius: "6px",
            overflow: "hidden",
          }}>

            {/* Headline block — net savings, shown only when additive cost is entered */}
            {hasAdditiveResults && (
              <div style={{
                padding: "24px 24px 20px",
                borderBottom: `1px solid ${C.line}`,
                backgroundColor: C.surface2,
              }}>
                <div style={{
                  fontFamily: SANS,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.inkMute,
                  marginBottom: "6px",
                }}>
                  Net Savings
                </div>
                <div style={{
                  fontFamily: DISPLAY,
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: results.netSavings! >= 0 ? C.accent : "#f87171",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "6px",
                }}>
                  US${fmt(results.netSavings!)}
                </div>
                <div style={{
                  fontFamily: SANS,
                  fontSize: "0.75rem",
                  color: C.inkMute,
                  fontStyle: results.netSavings! < 0 ? "italic" : "normal",
                }}>
                  {results.netSavings! >= 0
                    ? "after additive cost"
                    : "Additive cost exceeds fuel savings at this input — try a higher quantity or savings percentage"}
                </div>
              </div>
            )}

            {/* Two-column block — fuel savings vs additive cost, shown only when additive cost is entered */}
            {hasAdditiveResults && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: C.line,
                borderBottom: `1px solid ${C.line}`,
              }}>
                <div style={{ padding: "16px 20px", backgroundColor: C.surface }}>
                  <div style={{
                    fontFamily: SANS,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.inkMute,
                    marginBottom: "6px",
                  }}>
                    Fuel Savings
                  </div>
                  <div style={{ fontFamily: DISPLAY, fontSize: "1.05rem", fontWeight: 700, color: C.ink }}>
                    US${fmt(results.purchaseSavings!)}
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: "0.75rem", color: C.inkDim, marginTop: "3px" }}>
                    {fmt(results.fuelSavingsQty!)} {getFuelSavingsUnit()} saved
                  </div>
                </div>
                <div style={{ padding: "16px 20px", backgroundColor: C.surface }}>
                  <div style={{
                    fontFamily: SANS,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.inkMute,
                    marginBottom: "6px",
                  }}>
                    Additive Cost
                  </div>
                  <div style={{ fontFamily: DISPLAY, fontSize: "1.05rem", fontWeight: 700, color: C.ink }}>
                    US${fmt(results.additiveCost!)}
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: "0.75rem", color: C.inkDim, marginTop: "3px" }}>
                    {fmt(results.additiveRequired!)} litres required
                  </div>
                </div>
              </div>
            )}

            {/* Secondary block — always shown, --- until basic inputs are entered */}
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{
                fontFamily: SANS,
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: C.inkMute,
                marginBottom: "4px",
              }}>
                Results
              </div>

              {[
                {
                  label: "Additive required",
                  value: hasBasicResults ? `${fmt(results.additiveRequired!)} litres` : "---",
                },
                {
                  label: "Fuel savings",
                  value: hasBasicResults ? `${fmt(results.fuelSavingsQty!)} ${getFuelSavingsUnit()}` : "---",
                },
                {
                  label: "Savings on fuel purchase",
                  value: hasBasicResults ? `US$${fmt(results.purchaseSavings!)}` : "---",
                },
                {
                  label: "CO2 savings",
                  value: hasBasicResults ? `${fmt(results.co2Savings!)} metric tonnes` : "---",
                },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                  <span style={{ fontFamily: SANS, fontSize: "0.8rem", color: C.inkDim }}>{label}</span>
                  <span style={{ fontFamily: DISPLAY, fontSize: "0.88rem", fontWeight: 700, color: C.ink, whiteSpace: "nowrap" }}>
                    {value}
                  </span>
                </div>
              ))}

              {hasCO2Results && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.8rem", color: C.inkDim }}>CO2 value</span>
                    <span style={{ fontFamily: DISPLAY, fontSize: "0.88rem", fontWeight: 700, color: C.ink, whiteSpace: "nowrap" }}>
                      US${fmt(results.co2MoneySaved!)}
                    </span>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "12px",
                    paddingTop: "8px",
                    borderTop: `1px solid ${C.line}`,
                    marginTop: "2px",
                  }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, color: C.inkDim }}>
                      Total including CO2
                    </span>
                    <span style={{ fontFamily: DISPLAY, fontSize: "1rem", fontWeight: 700, color: C.ink, whiteSpace: "nowrap" }}>
                      US${fmt(results.purchaseSavings! + results.co2MoneySaved!)}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Footer Notes */}
          <p style={{
            marginTop: "28px",
            fontFamily: SANS,
            fontSize: "0.68rem",
            fontStyle: "italic",
            color: C.inkMute,
            lineHeight: 1.7,
          }}>
            The results from this simulator are based on the proven performance of OILTAC, validated by decades of data. From the 1970s through the early 2000s, numerous laboratory tests and extensive field trials in the agriculture, marine, and power generation industries confirmed our product's effectiveness. This legacy of success is further supported by a long history of customer testimonials. As every application is unique, please note that these are estimates and actual savings depend on your specific fuel quality, engine condition, and operational parameters.
          </p>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FuelCalculator;
