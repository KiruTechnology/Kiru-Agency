/**
 * HeroWithDomeGallery.tsx
 *
 * DROP-IN replacement for the Hero section in KiruTech.tsx
 *
 * SETUP — run these first:
 *   bun add gsap
 *   bun x --bun shadcn@latest add @react-bits/DomeGallery-TS-TW
 *
 * Then in your main entry (main.tsx) make sure you have:
 *   import "./index.css"   ← Tailwind base styles
 *
 * HOW THE ANIMATION WORKS:
 *   1. The hero wrapper is made tall (200vh) so there's room to scroll
 *      while the hero panel stays sticky (pinned) at the top.
 *   2. GSAP ScrollTrigger scrubs the hero content — it fades out,
 *      scales down slightly, and blurs — exactly like GitHub's hero.
 *   3. The DomeGallery section starts BELOW the viewport and slides
 *      up with a clip-path reveal as the hero fades, creating the
 *      "next section swallows the hero" effect.
 *   4. Once the scroll pin releases, normal page scroll resumes.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DomeGallery from "./DomeGallery"; // adjust path after CLI install

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────
   DOME GALLERY IMAGES
   These are the images that will appear in the 3-D dome.
   For a software/product engineering agency like Kiru Tech,
   use a mix of:
     • Project screenshots / mockups (your best work)
     • Tech stack logos on dark cards
     • Team candid shots (builds trust)
     • "Behind the screen" dev/design process shots
   See the full curation guide in the comments below.
───────────────────────────────────────────────────────────── */

/*
 ╔══════════════════════════════════════════════════════════╗
 ║          DOME GALLERY — WHAT TO PUT IN IT               ║
 ║                                                          ║
 ║  The dome is a 3-D curved grid of draggable image cards. ║
 ║  For Kiru Tech you want ~12–20 images that tell the      ║
 ║  story of what you build and who you are. Split them     ║
 ║  across these 4 buckets:                                 ║
 ║                                                          ║
 ║  1. PRODUCT SCREENSHOTS (6–8 images)                     ║
 ║     Dark-themed UI screenshots of actual or mockup       ║
 ║     projects — dashboards, mobile apps, landing pages.   ║
 ║     These are the most compelling. Dark bg looks         ║
 ║     stunning in the dome against the dark site theme.    ║
 ║     Examples:                                            ║
 ║       • FlowBoard analytics dashboard screenshot         ║
 ║       • Pulse Health app on iPhone mockup                ║
 ║       • NexaOS workspace screenshot                      ║
 ║       • A mobile onboarding screen                       ║
 ║       • An API docs page                                 ║
 ║       • A design system / component library view         ║
 ║                                                          ║
 ║  2. TECH STACK CARDS (4–6 images)                        ║
 ║     Simple dark cards with a big centered logo/icon.     ║
 ║     Create them as 800×600 PNGs in Figma — dark bg       ║
 ║     (#0d1117), centered white/colored logo.              ║
 ║     Examples:                                            ║
 ║       • React logo card                                  ║
 ║       • Go / Rust / Node card                            ║
 ║       • AWS / GCP card                                   ║
 ║       • PostgreSQL / Redis card                          ║
 ║       • Docker / Kubernetes card                         ║
 ║       • Figma / design tools card                        ║
 ║                                                          ║
 ║  3. PROCESS / BEHIND-THE-SCENES (2–4 images)             ║
 ║     Real team photos or stylised illustrations of        ║
 ║     the work process — builds authenticity.              ║
 ║     Examples:                                            ║
 ║       • Team whiteboarding a product architecture        ║
 ║       • Close-up of a keyboard + code on screen          ║
 ║       • Figma design file open on a large monitor        ║
 ║       • A Zoom call with a client visible                ║
 ║                                                          ║
 ║  4. OUTCOME / METRICS CARDS (2–4 images)                 ║
 ║     Dark cards with a big number + short label.          ║
 ║     Creates social proof even inside the gallery.        ║
 ║     Examples:                                            ║
 ║       • "340%" with "User retention ↑"                   ║
 ║       • "4.9★" with "App Store Rating"                   ║
 ║       • "$2M ARR" with "Client milestone"                ║
 ║       • "8 weeks" with "MVP to launch"                   ║
 ║                                                          ║
 ║  TECHNICAL TIPS:                                         ║
 ║    • Ideal aspect ratio: 4:3 or 16:9 (landscape)         ║
 ║    • Minimum size: 800×600px                             ║
 ║    • Format: WebP for performance                        ║
 ║    • Keep file size under 200kb each                     ║
 ║    • Dark images look best — avoid white backgrounds     ║
 ║    • The `grayscale` prop is ON below — images show      ║
 ║      in greyscale and pop to color on hover/drag.        ║
 ║      This gives the dome a premium editorial feel.       ║
 ╚══════════════════════════════════════════════════════════╝
*/

