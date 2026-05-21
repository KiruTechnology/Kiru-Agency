import { useEffect, useState } from "react";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Services", "Process", "Work", "Pricing", "Contact"];

  return (
    <>
      <nav className={`gh-nav${scrolled ? " scrolled" : ""}`}>
        <div className="gh-nav-inner">
          <a href="#" className="gh-logo">
            {/* <img src="/assets/kiru.png" alt="Kiru Tech" className="gh-logo-img" /> */}
            <span className="gh-logo-text">Kiru Tech</span>
          </a>
          <ul className="gh-nav-links">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
          <div className="gh-nav-right">
            <a href="#contact" className="btn-ghost">
              Sign in
            </a>
            <a href="#contact" className="btn-green">
              Start Project
            </a>
            <button
              className={`gh-burger${drawer ? " open" : ""}`}
              onClick={() => setDrawer((v) => !v)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`gh-drawer${drawer ? " open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setDrawer(false)}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="drawer-cta"
              onClick={() => setDrawer(false)}
            >
              Start Project ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
