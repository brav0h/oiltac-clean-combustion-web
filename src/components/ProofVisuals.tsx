import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const NAVY = "#1B2A4A";
const ORANGE = "#f97316";
const AMBER = "#d97706";
const TEXT_GREY = "#6b7280";
const BORDER_GREY = "#e2e2e2";

const SourceNote = ({ text }: { text: string }) => (
  <p className="text-xs italic mt-3" style={{ color: TEXT_GREY }}>
    {text}
  </p>
);

/* ── Viz 5 — Cross-Industry Fuel Savings ─────────────────────────── */
/* Single representative value per application, sorted low to high.  */
const crossData = [
  { name: "Marine — 200hr test, Japan", value: 2, label: "~2%" },
  { name: "Rail — Korea", value: 3, label: "~3%" },
  { name: "Rail — Bulgaria", value: 3.5, label: "~3.5%" },
  { name: "Power Generation — Japan", value: 4, label: "~4%" },
  { name: "Marine — Coast Guard Academy", value: 4.7, label: "4.7%" },
  { name: "Heavy Equipment — Italy", value: 6.8, label: "6.8%" },
];

export const CrossIndustryFuelChart = () => (
  <div className="rounded-lg border border-white/10 bg-[#1B2A4A] p-6 my-8">
    <p className="text-base font-semibold mb-1 text-white">
      Fuel Savings Documented Across Independent Tests
    </p>
    <p className="text-xs italic mb-5 text-white/60">
      Representative values shown. See application sections below for full data ranges and source citations.
    </p>
    <div style={{ width: "100%", height: 330 }}>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <BarChart
          data={crossData}
          layout="vertical"
          margin={{ top: 4, right: 72, left: 4, bottom: 4 }}
          barSize={24}
        >
          <XAxis
            type="number"
            domain={[0, 8]}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 10, fill: "rgba(255,255,255,0.5)" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={195}
            tick={{ fontSize: 11, fill: "rgba(255,255,255,0.8)" }}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="value" fill={ORANGE} radius={[0, 4, 4, 0]}>
            <LabelList
              dataKey="label"
              position="right"
              style={{ fontSize: 11, fill: "rgba(255,255,255,0.9)", fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <p className="text-xs italic mt-3 text-white/50">
      Bars show representative values from documented trials. Results vary by duty cycle, fuel type, and operating conditions.
    </p>
    <p className="text-xs italic mt-2 text-white/40">
      Sources: Marine Technical Institute Japan (1985–86); Japan Coast Guard Academy; Bulgarian National Railways (1982); Korean National Railways (1984); Hokkaido Electric Okushiri Power Station (FY2001–03); Fuel Experimental Station San Donato Milanese, Italy (1982).
    </p>
  </div>
);

/* ── Viz 1 — Marine Comprehensive Chart ──────────────────────────── */
/* Three clean improvement metrics only. Deposit mass covered by DepositQualityCard below. */
const marineMetrics = [
  { metric: "Bearing wear", change: 21, label: "−21%" },
  { metric: "Exhaust particulates", change: 50, label: "−50%" },
  { metric: "Fuel consumption", change: 2, label: "−2%" },
];

export const MarineComprehensiveChart = () => (
  <div className="my-6">
    <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>
      200-Hour Marine Engine Test — Key Metrics vs. Baseline
    </p>
    <p className="text-xs mb-4" style={{ color: TEXT_GREY }}>
      Key improvements vs. untreated fuel — 200-hour controlled marine engine test.
    </p>
    <div style={{ width: "100%", height: 160 }}>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <BarChart
          data={marineMetrics}
          layout="vertical"
          margin={{ top: 4, right: 88, left: 8, bottom: 4 }}
          barSize={28}
        >
          <XAxis
            type="number"
            domain={[0, 60]}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 10, fill: TEXT_GREY }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="metric"
            width={158}
            tick={{ fontSize: 11, fill: "#374151" }}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="change" fill={NAVY} radius={[0, 4, 4, 0]}>
            <LabelList
              dataKey="label"
              position="right"
              style={{ fontSize: 11, fontWeight: 700, fill: NAVY }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <SourceNote text="Source: 200-hour continuous marine diesel engine test. Marine Technical Institute, Ministry of Transportation, Japan, 1985–1986." />
  </div>
);

/* ── Viz 2 — Deposit Quality Infographic ─────────────────────────── */
export const DepositQualityCard = () => (
  <div className="my-6 rounded-lg border border-gray-200 overflow-hidden">
    <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
      <p className="text-sm font-semibold" style={{ color: NAVY }}>
        Combustion Chamber Deposits — Same 200-Hour Test
      </p>
    </div>
    <div className="grid grid-cols-2 divide-x divide-gray-200">
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Without OILTAC
        </p>
        <p className="text-2xl font-bold mb-1 text-gray-700">2.49 g</p>
        <p className="text-sm font-semibold mb-2 text-red-600">Hard — adhesive</p>
        <p className="text-xs text-gray-500 leading-snug">
          Difficult to remove on inspection. Accelerates wear and increases maintenance labor and downtime.
        </p>
      </div>
      <div className="p-5 bg-green-50">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          With OILTAC
        </p>
        <p className="text-2xl font-bold mb-1" style={{ color: NAVY }}>3.51 g</p>
        <p className="text-sm font-semibold mb-2" style={{ color: ORANGE }}>
          Soft — easily removed
        </p>
        <p className="text-xs text-gray-500 leading-snug">
          Scraped off easily during maintenance shutdowns. Less abrasive wear impact despite higher mass.
        </p>
      </div>
    </div>
    <div className="px-5 py-3 bg-amber-50 border-t border-amber-100">
      <p className="text-xs text-amber-800">
        <strong>Why this matters:</strong> Engineers who inspected both sets of deposits noted the meaningful
        difference was consistency, not quantity. Hard deposits abrade wear surfaces; soft deposits do not.
      </p>
    </div>
  </div>
);

/* ── Viz 3 — Rail Range Chart ────────────────────────────────────── */
const railData = [
  { name: "Korean National Railways", start: 1.1, range: 4.3, label: "1.1–5.4%" },
  { name: "Bulgarian National Railways", start: 1.9, range: 2.5, label: "1.9–4.4%" },
];

export const RailRangeChart = () => (
  <div className="my-6">
    <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>
      Rail Locomotive Fuel Savings — Documented Range by Program
    </p>
    <p className="text-xs mb-4" style={{ color: TEXT_GREY }}>
      Bars show the actual documented range. Variation reflects different routes, locomotive models, and operating conditions.
    </p>
    <div style={{ width: "100%", height: 130 }}>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <BarChart
          data={railData}
          layout="vertical"
          margin={{ top: 4, right: 80, left: 4, bottom: 4 }}
          barSize={32}
        >
          <XAxis
            type="number"
            domain={[0, 7]}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 10, fill: TEXT_GREY }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={188}
            tick={{ fontSize: 11, fill: "#374151" }}
            tickLine={false}
            axisLine={false}
          />
          <Bar dataKey="start" stackId="a" fill="transparent" strokeWidth={0} legendType="none" />
          <Bar dataKey="range" stackId="a" fill={NAVY} radius={[0, 4, 4, 0]}>
            <LabelList
              dataKey="label"
              position="right"
              style={{ fontSize: 11, fill: NAVY, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <SourceNote text="Sources: Bulgarian National Railways field trials (1982). Korean National Railways multi-route trials, 4 routes (1984)." />
  </div>
);

/* ── Viz 4 — Industrial Soot Timeline ────────────────────────────── */
const sootData = [
  { period: "FY12", incidents: 8, phase: "before", label: "~8" },
  { period: "FY13", incidents: 10, phase: "before", label: "~10" },
  { period: "FY14", incidents: 6, phase: "before", label: "~6" },
  { period: "FY15*", incidents: 2, phase: "transition", label: "2" },
  { period: "Full yr", incidents: 0, phase: "treated", label: "0" },
  { period: "Removed", incidents: 8, phase: "removed", label: "↑" },
];

const sootPhaseColor = (phase: string): string => {
  switch (phase) {
    case "before": return BORDER_GREY;
    case "transition": return AMBER;
    case "treated": return NAVY;
    default: return ORANGE;
  }
};

export const SootTimelineChart = () => (
  <div className="my-6">
    <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>
      Soot & Smoke Dispersion Incidents Per Year — Okushiri Power Station
    </p>
    <p className="text-xs mb-4 rounded border border-amber-200 bg-amber-50 px-3 py-2 text-amber-800">
      Pre-OILTAC values (FY12–14) are representative estimates within the documented 4–12 incidents/year range.
    </p>
    <div style={{ width: "100%", height: 230 }}>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <BarChart
          data={sootData}
          margin={{ top: 28, right: 16, left: 8, bottom: 8 }}
          barSize={42}
        >
          <XAxis
            dataKey="period"
            tick={{ fontSize: 10, fill: "#374151" }}
            tickLine={false}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: 10, fill: TEXT_GREY }}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Incidents / yr",
              angle: -90,
              position: "insideLeft",
              fontSize: 10,
              fill: TEXT_GREY,
              dx: -4,
            }}
          />
          <Bar dataKey="incidents" radius={[4, 4, 0, 0]}>
            {sootData.map((entry, i) => (
              <Cell key={i} fill={sootPhaseColor(entry.phase)} />
            ))}
            <LabelList
              dataKey="label"
              position="top"
              style={{ fontSize: 11, fill: "#374151", fontWeight: 700 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-3 flex flex-wrap gap-4 text-xs" style={{ color: TEXT_GREY }}>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: BORDER_GREY }} />
        Before OILTAC (est.)
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: AMBER }} />
        First partial year
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: NAVY }} />
        With OILTAC (full yr)
      </span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block w-3 h-3 rounded-sm" style={{ backgroundColor: ORANGE }} />
        After removal
      </span>
    </div>
    <SourceNote text="Source: Hokkaido Electric Power, Okushiri Power Station. Pre-OILTAC range: 4–12 incidents/year. FY12–14 values are representative estimates within that range. Removal/reinstatement pattern confirmed causal relationship." />
  </div>
);

