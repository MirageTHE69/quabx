"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "./Experience";
import { Arrow, SectionHead, d } from "./ui";
import { INVITES, MATCHES, QUOTES, STEP_TITLES } from "@/lib/data";

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="field">
      <span className="lbl">{k}</span>
      <p>{v}</p>
    </div>
  );
}

function Panel({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <div className="panel">
          <p className="lbl panel-t">01 — Define requirement</p>
          <div className="grid c2" style={{ gap: 14 }}>
            <Field k="Part" v="Slip-on flange, DN200" />
            <Field k="Process" v="CNC turning + drilling" />
            <Field k="Material" v="SS 316L · EN 10204 3.1" />
            <Field k="Quantity" v="250 nos · 2 lots" />
            <Field k="Critical tolerance" v="Bore Ø100 H7" />
            <div className="field miss">
              <span className="lbl">Delivery location</span>
              <p>Required — add location</p>
            </div>
          </div>
          <div className="field" style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14, padding: 14 }}>
            <span className="lbl fs10" style={{ backgroundColor: "#1C222B", padding: 8, borderRadius: 3, color: "#F4F3EF" }}>PDF</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, marginTop: 0, overflow: "hidden", textOverflow: "ellipsis" }}>QX-1042_flange.pdf</p>
              <p className="lbl fs10" style={{ color: "#8A94A3", marginTop: 3 }}>REV B · 2 sheets · STEP attached</p>
            </div>
            <span className="chip chip-ok">Current rev</span>
          </div>
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ flex: 1, height: 4, backgroundColor: "#2A313C", borderRadius: 2 }}>
              <div style={{ width: "86%", height: 4, backgroundColor: "#FF5A1F", borderRadius: 2 }} />
            </div>
            <span className="lbl fs10" style={{ color: "#8A94A3" }}>1 field missing</span>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="panel">
          <p className="lbl panel-t">02 — Discover suppliers · matched on capability</p>
          {MATCHES.map((m) => (
            <div key={m.i} className="row-card">
              <div className="avatar lbl">{m.i}</div>
              <div className="grow" style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600 }}>{m.name}</p>
                <p className="lbl fs10" style={{ color: "#8A94A3", marginTop: 4 }}>{m.loc}</p>
              </div>
              <span className="chip chip-lvl">{m.lvl}</span>
              <span className="chip" style={{ backgroundColor: "#1C222B", color: "#C9CFD8" }}>{m.fit}</span>
            </div>
          ))}
          <p className="lbl fs10" style={{ color: "#8A94A3", marginTop: 14, lineHeight: 1.7 }}>
            Matched on: process · material · envelope Ø300 · tolerance H7 · qty
          </p>
        </div>
      );
    case 2:
      return (
        <div className="panel">
          <p className="lbl panel-t">03 — Invite &amp; receive quotes</p>
          {INVITES.map((v) => (
            <div key={v.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid rgba(138,148,163,0.16)" }}>
              <p style={{ fontWeight: 500 }}>{v.name}</p>
              <span className={`chip chip-${v.tone}`}>{v.s}</span>
            </div>
          ))}
          <p style={{ marginTop: 20, fontSize: 14, color: "#8A94A3", lineHeight: 1.5 }}>
            Questions and clarifications stay attached to the RFQ, by drawing revision.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="panel">
          <p className="lbl panel-t">04 — Evaluate · technical first, then commercial</p>
          <div className="tbl-wrap">
            <table className="tbl" style={{ minWidth: 480 }}>
              <thead>
                <tr>
                  <th>Supplier</th><th>Compliance</th><th>Deviations</th><th>Lead</th>
                  <th style={{ textAlign: "right" }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {QUOTES.map((q) => (
                  <tr key={q.n}>
                    <td style={{ fontWeight: 600 }}>{q.n}</td>
                    <td>{q.c}</td>
                    <td style={{ color: "#C9CFD8" }}>{q.d}</td>
                    <td>{q.l}</td>
                    <td className="num">{q.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    default:
      return (
        <div className="panel">
          <p className="lbl panel-t">05 — Award · decision record</p>
          <div style={{ border: "1px solid rgba(31,181,122,0.5)", backgroundColor: "rgba(31,181,122,0.06)", borderRadius: 4, padding: 20 }}>
            <span className="chip" style={{ backgroundColor: "#1FB57A", color: "#0B0E13" }}>Awarded</span>
            <p className="disp" style={{ fontSize: 26, marginTop: 14 }}>Supplier A</p>
            <p style={{ color: "#C9CFD8", marginTop: 6, lineHeight: 1.5 }}>
              Full technical compliance, zero deviations, capability reviewed for CNC turning.
            </p>
          </div>
          <div className="grid c2" style={{ gap: 14, marginTop: 14 }}>
            <Field k="Drawing basis" v="QX-1042 REV B" />
            <Field k="Approved by" v="Procurement + QA" />
          </div>
          <p className="lbl fs10" style={{ color: "#8A94A3", marginTop: 16 }}>
            Non-awarded suppliers notified with reason codes
          </p>
        </div>
      );
  }
}

export default function HowItWorks() {
  const { step, pickStep } = useExperience();
  const tabsRef = useRef<HTMLDivElement>(null);

  // On small screens the steps are a horizontal tab strip: keep the active one in view.
  useEffect(() => {
    const el = tabsRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const btn = el.querySelectorAll<HTMLElement>(".step")[step];
    if (btn) el.scrollTo({ left: btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
  }, [step]);

  return (
    <section id="rfq" className="rfq tone-dark bp-dark">
      <div id="qx-pin-rfq">
        <div className="pinin sec">
          <div className="wrap" style={{ width: "100%" }}>
            <SectionHead
              code="SEC-03 / PROCESS"
              right={
                <>
                  <span className="pinonly pinonly-i" style={{ color: "#F4F3EF" }}>Scroll to advance ↓</span>
                  <span className="nopin">5 STEPS</span>
                </>
              }
            />
            <h2 className="disp h2-52 mask rfq-h">
              How QUABX Works. <span style={{ color: "#8A94A3" }}>From requirement to award, on one record.</span>
            </h2>

            <div className="grid c12 rfq-grid">
              <div className="steps-col span-all rl">
                <div className="steps-sticky sticky">
                  <div className="steps" ref={tabsRef} role="tablist" aria-label="RFQ steps">
                    <div className={`pf s${step}`} />
                    {STEP_TITLES.map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        role="tab"
                        aria-selected={i === step}
                        aria-controls="qx-rfq-panel"
                        className={`step${i === step ? " on" : i < step ? " done" : ""}`}
                        onClick={() => pickStep(i)}
                      >
                        <span className="sd" />
                        <span className="lbl step-n">STEP 0{i + 1}</span>
                        <span className="disp step-t">{t}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="win span-all xc rr" style={d(150)}>
                <div className="win-hd">
                  <div className="dots"><span /><span /><span /></div>
                  <span className="lbl">RFQ-QX-1042 · {STEP_TITLES[step].toUpperCase()}</span>
                  <span className="lbl">SAMPLE DATA</span>
                </div>
                <div className="win-bd" id="qx-rfq-panel" role="tabpanel" aria-live="polite">
                  <Panel key={step} step={step} />
                  <div className="win-ft">
                    <button type="button" className="btn b-gd btn-xs" onClick={() => pickStep((step + 4) % 5)}>
                      ← Back
                    </button>
                    <span className="lbl fs10" style={{ color: "#8A94A3" }}>0{step + 1} / 05</span>
                    <button type="button" className="btn b-or btn-xs" onClick={() => pickStep((step + 1) % 5)}>
                      {step === 4 ? "Restart" : "Next step"} <Arrow />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
