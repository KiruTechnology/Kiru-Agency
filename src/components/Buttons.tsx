import React from "react";

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
  const baseClasses = `inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
    amber
      ? "bg-amber-500 text-slate hover:bg-amber-600"
      : "bg-slate text-chalk hover:bg-slate-mid"
  } ${className}`;

  const content = (
    <>
      <span>{icon}</span>
      <span>{text}</span>
      {arrow && <span>→</span>}
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

export const ButtonWithBar: React.FC<{
  href?: string;
  onClick?: () => void;
  text: string;
  className?: string;
}> = ({ href, onClick, text, className = "" }) => {
  const baseClasses = `group inline-flex items-center gap-3 px-6 py-3 font-medium text-chalk hover:text-amber transition-colors duration-300 ${className}`;

  const content = (
    <>
      <span className="h-1 w-8 bg-amber group-hover:w-12 transition-all duration-300"></span>
      <span>{text}</span>
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
