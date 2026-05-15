import React, { useState, useEffect } from "react";
import { Button2 } from "./Buttons";

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 1000px
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-cta-wrap ${
        isVisible ? "float-visible" : "float-hidden"
      }`}
    >
      <div className="relative inline-flex">
        <Button2
          href="#contact"
          text="✦ Start Your Project"
          darkBg={true}
        />

        {/* Floating particles */}
        <span className="fp p1">// Kiru Tech</span>
        <span className="fp p2">Start Now</span>
        <span className="fp p3">Let's Build</span>
        <span className="fp p4">Ship Fast</span>
        <span className="fp p5">Launch →</span>
        <span className="fp p6">Scale Up</span>
        <span className="fp pdot1"></span>
        <span className="fp pdot2"></span>
      </div>
    </div>
  );
};

export default FloatingCTA;
