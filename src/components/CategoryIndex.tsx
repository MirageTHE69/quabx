"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { SectionHead } from "./ui";
import { CATEGORIES, GROUPS, TOTAL_SKILLS, type GroupId } from "@/lib/categories";

export const SEARCH_EVENT = "qx-search";

type Filter = GroupId | "all";

// Lowercase only, so match positions line up with the original text for highlighting.
const norm = (s: string) => s.toLowerCase();
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Index of `q` at the start of a word in `text` ("tig" hits "TIG welding", not "fatigue"), or -1. */
function wordMatch(text: string, q: string) {
  if (!q) return -1;
  const m = new RegExp(`(^|[^a-z0-9])${escape(q)}`).exec(norm(text));
  return m ? m.index + m[1].length : -1;
}

function Highlight({ text, q }: { text: string; q: string }): ReactNode {
  if (!q) return text;
  const i = wordMatch(text, q);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

export default function CategoryIndex() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  const q = norm(query.trim());

  const results = useMemo(() => {
    return CATEGORIES.filter((c) => filter === "all" || c.g === filter)
      .map((c) => {
        if (!q) return { c, hits: [] as string[], titleHit: false };
        const titleHit = wordMatch(c.t, q) >= 0 || wordMatch(c.code, q) >= 0;
        const hits = c.s.filter((s) => wordMatch(s, q) >= 0);
        return { c, hits, titleHit };
      })
      .filter((r) => !q || r.titleHit || r.hits.length > 0);
  }, [filter, q]);

  const groupsShown = GROUPS.filter((g) => results.some((r) => r.c.g === g.id));
  const skillHits = results.reduce((n, r) => n + r.hits.length, 0);

  const toggle = (slug: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  /* Open a category from a #cat-xxx link (rail cards, industry tiles). */
  const openFromHash = useCallback(() => {
    const slug = window.location.hash.slice(1);
    if (!CATEGORIES.some((c) => c.slug === slug)) return;
    setFilter("all");
    setQuery("");
    setOpen((prev) => new Set(prev).add(slug));
    requestAnimationFrame(() =>
      requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "center" })),
    );
  }, []);

  useEffect(() => {
    const onSearch = (e: Event) => {
      const text = (e as CustomEvent<string>).detail ?? "";
      setFilter("all");
      setQuery(text);
      document.getElementById("index")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("hashchange", openFromHash);
    window.addEventListener(SEARCH_EVENT, onSearch);
    // a deep link like /#cat-cnc on first load
    const t = window.setTimeout(openFromHash, 400);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener(SEARCH_EVENT, onSearch);
    };
  }, [openFromHash]);

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: CATEGORIES.length },
    ...GROUPS.map((g) => ({ id: g.id as Filter, label: g.short, count: CATEGORIES.filter((c) => c.g === g.id).length })),
  ];

  return (
    <section id="index" className="sec tone-dark bp-dark idx">
      <div className="wrap">
        <SectionHead code="SEC-02B / CATEGORY INDEX" right={`${TOTAL_SKILLS} SKILLS`} />
        <div className="rail-head stack" style={{ marginBottom: 40 }}>
          <h2 className="disp h2 mask" style={{ maxWidth: 720 }}>
            Every category. <span style={{ color: "#8A94A3" }}>Every capability.</span>
          </h2>
          <p className="r" style={{ color: "var(--body)" }}>
            Browse the full QUABX taxonomy, or search for a process, machine, standard or skill.
          </p>
        </div>

        <div className="idx-ctrl r">
          <label className="idx-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <span className="sr-only">Search categories and skills</span>
            <input
              className="inp"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. 5-axis, TIG welding, PLC, HAZOP, wafer fabrication"
            />
            {query && (
              <button type="button" className="idx-clear lbl" onClick={() => setQuery("")}>
                Clear
              </button>
            )}
          </label>
          <div className="idx-tabs" role="tablist" aria-label="Category groups">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={filter === t.id}
                className={`idx-tab${filter === t.id ? " on" : ""}`}
                onClick={() => setFilter(t.id)}
              >
                {t.id !== "all" && <span className="lbl idx-tab-k">{t.id}</span>}
                {t.label}
                <span className="lbl idx-tab-n">{t.count}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="lbl fs10 idx-status" aria-live="polite">
          {q
            ? results.length
              ? `${results.length} categor${results.length === 1 ? "y" : "ies"} · ${skillHits} matching skill${skillHits === 1 ? "" : "s"} for “${query.trim()}”`
              : `No matches for “${query.trim()}”. Try a process, material or machine type.`
            : filter === "all"
              ? `Showing all ${CATEGORIES.length} categories · click a category to see every capability`
              : GROUPS.find((g) => g.id === filter)?.blurb}
        </p>

        {groupsShown.map((g) => (
          <div key={g.id} className="idx-group">
            <div className="idx-gh">
              <span className="lbl idx-gk">{g.id}</span>
              <h3 className="disp">{g.name}</h3>
              <span className="lbl fs10 idx-gc">
                {(() => {
                  const n = results.filter((r) => r.c.g === g.id).length;
                  return `${n} ${n === 1 ? "category" : "categories"}`;
                })()}
              </span>
            </div>
            <div className="idx-grid">
              {results
                .filter((r) => r.c.g === g.id)
                .map(({ c, hits }) => {
                  const isOpen = open.has(c.slug) || hits.length > 0;
                  return (
                    <div key={c.slug} id={c.slug} className={`idx-card${isOpen ? " open" : ""}`}>
                      <button
                        type="button"
                        className="idx-head"
                        aria-expanded={isOpen}
                        aria-controls={`${c.slug}-body`}
                        onClick={() => toggle(c.slug)}
                      >
                        <span className="lbl idx-n">{c.n}</span>
                        <span className="idx-t">
                          <span className="disp"><Highlight text={c.t} q={q} /></span>
                          <span className="lbl fs10" style={{ color: "#7C8696" }}>
                            {c.code} · {c.s.length} capabilities
                          </span>
                        </span>
                        <span className="idx-pm" aria-hidden="true" />
                      </button>
                      <div className="idx-body" id={`${c.slug}-body`}>
                        <div>
                          <ul className="idx-skills">
                            {c.s.map((s) => (
                              <li key={s} className={hits.includes(s) ? "hit" : undefined}>
                                <Highlight text={s} q={q} />
                              </li>
                            ))}
                          </ul>
                          {c.note && <p className="idx-note">{c.note}</p>}
                          <a className="idx-cta" href="#rfq">Post an RFQ in this category →</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
