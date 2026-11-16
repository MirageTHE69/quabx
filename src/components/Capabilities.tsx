import { SectionHead, d } from "./ui";
import { CAPABILITIES, LINKS } from "@/lib/data";

export default function Capabilities() {
  return (
    <section id="cap" className="railsec tone-light bp-light">
      <div id="qx-pin-rail">
        <div className="pinin">
          <div className="wrap">
            <SectionHead code="SEC-02 / CAPABILITIES" right={`${CAPABILITIES.length} CATEGORIES`} />
            <div className="rail-head stack">
              <h2 className="disp h2 mask" style={{ maxWidth: 760 }}>
                Source Across the Manufacturing Value Chain
              </h2>
              <p className="r" style={d(200)}>
                Search by process, material and part envelope, not by vague listings.{" "}
                <span className="nopin">Swipe or drag the rail.</span>
                <span className="pinonly pinonly-i">Keep scrolling to move along the rail.</span>
              </p>
            </div>
          </div>

          <div id="qx-rail" className="rail stg" role="list" aria-label="Capability categories">
            {CAPABILITIES.map((c) => (
              <a key={c.code} role="listitem" className="cap" href={LINKS.find}>
                <div className="cap-top">
                  <span className="lbl capn">{c.n} / {CAPABILITIES.length}</span>
                  <span className="lbl cap-code">{c.code}</span>
                </div>
                <div>
                  <h3 className="disp">{c.t}</h3>
                  <p className="lbl">{c.s}</p>
                </div>
                <span className="cap-cta">Explore suppliers →</span>
              </a>
            ))}
          </div>

          <div className="wrap pinonly rail-bar">
            <span id="qx-railn" className="lbl fs11" style={{ width: 28, color: "#0B0E13" }}>01</span>
            <div className="rail-bar-t"><div id="qx-railbar" /></div>
            <span className="lbl fs11" style={{ color: "#5A6472" }}>{CAPABILITIES.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
