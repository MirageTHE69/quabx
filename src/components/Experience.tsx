"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Ctx = {
  splash: boolean;
  splashOut: boolean;
  skipSplash: () => void;
  scrolled: boolean;
  step: number;
  pickStep: (i: number) => void;
  lit: number;
  runLadder: () => void;
};

const ExperienceCtx = createContext<Ctx | null>(null);

export function useExperience() {
  const c = useContext(ExperienceCtx);
  if (!c) throw new Error("useExperience must be used inside <Experience>");
  return c;
}

const SPLASH_KEY = "qx-intro-seen";
const PIN_MIN_WIDTH = 900;
const $ = (id: string) => document.getElementById(id);

export default function Experience({ children }: { children: ReactNode }) {
  // SSR renders the animated state with the splash on top, so nothing flashes before hydration.
  const [anim, setAnim] = useState(true);
  const [ready, setReady] = useState(false);
  const [pin, setPin] = useState(false);
  const [splash, setSplash] = useState(true);
  const [splashOut, setSplashOut] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [step, setStep] = useState(0);
  const [lit, setLit] = useState(0);

  const pinRef = useRef(false);
  const stepRef = useRef(0);
  const scrolledRef = useRef(false);
  const railShift = useRef(0);
  const exiting = useRef(false);
  const timers = useRef<number[]>([]);
  const ladderTimer = useRef<number | null>(null);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);

  /* ── layout of pinned sections ── */
  const layoutPins = useCallback(() => {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const rfq = $("qx-pin-rfq");
    const rail = $("qx-pin-rail");
    const track = $("qx-rail");
    if (!pinRef.current) {
      if (rfq) rfq.style.height = "";
      if (rail) rail.style.height = "";
      if (track) track.style.transform = "";
      return;
    }
    if (rfq) rfq.style.height = `${Math.round(vh + vh * 0.75 * 4)}px`;
    if (rail && track) {
      railShift.current = Math.max(0, track.scrollWidth - vw);
      rail.style.height = `${Math.round(vh + railShift.current)}px`;
    }
  }, []);

  const progress = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const range = r.height - window.innerHeight;
    if (range <= 0) return 0;
    return Math.min(1, Math.max(0, -r.top / range));
  };

  /* ── per-frame scroll effects ── */
  const frame = useCallback(() => {
    const vh = window.innerHeight;
    const se = document.scrollingElement || document.documentElement;
    const max = se.scrollHeight - se.clientHeight;
    const bar = $("qx-prog");
    if (bar) bar.style.transform = `scaleX(${max > 0 ? se.scrollTop / max : 0})`;

    const hero = $("top");
    if (hero) {
      const hy = Math.max(0, 72 - hero.getBoundingClientRect().top);
      const sc = hy > 24;
      if (sc !== scrolledRef.current) {
        scrolledRef.current = sc;
        setScrolled(sc);
      }
      if (hy < vh * 1.5) {
        const cad = $("qx-cad");
        if (cad) cad.style.transform = `translateY(${hy * 0.18}px)`;
        $("qx-spin")?.setAttribute("transform", `rotate(${hy * 0.08} 260 240)`);
        const copy = $("qx-herocopy");
        if (copy) {
          copy.style.transform = `translateY(${hy * -0.08}px)`;
          copy.style.opacity = String(Math.max(0, 1 - hy / 900));
        }
      }
    }

    if (pinRef.current) {
      const rfq = $("qx-pin-rfq");
      if (rfq) {
        const st = Math.min(4, Math.floor(progress(rfq) * 5));
        if (st !== stepRef.current) {
          stepRef.current = st;
          setStep(st);
        }
      }
      const rail = $("qx-pin-rail");
      const track = $("qx-rail");
      if (rail && track) {
        const q = progress(rail);
        track.style.transform = `translate3d(${-q * railShift.current}px,0,0)`;
        const rb = $("qx-railbar");
        if (rb) rb.style.transform = `scaleX(${q})`;
        const rn = $("qx-railn");
        if (rn) rn.textContent = String(1 + Math.round(q * 14)).padStart(2, "0");
      }
    }

    const dash = $("qx-dash");
    if (dash) {
      const d = dash.getBoundingClientRect();
      const k = Math.min(1, Math.max(0, (vh - d.top) / (vh * 0.75)));
      const ek = 1 - Math.pow(1 - k, 3);
      dash.style.transform = `rotateX(${20 * (1 - ek)}deg) scale(${0.9 + 0.1 * ek}) translateY(${80 * (1 - ek)}px)`;
      dash.style.opacity = String(0.25 + 0.75 * ek);
    }
  }, []);

  /* ── verification ladder ── */
  const runLadder = useCallback(() => {
    if (ladderTimer.current) window.clearInterval(ladderTimer.current);
    setLit(0);
    let n = 0;
    ladderTimer.current = window.setInterval(() => {
      n += 1;
      setLit(n);
      if (n >= 5 && ladderTimer.current) {
        window.clearInterval(ladderTimer.current);
        ladderTimer.current = null;
      }
    }, 420);
  }, []);

  /* ── splash ── */
  const exitSplash = useCallback(() => {
    if (exiting.current) return;
    exiting.current = true;
    const c = $("qx-count");
    if (c) c.textContent = "100";
    try { sessionStorage.setItem(SPLASH_KEY, "1"); } catch {}
    setSplashOut(true);
    later(() => setReady(true), 280);
    later(() => {
      setSplash(false);
      document.documentElement.style.overflow = "";
      layoutPins();
      frame();
    }, 1250);
  }, [frame, layoutPins, later]);

  /* ── how-it-works step selection ── */
  const pickStep = useCallback((i: number) => {
    stepRef.current = i;
    setStep(i);
    if (!pinRef.current) return;
    const el = $("qx-pin-rfq");
    if (!el) return;
    const r = el.getBoundingClientRect();
    const range = r.height - window.innerHeight;
    if (range > 0) window.scrollBy({ top: r.top + range * ((i + 0.5) / 5), behavior: "smooth" });
  }, []);

  /* ── mount ── */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wantPin = () => !reduce && window.innerWidth > PIN_MIN_WIDTH;
    let raf = 0;
    let io: IntersectionObserver | null = null;
    const cleanups: Array<() => void> = [];

    // Motion preference and viewport width only exist in the browser, so they sync once on mount.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (reduce) {
      setAnim(false);
      setSplash(false);
      setReady(true);
      setLit(5);
      exiting.current = true;
    } else {
      pinRef.current = wantPin();
      setPin(pinRef.current);

      let seen = false;
      try { seen = sessionStorage.getItem(SPLASH_KEY) === "1"; } catch {}

      if (seen) {
        // Returning visitor this session: open the shutters straight away.
        later(exitSplash, 60);
      } else {
        document.documentElement.style.overflow = "hidden";
        const msgs = ["Loading drawing set", "Calibrating datums", "Indexing capabilities", "Ready to source"];
        const t0 = performance.now();
        const dur = 2500;
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
          const c = $("qx-count");
          if (c) c.textContent = String(Math.round(e * 100)).padStart(3, "0");
          const s = $("qx-status");
          if (s) s.textContent = msgs[Math.min(3, Math.floor(p * 4))];
          if (p < 1 && !exiting.current) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        later(exitSplash, 2800);
      }
    }

    /* eslint-enable react-hooks/set-state-in-effect */

    // Scroll reveals
    const els = Array.from(document.querySelectorAll<HTMLElement>(".r,.rl,.rr,.mask,.tl,.ln,.stg,.words,.wmk"));
    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((e) => e.classList.add("in"));
    } else {
      // Chrome reports an element hidden by its own clip-path as never intersecting,
      // so clip-path reveals (.mask, .tl) are observed through their parent instead.
      const watch = new Map<Element, HTMLElement[]>();
      els.forEach((e) => {
        const clipped = e.classList.contains("mask") || e.classList.contains("tl");
        const target = clipped && e.parentElement ? e.parentElement : e;
        watch.set(target, [...(watch.get(target) ?? []), e]);
      });
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            watch.get(en.target)?.forEach((e) => {
              e.classList.add("in");
              if (e.id === "qx-ladder") later(runLadder, 400);
            });
            io?.unobserve(en.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
      );
      watch.forEach((_, target) => io!.observe(target));
    }

    // Scroll engine
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        frame();
      });
    };
    const onResize = () => {
      const p = wantPin();
      if (p !== pinRef.current) {
        pinRef.current = p;
        setPin(p);
        // wait for the .pin class to apply before measuring
        requestAnimationFrame(() => { layoutPins(); frame(); });
      } else {
        layoutPins();
        frame();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    });
    requestAnimationFrame(() => { layoutPins(); frame(); });
    // fonts change card widths → re-measure the rail once they load
    document.fonts?.ready.then(() => { layoutPins(); frame(); });

    // Pointer: hero crosshair + magnetic buttons (fine pointers only)
    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      const hero = $("top");
      const h = $("qx-chh");
      const v = $("qx-chv");
      const t = $("qx-cht");
      if (hero && h && v && t) {
        const move = (e: PointerEvent) => {
          const r = hero.getBoundingClientRect();
          const x = Math.round(e.clientX - r.left);
          const y = Math.round(e.clientY - r.top);
          h.style.transform = `translateY(${y}px)`;
          v.style.transform = `translateX(${x}px)`;
          t.style.transform = `translate(${x + 14}px,${y + 14}px)`;
          t.textContent = `X ${String(x).padStart(4, "0")} · Y ${String(y).padStart(4, "0")}`;
          h.style.opacity = v.style.opacity = t.style.opacity = "1";
        };
        const leave = () => { h.style.opacity = v.style.opacity = t.style.opacity = "0"; };
        hero.addEventListener("pointermove", move);
        hero.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          hero.removeEventListener("pointermove", move);
          hero.removeEventListener("pointerleave", leave);
        });
      }
      let magEl: HTMLElement | null = null;
      const onMag = (e: PointerEvent) => {
        const b = (e.target as Element | null)?.closest?.(".btn") as HTMLElement | null;
        if (b !== magEl) {
          if (magEl) magEl.style.transform = "";
          magEl = b;
        }
        if (!b) return;
        const r = b.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
        b.style.transform = `translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px)`;
      };
      document.addEventListener("pointermove", onMag);
      cleanups.push(() => document.removeEventListener("pointermove", onMag));
    }

    const tm = timers.current;
    return () => {
      tm.forEach(clearTimeout);
      cancelAnimationFrame(raf);
      io?.disconnect();
      if (ladderTimer.current) window.clearInterval(ladderTimer.current);
      cleanups.forEach((f) => f());
      document.documentElement.style.overflow = "";
    };
  }, [exitSplash, frame, later, layoutPins, runLadder]);

  const rootCls = [anim && "anim", ready && "ready", pin && "pin"].filter(Boolean).join(" ");

  return (
    <ExperienceCtx.Provider
      value={{ splash, splashOut, skipSplash: exitSplash, scrolled, step, pickStep, lit, runLadder }}
    >
      <div className={rootCls}>{children}</div>
    </ExperienceCtx.Provider>
  );
}
