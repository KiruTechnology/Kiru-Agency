import { useState, useEffect } from "react";
import { Button2 } from "./Buttons";
// import "../../files/style.css";
const FloatingCTA = () => {
  //   const styles = `
  //      .gh-float {
  //   position: fixed;
  //   bottom: 28px;
  //   right: 28px;
  //   z-index: 100;
  //   opacity: 0;
  //   transform: translateY(16px);
  //   pointer-events: none;
  //   transition:
  //     opacity 0.3s,
  //     transform 0.3s;
  // }
  // .gh-float.visible {
  //   opacity: 1;
  //   transform: translateY(0);
  //   pointer-events: all;
  // }
  // .gh-float.hidden {
  //   opacity: 0;
  //   transform: translateY(16px);
  //   pointer-events: none;
  // }
  // .gh-float-btn {
  //   display: flex;
  //   align-items: center;
  //   gap: 8px;
  //   padding: 12px 22px;
  //   border-radius: 999px;
  //   background: var(--green-dim);
  //   color: #fff;
  //   border: 1px solid rgba(63, 185, 80, 0.3);
  //   font-family: var(--font);
  //   font-size: 0.82rem;
  //   font-weight: 700;
  //   text-decoration: none;
  //   white-space: nowrap;
  //   box-shadow:
  //     0 8px 24px rgba(0, 0, 0, 0.5),
  //     0 0 0 1px rgba(63, 185, 80, 0.15),
  //     0 0 24px rgba(63, 185, 80, 0.15);
  //   transition:
  //     background 0.15s,
  //     box-shadow 0.15s,
  //     transform 0.1s;
  //   animation: bounce-cta 3s ease-in-out infinite;
  // }
  // .gh-float-btn:hover {
  //   background: #2ea043;
  //   box-shadow:
  //     0 12px 32px rgba(0, 0, 0, 0.6),
  //     0 0 0 3px rgba(63, 185, 80, 0.3),
  //     0 0 40px rgba(63, 185, 80, 0.25);
  //   transform: translateY(-2px);
  //   animation: none;
  // }
  // .gh-float-dot {
  //   width: 7px;
  //   height: 7px;
  //   border-radius: 50%;
  //   background: var(--green);
  //   box-shadow: 0 0 6px var(--green);
  //   animation: pulse-ring 1.5s ease-in-out infinite;
  // }
  //   `;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{styles}</style> */}
      <div
        className={`floating-cta-wrap ${
          isVisible ? "float-visible" : "float-hidden"
        }`}
      >
        <div className="relative inline-flex">
          <Button2 href="#contact" text="✦ Start Your Project" darkBg={true} />

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
    </>
  );
};

export default FloatingCTA;
