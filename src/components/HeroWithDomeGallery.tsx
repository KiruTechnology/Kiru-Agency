import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DomeGallery from "./DomeGallery";
import { DiAppcelerator, DiReact } from "react-icons/di";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

const DOME_IMAGES = [
  {
    src: "/assets/projects/flowboard-dashboard.webp",
    alt: "FlowBoard Analytics",
  },
  {
    src: "/assets/projects/pulse-health-app.webp",
    alt: "Pulse Health Tracker",
  },
  { src: "/assets/projects/nexaos-workspace.webp", alt: "NexaOS Workspace" },
  { src: "/assets/projects/mobile-onboarding.webp", alt: "Mobile Onboarding" },
  { src: "/assets/projects/api-docs.webp", alt: "API Documentation" },
  { src: "/assets/projects/design-system.webp", alt: "Design System" },
  { src: "/assets/stack/react-card.webp", alt: "React" },
  { src: "/assets/stack/go-card.webp", alt: "Go" },
  { src: "/assets/stack/aws-card.webp", alt: "AWS" },
  { src: "/assets/stack/postgres-card.webp", alt: "PostgreSQL" },
  { src: "/assets/stack/docker-card.webp", alt: "Docker" },
  { src: "/assets/stack/figma-card.webp", alt: "Figma" },
  { src: "/assets/team/whiteboard.webp", alt: "Architecture planning" },
  { src: "/assets/team/coding.webp", alt: "Deep in the code" },
  { src: "/assets/team/design-review.webp", alt: "Design review" },
  {
    src: "/assets/outcomes/retention-card.webp",
    alt: "340% retention increase",
  },
  { src: "/assets/outcomes/appstore-card.webp", alt: "4.9★ App Store" },
  { src: "/assets/outcomes/arr-card.webp", alt: "$2M ARR milestone" },
  { src: "/assets/outcomes/speed-card.webp", alt: "8 weeks to launch" },
];

