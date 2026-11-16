"use client";

import { useExperience } from "./Experience";
import { Arrow, SectionHead, d } from "./ui";
import { LEVELS, LINKS } from "@/lib/data";

export default function Verification() {
  const { lit, runLadder } = useExperience();

  return (
    <section id="verification" className="sec tone-dark bp-dark">
      <div className="wrap">
        <SectionHead code="SEC-06 / VERIFICATION" right="S0 → S4" />
        <div className="grid c12" style={{ columnGap: 24, rowGap: 48 }}>
          <div className="span-all" style={{ gridColumn: "span 5" }}>
            <h2 className="disp h2 mask">Capability Should Be Supported by Evidence.</h2>
            <p className="r" style={{ ...d(200), marginTop: 24, fontSize: 17, lineHeight: 1.65, color: "#B4BCC8", maxWidth: 440 }}>
              Verification on QUABX is per process, not per company. A supplier can be reviewed for CNC machining
              and still be self-declared for casting, and you will see exactly that.
            </p>
            <p className="lbl r fs11" style={{ ...d(300), color: "#8A94A3", margin: "40px 0 14px" }}>Evidence status</p>
            <div className="stg" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="chip chip-wait">Self-declared</span>
              <span className="chip" style={{ border: "1px solid #5B6574", color: "#C9CFD8", backgroundColor: "#1C222B" }}>Evidence submitted</span>
              <span className="chip" style={{ border: "1px solid rgba(31,181,122,0.6)", color: "#1FB57A" }}>Reviewed</span>
              <span className="chip" style={{ backgroundColor: "#1FB57A", color: "#0B0E13" }}>Independently assessed</span>
              <span className="chip" style={{ border: "1px dashed #FF5A1F", color: "#FF8A5C", textDecoration: "line-through" }}>Expired</span>
            </div>
            <div className="r" style={{ ...d(400), display: "flex", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
              <a className="btn b-gd" href={LINKS.verification}>Learn About Verification <Arrow /></a>
              <button type="button" className="btn b-ghost" onClick={runLadder}>Replay ↻</button>
            </div>
          </div>

          <div id="qx-ladder" className="span-all r" style={{ gridColumn: "7 / span 6" }}>
            <ol className="ladder">
              {LEVELS.map(([code, t, desc], i) => {
                const on = i < lit;
                return (
                  <li key={code} className={`lv${on ? " on" : ""}`} style={{ marginLeft: i * 24 }}>
                    <span className="lvd lbl">{code}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="disp" style={{ fontSize: 20, fontWeight: 600 }}>{t}</p>
                      <p style={{ fontSize: 14, color: "#8A94A3", marginTop: 4, lineHeight: 1.45 }}>{desc}</p>
                    </div>
                    <span className="lvs lbl">{on ? "Verified" : "Pending"}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
