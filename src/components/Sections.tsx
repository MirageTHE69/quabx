import { Fragment } from "react";
import { Arrow, LogoMark, SectionHead, Wordmark, d } from "./ui";
import {
  BUYER_POINTS,
  FOOTER_COLS,
  GUIDES,
  INDUSTRIES,
  LINKS,
  PLANS,
  SUPPLIER_POINTS,
} from "@/lib/data";

/* ═══ SEC-04 BUYERS / SUPPLIERS ═══ */
function PointList({ items }: { items: string[][] }) {
  return (
    <ul className="plist stg">
      {items.map(([t, s], i) => (
        <li key={t}>
          <span className="lbl">0{i + 1}</span>
          <div>
            <p>{t}</p>
            <p>{s}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Split() {
  return (
    <section id="suppliers" className="split">
      <div className="split-l tone-light bp-light">
        <p className="lbl tl" style={{ color: "var(--acc)", marginBottom: 24 }}>SEC-04A / FOR BUYERS</p>
        <h2 className="disp h2-44 mask">Send requirements suppliers can actually quote against.</h2>
        <PointList items={BUYER_POINTS} />
        <a className="btn b-ink r" href={LINKS.rfq} style={{ ...d(300), marginTop: 36 }}>
          Start a Buyer Account <Arrow />
        </a>
      </div>
      <div className="split-r tone-dark bp-dark">
        <p className="lbl tl" style={{ color: "var(--acc)", marginBottom: 24 }}>SEC-04B / FOR SUPPLIERS</p>
        <h2 className="disp h2-44 mask" style={d(250)}>Show what your shop floor can really do.</h2>
        <PointList items={SUPPLIER_POINTS} />
        <a className="btn b-or r" href={LINKS.join} style={{ ...d(300), marginTop: 36 }}>
          Create Supplier Profile <Arrow />
        </a>
      </div>
    </section>
  );
}

/* ═══ SEC-05 PLATFORM PREVIEW ═══ */
const DASH_ROWS = [
  { n: "Supplier A", lvl: "S2", ok: true, pct: 100, score: "12/12", dev: "None", lead: "4 weeks", price: "₹1,86,400", hi: true },
  { n: "Supplier B", lvl: "S1", ok: true, pct: 92, score: "11/12", dev: "Ra 3.2 vs 1.6", lead: "3 weeks", price: "₹1,72,000" },
  { n: "Supplier C", lvl: "S0", ok: false, pct: 83, score: "10/12", dev: "2 open", lead: "6 weeks", price: "₹1,58,900" },
];

export function Platform() {
  return (
    <section className="sec tone-light bp-light platform">
      <div className="wrap">
        <SectionHead code="SEC-05 / PLATFORM" right="SAMPLE DATA · ILLUSTRATIVE" />
        <h2 className="disp h2 mask" style={{ maxWidth: 820, marginBottom: 64 }}>
          Compare on compliance. <span style={{ color: "#5A6472" }}>Then on price.</span>
        </h2>
        <div className="dash-wrap">
          <div id="qx-dash" className="dash">
            <div className="dash-hd">
              <span className="disp" style={{ fontWeight: 700 }}>QUAB<span className="x">X</span></span>
              <span className="lbl fs10 hm" style={{ color: "#8A94A3" }}>RFQ-QX-1042 / Quote comparison</span>
              <span className="chip" style={{ marginLeft: "auto" }}>
                <span style={{ width: 6, height: 6, backgroundColor: "#FF5A1F", borderRadius: "50%" }} />
                <span style={{ color: "#C9CFD8" }}>3 of 4 quoted</span>
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <div className="dash-side hm">
                <p className="lbl fs10" style={{ color: "#7C8696", marginBottom: 12, padding: 0 }}>Workspace</p>
                <p>My RFQs</p>
                <p className="act">Quotes</p>
                <p>Compare</p>
                <p>Saved suppliers</p>
                <p>Decision records</p>
              </div>
              <div className="tbl-wrap" style={{ flex: 1, padding: 24, minWidth: 0 }}>
                <table className="tbl" style={{ minWidth: 680 }}>
                  <thead>
                    <tr>
                      <th>Supplier</th><th>Technical compliance</th><th>Deviations</th><th>Lead time</th>
                      <th style={{ textAlign: "right" }}>Price (ex. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DASH_ROWS.map((r) => (
                      <tr key={r.n} style={r.hi ? { backgroundColor: "rgba(255,90,31,0.06)" } : undefined}>
                        <td style={{ fontWeight: 600 }}>
                          {r.n}{" "}
                          <span className={`chip ${r.ok ? "chip-lvl" : "chip-wait"}`} style={{ marginLeft: 6 }}>{r.lvl}</span>
                        </td>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div className="bar">
                              <div style={{ width: `${r.pct}%`, backgroundColor: r.pct === 100 ? "#1FB57A" : "#8A94A3" }} />
                            </div>
                            <span className="lbl fs11">{r.score}</span>
                          </div>
                        </td>
                        <td style={{ color: r.dev === "None" ? "#C9CFD8" : "#FF8A5C" }}>{r.dev}</td>
                        <td>{r.lead}</td>
                        <td className="num">{r.price}</td>
                      </tr>
                    ))}
                    <tr>
                      <td style={{ fontWeight: 600, color: "#8A94A3" }}>Supplier D</td>
                      <td colSpan={4} className="lbl fs11" style={{ color: "#8A94A3" }}>Awaiting quote · due in 2 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="vcard hm xc r" style={d(350)}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div className="lbl" style={{ width: 44, height: 44, backgroundColor: "#0B0E13", color: "#F4F3EF", display: "grid", placeItems: "center", borderRadius: 4 }}>SA</div>
              <div>
                <p style={{ fontWeight: 600 }}>Supplier A</p>
                <p className="lbl fs10" style={{ color: "#5A6472", marginTop: 3 }}>Vadodara, Gujarat · Sample profile</p>
              </div>
            </div>
            <p className="lbl fs10" style={{ color: "#5A6472", margin: "18px 0 8px" }}>Process-level verification</p>
            <div className="vrow"><span>CNC Machining</span><span className="chip pop" style={{ animationDelay: "0.7s", backgroundColor: "#0E7C52", color: "#fff" }}>S2 · Capability reviewed</span></div>
            <div className="vrow"><span>Casting</span><span className="chip pop" style={{ animationDelay: "0.85s", border: "1px solid #0E7C52", color: "#0E7C52" }}>S1 · Business verified</span></div>
            <div className="vrow"><span>Heat Treatment</span><span className="chip pop" style={{ animationDelay: "1s", border: "1px solid rgba(11,14,19,0.25)", color: "#5A6472" }}>Self-declared</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ SEC-07 INDUSTRIES ═══ */
export function Industries() {
  return (
    <section id="ind" className="sec tone-light bp-light">
      <div className="wrap">
        <SectionHead code="SEC-07 / INDUSTRIES" right={`${INDUSTRIES.length} SECTORS`} />
        <h2 className="disp h2 mask" style={{ maxWidth: 760, marginBottom: 56 }}>
          Built for the industries that build India.
        </h2>
        <div className="grid c4 stg ind-grid">
          {INDUSTRIES.map((x) => (
            <a key={x.code} className="ind" href={LINKS.find}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B0E13" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={x.p} />
                </svg>
                <span className="lbl fs10" style={{ color: "#5A6472" }}>{x.code}</span>
              </div>
              <span className="t" style={{ fontSize: 17, fontWeight: 600 }}>{x.t}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ SEC-08 KNOWLEDGE CENTRE ═══ */
export function Knowledge() {
  return (
    <section id="knowledge" className="sec tone-dark" style={{ backgroundColor: "#12161D" }}>
      <div className="wrap">
        <SectionHead code="SEC-08 / KNOWLEDGE CENTRE" right={<a href={LINKS.knowledge}>All guides →</a>} />
        <h2 className="disp h2 mask" style={{ maxWidth: 760, marginBottom: 56 }}>
          Better requirements start with better knowledge.
        </h2>
        <div className="grid c3 stg" style={{ gap: 16 }}>
          <a className="kcard kfeat lift span-all" href={LINKS.knowledge}>
            <div className="bp-dark kfeat-art" style={{ height: 300, position: "relative", borderBottom: "1px solid rgba(138,148,163,0.2)" }}>
              <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" stroke="#8A94A3" strokeWidth="1" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                <rect x="90" y="80" width="220" height="120" />
                <circle cx="200" cy="140" r="34" />
                <line x1="70" y1="140" x2="330" y2="140" strokeDasharray="8 3 2 3" />
                <line x1="200" y1="60" x2="200" y2="220" strokeDasharray="8 3 2 3" />
                <line x1="90" y1="240" x2="310" y2="240" stroke="#FF5A1F" />
                <line x1="90" y1="205" x2="90" y2="250" strokeDasharray="3 3" />
                <line x1="310" y1="205" x2="310" y2="250" strokeDasharray="3 3" />
                <rect x="180" y="231" width="40" height="18" fill="#0B0E13" stroke="none" />
                <text x="200" y="244" fill="#FF5A1F" style={{ fontFamily: "var(--f-mono)" }} fontSize="11" textAnchor="middle" stroke="none">120</text>
              </svg>
            </div>
            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <span className="lbl fs10" style={{ color: "#FF5A1F" }}>Drawings · Featured guide</span>
              <h3 className="disp" style={{ fontSize: "clamp(26px, 2.5vw, 32px)", lineHeight: 1.1 }}>How to Read an Engineering Drawing</h3>
              <p style={{ color: "#B4BCC8", lineHeight: 1.6 }}>
                Views, title blocks, dimensions and revision tables, explained for buyers who send drawings every day.
              </p>
              <span style={{ marginTop: "auto", fontWeight: 600, color: "#FF5A1F" }}>Read guide →</span>
            </div>
          </a>
          {GUIDES.map((g) => (
            <a key={g.n} className="kcard lift" href={LINKS.knowledge}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="lbl fs10" style={{ color: "#FF5A1F" }}>{g.tag}</span>
                <span className="lbl fs10" style={{ color: "#7C8696" }}>{g.n}</span>
              </div>
              <h3 className="disp" style={{ fontSize: 22, lineHeight: 1.15 }}>{g.t}</h3>
              <p style={{ color: "#8A94A3", fontSize: 14, lineHeight: 1.55 }}>{g.d}</p>
              <span style={{ marginTop: "auto", fontSize: 14, fontWeight: 600, color: "#C9CFD8" }}>Read →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ SEC-09 MEMBERSHIP ═══ */
export function Pricing() {
  return (
    <section id="pricing" className="sec tone-light bp-light">
      <div className="wrap">
        <SectionHead code="SEC-09 / MEMBERSHIP" right="FOR SUPPLIERS" />
        <div className="stack" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 56 }}>
          <h2 className="disp h2 mask" style={{ maxWidth: 640 }}>Start free. Get verified when you are ready.</h2>
          <p className="lbl r draft" style={{ alignSelf: "flex-start" }}>[ Plan features: draft — confirm with QUABX ]</p>
        </div>
        <div className="grid c4 c4-xs1 stg" style={{ gap: 16, alignItems: "stretch" }}>
          {PLANS.map((p) => (
            <div key={p.name} className={`plan lift${p.hot ? " hot" : ""}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 24 }}>
                <span className="lbl fs11">{p.name}</span>
                {p.hot && <span className="chip" style={{ backgroundColor: "#FF5A1F", color: "#0B0E13" }}>Recommended</span>}
              </div>
              <p className="disp" style={{ fontSize: "clamp(36px, 3.4vw, 44px)", marginTop: 28 }}>
                {p.price}
                <span style={{ fontSize: 15, fontFamily: "var(--f-body)", fontWeight: 500, opacity: 0.7, letterSpacing: 0 }}>{p.per}</span>
              </p>
              <p style={{ fontSize: 14, opacity: 0.75, marginTop: 8, minHeight: 42, lineHeight: 1.5 }}>{p.d}</p>
              <ul>
                {p.f.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a className={`btn ${p.hot ? "b-or" : "b-gl"}`} href={LINKS.join} style={{ width: "100%" }}>
                {p.cta} <Arrow />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ SEC-10 FINAL CTA ═══ */
const CTA_WORDS = ["Your", "Next", "Manufacturing", "Project", "Starts", "with", "the", "Right", "Requirement."];

export function FinalCta() {
  return (
    <section className="cta tone-dark bp-dark">
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(255,90,31,0.16), transparent 70%)", pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative", paddingTop: 160, paddingBottom: 160, textAlign: "center" }}>
        <p className="lbl tl" style={{ color: "#FF5A1F", marginBottom: 32, display: "inline-block" }}>SEC-10 / START</p>
        <h2 className="disp h-cta words" style={{ maxWidth: 1100, margin: "0 auto" }}>
          {CTA_WORDS.map((w, i) => (
            <Fragment key={w}>
              <span className="wo">
                <span className="w" style={i >= 7 ? { color: "#FF5A1F" } : undefined}>{w}</span>
              </span>
              {i < CTA_WORDS.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h2>
        <div aria-hidden="true" className="lbl r hm" style={{ ...d(500), display: "flex", alignItems: "center", gap: 10, maxWidth: 720, margin: "48px auto 0", color: "#8A94A3" }}>
          <span style={{ width: 1, height: 14, backgroundColor: "#8A94A3" }} />
          <span style={{ flex: 1, height: 1, backgroundColor: "#3A4350" }} />
          <span className="fs10">REQUIREMENT → SUPPLIER → AWARD</span>
          <span style={{ flex: 1, height: 1, backgroundColor: "#3A4350" }} />
          <span style={{ width: 1, height: 14, backgroundColor: "#8A94A3" }} />
        </div>
        <div className="stack stg" style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 48, flexWrap: "wrap" }}>
          <a className="btn b-or btn-lg" href={LINKS.find}>Find Suppliers <Arrow /></a>
          <a className="btn b-gd btn-lg" href={LINKS.rfq}>Post an RFQ <Arrow /></a>
          <a className="btn b-gd btn-lg" href={LINKS.join}>Register as a Supplier <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
export function Footer() {
  return (
    <footer className="footer bp-dark">
      <div className="wrap" style={{ paddingTop: 88, paddingBottom: 40, position: "relative" }}>
        <div className="grid c12" style={{ columnGap: 24, rowGap: 48 }}>
          <div className="span-all r" style={{ gridColumn: "span 4" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <LogoMark />
              <Wordmark />
            </div>
            <p className="lbl fs11" style={{ color: "#8A94A3", marginTop: 18 }}>Quality. Capability. Connections.</p>
            <p style={{ color: "#8A94A3", fontSize: 14, lineHeight: 1.6, marginTop: 18, maxWidth: 320 }}>
              An engineering and manufacturing exchange for smarter industrial sourcing.
            </p>
            <p className="lbl fs10" style={{ color: "#7C8696", marginTop: 24 }}>[ Address · Email · Phone ]</p>
          </div>
          <nav className="span-all grid c4 stg" aria-label="Footer" style={{ gridColumn: "6 / span 7", gap: 24 }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.h}>
                <p className="lbl fs10" style={{ color: "#7C8696", marginBottom: 16 }}>{col.h}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map(([label, href]) => (
                    <li key={label}><a className="fl" href={href}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="disp wm wmk" aria-hidden="true">QUAB<span>X</span></p>
        <div className="lbl stack fs10" style={{ display: "flex", justifyContent: "space-between", gap: 16, color: "#7C8696", borderTop: "1px solid rgba(138,148,163,0.16)", paddingTop: 24, marginTop: 24 }}>
          <span>© 2026 QUABX · All rights reserved</span>
          <span>DWG QX-HOME · REV A · SHEET 1 OF 1</span>
        </div>
      </div>
    </footer>
  );
}
