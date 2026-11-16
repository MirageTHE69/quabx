import { Arrow, d } from "./ui";
import HeroSearch from "./HeroSearch";
import { LINKS } from "@/lib/data";

const BOLTS: [number, number][] = [
  [370, 240], [337.8, 317.8], [260, 350], [182.2, 317.8],
  [150, 240], [182.2, 162.2], [260, 130], [337.8, 162.2],
];

function FlangeDrawing() {
  return (
    <svg viewBox="0 0 520 500" role="img" aria-label="Animated engineering drawing of a flange with dimension callouts">
      <defs>
        <radialGradient id="steel" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#5B6574" />
          <stop offset="0.55" stopColor="#2A313C" />
          <stop offset="1" stopColor="#161B22" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0.7" stopColor="#FF5A1F" stopOpacity="0" />
          <stop offset="1" stopColor="#FF5A1F" stopOpacity="0.35" />
        </radialGradient>
        <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1L10 5L0 9z" fill="#FF5A1F" />
        </marker>
      </defs>
      <g id="qx-spin">
        <g className="fadein" style={{ animationDelay: "2.3s" }}>
          <circle cx="260" cy="240" r="150" fill="url(#steel)" />
          <circle cx="260" cy="240" r="75" fill="none" stroke="#6B7584" strokeWidth="1" opacity="0.6" />
          <circle cx="260" cy="240" r="50" fill="#0B0E13" />
          {BOLTS.map(([x, y]) => (
            <circle key={`f${x}-${y}`} cx={x} cy={y} r="12" fill="#0B0E13" />
          ))}
          <circle cx="260" cy="240" r="152" fill="url(#glow)" />
        </g>
        <g className="draw" fill="none" stroke="#C9CFD8" strokeWidth="1.2">
          <circle cx="260" cy="240" r="150" />
          <circle cx="260" cy="240" r="75" style={{ animationDelay: "0.3s" }} />
          <circle cx="260" cy="240" r="50" style={{ animationDelay: "0.5s" }} />
          {BOLTS.map(([x, y], i) => (
            <circle key={`d${x}-${y}`} cx={x} cy={y} r="12" style={{ animationDelay: `${0.8 + i * 0.1}s` }} />
          ))}
          <circle className="nd" cx="260" cy="240" r="110" stroke="#8A94A3" strokeWidth="0.8" strokeDasharray="6 4" />
        </g>
      </g>
      <g className="draw" fill="none" stroke="#8A94A3" strokeWidth="0.7">
        <line x1="88" y1="240" x2="432" y2="240" style={{ animationDelay: "0.2s" }} />
        <line x1="260" y1="68" x2="260" y2="412" style={{ animationDelay: "0.2s" }} />
      </g>
      <g className="fadein" style={{ animationDelay: "2.7s" }} fill="none" stroke="#FF5A1F" strokeWidth="1">
        <line x1="110" y1="250" x2="110" y2="458" strokeDasharray="3 3" stroke="#8A94A3" />
        <line x1="410" y1="250" x2="410" y2="458" strokeDasharray="3 3" stroke="#8A94A3" />
        <line x1="112" y1="448" x2="408" y2="448" markerStart="url(#ar)" markerEnd="url(#ar)" />
        <rect x="234" y="438" width="52" height="20" fill="#0B0E13" stroke="none" />
      </g>
      <g className="fadein" style={{ animationDelay: "2.9s" }} fill="none" stroke="#FF5A1F" strokeWidth="1">
        <polyline points="296,205 400,96 500,96" markerStart="url(#ar)" />
        <polyline points="174,154 110,84 18,84" markerStart="url(#ar)" />
      </g>
      <g style={{ fontFamily: "var(--f-mono)" }} fontSize="12" fill="#F4F3EF" letterSpacing="1">
        <text className="fadein" style={{ animationDelay: "2.8s" }} x="260" y="452" textAnchor="middle">Ø300</text>
        <text className="fadein" style={{ animationDelay: "3s" }} x="404" y="88">Ø100 H7</text>
        <text className="fadein" style={{ animationDelay: "3.1s" }} x="18" y="76">8× Ø24 THRU</text>
        <text className="fadein" style={{ animationDelay: "3.2s" }} x="18" y="92" fill="#8A94A3" fontSize="10">EQ SP ON PCD 220</text>
        <text className="fadein" style={{ animationDelay: "3.3s" }} x="404" y="112" fill="#8A94A3" fontSize="10">Ra 1.6 · ⌖ 0.05 A</text>
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero bp-dark drift">
      <div className="hero-glow" />
      <div id="qx-chh" className="ch" aria-hidden="true" style={{ left: 0, right: 0, top: 0, height: 1, backgroundColor: "rgba(255,90,31,0.35)" }} />
      <div id="qx-chv" className="ch" aria-hidden="true" style={{ top: 0, bottom: 0, left: 0, width: 1, backgroundColor: "rgba(255,90,31,0.35)" }} />
      <div
        id="qx-cht"
        className="ch lbl"
        aria-hidden="true"
        style={{ left: 0, top: 0, fontSize: 10, color: "#FF5A1F", backgroundColor: "rgba(11,14,19,0.8)", padding: "3px 6px", border: "1px solid rgba(255,90,31,0.4)" }}
      >
        X 0000 · Y 0000
      </div>

      <div className="wrap hero-in">
        <div className="lbl hero-meta">
          <span className="type" style={{ color: "#FF5A1F" }}>SEC-01 / INDUSTRIAL EXCHANGE</span>
          <span className="up" style={{ ...d(300), flex: 1, height: 1, backgroundColor: "rgba(138,148,163,0.25)" }} />
          <span className="up hero-rev" style={d(500)}>REV A</span>
        </div>

        <div className="grid c12 hero-grid">
          <div id="qx-herocopy" className="hero-copy span-all">
            <h1 className="disp h1">
              <span className="up" style={{ display: "block", ...d(0) }}>Find the Right Manufacturing Partner.</span>
              <span className="up" style={{ display: "block", color: "#8A94A3", ...d(140) }}>Move Your Project Forward.</span>
            </h1>
            <p className="up hero-sub" style={d(300)}>
              Discover engineering suppliers, communicate technical requirements and manage industrial sourcing
              through one structured platform.
            </p>

            <HeroSearch />

            <div className="up hero-btns" style={d(600)}>
              <a className="btn b-gd" href={LINKS.rfq}>Post an RFQ <Arrow /></a>
              <a className="btn b-gd" href={LINKS.join}>Join as a Supplier <Arrow /></a>
            </div>

            <ul className="up lbl ticks" style={d(750)}>
              <li>Search capabilities</li>
              <li>Share technical requirements</li>
              <li>Compare eligible suppliers</li>
            </ul>
          </div>

          <figure id="qx-cad" className="cad hero-cad span-all up" style={d(200)}>
            <div className="lbl cad-hd">
              <span>FIG. 01 — SLIP-ON FLANGE · FRONT</span>
              <span style={{ color: "#FF5A1F" }}>DWG QX-0001</span>
            </div>
            <FlangeDrawing />
            <div className="lbl cad-ft">
              <div>MATL<br /><span>SS 316L</span></div>
              <div>PROC<br /><span>CNC TURN</span></div>
              <div>QTY<br /><span>250 NOS</span></div>
              <div>SCALE<br /><span>1:4</span></div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
