import React, { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Design tokens (scoped to this page) ───────────────────────────────────
const C = {
  bg:       "#0A1524",
  bg2:      "#0E1B30",
  surface:  "#11203A",
  surface2: "#15274A",
  line:     "#1F3358",
  line2:    "#28406B",
  ink:      "#E6ECF5",
  inkDim:   "#A7B4CC",
  inkMute:  "#6F7F9E",
  inkFaint: "#4A5775",
  accent:   "oklch(0.72 0.17 48)",   // orange
  accentDim:"oklch(0.72 0.17 48 / 0.14)",
  verify:   "oklch(0.78 0.14 160)",  // green
} as const;

const MONO = '"IBM Plex Mono", ui-monospace, Menlo, monospace';
const SANS = '"Inter Tight", "Inter", Helvetica, Arial, sans-serif';

// ─── Real test data — all figures sourced from OILTAC_Test_Registry.md
//     and OILTAC_RAG_Reference.md. No figures invented.
// ───────────────────────────────────────────────────────────────────────────
type Industry = "marine" | "rail" | "industrial" | "vehicle";

interface TestRecord {
  id: string;
  facility: string;
  country: string;
  industry: Industry;
  vessel: string;
  duration: string;
  sampleN: number | null;
  fuelSaving: number | null;    // % reduction (positive = saving)
  particulate: number | null;   // % change (negative = reduction)
  bearingWear: number | null;   // % change (negative = reduction)
  protocol: string;
  date: string;
  notes: string;
  cert: string;
}

const TESTS: TestRecord[] = [
  {
    id: "marine-tech-inst-200h",
    facility: "Marine Technical Institute — Ministry of Transport, Japan",
    country: "JP",
    industry: "marine",
    vessel: "AVL-502 single-cylinder bench — A/C heavy oil blend (bunker A+C, 50:50 vol)",
    duration: "200 h",
    sampleN: null,
    fuelSaving: 2.0,
    particulate: -50.0,
    bearingWear: -20.6,
    protocol: "BOSCH smoke density (5-rep avg); JIS Z-8808 exhaust particulate (20 NL / 0.6 µm glass-fibre filter)",
    date: "Nov 1985 – Mar 1986",
    notes: "200 continuous operating hours per fuel condition. New pistons, rings, and liners fitted for each run; lubrication flushed between. Engine disassembled at 50-hr intervals to inspect deposits, wear, and oil condition. Deposits with OILTAC: soft, dry, easily scraped off. Without OILTAC: hard, adhesive, difficult to remove. TBN decline in lubricating oil substantially less with OILTAC. Piston ring wear was higher with OILTAC — cause noted as undetermined by test authors; may relate to the A/C heavy oil blend.",
    cert: "OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transport, Japan (1986). Source: 11_OILTAC Long Term Operation on Diesel Engine.pdf",
  },
  {
    id: "engr-inst-transport-1983",
    facility: "Engineering Institute of Transportation Ministry, Japan",
    country: "JP",
    industry: "marine",
    vessel: "AVL-502 single-cylinder bench — Bunker C oil",
    duration: "Jul 11–28, 1983",
    sampleN: null,
    fuelSaving: 1.5,
    particulate: null,
    bearingWear: null,
    protocol: "BOSCH smoke density; exhaust corpuscle/particulate count",
    date: "Jul 1983",
    notes: "At 1600 rpm / 8 kg load: fuel consumption 208.9 → 205.7 g/ps·hr (1.5% saving). No measurable effect at 1200 rpm. Exhaust corpuscles/particulates decreased. Smoke density: no improvement in this test. Same research rig subsequently used for the 200-hour long-term trial (1985–86).",
    cert: "Test Results — Engineering Institute of Transportation Ministry, Japan (1983-07-28). Source: 02_1983.07.28_Test Results_The Engineering Institute of Transportation Ministry, Japan.pdf",
  },
  {
    id: "yokoyama-yoshida",
    facility: "Yokoyama & Yoshida — bench diesel research",
    country: "JP",
    industry: "marine",
    vessel: "Bench diesel engine — light oil and Heavy Oil A",
    duration: "Not stated",
    sampleN: null,
    fuelSaving: 4.7,
    particulate: null,
    bearingWear: null,
    protocol: "Bench diesel; specific fuel consumption + simultaneous CO/NOx measurement",
    date: "Not stated",
    notes: "Light oil: 4.7% SFC reduction (8.9 g/ps·h). Heavy Oil A: 3.6% reduction (7.0 g/ps·h). CO and NOx reduced simultaneously — technically significant because these normally trade off against each other in diesel combustion tuning.",
    cert: "Influence of Fuel Additives on Diesel Engine Performance (Yokoyama & Yoshida). Source: Influence of Fuel Additives on Diesel Engine Performance.pdf",
  },
  {
    id: "bulgarian-railways-1982",
    facility: "Bulgarian National Railways — Railway Transportation Management Research Institute",
    country: "BG",
    industry: "rail",
    vessel: "Diesel locomotives 04.06 / 04.50 / 07.67 / 07.72 — in-service fleet, two depots",
    duration: "Feb – Mar 1982 (~2 months)",
    sampleN: 4,
    fuelSaving: 4.42,
    particulate: null,
    bearingWear: null,
    protocol: "In-service fuel consumption vs. control locomotive 04.08 (no additive); period fuel log comparison",
    date: "Feb – Mar 1982",
    notes: "Loco 04.06: 3.53% saving (Feb), 4.42% saving = 79.5 kg/day (Mar). Loco 04.50: 0.48% saving (Mar). 07-series combined (07.67/07.72): 1.89% saving (Feb). Engine oil samples analysed spectroscopically every 10 days — no discernible change in oil quality.",
    cert: "Performance of Bulgarian National Railways Diesel Locomotives — Railway Transportation Management Research Institute (1982-03-29). Source: 07_1982.03.29_Performance of Bulgarian National Railways Diesel Locomotives.pdf",
  },
  {
    id: "korean-railways-1974",
    facility: "National Railroad of South Korea",
    country: "KR",
    industry: "rail",
    vessel: "Diesel train sets 7160 / 7170 / 7105 / 7171 — Seoul–Pusan revenue service",
    duration: "May 15 – Jul 25, 1974 (~10 weeks)",
    sampleN: 4,
    fuelSaving: 4.0,
    particulate: null,
    bearingWear: null,
    protocol: "Comparative in-service fuel consumption — outbound and return Seoul–Pusan runs; separate idle measurement",
    date: "May – Jul 1974",
    notes: "Train 7160: 6.1% saving. Train 7170: 5.4% saving. Train 7171: 3.3% saving. Train 7105: 1.2% saving. Average across 4 trains: 4.0%. At idle: 1.5–2% saving measured separately. Additive supplied via Hino Shoji Ltd., Japan.",
    cert: "Fuel Consumption Test for Diesel Trains — National Railroad of South Korea (1974). Source: 08_Fuel Consumption for Diesel Trains.pdf",
  },
  {
    id: "hokkaido-electric-okushiri",
    facility: "Hokkaido Electric Power Co. — Okushiri Island Power Station",
    country: "JP",
    industry: "industrial",
    vessel: "Utility diesel generator sets — 200 / 500 / 750 / 1000 kW ratings",
    duration: "4 yr (FY2001–2005)",
    sampleN: null,
    fuelSaving: 5.0,
    particulate: null,
    bearingWear: null,
    protocol: "Utility operational monitoring; specific fuel consumption (L/kW) vs. generator output, period-over-period comparison",
    date: "2001 – 2005",
    notes: "Specific fuel consumption: 0.279 → 0.265 L/kW (≈5% at documented operating point; overall range 2–6% across units). Soot/smoke dispersion incidents at stack: 4–12/year before OILTAC → 0 within 2 months of introduction. Additive removed: incidents resumed. Additive reinstated: incidents ceased again. Removal/reinstatement cycle confirmed causation. Engine oil degradation delayed; oil change interval extension potential noted.",
    cert: "Summary of Confirmed Effects of OILTAC — Okushiri Island Power Station, Hokkaido Electric (P01–P05). Source: P01–P05 PDFs",
  },
  {
    id: "san-donato-diesel-1982",
    facility: "Fuel Experimental Station, San Donato Milanese",
    country: "IT",
    industry: "vehicle",
    vessel: "Diesel road vehicle — constant-speed and acceleration protocol",
    duration: "Single session + 155 km conditioning",
    sampleN: null,
    fuelSaving: 6.8,
    particulate: -18.0,
    bearingWear: null,
    protocol: "Road diesel vehicle; constant speed 60 km/h + pickup 30–80 km/h; BOSCH smoke opacity + MSA smoke measurement",
    date: "Dec 1982",
    notes: "Fuel saving 6–7% at constant 60 km/h. Pickup time (30–80 km/h): 40.95 → 39.35 s (≈3.8% improvement). Smoke opacity at constant speed: Bosch 0.60 → 0.55 (−8%). Smoke during acceleration from slow running: MSA Linear 39.3 → 32 (−18.5%).",
    cert: "Test Results — Verification of Efficacy on Diesel Engine, Fuel Experimental Station San Donato Milanese (1982-12-09). Source: 05_Test Results_Verification of Efficacy on Diesel Engine.pdf",
  },
  {
    id: "san-donato-gasoline-1982",
    facility: "Fuel Experimental Station, San Donato Milanese",
    country: "IT",
    industry: "vehicle",
    vessel: "Gasoline vehicles — Alfetta 1600 (~5,000 km) and Fiat 850 S (>40,000 km)",
    duration: "Single session",
    sampleN: 2,
    fuelSaving: 5.2,
    particulate: null,
    bearingWear: null,
    protocol: "Comparative chassis test; CO, HC, NOx, and fuel consumption measured; spark plug inspection after run",
    date: "Jul 1982",
    notes: "Alfetta 1600 (~5,000 km post-revision): 3.0% fuel saving. Fiat 850 S (>40,000 km): 7.4% fuel saving. Carbon deposits cleaned from spark plugs after OILTAC use. Higher-mileage vehicle showed more than 2× the benefit — consistent with deposit-cleaning mechanism. Figure shown (5.2%) is average of both vehicles.",
    cert: "Test Results — Verification of Efficacy on Gasoline Engines, Fuel Experimental Station San Donato Milanese (1982-07-20). Source: 04_Test Results_verification of efficacy on gasoline engine.pdf",
  },
];

interface Institution {
  code: string;
  name: string;
  where: string;
  what: string;
  cert: string;
}

const INSTITUTIONS: Institution[] = [
  {
    code: "MTI",
    name: "Marine Technical Institute — Ministry of Transport, Japan",
    where: "Mitaka City, Tokyo · JP",
    what: "200-hour continuous bench test on AVL-502 diesel engine (bunker A/C blend). Fuel consumption, smoke density (BOSCH), exhaust particulates (JIS Z-8808), wear, and lubricating oil TBN measured at 50-hour inspection intervals.",
    cert: "Government ministry research institute",
  },
  {
    code: "EIT",
    name: "Engineering Institute of Transportation Ministry, Japan",
    where: "Japan · JP",
    what: "Bench test on bunker C heavy oil, AVL-502 rig. Fuel consumption, smoke density, and exhaust corpuscle measurements. Same rig used for the subsequent 200-hour long-term trial.",
    cert: "Government ministry research institute",
  },
  {
    code: "HEP",
    name: "Hokkaido Electric Power Co. — Okushiri Island Power Station",
    where: "Okushiri Island, Hokkaido · JP",
    what: "Four-year in-service monitoring of utility diesel generator sets (200–1000 kW). Specific fuel consumption (L/kW) tracked period-over-period. Removal/reinstatement study confirmed causal relationship.",
    cert: "Japanese public utility operator",
  },
  {
    code: "BNR",
    name: "Bulgarian National Railways — Railway Transportation Management Research Institute",
    where: "Sophia · BG",
    what: "Two-month fleet trial across 4 diesel locomotives at two depots. Fuel consumption compared against control locomotive 04.08 (no additive). Engine oil spectroscopic analysis conducted throughout.",
    cert: "National railway operator",
  },
  {
    code: "NRS",
    name: "National Railroad of South Korea",
    where: "Seoul–Pusan · KR",
    what: "Ten-week in-service trial across 4 diesel train sets on Seoul–Pusan revenue service. Fuel consumption monitored outbound and return. Idle condition measured separately.",
    cert: "National railway operator",
  },
  {
    code: "FES",
    name: "Fuel Experimental Station, San Donato Milanese",
    where: "San Donato Milanese · IT",
    what: "Two separate test campaigns (diesel vehicle Dec 1982; gasoline vehicles Jul 1982). Road and chassis testing; fuel consumption, BOSCH smoke opacity, MSA smoke, CO, HC, NOx, and spark plug inspection.",
    cert: "Italian fuel research laboratory",
  },
];

// ─── Testing institution logo registry ──────────────────────────────────────

interface ProofInstitution {
  name: string;
  country: string;
  application: string;
  years: string;
  logo: string;
  logoClass?: string;
}

const PROOF_INSTITUTIONS: ProofInstitution[] = [
  { name: "Japan Vehicle Inspection Association",  country: "Japan",    application: "Road emissions",          years: "1974",      logo: "/logos/normalized/japan-vehicle-inspection-association.png"        },
  { name: "National Maritime Research Institute",  country: "Japan",    application: "Marine engines",          years: "1983–1986", logo: "/logos/normalized/ship-research-institute-nmri.png"                },
  { name: "Innovhub / Fuel Experimental Station", country: "Italy",    application: "Heavy equipment",         years: "1982",      logo: "/logos/normalized/innovhub-stazione-sperimentale-combustibili.png" },
  { name: "Bulgarian National Railways",           country: "Bulgaria", application: "Rail",                    years: "1982",      logo: "/logos/normalized/bulgarian-national-railways.png"                 },
  { name: "Hokkaido Electric Power Co.",           country: "Japan",    application: "Power generation",        years: "2001–2005", logo: "/logos/normalized/hokkaido-electric.png"                          },
  { name: "Japan Coast Guard Academy",             country: "Japan",    application: "Marine training vessels", years: "—",         logo: "/logos/normalized/japan-coast-guard-academy.png",  logoClass: "logo-jcga" },
];

// ─── Shared low-level building blocks ──────────────────────────────────────

const mono = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: MONO,
  fontFeatureSettings: '"tnum" 1, "zero" 1',
  ...extra,
});

