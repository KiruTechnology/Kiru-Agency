import "../../styles/navbar.css";
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
  const [drawerDropdown, setDrawerDropdown] = useState<string | null>(null);

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
      <nav className={`kiru-nav${scrolled ? " scrolled" : ""}`}>
        <div className="kiru-nav-inner">
          <a href="/" className="kiru-logo">
            <img src={kiruLogo} alt="Kiru Tech" className="kiru-logo-img" />
            <span className="kiru-logo-text">Kiru Tech</span>
          </a>
          <ul className="kiru-nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === "dropdown" ? (
                  <div
                    className={`kiru-nav-dropdown${openDropdown === item.label ? " open" : ""}`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="kiru-nav-dropdown-trigger">
                      {item.label}
                      <ChevronDownIcon />
                    </button>
                    <div className="kiru-nav-dropdown-menu">
                      {item.columns?.map((column, idx) => (
                        <div key={idx} className="kiru-dropdown-column">
                          <div className="kiru-dropdown-column-title">
                            {column.title}
                          </div>
                          {column.items?.map((subitem, sidx) => {
                            const ItemIcon = (subitem as any).icon;
                            return (
                              <a
                                key={sidx}
                                href={(subitem as any).link ?? item.link}
                                className="kiru-dropdown-item"
                              >
                                {ItemIcon && (
                                  <span className="kiru-dropdown-item-icon">
                                    <ItemIcon className="w-5 h-5" />
                                  </span>
                                )}
                                <div className="kiru-dropdown-item-content">
                                  <span className="kiru-dropdown-item-label">
                                    {subitem.label}
                                  </span>
                                  {(subitem as any).desc && (
                                    <span className="kiru-dropdown-item-desc">
                                      {(subitem as any).desc}
                                    </span>
                                  )}
                                  {(subitem as any).tags && (
                                    <div className="kiru-dropdown-tags">
                                      {(subitem as any).tags.map(
                                        (tag: string) => (
                                          <span
                                            key={tag}
                                            className="kiru-dropdown-tag"
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
          <div className="kiru-nav-right">
            <a href="#contact" className="btn-ghost">
              Sign in
            </a>
            <a href="#contact" className="btn-green">
              Start Project
            </a>
            <button
              className={`kiru-burger${drawer ? " open" : ""}`}
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
      <div className={`kiru-drawer${drawer ? " open" : ""}`}>
        <ul>
          {navItems.map((l) => (
            <li key={l.label}>
              {l.type === "dropdown" ? (
                <>
                  <button
                    onClick={() =>
                      setDrawerDropdown(
                        drawerDropdown === l.label ? null : l.label,
                      )
                    }
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid var(--border-muted)",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      transition: "color 0.15s, background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-primary)";
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--surface-2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.background =
                        "none";
                    }}
                  >
                    {l.label}
                    <ChevronDownIcon
                      style={{
                        width: 16,
                        height: 16,
                        transition: "transform 0.2s",
                        transform:
                          drawerDropdown === l.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {drawerDropdown === l.label && (
                    <div
                      style={{
                        paddingLeft: 12,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {l.columns?.map((column) =>
                        column.items?.map((subitem) => (
                          <a
                            key={(subitem as any).label}
                            href={(subitem as any).link ?? l.link}
                            onClick={() => {
                              setDrawer(false);
                              setDrawerDropdown(null);
                            }}
                            style={{
                              display: "block",
                              padding: "8px 12px",
                              fontSize: "0.85rem",
                              color: "var(--text-secondary)",
                              textDecoration: "none",
                              borderRadius: "var(--radius-sm)",
                              transition: "color 0.15s, background 0.15s",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--blue)";
                              (
                                e.currentTarget as HTMLElement
                              ).style.background = "var(--surface-2)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--text-secondary)";
                              (
                                e.currentTarget as HTMLElement
                              ).style.background = "none";
                            }}
                          >
                            {(subitem as any).label}
                          </a>
                        )),
                      )}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={l.link || `/#${l.label.toLowerCase()}`}
                  onClick={() => setDrawer(false)}
                >
                  {l.label}
                </a>
              )}
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
