import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById("contact");
    const scrollObs = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", scrollObs, { passive: true });
    scrollObs();

    const visObs = new IntersectionObserver(
      ([e]) => setHidden(e.isIntersecting),
      { threshold: 0.1 },
    );
    if (contactEl) visObs.observe(contactEl);
    return () => {
      window.removeEventListener("scroll", scrollObs);
      visObs.disconnect();
    };
  }, []);

  return (
    <div className={`gh-float${visible && !hidden ? " visible" : " hidden"}`}>
      <a href="#contact" className="gh-float-btn">
        <div className="gh-float-dot" />
        Start Your Project
      </a>
    </div>
  );
}
