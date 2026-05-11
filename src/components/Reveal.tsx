import React, { useRef, useEffect } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  variant = "up",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      ref.current.classList.add("reveal");
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const variantClasses = {
    up: "",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  };

  return (
    <div
      ref={ref}
      className={`${variantClasses[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const RevealStagger: React.FC<{
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}> = ({ children, staggerDelay = 100, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll("[data-stagger]");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, index * staggerDelay);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
