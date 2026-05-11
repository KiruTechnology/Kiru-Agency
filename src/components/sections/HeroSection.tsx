import React, { useEffect, useRef } from "react";
import { ButtonApple, ButtonWithBar } from "../Buttons";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //   useEffect(() => {
  // Three.js hero-3d.js will be loaded from the files folder
  // We'll inject the script dynamically or import it later
  //     const loadHero3D = async () => {
  //       if (
  //         canvasRef.current &&
  //         window.THREE &&
  //         typeof (window as any).initHero3D === "function"
  //       ) {
  //         (window as any).initHero3D(canvasRef.current);
  //       }
  //     };

  //     // Wait a bit for Three.js to load
  //     const timer = setTimeout(loadHero3D, 100);
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-16 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <p className="text-amber flex items-center gap-2 text-sm font-medium">
              <span>✦</span>
              <span>Product Engineering Agency</span>
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-chalk leading-tight">
              We Build
              <br />
              Software
              <br />
              That Scales.
            </h1>

            {/* Subheading */}
            <p className="text-lg text-chalk/80 max-w-xl">
              From idea to product — we design, develop, and launch high-quality
              software built for growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ButtonApple href="#contact" text="Start Your Project" />
              <ButtonWithBar href="#work" text="View Our Work" />
            </div>

            {/* Hero Note */}
            <div className="flex items-center gap-3 pt-8 border-t border-slate-mid/30">
              <span className="text-amber text-xl">✳</span>
              <span className="text-chalk/70 text-sm">
                Trusted by founders &<br />
                engineering teams globally
              </span>
            </div>
          </div>

          {/* Right Side - 3D Canvas */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-mid/20 to-slate/10 border border-slate-mid/30">
              <canvas
                ref={canvasRef}
                id="heroCanvas"
                className="w-full h-full"
              />
              <div id="hero3dLabels" className="absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
