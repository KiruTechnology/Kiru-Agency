import { useEffect, useRef } from "react";
import { BtnApple, Btn3 } from "../ui/Buttons";
import "./Hero.css";

/**
 * Hero3DCanvas
 * Hosts the Three.js 3D scene from hero-3d.js.
 * In your Vite project, copy hero-3d.js into /public and load it via a
 * <script> tag in index.html (already uncommented in the original file),
 * OR import it as a module if you refactor it. The canvas id "heroCanvas"
 * and label container id "hero3dLabels" must remain unchanged.
 */
function Hero3DCanvas() {
  return (
    <div className="hero-right">
      <canvas id="heroCanvas" className="hero-canvas" />
      <div className="hero-3d-labels" id="hero3dLabels" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home">
      {/* ── Left column: copy ── */}
      <div className="hero-left">
        <p className="eyebrow">
          <span className="spark">✦</span> Product Engineering Agency
        </p>

        <h1>
          We Build<br />Software<br />That Scales.
        </h1>

        <p className="hero-sub">
          From idea to product — we design, develop, and launch high-quality
          software built for growth.
        </p>

        <div className="hero-actions">
          <BtnApple href="#contact" icon="✦" label="Start Your Project" />
          <Btn3 href="#work" label="View Our Work" />
        </div>

        <div className="hero-note">
          <span className="amber-star">✳</span>
          <span>
            Trusted by founders &amp;<br />engineering teams globally
          </span>
        </div>
      </div>

      {/* ── Right column: 3-D canvas ── */}
      <Hero3DCanvas />
    </section>
  );
}
