// Canonical marketing claims — single source of truth for every figure that
// appears on more than one page. Every value MUST be traceable to
// OILTAC_Master_Reference.md (the verified test-data corpus); the section
// reference is noted beside each value. If a number changes, change it HERE
// and it propagates to the homepage, /proof, and /industries.
//
// NOT covered by this module (keep in sync manually when values change):
//   - index.html <meta name="description"> (static HTML, cannot import TS)
//   - public/llms.txt, public/oiltac.md, public/oiltac-technical-reference.md
//     (AI-crawler corpus files served as static assets)
//
// Numeric ranges are stored WITHOUT the % sign so call sites can style the
// unit separately (the hero panel renders % in a smaller span).

export const CLAIMS = {
  // Fuel consumption
  fuelReductionAllTests: "1.5–6.8", // % — range across documented independent tests (MR §5 summary table)
  fuelReductionFieldOps: "2–6", // % — multi-year utility field operation, Okushiri (MR §2.12)
  fuelReductionMarine: "1.5–2", // % — marine diesel bench + 200-h test (MR §2.2, §2.10)
  fuelReductionConstantLoad: "Up to 6.8", // % — Italian diesel road test, constant 60 km/h (MR §2.5)
  fuelReductionAccel: "3–4", // % — Italian diesel road test, pickup 30–80 km/h (MR §2.5)
  fuelReductionBulgarianRail: "0.5–4.4", // % — Bulgarian National Railways, 4 locomotives (MR §2.7)
  fuelReductionKoreanRail: "0.6–6.1", // % — National Railroad of South Korea, per-consist (MR §2.8)
  fuelReductionRailIdle: "1.5–2", // % — Korean trial, idle measured separately (MR §2.8)

  // Emissions & combustion by-products
  pmReductionBench: "10–18", // % — exhaust particulates, 1983 marine bench, Bunker C (MR §2.2)
  smokePmRangeAllTests: "3–18.5", // % — smoke opacity + PM across documented tests (MR §2.2, §2.5)
  smokeOpacityAccel: "18.5", // % — MSA linear, acceleration from idle, Italy 1982 (MR §2.5)
  sootIncidents: "4–12/yr → 0", // Okushiri stack soot events, removal/reinstatement confirmed (MR §2.12)
  sootIncidentsCompact: "4–12→0", // tight variant for narrow stat layouts

  // Record & coverage
  testCampaigns: 12, // documented campaigns in the corpus (MR §2)
  countries: 5, // Japan, Bulgaria, Canada, Italy, South Korea (MR §2)
  yearsSpan: "1974–2005", // earliest (JVIA 1974) to latest (Okushiri FY2005) documented test
  commercialYears: "40+", // years of commercial operation

  // Offer
  pilotDays: "45–60", // days — pilot programme duration (must match outreach materials)
} as const;