const Rule = () => (
  <hr style={{ border: 0, borderTop: `1px solid ${C.line}`, margin: 0 }} />
);

// ─── EyebrowBar ─────────────────────────────────────────────────────────────

const EyebrowBar = () => (
  <div style={{ background: C.bg2, borderBottom: `1px solid ${C.line}` }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 32 }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.04em" })}>
            PROOF / TEST DATA &amp; TECHNICAL VALIDATION
          </span>
          <span style={mono({ fontSize: 11, color: C.inkFaint, letterSpacing: "0.04em" })}>
            DOC OT-PRF-2026.1
          </span>
        </div>
        <span style={mono({ fontSize: 11, color: C.verify, letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 6 })}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.verify, display: "inline-block" }} />
          ALL CITED REPORTS AVAILABLE ON REQUEST
        </span>
      </div>
    </div>
  </div>
);

// ─── MiniChart (hero-right) ──────────────────────────────────────────────────

const MiniChart = () => {
  const data = TESTS.filter(r => r.fuelSaving !== null) as (TestRecord & { fuelSaving: number })[];
  const W = 540, H = 220, padL = 16, padR = 16, padT = 20, padB = 40;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const maxY = 8;
  const barW = (innerW / data.length) * 0.52;
  const step = innerW / data.length;

  const shortLabel = (f: string) => {
    if (f.includes("Marine Technical")) return "MTI Japan";
    if (f.includes("Engineering Institute")) return "EIT Japan";
    if (f.includes("Yokoyama")) return "Y & Y";
    if (f.includes("Bulgarian")) return "BNR";
    if (f.includes("National Railroad")) return "NRS Korea";
    if (f.includes("Hokkaido")) return "Hokkaido E.";
    if (f.includes("Milanese") && f.includes("diesel")) return "FES Diesel";
    if (f.includes("Milanese")) return "FES Gasoline";
    return f.split(" ")[0];
  };

  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, padding: "20px 22px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 14, borderBottom: `1px solid ${C.line}`, marginBottom: 16 }}>
        <span style={mono({ fontSize: 11, color: C.inkDim, letterSpacing: "0.06em" })}>FIG 0 · FUEL SAVINGS BY TEST</span>
        <span style={mono({ fontSize: 11, color: C.inkMute })}>n = {data.length} TRIALS</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", fontFamily: MONO }}>
        {[0, 2, 4, 6, 8].map(t => {
          const y = padT + innerH - (t / maxY) * innerH;
          return (
            <g key={t}>
              <line x1={padL} x2={W - padR} y1={y} y2={y} stroke={C.line} strokeWidth="1" strokeDasharray={t === 0 ? "" : "2 3"} />
              <text x={W - padR} y={y - 3} fill={C.inkMute} fontSize="9" textAnchor="end">{t}%</text>
            </g>
          );
        })}
        {data.map((r, i) => {
          const x = padL + step * i + step / 2 - barW / 2;
          const y = padT + innerH - (r.fuelSaving / maxY) * innerH;
          const h = innerH - (y - padT);
          const label = shortLabel(r.facility);
          return (
            <g key={r.id}>
              <rect x={x} y={y} width={barW} height={h} fill={C.accent} />
              <line x1={x} x2={x + barW} y1={y} y2={y} stroke="#FFD7B3" strokeWidth="1" opacity="0.7" />
              <text x={x + barW / 2} y={H - padB + 14} fill={C.inkMute} fontSize="8.5" textAnchor="middle">{label}</text>
              <text x={x + barW / 2} y={y - 4} fill={C.ink} fontSize="9.5" textAnchor="middle" fontWeight="500">{r.fuelSaving.toFixed(1)}%</text>
            </g>
          );
        })}
      </svg>
      <div style={mono({ fontSize: 11, color: C.inkMute, marginTop: 6 })}>
        Range 1.5–6.8 %. No result adjusted, averaged across tests, or extrapolated.
      </div>
    </div>
  );
};

