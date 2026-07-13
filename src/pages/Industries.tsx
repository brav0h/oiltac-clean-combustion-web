import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CLAIMS } from "@/content/claims";
import {
  HorizCompareChart,
  StatCard,
  VertBarChart,
  DepositCompareCard,
  StatCardPair,
} from "@/components/ProofCharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ─── Design tokens ────────────────────────────────────────────────────────────
const NAVY   = "#1B2A4A";
const ORANGE = "#F97316";
const MONO   = '"IBM Plex Mono", ui-monospace, Menlo, monospace';
const SANS   = '"Inter Tight", "Inter", Helvetica, Arial, sans-serif';

// ─── MetricCard ───────────────────────────────────────────────────────────────

interface MetricCardProps { value: string; label: string; accent?: boolean; }

const MetricCard = ({ value, label, accent = false }: MetricCardProps) => (
  <div style={{
    background: "#F8FAFC",
    border: "1px solid #E2E8F0",
    borderRadius: 5,
    padding: "11px 14px 10px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  }}>
    <div style={{
      fontFamily: SANS,
      fontSize: 18,
      fontWeight: 700,
      color: accent ? ORANGE : NAVY,
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
    }}>
      {value}
    </div>
    <div style={{
      fontFamily: MONO,
      fontSize: 9,
      color: "#718096",
      letterSpacing: "0.04em",
      lineHeight: 1.4,
    }}>
      {label}
    </div>
  </div>
);

// ─── EvidenceChip ─────────────────────────────────────────────────────────────

const EvidenceChip = ({ label }: { label: string }) => (
  <span style={{
    display: "inline-block",
    fontFamily: MONO,
    fontSize: 9,
    letterSpacing: "0.07em",
    color: "#718096",
    background: "#EDF2F7",
    border: "1px solid #CBD5E0",
    borderRadius: 3,
    padding: "2px 6px",
    marginRight: 8,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    flexShrink: 0,
  }}>
    {label}
  </span>
);

// ─── EvidenceList ─────────────────────────────────────────────────────────────

const EvidenceList = ({ items }: { items: string[] }) => (
  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
    {items.map((item, i) => (
      <li key={i} style={{
        display: "flex", gap: 10, alignItems: "flex-start",
        fontSize: 13.5, color: "#4A5568", fontFamily: SANS, lineHeight: 1.55,
      }}>
        <span style={{
          flexShrink: 0, marginTop: 6,
          width: 5, height: 5,
          borderRadius: "50%", background: ORANGE, display: "inline-block",
        }} />
        {item}
      </li>
    ))}
  </ul>
);

// ─── IndustryJumpNav ─────────────────────────────────────────────────────────

const JUMP_LINKS = [
  { label: "Marine",           href: "#marine"    },
  { label: "Heavy Equipment",  href: "#offroad"   },
  { label: "Industrial Power", href: "#power"     },
  { label: "Rail",             href: "#rail"      },
  { label: "Engine Condition", href: "#condition" },
];

const IndustryJumpNav = () => (
  <nav style={{
    background: NAVY,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 40,
    overflowX: "auto",
  }}>
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", display: "flex" }}>
      {JUMP_LINKS.map(link => (
        <a
          key={link.href}
          href={link.href}
          style={{
            display: "inline-block",
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: "0.07em",
            color: "rgba(255,255,255,0.6)",
            padding: "11px 16px",
            textDecoration: "none",
            borderBottom: "2px solid transparent",
            whiteSpace: "nowrap",
            transition: "color 0.14s ease, border-color 0.14s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ORANGE;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
            (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "transparent";
          }}
        >
          {link.label.toUpperCase()}
        </a>
      ))}
    </div>
  </nav>
);

// ─── SectionShell ─────────────────────────────────────────────────────────────

interface SectionShellProps {
  id: string;
  title: string;
  context: string;
  altBg?: boolean;
  children: React.ReactNode;
}

const SectionShell = ({ id, title, context, altBg = false, children }: SectionShellProps) => (
  <section id={id} style={{
    padding: "80px 0",
    borderBottom: "1px solid #E2E8F0",
    background: altBg ? "#F8FAFC" : "#fff",
    scrollMarginTop: 48,
  }}>
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
      <div style={{ width: 28, height: 3, background: ORANGE, borderRadius: 2, marginBottom: 14 }} />
      <h2 style={{
        fontFamily: SANS, fontWeight: 600, fontSize: 28,
        letterSpacing: "-0.02em", color: NAVY, margin: "0 0 6px", lineHeight: 1.2,
      }}>
        {title}
      </h2>
      <p style={{ fontFamily: SANS, fontSize: 14, color: "#718096", margin: "0 0 28px", lineHeight: 1.55 }}>
        {context}
      </p>
      {children}
    </div>
  </section>
);

// ─── Subhead label ────────────────────────────────────────────────────────────

const SubLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    fontFamily: MONO, fontSize: 9.5, color: "#718096",
    letterSpacing: "0.08em", marginBottom: 10, textTransform: "uppercase",
  }}>
    {children}
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Industries = () => (
  <>
    <Navigation />
    <main className="min-h-screen bg-background" style={{ fontFamily: SANS }}>

      {/* ── Hero ── */}
      <section style={{ background: NAVY, color: "#fff", padding: "64px 0 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{
            fontFamily: SANS, fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 48px)",
            letterSpacing: "-0.02em", margin: "0 0 12px", lineHeight: 1.1,
          }}>
            Industries &amp; Applications
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 0 20px", lineHeight: 1.55 }}>
            Application-specific OILTAC test data across marine, rail, heavy equipment, and industrial power operations.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.5)", maxWidth: 620, margin: 0, lineHeight: 1.6 }}>
            Evidence includes controlled engine tests, field operation records, and removal/reinstatement studies where available. Results vary by duty cycle, fuel quality, dosing, and operating environment.
          </p>
        </div>
      </section>

      {/* ── Jump Nav ── */}
      <IndustryJumpNav />

      {/* ── Marine ── */}
      <SectionShell
        id="marine"
        title="Marine & Tugboats"
        context="Fuel consumption, exhaust, and component condition data from controlled marine diesel bench testing (1983 and 200-hour 1985–86 campaigns) and long-term power station operation."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <MetricCard value={`${CLAIMS.fuelReductionMarine}%`}      label="Fuel consumption reduction"        accent />
          <MetricCard value={`${CLAIMS.pmReductionBench}%`}      label="Exhaust particulate reduction (bench)" />
          <MetricCard value="Hard → Soft" label="Combustion deposit texture"        />
          <MetricCard value="Reduced"     label="Oil consumption in field operation" />
        </div>

        <div className="mb-8">
          <SubLabel>SUPPORTING TEST RECORD</SubLabel>
          <EvidenceList items={[
            "Controlled 200-hour marine diesel engine test with fuel consumption, particulate, and wear measurement.",
            "Deposit condition comparison — soft vs. hard deposits with and without OILTAC, documented with inspection images.",
            "Long-term field operation data from diesel power station operation, including a removal/reinstatement cycle on soot incidents.",
          ]} />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="marine-1">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Controlled test" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>Fuel use down 1.5–2%, smoke and particulates consistently lower in 200-hour engine test</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>Marine Technical Institute, Ministry of Transportation, Japan · 1985–1986</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>A controlled 200-hour continuous operation test compared fuel consumption, combustion characteristics, and particulate output with and without OILTAC additive in marine diesel engines.</p>
              <p>Fuel efficiency gains of 1.5–2% were documented over the test period, with improved combustion consistency throughout. Smoke density and exhaust particulates were consistently lower with OILTAC across the full 200 hours. In a separate 1983 bench test on the same rig, exhaust particulates fell 10–18%.</p>
              <p>Combustion chamber deposits with OILTAC treatment were soft and easy to scrape off during inspection. Without OILTAC, deposits were hard, adhesive, and difficult to remove. Component wear results in the same test were mixed — net crank pin bearing wear was lower, but piston ring wear was higher; the researchers flagged the wear data for further study (full breakdown on the Proof page).</p>
              <p className="text-xs text-muted-foreground/70">Source: OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transportation, Japan</p>
              <HorizCompareChart
                title="Fuel Consumption — Baseline vs. With OILTAC"
                baselineLabel="Baseline"
                treatedLabel="With OILTAC"
                baselineValue={100}
                treatedValue={98.25}
                treatedNote="1.5–2% reduction"
                source="200-hour continuous marine diesel engine test. Marine Technical Institute, Ministry of Transportation, Japan."
              />
              <HorizCompareChart
                title="Exhaust Particulate Levels — Baseline vs. With OILTAC"
                baselineLabel="Baseline"
                treatedLabel="With OILTAC"
                baselineValue={100}
                treatedValue={86}
                treatedNote="10–18% reduction (1983 bench test, same rig)"
                source="Marine diesel bench test, Bunker C. Engineering Institute of Transportation Ministry, Japan, 1983."
              />
              <div className="mt-4">
                <StatCard
                  value="Hard → Soft"
                  subtext="Combustion deposit texture, comparative 200-hour engine test · wear data mixed — flagged by researchers for further study"
                  source="200-hour continuous marine diesel engine test. Marine Technical Institute, Ministry of Transportation, Japan."
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="marine-2">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Removal/reinstatement" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>Soot incidents eliminated — removal/reinstatement confirms causation</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>Hokkaido Electric, Okushiri Power Station · Long-term field operation</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>A major Japanese power utility (Hokkaido Electric Power) tracked visible soot-scattering incidents at its Okushiri Power Station — 4–12 events per year before OILTAC. After introduction, incidents ceased entirely. When the product was withdrawn, incidents resumed; when OILTAC was reintroduced, they ceased again.</p>
              <p>This removal/reinstatement pattern — independently observed by a public utility — is among the strongest forms of causal evidence available in field conditions. The same monitoring period also recorded reduced fuel consumption (2–6%) and delayed engine oil degradation.</p>
              <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Okushiri Power Station, Hokkaido Electric, Japan</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionShell>

      {/* ── Heavy Equipment ── */}
      <SectionShell
        id="offroad"
        title="Off-Road & Heavy Equipment"
        context="Road test and engine bench data from Italy and Japan, reflecting constant-load and acceleration performance."
        altBg
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <MetricCard value={`${CLAIMS.fuelReductionConstantLoad}%`} label="Fuel reduction at constant load" accent />
          <MetricCard value={`${CLAIMS.fuelReductionAccel}%`}       label="Acceleration test reduction"     />
          <MetricCard value={`${CLAIMS.smokeOpacityAccel}%`}      label="Smoke opacity reduction (acceleration)" />
          <MetricCard value="Softer"     label="Combustion deposits"             />
        </div>

        <div className="mb-8">
          <SubLabel>SUPPORTING TEST RECORD</SubLabel>
          <EvidenceList items={[
            "Controlled road fuel efficiency testing — constant speed and acceleration conditions, Fuel Experimental Station San Donato Milanese, Italy (1982).",
            "200-hour engine bench comparison measuring deposit condition with and without OILTAC (wear results mixed — flagged by the researchers for further study).",
            "Smoke opacity measured under constant-speed and acceleration conditions in the Italian road test.",
          ]} />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="offroad-1">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Controlled test" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>Up to 6.8% fuel reduction at constant speed, 3–4% during acceleration testing</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>Fuel Experimental Station San Donato Milanese, Italy · 1982</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>Controlled road testing with standard diesel fuel measured fuel consumption under two conditions: constant speed (60 km/h) and acceleration performance (30–80 km/h). Compared treated and untreated fuel under identical conditions.</p>
              <p>Results: up to 6.8% fuel reduction at constant speed; approximately 3–4% reduction during acceleration testing. Both tests used standard diesel fuel with no other modifications.</p>
              <p className="text-xs text-muted-foreground/70">Source: Test Results — Verification of Efficacy on Diesel Engine, Fuel Experimental Station San Donato Milanese, Italy, 1982</p>
              <VertBarChart
                title="Fuel Consumption Reduction by Test Condition"
                data={[
                  { name: "Constant Speed (60 km/h)", value: 6.8, label: "Up to 6.8%", color: "#1a2633" },
                  { name: "Pickup (30–80 km/h)",       value: 3.5, label: "3–4%",       color: "#1a2633" },
                ]}
                yLabel="% Reduction"
                source="Road fuel efficiency test. Fuel Experimental Station San Donato Milanese, Italy. 1982."
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="offroad-2">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Bench test" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>Softer, easier-to-remove combustion deposits in 200-hour comparison</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>200-hour comparative engine bench test · Marine Technical Institute, Japan</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>A 200-hour comparative engine test examined combustion chamber deposit condition and component wear with and without OILTAC. Combustion deposits in the treated engine were soft and easy to scrape off during inspection. In the control engine (untreated fuel), deposits were hard, adhesive, and difficult to remove — increasing the labor and downtime required during maintenance shutdowns.</p>
              <p>Wear results in the same test were mixed: net crank pin bearing wear was lower with OILTAC, while piston ring wear was higher. The original researchers flagged the wear data for further study, so we present deposit condition — not wear — as the headline maintenance result. The full wear breakdown is on the Proof page.</p>
              <p className="text-xs text-muted-foreground/70">Source: OILTAC Long Term Operation on Diesel Engine — Marine Technical Institute, Ministry of Transportation, Japan</p>
              <DepositCompareCard
                title="Combustion Chamber Deposit Condition"
                withoutLabel="Hard, adhesive deposits — difficult to remove on inspection"
                withLabel="Soft deposits — easy to scrape off on inspection"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionShell>

      {/* ── Industrial Power ── */}
      <SectionShell
        id="power"
        title="Industrial Power"
        context="Multi-year field data from a monitored diesel power station in Japan, with removal/reinstatement data confirming causal effect."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <MetricCard value={`${CLAIMS.fuelReductionFieldOps}%`}    label="Generator fuel reduction"         accent />
          <MetricCard value="0"       label="Soot incidents during OILTAC use" />
          <MetricCard value="4–12/yr" label="Prior soot incident range"        />
          <MetricCard value="Reduced" label="Oil degradation indicators"       />
        </div>

        <div className="mb-8">
          <SubLabel>SUPPORTING TEST RECORD</SubLabel>
          <EvidenceList items={[
            "Multi-year diesel generator monitoring at Hokkaido Electric's Okushiri Power Station (Engine 5), compared against baseline fiscal years.",
            "Removal/reinstatement soot incident pattern — incidents dropped to zero on introduction, resumed on withdrawal, ceased again on reintroduction.",
            "Engine oil condition analysis — viscosity, oxidation, and sludge indicators tracked over the monitoring period.",
          ]} />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="industrial-1">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Field operation" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>2–6% diesel fuel reduction confirmed over two fiscal years of monitored operation</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>Hokkaido Electric, Okushiri Power Station · FY2001–FY2003</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>Engine 5 at Hokkaido Electric's Okushiri Power Station was monitored over two fiscal years with OILTAC additive. Fuel consumption was compared against baseline fiscal years without the additive.</p>
              <p>Results showed a 2–6% reduction in diesel generator fuel consumption during the monitored period. The comparison used actual operational fiscal year data — not a controlled test environment — making this a real-world performance validation.</p>
              <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Okushiri Power Station, Hokkaido Electric, FY2001–FY2003</p>
              <VertBarChart
                title="Diesel Generator Fuel Consumption — Monitored Over Two Fiscal Years"
                data={[
                  { name: "Baseline (no additive)",    value: 100, label: "100%",          color: "#e2e2e2" },
                  { name: "With OILTAC (FY2001–03)",   value: 96,  label: "2–6% reduction", color: "#1a2633" },
                ]}
                yLabel="Relative consumption %"
                source="Two-year monitored field data. Hokkaido Electric, Okushiri Power Station, Engine 5. FY2001–2003."
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="industrial-2">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Removal/reinstatement" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>Soot incidents eliminated entirely — zero events vs. 4–12 per year before OILTAC</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>Hokkaido Electric, Okushiri Power Station · Removal/reinstatement confirmed</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>Before OILTAC introduction, the station recorded 4–12 soot and smoke dispersion incidents per year from diesel generator exhaust stacks. Within 2 months of OILTAC use, incidents dropped to zero.</p>
              <p>When the additive was subsequently removed, incidents resumed. This on/off cycle confirmed the causal relationship between OILTAC and the soot reduction, rather than attributing it to external factors.</p>
              <p>Engine oil analysis during the same period documented viscosity increase prevention, oxidation prevention, and sludge reduction — with potential oil change interval extension observed in long-term operation.</p>
              <p className="text-xs text-muted-foreground/70">Source: Internal Test Data — Okushiri Power Station, Hokkaido Electric, Japan</p>
              <VertBarChart
                title="Soot & Smoke Dispersion Incidents Per Year"
                data={[
                  { name: "Before OILTAC", value: 8, label: "4–12 per year", color: "#e2e2e2" },
                  { name: "With OILTAC",   value: 0, label: "0 incidents",   color: "#1a2633" },
                  { name: "After removal", value: 8, label: "Resumed",       color: "#f97316" },
                ]}
                yLabel="Incidents / year"
                callout="Incidents dropped to zero within 2 months of introduction and resumed when the additive was removed — confirming causation."
                source="Soot incident monitoring. Hokkaido Electric, Okushiri Power Station."
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionShell>

      {/* ── Rail ── */}
      <SectionShell
        id="rail"
        title="Rail & Locomotives"
        context="Field trial data from national railway operators in Bulgaria and South Korea."
        altBg
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <MetricCard value={`${CLAIMS.fuelReductionBulgarianRail}%`}   label="Bulgarian rail fuel savings"        accent />
          <MetricCard value={`${CLAIMS.fuelReductionKoreanRail}%`}   label="Korean per-consist fuel savings"    />
          <MetricCard value={`${CLAIMS.fuelReductionRailIdle}%`}     label="Fuel saving at idle (measured separately)" />
          <MetricCard value="No adverse" label="Oil quality impact observed"         />
        </div>

        <div className="mb-8">
          <SubLabel>SUPPORTING TEST RECORD</SubLabel>
          <EvidenceList items={[
            "Bulgarian National Railways field trials — fuel consumption per locomotive measured with and without OILTAC across multiple depots (1982).",
            "Korean National Railways testing on Seoul–Pusan mainline diesel trains (1984), with idle condition measured separately.",
            "Engine oil spectroscopic analysis confirming no adverse impact on oil chemistry during field operation.",
          ]} />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="rail-1">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Rail trial" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>0.5–4.4% fuel savings per locomotive with no adverse oil chemistry impact</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>Bulgarian National Railways · Field trial, 1982</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>Field trials conducted with Bulgarian National Railways measured in-service fuel consumption on four locomotives across two depots, compared against paired same-series locomotives running standard fuel. Per-locomotive savings ranged from 0.5% to 4.4% (loco 04.06: 3.5% in February, 4.4% in March; loco 04.50: 0.5%; 07-series: 1.9%). The report concluded that use of the additive was "appropriate from the economic point of view."</p>
              <p>Engine oil samples analyzed spectroscopically every 10 days showed no discernible quality change, indicating OILTAC did not introduce additional chemical stress to the lubricant system.</p>
              <p className="text-xs text-muted-foreground/70">Source: Performance of Bulgarian National Railways Diesel Locomotives — Railway Transportation Management Research Institute, 1982</p>
              <StatCardPair
                card1Value="0.5–4.4% fuel savings per locomotive"
                card2Value="No adverse oil chemistry impact (spectroscopic analysis)"
                sharedSubtext="Bulgarian National Railways field trials, 1982"
                source="Bulgarian National Railways field trials, 1982."
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rail-2">
            <AccordionTrigger className="text-sm font-semibold text-left">
              <span style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <EvidenceChip label="Rail trial" />
                  <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13.5, color: NAVY }}>0.6–6.1% per-consist fuel savings on Seoul–Pusan mainline, plus 1.5–2% at idle</span>
                </span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#A0AEC0", letterSpacing: "0.04em" }}>National Railroad of South Korea · Mainline trial, 1984</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>The National Railroad of South Korea tested OILTAC on diesel trains No. 7160 and No. 7105 in Seoul–Pusan mainline revenue service (baseline May 15 – June 5, 1984; treated June 6 – July 25, 1984), tracking multiple rolling-stock cars individually. Per-consist fuel savings ranged from 0.6% to 6.1% depending on rolling stock and averaging method, with most values clustering between 1–6%. A separate 1.5–2% saving was measured at idle.</p>
              <p>The range of results reflects variation in rolling stock, duty cycle, and load across the monitored cars.</p>
              <p className="text-xs text-muted-foreground/70">Source: Fuel Consumption Test for Diesel Trains — National Railroad of South Korea, 1984</p>
              <VertBarChart
                title="Fuel Savings — Korean National Railways Mainline Trial (1984)"
                data={[
                  { name: "Active operation", value: 3.35, label: "0.6–6.1%", color: "#1a2633" },
                  { name: "Idle conditions",  value: 1.75, label: "1.5–2%",   color: "#1a2633" },
                ]}
                yLabel="% fuel savings"
                source="Seoul–Pusan mainline trial, trains 7160 & 7105. National Railroad of South Korea. 1984."
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionShell>

      {/* ── Before & After — Engine Condition ── */}
      <section id="condition" style={{
        padding: "80px 0",
        borderBottom: "1px solid #E2E8F0",
        background: "#fff",
        scrollMarginTop: 48,
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ width: 28, height: 3, background: ORANGE, borderRadius: 2, marginBottom: 14 }} />
          <h2 style={{
            fontFamily: SANS, fontWeight: 600, fontSize: 28,
            letterSpacing: "-0.02em", color: NAVY, margin: "0 0 6px", lineHeight: 1.2,
          }}>
            Before &amp; After — Engine Condition
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 14, color: "#718096", margin: "0 0 40px", lineHeight: 1.55 }}>
            Visual documentation from controlled marine engine testing shows deposit condition and component cleanliness differences.
          </p>

          {/* Injector condition */}
          <div className="mb-12">
            <div style={{ fontFamily: MONO, fontSize: 10, color: "#718096", letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>
              Injection nozzle condition — after 200 operating hours
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <img
                  src="/lovable-uploads/bb1c2fd7-8f99-4a4f-b75e-6676b4d8f1d6.png"
                  alt="Injection nozzle with untreated fuel showing buildup and deposits"
                  className="w-full h-auto rounded-lg shadow mb-3"
                />
                <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13, color: NAVY }}>Without OILTAC</p>
                <p style={{ fontFamily: SANS, fontSize: 13, color: "#718096" }}>Hard, adhesive carbon deposits — difficult to remove</p>
              </div>
              <div className="text-center">
                <img
                  src="/lovable-uploads/4db4bbe7-3f15-4c74-884e-22c85bbc6e50.png"
                  alt="Clean injection nozzle after treatment with OILTAC"
                  className="w-full h-auto rounded-lg shadow mb-3"
                />
                <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13, color: NAVY }}>With OILTAC</p>
                <p style={{ fontFamily: SANS, fontSize: 13, color: "#718096" }}>Softer deposits — easier maintenance, reduced buildup</p>
              </div>
            </div>
            <p style={{ fontFamily: MONO, fontSize: 10.5, color: "#A0AEC0", marginTop: 12, letterSpacing: "0.02em" }}>
              Injector tips from a long-term controlled marine engine test. Marine Technical Institute, Ministry of Transportation, Japan.
            </p>
          </div>

          {/* Valve condition */}
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: "#718096", letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>
              Valve condition — after 200 operating hours
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <img
                  src="/lovable-uploads/bfcdc605-dad6-4446-a1b8-2a0e64d213ac.png"
                  alt="Exhaust valves untreated"
                  className="w-full h-auto rounded-lg shadow mb-3"
                />
                <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13, color: NAVY }}>Without OILTAC</p>
                <p style={{ fontFamily: SANS, fontSize: 13, color: "#718096" }}>Carbon adhesion throughout test duration</p>
              </div>
              <div className="text-center">
                <img
                  src="/lovable-uploads/0bf9ee34-9b9a-4ae9-a90c-e53b874a17fc.png"
                  alt="Exhaust valves OILTAC treated"
                  className="w-full h-auto rounded-lg shadow mb-3"
                />
                <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 13, color: NAVY }}>With OILTAC</p>
                <p style={{ fontFamily: SANS, fontSize: 13, color: "#718096" }}>Reduced carbon adhesion across the full test duration</p>
              </div>
            </div>
            <p style={{ fontFamily: MONO, fontSize: 10.5, color: "#A0AEC0", marginTop: 12, letterSpacing: "0.02em" }}>
              Exhaust and suction valve condition. Same engine, same fuel, same operating conditions. Marine Technical Institute, Ministry of Transportation, Japan.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "64px 0", background: NAVY, color: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: SANS, fontWeight: 600,
            fontSize: "clamp(24px, 4vw, 36px)",
            letterSpacing: "-0.02em", margin: "0 0 12px",
          }}>
            Ready to Run the Numbers?
          </h2>
          <p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.75)", margin: "0 auto 32px", maxWidth: 440, lineHeight: 1.55 }}>
            The fastest way to evaluate OILTAC is to run it in your own operation.
          </p>
          <a
            href="/#pilot-cta"
            style={{
              display: "inline-block",
              background: ORANGE, color: "#fff",
              fontFamily: SANS, fontWeight: 600, fontSize: 15,
              padding: "12px 28px", borderRadius: 6, textDecoration: "none",
            }}
          >
            Request a Pilot Test
          </a>
          <p style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
            Or contact us at{" "}
            <a href="mailto:info@oiltacfuel.com" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>
              info@oiltacfuel.com
            </a>
          </p>
        </div>
      </section>

    </main>
    <Footer />
  </>
);

export default Industries;
