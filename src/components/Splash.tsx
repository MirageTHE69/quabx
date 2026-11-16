"use client";

import { useExperience } from "./Experience";

const corners = [
  { top: 24, left: 24, borderTopWidth: 1, borderLeftWidth: 1 },
  { top: 24, right: 24, borderTopWidth: 1, borderRightWidth: 1 },
  { bottom: 24, left: 24, borderBottomWidth: 1, borderLeftWidth: 1 },
  { bottom: 24, right: 24, borderBottomWidth: 1, borderRightWidth: 1 },
];

export default function Splash() {
  const { splash, splashOut, skipSplash } = useExperience();
  if (!splash) return null;

  return (
    <div className={`spl${splashOut ? " out" : ""}`} role="status" aria-label="Loading QUABX">
      <div className="spl-p spl-t bp-dark" />
      <div className="spl-p spl-b bp-dark" />
      <div className="spl-seam" />
      <div className="spl-ui">
        <div className="spl-glow" />
        <div className="spl-gh" />
        <div className="spl-gv" />
        {corners.map((s, i) => (
          <span key={i} className="spl-c" style={s} />
        ))}
        <span className="spl-meta lbl" style={{ left: 64 }}>QX-BOOT / REV A</span>
        <span className="spl-meta lbl" style={{ right: 64 }}>DWG QX-HOME · SHEET 1 / 1</span>
        <div className="spl-ring" aria-hidden="true">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            <circle cx="110" cy="110" r="104" stroke="rgba(138,148,163,0.35)" strokeWidth="1" strokeDasharray="2 6" />
            <circle cx="110" cy="110" r="92" stroke="rgba(255,90,31,0.5)" strokeWidth="1" strokeDasharray="60 520" />
            <path d="M110 0v10M110 210v10M0 110h10M210 110h10" stroke="#8A94A3" strokeWidth="1" />
          </svg>
        </div>
        <svg className="spl-mark" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect className="sr" x="1.5" y="1.5" width="25" height="25" rx="3" stroke="#F4F3EF" strokeWidth="1" />
          <path className="sl" d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="#F4F3EF" strokeWidth="1" />
          <circle className="sdot" cx="14" cy="14" r="3" fill="#FF5A1F" />
        </svg>
        <div className="spl-wm" aria-hidden="true">
          {"QUABX".split("").map((ch, i) => (
            <span className="o" key={i}>
              <span className="i" style={i === 4 ? { color: "#FF5A1F" } : undefined}>{ch}</span>
            </span>
          ))}
        </div>
        <p className="spl-tag lbl"><span>Quality. Capability. Connections.</span></p>
        <div className="spl-stat lbl">
          <span className="spl-dot" />
          <span id="qx-status">Loading drawing set</span>
        </div>
        <button type="button" className="spl-skip lbl" onClick={skipSplash}>Skip intro</button>
        <div className="spl-count" aria-hidden="true">
          <span id="qx-count">000</span>
          <small>%</small>
        </div>
        <div className="spl-ruler" />
        <div className="spl-track"><div className="spl-fill" /></div>
      </div>
    </div>
  );
}