const DOME_IMAGES = [
  // ── Replace these with your actual image paths / URLs ──
  // Product screenshots
  {
    src: "/assets/projects/flowboard-dashboard.webp",
    alt: "FlowBoard Analytics",
  },
  {
    src: "/assets/projects/pulse-health-app.webp",
    alt: "Pulse Health Tracker",
  },
  { src: "/assets/projects/nexaos-workspace.webp", alt: "NexaOS Workspace" },
  {
    src: "/assets/projects/mobile-onboarding.webp",
    alt: "Mobile Onboarding",
  },
  { src: "/assets/projects/api-docs.webp", alt: "API Documentation" },
  { src: "/assets/projects/design-system.webp", alt: "Design System" },
  // Tech stack cards (create as dark PNG/WebP in Figma)
  { src: "/assets/stack/react-card.webp", alt: "React" },
  { src: "/assets/stack/go-card.webp", alt: "Go" },
  { src: "/assets/stack/aws-card.webp", alt: "AWS" },
  { src: "/assets/stack/postgres-card.webp", alt: "PostgreSQL" },
  { src: "/assets/stack/docker-card.webp", alt: "Docker" },
  { src: "/assets/stack/figma-card.webp", alt: "Figma" },
  // Process shots
  { src: "/assets/team/whiteboard.webp", alt: "Architecture planning" },
  { src: "/assets/team/coding.webp", alt: "Deep in the code" },
  { src: "/assets/team/design-review.webp", alt: "Design review" },
  // Outcome cards (create as dark PNG/WebP in Figma)
  {
    src: "/assets/outcomes/retention-card.webp",
    alt: "340% retention increase",
  },
  { src: "/assets/outcomes/appstore-card.webp", alt: "4.9★ App Store" },
  { src: "/assets/outcomes/arr-card.webp", alt: "$2M ARR milestone" },
  { src: "/assets/outcomes/speed-card.webp", alt: "8 weeks to launch" },
];

