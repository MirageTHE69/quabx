"use client";

import { Arrow, d } from "./ui";

export default function HeroSearch() {
  return (
    <form
      id="find"
      className="up search stack"
      role="search"
      aria-label="Find suppliers"
      style={d(450)}
      onSubmit={(e) => {
        e.preventDefault();
        document.getElementById("cap")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <label>
        <span className="lbl">What do you need to source?</span>
        <input className="inp" type="text" name="q" placeholder="e.g. 5-axis CNC, SS316 flanges, investment casting" />
      </label>
      <label>
        <span className="lbl">Location (optional)</span>
        <input className="inp" type="text" name="loc" placeholder="City, state or cluster" />
      </label>
      <button className="btn b-or" type="submit">
        Find Suppliers <Arrow />
      </button>
    </form>
  );
}
