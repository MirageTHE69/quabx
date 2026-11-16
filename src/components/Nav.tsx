"use client";

import { useEffect, useState } from "react";
import { useExperience } from "./Experience";
import { Arrow, LogoMark, Wordmark } from "./ui";
import { LINKS, NAV_LINKS } from "@/lib/data";

export default function Nav() {
  const { scrolled } = useExperience();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1060 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className={`nav${scrolled ? " sc" : ""}${open ? " open" : ""}`}>
      <nav className="wrap nav-in" aria-label="Primary">
        <a href="#top" className="logo" aria-label="QUABX home" onClick={close}>
          <LogoMark />
          <Wordmark />
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.label} className="nl" href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nl nav-signin" href={LINKS.signIn}>Sign In</a>
          <a className="btn b-or btn-sm btn-hide-xs" href={LINKS.join}>
            Join as Supplier <Arrow />
          </a>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="qx-mnav"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div id="qx-prog" className="prog" />
    </header>

      <div id="qx-mnav" className={`mnav bp-dark${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mnav-in">
          {NAV_LINKS.map((l, i) => (
            <a key={l.label} className="mlink" href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
              {l.label}
              <span className="lbl">0{i + 1}</span>
            </a>
          ))}
          <div className="mnav-cta">
            <a className="btn b-or btn-lg" href={LINKS.join} onClick={close} tabIndex={open ? 0 : -1}>
              Join as Supplier <Arrow />
            </a>
            <a className="btn b-gd btn-lg" href={LINKS.signIn} onClick={close} tabIndex={open ? 0 : -1}>
              Sign In
            </a>
          </div>
          <p className="lbl fs10" style={{ color: "#7C8696", marginTop: "auto", paddingTop: 40 }}>
            Quality. Capability. Connections.
          </p>
        </div>
      </div>
    </>
  );
}