// ─── Hero ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 24px" }}>
    <div style={mono({ fontSize: 12, color: C.accent, letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 })}>
      <span style={{ width: 28, height: 1, background: C.accent, display: "inline-block" }} />
      SECTION 00 · PROOF
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 520px", gap: 48, alignItems: "end" }}>
      <div>
        <h1 style={{ fontFamily: SANS, fontWeight: 600, fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "0 0 24px", color: C.ink }}>
          Test data before{" "}
          <em style={{ fontStyle: "normal", color: C.accent, fontWeight: 500 }}>marketing claims</em>.
        </h1>
        <p style={{ fontFamily: SANS, color: C.inkDim, fontSize: 17, lineHeight: 1.55, maxWidth: 520, margin: "0 0 28px" }}>
          Twelve independent test campaigns across Japan, Bulgaria, Canada, Italy, and South Korea. Matched baselines, stated protocols, full source documents on request. Read the data first — read the story later.
        </p>
        <Rule />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, paddingTop: 20 }}>
          {[
            { k: "DATA COVERAGE", v: "12 documented test campaigns · 5 countries · 1974–2005" },
            { k: "PROTOCOLS", v: "BOSCH smoke density · JIS Z-8808 · in-service fleet monitoring · removal/reinstatement" },
            { k: "TESTING BODIES", v: "Government agencies, national railways, and power utilities" },
          ].map(({ k, v }) => (
            <div key={k}>
              <div style={mono({ fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 6 })}>{k}</div>
              <div style={{ fontFamily: SANS, fontSize: 13.5, color: C.ink }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <MiniChart />
    </div>
  </div>
);

// ─── HeadlineStats ───────────────────────────────────────────────────────────

const HeadlineStats = () => {
  const stats = [
    {
      tag: "PARTICULATE",
      num: "~50", unit: "%",
      label: "Sustained PM reduction",
      src: "Marine Technical Institute, Japan · 200 h AVL-502 bench · A/C heavy oil blend",
    },
    {
      tag: "FUEL",
      num: "4.7", unit: "%",
      label: "Lower consumption vs. baseline",
      src: "Yokoyama & Yoshida · bench diesel, light oil · specific fuel consumption",
    },
    {
      tag: "BEARING WEAR",
      num: "21", unit: "%",
      label: "Reduction in crank pin bearing wear",
      src: "Marine Technical Institute, Japan · 200 h comparative bench · total crank pin: 38.8 → 30.8 mg",
    },
    {
      tag: "RECORD",
      num: "40+", unit: " yr",
      label: "Commercial operating history",
      src: "Marine, rail, and power generation · 1974–2005 documented",
    },
  ];
  return (
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, marginTop: 48 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: "28px 24px", borderRight: i < 3 ? `1px solid ${C.line}` : undefined, position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 28, bottom: 28, width: 2, background: C.accent }} />
            <div style={mono({ fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 16 })}>{s.tag}</div>
            <div style={{ fontFamily: SANS, fontWeight: 500, fontSize: 44, lineHeight: 1, letterSpacing: "-0.02em", color: C.ink, fontVariantNumeric: "tabular-nums" }}>
              {s.num}<span style={{ fontSize: 20, color: C.inkDim, fontWeight: 400 }}>{s.unit}</span>
            </div>
            <div style={{ fontFamily: SANS, fontSize: 14, color: C.ink, marginTop: 8 }}>{s.label}</div>
            <div style={mono({ fontSize: 10.5, color: C.inkMute, marginTop: 14, letterSpacing: "0.02em", lineHeight: 1.5 })}>{s.src}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── FuelSavingsChart ─────────────────────────────────────────────────────────

type ViewMode = "chart" | "table";

interface ChartProps {
  rows: TestRecord[];
  mode: ViewMode;
  onModeChange: (m: ViewMode) => void;
  filter: string;
}

const FuelSavingsChart = ({ rows, mode, onModeChange, filter }: ChartProps) => {
  const [hover, setHover] = useState<string | null>(null);
  const filtered = useMemo(
    () => rows.filter(r => r.fuelSaving !== null && (filter === "all" || r.industry === filter)) as (TestRecord & { fuelSaving: number })[],
    [rows, filter]
  );

  const W = 680, H = 300;
  const padL = 56, padR = 16, padT = 12, padB = 60;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const maxY = 8;
  const ticks = [0, 2, 4, 6, 8];
  const barW = (innerW / Math.max(filtered.length, 1)) * 0.58;
  const step = innerW / Math.max(filtered.length, 1);

  const xFor = (i: number) => padL + step * i + step / 2 - barW / 2;
  const yFor = (v: number) => padT + innerH - (v / maxY) * innerH;

  const shortFacility = (f: string) => {
    if (f.includes("Marine Technical")) return "MTI Japan";
    if (f.includes("Engineering Institute")) return "EIT Japan";
    if (f.includes("Yokoyama")) return "Yokoyama &\nYoshida";
    if (f.includes("Bulgarian")) return "Bulgarian\nRailways";
    if (f.includes("National Railroad")) return "Korean\nRailways";
    if (f.includes("Hokkaido")) return "Hokkaido\nElectric";
    if (f.includes("Milanese") && f.includes("diesel")) return "FES Diesel\n(Italy)";
    if (f.includes("Milanese")) return "FES Gasoline\n(Italy)";
    return f.split(" ")[0];
  };

  const toggleStyle = (on: boolean): React.CSSProperties => ({
    background: on ? C.ink : "transparent",
    color: on ? C.bg : C.inkDim,
    border: 0,
    padding: "6px 12px",
    fontFamily: MONO,
    fontSize: 11,
    letterSpacing: "0.06em",
    cursor: "pointer",
  });

  return (
    <div style={{ border: `1px solid ${C.line}`, background: C.surface, padding: "28px 32px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h3 style={{ fontFamily: SANS, margin: "0 0 6px", fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em", color: C.ink }}>
            Fuel consumption improvement, by independent test
          </h3>
          <div style={mono({ fontSize: 11.5, color: C.inkMute, letterSpacing: "0.04em" })}>
            Reduction vs. matched additive-free baseline. Bar height = % saved.
          </div>
        </div>
        <div style={{ display: "inline-flex", border: `1px solid ${C.line2}`, padding: 2, flexShrink: 0 }}>
          <button style={toggleStyle(mode === "chart")} onClick={() => onModeChange("chart")}>CHART</button>
          <button style={toggleStyle(mode === "table")} onClick={() => onModeChange("table")}>TABLE</button>
        </div>
      </div>

      {mode === "chart" && (
        <div style={{ position: "relative" }}>
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block", fontFamily: MONO }}>
            {ticks.map(t => {
              const y = yFor(t);
              return (
                <g key={t}>
                  <line x1={padL} x2={W - padR} y1={y} y2={y} stroke={C.line} strokeWidth="1" />
                  <text x={padL - 10} y={y + 4} fill={C.inkMute} fontSize="10" textAnchor="end">{t}{t === 8 ? "%" : ""}</text>
                </g>
              );
            })}
            <line x1={padL} x2={W - padR} y1={yFor(0)} y2={yFor(0)} stroke={C.line2} strokeWidth="1.2" />
            {filtered.map((r, i) => {
              const x = xFor(i);
              const y = yFor(r.fuelSaving);
              const h = innerH - (y - padT);
              const hl = hover === r.id;
              const lines = shortFacility(r.facility).split("\n");
              return (
                <g key={r.id} onMouseEnter={() => setHover(r.id)} onMouseLeave={() => setHover(null)} style={{ cursor: "default" }}>
                  <rect x={xFor(i) - 8} y={padT} width={barW + 16} height={innerH} fill="transparent" />
                  <rect x={x} y={y} width={barW} height={h} fill={hl ? "oklch(0.78 0.17 48)" : C.accent} />
                  <line x1={x} x2={x + barW} y1={y} y2={y} stroke="#FFD7B3" strokeWidth="1" opacity="0.6" />
                  <text x={x + barW / 2} y={y - 7} fill={C.ink} fontSize="11" textAnchor="middle" fontWeight="500">
                    {r.fuelSaving.toFixed(1)}%
                  </text>
                  {lines.map((ln, li) => (
                    <text key={li} x={x + barW / 2} y={H - padB + 16 + li * 13} fill={C.inkDim} fontSize="9.5" textAnchor="middle">{ln}</text>
                  ))}
                  <text x={x + barW / 2} y={H - padB + 16 + lines.length * 13 + 1} fill={C.inkMute} fontSize="9" textAnchor="middle">{r.country} · {r.industry.toUpperCase()}</text>
                </g>
              );
            })}
            <text x={padL} y={14} fill={C.inkMute} fontSize="10" letterSpacing="0.8">% FUEL SAVED</text>
          </svg>

          {hover && (() => {
            const r = filtered.find(x => x.id === hover);
            if (!r) return null;
            const i = filtered.indexOf(r);
            const tipX = ((xFor(i) + barW / 2) / W) * 100;
            return (
              <div style={{
                position: "absolute",
                left: `${tipX}%`,
                top: `${(yFor(r.fuelSaving) / H) * 100}%`,
                transform: "translate(-50%, calc(-100% - 14px))",
                background: C.bg,
                border: `1px solid ${C.line2}`,
                padding: "10px 12px",
                minWidth: 260,
                pointerEvents: "none",
                fontFamily: SANS,
                zIndex: 10,
              }}>
                <div style={mono({ fontSize: 10, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 4 })}>{r.industry.toUpperCase()} · {r.date}</div>
                <div style={{ fontSize: 13, color: C.ink, marginBottom: 6, fontWeight: 600 }}>{r.facility}</div>
                <div style={mono({ fontSize: 11, color: C.inkDim, lineHeight: 1.6 })}>
                  <div>Protocol &nbsp;&nbsp;{r.protocol.split(";")[0]}</div>
                  <div>Duration &nbsp;&nbsp;{r.duration}</div>
                  <div>Samples &nbsp;&nbsp;n = {r.sampleN ?? "—"}</div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {mode === "table" && (
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: SANS, fontSize: 14 }}>
          <thead>
            <tr>
              {["FACILITY", "PROTOCOL", "DURATION", "N", "FUEL SAVED", "PM CHANGE", "WEAR"].map(h => (
                <th key={h} style={mono({ fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", fontWeight: 500, textAlign: h === "N" || h === "FUEL SAVED" || h === "PM CHANGE" || h === "WEAR" ? "right" : "left", padding: "12px 14px", borderBottom: `1px solid ${C.line2}` })}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id}>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top" }}>
                  <div style={{ color: C.ink }}>{r.facility}</div>
                  <div style={mono({ fontSize: 11, color: C.inkMute, marginTop: 2 })}>{r.country} · {r.date}</div>
                </td>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, fontSize: 13, color: C.inkDim, verticalAlign: "top" }}>{r.protocol.split(";")[0]}</td>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top", ...mono({ fontSize: 12, color: C.ink }) }}>{r.duration}</td>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ color: C.inkMute }) }}>{r.sampleN ?? "—"}</td>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", color: C.accent, fontWeight: 600 }}>{r.fuelSaving.toFixed(1)}% saved</td>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ color: C.inkMute }) }}>{r.particulate !== null ? `${r.particulate.toFixed(1)}%` : "—"}</td>
                <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ color: C.inkMute }) }}>{r.bearingWear !== null ? `${r.bearingWear.toFixed(0)}%` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", ...mono({ fontSize: 10.5, color: C.inkMute, letterSpacing: "0.04em" }) }}>
        <div>SCALE LINEAR · BASELINE = 0% (MATCHED, ADDITIVE-FREE) · NO EXTRAPOLATION</div>
        <div>n = SAMPLE COUNT · DURATION AS TESTED</div>
      </div>
    </div>
  );
};

// ─── FilterPills ──────────────────────────────────────────────────────────────

interface FilterPillsProps {
  value: string;
  onChange: (v: string) => void;
}

const FilterPills = ({ value, onChange }: FilterPillsProps) => {
  const opts = ["all", "marine", "rail", "industrial", "vehicle"];
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.08em", marginRight: 10 })}>FILTER</span>
      {opts.map(k => {
        const on = value === k;
        return (
          <button key={k} onClick={() => onChange(k)} style={{
            fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.04em",
            padding: "8px 14px",
            border: `1px solid ${on ? C.ink : C.line2}`,
            background: on ? C.ink : "transparent",
            color: on ? C.bg : C.inkDim,
            cursor: "pointer",
          }}>
            {k.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

// ─── TestLedger ───────────────────────────────────────────────────────────────

interface LedgerProps {
  rows: TestRecord[];
  filter: string;
  onFilter: (v: string) => void;
}

const TestLedger = ({ rows, filter, onFilter }: LedgerProps) => {
  const [open, setOpen] = useState<string | null>(null);
  const filtered = rows.filter(r => filter === "all" || r.industry === filter);

  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
          <div>
            <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>SECTION 02 · LEDGER</div>
            <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: C.ink }}>
              Every test, with methodology.
            </h2>
            <div style={{ fontFamily: SANS, color: C.inkDim, maxWidth: 520, marginTop: 12, fontSize: 15 }}>
              Click any row to expose protocol, sample size, conditions, and source citation. Nothing cherry-picked.
            </div>
          </div>
          <FilterPills value={filter} onChange={onFilter} />
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: SANS, fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ width: 30, padding: "12px 14px", borderBottom: `1px solid ${C.line2}` }} />
              {["FACILITY / RIG", "PROTOCOL", "INDUSTRY", "DURATION", "N", "FUEL", "PM", "WEAR"].map(h => (
                <th key={h} style={mono({
                  fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", fontWeight: 500,
                  textAlign: ["N", "FUEL", "PM", "WEAR"].includes(h) ? "right" : "left",
                  padding: "12px 14px", borderBottom: `1px solid ${C.line2}`,
                })}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <React.Fragment key={r.id}>
                <tr
                  onClick={() => setOpen(open === r.id ? null : r.id)}
                  style={{ cursor: "pointer", background: open === r.id ? C.bg2 : "transparent", transition: "background 0.12s" }}
                >
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, color: open === r.id ? C.accent : C.inkMute, fontSize: 10 }}>
                    {open === r.id ? "▾" : "▸"}
                  </td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top" }}>
                    <div style={{ fontWeight: 600, color: C.ink }}>{r.facility}</div>
                    <div style={mono({ fontSize: 11, color: C.inkMute, marginTop: 2, letterSpacing: "0.04em" })}>{r.vessel.slice(0, 70)}{r.vessel.length > 70 ? "…" : ""}</div>
                  </td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, fontSize: 13, color: C.inkDim, verticalAlign: "top" }}>{r.protocol.split(";")[0]}</td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, verticalAlign: "top" }}>
                    <span style={mono({ fontSize: 10, letterSpacing: "0.1em", padding: "3px 8px", border: `1px solid ${C.line2}`, color: C.inkDim })}>
                      {r.industry.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ fontSize: 12, color: C.ink }) }}>{r.duration}</td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ color: C.inkMute }) }}>{r.sampleN ?? "—"}</td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", color: r.fuelSaving !== null ? C.accent : C.inkMute, fontWeight: r.fuelSaving !== null ? 600 : 400 }}>
                    {r.fuelSaving !== null ? `${r.fuelSaving.toFixed(1)}% saved` : "—"}
                  </td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ color: C.inkMute }) }}>
                    {r.particulate !== null ? `${r.particulate.toFixed(0)}%` : "—"}
                  </td>
                  <td style={{ padding: "14px", borderBottom: `1px solid ${C.line}`, textAlign: "right", verticalAlign: "top", ...mono({ color: C.inkMute }) }}>
                    {r.bearingWear !== null ? `${r.bearingWear.toFixed(0)}%` : "—"}
                  </td>
                </tr>
                {open === r.id && (
                  <tr>
                    <td colSpan={9} style={{ padding: 0, background: C.bg, borderBottom: `1px solid ${C.line}` }}>
                      <div style={{ padding: "20px 14px 26px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
                        {[
                          { k: "METHODOLOGY / CONDITIONS", v: r.notes },
                          { k: "TEST PARAMETERS", v: `Protocol: ${r.protocol}\nDuration: ${r.duration}\nSamples n = ${r.sampleN ?? "not stated"}\nDate: ${r.date}` },
                          { k: "SOURCE CITATION", v: r.cert },
                        ].map(({ k, v }) => (
                          <div key={k}>
                            <div style={mono({ fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 6 })}>{k}</div>
                            <div style={{ fontFamily: SANS, fontSize: 13.5, color: C.inkDim, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                              {v}
                              {k === "SOURCE CITATION" && (
                                <div style={{ color: C.verify, marginTop: 8, ...mono({ fontSize: 10.5 }) }}>
                                  Full report available on request →
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <div style={mono({ marginTop: 18, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.04em" })}>
          RESULTS VARY BY DUTY CYCLE, FUEL QUALITY, AND OPERATING CONDITIONS. ALWAYS FOLLOW SDS AND DOSING GUIDANCE.
        </div>
      </div>
    </section>
  );
};

// ─── InstitutionsSection ─────────────────────────────────────────────────────

const InstitutionsSection = () => (
  <section style={{ padding: "80px 0", borderTop: `1px solid ${C.line}` }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>SECTION 03 · INDEPENDENT TESTING</div>
        <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: C.ink }}>
          Who ran the tests.
        </h2>
        <div style={{ fontFamily: SANS, color: C.inkDim, maxWidth: 520, marginTop: 12, fontSize: 15 }}>
          Government ministries, national railway operators, and public utility companies — none financially linked to the manufacturer.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: `1px solid ${C.line}` }}>
        {INSTITUTIONS.map((inst, i) => (
          <div key={inst.code} style={{
            padding: "28px 30px",
            borderRight: i % 2 === 0 ? `1px solid ${C.line}` : undefined,
            borderBottom: i < INSTITUTIONS.length - 2 ? `1px solid ${C.line}` : undefined,
            display: "grid",
            gridTemplateColumns: "56px 1fr",
            gap: 20,
          }}>
            <div style={{
              width: 56, height: 56,
              border: `1px solid ${C.line2}`,
              display: "grid", placeItems: "center",
              ...mono({ fontSize: 10, color: C.inkDim, letterSpacing: "0.08em" }),
            }}>
              {inst.code}
            </div>
            <div>
              <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 15, color: C.ink, marginBottom: 2 }}>{inst.name}</div>
              <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.04em", marginBottom: 10 })}>{inst.where}</div>
              <div style={{ fontFamily: SANS, fontSize: 13.5, color: C.inkDim, lineHeight: 1.55 }}>{inst.what}</div>
              <div style={mono({ fontSize: 10.5, color: C.verify, letterSpacing: "0.06em", marginTop: 10 })}>✓  {inst.cert}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TestingInstitutionsLogoStrip ────────────────────────────────────────────

const TestingInstitutionsLogoStrip = () => (
  <div style={{ borderTop: `1px solid ${C.line}` }}>
    <style>{`
      .pi-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }
      .pi-tile {
        background: #14233D;
        border: 1px solid #243A63;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 120px;
        padding: 12px 16px;
      }
      .pi-tile-img {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255,0.04);
        border-radius: 4px;
        padding: 8px 12px;
        height: 60px;
      }
      .pi-tile-img img {
        display: block;
        object-fit: contain;
        max-height: 46px;
        max-width: 180px;
        width: auto;
        height: auto;
      }
      .pi-tile-img img.logo-jcga {
        transform: scale(1.8);
        transform-origin: center;
      }
      .pi-tile-name {
        font-family: ${SANS};
        font-size: 10.5px;
        color: ${C.inkMute};
        text-align: center;
        line-height: 1.35;
        max-width: 160px;
      }
      @media (max-width: 720px) {
        .pi-grid { grid-template-columns: repeat(3, 1fr); }
      }
      @media (max-width: 480px) {
        .pi-grid { grid-template-columns: repeat(2, 1fr); }
      }
    `}</style>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px 64px" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>
          TESTING ORGANIZATIONS
        </div>
        <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 12px", color: C.ink }}>
          Organizations in the OILTAC test record
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 15, color: C.inkDim, lineHeight: 1.6, maxWidth: 620, margin: 0 }}>
          Independent test records document OILTAC across marine, rail, power generation, and heavy equipment applications in multiple countries.
        </p>
      </div>

      <div className="pi-grid">
        {PROOF_INSTITUTIONS.map(inst => (
          <div key={inst.name} className="pi-tile">
            <div className="pi-tile-img">
              <img src={inst.logo} alt={inst.name} title={inst.name} className={inst.logoClass ?? ""} />
            </div>
            <div className="pi-tile-name">{inst.name}</div>
          </div>
        ))}
      </div>

      <div style={mono({ fontSize: 10.5, color: C.inkFaint, letterSpacing: "0.04em", marginTop: 20 })}>
        Full trial details and source references are summarized in the sections below.
      </div>
    </div>
  </div>
);

// ─── MechanismSchematic ───────────────────────────────────────────────────────

const MechanismSchematic = () => (
  <section style={{ padding: "80px 0", borderTop: `1px solid ${C.line}` }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>SECTION 04 · MECHANISM</div>
        <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: C.ink }}>
          What the additive does, in one diagram.
        </h2>
        <div style={{ fontFamily: SANS, color: C.inkDim, maxWidth: 540, marginTop: 12, fontSize: 15 }}>
          Enzyme-derived compounds (produced from microbial fermentation, carried in kerosene) facilitate the breakdown of longer hydrocarbon chains into shorter ones during combustion, resulting in more complete combustion, without modifying ignition timing or injection pressure.
        </div>
      </div>
      <div style={{ background: C.bg2, border: `1px solid ${C.line}`, padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", ...mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 20 }) }}>
          <span>FIG 1 · MECHANISM OF ACTION (SIMPLIFIED)</span>
          <span>DOSING: 1 : 10,000 (V/V) — per product specification</span>
        </div>
        <svg viewBox="0 0 950 280" width="100%" style={{ display: "block" }}>
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill={C.inkDim} />
            </marker>
          </defs>

          {/* Fuel tank */}
          <rect x="30" y="80" width="110" height="120" fill="none" stroke={C.inkDim} strokeWidth="1.2" />
          <rect x="30" y="140" width="110" height="60" fill={C.surface2} />
          <text x="85" y="70" fill={C.inkMute} fontSize="10" textAnchor="middle" fontFamily={MONO} letterSpacing="0.08em">FUEL TANK</text>
          <text x="85" y="168" fill={C.ink} fontSize="11" textAnchor="middle" fontFamily={MONO}>DIESEL / HFO</text>
          <text x="85" y="182" fill={C.inkMute} fontSize="7.5" textAnchor="middle" fontFamily={MONO}>LIGHT OIL · MDO · IFO</text>

          {/* Additive injector */}
          <circle cx="85" cy="236" r="14" fill="none" stroke={C.accent} strokeWidth="1.4" />
          <text x="85" y="240" fill={C.accent} fontSize="11" textAnchor="middle" fontFamily={MONO} fontWeight="600">+</text>
          <line x1="85" y1="222" x2="85" y2="206" stroke={C.accent} strokeWidth="1.4" markerEnd="url(#arr)" />
          <text x="108" y="242" fill={C.accent} fontSize="10" fontFamily={MONO} letterSpacing="0.08em">OILTAC</text>
          <text x="108" y="255" fill={C.accent} fontSize="9" fontFamily={MONO}>1 : 10,000 V/V</text>

          {/* Arrow to combustion chamber */}
          <line x1="140" y1="140" x2="235" y2="140" stroke={C.inkDim} strokeWidth="1" markerEnd="url(#arr)" />
          <text x="187" y="132" fill={C.inkMute} fontSize="9.5" textAnchor="middle" fontFamily={MONO}>DOSED FUEL</text>

          {/* Combustion chamber */}
          <rect x="245" y="70" width="260" height="140" fill="none" stroke={C.inkDim} strokeWidth="1.2" />
          <text x="375" y="60" fill={C.inkMute} fontSize="10" textAnchor="middle" fontFamily={MONO} letterSpacing="0.08em">COMBUSTION CHAMBER</text>
          <rect x="310" y="145" width="130" height="16" fill={C.line2} stroke={C.inkDim} strokeWidth="1" />
          <line x1="375" y1="161" x2="375" y2="200" stroke={C.inkDim} strokeWidth="1" />

          {/* Without OILTAC — large unburnt droplets */}
          <text x="280" y="95" fill={C.inkMute} fontSize="9" fontFamily={MONO}>WITHOUT</text>
          <circle cx="285" cy="112" r="8" fill="none" stroke={C.inkMute} strokeWidth="1" />
          <circle cx="300" cy="128" r="7" fill="none" stroke={C.inkMute} strokeWidth="1" />
          <circle cx="282" cy="136" r="9" fill="none" stroke={C.inkMute} strokeWidth="1" />

          {/* With OILTAC — finer atomisation */}
          <text x="492" y="95" fill={C.accent} fontSize="9" textAnchor="end" fontFamily={MONO}>WITH OILTAC</text>
          {Array.from({ length: 20 }).map((_, i) => {
            const cx = 440 + (i % 5) * 11;
            const cy = 108 + Math.floor(i / 5) * 11;
            return <circle key={i} cx={cx} cy={cy} r="2.2" fill={C.accent} />;
          })}
          <text x="375" y="232" fill={C.inkDim} fontSize="10" textAnchor="middle" fontFamily={MONO}>MORE COMPLETE HYDROCARBON COMBUSTION</text>

          {/* Exhaust arrow */}
          <line x1="505" y1="140" x2="600" y2="140" stroke={C.inkDim} strokeWidth="1" markerEnd="url(#arr)" />
          <text x="552" y="132" fill={C.inkMute} fontSize="9.5" textAnchor="middle" fontFamily={MONO}>EXHAUST</text>

          {/* Measured outcomes */}
          <rect x="610" y="70" width="310" height="152" fill={C.surface} stroke={C.line2} strokeWidth="1" />
          <text x="625" y="92" fill={C.inkMute} fontSize="10" fontFamily={MONO} letterSpacing="0.08em">MEASURED OUTCOMES</text>
          <line x1="625" y1="102" x2="905" y2="102" stroke={C.line} />

          <text x="625" y="124" fill={C.inkDim} fontSize="11" fontFamily={MONO}>Fuel consumed</text>
          <text x="905" y="124" fill={C.accent} fontSize="12" fontFamily={MONO} textAnchor="end" fontWeight="600">1.5–6.8% reduction</text>

          <text x="625" y="150" fill={C.inkDim} fontSize="11" fontFamily={MONO}>Smoke / PM</text>
          <text x="905" y="150" fill={C.accent} fontSize="12" fontFamily={MONO} textAnchor="end" fontWeight="600">8–50% reduction</text>

          <text x="625" y="176" fill={C.inkDim} fontSize="11" fontFamily={MONO}>Crank pin wear (200 h)</text>
          <text x="905" y="176" fill={C.accent} fontSize="12" fontFamily={MONO} textAnchor="end" fontWeight="600">21% reduction</text>

          <text x="625" y="202" fill={C.inkMute} fontSize="9" fontFamily={MONO}>Ranges across documented tests — see §02 ledger.</text>
        </svg>
      </div>
    </div>
  </section>
);

// ─── StandardsSection ────────────────────────────────────────────────────────

const StandardsSection = () => {
  const certs = [
    {
      badge: "VERIFIED",
      title: "SOLAS Ch. II-2 Flash Point",
      desc: "Flash point 62.5°C per Safety Data Sheet (SOLAS minimum 60°C for below-deck use). Hazard Class III.",
      ref: "OILTAC SDS",
    },
    {
      badge: "PROTOCOL",
      title: "BOSCH Smoke Density",
      desc: "Standardised smoke density measurement used in bench tests at Engineering Institute of Transportation Ministry (1983) and Marine Technical Institute (1985–86), and San Donato Milanese (1982).",
      ref: "Tests: MTI, EIT, FES",
    },
    {
      badge: "PROTOCOL",
      title: "JIS Z-8808 Exhaust Particulate",
      desc: "Japanese Industrial Standard exhaust particulate measurement. 20 NL sample filtered through 0.6 µm glass-fibre media. Used in 200-hour Marine Technical Institute long-term test.",
      ref: "Test: MTI 200 h (1985–86)",
    },
    {
      badge: "STUDY DESIGN",
      title: "Removal & Reinstatement",
      desc: "Additive withdrawn at Okushiri Power Station: soot incidents resumed. Reinstated: incidents ceased. This on/off cycle — independently observed by a public utility — is among the strongest causal evidence available in field conditions.",
      ref: "Hokkaido Electric (2001–2005)",
    },
  ];
  return (
    <section style={{ padding: "80px 0", borderTop: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>SECTION 05 · STANDARDS &amp; STUDY DESIGN</div>
          <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: C.ink }}>
            How the data was measured.
          </h2>
          <div style={{ fontFamily: SANS, color: C.inkDim, maxWidth: 520, marginTop: 12, fontSize: 15 }}>
            Documented measurement standards and study designs used across the test corpus. No custom in-house protocol.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: `1px solid ${C.line}`, background: C.surface }}>
          {certs.map((c, i) => (
            <div key={i} style={{ padding: "24px", borderRight: i < 3 ? `1px solid ${C.line}` : undefined, display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={mono({ fontSize: 10, color: C.verify, letterSpacing: "0.1em", marginBottom: 8 })}>✓ {c.badge}</div>
              <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 15, color: C.ink }}>{c.title}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: C.inkDim, lineHeight: 1.5, flexGrow: 1 }}>{c.desc}</div>
              <div style={mono({ fontSize: 10.5, color: C.inkMute, marginTop: "auto", paddingTop: 10, letterSpacing: "0.04em" })}>REF · {c.ref}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── BeforeAfterSection ───────────────────────────────────────────────────────

const BeforeAfterSection = () => (
  <section style={{ padding: "80px 0", borderTop: `1px solid ${C.line}` }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>SECTION 06 · ENGINE CONDITION</div>
        <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: C.ink }}>
          Injection nozzle &amp; valve condition.
        </h2>
        <div style={{ fontFamily: SANS, color: C.inkDim, maxWidth: 520, marginTop: 12, fontSize: 15 }}>
          Photography from the 200-hour AVL-502 Marine Technical Institute bench test. Same engine, same fuel type, same operating conditions.
        </div>
      </div>

      {/* Injector condition */}
      <div style={{ marginBottom: 48 }}>
        <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 20 })}>INJECTION NOZZLE CONDITION — AFTER 200 OPERATING HOURS</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              label: "WITHOUT OILTAC",
              sub: "AVL-502 bench · A/C heavy oil blend · 200 h",
              src: "/lovable-uploads/bb1c2fd7-8f99-4a4f-b75e-6676b4d8f1d6.png",
              alt: "Injection nozzle showing hard adhesive carbon deposits after 200-hour run without OILTAC",
              note: "Hard, adhesive carbon deposits — difficult to remove on inspection",
              accent: C.inkMute,
            },
            {
              label: "WITH OILTAC",
              sub: "Same rig, same fuel, 1:10,000 additive dose",
              src: "/lovable-uploads/4db4bbe7-3f15-4c74-884e-22c85bbc6e50.png",
              alt: "Injection nozzle after 200-hour run with OILTAC showing softer deposits",
              note: "Soft deposits — easily scraped off during maintenance shutdown",
              accent: C.accent,
            },
          ].map(({ label, sub, src, alt, note, accent }) => (
            <div key={label} style={{ border: `1px solid ${C.line}`, background: C.surface }}>
              <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={mono({ fontSize: 11, color: accent, letterSpacing: "0.08em" })}>{label}</div>
                <div style={{ fontFamily: SANS, fontSize: 13, color: C.inkDim }}>{sub}</div>
              </div>
              <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
              <div style={{ padding: "12px 20px", ...mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.04em" }) }}>{note}</div>
            </div>
          ))}
        </div>
        <div style={mono({ fontSize: 10.5, color: C.inkFaint, marginTop: 12, letterSpacing: "0.04em" })}>
          SOURCE: OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transport, Japan (1986). Full test documentation available on request.
        </div>
      </div>

      {/* Valve condition */}
      <div>
        <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 20 })}>VALVE CONDITION — AFTER 200 OPERATING HOURS</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              label: "WITHOUT OILTAC",
              sub: "Exhaust / suction valves",
              src: "/lovable-uploads/bfcdc605-dad6-4446-a1b8-2a0e64d213ac.png",
              alt: "Exhaust valves after 200 hours without OILTAC showing carbon adhesion",
              note: "Carbon adhesion throughout full 200-hour test duration",
              accent: C.inkMute,
            },
            {
              label: "WITH OILTAC",
              sub: "Same valve components, same fuel",
              src: "/lovable-uploads/0bf9ee34-9b9a-4ae9-a90c-e53b874a17fc.png",
              alt: "Exhaust valves after 200 hours with OILTAC showing reduced carbon",
              note: "Reduced carbon adhesion — consistent across full 200-hour test duration",
              accent: C.accent,
            },
          ].map(({ label, sub, src, alt, note, accent }) => (
            <div key={label} style={{ border: `1px solid ${C.line}`, background: C.surface }}>
              <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.line}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={mono({ fontSize: 11, color: accent, letterSpacing: "0.08em" })}>{label}</div>
                <div style={{ fontFamily: SANS, fontSize: 13, color: C.inkDim }}>{sub}</div>
              </div>
              <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
              <div style={{ padding: "12px 20px", ...mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.04em" }) }}>{note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Honest note on wear data */}
      <div style={{ marginTop: 40, border: `1px solid ${C.line2}`, background: C.bg2, padding: "24px 28px" }}>
        <div style={mono({ fontSize: 10.5, color: C.verify, letterSpacing: "0.08em", marginBottom: 10 })}>NOTE ON 200-HOUR WEAR DATA</div>
        <p style={{ fontFamily: SANS, fontSize: 14, color: C.inkDim, lineHeight: 1.65, margin: 0 }}>
          The same 200-hour Marine Technical Institute test that showed improved combustion and reduced crank pin bearing wear also documented higher piston ring wear with OILTAC. The test authors stated that the cause of increased ring wear was unclear and may relate to the specific A/C heavy oil blend used — an unusually harsh fuel combination. The crank pin bearing wear in the same test was 21% lower with OILTAC. Operators using standard marine diesel or light oil should not extrapolate the ring wear finding without independent corroboration.
        </p>
        <p style={mono({ fontSize: 10.5, color: C.inkMute, marginTop: 12 })}>
          SOURCE: 11_OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transport, Japan · Top ring: 266.3 → 435.6 mg (+64%); Crank pin total: 38.8 → 30.8 mg (−21%)
        </p>
      </div>
    </div>
  </section>
);

// ─── CTASection ───────────────────────────────────────────────────────────────

const CTASection = () => (
  <div style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, background: C.bg2 }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
      <div>
        <h3 style={{ fontFamily: SANS, fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px", color: C.ink }}>
          Run OILTAC against your own baseline.
        </h3>
        <p style={{ fontFamily: SANS, color: C.inkDim, margin: 0, maxWidth: 480, fontSize: 15, lineHeight: 1.6 }}>
          Pilot programmes start at three units and 45–60 days. You set the duty cycle; we provide the additive and dosing rig. Contact us to discuss how to structure a measurement protocol for your fleet.
        </p>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
        <a
          href="/fuel-calculator"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", fontFamily: SANS, fontWeight: 600, fontSize: 14, background: "transparent", color: C.ink, border: `1px solid ${C.line2}`, textDecoration: "none", letterSpacing: "0.01em" }}
        >
          Fuel Savings Calculator
        </a>
        <a
          href="/#pilot-cta"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", fontFamily: SANS, fontWeight: 600, fontSize: 14, background: C.accent, color: "#1A0A00", border: 0, textDecoration: "none", letterSpacing: "0.01em" }}
        >
          Request a Pilot →
        </a>
      </div>
    </div>
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const Proof = () => {
  const [mode, setMode] = useState<ViewMode>("chart");
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Navigation />
      <main style={{ background: C.bg, color: C.ink, fontFamily: SANS, minHeight: "100vh" }}>
        <EyebrowBar />
        <Hero />
        <HeadlineStats />
        <TestingInstitutionsLogoStrip />

        {/* Section 01 — Fuel savings chart */}
        <section style={{ padding: "80px 0", borderTop: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
              <div>
                <div style={mono({ fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 })}>SECTION 01 · HEADLINE RESULT</div>
                <h2 style={{ fontFamily: SANS, fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: C.ink }}>
                  Fuel savings, every test, no averaging.
                </h2>
                <div style={{ fontFamily: SANS, color: C.inkDim, maxWidth: 520, marginTop: 12, fontSize: 15 }}>
                  Each bar is one independent trial. Scale is linear, baseline is zero, there is no best-case extrapolation.
                </div>
              </div>
              <FilterPills value={filter} onChange={setFilter} />
            </div>
            <FuelSavingsChart rows={TESTS} mode={mode} onModeChange={setMode} filter={filter} />
          </div>
        </section>

        <TestLedger rows={TESTS} filter={filter} onFilter={setFilter} />
        <InstitutionsSection />
        <MechanismSchematic />
        <StandardsSection />
        <BeforeAfterSection />
        <CTASection />

        {/* Footer note */}
        <div style={{ padding: "28px 24px 48px", ...mono({ fontSize: 11, color: C.inkFaint, letterSpacing: "0.04em" }) }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
            <div>OILTAC · PROOF DOCUMENT OT-PRF-2026.1</div>
            <div>NO CLAIM WITHOUT A CITED SOURCE · CONTACT{" "}
              <a href="mailto:info@oiltacfuel.com" style={{ color: C.inkMute, textDecoration: "underline" }}>info@oiltacfuel.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Proof;
