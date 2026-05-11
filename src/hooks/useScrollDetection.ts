import { useState, useEffect, useRef } from "react";

export const useScrollDetection = (
  hideAfter: number = 80,
  minDelta: number = 8,
) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollRef.current;

      // Always show at top
      if (currentY <= 10) {
        setIsHidden(false);
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        // Hide on scroll down after threshold
        if (delta > 0 && currentY > hideAfter && Math.abs(delta) >= minDelta) {
          setIsHidden(true);
        }
        // Show on scroll up
        else if (delta < 0 && Math.abs(delta) >= minDelta) {
          setIsHidden(false);
        }
      }

      lastScrollRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideAfter, minDelta]);

  return { isHidden, isAtTop };
};

export const useIntersectionObserver = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};
