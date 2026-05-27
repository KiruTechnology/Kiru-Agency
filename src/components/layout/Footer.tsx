import { IconX, IconGh, IconLi } from "../icons/ContactIcons";
import kiruLogo from "../../assets/kiru.png";

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
        ["Web Apps", "/services"],
        ["Mobile Apps", "/services"],
        ["UI/UX Design", "/services"],
        ["Backend & APIs", "/services"],
      ],
    },
    {
      head: "Contact",
      links: [
        ["hello@kirutech.io", "mailto:hello@kirutech.io"],
        ["+254 725676491", "tel:+254725676491"],
        ["Book a Call", "#contact"],
      ],
    },
  ];
  return (
    <footer className="kiru-footer">
      <div className="kiru-footer-cta">
        <h2 className="kiru-footer-cta-title">
          Ready to Automate Your Business Process?
        </h2>
        <p className="kiru-footer-cta-sub">
          Click button below to Get Started.
        </p>
        <button className="kiru-footer-cta-btn">Start Now</button>
      </div>
      <div className="kiru-footer-inner">
        <div className="kiru-footer-brand">
          <div className="kiru-footer-logo">
            <img
              src={kiruLogo}
              alt="Kiru Tech"
              className="kiru-footer-logo-img"
            />
            <span className="kiru-footer-logo-text">Kiru Tech</span>
          </div>
          <p className="kiru-footer-tagline">
            A product engineering partner that builds scalable software systems.
          </p>
          <div className="kiru-footer-socials">
            {[<IconX />, <IconLi />, <IconGh />].map((icon, i) => (
              <a key={i} href="#" className="kiru-footer-social">
                {icon}
              </a>
            ))}
          </div>
        </div>
        {cols.map((col) => (
          <div className="kiru-footer-col" key={col.head}>
            <p className="kiru-footer-col-head">{col.head}</p>
            {col.links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="kiru-footer-bottom pb-6!">
        <span>
          © {new Date().getFullYear()} Kiru Tech. All rights reserved.
        </span>
        <div className="kiru-footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
