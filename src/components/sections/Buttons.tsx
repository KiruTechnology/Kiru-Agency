import React from "react";
import "./Buttons.css";

/* ─────────────────────────────────────
   Btn1  —  Lime/amber flood + chevron
   Used in: Navbar "Start Project", Testimonials CTA
───────────────────────────────────── */
interface Btn1Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  floodLabel?: string;
  amber?: boolean;   // amber variant
  nav?: boolean;     // pill shape for navbar
  workWithUs?: boolean;
}

export function Btn1({ label, floodLabel = "Click to Start", amber, nav, workWithUs, className = "", ...rest }: Btn1Props) {
  const classes = [
    "btn1",
    amber ? "btn1--amber" : "",
    nav ? "nav-btn1" : "",
    workWithUs ? "btn1--workwithus" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <a className={classes} {...rest}>
      <span className="btn1__icon">
        <svg viewBox="0 0 22 22" fill="none">
          <circle cx="4"  cy="6"  r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="4"  cy="11" r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="4"  cy="16" r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="9"  cy="6"  r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="9"  cy="11" r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="9"  cy="16" r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="14" cy="8"  r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="14" cy="13" r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
          <circle cx="18" cy="11" r="1.5" fill={amber ? "#f7f5f0" : "#0D1B2A"} />
        </svg>
      </span>
      <span className="btn1__label">{label}</span>
      <span className="btn1__flood">
        <span className="btn1__flood-text">{floodLabel}</span>
      </span>
    </a>
  );
}

/* ─────────────────────────────────────
   BtnApple  —  icon exits left, → enters right
   Used in: Hero, Features CTA, Process CTA
───────────────────────────────────── */
interface BtnAppleProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: string;
  label: string;
  amber?: boolean;
}
export function BtnApple({ icon = "✦", label, amber, className = "", ...rest }: BtnAppleProps) {
  return (
    <a className={["btn-apple", amber ? "btn-apple--amber" : "", className].filter(Boolean).join(" ")} {...rest}>
      <span className="btn-apple__icon">{icon}</span>
      <span className="btn-apple__text">{label}</span>
      <span className="btn-apple__arrow">→</span>
    </a>
  );
}

/* ─────────────────────────────────────
   Btn3  —  pipe → arrow + white pill
   Used in: Hero "View Our Work"
───────────────────────────────────── */
interface Btn3Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}
export function Btn3({ label, className = "", ...rest }: Btn3Props) {
  return (
    <a className={["btn3", className].filter(Boolean).join(" ")} {...rest}>
      <span className="btn3__bar" />
      <span className="btn3__text">{label}</span>
    </a>
  );
}

/* ─────────────────────────────────────
   Btn2  —  Neon spinning-ring glow
   Used in: Floating CTA
───────────────────────────────────── */
interface Btn2Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}
export function Btn2({ label, className = "", ...rest }: Btn2Props) {
  return (
    <a className={["btn2", className].filter(Boolean).join(" ")} {...rest}>
      <span className="float-spark-icon">✦</span>
      {label}
    </a>
  );
}

/* ─────────────────────────────────────
   BtnOutline  —  diagonal flood fill
   Used in: Services, Work headers, Pricing
───────────────────────────────────── */
interface BtnOutlineProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  light?: boolean;
  fullWidth?: boolean;
}
export function BtnOutline({ label, light, fullWidth, className = "", ...rest }: BtnOutlineProps) {
  return (
    <a
      className={[
        "btn-outline",
        light ? "btn-outline--light" : "",
        fullWidth ? "pricing-btn" : "",
        className,
      ].filter(Boolean).join(" ")}
      {...rest}
    >
      {label}
    </a>
  );
}
