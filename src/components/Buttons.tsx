import React from "react";

/* ═══════════════════════════════════
   BTN1 - Lime flood + chevron
   Navbar, Work with us, CTAs
═══════════════════════════════════ */
export const Button1: React.FC<{
  href?: string;
  onClick?: () => void;
  text: string;
  hoverText?: string;
  amber?: boolean;
  className?: string;
}> = ({ href, onClick, text, hoverText, amber = false, className = "" }) => {
  const baseClasses = `btn1 inline-flex items-center ${
    amber ? "btn1--amber" : ""
  } ${className}`;

  const content = (
    <>
      <span className="btn1__icon">
        <svg viewBox="0 0 22 22" fill="none">
          <circle cx="4" cy="6" r="1.5" fill="currentColor" />
          <circle cx="4" cy="11" r="1.5" fill="currentColor" />
          <circle cx="4" cy="16" r="1.5" fill="currentColor" />
          <circle cx="9" cy="6" r="1.5" fill="currentColor" />
          <circle cx="9" cy="11" r="1.5" fill="currentColor" />
          <circle cx="9" cy="16" r="1.5" fill="currentColor" />
          <circle cx="14" cy="8" r="1.5" fill="currentColor" />
          <circle cx="14" cy="13" r="1.5" fill="currentColor" />
          <circle cx="18" cy="11" r="1.5" fill="currentColor" />
        </svg>
      </span>
      <span className="btn1__label">{text}</span>
      <span className="btn1__flood">
        <span className="btn1__flood-text">{hoverText || text}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

/* ═══════════════════════════════════
   APPLE HOVER
   Icon exits left, arrow enters right
═══════════════════════════════════ */
export const ButtonApple: React.FC<{
  href?: string;
  onClick?: () => void;
  icon?: string;
  text: string;
  arrow?: boolean;
  amber?: boolean;
  className?: string;
}> = ({
  href,
  onClick,
  icon = "✦",
  text,
  arrow = true,
  amber = false,
  className = "",
}) => {
  const baseClasses = `btn-apple inline-flex items-center overflow-hidden ${
    amber ? "btn-apple--amber" : ""
  } ${className}`;

  const content = (
    <>
      <span className="btn-apple__icon">{icon}</span>
      <span className="btn-apple__text">{text}</span>
      {arrow && <span className="btn-apple__arrow">→</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

/* ═══════════════════════════════════
   BTN2 - Neon particle burst
   Floating buttons with glow effect
═══════════════════════════════════ */
export const Button2: React.FC<{
  href?: string;
  onClick?: () => void;
  text: string;
  darkBg?: boolean;
  className?: string;
}> = ({ href, onClick, text, darkBg = false, className = "" }) => {
  const baseClasses = `btn2 inline-flex items-center justify-center ${
    darkBg ? "btn2--dark-bg" : ""
  } ${className}`;

  const content = <span>{text}</span>;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

/* ═══════════════════════════════════
   BTN3 - Pipe to arrow
   View, Explore buttons
═══════════════════════════════════ */
export const ButtonWithBar: React.FC<{
  href?: string;
  onClick?: () => void;
  text: string;
  className?: string;
}> = ({ href, onClick, text, className = "" }) => {
  const baseClasses = `btn3 group inline-flex items-center gap-3 ${className}`;

  const content = (
    <>
      <span className="btn3__bar" />
      <span className="btn3__text">{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export const ButtonOutline: React.FC<{
  href?: string;
  onClick?: () => void;
  text: string;
  className?: string;
}> = ({ href, onClick, text, className = "" }) => {
  const baseClasses = `inline-flex items-center gap-2 px-6 py-3 border border-amber rounded-lg font-medium text-amber hover:bg-amber hover:text-slate transition-all duration-300 ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {text}
    </button>
  );
};