export function HeroWithDomeGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const domeRef = useRef<HTMLDivElement>(null);
  const domeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── 1. Pin the hero inside the tall wrapper ──────────────────────
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top",
        pin: heroRef.current,
        pinSpacing: false,
        anticipatePin: 1,
      });

      // ── 2. Fade + scale + blur the hero TEXT ─────────────────────────
      // Starts immediately, completes by 55% scroll through the wrapper.
      // This matches GitHub: text is fully gone before the canvas arrives.
      gsap.to(heroContentRef.current, {
        opacity: 0,
        scale: 0.92,
        filter: "blur(12px)",
        y: -48,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "55% top", // text done by 55%
          scrub: 1.4,
        },
      });

      // ── 2b. Fade out the AURORA BACKGROUND with the hero text ────────
      // This ensures the aurora doesn't persist after the hero section ends.
      const auroraElement = heroRef.current?.querySelector(".kiru-hero-bg");
      if (auroraElement) {
        gsap.to(auroraElement, {
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "55% top",
            scrub: 1.4,
          },
        });
      }

      // ── 3. Dome reveal — starts AFTER hero text is well on its way out ─
      // FIX: was "top top" (simultaneous). Now "35% top" — dome only
      // begins appearing once the hero is already 64% faded.
      // Uses opacity + scale instead of clip-path wipe so it feels like
      // the dome is materialising through the hero, not wiping up from below.
      gsap.fromTo(
        domeRef.current,
        {
          opacity: 0,
          scale: 0.85,
          // Keep clip-path for the rounded-top-corners entrance shape,
          // but start it almost fully revealed so the main reveal is opacity.
          clipPath: "inset(8% 0% 0% 0% round 32px 32px 0 0)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "20% top", // ← Dome appears earlier, creates snappy reveal
            end: "50% top", // ← Faster animation for punchier effect
            scrub: 1.35,
          },
        },
      );

      // ── 4. Dome content text fades in after dome is visible ───────────
      gsap.fromTo(
        domeInnerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "65% top",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{
          height: "195dvh",
          position: "relative",
          // overflow: "hidden",
        }}
      >
        {/* ── HERO PANEL (sticky) */}
        <div
          ref={heroRef}
          style={{
            position: "sticky",
            top: 0,
            height: "30%",
            width: "100%",
            // overflow: "hidden",
            background: "transparent",
            zIndex: 1,
          }}
        >
          {/*
            AURORA BACKGROUND — rendered once, visible through both layers.
            Because both heroRef and domeRef sit inside wrapperRef and the
            dome is transparent, this single aurora covers the full transition.
          */}
          <div
            className="kiru-hero-bg"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />

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
              className="kiru-particle"
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

          {/* Hero content — GSAP fades this out on scroll */}
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
              width: "100%",
              zIndex: 1,
              height: "95dvh",
            }}
          >
            <div style={{ maxWidth: "70rem", textAlign: "center" }}>
              {/* Eyebrow */}
              <div className="kiru-eyebrow" style={{ marginBottom: 24 }}>
                <div className="kiru-eyebrow-dot" />
                Product Engineering Agency
              </div>

              {/* H1 */}
              <h1 className="kiru-hero-title">
                We Build
                <br />
                <span className="gradient-word">Software </span>
                <br />
                That Scales.
              </h1>

              {/* Subtext */}
              <p className="kiru-hero-sub">
                From idea to product — we design, develop, and launch
                kiru-quality software built for growth.
              </p>

              {/* CTAs */}
              <div className="kiru-hero-actions">
                <a href="#contact" className="btn-green lg">
                  ✦ Start Your Project
                </a>
                <a href="#work" className="btn-ghost lg">
                  View Our Work →
                </a>
              </div>

              {/* Social proof */}
              <div className="kiru-hero-social-proof">
                <div className="kiru-avatars">
                  {[
                    <DiReact />,
                    "👤",
                    <GlobeAltIcon />,
                    <DiAppcelerator />,
                  ].map((a, i) => (
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-2rem",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: ".7rem",
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textWrap: "nowrap",
              }}
            >
              Explore more
              <ChevronDownIcon className="animate-bounce font-[.7rem]!" />
            </div>
          </div>
        </div>
        {/*    ── DOME SECTION ──  */}

        <div
          ref={domeRef}
          id="work-dome"
          style={{
            position: "absolute",
            top: "100vh",
            left: 0,
            right: 0,
            height: "80vh",
            background: "transparent",
            zIndex: 2,
            opacity: 0,
            willChange: "opacity, transform, clip-path",
            overflow: "hidden",
          }}
        >
          {/* Section header */}
          <div
            ref={domeInnerRef}
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "32px 40px 12px",
              textAlign: "center",
              opacity: 1,
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="kiru-overline" style={{ justifyContent: "center" }}>
              Our Work
            </div>
            <h2 className="kiru-section-title" style={{ marginBottom: 12 }}>
              Products We've Shipped
            </h2>
            <p
              style={{
                fontSize: ".72rem",
                color: "var(--text-muted)",
                fontStyle: "italic",
                letterSpacing: ".04em",
              }}
            >
              ← Drag to rotate · Scroll inside to navigate →
            </p>
          </div>

          {/* ── THE DOME GALLERY ── */}
          <div
            style={{
              width: "100vw",
              height: "70vh",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                transform: "scale(0.85)",
                transformOrigin: "center",
              }}
            >
              <DomeGallery
                images={DOME_IMAGES}
                fit={0.8}
                minRadius={600}
                maxVerticalRotationDeg={25}
                segments={34}
                dragDampening={2}
                grayscale
                overlayBlurColor="transparent"
              />
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "1rem 3rem",
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a href="#contact" className="btn-green lg">
              Start Your Project →
            </a>
            <a href="/services" className="btn-ghost lg">
              See All Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroWithDomeGallery;