/* ─────────────────────────────────────────────────────────────
   HERO + DOME GALLERY SECTION
───────────────────────────────────────────────────────────── */
export function HeroWithDomeGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null); // tall scroll container
  const heroRef = useRef<HTMLDivElement>(null); // sticky hero panel
  const heroContentRef = useRef<HTMLDivElement>(null); // hero inner (fades out)
  const domeRef = useRef<HTMLDivElement>(null); // dome section (slides up)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── 1. Pin the hero inside its tall wrapper ── */
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top", // pin for 100vh of scroll
        pin: heroRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      });

      /* ── 2. Fade + scale + blur the hero content as user scrolls ── */
      gsap.to(heroContentRef.current, {
        opacity: 0,
        scale: 0.94,
        filter: "blur(8px)",
        y: -40,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1.2, // smooth scrub tied to scroll position
        },
      });

      /* ── 3. Slide the dome section up over the hero ── */
      gsap.fromTo(
        domeRef.current,
        {
          clipPath: "inset(100% 0% 0% 0% round 24px 24px 0 0)",
          y: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          y: 0,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "0% top", // dome starts rising immediately with hero fade
            end: "bottom top", // fully covers hero by the time wrapper ends
            scrub: 1,
          },
        },
      );

      /* ── 4. Fade in dome content text after dome is visible ── */
      gsap.fromTo(
        ".dome-content-inner",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: domeRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => ctx.revert(); // cleanup GSAP context on unmount
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SCROLL CONTAINER — 200vh gives room to scrub
      ══════════════════════════════════════════════════ */}
      <div ref={wrapperRef} style={{ height: "200vh", position: "relative" }}>
        {/* HERO PANEL — sticky, full viewport */}
        <div
          ref={heroRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            background: "var(--bg)",
            zIndex: 1,
          }}
        >
          {/* Aurora background */}
          <div className="gh-hero-bg" />

          {/* Floating particles */}
          {[
            { size: 3, x: 15, y: 25, dur: 7, delay: 0 },
            { size: 4, x: 80, y: 15, dur: 9, delay: 1.5 },
            { size: 2, x: 60, y: 70, dur: 11, delay: 3 },
            { size: 5, x: 35, y: 55, dur: 8, delay: 0.5 },
            { size: 3, x: 90, y: 45, dur: 10, delay: 2 },
            { size: 2, x: 20, y: 80, dur: 13, delay: 4 },
          ].map((p, i) => (
            <div
              key={i}
              className="gh-particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                background:
                  i % 3 === 0
                    ? "var(--blue)"
                    : i % 3 === 1
                      ? "var(--purple)"
                      : "var(--green)",
                animationDuration: `${p.dur}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          {/* Hero content — this is what GSAP fades out */}
          <div
            ref={heroContentRef}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "0 40px",
              paddingTop: "64px", // navbar height
              width: "100%",
            }}
          >
            <div style={{ maxWidth: 640, textAlign: "center" }}>
              {/* Eyebrow */}
              <div className="gh-eyebrow" style={{ marginBottom: 24 }}>
                <div className="gh-eyebrow-dot" />
                Product Engineering Agency
              </div>

              {/* H1 */}
              <h1 className="gh-hero-title">
                We Build
                <br />
                <span className="gradient-word">Software</span>
                <br />
                That Scales.
              </h1>

              {/* Subtext */}
              <p className="gh-hero-sub">
                From idea to product — we design, develop, and launch
                high-quality software built for growth.
              </p>

              {/* CTAs */}
              <div className="gh-hero-actions">
                <a href="#contact" className="btn-green lg">
                  ✦ Start Your Project
                </a>
                <a href="#work" className="btn-ghost lg">
                  View Our Work →
                </a>
              </div>

              {/* Social proof */}
              <div className="gh-hero-social-proof">
                <div className="gh-avatars">
                  {["👤", "👤", "👤", "👤"].map((a, i) => (
                    <span key={i}>{a}</span>
                  ))}
                </div>
                <span>
                  Trusted by founders &amp; engineering teams globally
                </span>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: ".7rem",
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Scroll to explore
            </span>
            <div
              style={{
                width: 1,
                height: 48,
                background:
                  "linear-gradient(180deg, var(--border), transparent)",
                animation: "float-particle 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* DOME SECTION — slides up over hero */}
        <div
          ref={domeRef}
          id="work-dome"
          style={{
            position: "absolute",
            top: "100vh", // starts just below hero
            left: 0,
            right: 0,
            minHeight: "100vh",
            background: "var(--bg)",
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(88, 166, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(175, 113, 247, 0.03) 0%, transparent 50%)",
            zIndex: 2,
            clipPath: "inset(100% 0% 0% 0% round 24px 24px 0 0)", // starts hidden
            willChange: "clip-path",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Section header */}
          <div
            className="dome-content-inner"
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "80px 40px 32px",
              textAlign: "center",
              opacity: 0, // faded in by GSAP
            }}
          >
            <div className="gh-overline" style={{ justifyContent: "center" }}>
              Our Work
            </div>
            <h2 className="gh-section-title" style={{ marginBottom: 12 }}>
              Products We've Shipped
            </h2>
            <p
              className="gh-section-sub"
              style={{ margin: "0 auto 16px", textAlign: "center" }}
            >
              Drag to explore — a curated view of interfaces, tools, and systems
              we've built for clients across Africa and beyond.
            </p>
            <p
              style={{
                fontSize: ".75rem",
                color: "var(--text-muted)",
                fontStyle: "italic",
                letterSpacing: ".04em",
              }}
            >
              ← Drag to rotate · Scroll inside to navigate →
            </p>
          </div>

          {/* ── THE DOME GALLERY ── */}
          <div style={{ width: "100vw", height: "80vh" }}>
            <DomeGallery
              images={DOME_IMAGES}
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={25} // allow slight vertical tilt
              segments={34}
              dragDampening={2}
              grayscale // greyscale → color on hover (premium feel)
            />
          </div>

          {/* Bottom CTA strip */}
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "32px 40px 80px",
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a href="#contact" className="btn-green lg">
              Start Your Project →
            </a>
            <a href="#services" className="btn-ghost lg">
              See All Services
            </a>
          </div>
        </div>
      </div>
      {/* end 200vh wrapper */}

      {/* Spacer so the rest of the page renders below the dome */}
      <div
        style={{ height: "100vh", background: "var(--bg)" }}
        id="after-dome"
      />
    </>
  );
}

export default HeroWithDomeGallery;
