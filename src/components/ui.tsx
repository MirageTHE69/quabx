import type { CSSProperties, ReactNode } from "react";

export function LogoMark({ size = 28, stroke = 1.5 }: { size?: number; stroke?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="25" height="25" rx="3" stroke="#F4F3EF" strokeWidth={stroke} />
      <path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="#F4F3EF" strokeWidth={stroke} />
      <circle cx="14" cy="14" r="3" fill="#FF5A1F" />
    </svg>
  );
}

export function Wordmark({ style }: { style?: CSSProperties }) {
  return (
    <span className="disp logo-t" style={style}>
      QUAB<span className="x">X</span>
    </span>
  );
}

export function Arrow() {
  return (
    <span className="arr" aria-hidden="true">
      →
    </span>
  );
}

export function SectionHead({ code, right }: { code: string; right?: ReactNode }) {
  return (
    <div className="sh lbl">
      <span className="tl sh-code">{code}</span>
      <span className="ln sh-rule" />
      {right != null && <span className="r sh-right">{right}</span>}
    </div>
  );
}

export const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
