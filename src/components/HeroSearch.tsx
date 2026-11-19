"use client";

import { Arrow, d } from "./ui";
import { SEARCH_EVENT } from "./CategoryIndex";

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
        const q = String(new FormData(e.currentTarget).get("q") ?? "").trim();
        window.dispatchEvent(new CustomEvent(SEARCH_EVENT, { detail: q }));
      }}
    >
      <label>
        <span className="lbl">What do you need to source?</span>
        <input className="inp" type="text" name="q" placeholder="e.g. 5-axis machining, investment casting, PLC programming" />
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
