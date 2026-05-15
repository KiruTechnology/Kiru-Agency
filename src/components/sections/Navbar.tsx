import { useEffect, useRef, useState } from "react";
import { Btn1 } from "../ui/Buttons";
import "./Navbar.css";

// Replace with your actual logo import, e.g.:
// import kiruLogo from "../../assets/kiru.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden]     = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y     = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 40);
      if (Math.abs(delta) >= 8) {
        if (y <= 10)             setHidden(false);
        else if (delta > 0 && y > 80) setHidden(true);
        else if (delta < 0)    setHidden(false);
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Process", "Work", "Pricing", "Contact"];

  return (
    <>
      <nav className={["navbar", scrolled ? "scrolled" : "", hidden ? "nav-hidden" : ""].join(" ")}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo">
            {/* <img src={kiruLogo} alt="Kiru Tech" className="nav-logo-img" /> */}
            <span className="nav-logo-text">Kiru Tech</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Btn1
            href="#contact"
            label="Start Project"
            floodLabel="Click to Start"
            nav
          />

          {/* Burger */}
          <button
            className={["nav-burger", drawerOpen ? "open" : ""].join(" ")}
            onClick={() => setDrawer((v) => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={["mobile-drawer", drawerOpen ? "open" : ""].join(" ")}>
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="drawer-link"
                onClick={() => setDrawer(false)}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="drawer-link cta-drawer" onClick={() => setDrawer(false)}>
              Start Project ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