/* ── Viz 6 — Compatibility Matrix ────────────────────────────────── */
const compatItems: { param: string; status: string; type: "positive" | "conditional" }[] = [
  { param: "Diesel (ULSD)", status: "Compatible", type: "positive" },
  { param: "Heavy fuel oil (HFO / bunker)", status: "Compatible", type: "positive" },
  { param: "ASTM D975 fuel spec compliance", status: "Not affected", type: "positive" },
  { param: "SOLAS flash point requirement", status: "Compliant", type: "positive" },
  { param: "Engine modification required", status: "None", type: "positive" },
  { param: "Dosing hardware required", status: "None", type: "positive" },
  {
    param: "DEF / SCR systems",
    status: "No adverse effects observed in testing — contact us for Tier 4 SCR-specific configurations",
    type: "conditional",
  },
];

export const CompatibilityMatrix = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {compatItems.map(({ param, status, type }) => (
      <div
        key={param}
        className={[
          "rounded-lg border p-4 flex items-start gap-3",
          type === "positive" ? "bg-white border-gray-200" : "bg-amber-50 border-amber-200 sm:col-span-2",
        ].join(" ")}
      >
        <span className="text-base font-bold mt-0.5 flex-shrink-0" style={{ color: type === "positive" ? ORANGE : AMBER }}>
          {type === "positive" ? "✓" : "~"}
        </span>
        <div>
          <p className="text-sm font-semibold leading-snug" style={{ color: NAVY }}>{param}</p>
          <p className="text-xs mt-1 text-gray-500 leading-snug">{status}</p>
        </div>
      </div>
    ))}
  </div>
);

