import { IconX, IconGh, IconLi } from "../icons/ContactIcons";

/* MAIN LAYOUT FOOTER */
export function Footer() {
  const cols = [
    {
      head: "Company",
      links: [
        ["Why Kiru", "/#features"],
        ["Team", "/#team"],
        ["Projects", "/#work"],
        ["Stories", "/#testimonials"],
      ],
    },
    {
      head: "Services",
      links: [
        ["Web Apps", "services"],
        ["Mobile Apps", "#services"],
        ["UI/UX Design", "#services"],
        ["Backend & APIs", "#services"],
      ],
    },
    {
      head: "Contact",
      links: [
        ["hello@kirutech.io", "mailto:hello@kirutech.io"],
        ["+254 700 000 000", "tel:+254700000000"],
        ["Book a Call", "#contact"],
      ],
    },
  ];
  return (
    <footer className="gh-footer">
      <div className="gh-footer-cta">
        <h2 className="gh-footer-cta-title">
          Ready to Automate Your Business Process?
        </h2>
        <p className="gh-footer-cta-sub">Click button below to Get Started.</p>
        <button className="gh-footer-cta-btn">Start Now</button>
      </div>
      <div className="gh-footer-inner">
        <div className="gh-footer-brand">
          <div className="gh-footer-logo">
            <img
              src="../../assets/kiru.png"
              alt="Kiru Tech"
              className="gh-footer-logo-img"
            />
            <span className="gh-footer-logo-text">Kiru Tech</span>
          </div>
          <p className="gh-footer-tagline">
            A product engineering partner that builds scalable software systems.
          </p>
          <div className="gh-footer-socials">
            {[<IconX />, <IconLi />, <IconGh />].map((icon, i) => (
              <a key={i} href="#" className="gh-footer-social">
                {icon}
              </a>
            ))}
          </div>
        </div>
        {cols.map((col) => (
          <div className="gh-footer-col" key={col.head}>
            <p className="gh-footer-col-head">{col.head}</p>
            {col.links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="gh-footer-bottom pb-6!">
        <span>
          © {new Date().getFullYear()} Kiru Tech. All rights reserved.
        </span>
        <div className="gh-footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
