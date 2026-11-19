import { SectionHead, d } from "./ui";
import { CATEGORIES, GROUPS } from "@/lib/categories";

const PREVIEW = 4;
const groupName = Object.fromEntries(GROUPS.map((g) => [g.id, g.name]));
const groupShort = Object.fromEntries(GROUPS.map((g) => [g.id, g.short]));

export default function Capabilities() {
  const total = CATEGORIES.length;

  return (
    <section id="cap" className="railsec tone-light bp-light">
      <div id="qx-pin-rail">
        <div className="pinin">
          <div className="wrap">
            <SectionHead code="SEC-02 / CAPABILITIES" right={`${total} CATEGORIES`} />
            <div className="rail-head stack">
              <h2 className="disp h2 mask" style={{ maxWidth: 760 }}>
                Source Across the Manufacturing Value Chain
              </h2>
              <p className="r" style={d(200)}>
                {total} categories in four groups, from the shop floor to sector specialists. Search by process,
                material and capability, not by vague listings.{" "}
                <span className="nopin">Swipe or drag the rail.</span>
                <span className="pinonly pinonly-i">Keep scrolling to move along the rail.</span>
              </p>
            </div>
          </div>

          <div id="qx-rail" className="rail stg" role="list" aria-label="Capability categories">
            {CATEGORIES.map((c) => (
              <a key={c.code} role="listitem" className="cap" href={`#${c.slug}`} data-group={groupName[c.g]}>
                <div className="cap-top">
                  <span className="lbl capn">{c.n} / {total}</span>
                  <span className="lbl cap-code">{c.code}</span>
                </div>
                <div>
                  <span className="lbl cap-grp">Group {c.g} · {groupShort[c.g]}</span>
                  <h3 className="disp">{c.t}</h3>
                  <p className="lbl">
                    {c.s.slice(0, PREVIEW).join(" · ")}
                    {c.s.length > PREVIEW && <span className="cap-more"> +{c.s.length - PREVIEW} more</span>}
                  </p>
                </div>
                <span className="cap-cta">View capabilities →</span>
              </a>
            ))}
          </div>

          <div className="wrap pinonly rail-bar">
            <span id="qx-railn" className="lbl fs11" style={{ width: 28, color: "#0B0E13" }}>01</span>
            <div className="rail-bar-t"><div id="qx-railbar" /></div>
            <span className="lbl fs11" style={{ color: "#5A6472" }}>{total}</span>
            <span id="qx-railg" className="lbl fs10 rail-grp">{GROUPS[0].name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
