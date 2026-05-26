import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ChevronDownIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  ListBulletIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import kiruLogo from "../../assets/kiru.png";

export function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = [
    {
      label: "Services",
      type: "dropdown",
      columns: [
        {
          title: "AI Solutions",
          items: [
            {
              icon: SparklesIcon,
              label: "AI Automation",
              desc: "Custom AI agents & automation",
            },
            {
              icon: ChatBubbleLeftRightIcon,
              label: "AI Chatbots",
              desc: "Conversational AI systems",
            },
          ],
        },
        {
          title: "Development",
          items: [
            {
              icon: GlobeAltIcon,
              label: "Web Apps",
              desc: "Full-stack applications",
            },
            {
              icon: DevicePhoneMobileIcon,
              label: "Mobile Apps",
              desc: "iOS & Android native",
            },
            {
              icon: Cog6ToothIcon,
              label: "Backend APIs",
              desc: "Scalable infrastructure",
            },
          ],
        },
        {
          title: "Strategy",
          items: [
            {
              icon: PaintBrushIcon,
              label: "UI/UX Design",
              desc: "Design systems",
            },
            {
              icon: RocketLaunchIcon,
              label: "MVP Development",
              desc: "Fast validation",
            },
            {
              icon: BuildingLibraryIcon,
              label: "Architecture",
              desc: "System design",
            },
          ],
        },
      ],
      link: "/services",
    },
    {
      label: "Work",
      type: "dropdown",
      columns: [
        {
          title: "Featured Projects",
          items: [
            {
              label: "FinTech Platform",
              tags: ["React", "Node.js", "GraphQL"],
            },
            {
              label: "E-Commerce MVP",
              tags: ["Next.js", "Stripe", "PostgreSQL"],
            },
            {
              label: "Mobile App",
              tags: ["React Native", "Firebase", "TypeScript"],
            },
          ],
        },
        {
          title: "By Type",
          items: [
            {
              label: "SaaS Products",
              tags: ["B2B", "Enterprise", "Integration"],
            },
            { label: "Consumer Apps", tags: ["Mobile", "Web", "Real-time"] },
            { label: "AI Projects", tags: ["LLM", "Automation", "Chatbots"] },
          ],
        },
      ],
      link: "/projects",
    },
    ...(isHomePage
      ? [
          {
            label: "Go to",
            type: "dropdown",
            columns: [
              {
                title: "Navigation",
                items: [
                  { icon: ListBulletIcon, label: "Process", link: "#process" },
                  {
                    icon: CurrencyDollarIcon,
                    label: "Pricing",
                    link: "#pricing",
                  },
                ],
              },
              {
                title: "Community",
                items: [
                  { icon: UserGroupIcon, label: "Team", link: "#team" },
                  {
                    icon: StarIcon,
                    label: "Testimonials",
                    link: "#testimonials",
                  },
                ],
              },
              {
                title: "Support",
                items: [
                  { icon: QuestionMarkCircleIcon, label: "FAQ", link: "#faq" },
                  { icon: EnvelopeIcon, label: "Contact", link: "#contact" },
                ],
              },
            ],
          },
        ]
      : []),
    {
      label: "Rights & Terms",
      type: "dropdown",
      link: "/terms",
      columns: [
        {
          title: "Legal",
          items: [
            {
              icon: ShieldCheckIcon,
              label: "Privacy Policy",
              link: "/privacy",
            },
            {
              icon: ShieldCheckIcon,
              label: "Terms of Service",
              link: "/terms",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        .gh-nav-links {
          gap: 32px;
        }

        .gh-nav-dropdown {
          position: relative;
        }

        .gh-nav-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: #e6edf3;
          background: none;
          border: none;
        }

        .gh-nav-dropdown-trigger:hover {
          color: #58a6ff;
        }

        .gh-nav-dropdown-trigger svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s;
        }

        .gh-nav-dropdown.open .gh-nav-dropdown-trigger svg {
          transform: rotate(180deg);
        }

        .gh-nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #f6f8fa;
          border: 1px solid #d0d7de;
          border-radius: 12px;
          padding: 24px;
          margin-top: -0.5rem;
          min-width: 750px;
          display: none;
          z-index: 1000;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
          animation: slideDown 0.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gh-nav-dropdown.open .gh-nav-dropdown-menu {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .gh-dropdown-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gh-dropdown-column-title {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #57606a;
          margin-bottom: 8px;
        }

        .gh-dropdown-item {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          text-decoration: none;
          color: #24292f;
          transition: color 0.2s;
        }

        .gh-dropdown-item:hover {
          color: #0969da;
        }

        .gh-dropdown-item-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #24292f;
        }

        .gh-dropdown-item:hover .gh-dropdown-item-icon {
          color: #0969da;
        }

        .gh-dropdown-item-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
        }

        .gh-dropdown-item-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #24292f;
        }

        .gh-dropdown-item-desc {
          font-size: 0.8rem;
          color: #57606a;
          line-height: 1.4;
        }

        .gh-dropdown-item:hover .gh-dropdown-item-label {
          color: #0969da;
        }

        .gh-dropdown-item:hover .gh-dropdown-item-desc {
          color: #424a51;
          font-weight: 500;
        }

        .gh-dropdown-tags {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .gh-dropdown-tag {
          font-size: 0.65rem;
          background: #eaeef2;
          color: #0969da;
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid #d0d7de;
          font-weight: 500;
        }

        @media (max-width: 960px) {
          .gh-nav-dropdown-menu {
            min-width: 600px;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gh-nav-dropdown-menu {
            min-width: 100vw;
            left: -24px;
            grid-template-columns: 1fr;
          }

          .gh-nav-links {
            gap: 16px;
          }
        }
      `}</style>

      <nav className={`gh-nav${scrolled ? " scrolled" : ""}`}>
        <div className="gh-nav-inner">
          <a href="/" className="gh-logo">
            <img src={kiruLogo} alt="Kiru Tech" className="gh-logo-img" />
            <span className="gh-logo-text">Kiru Tech</span>
          </a>
          <ul className="gh-nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === "dropdown" ? (
                  <div
                    className={`gh-nav-dropdown${openDropdown === item.label ? " open" : ""}`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="gh-nav-dropdown-trigger">
                      {item.label}
                      <ChevronDownIcon />
                    </button>
                    <div className="gh-nav-dropdown-menu">
                      {item.columns?.map((column, idx) => (
                        <div key={idx} className="gh-dropdown-column">
                          <div className="gh-dropdown-column-title">
                            {column.title}
                          </div>
                          {column.items?.map((subitem, sidx) => {
                            const ItemIcon = (subitem as any).icon;
                            return (
                              <a
                                key={sidx}
                                href={(subitem as any).link ?? item.link}
                                className="gh-dropdown-item"
                              >
                                {ItemIcon && (
                                  <span className="gh-dropdown-item-icon">
                                    <ItemIcon className="w-5 h-5" />
                                  </span>
                                )}
                                <div className="gh-dropdown-item-content">
                                  <span className="gh-dropdown-item-label">
                                    {subitem.label}
                                  </span>
                                  {(subitem as any).desc && (
                                    <span className="gh-dropdown-item-desc">
                                      {(subitem as any).desc}
                                    </span>
                                  )}
                                  {(subitem as any).tags && (
                                    <div className="gh-dropdown-tags">
                                      {(subitem as any).tags.map(
                                        (tag: string) => (
                                          <span
                                            key={tag}
                                            className="gh-dropdown-tag"
                                          >
                                            {tag}
                                          </span>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href={`#${item.label.toLowerCase()}`}>{item.label}</a>
                )}
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
          {navItems.map((l) => (
            <li key={l.label}>
              <a
                href={l.link || `/#${l.label.toLowerCase()}`}
                onClick={() => setDrawer(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
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