/* ── Viz 7 — TBN Trend Chart ─────────────────────────────────────── */
/* Schematic only. Starting TBN: 34.6 mgKOH/g (documented).          */
/* Intermediate values not in published test records.                 */
const tbnData = [
  { hour: "0 h", noOiltac: 100, withOiltac: 100 },
  { hour: "100 h", noOiltac: 85, withOiltac: 93 },
  { hour: "200 h", noOiltac: 72, withOiltac: 87 },
];

export const TBNTrendChart = () => (
  <div className="mt-6">
    <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>
      Lubricating Oil TBN Maintenance — Schematic Trend
    </p>
    <p className="text-xs mb-3 rounded border border-amber-200 bg-amber-50 px-3 py-2 text-amber-800">
      Illustrative only. Specific intermediate values are not available from published test records.
      Chart shows the documented direction: OILTAC-treated engines maintained TBN at a higher level,
      indicating slower oil degradation.
    </p>
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer width="100%" height="100%" debounce={1}>
        <LineChart data={tbnData} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
          <CartesianGrid stroke={BORDER_GREY} strokeDasharray="4 4" />
          <XAxis
            dataKey="hour"
            tick={{ fontSize: 11, fill: TEXT_GREY }}
            tickLine={false}
          />
          <YAxis
            domain={[65, 105]}
            tick={{ fontSize: 10, fill: TEXT_GREY }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `${v}%`}
            label={{ value: "TBN (% of initial)", angle: -90, position: "insideLeft", fontSize: 10, fill: TEXT_GREY, dx: -4 }}
          />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Line
            type="monotone"
            dataKey="noOiltac"
            name="Without OILTAC"
            stroke="#9ca3af"
            strokeWidth={2.5}
            strokeDasharray="6 3"
            dot={{ fill: "#9ca3af", strokeWidth: 0, r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="withOiltac"
            name="With OILTAC"
            stroke={NAVY}
            strokeWidth={2.5}
            dot={{ fill: NAVY, strokeWidth: 0, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <p className="text-xs mt-2 italic" style={{ color: TEXT_GREY }}>
      Starting TBN: 34.6 mgKOH/g (documented, A/C heavy oil blend). Trend lines are schematic.
      Marine Technical Institute, Japan, 1985–1986.
    </p>
  </div>
);

/* ── Viz 8 — Emissions Callout Grid ──────────────────────────────── */
export const EmissionsCalloutGrid = () => (
  <div className="grid grid-cols-2 gap-3 mt-4 mb-2">
    {[
      { value: "4.7%", label: "Fuel savings", sub: "Light oil diesel" },
      { value: "3.6%", label: "Fuel savings", sub: "Heavy oil A" },
      { value: "CO ↓", label: "Simultaneously reduced", sub: "Both emissions types" },
      { value: "NOx ↓", label: "Simultaneously reduced", sub: "Normally trades off vs CO" },
    ].map(({ value, label, sub }) => (
      <div key={`${value}-${sub}`} className="rounded-lg p-4 border border-white/20 bg-white/10">
        <p className="text-xl font-bold text-white leading-tight">{value}</p>
        <p className="text-xs text-white/80 mt-1">{label}</p>
        <p className="text-xs text-white/50 mt-0.5">{sub}</p>
      </div>
    ))}
  </div>
);
