import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


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
  accent:   "oklch(0.72 0.17 48)",
  accentHi: "oklch(0.80 0.17 48)",
  verify:   "oklch(0.78 0.14 160)",
};
const MONO = '"IBM Plex Mono", ui-monospace, Menlo, monospace';
const SANS = '"Inter Tight", "Inter", Helvetica, Arial, sans-serif';

const wrap: React.CSSProperties = {
  maxWidth: 1240, margin: "0 auto", padding: "0 32px",
};

// ─── Eyebrow ──────────────────────────────────────────────────────────────────

function EyebrowBar() {
  return (
    <div style={{
      borderBottom: `1px solid ${C.line}`, background: C.bg2,
      fontFamily: MONO, fontSize: 11.5, color: C.inkMute, letterSpacing: "0.04em",
    }}>
      <div style={{ ...wrap, display: "flex", justifyContent: "space-between", padding: "11px 0 5px", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <span>COMMERCIAL FUEL TREATMENT · DIESEL &amp; HFO</span>
          <span>OEM-SAFE · NO HARDWARE CHANGES</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: C.verify }}>
          <span style={{ display: "inline-block", width: 6, height: 6, background: C.verify, borderRadius: "50%" }} />
          <span>IN SERVICE — 40+ YEARS, MARINE / RAIL / POWER</span>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroStatPanel() {
  return (
    <div style={{
      backgroundImage: `linear-gradient(rgba(17,32,58,0.82), rgba(17,32,58,0.82)), url(/lovable-uploads/32fe4240-aacc-4eba-bad1-e796fbeb53f4.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: `1px solid ${C.line}`,
      padding: "24px 26px",
      minHeight: 480,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.08em",
        paddingBottom: 16, borderBottom: `1px solid ${C.line}`, marginBottom: 18,
      }}>
        <span>FIG 00 · HEADLINE RESULT</span>
        <span>RANGES ACROSS 4 INDUSTRIES</span>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: 18,
        borderBottom: `1px solid ${C.line}`, paddingBottom: 18,
      }}>
        <div style={{ padding: "4px 0" }}>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 8 }}>FUEL CONSUMED</div>
          <div style={{ fontSize: 38, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
            2 – 6<span style={{ fontSize: 18, color: C.inkDim, marginLeft: 2 }}>%</span><span style={{ fontSize: 13, color: C.inkDim, fontWeight: 400, marginLeft: 5, letterSpacing: 0 }}>reduction</span>
          </div>
          <div style={{ fontSize: 12.5, color: C.inkDim, marginTop: 8, lineHeight: 1.4 }}>Diesel / HFO · independent tests</div>
        </div>
        <div style={{ padding: "4px 0 4px 22px", borderLeft: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 8 }}>PARTICULATE (MARINE)</div>
          <div style={{ fontSize: 38, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
            14 – 25<span style={{ fontSize: 18, color: C.inkDim, marginLeft: 2 }}>%</span><span style={{ fontSize: 13, color: C.inkDim, fontWeight: 400, marginLeft: 5, letterSpacing: 0 }}>reduction</span>
          </div>
          <div style={{ fontSize: 12.5, color: C.inkDim, marginTop: 8, lineHeight: 1.4 }}>HFO marine engine · 200 h</div>
        </div>
      </div>
      {[
        { k: "BEARING WEAR (OFF-ROAD)", v: "21% reduction" },
        { k: "OIL CONTAMINATION", v: "REDUCED" },
        { k: "COMMERCIAL SERVICE", v: "40+ yr" },
      ].map(row => (
        <div key={row.k} style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12,
          fontFamily: MONO, fontSize: 11, letterSpacing: "0.03em", padding: "9px 0",
          borderBottom: `1px dashed ${C.line}`, color: C.inkDim,
        }}>
          <span style={{ flex: 1, minWidth: 0 }}>{row.k}</span>
          <span style={{ color: C.accent, fontWeight: 500, whiteSpace: "nowrap" }}>{row.v}</span>
        </div>
      ))}
      <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.inkMute, marginTop: 10, letterSpacing: "0.04em" }}>
        ALL RESULTS CITED FROM INDEPENDENT FACILITIES · SEE PROOF
      </div>
    </div>
  );
}

function Hero() {
  const scrollToPilot = () => {
    document.getElementById("pilot-cta")?.scrollIntoView({ behavior: "smooth" });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "request_pilot_click", event_category: "engagement", event_label: "Hero CTA" });
  };

  return (
    <div style={{ ...wrap, padding: "64px 32px 40px" }}>
      <div style={{ fontFamily: MONO, fontSize: 12, color: C.accent, letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <span style={{ width: 28, height: 1, background: C.accent, display: "inline-block" }} />
        <span>CLEAN COMBUSTION · SECTION 00</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56, alignItems: "end" }}>
        <div>
          <h1 style={{
            fontWeight: 600, fontSize: 60, lineHeight: 1.02, letterSpacing: "-0.025em",
            margin: "0 0 24px", fontFamily: SANS,
          }}>
            Lower fuel burn. Cleaner engines.{" "}
            <em style={{ fontStyle: "normal", color: C.accent, fontWeight: 500 }}>No hardware changes.</em>
          </h1>
          <p style={{ color: C.inkDim, fontSize: 17, lineHeight: 1.55, maxWidth: 540, margin: "0 0 28px" }}>
            OILTAC is a combustion additive for diesel and heavy fuel oil, dosed at the tank and active during combustion to improve burn efficiency without modifying the engine. Fleet managers use it to reduce fuel consumption, soot, and bearing wear without touching the engine.
          </p>
          <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
            <button onClick={scrollToPilot} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 16px", fontWeight: 600, fontSize: 14,
              background: C.accent, color: "#1A0A00", border: 0, cursor: "pointer",
              letterSpacing: "0.01em", fontFamily: SANS,
            }}>
              Request a Pilot →
            </button>
            <a href="/proof" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 16px", fontWeight: 600, fontSize: 14,
              background: "transparent", color: C.ink, border: `1px solid ${C.line2}`,
              letterSpacing: "0.01em", fontFamily: SANS, textDecoration: "none",
            }}>
              See the test data
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: `1px solid ${C.line}`, paddingTop: 20, gap: 20 }}>
            {[
              { k: "DEPLOYMENT", v: "Dosed 1 : 10,000 at tank — no retrofit" },
              { k: "FUEL COMPATIBILITY", v: "Diesel · Gas oil · HFO / bunker A/C" },
              { k: "COMMERCIAL HISTORY", v: "Marine, rail &amp; power — 40+ years" },
            ].map(m => (
              <div key={m.k}>
                <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 6 }}>{m.k}</div>
                <div style={{ fontSize: 14 }} dangerouslySetInnerHTML={{ __html: m.v }} />
              </div>
            ))}
          </div>
        </div>
        <HeroStatPanel />
      </div>
    </div>
  );
}

// ─── Signal strip ──────────────────────────────────────────────────────────────

function SignalStrip() {
  const cells = [
    { k: "PROTOCOL", v: "ISO 8178", s: "E3 · D2 STEADY-STATE" },
    { k: "PROTOCOL", v: "UIC 624", s: "RAIL OPERATIONAL" },
    { k: "COMPLIANCE", v: "SOLAS II-2", s: "STATEMENT OF FACT" },
    { k: "REGISTRY", v: "REACH / SDS", s: "REV 4.1" },
    { k: "CLASSIFICATION", v: "BV · DNV · LR", s: "WITNESSING BODIES" },
  ];
  return (
    <div style={{ ...wrap, padding: "0 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        {cells.map((c, i) => (
          <div key={i} style={{ padding: "22px 24px", borderRight: i < 4 ? `1px solid ${C.line}` : undefined }}>
            <div style={{ fontFamily: MONO, fontSize: 10, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 6 }}>{c.k}</div>
            <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{c.v}</div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.inkDim, marginTop: 2, letterSpacing: "0.04em" }}>{c.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Testing Institutions Strip (condensed, homepage) ────────────────────────

const CONDENSED_LOGOS = [
  { name: "Japan Vehicle Inspection Association",  logo: "/logos/normalized/japan-vehicle-inspection-association.png",        logoClass: ""          },
  { name: "National Maritime Research Institute",  logo: "/logos/normalized/ship-research-institute-nmri.png",                logoClass: ""          },
  { name: "Innovhub / Fuel Experimental Station", logo: "/logos/normalized/innovhub-stazione-sperimentale-combustibili.png", logoClass: ""          },
  { name: "Bulgarian National Railways",           logo: "/logos/normalized/bulgarian-national-railways.png",                 logoClass: ""          },
  { name: "Hokkaido Electric Power Co.",           logo: "/logos/normalized/hokkaido-electric.png",                           logoClass: ""          },
  { name: "Japan Coast Guard Academy",             logo: "/logos/normalized/japan-coast-guard-academy.png",                   logoClass: "logo-jcga" },
];

function TestingInstitutionsStripCondensed() {
  return (
    <div style={{ background: C.bg2, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
      <style>{`
        .ti-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 48px;
          align-items: center;
          max-width: 1240px;
          margin: 0 auto;
          padding: 36px 32px;
        }
        .ti-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        .ti-slot {
          background: #14233D;
          border: 1px solid #243A63;
          border-radius: 5px;
          height: 74px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          overflow: hidden;
        }
        .ti-slot img {
          display: block;
          object-fit: contain;
          max-height: 48px;
          max-width: 180px;
          width: auto;
          height: auto;
        }
        .ti-slot img.logo-jcga {
          transform: scale(1.8);
          transform-origin: center;
        }
        .ti-cta {
          font-family: ${MONO};
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: ${C.accent};
          text-decoration: none;
          white-space: nowrap;
        }
        .ti-cta:hover { text-decoration: underline; }
        @media (max-width: 860px) {
          .ti-layout { grid-template-columns: 1fr; gap: 24px; padding: 32px 24px; }
          .ti-grid   { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 520px) {
          .ti-layout { padding: 28px 20px; }
          .ti-grid   { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="ti-layout">
        {/* Left: copy + CTA */}
        <div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, color: C.verify, letterSpacing: "0.1em", marginBottom: 10 }}>
            INDEPENDENTLY TESTED ACROSS 6 COUNTRIES
          </div>
          <div style={{ fontFamily: SANS, fontSize: 13, color: C.inkDim, lineHeight: 1.55, marginBottom: 14 }}>
            Marine · Rail · Power Generation · Heavy Equipment
          </div>
          <a href="/proof" className="ti-cta">View summary proof page →</a>
        </div>

        {/* Right: logo grid — non-interactive, dark tiles */}
        <div className="ti-grid">
          {CONDENSED_LOGOS.map(inst => (
            <div key={inst.name} className="ti-slot">
              <img src={inst.logo} alt={inst.name} title={inst.name} className={inst.logoClass} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────

const INDUSTRY_DATA = [
  {
    kind: "marine",
    href: "/industries#marine",
    img: "/lovable-uploads/9c599674-c722-41d9-a0d4-cd5f4fc0e969.png",
    tags: ["MARINE", "HFO"],
    title: "Marine & tugboat operations",
    desc: "Chief engineers running high-cycle 2- and 4-stroke engines where fuel is a top-three operating cost.",
    sigs: [{ v: "1.5 – 2%", k: "FUEL REDUCTION" }, { v: "14 – 25%", k: "PARTICULATE REDUCTION" }],
  },
  {
    kind: "rail",
    href: "/industries#rail",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop",
    tags: ["RAIL", "DIESEL"],
    title: "Rail & locomotive fleets",
    desc: "Operators running high-hour V-engine locomotives across national and regional networks.",
    sigs: [{ v: "1.9 – 4.4%", k: "FUEL REDUCTION" }, { v: "NO ADVERSE", k: "BEARING EFFECT" }],
  },
  {
    kind: "industrial",
    href: "/industries#power",
    img: "/lovable-uploads/0aee2ba0-20be-42f4-9b5f-afce192a0fb8.png",
    tags: ["POWER", "INDUSTRIAL"],
    title: "Power generation & industrial",
    desc: "Diesel gensets and stationary engines where unplanned downtime is not an option.",
    sigs: [{ v: "2 – 6%", k: "FUEL REDUCTION" }, { v: "4–12 → 0", k: "FILTER PLUGGING" }],
  },
  {
    kind: "offroad",
    href: "/industries#offroad",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop",
    tags: ["OFF-ROAD", "MINING"],
    title: "Off-road & heavy equipment",
    desc: "High-load, high-hour fleets where margin depends on fuel cost and component life.",
    sigs: [{ v: "Up to 6.8%", k: "FUEL REDUCTION" }, { v: "21%", k: "BEARING WEAR REDUCTION" }],
  },
];

function Industries() {
  return (
    <section style={{ padding: "88px 0", borderTop: `1px solid ${C.line}` }}>
      <div style={wrap}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, gap: 40 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 }}>SECTION 01 · AUDIENCE</div>
            <h2 style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 640 }}>Who this is for.</h2>
            <div style={{ color: C.inkDim, maxWidth: 480, marginTop: 12, fontSize: 15 }}>
              OILTAC is operated by fleet managers, chief engineers, and maintenance leads running diesel engines at commercial scale.
            </div>
          </div>
        </div>
        <style>{`
          .ind-card { transition: box-shadow 0.2s ease, outline-color 0.2s ease; outline: 1px solid transparent; }
          .ind-card:hover { outline-color: rgba(249,115,22,0.55); }
          .ind-card .ind-overlay { background: rgba(10,20,40,0.70); transition: background 0.2s ease; }
          .ind-card:hover .ind-overlay { background: rgba(10,20,40,0.52); }
          .ind-card .ind-cta { transition: color 0.2s ease; }
          .ind-card:hover .ind-cta { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
        `}</style>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: `1px solid ${C.line}`, background: C.surface }}>
          {INDUSTRY_DATA.map((it, idx) => (
            <a key={it.kind} href={it.href} className="ind-card" style={{
              borderRight: idx % 2 === 0 ? `1px solid ${C.line}` : undefined,
              borderBottom: idx < 2 ? `1px solid ${C.line}` : undefined,
              display: "block",
              position: "relative",
              backgroundImage: `url(${it.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              textDecoration: "none",
              color: C.ink,
              cursor: "pointer",
            }}>
              {/* dark overlay */}
              <div className="ind-overlay" style={{ position: "absolute", inset: 0 }} />
              {/* content above overlay */}
              <div style={{ position: "relative", zIndex: 1, padding: "28px 30px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                  {it.tags.map(t => (
                    <span key={t} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", padding: "3px 8px", border: `1px solid rgba(167,180,204,0.4)`, color: C.inkDim }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 6px" }}>{it.title}</h3>
                <p style={{ fontSize: 13.5, color: C.inkDim, lineHeight: 1.55, marginBottom: 14 }}>{it.desc}</p>
                <div style={{ display: "flex", gap: 24, paddingTop: 12, borderTop: `1px solid rgba(31,51,88,0.8)` }}>
                  {it.sigs.map(s => (
                    <div key={s.k} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.04em" }}>
                      <span style={{ color: C.accent, fontWeight: 600, fontSize: 14, display: "block" }}>{s.v}</span>
                      <span style={{ color: C.inkMute, display: "block", marginTop: 2 }}>{s.k}</span>
                    </div>
                  ))}
                </div>
                <div className="ind-cta" style={{ marginTop: 12, fontFamily: MONO, fontSize: 11, color: C.accent, letterSpacing: "0.08em" }}>SEE PROOF →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mechanism ────────────────────────────────────────────────────────────────

function Mechanism() {
  return (
    <section style={{ padding: "88px 0", borderTop: `1px solid ${C.line}` }}>
      <div style={wrap}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, gap: 40 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 }}>SECTION 02 · MECHANISM</div>
            <h2 style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 640 }}>What it does, in one diagram.</h2>
            <div style={{ color: C.inkDim, maxWidth: 520, marginTop: 12, fontSize: 15 }}>
              Enzyme-derived compounds (produced from microbial fermentation, carried in kerosene) facilitate the breakdown of longer hydrocarbon chains into shorter ones during combustion, resulting in more complete combustion — without modifying ignition timing or injection pressure.
            </div>
          </div>
        </div>
        <div style={{ background: C.bg2, border: `1px solid ${C.line}`, padding: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.08em", marginBottom: 24 }}>
            <span>FIG 02 · MECHANISM OF ACTION (SIMPLIFIED)</span>
            <span>DOSING: 1 : 10,000 (V/V) TYPICAL</span>
          </div>
          <svg viewBox="0 0 980 280" width="100%" style={{ display: "block" }}>
            <defs>
              <marker id="arrH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="#A7B4CC" />
              </marker>
            </defs>
            {/* fuel tank */}
            <rect x="30" y="80" width="110" height="120" fill="none" stroke="#A7B4CC" strokeWidth="1.2" />
            <rect x="30" y="140" width="110" height="60" fill="#162946" />
            <text x="85" y="70" fill="#6F7F9E" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Mono" letterSpacing="0.08em">FUEL TANK</text>
            <text x="85" y="168" fill="#E6ECF5" fontSize="11" textAnchor="middle" fontFamily="IBM Plex Mono">DIESEL / HFO</text>
            <text x="85" y="182" fill="#6F7F9E" fontSize="7.5" textAnchor="middle" fontFamily="IBM Plex Mono">LIGHT OIL · MDO · IFO</text>
            <circle cx="85" cy="235" r="14" fill="none" stroke="oklch(0.72 0.17 48)" strokeWidth="1.4" />
            <text x="85" y="239" fill="oklch(0.72 0.17 48)" fontSize="11" textAnchor="middle" fontFamily="IBM Plex Mono" fontWeight="600">+</text>
            <line x1="85" y1="221" x2="85" y2="205" stroke="oklch(0.72 0.17 48)" strokeWidth="1.4" markerEnd="url(#arrH)" />
            <text x="108" y="240" fill="oklch(0.72 0.17 48)" fontSize="10" fontFamily="IBM Plex Mono" letterSpacing="0.08em">OILTAC</text>
            {/* arrow to chamber */}
            <line x1="140" y1="140" x2="235" y2="140" stroke="#A7B4CC" strokeWidth="1" markerEnd="url(#arrH)" />
            <text x="187" y="132" fill="#6F7F9E" fontSize="9.5" textAnchor="middle" fontFamily="IBM Plex Mono">DOSED FUEL</text>
            {/* combustion chamber */}
            <rect x="245" y="70" width="260" height="140" fill="none" stroke="#A7B4CC" strokeWidth="1.2" />
            <text x="375" y="60" fill="#6F7F9E" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Mono" letterSpacing="0.08em">COMBUSTION CHAMBER</text>
            <rect x="310" y="145" width="130" height="16" fill="#28406B" stroke="#A7B4CC" strokeWidth="1" />
            <line x1="375" y1="161" x2="375" y2="200" stroke="#A7B4CC" strokeWidth="1" />
            <text x="280" y="95" fill="#6F7F9E" fontSize="9" fontFamily="IBM Plex Mono">BEFORE</text>
            <circle cx="285" cy="110" r="8" fill="none" stroke="#6F7F9E" strokeWidth="1" />
            <circle cx="300" cy="125" r="7" fill="none" stroke="#6F7F9E" strokeWidth="1" />
            <circle cx="283" cy="135" r="9" fill="none" stroke="#6F7F9E" strokeWidth="1" />
            <text x="492" y="95" fill="oklch(0.72 0.17 48)" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="end">WITH OILTAC</text>
            {Array.from({ length: 18 }).map((_, i) => {
              const cx = 440 + (i % 6) * 10;
              const cy = 108 + Math.floor(i / 6) * 12;
              return <circle key={i} cx={cx} cy={cy} r="2.2" fill="oklch(0.72 0.17 48)" />;
            })}
            <text x="375" y="232" fill="#A7B4CC" fontSize="10" textAnchor="middle" fontFamily="IBM Plex Mono">MORE COMPLETE HYDROCARBON COMBUSTION</text>
            {/* exhaust */}
            <line x1="505" y1="140" x2="600" y2="140" stroke="#A7B4CC" strokeWidth="1" markerEnd="url(#arrH)" />
            <text x="552" y="132" fill="#6F7F9E" fontSize="9.5" textAnchor="middle" fontFamily="IBM Plex Mono">EXHAUST</text>
            {/* outcomes */}
            <rect x="610" y="60" width="355" height="175" fill="#11203A" stroke="#28406B" strokeWidth="1" />
            <text x="626" y="84" fill="#6F7F9E" fontSize="10" fontFamily="IBM Plex Mono" letterSpacing="0.08em">MEASURED OUTCOMES</text>
            <line x1="626" y1="94" x2="950" y2="94" stroke="#1F3358" />
            <text x="626" y="116" fill="#A7B4CC" fontSize="11" fontFamily="IBM Plex Mono">Fuel consumed</text>
            <text x="950" y="116" fill="oklch(0.72 0.17 48)" fontSize="12" fontFamily="IBM Plex Mono" textAnchor="end" fontWeight="600">1.5 – 6.8% reduction</text>
            <text x="626" y="143" fill="#A7B4CC" fontSize="11" fontFamily="IBM Plex Mono">Particulate (PM)</text>
            <text x="950" y="143" fill="oklch(0.72 0.17 48)" fontSize="12" fontFamily="IBM Plex Mono" textAnchor="end" fontWeight="600">14 – 25% reduction</text>
            <text x="626" y="170" fill="#A7B4CC" fontSize="11" fontFamily="IBM Plex Mono">Bearing wear</text>
            <text x="950" y="170" fill="oklch(0.72 0.17 48)" fontSize="12" fontFamily="IBM Plex Mono" textAnchor="end" fontWeight="600">21% reduction</text>
            <text x="626" y="221" fill="#6F7F9E" fontSize="9" fontFamily="IBM Plex Mono">Ranges across independent tests · see /proof for full data</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison ───────────────────────────────────────────────────────────────

function Comparison() {
  const rows: [string, [string, string], [string, string]][] = [
    ["Activation point", ["warn", "Pre-combustion, alters fuel specification"], ["yes", "Ignition only — fuel spec unchanged"]],
    ["Works in existing fuel system", ["warn", "Often requires modification"], ["yes", "No hardware, no retrofit"]],
    ["OEM compliance", ["warn", "Varies by product"], ["yes", "OEM-safe in tested configurations"]],
    ["Chemical residue in fuel", ["warn", "Possible"], ["yes", "None"]],
    ["Fuel compatibility", ["warn", "Often limited"], ["yes", "Diesel · gas oil · HFO (bunker A/C)"]],
    ["Regulatory status", ["no", "Varies"], ["yes", "REACH-registered · SDS rev 4.1"]],
  ];
  const cellColor = (cls: string) => cls === "yes" ? C.accent : cls === "warn" ? "#D8A04C" : C.inkMute;

  return (
    <section id="benefits" style={{ padding: "88px 0", borderTop: `1px solid ${C.line}`, scrollMarginTop: 72 }}>
      <div style={wrap}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, gap: 40 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 }}>SECTION 03 · BENEFITS</div>
            <h2 style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 640 }}>Enzyme-derived additive vs. conventional chemical additive.</h2>
            <div style={{ color: C.inkDim, maxWidth: 480, marginTop: 12, fontSize: 15 }}>
              OILTAC does not alter ASTM D975 / ISO 8217 fuel specification. It does not replace maintenance — it reduces the rate at which maintenance becomes necessary.
            </div>
          </div>
        </div>
        <div style={{ border: `1px solid ${C.line}` }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, fontFamily: SANS }}>
            <thead>
              <tr>
                <th style={{ background: C.bg2, textAlign: "left", padding: "16px 20px", fontFamily: MONO, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.1em", fontWeight: 500, borderBottom: `1px solid ${C.line}`, width: "40%" }}>FACTOR</th>
                <th style={{ background: C.bg2, textAlign: "left", padding: "16px 20px", fontFamily: MONO, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.1em", fontWeight: 500, borderBottom: `1px solid ${C.line}` }}>CONVENTIONAL CHEMICAL ADDITIVE</th>
                <th style={{ background: C.bg2, textAlign: "left", padding: "16px 20px", fontFamily: MONO, fontSize: 10.5, color: C.accent, letterSpacing: "0.1em", fontWeight: 500, borderBottom: `1px solid ${C.line}` }}>OILTAC ENZYME ADDITIVE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td style={{ padding: "16px 20px", borderBottom: i < rows.length - 1 ? `1px solid ${C.line}` : undefined, color: C.inkDim }}>{r[0]}</td>
                  <td style={{ padding: "16px 20px", borderBottom: i < rows.length - 1 ? `1px solid ${C.line}` : undefined, color: cellColor(r[1][0]), fontWeight: r[1][0] === "yes" ? 600 : undefined }}>{r[1][1]}</td>
                  <td style={{ padding: "16px 20px", borderBottom: i < rows.length - 1 ? `1px solid ${C.line}` : undefined, color: cellColor(r[2][0]), fontWeight: r[2][0] === "yes" ? 600 : undefined }}>{r[2][1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── Why Now ──────────────────────────────────────────────────────────────────

function WhyNow() {
  return (
    <section id="why-now" style={{ padding: "88px 0", borderTop: `1px solid ${C.line}`, scrollMarginTop: 72 }}>
      <div style={wrap}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, gap: 40 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 }}>SECTION 04 · WHY NOW</div>
            <h2 style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 640 }}>Emissions rules tighten. Fleets still burn diesel.</h2>
            <div style={{ color: C.inkDim, maxWidth: 480, marginTop: 12, fontSize: 15 }}>
              You can retrofit, replace, or find more from what you already run. OILTAC is the third option.
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: `1px solid ${C.line}`, background: C.surface }}>
          {[
            {
              label: "04.A · REGULATORY PRESSURE",
              title: "Compliance windows are shrinking.",
              body: "Carbon-intensity caps and particulate limits are being enforced, not just published.",
              items: [
                { ref: "IMO", text: "Carbon Intensity Indicator (CII) — annual fleet ratings in effect" },
                { ref: "EU", text: "FuelEU Maritime in force 2025; Green Deal 55% reduction by 2030" },
                { ref: "INDIA", text: "TREM-V rollout across off-road diesel" },
                { ref: "AUDIT", text: "Heavier fines, audits, and reporting pressure" },
              ],
            },
            {
              label: "04.B · YOUR ASSETS",
              title: "You don't replace an engine to meet a rule.",
              body: "Capital replacement cycles are 15–30 years. OILTAC bridges the gap without touching the hardware.",
              items: [
                { ref: "CAPEX", text: "No retrofit, no new injectors, no new systems" },
                { ref: "OPEX", text: "Fuel + maintenance reductions attack the two biggest line items" },
                { ref: "OEM", text: "Warranty-safe in tested configurations" },
                { ref: "PILOT", text: "45–60 day trial on your equipment; your data, your decision" },
              ],
            },
          ].map((cell, ci) => (
            <div key={ci} style={{ padding: "32px 34px", borderRight: ci === 0 ? `1px solid ${C.line}` : undefined }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.accent, letterSpacing: "0.1em", marginBottom: 16 }}>{cell.label}</div>
              <h3 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em" }}>{cell.title}</h3>
              <p style={{ color: C.inkDim, margin: "0 0 18px" }}>{cell.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: `1px solid ${C.line}` }}>
                {cell.items.map((item, ii) => (
                  <li key={ii} style={{ padding: "12px 0", borderBottom: `1px solid ${C.line}`, display: "grid", gridTemplateColumns: "80px 1fr", gap: 18, fontSize: 13.5 }}>
                    <span style={{ fontFamily: MONO, fontSize: 10.5, color: C.inkMute, letterSpacing: "0.06em", paddingTop: 2 }}>{item.ref}</span>
                    <span style={{ color: C.inkDim }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pilot CTA ────────────────────────────────────────────────────────────────

function PilotCTA() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", role: "", region: "", industry: "", fleet_size: "", notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "New Pilot Request — OILTAC",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          phone: formData.phone,
          company: formData.company,
          role: formData.role,
          region: formData.region,
          industry: formData.industry,
          fleet_size: formData.fleet_size,
          notes: formData.notes,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "pilot_form_submit", event_category: "engagement", event_label: "Pilot Form Submit" });
        alert("Thanks — we'll be in touch within 2 business days.");
        setFormData({ name: "", company: "", email: "", phone: "", role: "", region: "", industry: "", fleet_size: "", notes: "" });
      } else {
        console.error("Web3Forms error:", data);
        alert("There was an error submitting your request. Please email info@oiltacfuel.com directly.");
      }
    } catch (err) {
      console.error("Web3Forms exception:", err);
      alert("There was an error submitting your request. Please email info@oiltacfuel.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: C.bg, color: C.ink,
    border: `1px solid ${C.line2}`, padding: "10px 12px",
    fontFamily: SANS, fontSize: 14, boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontFamily: MONO, fontSize: 10.5, color: C.inkMute,
    letterSpacing: "0.08em", marginBottom: 6,
  };

  return (
    <section id="pilot-cta" style={{ padding: "88px 0", borderTop: `1px solid ${C.line}`, scrollMarginTop: 72 }}>
      <div style={wrap}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, gap: 40 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: C.inkMute, letterSpacing: "0.1em", marginBottom: 10 }}>SECTION 05 · PILOT</div>
            <h2 style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 640 }}>Run OILTAC against your own baseline.</h2>
            <div style={{ color: C.inkDim, maxWidth: 480, marginTop: 12, fontSize: 15 }}>
              Three units. 45–60 days. We supply the additive and dosing rig; you set the duty cycle; a neutral observer can witness if you want one.
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", border: `1px solid ${C.line}`, background: C.surface }}>
          <div style={{ padding: "40px 40px", borderRight: `1px solid ${C.line}` }}>
            <h3 style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Pilot programme</h3>
            <p style={{ color: C.inkDim, margin: "0 0 28px", maxWidth: 400 }}>No commitment beyond the trial. If the numbers don't hold on your equipment, you walk.</p>
            <div style={{ borderTop: `1px solid ${C.line}` }}>
              {[
                { n: "01", t: "Baseline", d: "Agree on measurement — fuel rail, duty cycle, date range — and establish your additive-free baseline." },
                { n: "02", t: "Dose", d: "1 : 10,000 at tank. No dosing rig required for most installations; we supply one if you prefer." },
                { n: "03", t: "Measure", d: "45–60 days. Same duty cycle. Compare fuel, PM, and oil condition against baseline." },
                { n: "04", t: "Decide", d: "Keep it, remove it, or expand. Your data, your decision — no lock-in." },
              ].map(step => (
                <div key={step.n} style={{ padding: "18px 0", borderBottom: `1px solid ${C.line}`, display: "grid", gridTemplateColumns: "40px 1fr", gap: 20, alignItems: "start" }}>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: C.accent, letterSpacing: "0.08em", paddingTop: 3 }}>{step.n}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14.5, marginBottom: 4 }}>{step.t}</div>
                    <div style={{ fontSize: 13, color: C.inkDim, lineHeight: 1.5 }}>{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: "32px 32px" }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div>
                  <label style={labelStyle}>FULL NAME *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>COMPANY *</label>
                  <input name="company" value={formData.company} onChange={handleChange} required placeholder="Fleet / company name" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div>
                  <label style={labelStyle}>WORK EMAIL *</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="name@company.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>PHONE</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div>
                  <label style={labelStyle}>ROLE</label>
                  <input name="role" value={formData.role} onChange={handleChange} placeholder="e.g. Chief Engineer" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>REGION *</label>
                  <input name="region" value={formData.region} onChange={handleChange} required placeholder="e.g. Rotterdam" style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>INDUSTRY *</label>
                <select name="industry" value={formData.industry} onChange={handleChange} required style={{ ...inputStyle, appearance: "none" }}>
                  <option value="" disabled>Select industry…</option>
                  <option value="Marine">Marine</option>
                  <option value="Rail">Rail</option>
                  <option value="Power generation">Power generation</option>
                  <option value="Off-road / mining">Off-road / mining</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>FLEET / EQUIPMENT SIZE</label>
                <input name="fleet_size" value={formData.fleet_size} onChange={handleChange} placeholder='e.g. "12 vessels", "3 × 2.5 MW gensets"' style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>NOTES</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Duty cycle, fuel type, or specific trial goals." style={{ ...inputStyle, resize: "vertical", minHeight: 80 }} />
              </div>
              <button type="submit" disabled={isSubmitting} style={{
                width: "100%", padding: "14px 16px", fontSize: 14, fontWeight: 600,
                background: C.accent, color: "#1A0A00", border: 0,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontFamily: SANS, letterSpacing: "0.01em",
                opacity: isSubmitting ? 0.7 : 1,
              }}>
                {isSubmitting ? "SUBMITTING..." : "SUBMIT PILOT REQUEST →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Index = () => (
  <div style={{ background: C.bg, color: C.ink, fontFamily: SANS, minHeight: "100vh", fontSize: 15, lineHeight: 1.5, paddingTop: 64 }}>
    <Navigation />
    <EyebrowBar />
    <Hero />
    <SignalStrip />
    <TestingInstitutionsStripCondensed />
    <Industries />
    <Mechanism />
    <Comparison />
    <WhyNow />
    <PilotCTA />
    <Footer />
  </div>
);

export default Index;
